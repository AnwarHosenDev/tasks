import { ToggleTheme } from "@/components/ToggleTheme";
import { useTheme } from "@/hooks/useTheme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="px-6 py-3 flex justify-between items-center shadow-lg">
      <div className="text-2xl font-bold">Todo</div>

      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
}
