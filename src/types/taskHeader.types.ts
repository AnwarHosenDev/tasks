import type { TaskFilter } from "./task.types";
import type { Theme } from "./useTheme.types";

export interface TaskHeaderProps {
  theme: Theme;
  toggleTheme: () => void;
  filters: TaskFilter[];
  activeFilter: TaskFilter;
  setFilter: (filter: TaskFilter) => void;
}
