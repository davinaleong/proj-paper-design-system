"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "../../../utils"
import { Panel } from "../../layout"
import { IconButton } from "../../forms/IconButton"
import type { DrawerProps, DrawerPosition, DrawerSize, DrawerAnimation, DrawerVariant, DrawerColor } from "./types"
import type { SectionVariant } from "../../layout/Section/types"

const mapDrawerVariantToSection = (variant: DrawerVariant): SectionVariant => {
  switch (variant) {
    case "solid":
      return "elevated"
    case "outline":
      return "outlined"
    case "ghost":
    case "plain":
    default:
      return "default"
  }
}

const getColorClasses = (color: DrawerColor, variant: DrawerVariant): string => {
  // For plain variant, return no additional classes
  if (variant === "plain") {
    return ""
  }

  // For paper color with solid variant, use enhanced paper styling
  if (variant === "solid" && color === "paper") {
    return "bg-white border border-stone-200 shadow-lg"
  }

  // For paper color with outline variant, use subtle paper styling
  if (variant === "outline" && color === "paper") {
    return "bg-white border border-stone-200"
  }

  // For paper color with ghost variant, use minimal paper styling  
  if (variant === "ghost" && color === "paper") {
    return "bg-stone-50/50 border-transparent"
  }

  // For other paper color variants, return empty (use default Panel styling)
  if (color === "paper") {
    return ""
  }
  
  // For outline and ghost variants, use solid backgrounds (not transparent)
  // Only ghost variant should be more transparent
  const bgOpacity = variant === "ghost" ? "/30" : ""
  
  const colorMap: Record<string, string> = {
    primary: `border-blue-200 bg-blue-50${bgOpacity}`,
    secondary: `border-slate-300 bg-slate-100${bgOpacity}`,
    success: `border-green-200 bg-green-50${bgOpacity}`,
    warning: `border-amber-200 bg-amber-50${bgOpacity}`,  
    danger: `border-red-200 bg-red-50${bgOpacity}`,
    info: `border-blue-200 bg-blue-50${bgOpacity}`,
    neutral: `border-stone-200 bg-stone-50${bgOpacity}`,
    // Extended color palette
    red: `border-red-200 bg-red-50${bgOpacity}`,
    orange: `border-orange-200 bg-orange-50${bgOpacity}`,
    amber: `border-amber-200 bg-amber-50${bgOpacity}`,
    yellow: `border-yellow-200 bg-yellow-50${bgOpacity}`,
    lime: `border-lime-200 bg-lime-50${bgOpacity}`,
    green: `border-green-200 bg-green-50${bgOpacity}`,
    emerald: `border-emerald-200 bg-emerald-50${bgOpacity}`,
    teal: `border-teal-200 bg-teal-50${bgOpacity}`,
    cyan: `border-cyan-200 bg-cyan-50${bgOpacity}`,
    sky: `border-sky-200 bg-sky-50${bgOpacity}`,
    blue: `border-blue-200 bg-blue-50${bgOpacity}`,
    indigo: `border-indigo-200 bg-indigo-50${bgOpacity}`,
    violet: `border-violet-200 bg-violet-50${bgOpacity}`,
    purple: `border-purple-200 bg-purple-50${bgOpacity}`,
    fuchsia: `border-fuchsia-200 bg-fuchsia-50${bgOpacity}`,
    pink: `border-pink-200 bg-pink-50${bgOpacity}`,
    rose: `border-rose-200 bg-rose-50${bgOpacity}`,
  }

  return colorMap[color] || ""
}

const DRAWER_SIZES: Record<DrawerSize, string> = {
  sm: "320px",
  md: "480px", 
  lg: "640px",
  xl: "800px",
  full: "100%"
}

const getDrawerSizeClasses = (position: DrawerPosition, size: DrawerSize): string => {
  const sizeValue = DRAWER_SIZES[size]
  
  switch (position) {
    case "left":
    case "right":
      return size === "full" ? "h-full w-full" : `h-full w-[${sizeValue}]`
    case "top":
    case "bottom":
      return size === "full" ? "h-full w-full" : `w-full h-[${sizeValue}]`
    default:
      return `w-[${sizeValue}] h-full`
  }
}

const getDrawerPositionClasses = (position: DrawerPosition, isOpen: boolean): string => {
  const baseClasses = "fixed transition-all duration-700 ease-in-out"
  
  switch (position) {
    case "left":
      return cn(
        baseClasses,
        "left-0 top-0 h-full",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )
    case "right":
      return cn(
        baseClasses,
        "right-0 top-0 h-full",
        isOpen ? "translate-x-0" : "translate-x-full"
      )
    case "top":
      return cn(
        baseClasses,
        "top-0 left-0 w-full",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )
    case "bottom":
      return cn(
        baseClasses,
        "bottom-0 left-0 w-full",
        isOpen ? "translate-y-0" : "translate-y-full"
      )
    default:
      return baseClasses
  }
}

const getAnimationClasses = (animation: DrawerAnimation, isOpen: boolean): string => {
  switch (animation) {
    case "fade":
      return cn(
        "transition-opacity duration-700 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0"
      )
    case "scale":
      return cn(
        "transition-all duration-700 ease-in-out",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )
    case "slideScale":
      return cn(
        "transition-all duration-700 ease-in-out",
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
      )
    case "slide":
    default:
      // For slide animation, position classes handle the transform
      // No additional classes needed here
      return ""
  }
}

export function Drawer({
  children,
  content,
  title,
  isOpen: controlledIsOpen,
  onOpenChange,
  trigger = "click",
  dismissible = {
    clickOutside: true,
    escapeKey: true,
    closeButton: true
  },
  variant = "solid",
  color = "paper",
  position = "right",
  animation = "slide",
  size = "md",
  overlay = true,
  closeOnEscape = true,
  closeOnOverlayClick = true,
  trapFocus = true,
  contentClassName,
  overlayClassName,
  animationDuration = 700,
  zIndex = 50,
  disabled = false,
  closeIcon = X,
  className,
  ...props
}: DrawerProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen
  const drawerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  // Handle mounting for portal
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle render state for transitions
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, animationDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, animationDuration])

  // Force opening animation by delaying the open state
  const [isAnimatingOpen, setIsAnimatingOpen] = useState(false)
  
  useEffect(() => {
    if (isOpen && shouldRender) {
      // Ensure the element is mounted with closed state first
      const timer = setTimeout(() => {
        setIsAnimatingOpen(true)
      }, 10) // Small delay to ensure DOM is ready
      return () => clearTimeout(timer)
    } else {
      setIsAnimatingOpen(false)
    }
  }, [isOpen, shouldRender])

  const handleOpenChange = useCallback((open: boolean) => {
    if (disabled) return
    
    if (controlledIsOpen === undefined) {
      setInternalIsOpen(open)
    }
    onOpenChange?.(open)
  }, [controlledIsOpen, onOpenChange, disabled])

  const handleOpen = useCallback(() => {
    handleOpenChange(true)
  }, [handleOpenChange])

  const handleClose = useCallback(() => {
    handleOpenChange(false)
  }, [handleOpenChange])

  // Handle trigger interactions
  const handleTriggerClick = useCallback(() => {
    if (trigger === "click") {
      handleOpenChange(!isOpen)
    }
  }, [trigger, isOpen, handleOpenChange])

  const handleTriggerMouseEnter = useCallback(() => {
    if (trigger === "hover") {
      handleOpen()
    }
  }, [trigger, handleOpen])

  const handleTriggerMouseLeave = useCallback(() => {
    if (trigger === "hover") {
      // Add delay for hover trigger
      setTimeout(() => {
        if (!drawerRef.current?.contains(document.activeElement)) {
          handleClose()
        }
      }, 100)
    }
  }, [trigger, handleClose])

  const handleTriggerContextMenu = useCallback((e: React.MouseEvent) => {
    if (trigger === "contextMenu") {
      e.preventDefault()
      handleOpen()
    }
  }, [trigger, handleOpen])

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !closeOnEscape || !dismissible.escapeKey) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, closeOnEscape, dismissible.escapeKey, handleClose])

  // Handle click outside
  useEffect(() => {
    if (!isOpen || !closeOnOverlayClick || !dismissible.clickOutside) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        handleClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, closeOnOverlayClick, dismissible.clickOutside, handleClose])

  // Focus management
  useEffect(() => {
    if (!isOpen || !trapFocus) return

    const drawer = drawerRef.current
    if (!drawer) return

    const focusableElements = drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus()
          e.preventDefault()
        }
      }
    }

    document.addEventListener("keydown", handleTabKey)
    firstElement?.focus()

    return () => {
      document.removeEventListener("keydown", handleTabKey)
    }
  }, [isOpen, trapFocus])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen && overlay) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = ""
      }
    }
  }, [isOpen, overlay])

  const triggerElement = (
    <div
      ref={triggerRef}
      onClick={handleTriggerClick}
      onMouseEnter={handleTriggerMouseEnter}
      onMouseLeave={handleTriggerMouseLeave}
      onContextMenu={handleTriggerContextMenu}
      className={className}
      {...props}
    >
      {children}
    </div>
  )

  const drawerContent = shouldRender && (
    <>
      {/* Overlay */}
      {overlay && (
        <div
          className={cn(
            "fixed inset-0 bg-black/50 transition-opacity duration-700",
            overlayClassName,
            isAnimatingOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          style={{ 
            zIndex: zIndex - 1
          }}
          onClick={closeOnOverlayClick && isOpen ? handleClose : undefined}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          getDrawerPositionClasses(position, isAnimatingOpen),
          getDrawerSizeClasses(position, size),
          getAnimationClasses(animation, isAnimatingOpen),
          "flex flex-col"
        )}
        style={{
          zIndex,
          transitionDuration: `${animationDuration}ms`
        }}
      >
        <Panel
          className={cn(
            getColorClasses(color, variant),
            "flex flex-col h-full",
            contentClassName
          )}
          variant={mapDrawerVariantToSection(variant)}
          padding="none"
        >
          {/* Header */}
          {(title || dismissible.closeButton) && (
            <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-700">
              {title && (
                <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {title}
                </h2>
              )}
              {dismissible.closeButton && (
                <IconButton
                  icon={closeIcon}
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  aria-label="Close drawer"
                />
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">
            {content}
          </div>
        </Panel>
      </div>
    </>
  )

  return (
    <>
      {triggerElement}
      {mounted && createPortal(drawerContent, document.body)}
    </>
  )
}

export default Drawer
