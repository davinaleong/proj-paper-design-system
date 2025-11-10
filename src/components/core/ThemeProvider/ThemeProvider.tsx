import { useState, useEffect, useCallback } from "react"
import { ThemeContext } from "./ThemeContext"
import type {
  ThemeProviderProps,
  ThemeConfig,
  ThemeMode,
  ThemeRadius,
  ThemeElevation,
} from "./types"
import type { ColorVariant } from "../../../utils/colors"

const DEFAULT_THEME: ThemeConfig = {
  mode: "light", // Default to light (paper aesthetic)
  accentColor: "primary",
  radius: "md",
  elevation: "sm",
}

const RADIUS_CLASSES = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
} as const

const ELEVATION_CLASSES = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
} as const

export function ThemeProvider({
  children,
  defaultTheme = {},
  persistKey = "paper-theme",
}: ThemeProviderProps) {
  // Initialize theme from localStorage or defaults
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    if (typeof window !== "undefined" && persistKey && persistKey !== null) {
      try {
        const stored = localStorage.getItem(persistKey)
        if (stored) {
          const parsed = JSON.parse(stored)
          return { ...DEFAULT_THEME, ...defaultTheme, ...parsed }
        }
      } catch (error) {
        console.warn("Failed to load theme from localStorage:", error)
      }
    }
    return { ...DEFAULT_THEME, ...defaultTheme }
  })

  // Track system preference
  const [systemPrefersDark, setSystemPrefersDark] = useState(false)

  // Listen for system preference changes
  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemPrefersDark(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPrefersDark(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Resolve actual theme based on mode and system preference
  const actualTheme: "light" | "dark" = 
    theme.mode === "auto" 
      ? (systemPrefersDark ? "dark" : "light")
      : theme.mode === "dark" 
        ? "dark" 
        : "light"

  // Persist theme changes to localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && persistKey && persistKey !== null) {
      try {
        localStorage.setItem(persistKey, JSON.stringify(theme))
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error)
      }
    }
  }, [theme, persistKey])

  // Apply theme to document root
  useEffect(() => {
    if (typeof window === "undefined") return

    const root = document.documentElement

    // Remove existing theme classes and data attributes
    root.classList.remove("light", "dark")
    root.removeAttribute("data-theme")
    Object.values(RADIUS_CLASSES).forEach((cls) => {
      root.classList.remove(cls)
    })
    Object.values(ELEVATION_CLASSES).forEach((cls) => {
      root.classList.remove(cls)
    })

    // Apply actual theme classes and data attributes
    root.classList.add(actualTheme)
    root.setAttribute("data-theme", actualTheme)

    // For Tailwind dark mode compatibility
    if (actualTheme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    // Debug logging
    console.log("Theme mode:", theme.mode, "→ Actual theme:", actualTheme)
    console.log("Document classes:", root.classList.toString())
    console.log("Data theme attribute:", root.getAttribute("data-theme"))

    // Set CSS custom properties for theme values
    root.style.setProperty("--theme-mode", actualTheme)
    root.style.setProperty("--theme-accent", theme.accentColor)
    root.style.setProperty("--theme-radius", theme.radius)
    root.style.setProperty("--theme-elevation", theme.elevation)

    // Set theme-specific colors based on DARK_MODE_PLAN.md
    if (actualTheme === "dark") {
      // Dark Theme (Warm Complement) - stone palette
      root.style.setProperty("--theme-bg", "#0c0a09")      // stone-950
      root.style.setProperty("--theme-text", "#fafaf9")    // stone-50
      root.style.setProperty("--theme-panel-bg", "#1c1917") // stone-900
      root.style.setProperty("--theme-panel-border", "#57534e") // stone-600
    } else {
      // Light Theme (Paper Aesthetic) - warm stone tones
      root.style.setProperty("--theme-bg", "#faf9f6")      // Custom warm
      root.style.setProperty("--theme-text", "#44403c")    // stone-700
      root.style.setProperty("--theme-panel-bg", "#f5f5f4") // stone-100
      root.style.setProperty("--theme-panel-border", "#d6d3d1") // stone-300
    }

    // Add specific classes for radius and elevation if needed
    const radiusClass = RADIUS_CLASSES[theme.radius]
    const elevationClass = ELEVATION_CLASSES[theme.elevation]

    if (radiusClass) root.classList.add(`default-${radiusClass}`)
    if (elevationClass) root.classList.add(`default-${elevationClass}`)
  }, [theme, actualTheme])

  // Theme setters
  const setMode = useCallback((mode: ThemeMode) => {
    setTheme((prev) => ({ ...prev, mode }))
  }, [])

  const setLightTheme = useCallback(() => {
    setTheme((prev) => ({ ...prev, mode: "light" }))
  }, [])

  const setDarkTheme = useCallback(() => {
    setTheme((prev) => ({ ...prev, mode: "dark" }))
  }, [])

  const setAutoTheme = useCallback(() => {
    setTheme((prev) => ({ ...prev, mode: "auto" }))
  }, [])

  const setAccentColor = useCallback((accentColor: ColorVariant) => {
    setTheme((prev) => ({ ...prev, accentColor }))
  }, [])

  const setRadius = useCallback((radius: ThemeRadius) => {
    setTheme((prev) => ({ ...prev, radius }))
  }, [])

  const setElevation = useCallback((elevation: ThemeElevation) => {
    setTheme((prev) => ({ ...prev, elevation }))
  }, [])

  const resetTheme = useCallback(() => {
    setTheme({ ...DEFAULT_THEME, ...defaultTheme })
  }, [defaultTheme])

  const contextValue = {
    ...theme,
    actualTheme,
    setMode,
    setLightTheme,
    setDarkTheme,
    setAutoTheme,
    setAccentColor,
    setRadius,
    setElevation,
    resetTheme,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
