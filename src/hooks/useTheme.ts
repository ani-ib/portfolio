import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    // Initialize from localStorage on first render
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    // Default to light
    return "light";
  });

  useEffect(() => {
    // Update DOM and localStorage when theme changes
    const isDark = theme === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme: setThemeState };
}