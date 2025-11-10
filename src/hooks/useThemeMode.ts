import { useEffect, useState } from "react"

export type ThemeMode = "light" | "dark" | "system"

export function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme") as ThemeMode) || "system"
  })

  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    // Determine if we should apply dark
    const isDark = theme === "dark" || (theme === "system" && systemDark)

    root.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme])

  return { theme, setTheme }
}
