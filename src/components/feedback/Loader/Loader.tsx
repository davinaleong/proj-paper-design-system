import { forwardRef } from "react"
import { cn } from "../../../utils"
import { getTextColorClasses } from "../../../utils/colors"
import type { LoaderProps } from "./types"
import "./Loader.css"

export const Loader = forwardRef<HTMLDivElement | HTMLSpanElement, LoaderProps>(
  (
    {
      loading = true,
      text = "Loading",
      showEllipsis = true,
      color = "neutral",
      size = "md",
      speed = 1.5,
      inline = false,
      className,
      textClassName,
      ellipsisClassName,
      children,
      ...props
    },
    ref
  ) => {
    const textColorClasses = getTextColorClasses(color, "bold")

    const sizeClasses = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }

    // If not loading, don't render anything
    if (!loading) {
      return null
    }

    const ellipsisStyle = {
      "--loader-speed": `${speed}s`
    } as React.CSSProperties

    const baseClassName = cn(
      "paper-loader",
      textColorClasses,
      sizeClasses[size],
      inline ? "inline-flex items-center" : "flex items-center",
      className
    )

    const content = (
      <>
        {/* Text content */}
        <span
          className={cn(
            "paper-loader-text",
            textClassName
          )}
        >
          {children || text}
        </span>

        {/* Animated ellipsis */}
        {showEllipsis && (
          <span
            className={cn(
              "paper-loader-ellipsis",
              "ml-1",
              ellipsisClassName
            )}
            style={ellipsisStyle}
          >
            <span className="paper-loader-dot paper-loader-dot-1">.</span>
            <span className="paper-loader-dot paper-loader-dot-2">.</span>
            <span className="paper-loader-dot paper-loader-dot-3">.</span>
          </span>
        )}
      </>
    )

    if (inline) {
      return (
        <span 
          ref={ref as React.Ref<HTMLSpanElement>} 
          className={baseClassName} 
          {...props}
        >
          {content}
        </span>
      )
    }

    return (
      <div 
        ref={ref as React.Ref<HTMLDivElement>} 
        className={baseClassName} 
        {...props}
      >
        {content}
      </div>
    )
  }
)

Loader.displayName = "Loader"