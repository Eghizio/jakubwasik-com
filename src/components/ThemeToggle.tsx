"use client";
import { useEffect } from "react";
import { SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type Theme = "light" | "dark";

const LOCAL_STORAGE_KEY = "theme";

const isUserPreferingDarkMode = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeToggle = () => {
  const [theme, setTheme] = useLocalStorage<Theme>(
    LOCAL_STORAGE_KEY,
    isUserPreferingDarkMode() ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme((previousTheme: Theme) =>
      previousTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const updateThemePreference = (event: MediaQueryListEvent) =>
      setTheme(event.matches ? "dark" : "light");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateThemePreference);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateThemePreference);
  }, [setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute right-4 top-4"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <SunMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
