import { useEffect, useRef, useState } from "react";

import type { TaskType, TaskStatus } from "@/types/task.types";
import type { TaskRepository } from "@/repositories/task.repository";

export function useTaskStore(repository: TaskRepository) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [loading, setLoading] = useState(true);

  // Prevent state update after unmount
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Load tasks on mount
  useEffect(() => {
    setLoading(true);

    repository
      .getAll()
      .then((data) => {
        if (isMounted.current) setTasks(data);
      })
      .catch((err) => {
        console.error("Failed to load tasks:", err);
      })
      .finally(() => {
        if (isMounted.current) setLoading(false);
      });
  }, [repository]);

  // Create task
  const addTask = async (title: string, description: string) => {
    const now = Date.now();

    const task: TaskType = {
      id: crypto.randomUUID(),
      title,
      description,
      status: "Pending",
      createdAt: now,
      updatedAt: now,
    };

    try {
      await repository.create(task);
      setTasks((prev) => [task, ...prev]);
    } catch (err) {
      console.error("Failed to create task:", err);
    }
  };

  // Delete task
  const deleteTask = async (id: string) => {
    try {
      await repository.delete(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  // Update task content (title + description)
  const editTask = async (id: string, title: string, description: string) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;

    const updatedTask: TaskType = {
      ...target,
      title,
      description,
      updatedAt: Date.now(),
    };

    try {
      await repository.update(updatedTask);

      setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  // Update task status (moved here from useTasks)
  const updateTaskStatus = async (id: string, status: TaskStatus) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;

    const updatedTask: TaskType = {
      ...target,
      status,
      updatedAt: Date.now(),
    };

    try {
      await repository.update(updatedTask);

      setTasks((prev) => prev.map((t) => (t.id === id ? updatedTask : t)));
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  // Clear all completed tasks
  const clearCompleted = async () => {
    const completed = tasks.filter((task) => task.status === "Completed");

    await Promise.all(completed.map((task) => repository.delete(task.id)));

    setTasks((prev) => prev.filter((task) => task.status !== "Completed"));
  };

  return {
    tasks,
    loading,

    addTask,
    deleteTask,
    editTask,
    updateTaskStatus,
    clearCompleted,
  };
}
