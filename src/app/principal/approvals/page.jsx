"use client";

import {
  useState,
  useEffect,
} from "react";

import ContentTable from "@/components/dashboard/ContentTable";

import Pagination from "@/components/common/Pagination";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  CheckCircle,
  Clock,
  XCircle,
  Layers,
} from "lucide-react";

import { useAllContent } from "@/hooks/useAllContent";
import StatCard from "@/components/dashboard/StatCard";

export default function ApprovalsPage() {
  const [page, setPage] =
    useState(1);

  const [filter, setFilter] =
    useState("all");

  const limit = 5;

  /* =========================
     GET ALL DATA
  ========================= */

  const {
    data,
    isLoading,
    error,
  } = useAllContent();

  /* =========================
     RESET PAGE ON FILTER
  ========================= */

  useEffect(() => {
    setPage(1);
  }, [filter]);

  if (isLoading) {
    return (
      <p className="text-center mt-10">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500">
        {error.message}
      </p>
    );
  }

  /* =========================
     ALL DATA
  ========================= */

  const allData =
    data?.allData || [];

  /* =========================
     FILTER FIRST
  ========================= */

  const filteredData =
    filter === "all"
      ? allData
      : allData.filter(
          (item) =>
            item.status ===
            filter
        );

  /* =========================
     PAGINATE AFTER FILTER
  ========================= */

  const start =
    (page - 1) * limit;

  const current =
    filteredData.slice(
      start,
      start + limit
    );

  const totalPages =
    Math.ceil(
      filteredData.length /
        limit
    );

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Content Approvals
          </h1>

          <p className="text-muted-foreground text-sm">
            Review and manage uploaded
            content
          </p>
        </div>

        {/* FILTERS */}
       
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <StatCard
        title="Total"
          icon={
            <Layers className="w-5 h-5" />
          }
          label="Total"
          value={allData.length}
        />

        <StatCard
        title="Pending"
          icon={
            <Clock className="w-5 h-5 text-yellow-500" />
          }
          label="Pending"
          value={
            allData.filter(
              (i) =>
                i.status ===
                "pending"
            ).length
          }
        />

        <StatCard
        title="Approved"
          icon={
            <CheckCircle className="w-5 h-5 text-green-500" />
          }
          label="Approved"
          value={
            allData.filter(
              (i) =>
                i.status ===
                "approved"
            ).length
          }
        />

        <StatCard
        title="Rejected"
          icon={
            <XCircle className="w-5 h-5 text-red-500" />
          }
          label="Rejected"
          value={
            allData.filter(
              (i) =>
                i.status ===
                "rejected"
            ).length
          }
        />
      </div>

      {/* TABLE */}
      <Card className="shadow-sm border">
        
        <CardContent className="p-2 md:p-4">
          
          <div className="overflow-x-auto">
            <ContentTable
              data={current}
              isPrincipal
              showPreview
            />
          </div>
        </CardContent>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="p-4">
            
            <Pagination
              page={page}
              totalPages={
                totalPages
              }
              onPageChange={
                setPage
              }
            />
          </div>
        )}
      </Card>
    </div>
  );
}


