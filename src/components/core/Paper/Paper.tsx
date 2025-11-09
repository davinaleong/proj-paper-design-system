import { forwardRef } from "react"
import { cn } from "../../../utils/cn.js"
import {
  getBackgroundColorClasses,
  getBorderColorClasses,
} from "../../../utils/colors"
import type { PaperProps } from "./types"

const PADDING_CLASSES = {
  none: "",
  xs: "p-2",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
} as const

// Subtle elevation with dark-mode shadow variants
const ELEVATION_CLASSES = {
  none: "shadow-none",
  sm: "shadow-sm hover:shadow-md dark:shadow-slate-900/40 active:shadow-inner hover:-translate-y-[1px] transition-all duration-200",
  md: "shadow-md hover:shadow-lg dark:shadow-slate-950/50 active:shadow-inner hover:-translate-y-[1px] transition-all duration-200",
  lg: "shadow-lg hover:shadow-xl dark:shadow-black/60 active:shadow-md hover:-translate-y-[1px] transition-all duration-200",
  xl: "shadow-xl hover:shadow-2xl dark:shadow-black/70 active:shadow-lg hover:-translate-y-[1px] transition-all duration-200",
} as const

// Paper texture tuned for both themes
const PAPER_TEXTURE = {
  light: {
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.02) 0%, transparent 50%)
    `,
  },
  dark: {
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255,255,255,0.03) 0%, transparent 50%)
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
      borderColor = "default",
      withTexture = false,
      className,
      children,
      as: Component = "div",
      ...props
    },
    ref
  ) => {
    const getVariantElevation = () => {
      if (elevation) return ELEVATION_CLASSES[elevation]
      switch (variant) {
        case "elevated":
          return ELEVATION_CLASSES.sm
        default:
          return ELEVATION_CLASSES.none
      }
    }

    const backgroundClasses = () => {
      if (variant === "outlined") return "bg-transparent"
      if (background === "paper")
        return "bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100"
      return getBackgroundColorClasses(background, "subtle")
    }

    const borderClasses = () => {
      if (variant === "outlined")
        return cn(
          "border border-slate-300/60 dark:border-slate-700/60 backdrop-blur-sm"
        )
      return cn("border border-stone-200/50 dark:border-slate-800/60")
    }

    const paperClasses = cn(
      "relative rounded-sm [container-type:inline-size]",
      backgroundClasses(),
      borderClasses(),
      PADDING_CLASSES[padding],
      getVariantElevation(),
      "backdrop-blur-sm transition-colors duration-300",
      withTexture &&
        "before:absolute before:inset-0 before:pointer-events-none before:opacity-20 dark:before:opacity-10 before:mix-blend-overlay",
      className
    )

    const style = withTexture
      ? {
          ...PAPER_TEXTURE.light,
          ["@media (prefers-color-scheme: dark)"]: PAPER_TEXTURE.dark,
        }
      : undefined

    return (
      <Component ref={ref} className={paperClasses} style={style} {...props}>
        {children}
      </Component>
    )
  }
)

Paper.displayName = "Paper"
