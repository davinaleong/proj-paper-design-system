import { useEffect, useRef, useCallback } from "react"
import { cn } from "../../../utils/cn"
import { getColorClassesWithLuminance, getOptimalTextClasses, type ColorVariant } from "../../../utils/colors"
import { Typography } from "../../core"
import { Button } from "../../forms"
import type { ConfirmationDialogProps, ConfirmationDialogAction } from "./types"

const variantClasses = {
  solid: "shadow-xl border-0",
  outline: "border-2 shadow-lg bg-white/95 backdrop-blur-sm",
  ghost: "border-0 shadow-2xl bg-white/90 backdrop-blur-md",
  elevated: "shadow-2xl border border-stone-200/50 bg-white/98 backdrop-blur-sm",
}

const sizeClasses = {
  sm: "max-w-sm w-full",
  md: "max-w-md w-full",
  lg: "max-w-lg w-full",
}

export const ConfirmationDialog = ({
  open = false,
  title,
  message,
  variant = "elevated",
  color = "default",
  size = "md",
  icon: Icon,
  backdrop = true,
  closeOnBackdropClick = false, // Default to false for confirmation dialogs
  closeOnEscape = true,
  children,
  yesText = "Yes",
  noText = "No",
  cancelText = "Cancel",
  showYes = true,
  showNo = false,
  showCancel = true,
  yesColor = "primary",
  noColor = "danger",
  cancelColor = "secondary",
  zIndex = 50,
  className,
  contentClassName,
  onAction,
  onYes,
  onNo,
  onCancel,
  onClose,
}: ConfirmationDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Handle dialog open/close with native dialog methods
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [open])

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

  // Calculate optimal text colors based on the background
  const backgroundHex = getColorHex(color, variant === "solid")
  const optimalTextClasses = getOptimalTextClasses(backgroundHex)

  // Handle action callbacks
  const handleAction = useCallback((action: ConfirmationDialogAction) => {
    onAction?.(action)
    
    switch (action) {
      case "yes":
        onYes?.()
        break
      case "no":
        onNo?.()
        break
      case "cancel":
        onCancel?.()
        break
    }
    
    onClose?.()
  }, [onAction, onYes, onNo, onCancel, onClose])

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDialogElement>) => {
    if (closeOnBackdropClick && backdrop !== "static") {
      const dialog = e.currentTarget
      const rect = dialog.getBoundingClientRect()
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      )
      
      // If the click was on the backdrop (outside dialog content)
      if (!isInDialog) {
        handleAction("cancel")
      }
    }
  }, [closeOnBackdropClick, backdrop, handleAction])

  // Handle escape key
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleDialogClose = () => {
      if (open) {
        handleAction("cancel")
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape && open) {
        e.preventDefault() // Prevent default dialog close
        handleAction("cancel")
      }
    }

    if (open) {
      dialog.addEventListener("close", handleDialogClose)
      dialog.addEventListener("keydown", handleEscape)
      
      return () => {
        dialog.removeEventListener("close", handleDialogClose)
        dialog.removeEventListener("keydown", handleEscape)
      }
    }
  }, [open, closeOnEscape, handleAction])

  // Don't render anything if closed
  if (!open) {
    return null
  }

  // Get color classes
  const colorClasses = getColorClassesWithLuminance(color, variant === "solid" ? "solid" : "soft", true)

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "backdrop:bg-black/40 backdrop:backdrop-blur-sm",
        "p-0 border-0 bg-transparent",
        "w-full h-full max-w-none max-h-none",
        "fixed inset-0",
        `z-${zIndex}`,
        className
      )}
      onClick={handleBackdropClick}
    >
      {/* Dialog Content */}
      <div
        className={cn(
          "flex flex-col",
          "transition-all duration-300 ease-in-out",
          "rounded-lg overflow-hidden",
          "mx-auto mt-[20vh]",
          // Size classes
          sizeClasses[size],
          // Variant classes
          variantClasses[variant],
          // Color classes
          variant === "solid" ? colorClasses : "bg-white border-stone-200",
          // Custom classes
          contentClassName
        )}
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking dialog content
      >
        {/* Header with Icon and Title */}
        {(Icon || title) && (
          <div className={cn(
            "flex items-center space-x-3 p-6 pb-4",
            optimalTextClasses
          )}>
            {Icon && (
              <div className="flex-shrink-0">
                <Icon className={cn(
                  "w-6 h-6",
                  optimalTextClasses || "text-stone-600"
                )} />
              </div>
            )}
            
            {title && (
              <Typography 
                variant="h4" 
                className={cn(
                  "font-semibold",
                  optimalTextClasses || "text-stone-900"
                )}
              >
                {title}
              </Typography>
            )}
          </div>
        )}

        {/* Body */}
        <div className={cn(
          "px-6",
          !(Icon || title) && "pt-6", // Add top padding if no header
          optimalTextClasses
        )}>
          {children ? (
            children
          ) : message ? (
            <Typography 
              variant="body" 
              className={cn(
                "leading-relaxed",
                optimalTextClasses || "text-stone-700"
              )}
            >
              {message}
            </Typography>
          ) : null}
        </div>

        {/* Footer with Action Buttons */}
        <div className="flex items-center justify-end space-x-3 p-6 pt-8">
          {showCancel && (
            <Button
              variant="outline"
              color={cancelColor}
              onClick={() => handleAction("cancel")}
            >
              {cancelText}
            </Button>
          )}
          
          {showNo && (
            <Button
              variant="outline"
              color={noColor}
              onClick={() => handleAction("no")}
            >
              {noText}
            </Button>
          )}
          
          {showYes && (
            <Button
              variant="solid"
              color={yesColor}
              onClick={() => handleAction("yes")}
            >
              {yesText}
            </Button>
          )}
        </div>
      </div>
    </dialog>
  )
}

ConfirmationDialog.displayName = "ConfirmationDialog"