import type { LucideIcon } from "lucide-react";

export type AppDrawerProps = {
  open: boolean;
  onClose: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

export type SidebarItem = {
  label: string;
  link: string;
  icon: LucideIcon;
};
