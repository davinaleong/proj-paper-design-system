import { Loader2, Loader, RefreshCw, RotateCcw, CircleDashed, X } from "lucide-react"
import { cn } from "../../../utils/cn"
import { getColorClassesWithLuminance, getOptimalTextClasses, type ColorVariant } from "../../../utils/color"
import { Typography } from "../../core"
import { IconButton } from "../../forms"
import type { LoadingSpinnerProps, LoadingSpinnerIcon, LoadingSpinnerTextPosition } from "./types"

const spinnerIcons = {
  "loader2": Loader2,
  "loader": Loader,
  "refresh-cw": RefreshCw,
  "rotate-3d": RotateCcw,
  "circle-dashed": CircleDashed,
}

const sizeClasses = {
  xs: "w-3 h-3",
  sm: "w-4 h-4", 
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
}

const textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm", 
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
}

const variantClasses = {
  default: "",
  solid: "shadow-xl border-0",
  outline: "border-2 shadow-lg bg-white/95 backdrop-blur-sm",
  ghost: "border-0 shadow-2xl bg-white/90 backdrop-blur-md",
  elevated: "shadow-2xl border border-stone-200/50 bg-white/98 backdrop-blur-sm",
}

export const LoadingSpinner = ({
  loading = true,
  icon = "loader2",
  size = "md",
  color = "primary",
  variant = "default",
  text,
  textPosition = "right",
  dismissible = false,
  speed = 1,
  background = false,
  centered = false,
  inline = false,
  zIndex = 40,
  className,
  iconClassName,
  textClassName,
  containerClassName,
  onDismiss,
  children,
}: LoadingSpinnerProps) => {
  
  // Don't render if not loading
  if (!loading) {
    return null
  }

  // Get the spinner icon component
  const getSpinnerIcon = () => {
    if (typeof icon === "string") {
      return spinnerIcons[icon as LoadingSpinnerIcon] || Loader2
    }
    return icon
  }

  const SpinnerIcon = getSpinnerIcon()

  // Map color variants to their approximate hex values for luminance calculation
  const getColorHex = (colorVariant: ColorVariant, isSolid: boolean = false): string => {
    const solidColors = {
      primary: "#2563eb", // blue-600
      secondary: "#475569", // slate-600  
      danger: "#dc2626", // red-600
      success: "#16a34a", // green-600
      warning: "#ca8a04", // yellow-600
      info: "#0284c7", // sky-600
      paper: "#0f766e", // teal-600
      accent: "#0f766e", // teal-600
      default: "#4b5563", // gray-600
      muted: "#9ca3af", // gray-400
      transparent: "#ffffff",
      custom: "#ffffff",
      // Full Tailwind spectrum - solid (600 shades)
      slate: "#475569", gray: "#4b5563", zinc: "#52525b", neutral: "#525252", stone: "#57534e",
      red: "#dc2626", orange: "#ea580c", amber: "#d97706", yellow: "#ca8a04", lime: "#65a30d",
      green: "#16a34a", emerald: "#059669", teal: "#0d9488", cyan: "#0891b2", sky: "#0284c7",
      blue: "#2563eb", indigo: "#4f46e5", violet: "#7c3aed", purple: "#9333ea", fuchsia: "#c026d3",
      pink: "#db2777", rose: "#e11d48",
    }
    
    const softColors = {
      primary: "#dbeafe", // blue-50
      secondary: "#f8fafc", // slate-50
      danger: "#fef2f2", // red-50
      success: "#f0fdf4", // green-50
      warning: "#fefce8", // yellow-50
      info: "#f0f9ff", // sky-50
      paper: "#faf9f6", // from paperColors.base
      accent: "#f0fdfa", // teal-50
      default: "#ffffff",
      muted: "#f9fafb", // gray-50
      transparent: "#ffffff",
      custom: "#ffffff",
      // Full Tailwind spectrum - soft (50 shades)
      slate: "#f8fafc", gray: "#f9fafb", zinc: "#fafafa", neutral: "#fafafa", stone: "#fafaf9",
      red: "#fef2f2", orange: "#fff7ed", amber: "#fffbeb", yellow: "#fefce8", lime: "#f7fee7",
      green: "#f0fdf4", emerald: "#ecfdf5", teal: "#f0fdfa", cyan: "#ecfeff", sky: "#f0f9ff",
      blue: "#eff6ff", indigo: "#eef2ff", violet: "#f5f3ff", purple: "#faf5ff", fuchsia: "#fdf4ff",
      pink: "#fdf2f8", rose: "#fff1f2",
    }
    
    const colorMap = isSolid ? solidColors : softColors
    return colorMap[colorVariant as keyof typeof colorMap] || colorMap.default
  }

  // Get color classes and optimal text color
  const backgroundHex = background ? getColorHex(color, variant === "solid") : "#ffffff"
  const optimalTextClasses = background ? getOptimalTextClasses(backgroundHex) : ""
  const colorClasses = background 
    ? getColorClassesWithLuminance(color, variant === "solid" ? "solid" : "soft", true)
    : ""

  // Get spinner color classes
  const getSpinnerColorClasses = () => {
    if (background && optimalTextClasses) {
      return optimalTextClasses
    }
    
    // Default spinner colors without background
    const colorMap = {
      primary: "text-blue-600",
      secondary: "text-slate-600",
      danger: "text-red-600",
      success: "text-green-600", 
      warning: "text-yellow-600",
      info: "text-sky-600",
      paper: "text-teal-600",
      accent: "text-teal-600",
      default: "text-gray-600",
      muted: "text-gray-400",
      transparent: "text-gray-600",
      custom: "text-gray-600",
      // Full spectrum
      slate: "text-slate-600", gray: "text-gray-600", zinc: "text-zinc-600", neutral: "text-neutral-600", stone: "text-stone-600",
      red: "text-red-600", orange: "text-orange-600", amber: "text-amber-600", yellow: "text-yellow-600", lime: "text-lime-600",
      green: "text-green-600", emerald: "text-emerald-600", teal: "text-teal-600", cyan: "text-cyan-600", sky: "text-sky-600",
      blue: "text-blue-600", indigo: "text-indigo-600", violet: "text-violet-600", purple: "text-purple-600", fuchsia: "text-fuchsia-600",
      pink: "text-pink-600", rose: "text-rose-600",
    }
    
    return colorMap[color as keyof typeof colorMap] || colorMap.default
  }

  // Get text color classes
  const getTextColorClasses = () => {
    return background && optimalTextClasses ? optimalTextClasses : "text-gray-700"
  }

  // Animation styles
  const animationStyle = {
    animationDuration: `${speed}s`,
  }

  // Layout configuration based on text position
  const getLayoutClasses = (position: LoadingSpinnerTextPosition) => {
    const baseClasses = "flex items-center"
    
    switch (position) {
      case "left":
        return `${baseClasses} flex-row-reverse`
      case "right":
        return `${baseClasses} flex-row`
      case "top":
        return `${baseClasses} flex-col-reverse`
      case "bottom":
        return `${baseClasses} flex-col`
      default:
        return `${baseClasses} flex-row`
    }
  }

  // Spacing classes based on text position
  const getSpacingClasses = (position: LoadingSpinnerTextPosition) => {
    switch (position) {
      case "left":
      case "right":
        return "space-x-2"
      case "top":
      case "bottom":
        return "space-y-2"
      default:
        return "space-x-2"
    }
  }

  // Content to display
  const textContent = children || text

  // Base spinner element
  const spinnerElement = (
    <SpinnerIcon
      className={cn(
        sizeClasses[size],
        getSpinnerColorClasses(),
        "animate-spin",
        iconClassName
      )}
      style={animationStyle}
    />
  )

  // Text element - handle children differently from text to avoid nesting issues
  const textElement = textContent && (
    children ? (
      // When children are provided, render them directly without Typography wrapper
      <div
        className={cn(
          textSizeClasses[size],
          getTextColorClasses(),
          textClassName
        )}
      >
        {children}
      </div>
    ) : (
      // When text is provided, use Typography wrapper
      <Typography
        variant="body"
        className={cn(
          textSizeClasses[size],
          getTextColorClasses(),
          textClassName
        )}
      >
        {text}
      </Typography>
    )
  )

  // Content container
  const content = (
    <div className={cn(
      getLayoutClasses(textPosition),
      getSpacingClasses(textPosition),
      textContent ? "" : "justify-center"
    )}>
      {spinnerElement}
      {textElement}
    </div>
  )

  // Dismiss button
  const dismissButton = dismissible && (
    <IconButton
      icon={X}
      variant="ghost"
      size="sm"
      color={color}
      onClick={onDismiss}
      className="ml-2"
      aria-label="Dismiss loading"
    />
  )

  // Main container
  const containerElement = (
    <div
      className={cn(
        // Base classes
        inline ? "inline-flex" : "flex",
        centered && "justify-center items-center",
        
        // Background styling (Paper Design System)
        background && "rounded-lg p-4",
        background && variantClasses[variant],
        background && (variant === "solid" ? colorClasses : "bg-white border-stone-200"),
        
        // Z-index for overlay scenarios
        `z-${zIndex}`,
        
        // Custom classes
        className
      )}
    >
      <div className={cn(
        "flex items-center",
        dismissible && "justify-between w-full",
        containerClassName
      )}>
        {content}
        {dismissButton}
      </div>
    </div>
  )

  return containerElement
}

LoadingSpinner.displayName = "LoadingSpinner"
