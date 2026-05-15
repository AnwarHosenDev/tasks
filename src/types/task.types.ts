import type { LucideIcon } from "lucide-react";

export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface TaskType {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskFilter = "All" | TaskStatus;

export interface TaskItemProps {
  task: TaskType;
  onUpdateStatus: (id: number, s: TaskStatus) => void;
  onDelete: (id: number) => void;
  onEdit: (task: TaskType) => void;
}

export type StatusConfig = Record<
  TaskStatus,
  { action: TaskStatus; icon: LucideIcon }
>;

export interface UseTaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  activeFilter: TaskFilter;
}

export interface TaskInputProps {
  openInputCard: boolean;
  onClose: () => void;
  onSubmit: (title: string, desc: string) => void;
  editingTask: TaskType | null;
}
