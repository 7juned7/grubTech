"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useUpload } from "@/hooks/useUpload";

import { z } from "zod";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { FormField } from "@/utils/formFields";
import { Button } from "../ui/button";

const schema = z
  .object({
    title: z.string().min(1, "Title required"),

    subject: z.string().min(1, "Subject required"),

    description: z.string().optional(),

    file: z
      .any()
      .refine(
        (file) => file?.length === 1,
        "Please upload a file"
      )
      .refine(
        (file) =>
          [
            "image/jpeg",
            "image/png",
            "image/gif",
          ].includes(file?.[0]?.type),
        "Only JPG, PNG & GIF allowed"
      )
      .refine(
        (file) =>
          file?.[0]?.size <=
          10 * 1024 * 1024,
        "File size should be under 10MB"
      ),

    startTime: z
      .string()
      .min(1, "Start time required"),

    endTime: z
      .string()
      .min(1, "End time required"),

    rotation: z.string().optional(),
  })
  .refine(
    (data) =>
      new Date(data.endTime) >
      new Date(data.startTime),
    {
      message:
        "End time must be after start time",
      path: ["endTime"],
    }
  );

export default function UploadForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const {
    preview,
    handleFileChange,
    mutation,
  } = useUpload(reset);

  const onSubmit = async (data) => {
    await mutation.mutateAsync(data);
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb] p-4 lg:p-6">
      
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm"
      >
        
        <div className="grid lg:grid-cols-[1fr_340px]">
          
          {/* LEFT */}
          <div className="p-5 lg:p-7 space-y-5">
            
            {/* HEADER */}
            <div className="flex items-start justify-between gap-4">
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Upload Session
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Create and schedule live class content
                </p>
              </div>

              
            </div>

            {/* TITLE + SUBJECT */}
            <div className="grid md:grid-cols-2 gap-4">
              
              <FormField
                label="Session Title"
                error={
                  errors.title?.message
                }
              >
                <Input
                  {...register("title")}
                  placeholder="Physics Marathon"
                  className={`
                    h-12
                    rounded-2xl
                    border-gray-200
                    shadow-sm
                    focus-visible:ring-2
                    focus-visible:ring-black/5
                    ${
                      errors.title
                        ? "border-red-300"
                        : ""
                    }
                  `}
                />
              </FormField>

              <FormField
                label="Subject"
                error={
                  errors.subject?.message
                }
              >
                <Input
                  {...register("subject")}
                  placeholder="Physics"
                  className={`
                    h-12
                    rounded-2xl
                    border-gray-200
                    shadow-sm
                    focus-visible:ring-2
                    focus-visible:ring-black/5
                    ${
                      errors.subject
                        ? "border-red-300"
                        : ""
                    }
                  `}
                />
              </FormField>

            </div>

            {/* DESCRIPTION */}
            <FormField label="Description">
              
              <Textarea
                {...register(
                  "description"
                )}
                placeholder="Write short session overview..."
                className="
                  min-h-[110px]
                  rounded-2xl
                  border-gray-200
                  bg-gray-50
                  resize-none
                  shadow-sm
                  focus-visible:ring-2
                  focus-visible:ring-black/5
                "
              />

            </FormField>

            {/* TIME */}
            <div className="grid md:grid-cols-2 gap-4">
              
              <FormField
                label="Start Time"
                error={
                  errors.startTime
                    ?.message
                }
              >
                <Input
                  type="datetime-local"
                  {...register(
                    "startTime"
                  )}
                  className={`
                    h-12
                    rounded-2xl
                    border-gray-200
                    shadow-sm
                    focus-visible:ring-2
                    focus-visible:ring-black/5
                    ${
                      errors.startTime
                        ? "border-red-300"
                        : ""
                    }
                  `}
                />
              </FormField>

              <FormField
                label="End Time"
                error={
                  errors.endTime
                    ?.message
                }
              >
                <Input
                  type="datetime-local"
                  {...register(
                    "endTime"
                  )}
                  className={`
                    h-12
                    rounded-2xl
                    border-gray-200
                    shadow-sm
                    focus-visible:ring-2
                    focus-visible:ring-black/5
                    ${
                      errors.endTime
                        ? "border-red-300"
                        : ""
                    }
                  `}
                />
              </FormField>

            </div>

            {/* ROTATION */}
            <FormField
              label="Thumbnail Rotation"
              error={
                errors.rotation?.message
              }
            >
              <Input
                {...register(
                  "rotation"
                )}
                placeholder="30 seconds"
                className={`
                  h-12
                  rounded-2xl
                  border-gray-200
                  shadow-sm
                  focus-visible:ring-2
                  focus-visible:ring-black/5
                  ${
                    errors.rotation
                      ? "border-red-300"
                      : ""
                  }
                `}
              />
            </FormField>

            {/* SUBMIT */}
            <div className="pt-2">
              
             <Button
  type="submit"
  disabled={
    mutation.isPending
  }
  size="lg"
  className="
    w-full
    h-12
    rounded-2xl
    font-semibold
    cursor-pointer
  "
>
  {mutation.isPending
    ? "Uploading..."
    : "Publish Session"}
</Button>

            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="border-t lg:border-l lg:border-t-0 border-gray-200 bg-[#fafafa] p-5 lg:p-6 space-y-5">
            
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Thumbnail Preview
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Upload a clean engaging cover image
              </p>
            </div>

            {/* PREVIEW */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-dashed border-gray-300 bg-gray-100 flex items-center justify-center">
              
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center px-6">
                  
                  <div className="text-4xl mb-3">
                    🖼️
                  </div>

                  <p className="text-sm text-gray-700">
                    No thumbnail selected
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG or GIF
                  </p>

                </div>
              )}
            </div>

            {/* FILE INPUT */}
            <FormField
              label="Upload Thumbnail"
              error={
                errors.file?.message
              }
            >
              <Input
                type="file"
                {...register("file", {
                  onChange:
                    handleFileChange,
                })}
                className={`
                  h-12
                  rounded-2xl
                  border-gray-200
                  shadow-sm
                  focus-visible:ring-2
                  focus-visible:ring-black/5
                   cursor-pointer
                  ${
                    errors.file
                      ? "border-red-300"
                      : ""
                  }
                `}
              />
            </FormField>

            {/* INFO */}
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4 space-y-3">
              
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Recommended
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  1280 × 720 thumbnail works best
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Max File Size
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Upload files under 10MB
                </p>
              </div>

            </div>

          </div>
        </div>
      </form>
    </div>
  );
}