import type { UseTheme } from "@/types/useTheme.types";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme({ theme, toggleTheme }: UseTheme) {
  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-8 h-8 inline-flex items-center justify-center 
        rounded-full bg-primary text-secondary 
        transition-colors duration-300 shadow-md hover:shadow-lg
      "
      title="Theme"
    >
      <div className="relative w-5 h-5">
        {/* Sun icon - visible in light mode */}
        <Sun
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Moon icon - visible in dark mode */}
        <Moon
          size={20}
          className={`absolute inset-0 transition-all duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
