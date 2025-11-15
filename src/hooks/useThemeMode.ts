import { useEffect, useState } from "react"

export type ThemeMode = "light" | "dark" | "system"

export function useThemeMode() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem("theme") as ThemeMode) || "system"
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    // Determine if we should apply dark
    const isDark = theme === "dark" || (theme === "system" && systemDark)

    // Set loading state when theme changes
    setIsLoading(true)

    // Apply theme with a small delay to show loading state
    const timeoutId = setTimeout(() => {
      root.classList.toggle("dark", isDark)
      localStorage.setItem("theme", theme)
      setIsLoading(false)
    }, 300) // 300ms delay to show loading state

    // Cleanup timeout on unmount or theme change
    return () => {
      clearTimeout(timeoutId)
    }
  }, [theme])

  return { theme, setTheme, isLoading }
}
