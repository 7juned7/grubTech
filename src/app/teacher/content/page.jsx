"use client";

import { useState } from "react";
import { useContent } from "@/hooks/useContent";
import ContentTable from "@/components/dashboard/ContentTable";
import Pagination from "@/components/common/Pagination";

export default function MyContentPage() {
  const [page, setPage] = useState(1);
  const limit = 5;

  const { data, isLoading, error } = useContent(page, limit);

  const current = data?.data || [];

  if (isLoading) return <p>Loading content...</p>;

  if (error)
    return <p className="text-red-500">{error.message}</p>;

  if (!current.length)
    return <p>No content available</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Content</h1>

      <ContentTable data={current} showPreview />

      {/* Pagination */}
      {(data?.totalPages || 0) > 1 && (
  <Pagination
    page={page}
    totalPages={data?.totalPages || 1}
    onPageChange={setPage}
  />
)}
    </div>
  );
}