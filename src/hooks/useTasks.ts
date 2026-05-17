import { useMemo } from "react";

import type { UseTaskProps } from "@/types/useTasks.types";

export function useTasks({ tasks, activeFilter }: UseTaskProps) {
  // Filter tasks by selected filter
  const filteredTasks = useMemo(() => {
    if (activeFilter === "All") return tasks;
    return tasks.filter((task) => task.status === activeFilter);
  }, [tasks, activeFilter]);

  // Active (non-completed) tasks
  const activeTasks = useMemo(() => {
    return filteredTasks.filter((task) => task.status !== "Completed");
  }, [filteredTasks]);

  // Completed tasks
  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "Completed");
  }, [tasks]);

  return {
    filteredTasks,
    activeTasks,
    completedTasks,
  };
}
