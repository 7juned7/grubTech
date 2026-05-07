"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  approveContent,
  rejectContent,
} from "@/services/approval.service";

export const useApproval = () => {
  const queryClient = useQueryClient();

  const refreshQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ["all-content"],
    });

    queryClient.invalidateQueries({
      queryKey: ["content"],
    });

    queryClient.invalidateQueries({
      queryKey: ["live-content"],
    });
  };

  const approveMutation = useMutation({
    mutationFn: approveContent,

    onSuccess: refreshQueries,
  });

  const rejectMutation = useMutation({
    mutationFn: ({ id, reason }) =>
      rejectContent(id, reason),

    onSuccess: refreshQueries,
  });

  return {
    approveMutation,
    rejectMutation,
  };
};