import React, { useState, useRef, useEffect, useCallback } from "react"
import { cn } from "../../../utils/cn.js"
import { getColorClasses } from "../../../utils/colors.js"
import type { ColorVariant as UtilsColorVariant } from "../../../utils/colors.js"
import type { TooltipProps, TooltipPosition, TooltipSize } from "./types.js"

/**
 * Tooltip component for displaying contextual information
 *
 * Features:
 * - 12 positioning options (top, right, bottom, left with start/end variants)
 * - Multiple trigger types (hover, click, focus, manual)
 * - Full color system integration (42 variants)
 * - Size variants (sm, md, lg)
 * - Configurable delays and offsets
 * - Arrow indicator with smart positioning
 * - Paper-like styling with backdrop blur
 * - Full accessibility support
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  trigger = "hover",
  colorVariant = "default",
  size = "md",
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  showDelay = 200,
  hideDelay = 0,
  arrow = true,
  disabled = false,
  maxWidth,
  offset = 8,
  tooltipClassName,
  arrowClassName,
  zIndex = 50,
  className,
  ...props
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const [actualPosition, setActualPosition] =
    useState<TooltipPosition>(position)
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({})

  const containerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const showTimeoutRef = useRef<number | null>(null)
  const hideTimeoutRef = useRef<number | null>(null)

  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

  // Size-based styling
  const sizeClasses: Record<
    TooltipSize,
    {
      content: string
      text: string
      padding: string
      arrow: string
    }
  > = {
    sm: {
      content: "max-w-xs",
      text: "text-xs",
      padding: "px-2 py-1",
      arrow: "w-2 h-2",
    },
    md: {
      content: "max-w-sm",
      text: "text-sm",
      padding: "px-3 py-2",
      arrow: "w-2.5 h-2.5",
    },
    lg: {
      content: "max-w-md",
      text: "text-base",
      padding: "px-4 py-3",
      arrow: "w-3 h-3",
    },
  }

  const getArrowClasses = (pos: TooltipPosition): string => {
    const arrowSize = sizeClasses[size].arrow

    switch (pos) {
      case "top":
      case "top-start":
      case "top-end":
        return `absolute top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-current border-b-0 ${arrowSize}`
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return `absolute bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-current border-t-0 ${arrowSize}`
      case "left":
      case "left-start":
      case "left-end":
        return `absolute left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-current border-r-0 ${arrowSize}`
      case "right":
      case "right-start":
      case "right-end":
        return `absolute right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-current border-l-0 ${arrowSize}`
      default:
        return `absolute top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-current border-b-0 ${arrowSize}`
    }
  }

  // Calculate tooltip position
  const calculatePosition = useCallback(() => {
    if (!containerRef.current || !tooltipRef.current || !isOpen) return

    const container = containerRef.current
    const tooltip = tooltipRef.current
    const tooltipRect = tooltip.getBoundingClientRect()

    // Base positions relative to parent
    let style: React.CSSProperties = {}

    const centeredLeft =
      container.offsetLeft + container.offsetWidth / 2 - tooltipRect.width / 2
    const centeredTop =
      container.offsetTop + container.offsetHeight / 2 - tooltipRect.height / 2

    switch (position) {
      case "top":
        style = {
          left: centeredLeft,
          top: container.offsetTop - tooltipRect.height - offset,
        }
        break
      case "bottom":
        style = {
          left: centeredLeft,
          top: container.offsetTop + container.offsetHeight + offset,
        }
        break
      case "left":
        style = {
          left: container.offsetLeft - tooltipRect.width - offset,
          top: centeredTop,
        }
        break
      case "right":
        style = {
          left: container.offsetLeft + container.offsetWidth + offset,
          top: centeredTop,
        }
        break
      case "top-start":
        style = {
          left: container.offsetLeft,
          top: container.offsetTop - tooltipRect.height - offset,
        }
        break
      case "top-end":
        style = {
          left:
            container.offsetLeft + container.offsetWidth - tooltipRect.width,
          top: container.offsetTop - tooltipRect.height - offset,
        }
        break
      case "bottom-start":
        style = {
          left: container.offsetLeft,
          top: container.offsetTop + container.offsetHeight + offset,
        }
        break
      case "bottom-end":
        style = {
          left:
            container.offsetLeft + container.offsetWidth - tooltipRect.width,
          top: container.offsetTop + container.offsetHeight + offset,
        }
        break
      case "left-start":
        style = {
          left: container.offsetLeft - tooltipRect.width - offset,
          top: container.offsetTop,
        }
        break
      case "left-end":
        style = {
          left: container.offsetLeft - tooltipRect.width - offset,
          top:
            container.offsetTop + container.offsetHeight - tooltipRect.height,
        }
        break
      case "right-start":
        style = {
          left: container.offsetLeft + container.offsetWidth + offset,
          top: container.offsetTop,
        }
        break
      case "right-end":
        style = {
          left: container.offsetLeft + container.offsetWidth + offset,
          top:
            container.offsetTop + container.offsetHeight - tooltipRect.height,
        }
        break
    }

    setActualPosition(position)
    setTooltipStyle(style)
  }, [position, offset, isOpen])

  // Handle open state changes
  const handleOpenChange = useCallback(
    (newOpen: boolean) => {
      if (disabled) return

      if (controlledOpen === undefined) {
        setInternalOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    },
    [controlledOpen, disabled, onOpenChange]
  )

  // Show/hide with delays
  const showTooltip = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }

    if (showDelay > 0) {
      showTimeoutRef.current = window.setTimeout(() => {
        handleOpenChange(true)
      }, showDelay)
    } else {
      handleOpenChange(true)
    }
  }, [showDelay, handleOpenChange])

  const hideTooltip = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }

    if (hideDelay > 0) {
      hideTimeoutRef.current = window.setTimeout(() => {
        handleOpenChange(false)
      }, hideDelay)
    } else {
      handleOpenChange(false)
    }
  }, [hideDelay, handleOpenChange])

  // Event handlers
  const handleMouseEnter = useCallback(() => {
    if (trigger === "hover") showTooltip()
  }, [trigger, showTooltip])

  const handleMouseLeave = useCallback(() => {
    if (trigger === "hover") hideTooltip()
  }, [trigger, hideTooltip])

  const handleClick = useCallback(() => {
    if (trigger === "click") {
      if (isOpen) {
        hideTooltip()
      } else {
        showTooltip()
      }
    }
  }, [trigger, isOpen, showTooltip, hideTooltip])

  const handleFocus = useCallback(() => {
    if (trigger === "focus") showTooltip()
  }, [trigger, showTooltip])

  const handleBlur = useCallback(() => {
    if (trigger === "focus") hideTooltip()
  }, [trigger, hideTooltip])

  // Calculate position when tooltip becomes visible
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(calculatePosition, 10)
      return () => clearTimeout(timer)
    }
  }, [isOpen, calculatePosition])

  // Handle window resize and scroll
  useEffect(() => {
    if (isOpen) {
      const handleUpdate = () => calculatePosition()
      window.addEventListener("resize", handleUpdate)
      window.addEventListener("scroll", handleUpdate, true)
      return () => {
        window.removeEventListener("resize", handleUpdate)
        window.removeEventListener("scroll", handleUpdate, true)
      }
    }
  }, [isOpen, calculatePosition])

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  // Tooltip content classes
  const tooltipClasses = cn(
    // Base styling
    "absolute rounded-sm shadow-lg border z-50",
    "backdrop-blur-sm transition-all duration-200",
    "pointer-events-auto select-none",

    // Size classes
    sizeClasses[size].content,
    sizeClasses[size].text,
    sizeClasses[size].padding,

    // Color variant
    getColorClasses(colorVariant as UtilsColorVariant, "soft"),
    "border-current border-opacity-20",

    // Animation
    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",

    tooltipClassName
  )

  // Arrow classes
  const arrowClasses = cn(
    "border-4",
    getArrowClasses(actualPosition),
    "text-current opacity-90",
    arrowClassName
  )

  if (disabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      {/* Trigger */}
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex={trigger === "focus" ? 0 : undefined}
        aria-describedby={isOpen ? "tooltip-content" : undefined}
      >
        {children}
      </div>

      {/* Tooltip Portal */}
      {isOpen && (
        <div
          ref={tooltipRef}
          id="tooltip-content"
          role="tooltip"
          className={tooltipClasses}
          style={{
            ...tooltipStyle,
            zIndex,
            maxWidth: maxWidth || undefined,
          }}
        >
          {/* Arrow */}
          {arrow && <div className={arrowClasses} />}

          {/* Content */}
          <div className="relative">{content}</div>
        </div>
      )}
    </div>
  )
}

Tooltip.displayName = "Tooltip"
