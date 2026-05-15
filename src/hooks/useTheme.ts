import { useState, useEffect } from "react";
import type { Theme, UseTheme } from "@/types/useTheme.types";

export function useTheme(): UseTheme {
  // Initialize theme state
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "dark";
  });

  // Update document's class
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
