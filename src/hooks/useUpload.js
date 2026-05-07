"use client";

import { useState } from "react";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { uploadContent } from "@/services/content.service";

import { toast } from "sonner";

export const useUpload = (
  reset
) => {
  const [preview, setPreview] =
    useState(null);

  const queryClient =
    useQueryClient();

  const mutation = useMutation({
    mutationFn: uploadContent,

    onSuccess: (newItem) => {
      queryClient.setQueryData(
        ["content"],
        (old = []) => [
          newItem,
          ...old,
        ]
      );

      toast.success(
        "Content uploaded successfully"
      );

      reset();

      setPreview(null);
    },

    onError: () => {
      toast.error(
        "Upload failed"
      );
    },
  });

  const handleFileChange = (
    e
  ) => {
    const file =
      e.target.files?.[0];

    if (!file) return;

    const previewUrl =
      URL.createObjectURL(
        file
      );

    setPreview(previewUrl);
  };

  return {
    preview,
    handleFileChange,
    mutation,
  };
};