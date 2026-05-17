import { useState } from "react";
import { Plus } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";
import { useTaskStore } from "@/hooks/useTaskStore";
import { useFilter } from "@/hooks/useFilter";

import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";
import { TaskCompletedDrawer } from "./TaskCompletedDrawer";
import { TaskInput } from "./TaskInput";

import type { TaskFilter, TaskType } from "@/types/task.types";
import { taskRepository } from "@/repositories/task.repository.instance";

const filters: TaskFilter[] = ["All", "Pending", "In Progress"];

export default function TaskBoard() {
  const {
    tasks,
    addTask,
    deleteTask,
    editTask,
    updateTaskStatus,
    clearCompleted,
  } = useTaskStore(taskRepository);

  const [filter, setFilter] = useState<TaskFilter>("All");
  const [openInput, setOpenInput] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const { activeTasks, completedTasks } = useFilter({
    tasks,
    activeFilter: filter,
  });

  const handleAddTask = (title: string, desc: string) => {
    addTask(title, desc);
  };

  const handleEditTask = (title: string, desc: string) => {
    if (!editingTask) return;
    editTask(editingTask.id, title, desc);
    setEditingTask(null);
  };

  return (
    // Task Board Container
    <div className="relative mx-auto w-full max-w-lg h-full bg-primary flex flex-col overflow-hidden">
      {/* Task Header */}
      <TaskHeader
        theme={theme}
        toggleTheme={toggleTheme}
        filters={filters}
        activeFilter={filter}
        setFilter={setFilter}
      />

      {/* Task List */}
      <TaskList
        tasks={activeTasks}
        onUpdateStatus={updateTaskStatus}
        onDelete={deleteTask}
        onEdit={(task) => {
          setEditingTask(task);
          setOpenInput(true);
        }}
      />

      {/* Floating Action Button */}
      <button
        onClick={() => setOpenInput(true)}
        className="absolute bottom-16 right-0 left-0 mx-auto 
          h-12 w-12 rounded-full bg-secondary text-primary 
          flex items-center justify-center shadow-lg active:scale-90 transition
        "
      >
        <Plus size={20} />
      </button>

      <TaskCompletedDrawer
        completedTasks={completedTasks}
        show={showCompleted}
        setShow={setShowCompleted}
        onClear={clearCompleted}
        onUpdateStatus={updateTaskStatus}
        onDelete={deleteTask}
        onEdit={(task) => {
          setEditingTask(task);
          setOpenInput(true);
        }}
      />

      <TaskInput
        openInputCard={openInput}
        onClose={() => {
          setOpenInput(false);
          setEditingTask(null);
        }}
        editingTask={editingTask}
        onSubmit={editingTask ? handleEditTask : handleAddTask}
      />
    </div>
  );
}
