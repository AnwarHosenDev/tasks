import { useEffect, useRef, useState } from "react";
import { Drawer } from "@/components/Drawer";
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

  // Set the title and description when editing a task
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.description);
    } else {
      setTitle("");
      setDesc("");
    }
  }, [editingTask]);

  // Focus on title field only on creating task (not editing)
  useEffect(() => {
    if (openInputCard && !editingTask) {
      titleFieldRef.current?.focus();
    }
  }, [openInputCard]);

  // Function to handle the submission of the task
  const handleSubmit = () => {
    if (!title.trim()) return;

    onSubmit(title, desc);
    setTitle("");
    setDesc("");
    onClose();
  };

  return (
    <Drawer
      isOpen={openInputCard}
      onClose={onClose}
      position="bottom"
      width="max-w-lg"
      className="rounded-t-3xl"
    >
      <div className="rounded-t-3xl border-t border-border bg-primary px-4 py-8 space-y-3">
        <div className="text-sm font-semibold text-secondary">
          {editingTask ? "Edit Task" : "New Task"}
        </div>

        {/* Title Input */}
        <input
          type="text"
          ref={titleFieldRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="
            w-full rounded-2xl bg-surface
            px-4 py-3 text-[16px] font-semibold tracking-wider outline-none
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
            px-4 py-3 text-[16px] tracking-wider outline-none
          "
        />

        {/* Buttons */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={onClose}
            className="flex-1 rounded-2xl bg-surface py-3 text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
              flex-1 rounded-2xl bg-secondary text-primary
              py-3 text-sm font-medium active:scale-[0.98] transition
            "
          >
            {editingTask ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </Drawer>
  );
}
