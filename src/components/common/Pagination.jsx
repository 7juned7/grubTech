"use client";

import { Button } from "@/components/ui/button";

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1)
    return null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-t">

      <p className="text-sm text-muted-foreground">
        Page {page} of{" "}
        {totalPages}
      </p>

      <div className="flex flex-wrap items-center gap-2 justify-center">

        {/* Prev */}
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() =>
            onPageChange(
              page - 1
            )
          }
          className="
            cursor-pointer
          "
        >
          Prev
        </Button>

        {/* Numbers */}
        {Array.from({
          length: totalPages,
        }).map((_, i) => (
          <Button
            key={i}
            size="icon"
            variant={
              page === i + 1
                ? "default"
                : "outline"
            }
            onClick={() =>
              onPageChange(
                i + 1
              )
            }
            className="
              cursor-pointer
            "
          >
            {i + 1}
          </Button>
        ))}

        {/* Next */}
        <Button
          variant="outline"
          disabled={
            page === totalPages
          }
          onClick={() =>
            onPageChange(
              page + 1
            )
          }
          className="
            cursor-pointer
          "
        >
          Next
        </Button>

      </div>
    </div>
  );
}