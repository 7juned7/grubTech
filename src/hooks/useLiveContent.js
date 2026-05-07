// hooks/useLiveContent.js

"use client";

import { useQuery } from "@tanstack/react-query";

import { getLiveContent } from "@/services/live.service";

export const useLiveContent = (teacherId) => {
  return useQuery({
    queryKey: ["live-content", teacherId],

    queryFn: () => getLiveContent(teacherId),

    enabled: !!teacherId,

    refetchInterval: 5000,

    staleTime: 4000,

    retry: 1,

    refetchOnWindowFocus: false,
  });
};