import { X, Moon, Sun, BookOpen, GitBranch } from "lucide-react";
import { Drawer } from "@/components/Drawer";
import type { AppDrawerProps, SidebarItem } from "@/types/appDrawer.types";
import {
  APP_NAME,
  APP_VERSION,
  GITHUB_PROFILE,
  GITHUB_REPO,
  LICENCE,
} from "@/constants";

export function AppDrawer({
  open,
  onClose,
  theme,
  toggleTheme,
}: AppDrawerProps) {
  const sidebarItem: SidebarItem[] = [
    {
      label: "Licence",
      link: LICENCE,
      icon: BookOpen,
    },
    {
      label: "Developer",
      link: GITHUB_PROFILE,
      icon: GitBranch,
    },
  ];
  return (
    <Drawer isOpen={open} onClose={onClose} position="right" width="w-60">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-semibold text-secondary">{APP_NAME}</h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-4 space-y-6">
          {/* Sidebar items */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm text-secondary"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>

          {sidebarItem.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="flex items-center gap-2 text-sm text-secondary hover:underline"
              >
                <item.icon size={14} />
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border text-xs text-muted flex items-center justify-between gap-2">
          <a
            href={GITHUB_REPO}
            target="_blank"
            className="flex items-center gap-2 text-xs text-secondary hover:underline"
          >
            <GitBranch size={14} />
            GitHub
          </a>

          <span>Version {APP_VERSION}</span>
        </div>
      </div>
    </Drawer>
  );
}
