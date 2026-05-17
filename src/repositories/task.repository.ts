import type { TaskType } from "@/types/task.types";

export interface TaskRepository {
  getAll(): Promise<TaskType[]>;

  create(task: TaskType): Promise<void>;

  update(task: TaskType): Promise<void>;

  delete(id: string): Promise<void>;

  replaceAll(tasks: TaskType[]): Promise<void>;
}
