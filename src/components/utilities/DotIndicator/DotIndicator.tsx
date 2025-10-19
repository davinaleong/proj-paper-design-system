import { forwardRef } from "react"
import type { DotIndicatorProps } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClasses } from "../../../utils/colors"
import type { ColorStyle } from "../../../utils/colors"

const sizeClasses = {
  xs: "w-1 h-1",
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-3 h-3",
  xl: "w-4 h-4",
}

const baseClasses = [
  "inline-block",
  "rounded-full",
  "transition-all",
  "duration-200",
]

export const DotIndicator = forwardRef<HTMLDivElement, DotIndicatorProps>(
  (
    {
      color = "primary",
      variant = "solid",
      size = "md",
      animated = false,
      animationDuration = 1500,
      animationDelay = 0,
      className,
      style,
      "data-testid": testId,
      ...props
    },
    ref
  ) => {
    // Map dot indicator variant to color style
    const mapVariantToColorStyle = (variant: string): ColorStyle => {
      switch (variant) {
        case "pulse":
          return "soft"
        case "solid":
          return "solid"
        case "soft":
          return "soft"
        case "outline":
          return "outline"
        default:
          return "solid"
      }
    }

    // Get color classes based on mapped variant
    const colorClasses = getColorClasses(color, mapVariantToColorStyle(variant))

    // Animation styles
    const animationStyle = animated
      ? {
          ...style,
          animationDuration: `${animationDuration}ms`,
          animationDelay: `${animationDelay}ms`,
          animationIterationCount: "infinite",
        }
      : style

    // Determine animation class based on variant and animated state
    const getAnimationClass = () => {
      if (!animated) return ""

      switch (variant) {
        case "pulse":
          return "animate-pulse"
        case "solid":
        case "soft":
        case "outline":
        default:
          return "animate-pulse"
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          baseClasses,
          sizeClasses[size],
          colorClasses,
          animated && getAnimationClass(),
          className
        )}
        style={animationStyle}
        data-testid={testId}
        {...props}
      />
    )
  }
)

DotIndicator.displayName = "DotIndicator"
