import type { LucideIcon } from "lucide-react";
import type { TaskActions, TaskStatus, TaskType } from "./task.types";

export type StatusConfig = Record<
  TaskStatus,
  { action: TaskStatus; icon: LucideIcon }
>;

export interface TaskItemProps extends TaskActions {
  task: TaskType;
}
