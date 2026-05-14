export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskFilter = "All" | "Pending" | "In Progress";

export interface TaskProps {
  task: TaskType;
  onUpdateStatus: (id: number, status: TaskStatus) => void;
}
