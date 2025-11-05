import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../utils/cn"
import { getColorClassesWithLuminance, getOptimalTextClasses, type ColorVariant } from "../../../utils/colors"
import type { ModalProps, ModalState } from "./types"
import { ModalHeader } from "./ModalHeader"
import { ModalBody } from "./ModalBody"
import { ModalFooter } from "./ModalFooter"
import { ModalTaskbarItem } from "./ModalTaskbarItem"

const variantClasses = {
  solid: "shadow-xl border-0",
  outline: "border-2 shadow-lg bg-white/95 backdrop-blur-sm",
  ghost: "border-0 shadow-2xl bg-white/90 backdrop-blur-md",
  elevated: "shadow-2xl border border-stone-200/50 bg-white/98 backdrop-blur-sm",
}

const sizeClasses = {
  xs: "max-w-sm w-full",
  sm: "max-w-md w-full", 
  md: "max-w-lg w-full",
  lg: "max-w-2xl w-full",
  xl: "max-w-4xl w-full",
  full: "w-full h-full max-w-none",
}

export const Modal = ({
  open = false,
  state: controlledState,
  title,
  description,
  variant = "elevated",
  color = "default",
  size = "md",
  icon,
  minimizable = true,
  maximizable = true,
  closable = true,
  draggable: _draggable = false, // Future feature
  resizable: _resizable = false, // Future feature
  backdrop = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  header,
  children,
  footer,
  minimizedPosition = { x: 20, y: 20 },
  zIndex = 50,
  className,
  backdropClassName: _backdropClassName, // Not used with dialog element
  contentClassName,
  onStateChange,
  onOpen,
  onClose,
  onMinimize,
  onMaximize,
  onRestore,
}: ModalProps) => {
  const [internalState, setInternalState] = useState<ModalState>("closed")
  const [isMaximized, setIsMaximized] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  // Use controlled state if provided, otherwise use internal state
  const currentState = controlledState ?? (open ? (internalState === "minimized" ? "minimized" : "open") : "closed")

  // Update internal state when open prop changes
  useEffect(() => {
    if (controlledState === undefined) {
      setInternalState(open ? "open" : "closed")
    }
  }, [open, controlledState])

  // Handle dialog open/close with native dialog methods
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (currentState === "open") {
      if (!dialog.open) {
        dialog.showModal()
      }
    } else if (currentState === "closed") {
      if (dialog.open) {
        dialog.close()
      }
    }
  }, [currentState])

  // Handle state changes
  const handleStateChange = useCallback((newState: ModalState) => {
    if (controlledState === undefined) {
      setInternalState(newState)
    }
    onStateChange?.(newState)

    // Call specific callbacks
    switch (newState) {
      case "open":
        onOpen?.()
        break
      case "closed":
        onClose?.()
        break
      case "minimized":
        onMinimize?.()
        break
    }
  }, [controlledState, onStateChange, onOpen, onClose, onMinimize])

  // Handle minimize
  const handleMinimize = useCallback(() => {
    handleStateChange("minimized")
  }, [handleStateChange])

  // Handle maximize/restore
  const handleMaximize = useCallback(() => {
    setIsMaximized(!isMaximized)
    onMaximize?.()
  }, [isMaximized, onMaximize])

  // Handle restore from minimized
  const handleRestore = useCallback(() => {
    handleStateChange("open")
    onRestore?.()
  }, [handleStateChange, onRestore])

  // Handle close
  const handleClose = useCallback(() => {
    handleStateChange("closed")
  }, [handleStateChange])

  // Handle backdrop click (for dialog, this means clicking outside the modal content)
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
        handleClose()
      }
    }
  }, [closeOnBackdropClick, backdrop, handleClose])

  // Handle escape key and dialog close events
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleDialogClose = () => {
      if (currentState === "open") {
        handleClose()
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape && currentState === "open") {
        e.preventDefault() // Prevent default dialog close
        handleClose()
      }
    }

    if (currentState === "open") {
      dialog.addEventListener("close", handleDialogClose)
      dialog.addEventListener("keydown", handleEscape)
      
      return () => {
        dialog.removeEventListener("close", handleDialogClose)
        dialog.removeEventListener("keydown", handleEscape)
      }
    }
  }, [currentState, closeOnEscape, handleClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (currentState === "open") {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [currentState])

  // Map color variants to their approximate hex values for luminance calculation
  const getColorHex = (colorVariant: ColorVariant, isSolid: boolean = false): string => {
    const solidColors = {
      primary: "#2563eb", // blue-600
      secondary: "#475569", // slate-600  
      danger: "#dc2626", // red-600
      success: "#16a34a", // green-600
      warning: "#ca8a04", // yellow-600
      info: "#0284c7", // sky-600
      paper: "#0f766e", // teal-600 (from paperColors.accent)
      accent: "#0f766e", // teal-600
      default: "#4b5563", // gray-600
      muted: "#9ca3af", // gray-400
      transparent: "#ffffff",
      custom: "#ffffff",
      // Full Tailwind spectrum - solid (600 shades)
      slate: "#475569", // slate-600
      gray: "#4b5563", // gray-600
      zinc: "#52525b", // zinc-600
      neutral: "#525252", // neutral-600
      stone: "#57534e", // stone-600
      red: "#dc2626", // red-600
      orange: "#ea580c", // orange-600
      amber: "#d97706", // amber-600
      yellow: "#ca8a04", // yellow-600
      lime: "#65a30d", // lime-600
      green: "#16a34a", // green-600
      emerald: "#059669", // emerald-600
      teal: "#0d9488", // teal-600
      cyan: "#0891b2", // cyan-600
      sky: "#0284c7", // sky-600
      blue: "#2563eb", // blue-600
      indigo: "#4f46e5", // indigo-600
      violet: "#7c3aed", // violet-600
      purple: "#9333ea", // purple-600
      fuchsia: "#c026d3", // fuchsia-600
      pink: "#db2777", // pink-600
      rose: "#e11d48", // rose-600
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
      slate: "#f8fafc", // slate-50
      gray: "#f9fafb", // gray-50
      zinc: "#fafafa", // zinc-50
      neutral: "#fafafa", // neutral-50
      stone: "#fafaf9", // stone-50
      red: "#fef2f2", // red-50
      orange: "#fff7ed", // orange-50
      amber: "#fffbeb", // amber-50
      yellow: "#fefce8", // yellow-50
      lime: "#f7fee7", // lime-50
      green: "#f0fdf4", // green-50
      emerald: "#ecfdf5", // emerald-50
      teal: "#f0fdfa", // teal-50
      cyan: "#ecfeff", // cyan-50
      sky: "#f0f9ff", // sky-50
      blue: "#eff6ff", // blue-50
      indigo: "#eef2ff", // indigo-50
      violet: "#f5f3ff", // violet-50
      purple: "#faf5ff", // purple-50
      fuchsia: "#fdf4ff", // fuchsia-50
      pink: "#fdf2f8", // pink-50
      rose: "#fff1f2", // rose-50
    }
    
    const colorMap = isSolid ? solidColors : softColors
    return colorMap[colorVariant as keyof typeof colorMap] || colorMap.default
  }
  
  // Calculate optimal text colors based on the background
  const backgroundHex = getColorHex(color, variant === "solid")
  const optimalTextClasses = getOptimalTextClasses(backgroundHex)

  // Don't render anything if closed
  if (currentState === "closed") {
    return null
  }

  // Render minimized taskbar item
  if (currentState === "minimized") {
    return createPortal(
      <ModalTaskbarItem
        title={title}
        icon={icon}
        color={color}
        position={minimizedPosition}
        onClick={handleRestore}
        onClose={handleClose}
      />,
      document.body
    )
  }

  // Get color classes
  const colorClasses = getColorClassesWithLuminance(color, variant === "solid" ? "solid" : "soft", true)

  return (
    <dialog
      ref={dialogRef}
      className={cn(
        "backdrop:bg-black/20 backdrop:backdrop-blur-sm",
        "p-0 border-0 bg-transparent",
        "w-full h-full max-w-none max-h-none",
        "fixed inset-0",
        `z-${zIndex}`,
        className
      )}
      onClick={handleBackdropClick}
    >
      {/* Modal Content */}
      <div
        className={cn(
          "flex flex-col",
          "transition-all duration-300 ease-in-out",
          "rounded-lg overflow-hidden",
          "mx-auto mt-[10vh]",
          // Size classes
          isMaximized ? "w-full h-full max-w-none rounded-none mt-0" : sizeClasses[size],
          // Variant classes
          variantClasses[variant],
          // Color classes
          variant === "solid" ? colorClasses : "bg-white border-stone-200",
          // Custom classes
          contentClassName
        )}
        style={{
          maxHeight: isMaximized ? "100vh" : "80vh",
        }}
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking modal content
      >
        {/* Header */}
        {(header || title || icon || minimizable || maximizable || closable) && (
          <ModalHeader
            title={title}
            description={description}
            icon={icon}
            minimizable={minimizable}
            maximizable={maximizable}
            closable={closable}
            state={currentState}
            color={color}
            optimalTextClasses={optimalTextClasses}
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            onClose={handleClose}
            onRestore={handleRestore}
            className={cn(
              "border-b border-stone-200/60",
              optimalTextClasses
            )}
          >
            {header}
          </ModalHeader>
        )}

        {/* Body */}
        <ModalBody
          className={cn(
            "flex-1 overflow-y-auto",
            optimalTextClasses
          )}
        >
          {children}
        </ModalBody>

        {/* Footer */}
        {footer && (
          <ModalFooter
            className={cn(
              "border-t border-stone-200/60",
              optimalTextClasses
            )}
          >
            {footer}
          </ModalFooter>
        )}
      </div>
    </dialog>
  )
}

Modal.displayName = "Modal"