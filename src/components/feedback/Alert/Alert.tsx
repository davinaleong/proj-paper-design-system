import { forwardRef } from "react"
import { X, Info, CheckCircle, AlertTriangle, AlertCircle, Bell } from "lucide-react"
import { cn } from "../../../utils/cn"
import { getBackgroundColorClasses, getBorderColorClasses, getTextColorClasses } from "../../../utils/colors"
import { Typography } from "../../core/Typography"
import { IconButton } from "../../forms/IconButton"
import type { AlertProps, AlertColor } from "./types"

// Default icons for different alert colors
const DEFAULT_ICONS = {
  default: Info,
  primary: Info,
  secondary: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: AlertCircle,
  error: AlertCircle,
  info: Info,
  accent: Bell,
  paper: Info,
  muted: Info,
  transparent: Info,
  custom: Info,
  // Tailwind colors
  slate: Info,
  gray: Info,
  zinc: Info,
  neutral: Info,
  stone: Info,
  red: AlertCircle,
  orange: AlertTriangle,
  amber: AlertTriangle,
  yellow: AlertTriangle,
  lime: CheckCircle,
  green: CheckCircle,
  emerald: CheckCircle,
  teal: Info,
  cyan: Info,
  sky: Info,
  blue: Info,
  indigo: Info,
  violet: Info,
  purple: Info,
  fuchsia: Info,
  pink: Info,
  rose: Info,
} as const

// Size variants with consistent Paper theme spacing
const SIZE_VARIANTS = {
  sm: {
    container: "p-3 gap-2",
    icon: "w-4 h-4",
    title: "text-sm",
    description: "text-xs",
    closeButton: "w-4 h-4",
  },
  md: {
    container: "p-4 gap-3",
    icon: "w-5 h-5",
    title: "text-base",
    description: "text-sm",
    closeButton: "w-5 h-5",
  },
  lg: {
    container: "p-6 gap-4",
    icon: "w-6 h-6",
    title: "text-lg",
    description: "text-base",
    closeButton: "w-6 h-6",
  },
} as const

// Visual variants with Paper theme styling
const VARIANT_STYLES = {
  default: (color: AlertColor) => ({
    container: cn(
      "bg-stone-50 border border-stone-200",
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: "text-gray-900",
    description: "text-gray-700",
  }),
  
  filled: (color: AlertColor) => ({
    container: cn(
      getBackgroundColorClasses(color, "bold"),
      "border border-transparent text-white"
    ),
    icon: "text-white",
    title: "text-white font-medium",
    description: "text-white/90",
  }),
  
  outline: (color: AlertColor) => ({
    container: cn(
      "bg-transparent border-2",
      getBorderColorClasses(color),
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: getTextColorClasses(color, "bold"),
    description: "text-gray-700",
  }),
  
  soft: (color: AlertColor) => ({
    container: cn(
      getBackgroundColorClasses(color, "subtle"),
      "border border-transparent",
      getTextColorClasses(color, "bold")
    ),
    icon: getTextColorClasses(color, "bold"),
    title: getTextColorClasses(color, "bold"),
    description: "text-gray-700",
  }),
} as const

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "default",
      color = "default",
      size = "md",
      title,
      description,
      icon,
      showDefaultIcon = true,
      actions,
      dismissible = false,
      onDismiss,
      showCloseButton = dismissible,
      closeButton,
      animated = true,
      className,
      children,
      as = "div",
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType
    const sizeStyles = SIZE_VARIANTS[size]
    const variantStyles = VARIANT_STYLES[variant](color)

    // Determine which icon to show
    const getIcon = () => {
      if (icon) return icon
      if (!showDefaultIcon) return null
      
      const IconComponent = DEFAULT_ICONS[color] || Info
      return <IconComponent className={cn("flex-shrink-0", sizeStyles.icon)} />
    }

    // Handle dismiss action
    const handleDismiss = () => {
      onDismiss?.()
    }

    // Render close button
    const renderCloseButton = () => {
      if (!showCloseButton) return null
      
      if (closeButton) return closeButton
      
      return (
        <IconButton
          variant="ghost"
          size="sm"
          icon={X}
          onClick={handleDismiss}
          className={cn(
            "flex-shrink-0 -m-1",
            variant === "filled" ? "text-white hover:bg-white/10" : ""
          )}
          aria-label="Dismiss alert"
        />
      )
    }

    const alertClasses = cn(
      // Base styles
      "relative flex items-start rounded-sm shadow-sm",
      
      // Size and spacing
      sizeStyles.container,
      
      // Variant styles
      variantStyles.container,
      
      // Animation
      animated && "transition-all duration-200 ease-in-out",
      
      // Paper theme enhancements
      "backdrop-blur-sm",
      
      // Custom classes
      className
    )

    return (
      <Component ref={ref} className={alertClasses} role="alert" {...props}>
        {/* Icon */}
        {getIcon() && (
          <div className={cn("flex-shrink-0 mt-0.5", variantStyles.icon)}>
            {getIcon()}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title */}
          {title && (
            <Typography
              variant="body"
              className={cn("font-medium mb-1", sizeStyles.title, variantStyles.title)}
            >
              {title}
            </Typography>
          )}
          
          {/* Description */}
          {description && (
            <Typography
              variant="bodySmall"
              className={cn("leading-relaxed", sizeStyles.description, variantStyles.description)}
            >
              {description}
            </Typography>
          )}
          
          {/* Custom children content */}
          {children}
          
          {/* Actions */}
          {actions && (
            <div className="mt-3 flex flex-wrap gap-2">
              {actions}
            </div>
          )}
        </div>

        {/* Close button */}
        {renderCloseButton()}
      </Component>
    )
  }
)

Alert.displayName = "Alert"