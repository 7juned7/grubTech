
export function FormField({
  label,
  error,
  children,
}) {
  return (
    <div className="space-y-1.5">
      
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative pb-5">
        
        {children}

        <p
          className={`absolute left-0 top-full text-xs text-red-500 transition-opacity ${
            error
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          {error || "placeholder"}
        </p>

      </div>
    </div>
  );
}
