import type { UseTheme } from "@/types/useTheme.types";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme({ theme, toggleTheme }: UseTheme) {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 inline-flex items-center justify-center border rounded-full bg-primary text-secondary transition-colors duration-300 shadow-md hover:shadow-lg cursor-pointer"
      title="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon - visible in light mode */}
        <Sun
          size={24}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Moon icon - visible in dark mode */}
        <Moon
          size={24}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
