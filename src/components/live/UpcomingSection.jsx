// components/live/UpcomingSection.jsx

import Image from "next/image";

export default function UpcomingSection({ data }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-white">
          Upcoming Sessions
        </h2>

        <p className="text-sm text-gray-400">
          Scheduled future sessions
        </p>
      </div>

      {/* EMPTY PLACEHOLDER */}
      {!data?.length ? (
        <div className="bg-[#181818] border border-dashed border-[#2a2a2a] rounded-2xl p-10 text-center">
          <div className="text-5xl mb-3">
            📅
          </div>

          <h3 className="text-white font-semibold text-lg">
            No Upcoming Sessions
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            Future scheduled live sessions
            will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 bg-[#181818] rounded-xl overflow-hidden hover:bg-[#222222] transition cursor-pointer"
            >
              {/* LEFT IMAGE */}
              <div className="relative w-40 h-24 flex-shrink-0">
                <Image
                  src={item.preview}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 py-2 pr-3 min-w-0">
                <h3 className="text-sm font-semibold text-white line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {item.subject}
                </p>

                <p className="text-xs text-gray-500 mt-3">
                  Starts:
                </p>

                <p className="text-xs text-gray-300">
                  {new Date(
                    item.startTime
                  ).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}