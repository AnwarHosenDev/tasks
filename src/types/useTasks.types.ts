import type { TaskType, TaskFilter } from "./task.types";

export interface UseTaskProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  activeFilter: TaskFilter;
}
