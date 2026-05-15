import type { TaskType } from "./task.types";

export interface TaskListProps {
  tasks: TaskType[];
  onUpdateStatus: any;
  onDelete: (id: number) => void;
  onEdit: (task: TaskType) => void;
}
