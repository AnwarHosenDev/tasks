import { TaskItem } from "./TaskItem";
import type { TaskListProps } from "@/types/taskList.types";

export function TaskList({
  tasks,
  onUpdateStatus,
  onDelete,
  onEdit,
}: TaskListProps) {
  return (
    // Task List Container
    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
      {/* Task Items */}
      {tasks.map((t) => (
        // Task Item
        <TaskItem
          key={t.id}
          task={t}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
