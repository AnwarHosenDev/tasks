import { X, Moon, Sun, BookOpen, GitBranch, Download } from "lucide-react";
import { Drawer } from "@/components/Drawer";
import type { AppDrawerProps, SidebarItem } from "@/types/appDrawer.types";
import {
  APP_VERSION,
  GITHUB_PROFILE,
  GITHUB_REPO,
  LICENCE,
  GITHUB_RELEASES,
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
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-secondary">Menu</h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 space-y-6">
          {/* Sidebar items */}
          {sidebarItem.map((item, index) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-[16px] text-secondary hover:underline"
              >
                <item.icon size={14} />
                {item.label}
              </a>
            );
          })}

          {/* Toggle Theme Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-[16px] text-secondary"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>
        </div>

        {/* Footer */}
        <div className="p-6 text-xs text-muted flex items-center justify-between gap-2">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 text-xs text-secondary hover:underline"
          >
            <GitBranch size={14} />
            GitHub
          </a>

          <span>Version {APP_VERSION}</span>
        </div>

        <a
          href={GITHUB_RELEASES}
          target="_blank"
          rel="noreferrer noopener"
          className="
            inline-flex items-center justify-center gap-2 
            rounded-xl border border-border bg-surface 
            px-4 py-3 text-xs font-medium text-secondary 
            transition hover:bg-border/10 sm:w-auto mx-4 mb-4
          "
        >
          <Download size={14} />
          <span className="hidden sm:inline">Download app</span>
          <span className="sm:hidden">Latest version</span>
        </a>
      </div>
    </Drawer>
  );
}
