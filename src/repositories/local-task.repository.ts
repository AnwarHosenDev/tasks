import type { TaskRepository } from "./task.repository";
import type { TaskType } from "@/types/task.types";

const STORAGE_KEY = "tasks_v2";

export class LocalTaskRepository implements TaskRepository {
  // Internal helper to persist full task list
  private save(tasks: TaskType[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  // Fetch all tasks from storage
  async getAll(): Promise<TaskType[]> {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (!raw) return [];

    try {
      const parsed = JSON.parse(raw);

      // Ensure data integrity (must be an array)
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      console.error("Failed to parse tasks:", err);
      return [];
    }
  }

  // Create a new task and persist
  async create(task: TaskType): Promise<void> {
    const tasks = await this.getAll();

    tasks.unshift(task); // add to top

    this.save(tasks);
  }

  // Update existing task by id
  async update(updatedTask: TaskType): Promise<void> {
    const tasks = await this.getAll();

    const updated = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );

    this.save(updated);
  }

  // Remove task by id
  async delete(id: string): Promise<void> {
    const tasks = await this.getAll();

    const filtered = tasks.filter((task) => task.id !== id);

    this.save(filtered);
  }

  // Replace entire task list (useful for sync later)
  async replaceAll(tasks: TaskType[]): Promise<void> {
    this.save(tasks);
  }
}
