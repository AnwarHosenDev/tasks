import { TaskFilters } from "./TaskFilters";
import { ToggleTheme } from "@/components/ToggleTheme";
import type { TaskHeaderProps } from "@/types/taskHeader.types";

export function TaskHeader({
  theme,
  toggleTheme,
  filters,
  activeFilter,
  setFilter,
}: TaskHeaderProps) {
  return (
    // Task Header Container
    <div className="px-4 pt-4 pb-3 border-b border-border">
      <div className="flex items-center justify-between">
        {/* Task Header Title and Description */}
        <div>
          <h1 className="text-lg font-semibold text-secondary">Tasks</h1>
          <p className="text-xs text-muted">Manage your workflow</p>
        </div>

        {/* Toggle Theme */}
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Task Filters */}
      <div className="mt-3">
        <TaskFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setFilter}
        />
      </div>
    </div>
  );
}
