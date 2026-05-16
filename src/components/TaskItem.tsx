import { useState } from "react";
import type { StatusConfig, TaskItemProps } from "@/types/task.types";
import { Play, Check, RotateCcw, Trash, Pencil } from "lucide-react";

const statusConfig: StatusConfig = {
  Pending: {
    action: "In Progress",
    icon: Play,
  },

  "In Progress": {
    action: "Completed",
    icon: Check,
  },

  Completed: {
    action: "Pending",
    icon: RotateCcw,
  },
};

export function TaskItem({
  task,
  onUpdateStatus,
  onDelete,
  onEdit,
}: TaskItemProps) {
  // Extend/Collapse Task Card State
  const [extendCard, setExtendCard] = useState<boolean>(false);

  // Config based based on task status
  const config = statusConfig[task.status];
  const ActionIcon = config.icon; // Icon Component

  return (
    // Task Card Container
    <div
      onClick={() => setExtendCard((v) => !v)}
      className="
        relative rounded-3xl border border-border bg-surface
        px-4 py-3 transition-all duration-200 active:scale-[0.98]
      "
    >
      {/* Task Card */}
      <div className="flex items-start justify-between gap-3">
        {/* Left Side */}
        <div className="flex items-start gap-3 min-w-0 flex-1">
          {/* STATUS INDICATOR */}
          <div
            className={`
              mt-1 h-2.5 w-2.5 rounded-full shrink-0
              ${
                task.status === "Pending"
                  ? "bg-yellow-400"
                  : task.status === "In Progress"
                  ? "bg-blue-400"
                  : "bg-green-400"
              }
            `}
          ></div>

          {/* CONTENT */}
          <div className="min-w-0">
            <div
              className={`
                text-sm font-semibold leading-snug

                ${
                  task.status === "Completed"
                    ? "text-muted line-through opacity-70"
                    : "text-secondary"
                }
              `}
            >
              {task.title}
            </div>

            {task.description && (
              <div className="mt-1 text-xs leading-relaxed text-muted">
                {task.description}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Status chip */}
      <span className="absolute top-3 right-3 rounded-full bg-primary px-2 py-1 text-[10px] text-muted">
        {task.status}
      </span>

      {/* Action Buttons */}
      <div
        className={`flex justify-end gap-2 overflow-hidden transition-all duration-200 ease-out mt-2 ${
          extendCard ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex gap-2">
          {/* Delete Task */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }}
            className="rounded-full bg-red-500/15 p-2 text-red-400 active:scale-95 transition"
          >
            <Trash size={14} />
          </button>

          {/* Edit Task */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(task);
            }}
            className="rounded-full bg-primary p-2 text-secondary active:scale-95 transition"
          >
            <Pencil size={14} />
          </button>

          {/* Change Task Status */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onUpdateStatus(task.id, config.action);
            }}
            className="rounded-full bg-primary p-2 text-secondary active:scale-95 transition"
          >
            <ActionIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
