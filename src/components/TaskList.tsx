import { ClipboardList } from "lucide-react";
import { TaskItem } from "./TaskItem";
import type { TaskListProps } from "@/types/taskList.types";

export function TaskList({
  tasks,
  onUpdateStatus,
  onDelete,
  onEdit,
}: TaskListProps) {
  return tasks.length > 0 ? (
    // Task List Container
    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
      {/* Task Items */}
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  ) : (
    // Empty list
    <div className="text-muted flex flex-1 flex-col items-center justify-center gap-1 -mt-30 pointer-events-none">
      <ClipboardList size={32} />
      <div className="text-sm font-semibold">No task available!</div>
      <div className="max-w-xs text-xs leading-relaxed">
        Click the + icon below to add one
      </div>
    </div>
  );
}
