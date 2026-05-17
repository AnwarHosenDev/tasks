import type { TaskType, TaskFilter } from "./task.types";

export type UseTaskProps = {
  tasks: TaskType[];
  activeFilter: TaskFilter;
};
