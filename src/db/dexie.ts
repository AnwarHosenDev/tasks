import Dexie, { type Table } from "dexie";

import type { TaskType } from "@/types/task.types";

// Main app database
export class AppDatabase extends Dexie {
  // Tasks table
  tasks!: Table<TaskType, string>;

  constructor() {
    super("tasks_db");

    // Database schema
    this.version(1).stores({
      tasks: "id, status, createdAt, updatedAt",
    });
  }
}

// Database instance
export const db = new AppDatabase();
