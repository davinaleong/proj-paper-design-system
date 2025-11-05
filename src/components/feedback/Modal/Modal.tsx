import { useState, useEffect, useRef, useCallback } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../utils/cn"
import { getColorClassesWithLuminance } from "../../../utils/colors"
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
  backdropClassName,
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
  const modalRef = useRef<HTMLDivElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  // Use controlled state if provided, otherwise use internal state
  const currentState = controlledState ?? (open ? (internalState === "minimized" ? "minimized" : "open") : "closed")

  // Update internal state when open prop changes
  useEffect(() => {
    if (controlledState === undefined) {
      setInternalState(open ? "open" : "closed")
    }
  }, [open, controlledState])

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

  // Handle backdrop click
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === backdropRef.current && closeOnBackdropClick && backdrop !== "static") {
      handleClose()
    }
  }, [closeOnBackdropClick, backdrop, handleClose])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape && currentState === "open") {
        handleClose()
      }
    }

    if (currentState === "open") {
      document.addEventListener("keydown", handleEscape)
      return () => document.removeEventListener("keydown", handleEscape)
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

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center",
        `z-${zIndex}`,
        className
      )}
    >
      {/* Backdrop */}
      {backdrop && (
        <div
          ref={backdropRef}
          className={cn(
            "absolute inset-0 bg-black/20 backdrop-blur-sm",
            backdropClassName
          )}
          onClick={handleBackdropClick}
        />
      )}

      {/* Modal Content */}
      <div
        ref={modalRef}
        className={cn(
          "relative flex flex-col",
          "transition-all duration-300 ease-in-out",
          "rounded-lg overflow-hidden",
          // Size classes
          isMaximized ? "w-full h-full max-w-none rounded-none" : sizeClasses[size],
          // Variant classes
          variantClasses[variant],
          // Color classes
          variant === "solid" ? colorClasses : "bg-white border-stone-200",
          // Custom classes
          contentClassName
        )}
        style={{
          maxHeight: isMaximized ? "100vh" : "90vh",
        }}
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
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            onClose={handleClose}
            onRestore={handleRestore}
            className={cn(
              "border-b border-stone-200/60"
            )}
          >
            {header}
          </ModalHeader>
        )}

        {/* Body */}
        <ModalBody
          className="flex-1 overflow-y-auto"
        >
          {children}
        </ModalBody>

        {/* Footer */}
        {footer && (
          <ModalFooter
            className="border-t border-stone-200/60"
          >
            {footer}
          </ModalFooter>
        )}
      </div>
    </div>,
    document.body
  )
}

Modal.displayName = "Modal"