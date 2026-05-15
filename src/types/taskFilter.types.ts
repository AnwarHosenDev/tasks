import type { TaskFilter } from "./task.types";

export interface TaskFilterProps {
  filters: TaskFilter[];
  activeFilter: TaskFilter;
  onChange: (filter: TaskFilter) => void;
}
