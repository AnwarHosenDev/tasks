import type { TaskType, TaskFilter } from "./task.types";

export type UseFilterProps = {
  tasks: TaskType[];
  activeFilter: TaskFilter;
};
