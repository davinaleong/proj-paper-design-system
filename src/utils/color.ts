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
      base: "#fcfbf9",        // Warmest off-white (main page background)
      elevated: "#f8f7f4",    // Elevated surfaces (cards, panels)
      subtle: "#f4f3f0",      // Subtle surfaces (disabled states, very light accents)
    },
    text: {
      strong: "#1a1917",      // Warm near-black (primary text) - replaces #000
      medium: "#4a4945",      // Medium-dark warm gray (secondary text)
      muted: "#6b6a66",       // Medium warm gray (muted text)
      subtle: "#9c9b96",      // Light warm gray (subtle text, placeholders)
    },
    borders: {
      light: "#e5e3df",       // Warm light gray borders
      medium: "#d1cfc9",      // Slightly darker borders
    },
  },
  dark: {
    // Black Paper Dark Theme  
    backgrounds: {
      base: "#0a0a0a",        // True deep black (main background)
      elevated: "#1a1a1a",    // Elevated black (cards, modals)
      subtle: "#242424",      // Subtle surfaces (hover states, disabled)
    },
    text: {
      strong: "#f8f8f8",      // Soft white (primary text) - replaces #fff
      medium: "#d4d4d4",      // Light gray (secondary text)
      muted: "#a8a8a8",       // Medium gray (muted text)
      subtle: "#6b6b6b",      // Dark gray (subtle text, placeholders)
    },
    borders: {
      light: "#333333",       // Dark borders
      medium: "#404040",      // Slightly lighter borders
    },
  },
} as const

// Paper theme mode type (avoiding conflict with colors.ts)
export type PaperThemeMode = "light" | "dark"

// Color category types - using descriptive names that don't conflict with semantic variants
export type BackgroundLevel = "base" | "elevated" | "subtle"
export type TextLevel = "strong" | "medium" | "muted" | "subtle" 
export type BorderLevel = "light" | "medium"

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
      ? paperThemeColors.light.text.strong 
      : paperThemeColors.dark.text.strong
  }
  
  // Handle different representations of white  
  if (normalizedColor === "ffffff" || normalizedColor === "fff" || color === "white") {
    return theme === "light"
      ? paperThemeColors.light.text.strong  // In light theme, white text becomes dark
      : paperThemeColors.light.text.strong  // Keep the warm near-black for light theme usage
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
 * getBackgroundColor("base", "light")      // returns "#fcfbf9"
 * getBackgroundColor("elevated", "dark")   // returns "#1a1a1a"
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
 * getTextColor("strong", "light")     // returns "#1a1917"
 * getTextColor("medium", "dark")      // returns "#d4d4d4"
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
 * getBorderColor("light", "light")     // returns "#e5e3df"
 * getBorderColor("medium", "dark")     // returns "#404040"
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
  if (!rgb) return getTextColor("strong", theme)
  
  const luminance = calculateLuminance(rgb.r, rgb.g, rgb.b)
  
  // If background is light (high luminance), use dark text
  // If background is dark (low luminance), use light text
  if (luminance > 0.5) {
    return theme === "light" 
      ? paperThemeColors.light.text.strong   // Dark text on light background
      : paperThemeColors.light.text.strong   // Still use dark text on light backgrounds
  } else {
    return theme === "dark"
      ? paperThemeColors.dark.text.strong    // Light text on dark background  
      : paperThemeColors.dark.text.strong    // Use light text on dark backgrounds
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
    --paper-bg-base: ${colors.backgrounds.base};
    --paper-bg-elevated: ${colors.backgrounds.elevated};
    --paper-bg-subtle: ${colors.backgrounds.subtle};
    
    --paper-text-strong: ${colors.text.strong};
    --paper-text-medium: ${colors.text.medium};
    --paper-text-muted: ${colors.text.muted};
    --paper-text-subtle: ${colors.text.subtle};
    
    --paper-border-light: ${colors.borders.light};
    --paper-border-medium: ${colors.borders.medium};
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
 * getTailwindClass("bg", "base", "light")       // returns "bg-[#fcfbf9]"
 * getTailwindClass("text", "medium", "dark")    // returns "text-[#d4d4d4]"
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
  BLACK_TO_WARM_BLACK: paperThemeColors.light.text.strong,  // "#1a1917"
  /** #ffffff mapped to soft white */  
  WHITE_TO_SOFT_WHITE: paperThemeColors.dark.text.strong,   // "#f8f8f8"
} as const

// Semantic color variants (used by components like Button, Badge, etc.)
export type SemanticColorVariant = 
  | "primary" 
  | "secondary" 
  | "accent"
  | "success" 
  | "warning" 
  | "danger" 
  | "info"
  | "neutral"
  | "default"

// Visual style variants for components
export type StyleVariant = "solid" | "soft" | "outline" | "ghost"

/**
 * Specific Tailwind color mappings for semantic variants
 * These provide consistent, branded colors for components
 */
export const semanticTailwindColorMapping = {
  primary: {
    base: "bg-blue-500",
    text: "text-white",
    border: "border-blue-500",
    hover: "hover:bg-blue-600",
    focus: "focus:ring-blue-500",
  },
  secondary: {
    base: "bg-slate-500", 
    text: "text-white",
    border: "border-slate-500",
    hover: "hover:bg-slate-600",
    focus: "focus:ring-slate-500",
  },
  accent: {
    base: "bg-sky-500",
    text: "text-black",
    border: "border-sky-500", 
    hover: "hover:bg-sky-600",
    focus: "focus:ring-sky-500",
  },
  default: {
    base: "bg-neutral-500",
    text: "text-white",
    border: "border-neutral-500",
    hover: "hover:bg-neutral-600", 
    focus: "focus:ring-neutral-500",
  },
  info: {
    base: "bg-cyan-500",
    text: "text-black",
    border: "border-cyan-500",
    hover: "hover:bg-cyan-600",
    focus: "focus:ring-cyan-500", 
  },
  warning: {
    base: "bg-yellow-500",
    text: "text-black",
    border: "border-yellow-500",
    hover: "hover:bg-yellow-600",
    focus: "focus:ring-yellow-500",
  },
  danger: {
    base: "bg-red-500",
    text: "text-white", 
    border: "border-red-500",
    hover: "hover:bg-red-600",
    focus: "focus:ring-red-500",
  },
  success: {
    base: "bg-green-500",
    text: "text-black",
    border: "border-green-500",
    hover: "hover:bg-green-600",
    focus: "focus:ring-green-500",
  },
  neutral: {
    base: "bg-gray-500",
    text: "text-white",
    border: "border-gray-500",
    hover: "hover:bg-gray-600",
    focus: "focus:ring-gray-500",
  },
} as const satisfies Record<SemanticColorVariant, {
  base: string;
  text: string;
  border: string;
  hover: string;
  focus: string;
}>

/**
 * Map semantic color variants to appropriate paper theme levels
 * This allows components to use semantic colors while leveraging the paper theme system
 */
export const semanticColorMapping = {
  primary: { bg: "elevated", text: "strong", border: "medium" },
  secondary: { bg: "subtle", text: "medium", border: "light" },
  accent: { bg: "elevated", text: "strong", border: "medium" },
  success: { bg: "subtle", text: "strong", border: "light" },
  warning: { bg: "subtle", text: "strong", border: "light" },
  danger: { bg: "subtle", text: "strong", border: "light" },
  info: { bg: "subtle", text: "strong", border: "light" },
  neutral: { bg: "subtle", text: "medium", border: "light" },
  default: { bg: "base", text: "medium", border: "light" },
} as const satisfies Record<SemanticColorVariant, { 
  bg: BackgroundLevel; 
  text: TextLevel; 
  border: BorderLevel; 
}>

/**
 * Get paper theme classes for semantic color variants
 * This bridges semantic colors with the paper theme system
 * 
 * @param semanticColor - Semantic color variant
 * @param style - Visual style variant
 * @param theme - Paper theme mode
 * @returns Object with background, text, and border classes
 * 
 * @example
 * ```typescript
 * const classes = getSemanticColorClasses("success", "soft", "light")
 * // Returns: { background: "bg-[#f4f3f0]", text: "text-[#1a1917]", border: "border-[#e5e3df]" }
 * ```
 */
export function getSemanticColorClasses(
  semanticColor: SemanticColorVariant,
  style: StyleVariant = "soft",
  theme: PaperThemeMode = "light"
) {
  const mapping = semanticColorMapping[semanticColor]
  
  // For different styles, we might adjust the intensity
  let bgLevel: BackgroundLevel = mapping.bg
  let textLevel: TextLevel = mapping.text
  let borderLevel: BorderLevel = mapping.border
  
  // Adjust levels based on style
  switch (style) {
    case "solid":
      // Solid style uses stronger backgrounds and contrasting text
      bgLevel = "elevated"
      textLevel = "strong"
      borderLevel = "medium"
      break
    case "soft": 
      // Soft style uses subtle backgrounds with strong text
      bgLevel = "subtle"
      textLevel = "strong"
      borderLevel = "light"
      break
    case "outline":
      // Outline style uses transparent background with borders
      bgLevel = "base"
      textLevel = "strong" 
      borderLevel = "medium"
      break
    case "ghost":
      // Ghost style uses minimal styling
      bgLevel = "base"
      textLevel = "medium"
      borderLevel = "light"
      break
  }
  
  return {
    background: getBackgroundColorClasses(bgLevel, theme),
    text: getTextColorClasses(textLevel, theme),
    border: getBorderColorClasses(borderLevel, theme),
    // Combined class string for convenience
    combined: `${getBackgroundColorClasses(bgLevel, theme)} ${getTextColorClasses(textLevel, theme)} ${getBorderColorClasses(borderLevel, theme)}`,
  }
}

/**
 * Get Tailwind color classes for semantic color variants
 * Uses specific branded colors (blue-500, red-500, etc.) instead of paper theme colors
 * 
 * @param semanticColor - Semantic color variant
 * @param style - Visual style variant  
 * @returns Object with Tailwind color classes
 * 
 * @example
 * ```typescript
 * const classes = getTailwindSemanticColorClasses("danger", "solid")
 * // Returns: { background: "bg-red-500", text: "text-white", border: "border-red-500", hover: "hover:bg-red-600" }
 * ```
 */
export function getTailwindSemanticColorClasses(
  semanticColor: SemanticColorVariant,
  style: StyleVariant = "solid"
) {
  const colorMap = semanticTailwindColorMapping[semanticColor]
  
  switch (style) {
    case "solid":
      return {
        background: colorMap.base,
        text: colorMap.text,
        border: colorMap.border,
        hover: colorMap.hover,
        focus: colorMap.focus,
        // Combined class string for convenience
        combined: `${colorMap.base} ${colorMap.text} ${colorMap.border} ${colorMap.hover} ${colorMap.focus}`,
      }
      
    case "soft": {
      // Soft style uses lighter background with colored text
      const softBg = colorMap.base.replace("-500", "-100").replace("bg-", "bg-")
      const softText = colorMap.base.replace("bg-", "text-").replace("-500", "-700")
      const softBorder = colorMap.border.replace("-500", "-200")
      const softHover = colorMap.base.replace("-500", "-200").replace("bg-", "bg-")
      
      return {
        background: softBg,
        text: softText,
        border: softBorder,
        hover: softHover.replace("hover:", "hover:"),
        focus: colorMap.focus,
        combined: `${softBg} ${softText} ${softBorder} ${softHover.replace("hover:", "hover:")} ${colorMap.focus}`,
      }
    }
      
    case "outline": {
      // Outline style uses transparent background with colored border and text
      const outlineText = colorMap.base.replace("bg-", "text-")
      const outlineBorder = colorMap.border
      const outlineHover = colorMap.base.replace("-500", "-50").replace("bg-", "bg-")
      
      return {
        background: "bg-transparent",
        text: outlineText,
        border: outlineBorder,
        hover: outlineHover.replace("hover:", "hover:"),
        focus: colorMap.focus,
        combined: `bg-transparent ${outlineText} ${outlineBorder} ${outlineHover.replace("hover:", "hover:")} ${colorMap.focus}`,
      }
    }
      
    case "ghost": {
      // Ghost style uses subtle coloring with hover effects
      const ghostText = colorMap.base.replace("bg-", "text-")
      const ghostHover = colorMap.base.replace("-500", "-50").replace("bg-", "bg-")
      
      return {
        background: "bg-transparent",
        text: ghostText,
        border: "border-transparent",
        hover: ghostHover.replace("hover:", "hover:"),
        focus: colorMap.focus,
        combined: `bg-transparent ${ghostText} border-transparent ${ghostHover.replace("hover:", "hover:")} ${colorMap.focus}`,
      }
    }
      
    default:
      return {
        background: colorMap.base,
        text: colorMap.text,
        border: colorMap.border,
        hover: colorMap.hover,
        focus: colorMap.focus,
        combined: `${colorMap.base} ${colorMap.text} ${colorMap.border} ${colorMap.hover} ${colorMap.focus}`,
      }
  }
}

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