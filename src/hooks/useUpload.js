"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadContent } from "@/services/content.service";
import { toast } from "sonner";
import { fileToBase64 } from "@/utils/helpers";

export const useUpload = (reset) => {
  const [preview, setPreview] = useState(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: uploadContent,
    onSuccess: (newItem) => {
  queryClient.setQueryData(["content"], (old = []) => [
    newItem,
    ...old,
  ]);

  toast.success("Content uploaded successfully");
  reset();
  setPreview(null);
},
    onError: () => {
      toast.error("Upload failed");
    },
  });

  const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (file) {
    const base64 = await fileToBase64(file);
    setPreview(base64); // 🔥 FIX
  }
};

  return {
    preview,
    handleFileChange,
    mutation,
  };
};