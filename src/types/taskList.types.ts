import type { TaskActions, TaskType } from "./task.types";

export interface TaskListProps extends TaskActions {
  tasks: TaskType[];
}
