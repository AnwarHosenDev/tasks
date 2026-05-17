import { useEffect, useState } from "react";
import type { TaskType } from "@/types/task.types";

const STORAGE_KEY = "tasks_v2";

export function useTaskStorage() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  // Get Tasks from localStorage on first load: run once
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setTasks(JSON.parse(raw));
  }, []);

  // Update localStorage when tasks changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Insert New Task to the List
  const addTask = (title: string, description: string) => {
    setTasks((prev) => [
      {
        id: crypto.randomUUID(),
        title,
        description,
        status: "Pending",
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      ...prev,
    ]);
  };

  // Delete a specific task with id
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Update a task with given id and values
  const editTask = (id: string, title: string, description: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title, description, updatedAt: Date.now() }
          : task,
      ),
    );
  };

  return { tasks, setTasks, addTask, deleteTask, editTask };
}
