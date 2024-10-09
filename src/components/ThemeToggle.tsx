"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";

const isUserPreferingDarkMode = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(isUserPreferingDarkMode());

  const toggleTheme = () => {
    setDarkMode((previousTheme) => !previousTheme);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const updateThemePreference = (event: MediaQueryListEvent) =>
      setDarkMode(event.matches);

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateThemePreference);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateThemePreference);
  }, []);

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
