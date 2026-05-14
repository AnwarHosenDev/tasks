import { useTheme } from "./hooks/useTheme";
import { ToggleTheme } from "@/components/ToggleTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between p-4">
      <h1 className="text-2xl text-secondary">Hello</h1>
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
