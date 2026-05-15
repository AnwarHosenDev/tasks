import type { TaskFilterProps } from "@/types/taskFilter.types";

export function TaskFilters({
  filters,
  activeFilter,
  onChange,
}: TaskFilterProps) {
  return (
    // Filter Buttons
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {filters.map((filter) => (
        // Filter Button
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`
            whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium
            transition-all duration-200 ease-out
            active:scale-95
            ${
              activeFilter === filter
                ? "bg-secondary text-primary"
                : "bg-surface text-muted hover:bg-surface-hover"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
