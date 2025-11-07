import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../utils"
import type { LightboxProps } from "./types"
import type { ColorVariant } from "../../../utils/colors"



const getSolidColorRgb = (color: ColorVariant): string => {
  const colorMap: Record<ColorVariant, string> = {
    primary: "37 99 235",      // blue-600
    secondary: "71 85 105",    // slate-600
    success: "22 163 74",      // green-600
    warning: "217 119 6",      // amber-600
    danger: "220 38 38",       // red-600
    info: "2 132 199",         // sky-600
    paper: "87 83 78",         // stone-600
    default: "0 0 0",          // black
    muted: "107 114 128",      // gray-500
    accent: "13 148 136",      // teal-600
    transparent: "0 0 0",
    custom: "0 0 0",
    // Full color spectrum
    slate: "71 85 105",        // slate-600
    gray: "75 85 99",          // gray-600
    zinc: "82 82 91",          // zinc-600
    neutral: "82 82 82",       // neutral-600
    stone: "87 83 78",         // stone-600
    red: "220 38 38",          // red-600
    orange: "234 88 12",       // orange-600
    amber: "217 119 6",        // amber-600
    yellow: "202 138 4",       // yellow-600
    lime: "101 163 13",        // lime-600
    green: "22 163 74",        // green-600
    emerald: "5 150 105",      // emerald-600
    teal: "13 148 136",        // teal-600
    cyan: "8 145 178",         // cyan-600
    sky: "2 132 199",          // sky-600
    blue: "37 99 235",         // blue-600
    indigo: "79 70 229",       // indigo-600
    violet: "124 58 237",      // violet-600
    purple: "147 51 234",      // purple-600
    fuchsia: "192 38 211",     // fuchsia-600
    pink: "219 39 119",        // pink-600
    rose: "225 29 72",         // rose-600
  }
  
  return colorMap[color] || "0 0 0"
}



export function Lightbox({
  isOpen = false,
  variant = "solid",
  color = "default",
  imageSrc,
  opacity = 0.8,
  onClose,
  dismissible = true,
  animationDuration = 300,
  zIndex = 50,
  className,
  children,
  ...props
}: LightboxProps) {
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
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = 'hidden'
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => {
        setShouldRender(false)
        document.body.style.overflow = 'unset'
      }, animationDuration)
      return () => clearTimeout(timer)
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, animationDuration])

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && dismissible && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, dismissible, onClose])

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && dismissible && onClose) {
      onClose()
    }
  }



  const lightboxContent = shouldRender && (
    <div
      className={cn(
        "fixed inset-0 transition-opacity duration-300 flex items-center justify-center p-4",
        {
          "opacity-100": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        },
        className
      )}
      style={{
        zIndex,
        transitionDuration: `${animationDuration}ms`,
      }}
      onClick={handleBackdropClick}
      {...props}
    >
      {/* Backdrop Layer */}
      <div
        className={cn(
          "absolute inset-0 z-9",
          variant === "blurred" && "backdrop-blur-md",
          variant === "blurred-image" && "bg-cover bg-center bg-no-repeat backdrop-blur-sm"
        )}
        style={{
          ...(variant === "solid" ? {
            backgroundColor: `rgba(${getSolidColorRgb(color)}, ${opacity})`
          } : variant === "blurred" ? {
            backgroundColor: `rgba(${getSolidColorRgb(color)}, 0.3)`
          } : variant === "blurred-image" && imageSrc ? {
            backgroundImage: `url("${imageSrc}")`,
            filter: "blur(20px) brightness(0.3)",
            backgroundColor: `rgba(${getSolidColorRgb(color)}, 0.2)`
          } : {}),
        }}
      />
      
      {/* Content Layer */}
      <div 
        className="relative max-w-full max-h-full z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )

  return mounted ? createPortal(lightboxContent, document.body) : null
}

export default Lightbox