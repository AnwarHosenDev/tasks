import type { TaskType } from "./task.types";

export interface TaskInputProps {
  openInputCard: boolean;
  onClose: () => void;
  onSubmit: (title: string, desc: string) => void;
  editingTask: TaskType | null;
}
