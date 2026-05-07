"use client";

import { useState } from "react";
import { useApproval } from "@/hooks/useApproval";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TableControls from "./TableControls";
export default function ContentTable({
  data,
  showPreview = false,
  isPrincipal = false,
}) {

  const { approveMutation, rejectMutation } = useApproval();
const [filter, setFilter] = useState("all");
const [search, setSearch] = useState("");
  const [rejectId, setRejectId] = useState(null);
  const [reason, setReason] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  if (!data?.length) {
    return (
      <div className="text-center py-10 text-gray-400">
        <p className="text-lg">No content found</p>
        <p className="text-sm">Try uploading content</p>
      </div>
    );
  }
const filteredData = data.filter((item) => {
  const matchStatus =
    filter === "all" || item.status === filter;

  const matchSearch =
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subject.toLowerCase().includes(search.toLowerCase());

  return matchStatus && matchSearch;
});

  const formatTime = (time) =>
    new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <Card className="border shadow-sm">
      
      <CardContent className="p-4">
         <TableControls
      search={search}
      setSearch={setSearch}
      filter={filter}
      setFilter={setFilter}
    />
     <div className="overflow-x-auto">

        <table className="w-full text-sm table-fixed border-collapse">
          
          {/* HEADER */}
          <thead className="bg-muted text-muted-foreground uppercase text-xs">
            <tr>
              {isPrincipal && <th className="p-3 w-[140px] text-left">Actions</th>}
              {showPreview && <th className="p-3 w-[100px] text-center">THUMBNAIL</th>}
              <th className="p-3 w-[180px] text-left">Title</th>
              <th className="p-3 w-[120px] text-left">Subject</th>
              <th className="p-3 w-[100px] text-center">Status</th>
              <th className="p-3 w-[100px] text-center">Start</th>
              <th className="p-3 w-[100px] text-center">End</th>
              <th className="p-3 w-[160px] text-left">Reason</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
           {filteredData.map((item) => ( 
              <tr
                key={item.id}
                className="border-t hover:bg-muted/50 transition-all"
              >
                {/* ACTIONS */}
                {isPrincipal && (
                  <td className="p-3">
                    {item.status === "pending" ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          disabled={loadingId === item.id}
                          onClick={() => {
                            setLoadingId(item.id);
                            approveMutation.mutate(item.id, {
                              onSettled: () => setLoadingId(null),
                            });
                          }}
                        >
                          {loadingId === item.id ? "..." : "Approve"}
                        </Button>

                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setRejectId(item.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        —
                      </span>
                    )}
                  </td>
                )}

                
                {/* PREVIEW */}
{showPreview && (
  <td className="p-3">
    <div className="flex justify-center">
      
      {item.preview ? (
        <div className="relative group">
          
          <img
            src={item.preview}
            alt="preview"
            className="w-20 h-14 object-cover rounded-xl border border-gray-200 shadow-sm transition group-hover:scale-105"
          />

          {/* HOVER OVERLAY */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-center justify-center">
            <span className="text-[10px] text-white font-medium">
              Preview
            </span>
          </div>

        </div>
      ) : (
        <div className="w-20 h-14 bg-muted border rounded-xl flex items-center justify-center text-[10px] text-muted-foreground">
          No Image
        </div>
      )}

    </div>
  </td>
)}

                {/* TITLE */}
                <td className="p-3 font-medium truncate">
                  {item.title}
                </td>

                {/* SUBJECT */}
                <td className="p-3 text-muted-foreground truncate">
                  {item.subject}
                </td>

                {/* STATUS */}
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      item.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                {/* TIME */}
                <td className="p-3 text-center text-muted-foreground">
                  {formatTime(item.startTime)}
                </td>

                <td className="p-3 text-center text-muted-foreground">
                  {formatTime(item.endTime)}
                </td>

                {/* REASON */}
                <td className="p-3 text-muted-foreground truncate">
                  {item.rejectionReason || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
    
      </CardContent>

      {/* REJECT MODAL */}
      {rejectId && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <Card className="w-[350px] animate-in fade-in zoom-in">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold">
                Reject Content
              </h2>

              <input
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason..."
                className="w-full border rounded-md p-2 focus:ring-2 focus:ring-black outline-none"
              />

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setRejectId(null);
                    setReason("");
                  }}
                >
                  Cancel
                </Button>

                <Button
                  variant="destructive"
                  disabled={
                    !reason.trim() || rejectMutation.isPending
                  }
                  onClick={() =>
                    rejectMutation.mutate(
                      { id: rejectId, reason },
                      {
                        onSuccess: () => {
                          setRejectId(null);
                          setReason("");
                        },
                      }
                    )
                  }
                >
                  {rejectMutation.isPending ? "..." : "Reject"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}