import { forwardRef, useEffect, useState, useRef, useCallback } from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Bell } from "lucide-react"
import { cn } from "../../../utils/cn"
import { getBackgroundColorClasses, getTextColorClasses, getBorderColorClasses } from "../../../utils/colors"
import { IconButton } from "../../forms/IconButton"
import type { ToastProps, ToastColor } from "./types"

// Size classes for toast components
const SIZE_CLASSES = {
  sm: {
    container: "p-3 text-sm",
    icon: "w-4 h-4",
    title: "text-sm font-medium",
    description: "text-xs",
    closeButton: "w-4 h-4",
    progress: "h-1",
  },
  md: {
    container: "p-4 text-base",
    icon: "w-5 h-5",
    title: "text-base font-medium",
    description: "text-sm",
    closeButton: "w-5 h-5",
    progress: "h-1",
  },
  lg: {
    container: "p-6 text-lg",
    icon: "w-6 h-6",
    title: "text-lg font-medium",
    description: "text-base",
    closeButton: "w-6 h-6",
    progress: "h-1.5",
  },
} as const

// Base classes for all toasts
const baseClasses = [
  "relative",
  "flex",
  "items-start",
  "gap-3",
  "rounded-sm", // Paper theme consistency
  "border",
  "shadow-lg",
  "backdrop-blur-sm",
  "max-w-md",
  "w-full",
  "transition-all",
  "duration-300",
  "ease-in-out",
]

// Visual variants following button variant patterns
const VARIANT_STYLES = {
  solid: (color: ToastColor) => ({
    container: cn(
      getBackgroundColorClasses(color, "bold"),
      "border-transparent text-white shadow-lg"
    ),
    icon: "text-white",
    title: "text-white font-medium",
    description: "text-white/90",
    closeButton: "text-white/80 hover:text-white",
    progress: "bg-white/20",
    progressBar: "bg-white/60",
    actions: "[&_button]:border-white/40 [&_button:hover]:bg-white/20 [&_button:hover]:border-white/60 [&_button]:bg-transparent [&_button]:shadow-none",
  }),
  
  solid: (color: ToastColor) => ({
    container: cn(
      "bg-white dark:bg-gray-900 border-2 border-stone-300 dark:border-gray-600",
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-200 dark:text-gray-50",
    description: "text-gray-300 dark:text-gray-100",
    closeButton: "text-gray-300 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-50",
    progress: "bg-gray-200 dark:bg-gray-700",
    progressBar: getBackgroundColorClasses(color, "bold"),
    actions: "",
  }),
  
  ghost: (color: ToastColor) => ({
    container: cn(
      "bg-white/80 dark:bg-gray-900/80 border border-stone-200/60 dark:border-gray-700/60 backdrop-blur-md",
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-200 dark:text-gray-50",
    description: "text-gray-300 dark:text-gray-100",
    closeButton: "text-gray-300 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-50",
    progress: "bg-gray-200/60 dark:bg-gray-700/60",
    progressBar: getBackgroundColorClasses(color, "bold"),
    actions: "",
  }),
  
  soft: (color: ToastColor) => ({
    container: cn(
      getBackgroundColorClasses(color, "subtle"),
      "border",
      getBorderColorClasses(color, "soft"),
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-200 dark:text-gray-50",
    description: "text-gray-300 dark:text-gray-100",
    closeButton: "text-gray-300 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-50",
    progress: "bg-gray-200 dark:bg-gray-700",
    progressBar: getBackgroundColorClasses(color, "bold"),
    actions: "",
  }),
  
  plain: (color: ToastColor) => ({
    container: cn(
      "bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-700",
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-200 dark:text-gray-50",
    description: "text-gray-300 dark:text-gray-100",
    closeButton: "text-gray-300 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-50",
    progress: "bg-gray-200 dark:bg-gray-700",
    progressBar: getBackgroundColorClasses(color, "bold"),
    actions: "",
  }),
  
  outline: (color: ToastColor) => ({
    container: cn(
      "bg-white dark:bg-gray-900 border-2",
      getBorderColorClasses(color),
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-200 dark:text-gray-50",
    description: "text-gray-300 dark:text-gray-100",
    closeButton: "text-gray-300 hover:text-gray-200 dark:text-gray-200 dark:hover:text-gray-50",
    progress: "bg-gray-200 dark:bg-gray-700",
    progressBar: getBackgroundColorClasses(color, "bold"),
    actions: "",
  }),
} as const

// Default icons for different color variants
const DEFAULT_ICONS = {
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  primary: Bell,
  secondary: Bell,
  default: Bell,
} as const

// Animation classes based on position
const ANIMATION_CLASSES = {
  // Entry animations
  enter: {
    up: "animate-in slide-in-from-bottom-2 fade-in",
    down: "animate-in slide-in-from-top-2 fade-in",
    left: "animate-in slide-in-from-right-2 fade-in",
    right: "animate-in slide-in-from-left-2 fade-in",
  },
  // Exit animations
  exit: {
    up: "animate-out slide-out-to-bottom-2 fade-out",
    down: "animate-out slide-out-to-top-2 fade-out",
    left: "animate-out slide-out-to-right-2 fade-out",
    right: "animate-out slide-out-to-left-2 fade-out",
  },
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = "solid",
      color = "default",
      size = "md",
      title,
      description,
      icon,
      showDefaultIcon = true,
      actions,
      dismissible = true,
      onDismiss,
      showCloseButton = true,
      closeButton,
      duration = 5000,
      position = "top-right",
      showProgress = true,
      pauseOnHover = true,
      animated = true,
      animationDirection = "auto",
      visible = true,
      onAnimationComplete,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(visible)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(100)
    const progressRef = useRef<number>(100)
    const animationRef = useRef<number | null>(null)

    // Determine animation direction from position if auto
    const getAnimationDirection = () => {
      if (animationDirection !== "auto") return animationDirection
      
      switch (position) {
        case "top-left":
        case "top-center":
        case "top-right":
          return "down"
        case "bottom-left":
        case "bottom-center":
        case "bottom-right":
          return "up"
        case "center":
          return "up"
        default:
          return "right"
      }
    }

    // Handle dismiss
    const handleDismiss = useCallback(() => {
      if (animated) {
        setIsVisible(false)
        setTimeout(() => {
          onDismiss?.()
          onAnimationComplete?.()
        }, 300) // Match animation duration
      } else {
        onDismiss?.()
        onAnimationComplete?.()
      }
    }, [animated, onDismiss, onAnimationComplete])

    // Handle auto-dismiss
    useEffect(() => {
      if (duration > 0 && isVisible && !isPaused) {
        const startTime = Date.now()
        const initialProgress = progressRef.current

        const updateProgress = () => {
          const elapsed = Date.now() - startTime
          const remaining = Math.max(0, (duration * initialProgress / 100) - elapsed)
          const newProgress = (remaining / duration) * 100
          
          progressRef.current = newProgress
          setProgress(newProgress)

          if (remaining > 0) {
            animationRef.current = requestAnimationFrame(updateProgress)
          } else {
            handleDismiss()
          }
        }

        animationRef.current = requestAnimationFrame(updateProgress)

        return () => {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
          }
        }
      }
    }, [duration, isVisible, isPaused, handleDismiss])

    // Handle hover pause
    const handleMouseEnter = () => {
      if (pauseOnHover && duration > 0) {
        setIsPaused(true)
      }
    }

    const handleMouseLeave = () => {
      if (pauseOnHover && duration > 0) {
        setIsPaused(false)
      }
    }

    // Get styles for current variant and color
    const styles = VARIANT_STYLES[variant](color)
    const sizeClasses = SIZE_CLASSES[size]

    // Get default icon if none provided
    const getIcon = () => {
      if (icon) return icon
      if (!showDefaultIcon) return null
      
      const IconComponent = DEFAULT_ICONS[color as keyof typeof DEFAULT_ICONS] || DEFAULT_ICONS.default
      return <IconComponent className={cn(sizeClasses.icon, styles.icon)} />
    }

    // Get close button
    const getCloseButton = () => {
      if (!dismissible || !showCloseButton) return null
      
      if (closeButton) return closeButton
      
      return (
        <IconButton
          icon={X}
          variant="ghost"
          size={size === "lg" ? "md" : "sm"}
          onClick={handleDismiss}
          className={cn("flex-shrink-0", styles.closeButton)}
          aria-label="Close toast"
        />
      )
    }

    // Don't render if not visible and not animating
    if (!visible && !isVisible) return null

    const direction = getAnimationDirection()
    
    const toastClasses = cn(
      baseClasses,
      sizeClasses.container,
      styles.container,
      
      // Animation classes
      animated && isVisible && ANIMATION_CLASSES.enter[direction],
      animated && !isVisible && ANIMATION_CLASSES.exit[direction],
      
      // Hover effect
      "hover:shadow-xl hover:-translate-y-[1px]",
      
      className
    )

    return (
      <div
        ref={ref}
        className={toastClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {/* Progress bar */}
        {showProgress && duration > 0 && (
          <div className={cn(
            "absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-sm",
            sizeClasses.progress,
            styles.progress
          )}>
            <div 
              className={cn(
                "h-full transition-all duration-100 ease-linear rounded-b-sm",
                styles.progressBar
              )}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Icon */}
        {getIcon() && (
          <div className="flex-shrink-0 mt-0.5">
            {getIcon()}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          {title && (
            <div className={cn(sizeClasses.title, styles.title, "mb-1")}>
              {title}
            </div>
          )}

          {/* Description */}
          {description && (
            <div className={cn(sizeClasses.description, styles.description, title && "mt-1")}>
              {description}
            </div>
          )}

          {/* Actions */}
          {actions && (
            <div className={cn("mt-3 flex gap-2", styles.actions)}>
              {actions}
            </div>
          )}
        </div>

        {/* Close button */}
        <div className="flex-shrink-0">
          {getCloseButton()}
        </div>
      </div>
    )
  }
)

Toast.displayName = "Toast"