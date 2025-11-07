import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../utils"
import type { BackdropProps, BackdropVariant } from "./types"
import type { ColorVariant } from "../../../utils/colors"

const getPatternSvg = (pattern: string, intensity: string) => {
  const opacity = intensity === "subtle" ? "0.1" : intensity === "medium" ? "0.2" : "0.3"
  
  switch (pattern) {
    case "dots":
      return `data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='${opacity}' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E`
    case "grid":
      return `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='${opacity}' stroke-width='1'%3E%3Cpath d='m0 40 40-40M40 40V0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`
    case "diagonal":
      return `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='${opacity}' fill-rule='evenodd'%3E%3Cpath d='M40 40H20L0 20V0h20l20 20v20z'/%3E%3C/g%3E%3C/svg%3E`
    case "waves":
      return `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-opacity='${opacity}' stroke-width='2'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0z' stroke-dasharray='2,4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`
    default:
      return ""
  }
}

const getColorOverlayClasses = (color: ColorVariant): string => {
  const colorMap: Record<ColorVariant, string> = {
    primary: "bg-blue-600/30",
    secondary: "bg-slate-600/30",
    success: "bg-green-600/30",
    warning: "bg-amber-600/30",
    danger: "bg-red-600/30",
    info: "bg-sky-600/30",
    paper: "bg-stone-600/30",
    default: "bg-gray-600/30",
    muted: "bg-gray-500/30",
    accent: "bg-teal-600/30",
    transparent: "bg-transparent",
    custom: "",
    // Full color spectrum
    slate: "bg-slate-600/30",
    gray: "bg-gray-600/30",
    zinc: "bg-zinc-600/30",
    neutral: "bg-neutral-600/30",
    stone: "bg-stone-600/30",
    red: "bg-red-600/30",
    orange: "bg-orange-600/30",
    amber: "bg-amber-600/30",
    yellow: "bg-yellow-600/30",
    lime: "bg-lime-600/30",
    green: "bg-green-600/30",
    emerald: "bg-emerald-600/30",
    teal: "bg-teal-600/30",
    cyan: "bg-cyan-600/30",
    sky: "bg-sky-600/30",
    blue: "bg-blue-600/30",
    indigo: "bg-indigo-600/30",
    violet: "bg-violet-600/30",
    purple: "bg-purple-600/30",
    fuchsia: "bg-fuchsia-600/30",
    pink: "bg-pink-600/30",
    rose: "bg-rose-600/30",
  }
  
  return colorMap[color] || "bg-gray-600/30"
}

const getSolidColorClasses = (color: ColorVariant, opacity: number): string => {
  const opacityValue = Math.round(opacity * 100)
  const colorMap: Record<ColorVariant, string> = {
    primary: `bg-blue-600/${opacityValue}`,
    secondary: `bg-slate-600/${opacityValue}`,
    success: `bg-green-600/${opacityValue}`,
    warning: `bg-amber-600/${opacityValue}`,
    danger: `bg-red-600/${opacityValue}`,
    info: `bg-sky-600/${opacityValue}`,
    paper: `bg-stone-600/${opacityValue}`,
    default: `bg-black/${opacityValue}`,
    muted: `bg-gray-500/${opacityValue}`,
    accent: `bg-teal-600/${opacityValue}`,
    transparent: "bg-transparent",
    custom: "",
    // Full color spectrum
    slate: `bg-slate-600/${opacityValue}`,
    gray: `bg-gray-600/${opacityValue}`,
    zinc: `bg-zinc-600/${opacityValue}`,
    neutral: `bg-neutral-600/${opacityValue}`,
    stone: `bg-stone-600/${opacityValue}`,
    red: `bg-red-600/${opacityValue}`,
    orange: `bg-orange-600/${opacityValue}`,
    amber: `bg-amber-600/${opacityValue}`,
    yellow: `bg-yellow-600/${opacityValue}`,
    lime: `bg-lime-600/${opacityValue}`,
    green: `bg-green-600/${opacityValue}`,
    emerald: `bg-emerald-600/${opacityValue}`,
    teal: `bg-teal-600/${opacityValue}`,
    cyan: `bg-cyan-600/${opacityValue}`,
    sky: `bg-sky-600/${opacityValue}`,
    blue: `bg-blue-600/${opacityValue}`,
    indigo: `bg-indigo-600/${opacityValue}`,
    violet: `bg-violet-600/${opacityValue}`,
    purple: `bg-purple-600/${opacityValue}`,
    fuchsia: `bg-fuchsia-600/${opacityValue}`,
    pink: `bg-pink-600/${opacityValue}`,
    rose: `bg-rose-600/${opacityValue}`,
  }
  
  return colorMap[color] || `bg-black/${opacityValue}`
}

const getBackdropClasses = (
  variant: BackdropVariant,
  color: ColorVariant,
  opacity: number
): string => {
  const baseClasses = "fixed inset-0 transition-opacity duration-300"
  
  switch (variant) {
    case "solid":
      return cn(baseClasses, getSolidColorClasses(color, opacity))
    
    case "blur":
      return cn(
        baseClasses,
        "backdrop-blur-sm",
        getColorOverlayClasses(color)
      )
    
    case "patterned": {
      return cn(
        baseClasses,
        getColorOverlayClasses(color),
        "bg-blend-overlay"
      )
    }
    
    default:
      return cn(baseClasses, "bg-black/50")
  }
}

export function Backdrop({
  isOpen = false,
  variant = "solid",
  color = "default",
  opacity = 0.5,
  onClick,
  dismissible = true,
  animationDuration = 300,
  zIndex = 40,
  pattern = "dots",
  patternIntensity = "medium",
  className,
  children,
  ...props
}: BackdropProps) {
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

  const handleClick = () => {
    if (dismissible && onClick) {
      onClick()
    }
  }

  const backdropStyle = variant === "patterned" && pattern && patternIntensity ? {
    backgroundImage: `url("${getPatternSvg(pattern, patternIntensity)}")`,
    backgroundRepeat: "repeat",
  } : {}

  const backdropContent = shouldRender && (
    <div
      className={cn(
        getBackdropClasses(variant, color, opacity),
        {
          "opacity-100": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        },
        className
      )}
      style={{
        zIndex,
        transitionDuration: `${animationDuration}ms`,
        ...backdropStyle,
      }}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )

  return mounted ? createPortal(backdropContent, document.body) : null
}

export default Backdrop