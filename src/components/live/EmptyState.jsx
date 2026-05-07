// components/live/EmptyState.jsx

export default function EmptyState() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="text-center space-y-3">

        <h2 className="text-3xl font-bold text-gray-800">
          No Content Available
        </h2>

        <p className="text-gray-500">
          There are currently no live or scheduled
          sessions.
        </p>

      </div>
    </div>
  );
}