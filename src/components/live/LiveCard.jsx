// components/live/LiveCard.jsx

import Image from "next/image";

export default function LiveCard({
  content,
  compact = false,
  completed = false,
}) {
  return (
    <div
      className={`bg-[#181818] rounded-2xl overflow-hidden border border-[#2a2a2a] hover:border-[#3a3a3a] transition ${
        compact ? "max-w-md" : ""
      }`}
    >
      {/* IMAGE */}
      <div
        className={`relative w-full ${
          compact ? "aspect-[16/8]" : "aspect-video"
        }`}
      >
        <Image
          src={content.preview}
          alt={content.title}
          fill
          className="object-cover"
        />

        {/* STATUS BADGE */}
        <div
          className={`absolute top-3 left-3 text-white font-semibold rounded-full ${
            compact
              ? "text-[10px] px-2 py-1"
              : "text-xs px-3 py-1"
          } ${
            completed
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {completed ? "Completed" : "LIVE"}
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`space-y-3 ${
          compact ? "p-3" : "p-5"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3
              className={`font-bold text-white line-clamp-1 ${
                compact ? "text-lg" : "text-2xl"
              }`}
            >
              {content.title}
            </h3>

            <p
              className={`text-gray-400 mt-1 ${
                compact ? "text-xs" : "text-sm"
              }`}
            >
              {content.subject}
            </p>
          </div>

          {!completed && (
            <span
              className={`font-medium bg-[#2a2a2a] text-gray-300 rounded-full whitespace-nowrap ${
                compact
                  ? "text-[10px] px-2 py-1"
                  : "text-xs px-3 py-1"
              }`}
            >
              Live
            </span>
          )}
        </div>

        <p
          className={`text-gray-300 line-clamp-2 ${
            compact
              ? "text-sm leading-5"
              : "leading-relaxed"
          }`}
        >
          {content.description}
        </p>

        <div
          className={`flex flex-col gap-1 text-gray-400 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          <p>
            Start:{" "}
            {new Date(
              content.startTime
            ).toLocaleString()}
          </p>

          <p>
            End:{" "}
            {new Date(
              content.endTime
            ).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}