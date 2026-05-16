import { useState } from "react";
import { Plus } from "lucide-react";

// Hooks
import { useTheme } from "@/hooks/useTheme";
import { useTaskStorage } from "@/hooks/useTaskStorage";
import { useTasks } from "@/hooks/useTasks";

// Components
import { TaskHeader } from "./TaskHeader";
import { TaskList } from "./TaskList";
import { TaskCompletedDrawer } from "./TaskCompletedDrawer";
import { TaskInput } from "./TaskInput";

// Types
import type { TaskFilter, TaskType } from "@/types/task.types";

// Constants
const filters: TaskFilter[] = ["All", "Pending", "In Progress"];

export default function TaskBoard() {
  // Task Storage Hooks
  const { tasks, setTasks, addTask, deleteTask, editTask } = useTaskStorage();

  // Task Filters
  const [filter, setFilter] = useState<TaskFilter>("All");

  // Task Input
  const [openInput, setOpenInput] = useState(false);

  // Task Editing
  const [editingTask, setEditingTask] = useState<TaskType | null>(null);

  // Task Completed Drawer
  const [showCompleted, setShowCompleted] = useState(false);

  // Theme Hook
  const { theme, toggleTheme } = useTheme();

  // Task Hooks
  const { activeTasks, completedTasks, updateTaskStatus } = useTasks({
    tasks,
    setTasks,
    activeFilter: filter,
  });

  // Add Task
  const handleAddTask = (title: string, desc: string) => {
    addTask(title, desc);
  };

  // Edit Task
  const handleEditTask = (title: string, desc: string) => {
    if (!editingTask) return;
    editTask(editingTask.id, title, desc);
    setEditingTask(null);
  };

  // Clear Completed Tasks
  const clearCompleted = () => {
    completedTasks.forEach((t) => deleteTask(t.id));
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
        className="
          absolute bottom-13 right-0 left-0 mx-auto
          h-12 w-12 rounded-full
          bg-secondary text-primary
          flex items-center justify-center
          shadow-lg active:scale-90 transition
        "
      >
        <Plus size={20} />
      </button>

      {/* Task Completed Drawer */}
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

      {/* Task Input */}
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
