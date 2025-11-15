import { forwardRef } from "react"
import { cn } from "../../../utils/cn.js"
import {
  getThemeAwareSemanticClasses,
  type ColorVariant,
} from "../../../utils/color"
import type { PaperProps } from "./types"

const PADDING_CLASSES = {
  none: "",
  xs: "p-2",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
} as const

// Subtle elevation classes
const ELEVATION_CLASSES = {
  none: "shadow-none",
  sm: "shadow-sm hover:shadow-md active:shadow-inner hover:-translate-y-[1px] transition-all duration-200",
  md: "shadow-md hover:shadow-lg active:shadow-inner hover:-translate-y-[1px] transition-all duration-200",
  lg: "shadow-lg hover:shadow-xl active:shadow-md hover:-translate-y-[1px] transition-all duration-200",
  xl: "shadow-xl hover:shadow-2xl active:shadow-lg hover:-translate-y-[1px] transition-all duration-200",
} as const

// Paper texture tuned for both themes - per PAPER_RECOLOR_PLAN.md
const PAPER_TEXTURE = {
  light: {
    // Minimal Warm theme - soft, paper-like texturing
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.015) 0%, transparent 50%)
    `,
  },
  dark: {
    // Black Paper theme - smooth, elegant black paper texture
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.02) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255,255,255,0.015) 0%, transparent 50%)
    `,
  },
}

export const Paper = forwardRef<HTMLElement, PaperProps>(
  (
    {
      variant = "flat",
      padding = "md",
      elevation,
      background = "paper",
      withTexture = false,
      className,
      children,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const getVariantElevation = () => {
      if (elevation) return ELEVATION_CLASSES[elevation as keyof typeof ELEVATION_CLASSES]
      switch (variant) {
        case "elevated":
          return ELEVATION_CLASSES.sm
        default:
          return ELEVATION_CLASSES.none
      }
    }

    const backgroundClasses = () => {
      if (variant === "outlined") return "bg-transparent"
      
      if (background === "paper" || background === "base") {
        return "paper-bg-primary paper-text-primary"
      }
      
      if (background === "secondary" || background === "subtle") {
        return "paper-bg-secondary paper-text-primary"
      }
      
      if (background === "elevated") {
        return "paper-bg-elevated paper-text-primary"
      }
      
      // For ColorVariant backgrounds that should use Tailwind classes
      try {
        return getBackgroundColorClasses(background as ColorVariant, "light")
      } catch {
        // Fallback to paper theme
        return "paper-bg-primary paper-text-primary"
      }
    }

    const borderClasses = () => {
      if (variant === "outlined") {
        return cn("border paper-border-medium backdrop-blur-sm")
      }
      return cn("border paper-border-light")
    }

    const paperClasses = cn(
      "relative rounded-sm [container-type:inline-size]",
      backgroundClasses(),
      borderClasses(),
      PADDING_CLASSES[padding],
      getVariantElevation(),
      "backdrop-blur-sm transition-colors duration-300",
      withTexture &&
        "before:absolute before:inset-0 before:pointer-events-none before:opacity-20 before:mix-blend-overlay",
      className
    )

    // Apply texture conditionally based on theme
    const isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark")
    const textureStyles = withTexture 
      ? (isDark ? PAPER_TEXTURE.dark : PAPER_TEXTURE.light) 
      : undefined

    return (
      <Component 
        ref={ref} 
        className={paperClasses} 
        style={textureStyles} 
        data-theme-texture={withTexture ? "true" : "false"}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Paper.displayName = "Paper"
