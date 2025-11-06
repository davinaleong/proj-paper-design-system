import { forwardRef } from "react"
import { Loader2 } from "lucide-react"
import type { IconButtonProps } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/colors"

// Square icon button sizes following paper theme
const sizeClasses = {
  xs: "w-6 h-6 p-1",
  sm: "w-8 h-8 p-1.5",
  md: "w-10 h-10 p-2",
  lg: "w-12 h-12 p-2.5",
  xl: "w-16 h-16 p-3",
}

const iconSizeClasses = {
  xs: "w-4 h-4",
  sm: "w-5 h-5",
  md: "w-6 h-6",
  lg: "w-7 h-7",
  xl: "w-10 h-10",
}

const baseClasses = [
  "inline-flex",
  "items-center",
  "justify-center",
  "font-medium",
  "transition-all",
  "duration-200",
  "cursor-pointer",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
  "disabled:hover:transform-none",
  "disabled:hover:shadow-none",
]

// Paper theme icon button styles following Sample.tsx patterns
const variantClasses = {
  solid: [
    "rounded-sm",
    "border",
    "shadow-sm",
    "hover:shadow-md",
    "active:shadow-inner",
    "hover:-translate-y-[1px]",
    "active:translate-y-0",
  ],
  outline: [
    "rounded-sm",
    "border-2",
    "bg-transparent",
    "shadow-sm",
    "hover:shadow-md",
    "active:shadow-inner",
    "hover:-translate-y-[1px]",
    "active:translate-y-0",
  ],
  ghost: [
    "rounded-sm",
    "border",
    "border-transparent",
    "bg-transparent",
    "hover:bg-stone-100/50",
    "hover:border-stone-200/60",
    "active:bg-stone-200/50",
  ],
  plain: [
    "bg-transparent",
    "border-0",
    "shadow-none",
    "rounded-none",
  ],
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon: Icon,
  "aria-label": ariaLabel,
  variant = "solid",
  size = "md",
  color = "primary",
  loading = false,
  disabled = false,
  type = "button",
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onContextMenu,
  className,
}, ref) => {
  const isDisabled = disabled || loading

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    
    // Apply color classes for non-plain variants
    variant !== "plain" &&
      getColorClassesWithLuminance(
        color,
        variant === "solid" ? "solid" : variant === "outline" ? "outline" : "soft",
        true  // Enable automatic optimal text color calculation
      ),
    
    className
  )

  const iconClasses = iconSizeClasses[size]

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onContextMenu={onContextMenu}
      disabled={isDisabled}
      className={buttonClasses}
      aria-label={ariaLabel}
    >
      {loading ? (
        <Loader2 className={cn(iconClasses, "animate-spin")} />
      ) : (
        <Icon className={iconClasses} />
      )}
    </button>
  )
})

IconButton.displayName = 'IconButton'
