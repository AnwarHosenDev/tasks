import { useEffect, useRef, useState } from "react";
import type { TaskInputProps } from "@/types/task.types";

export function TaskInput({
  openInputCard,
  onClose,
  onSubmit,
  editingTask,
}: TaskInputProps) {
  // States for title and description input
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Title input element reference
  const titleFieldRef = useRef<HTMLInputElement | null>(null);

  /**
   * Effect to set the title and description when editing a task
   * or when the input card is opened
   */
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.description);
    } else {
      setTitle("");
      setDesc("");
    }

    // Focus on title field
    titleFieldRef.current?.focus();
  }, [editingTask, openInputCard]);

  // Function to handle the submission of the task
  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit(title, desc);

    setTitle("");
    setDesc("");
    onClose();
  };

  return (
    // Overlay and Sheet Container
    <div
      className={`
        fixed inset-0 z-50
        transition-all duration-300
        ${openInputCard ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black/40 backdrop-blur-[2px]
          transition-opacity duration-300
          ${openInputCard ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Input Card */}
      <div
        className={`
          absolute bottom-0 left-0 right-0
          mx-auto w-full max-w-lg

          rounded-t-3xl border-t border-border bg-primary

          px-4 py-4 space-y-3

          transition-transform duration-300 ease-out
          ${openInputCard ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div className="text-sm font-semibold text-secondary">
          {editingTask ? "Edit Task" : "New Task"}
        </div>

        {/* Title Input */}
        <input
          ref={titleFieldRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="
            w-full rounded-2xl bg-surface
            px-4 py-3 text-sm outline-none
          "
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />

        {/* Description Input */}
        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description"
          rows={4}
          className="
            w-full resize-none rounded-2xl bg-surface
            px-4 py-3 text-sm outline-none
          "
        />

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={onClose}
            className="
              flex-1 rounded-2xl bg-surface py-3 text-sm
              active:scale-[0.98] transition
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              flex-1 rounded-2xl bg-secondary text-primary
              py-3 text-sm font-medium
              active:scale-[0.98] transition
            "
          >
            {editingTask ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
