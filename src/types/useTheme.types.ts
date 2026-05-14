export type Theme = "light" | "dark";

export interface UseTheme {
  theme: Theme;
  toggleTheme: () => void;
}
