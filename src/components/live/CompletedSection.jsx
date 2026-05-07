// components/live/CompletedSection.jsx

import LiveCard from "./LiveCard";

export default function CompletedSection({ data }) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-green-600">
          ✅ Completed Sessions
        </h2>

        <p className="text-sm text-gray-500">
          Previously completed sessions
        </p>
      </div>

      {/* EMPTY PLACEHOLDER */}
      {!data?.length ? (
        <div className="bg-[#181818] border border-dashed border-[#2a2a2a] rounded-2xl p-10 text-center">
          <div className="text-5xl mb-3">
            🎉
          </div>

          <h3 className="text-white font-semibold text-lg">
            No Completed Sessions
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            Completed live sessions
            will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="scale-[0.95] origin-top"
            >
              <LiveCard
                content={item}
                compact
                completed
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}