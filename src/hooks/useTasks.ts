import { useMemo } from "react";
import type { TaskStatus } from "@/types/task.types";
import type { UseTaskProps } from "@/types/useTasks.types";

export function useTasks({ tasks, setTasks, activeFilter }: UseTaskProps) {
  // Update Task State
  const updateTaskStatus = (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };

  // Filtered Tasks
  const filteredTasks = useMemo(() => {
    if (activeFilter === "All") return tasks;
    return tasks.filter((task) => task.status === activeFilter);
  }, [tasks, activeFilter]);

  // Active Tasks
  const activeTasks = useMemo(
    () => filteredTasks.filter((task) => task.status !== "Completed"),
    [filteredTasks],
  );

  // Completed Tasks
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.status === "Completed"),
    [tasks],
  );

  return {
    filteredTasks,
    activeTasks,
    completedTasks,
    updateTaskStatus,
  };
}
