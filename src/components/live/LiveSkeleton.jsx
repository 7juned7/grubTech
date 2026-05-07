// components/live/LiveSkeleton.jsx

export default function LiveSkeleton() {
  return (
    <div className="space-y-6">

      {[1, 2].map((item) => (
        <div
          key={item}
          className="bg-white rounded-2xl shadow-sm overflow-hidden border animate-pulse"
        >

          <div className="h-56 bg-gray-200" />

          <div className="p-6 space-y-4">

            <div className="h-7 w-1/2 bg-gray-200 rounded" />

            <div className="h-4 w-full bg-gray-200 rounded" />

            <div className="h-4 w-3/4 bg-gray-200 rounded" />

            <div className="flex justify-between">
              <div className="h-4 w-32 bg-gray-200 rounded" />

              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}