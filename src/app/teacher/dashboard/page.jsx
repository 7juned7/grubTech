"use client";

import { useState } from "react";
import ContentTable from "@/components/dashboard/ContentTable";
import { useContent } from "@/hooks/useContent";
import { getStats } from "@/utils/helpers";
import StatCard from "@/components/dashboard/StatCard";
import Pagination from "@/components/common/Pagination";
import { Card, CardContent } from "@/components/ui/card";
import TableSkeleton from "@/components/common/TableSkeleton";
import {
  CheckCircle,
  Clock,
  XCircle,
  Layers,
} from "lucide-react";

export default function TeacherDashboard() {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, error } = useContent(page, limit);

  // actual array
  const current = data?.data || [];

  // ✅ Loading UI
  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
        <TableSkeleton />
      </div>
    );
  }

  // ✅ Error
  if (error) {
    return (
      <p className="text-red-500 text-center mt-10">
        {error.message}
      </p>
    );
  }

  // ✅ Empty
  if (!current.length) {
    return (
      <div className="text-center mt-10 text-gray-400">
        <p className="text-lg">No content yet</p>
        <p className="text-sm">Upload content to get started</p>
      </div>
    );
  }

  const stats = getStats(current);

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">
          Teacher Dashboard
        </h1>
        <p className="text-muted-foreground text-sm">
          Overview of your uploaded content
        </p>
      </div>

      {/* Stats */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  
  <StatCard
    title="Total"
    value={data?.total || 0}
    icon={
      <Layers className="w-5 h-5 text-blue-500" />
    }
  />

  <StatCard
    title="Pending"
    value={stats.pending}
    icon={
      <Clock className="w-5 h-5 text-yellow-500" />
    }
  />

  <StatCard
    title="Approved"
    value={stats.approved}
    icon={
      <CheckCircle className="w-5 h-5 text-green-500" />
    }
  />

  <StatCard
    title="Rejected"
    value={stats.rejected}
    icon={
      <XCircle className="w-5 h-5 text-red-500" />
    }
  />

</div>

      {/* Table */}
      <Card className="border shadow-sm">
        <CardContent className="p-4">
          <ContentTable data={current} showPreview />
        </CardContent>

        {/* Pagination */}
        <Pagination
          page={page}
          totalPages={data?.totalPages || 1}
          onPageChange={setPage}
        />
      </Card>
    </div>
  );
}