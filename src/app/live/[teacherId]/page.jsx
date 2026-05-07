"use client";

import { useParams } from "next/navigation";

import { useLiveContent } from "@/hooks/useLiveContent";

import LiveSection from "@/components/live/LiveSection";
import UpcomingSection from "@/components/live/UpcomingSection";
import CompletedSection from "@/components/live/CompletedSection";

import EmptyState from "@/components/live/EmptyState";
import LiveSkeleton from "@/components/live/LiveSkeleton";

export default function LivePage() {
  const params = useParams();

  const teacherId = Array.isArray(params.teacherId)
    ? params.teacherId[0]
    : params.teacherId;

  if (!teacherId) {
    return <EmptyState />;
  }

  const { data, isLoading, isError } =
    useLiveContent(teacherId);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <LiveSkeleton />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-sm md:text-base">
          Failed to load content
        </p>
      </div>
    );
  }

  const isEmpty =
    !data?.live?.length &&
    !data?.upcoming?.length &&
    !data?.completed?.length;

  if (isEmpty) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

  <div className="max-w-[1600px] mx-auto p-4">

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">

      {/* LEFT */}
      <div className="space-y-6 min-w-0 overflow-hidden">
  <LiveSection data={data.live} />
</div>

      {/* RIGHT */}
      <div className=" overflow-y-auto pr-1">
        <UpcomingSection data={data.upcoming} />
      </div>

    </div>

    <div className="mt-10">
      <CompletedSection data={data.completed} />
    </div>

  </div>
</div>
  );
}