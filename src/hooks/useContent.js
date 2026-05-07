"use client";

import { useQuery } from "@tanstack/react-query";
import { getTeacherContent } from "@/services/content.service";

export const useContent = (
  page,
  limit,
  filter = "all"
) => {
  return useQuery({
    queryKey: ["content", page, limit, filter],

    queryFn: () =>
      getTeacherContent(page, limit, filter),

    keepPreviousData: true,
  });
};