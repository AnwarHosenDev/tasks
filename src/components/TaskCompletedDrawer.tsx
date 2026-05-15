import { TaskItem } from "./TaskItem";
import { ChevronUp } from "lucide-react";
import type { TaskCompletedDrawerProps } from "@/types/taskCompletedDrawer.types";

export function TaskCompletedDrawer({
  completedTasks,
  show,
  setShow,
  onClear,
  onUpdateStatus,
  onDelete,
  onEdit,
}: TaskCompletedDrawerProps) {
  if (!completedTasks.length) return null;

  return (
    // Task Completed Drawer Container
    <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-primary/95 backdrop-blur-xl">
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Toggle Completed Tasks */}
        <button
          onClick={() => setShow(!show)}
          className="flex items-center gap-2 active:scale-[0.98] transition"
        >
          <span className="text-sm font-medium text-secondary">Completed</span>

          <span className="rounded-full bg-surface px-2 py-0.5 text-xs text-muted">
            {completedTasks.length}
          </span>

          <ChevronUp
            size={16}
            className={`transition-transform duration-300 ${
              show ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Clear All Completed Tasks */}
        <button
          onClick={onClear}
          className="text-xs text-muted active:scale-95 transition"
        >
          Clear all
        </button>
      </div>

      {/* Completed Tasks List Container */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${show ? "max-h-64" : "max-h-0"}
        `}
      >
        {/* Completed Tasks List */}
        <div className="px-3 pb-3 space-y-2 overflow-y-auto max-h-64">
          {/* Completed Tasks */}
          {completedTasks.map((t) => (
            <TaskItem
              key={t.id}
              task={t}
              onUpdateStatus={onUpdateStatus}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
