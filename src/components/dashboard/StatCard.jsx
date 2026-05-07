// components/dashboard/StatCard.jsx

export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
      
      <div className="flex items-start justify-between">
        
        {/* TEXT */}
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            {value}
          </h3>
        </div>

        {/* ICON */}
        <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
          {icon}
        </div>

      </div>
    </div>
  );
}