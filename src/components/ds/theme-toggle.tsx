"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-8 w-[72px]" />;

  const isDark = theme === "dark";

  return (
    <div className="flex h-8 items-center gap-0.5 rounded-sm border border-border/20 bg-muted/30 p-0.5">
      <button
        onClick={() => setTheme("light")}
        className={`flex size-7 items-center justify-center rounded-sm transition-colors ${
          !isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light mode"
      >
        <BiSun size={14} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`flex size-7 items-center justify-center rounded-sm transition-colors ${
          isDark
            ? "bg-background text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark mode"
      >
        <BiMoon size={14} />
      </button>
    </div>
  );
}
