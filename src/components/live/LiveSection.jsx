// components/live/LiveSection.jsx

import LiveCard from "./LiveCard";

export default function LiveSection({ data }) {

  // EMPTY PLACEHOLDER
  if (!data?.length) {
    return (
      <section className="space-y-4">

        <div>
          <h2 className="text-2xl font-bold text-red-500">
            🔴 Live Now
          </h2>

          <p className="text-sm text-gray-400">
            Currently streaming sessions
          </p>
        </div>

        <div className="bg-[#181818] border border-[#2a2a2a] rounded-2xl h-[420px] flex items-center justify-center">

          <div className="text-center space-y-3">

            <div className="text-6xl">
              📡
            </div>

            <h3 className="text-2xl font-semibold text-white">
              No Live Session
            </h3>

            <p className="text-gray-400 max-w-md">
              There are currently no active live
              sessions. Please check upcoming
              sessions for scheduled content.
            </p>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="space-y-4 min-w-0">

      <div>
        <h2 className="text-2xl font-bold text-red-500">
          🔴 Live Now
        </h2>

        <p className="text-sm text-gray-400">
          Currently streaming sessions
        </p>
      </div>

      {/* SCROLL AREA */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

        {data.map((item) => (
          <div
            key={item.id}
            className="w-[650px] flex-shrink-0"
          >
            <LiveCard content={item} />
          </div>
        ))}

      </div>

    </section>
  );
}