import type { TaskType } from "./task.types";

export interface TaskCompletedDrawerProps {
  completedTasks: TaskType[];
  show: boolean;
  setShow: (v: boolean) => void;
  onClear: () => void;
  onUpdateStatus: any;
  onDelete: (id: number) => void;
  onEdit: (task: TaskType) => void;
}
