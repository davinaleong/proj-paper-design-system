import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../../utils"
import type { LightboxProps } from "./types"



export function Lightbox({
  isOpen = false,
  variant = "black",
  imageSrc,
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
          "absolute inset-0 z-[5] transition-colors duration-300",
          {
            "bg-black/80": variant === "black",
            "backdrop-blur-md bg-black/30": variant === "blurred",
            "bg-cover bg-center bg-no-repeat backdrop-blur-sm": variant === "blurred-image",
          }
        )}
        style={{
          ...(variant === "blurred-image" &&
            imageSrc && {
              backgroundImage: `url("${imageSrc}")`,
              filter: "blur(20px) brightness(0.3)",
            }),
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