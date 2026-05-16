import { useState } from "react";
import { TaskFilters } from "./TaskFilters";
import { AppDrawer } from "@/components/AppDrawer";
import { Menu } from "lucide-react";
import type { TaskHeaderProps } from "@/types/taskHeader.types";

export function TaskHeader({
  theme,
  toggleTheme,
  filters,
  activeFilter,
  setFilter,
}: TaskHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 pt-4 pb-3">
      <div className="flex items-center justify-between">
        {/* Title */}
        <div>
          <h1 className="text-lg font-semibold text-secondary">Tasks</h1>
          <p className="text-xs text-muted">Manage your workflow</p>
        </div>

        {/* 3-dot menu */}
        <button onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
      </div>

      {/* Filters */}
      <div className="mt-3">
        <TaskFilters
          filters={filters}
          activeFilter={activeFilter}
          onChange={setFilter}
        />
      </div>

      {/* Drawer */}
      <AppDrawer
        open={open}
        onClose={() => setOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}
