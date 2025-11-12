import { forwardRef, useEffect, useState, useCallback } from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Bell } from "lucide-react"
import { cn } from "../../../utils/cn"
import { getSemanticColorClasses, type StyleVariant } from "../../../utils/color"
import { IconButton } from "../../forms/IconButton/IconButton"
import type { ToastProps, ToastColor } from "./types"

/**
 * Toast component for notifications and feedback
 * 
 * Features:
 * - Semantic color system integration
 * - Multiple visual variants (solid, soft, outline, ghost, plain)
 * - Auto-dismiss functionality with progress bar
 * - Dismissible with custom close button
 * - Icon support with semantic defaults
 * - Actions support
 * - Accessibility compliant
 * - Paper theme integration
 */

// Default icons for semantic colors
const DEFAULT_ICONS = {
  success: CheckCircle,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  primary: Bell,
  secondary: Bell,
  accent: Bell,
  neutral: Bell,
  default: Bell,
} as const

// Size variants
const SIZE_CLASSES = {
  sm: {
    container: "px-3 py-2 gap-2",
    icon: "w-4 h-4",
    text: "text-sm",
    title: "text-sm font-medium",
    description: "text-xs",
    closeButton: "w-6 h-6",
  },
  md: {
    container: "px-4 py-3 gap-3",
    icon: "w-5 h-5", 
    text: "text-sm",
    title: "text-sm font-medium",
    description: "text-sm",
    closeButton: "w-6 h-6",
  },
  lg: {
    container: "px-5 py-4 gap-4",
    icon: "w-6 h-6",
    text: "text-base",
    title: "text-base font-medium", 
    description: "text-sm",
    closeButton: "w-7 h-7",
  },
} as const

// Visual variants using semantic color system
const getVariantStyles = (color: ToastColor, variant: NonNullable<ToastProps["variant"]>) => {
  const colorClasses = getSemanticColorClasses(color, variant as StyleVariant)
  
  switch (variant) {
    case "solid":
      return {
        container: cn(
          colorClasses.background,
          colorClasses.text,
          "border-transparent shadow-lg"
        ),
        content: "text-current",
        icon: "text-current",
        closeButton: "text-current/80 hover:text-current",
        progress: "bg-current/20",
        progressBar: "bg-current/60",
      }
      
    case "soft":
      return {
        container: cn(
          colorClasses.background,
          colorClasses.text,
          "border",
          colorClasses.border
        ),
        content: "text-current",
        icon: "text-current",
        closeButton: "text-current/60 hover:text-current/80",
        progress: "bg-current/10",
        progressBar: "bg-current/40",
      }
      
    case "outline":
      return {
        container: cn(
          "bg-white dark:bg-gray-900 border-2",
          colorClasses.border,
          colorClasses.text
        ),
        content: "text-current",
        icon: "text-current",
        closeButton: "text-current/60 hover:text-current/80",
        progress: "bg-current/10",
        progressBar: "bg-current/40",
      }
      
    case "ghost":
      return {
        container: cn(
          "bg-white/80 dark:bg-gray-900/80 border backdrop-blur-md",
          colorClasses.border,
          colorClasses.text
        ),
        content: "text-current",
        icon: "text-current",
        closeButton: "text-current/60 hover:text-current/80",
        progress: "bg-current/10",
        progressBar: "bg-current/40",
      }
      
    case "plain":
    default:
      return {
        container: cn(
          "bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-700",
          colorClasses.text
        ),
        content: "text-current",
        icon: "text-current",
        closeButton: "text-current/60 hover:text-current/80",
        progress: "bg-current/10",
        progressBar: "bg-current/40",
      }
  }
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
      showProgress = true,
      pauseOnHover = true,
      animated = true,
      visible = true,
      className,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(visible)
    const [isPaused, setIsPaused] = useState(false)
    const [progress, setProgress] = useState(100)
    
    const sizeClasses = SIZE_CLASSES[size]
    const variantStyles = getVariantStyles(color, variant)
    
    // Handle dismiss
    const handleDismiss = useCallback(() => {
      setIsVisible(false)
      onDismiss?.()
    }, [onDismiss])
    
    // Auto-dismiss functionality
    useEffect(() => {
      if (!visible || !duration || duration <= 0 || !dismissible) return
      
      const startTime = Date.now()
      const remainingTime = duration
      
      const tick = () => {
        if (isPaused) return
        
        const elapsed = Date.now() - startTime
        const newProgress = Math.max(0, ((remainingTime - elapsed) / duration) * 100)
        
        setProgress(newProgress)
        
        if (newProgress <= 0) {
          handleDismiss()
        }
      }
      
      const interval = setInterval(tick, 16) // ~60fps
      
      return () => clearInterval(interval)
    }, [visible, duration, dismissible, isPaused, handleDismiss])
    
    // Handle mouse events for pause functionality
    const handleMouseEnter = () => {
      if (pauseOnHover) setIsPaused(true)
    }
    
    const handleMouseLeave = () => {
      if (pauseOnHover) setIsPaused(false)
    }
    
    // Get icon to display
    const getIcon = () => {
      if (icon) return icon
      if (!showDefaultIcon) return null
      
      const IconComponent = DEFAULT_ICONS[color as keyof typeof DEFAULT_ICONS] || DEFAULT_ICONS.default
      return <IconComponent className={cn(sizeClasses.icon, variantStyles.icon)} />
    }
    
    // Get close button
    const getCloseButton = () => {
      if (!dismissible || !showCloseButton) return null
      
      if (closeButton) return closeButton
      
      return (
        <IconButton
          icon={X}
          variant="ghost"
          size="sm"
          onClick={handleDismiss}
          className={cn("flex-shrink-0", variantStyles.closeButton)}
          aria-label="Close toast"
        />
      )
    }
    
    if (!isVisible) return null
    
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          "relative flex items-start rounded-lg shadow-sm",
          "transform transition-all duration-300 ease-out",
          
          // Size and spacing
          sizeClasses.container,
          
          // Variant styles
          variantStyles.container,
          
          // Animation
          animated && visible && "animate-in slide-in-from-right-full",
          animated && !visible && "animate-out slide-out-to-right-full",
          
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="alert"
        aria-live="polite"
        {...props}
      >
        {/* Icon */}
        {getIcon() && (
          <div className="flex-shrink-0 pt-0.5">
            {getIcon()}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          {title && (
            <div className={cn(sizeClasses.title, variantStyles.content)}>
              {title}
            </div>
          )}
          
          {/* Description */}
          {description && (
            <div className={cn(
              sizeClasses.description,
              variantStyles.content,
              "opacity-90",
              title && "mt-1"
            )}>
              {description}
            </div>
          )}
          
          {/* Actions */}
          {actions && (
            <div className="mt-3 flex gap-2">
              {actions}
            </div>
          )}
        </div>
        
        {/* Close button */}
        {getCloseButton() && (
          <div className="flex-shrink-0">
            {getCloseButton()}
          </div>
        )}
        
        {/* Progress bar */}
        {showProgress && duration > 0 && dismissible && (
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-1 rounded-b-lg overflow-hidden",
            variantStyles.progress
          )}>
            <div 
              className={cn("h-full transition-all duration-75 ease-linear", variantStyles.progressBar)}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    )
  }
)

Toast.displayName = "Toast"