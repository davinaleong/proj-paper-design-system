import { forwardRef } from "react"
import { cn } from "../../../utils"
import { getColorClasses } from "../../../utils/colors"
import type { SkeletonProps } from "./types"
import "./Skeleton.css"

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "text",
      size = "md",
      animation = "shimmer",
      lines = 1,
      width,
      height,
      rounded = "md",
      paper = true,
      color,
      speed = 2,
      className,
      children,
      loading = true,
      ...props
    },
    ref
  ) => {
    // If not loading, don't render anything
    if (!loading) {
      return null
    }

    const baseClasses = cn(
      "paper-skeleton",
      paper && "paper-surface",
      `paper-skeleton--${variant}`,
      `paper-skeleton--${size}`,
      animation !== "none" && `paper-skeleton--${animation}`,
      `paper-skeleton--rounded-${rounded}`,
      color && getColorClasses(color, "soft"),
      className
    )

    const style: React.CSSProperties = {
      "--skeleton-speed": `${speed}s`,
      ...(width && { width: typeof width === "number" ? `${width}px` : width }),
      ...(height && { height: typeof height === "number" ? `${height}px` : height }),
    } as React.CSSProperties

    // Handle custom variant with children
    if (variant === "custom" && children) {
      return (
        <div ref={ref} className={baseClasses} style={style} {...props}>
          {children}
        </div>
      )
    }

    // Handle text variant with multiple lines
    if (variant === "text" && lines > 1) {
      return (
        <div ref={ref} className="space-y-2" {...props}>
          {Array.from({ length: lines }, (_, index) => (
            <div
              key={index}
              className={cn(
                baseClasses,
                index === lines - 1 && "w-3/4" // Last line is shorter
              )}
              style={style}
            />
          ))}
        </div>
      )
    }

    // Single skeleton element
    return (
      <div
        ref={ref}
        className={baseClasses}
        style={style}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"

// Convenience components for common use cases
export const SkeletonText = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  (props, ref) => <Skeleton ref={ref} variant="text" {...props} />
)

SkeletonText.displayName = "SkeletonText"

export const SkeletonImage = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'> & {
  aspectRatio?: "square" | "video" | "photo" | "wide"
}>((props, ref) => {
  const { aspectRatio = "photo", className, ...rest } = props
  
  return (
    <Skeleton
      ref={ref}
      variant="image"
      className={cn(
        `paper-skeleton--aspect-${aspectRatio}`,
        className
      )}
      {...rest}
    />
  )
})

SkeletonImage.displayName = "SkeletonImage"

export const SkeletonAvatar = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  (props, ref) => <Skeleton ref={ref} variant="avatar" rounded="full" {...props} />
)

SkeletonAvatar.displayName = "SkeletonAvatar"

export const SkeletonButton = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  (props, ref) => <Skeleton ref={ref} variant="button" {...props} />
)

SkeletonButton.displayName = "SkeletonButton"

export const SkeletonCard = forwardRef<HTMLDivElement, Omit<SkeletonProps, 'variant'>>(
  (props, ref) => <Skeleton ref={ref} variant="card" {...props} />
)

SkeletonCard.displayName = "SkeletonCard"