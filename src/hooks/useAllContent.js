"use client";

import { useQuery } from "@tanstack/react-query";

import { getAllContent } from "@/services/approval.service";

export const useAllContent = (
  page,
  limit
) => {
  return useQuery({
    queryKey: ["all-content", page, limit],

    queryFn: () =>
      getAllContent(page, limit),

    keepPreviousData: true,
  });
};