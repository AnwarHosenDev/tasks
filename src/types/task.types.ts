export type TaskStatus = "Pending" | "In Progress" | "Completed";
export type TaskFilter = "All" | TaskStatus;

export interface TaskType {
  id: string;

  title: string;
  description: string;

  status: TaskStatus;

  createdAt: number;
  updatedAt: number;

  deleted?: boolean;
}

export interface TaskActions {
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
  onEdit: (task: TaskType) => void;
}
