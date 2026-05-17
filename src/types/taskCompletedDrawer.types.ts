import type { TaskActions, TaskType } from "./task.types";

export interface TaskCompletedDrawerProps extends TaskActions {
  completedTasks: TaskType[];
  show: boolean;
  setShow: (value: boolean) => void;
  onClear: () => void;
}
