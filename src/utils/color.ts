/**
 * Paper Theme Color Utilities
 * 
 * Based on the PAPER_RECOLOR_PLAN.md specifications, this module provides
 * color utilities for the "Minimal Warm" light theme and "Black Paper" dark theme.
 * 
 * Key Features:
 * - Text color mapping (#000 -> #1a1917, #fff -> #f8f8f8)
 * - Background colors from the recolor plan
 * - Theme-aware color selection
 * - Paper design system integration
 */

// PAPER_RECOLOR_PLAN.md Color Specifications
export const paperThemeColors = {
  light: {
    // Minimal Warm Light Theme
    backgrounds: {
      primary: "#fcfbf9",     // Warmest off-white (main page background)
      secondary: "#f8f7f4",   // Secondary surfaces (cards, panels)
      subtle: "#f4f3f0",      // Subtle surfaces (disabled states, very light accents)
    },
    text: {
      primary: "#1a1917",     // Warm near-black (primary text) - replaces #000
      secondary: "#4a4945",   // Medium-dark warm gray (secondary text)
      muted: "#6b6a66",       // Medium warm gray (muted text)
      subtle: "#9c9b96",      // Light warm gray (subtle text, placeholders)
    },
    borders: {
      primary: "#e5e3df",     // Warm light gray borders
      secondary: "#d1cfc9",   // Slightly darker borders
    },
  },
  dark: {
    // Black Paper Dark Theme  
    backgrounds: {
      primary: "#0a0a0a",     // True deep black (main background)
      secondary: "#1a1a1a",   // Elevated black (cards, modals)
      subtle: "#242424",      // Subtle surfaces (hover states, disabled)
    },
    text: {
      primary: "#f8f8f8",     // Soft white (primary text) - replaces #fff
      secondary: "#d4d4d4",   // Light gray (secondary text)
      muted: "#a8a8a8",       // Medium gray (muted text)
      subtle: "#6b6b6b",      // Dark gray (subtle text, placeholders)
    },
    borders: {
      primary: "#333333",     // Dark borders
      secondary: "#404040",   // Slightly lighter borders
    },
  },
} as const

// Paper theme mode type (avoiding conflict with colors.ts)
export type PaperThemeMode = "light" | "dark"

// Color category types
export type BackgroundLevel = "primary" | "secondary" | "subtle"
export type TextLevel = "primary" | "secondary" | "muted" | "subtle" 
export type BorderLevel = "primary" | "secondary"

/**
 * Core color mapping function that replaces #000 and #fff with theme-appropriate colors
 * 
 * @param color - Input color (hex string)
 * @param theme - Theme mode ("light" or "dark")
 * @returns Mapped color based on theme
 * 
 * @example
 * ```typescript
 * mapTextColor("#000000", "light") // returns "#1a1917"
 * mapTextColor("#ffffff", "dark")  // returns "#f8f8f8"
 * mapTextColor("#ff0000", "light") // returns "#ff0000" (unchanged)
 * ```
 */
export function mapTextColor(color: string, theme: PaperThemeMode = "light"): string {
  const normalizedColor = color.toLowerCase().replace("#", "")
  
  // Handle different representations of black
  if (normalizedColor === "000000" || normalizedColor === "000" || color === "black") {
    return theme === "light" 
      ? paperThemeColors.light.text.primary 
      : paperThemeColors.dark.text.primary
  }
  
  // Handle different representations of white  
  if (normalizedColor === "ffffff" || normalizedColor === "fff" || color === "white") {
    return theme === "light"
      ? paperThemeColors.light.text.primary  // In light theme, white text becomes dark
      : paperThemeColors.light.text.primary  // Keep the warm near-black for light theme usage
  }
  
  // Return original color if no mapping needed
  return color
}

/**
 * Get background color based on theme and level
 * 
 * @param level - Background level ("primary", "secondary", "subtle")
 * @param theme - Theme mode ("light" or "dark")  
 * @returns Background color hex string
 * 
 * @example
 * ```typescript
 * getBackgroundColor("primary", "light")   // returns "#fcfbf9"
 * getBackgroundColor("secondary", "dark")  // returns "#1a1a1a"
 * ```
 */
export function getBackgroundColor(level: BackgroundLevel, theme: PaperThemeMode = "light"): string {
  return paperThemeColors[theme].backgrounds[level]
}

/**
 * Get text color based on theme and level
 * 
 * @param level - Text level ("primary", "secondary", "muted", "subtle")
 * @param theme - Theme mode ("light" or "dark")
 * @returns Text color hex string
 * 
 * @example
 * ```typescript
 * getTextColor("primary", "light")    // returns "#1a1917"
 * getTextColor("secondary", "dark")   // returns "#d4d4d4"
 * ```
 */
export function getTextColor(level: TextLevel, theme: PaperThemeMode = "light"): string {
  return paperThemeColors[theme].text[level]
}

/**
 * Get border color based on theme and level
 * 
 * @param level - Border level ("primary", "secondary")
 * @param theme - Theme mode ("light" or "dark")
 * @returns Border color hex string
 * 
 * @example
 * ```typescript
 * getBorderColor("primary", "light")   // returns "#e5e3df"
 * getBorderColor("secondary", "dark")  // returns "#404040"
 * ```
 */
export function getBorderColor(level: BorderLevel, theme: PaperThemeMode = "light"): string {
  return paperThemeColors[theme].borders[level]
}

/**
 * Get optimal text color for a given background
 * Automatically determines if light or dark text should be used
 * 
 * @param backgroundColor - Background color hex string
 * @param theme - Current theme mode for color selection
 * @returns Optimal text color from theme palette
 * 
 * @example
 * ```typescript
 * getOptimalTextColorForBackground("#fcfbf9", "light") // returns "#1a1917" 
 * getOptimalTextColorForBackground("#0a0a0a", "dark")  // returns "#f8f8f8"
 * ```
 */
export function getOptimalTextColorForBackground(backgroundColor: string, theme: PaperThemeMode = "light"): string {
  // Simple luminance check - you could enhance this with the existing luminance utilities
  const rgb = hexToRgb(backgroundColor)
  if (!rgb) return getTextColor("primary", theme)
  
  const luminance = calculateLuminance(rgb.r, rgb.g, rgb.b)
  
  // If background is light (high luminance), use dark text
  // If background is dark (low luminance), use light text
  if (luminance > 0.5) {
    return theme === "light" 
      ? paperThemeColors.light.text.primary   // Dark text on light background
      : paperThemeColors.light.text.primary   // Still use dark text on light backgrounds
  } else {
    return theme === "dark"
      ? paperThemeColors.dark.text.primary    // Light text on dark background  
      : paperThemeColors.dark.text.primary    // Use light text on dark backgrounds
  }
}

/**
 * Generate Tailwind CSS custom property declarations for the paper theme
 * 
 * @param theme - Theme mode ("light" or "dark")
 * @returns CSS custom properties string
 * 
 * @example
 * ```typescript
 * const lightVars = generateCSSVariables("light")
 * // Returns CSS custom properties for light theme
 * ```
 */
export function generateCSSVariables(theme: PaperThemeMode = "light"): string {
  const colors = paperThemeColors[theme]
  
  return `
    --paper-bg-primary: ${colors.backgrounds.primary};
    --paper-bg-secondary: ${colors.backgrounds.secondary};
    --paper-bg-subtle: ${colors.backgrounds.subtle};
    
    --paper-text-primary: ${colors.text.primary};
    --paper-text-secondary: ${colors.text.secondary};
    --paper-text-muted: ${colors.text.muted};
    --paper-text-subtle: ${colors.text.subtle};
    
    --paper-border-primary: ${colors.borders.primary};
    --paper-border-secondary: ${colors.borders.secondary};
  `.trim()
}

/**
 * Get complete theme object for programmatic usage
 * 
 * @param theme - Theme mode ("light" or "dark")
 * @returns Complete theme object with all colors
 * 
 * @example
 * ```typescript
 * const lightTheme = getThemeColors("light")
 * console.log(lightTheme.backgrounds.primary) // "#fcfbf9"
 * ```
 */
export function getThemeColors(theme: PaperThemeMode = "light") {
  return paperThemeColors[theme]
}

/**
 * Generate Tailwind classes for paper theme colors
 * 
 * @param colorType - Type of color ("bg" | "text" | "border")
 * @param level - Color level
 * @param theme - Theme mode  
 * @returns Tailwind class string
 * 
 * @example
 * ```typescript
 * getTailwindClass("bg", "primary", "light")    // returns "bg-[#fcfbf9]"
 * getTailwindClass("text", "secondary", "dark") // returns "text-[#d4d4d4]"
 * ```
 */
export function getTailwindClass(
  colorType: "bg" | "text" | "border",
  level: BackgroundLevel | TextLevel | BorderLevel,
  theme: PaperThemeMode = "light"
): string {
  let color: string
  
  switch (colorType) {
    case "bg":
      color = getBackgroundColor(level as BackgroundLevel, theme)
      return `bg-[${color}]`
    case "text":
      color = getTextColor(level as TextLevel, theme)
      return `text-[${color}]`
    case "border":
      color = getBorderColor(level as BorderLevel, theme)
      return `border-[${color}]`
    default:
      return ""
  }
}

/**
 * Batch convert colors using the mapping system
 * Useful for processing multiple colors at once
 * 
 * @param colors - Array of color objects with original colors
 * @param theme - Theme mode for mapping
 * @returns Array of color objects with mapped colors
 * 
 * @example
 * ```typescript
 * const colors = [
 *   { name: "text", original: "#000000" },
 *   { name: "background", original: "#ffffff" }
 * ]
 * const mapped = batchMapColors(colors, "light")
 * // Returns mapped colors with theme-appropriate values
 * ```
 */
export function batchMapColors(
  colors: Array<{ name: string; original: string }>,
  theme: PaperThemeMode = "light"
): Array<{ name: string; original: string; mapped: string }> {
  return colors.map(color => ({
    ...color,
    mapped: mapTextColor(color.original, theme)
  }))
}

// Helper functions (used internally, can be imported from colors.ts if available)
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const cleanHex = hex.replace('#', '')
  
  if (cleanHex.length === 3) {
    const expandedHex = cleanHex
      .split('')
      .map(char => char + char)
      .join('')
    return hexToRgb(expandedHex)
  }
  
  if (cleanHex.length === 6) {
    const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(cleanHex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }
  
  return null
}

function calculateLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const sRGB = c / 255
    return sRGB <= 0.03928 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4)
  })
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

// Export color constants for direct usage
export const LIGHT_THEME_COLORS = paperThemeColors.light
export const DARK_THEME_COLORS = paperThemeColors.dark

// Quick access to the specific color mappings requested
export const COLOR_MAPPINGS = {
  /** #000000 mapped to warm near-black */
  BLACK_TO_WARM_BLACK: paperThemeColors.light.text.primary,  // "#1a1917"
  /** #ffffff mapped to soft white */  
  WHITE_TO_SOFT_WHITE: paperThemeColors.dark.text.primary,   // "#f8f8f8"
} as const

// Legacy compatibility functions for existing components
export type ColorVariant = BackgroundLevel

export function getBackgroundColorClasses(variant: ColorVariant, theme: PaperThemeMode = "light"): string {
  return getTailwindClass("bg", variant, theme)
}

export function getTextColorClasses(variant: TextLevel, theme: PaperThemeMode = "light"): string {
  return getTailwindClass("text", variant, theme)
}

export function getBorderColorClasses(variant: BorderLevel, theme: PaperThemeMode = "light"): string {
  return getTailwindClass("border", variant, theme)
}

export function getColorClasses(variant: ColorVariant, theme: PaperThemeMode = "light"): string {
  return getBackgroundColorClasses(variant, theme)
}

export function getColorClassesWithLuminance(variant: ColorVariant, theme: PaperThemeMode = "light"): string {
  const bgClass = getBackgroundColorClasses(variant, theme)
  const textColor = getOptimalTextColorForBackground(getBackgroundColor(variant, theme), theme)
  return `${bgClass} text-[${textColor}]`
}

export function getOptimalTextClasses(backgroundColor: string, theme: PaperThemeMode = "light"): string {
  const textColor = getOptimalTextColorForBackground(backgroundColor, theme)
  return `text-[${textColor}]`
}