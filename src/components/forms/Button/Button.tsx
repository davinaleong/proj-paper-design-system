import { Loader2 } from "lucide-react"
import { forwardRef } from "react"
import type { ButtonProps } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/colors"
import { containerResponsiveUI } from "../../../utils/containerFonts"

const sizeClasses = {
  xs: `px-2 py-1 ${containerResponsiveUI.button.sm} gap-1`,
  sm: `px-3 py-1.5 ${containerResponsiveUI.button.sm} gap-1.5`,
  md: `px-4 py-2 ${containerResponsiveUI.button.md} gap-2`,
  lg: `px-6 py-2.5 ${containerResponsiveUI.button.lg} gap-2`,
  xl: `px-8 py-3 ${containerResponsiveUI.button.lg} gap-2.5`,
}

const minWidthClasses = {
  xs: "min-w-16",
  sm: "min-w-20",
  md: "min-w-24",
  lg: "min-w-32",
  xl: "min-w-40",
}

const baseClasses = [
  "inline-flex",
  "items-center",
  "font-medium",
  "transition-all",
  "duration-200",
  "cursor-pointer",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-stone-400",
  "focus:ring-offset-2",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
  "disabled:hover:transform-none",
  "disabled:hover:shadow-none",
]

// Paper theme button styles following Sample.tsx patterns
const variantClasses = {
  solid: [
    "justify-center",
    "rounded-sm",
    "border",
    "shadow-sm",
    "hover:shadow-md",
    "active:shadow-inner",
    "hover:-translate-y-[1px]",
    "active:translate-y-0",
  ],
  outline: [
    "justify-center",
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
    "justify-center",
    "rounded-sm",
    "border",
    "border-transparent",
    "bg-transparent",
    "hover:bg-stone-100/50",
    "hover:border-stone-200/60",
    "active:bg-stone-200/50",
  ],
  link: [
    "justify-start",
    "bg-transparent",
    "border-0",
    "p-0",
    "underline",
    "underline-offset-4",
    "shadow-none",
    "rounded-none",
    "hover:no-underline",
    "hover:opacity-70",
  ],
  plain: [
    "justify-start",
    "bg-transparent",
    "border-0",
    "p-0",
    "shadow-none",
    "rounded-none",
  ],
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = "solid",
  size = "md",
  color = "primary",
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  truncate = false,
  minWidth = false,
  type = "button",
  onClick,
  className,
  ...props
}, ref) => {
  const isDisabled = disabled || loading

  const buttonClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],

    // Apply minimum width if enabled
    minWidth && minWidthClasses[size],

    // Apply color classes for non-link and non-plain variants
    variant !== "link" && variant !== "plain" &&
      getColorClassesWithLuminance(
        color,
        variant === "solid"
          ? "solid"
          : variant === "outline"
          ? "outline"
          : "soft",
        true  // Enable automatic optimal text color calculation
      ),

    // Link variant colors
    variant === "link" &&
      "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300",

    className
  )

  const iconSize = size === "xs" || size === "sm" ? "w-4 h-4" : "w-5 h-5"

  const renderIcon = () => {
    if (loading) {
      return <Loader2 className={cn(iconSize, "animate-spin")} />
    }
    if (Icon) {
      return <Icon className={iconSize} />
    }
    return null
  }

  const renderContent = () => {
    const iconElement = renderIcon()

    // Wrap children in truncation span if truncate is enabled
    const textContent = truncate ? (
      <span className="truncate min-w-0 flex-shrink">{children}</span>
    ) : (
      <span className="whitespace-nowrap inline-flex gap-1">{children}</span>
    )

    if (variant === "link" || variant === "plain") {
      return (
        <>
          {iconElement && iconPosition === "left" && iconElement}
          {textContent}
          {iconElement && iconPosition === "right" && iconElement}
        </>
      )
    }

    return (
      <>
        {iconElement && iconPosition === "left" && iconElement}
        {textContent}
        {iconElement && iconPosition === "right" && iconElement}
      </>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={buttonClasses}
      {...props}
    >
      {renderContent()}
    </button>
  )
})
