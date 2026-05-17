import { db } from "@/db/dexie";

import type { TaskRepository } from "./task.repository";
import type { TaskType } from "@/types/task.types";

export class DexieTaskRepository implements TaskRepository {
  // Fetch all tasks sorted by newest first
  async getAll(): Promise<TaskType[]> {
    return db.tasks.orderBy("createdAt").reverse().toArray();
  }

  // Create a new task
  async create(task: TaskType): Promise<void> {
    await db.tasks.add(task);
  }

  // Update existing task
  async update(updatedTask: TaskType): Promise<void> {
    await db.tasks.put(updatedTask);
  }

  // Delete task by id
  async delete(id: string): Promise<void> {
    await db.tasks.delete(id);
  }

  // Replace entire task list
  async replaceAll(tasks: TaskType[]): Promise<void> {
    await db.transaction("rw", db.tasks, async () => {
      // Clear old data
      await db.tasks.clear();

      // Insert new data
      await db.tasks.bulkAdd(tasks);
    });
  }
}
