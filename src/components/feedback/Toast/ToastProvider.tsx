"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { Toast } from "./Toast"
import { ToastContext } from "./context"
import { cn } from "../../../utils/cn"
import type { ToastContextType, ToastProviderProps, ToastProps, ToastPosition } from "./types"

// Position classes for toast containers
const POSITION_CLASSES = {
  "top-left": "top-0 left-0 items-start justify-start",
  "top-center": "top-0 left-1/2 -translate-x-1/2 items-start justify-center",
  "top-right": "top-0 right-0 items-start justify-end",
  "bottom-left": "bottom-0 left-0 items-end justify-start",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-end justify-center",
  "bottom-right": "bottom-0 right-0 items-end justify-end",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center",
} as const

export function ToastProvider({
  children,
  maxToasts = 5,
  defaultPosition = "top-right",
  defaultDuration = 5000,
  gap = 8,
  offset = 16,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([])
  const [mounted, setMounted] = useState(false)
  const toastIdRef = useRef(0)

  // Mount state effect for SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate unique toast ID
  const generateId = useCallback(() => {
    toastIdRef.current += 1
    return `toast-${toastIdRef.current}`
  }, [])

  // Dismiss a specific toast
  const dismiss = useCallback((id: string) => {
    setToasts(current => 
      current.map(toast => 
        toast.id === id 
          ? { ...toast, visible: false }
          : toast
      )
    )

    // Remove toast after animation
    setTimeout(() => {
      setToasts(current => current.filter(toast => toast.id !== id))
    }, 300)
  }, [])

  // Add a new toast
  const toast = useCallback((props: Omit<ToastProps, 'visible' | 'onAnimationComplete'>) => {
    const id = generateId()
    
    const newToast: ToastProps & { id: string } = {
      ...props,
      id,
      position: props.position || defaultPosition,
      duration: props.duration !== undefined ? props.duration : defaultDuration,
      visible: true,
      onDismiss: () => {
        dismiss(id)
        props.onDismiss?.()
      },
      onAnimationComplete: () => {
        // Handle animation complete
      },
    }

    setToasts(current => {
      const newToasts = [...current, newToast]
      // Limit the number of toasts
      return newToasts.slice(-maxToasts)
    })

    return id
  }, [generateId, defaultPosition, defaultDuration, maxToasts, dismiss])

  // Dismiss all toasts
  const dismissAll = useCallback(() => {
    setToasts(current => 
      current.map(toast => ({ ...toast, visible: false }))
    )

    // Remove all toasts after animation
    setTimeout(() => {
      setToasts([])
    }, 300)
  }, [])

  // Group toasts by position
  const toastsByPosition = toasts.reduce((acc, toast) => {
    const position = toast.position || defaultPosition
    if (!acc[position]) {
      acc[position] = []
    }
    acc[position].push(toast)
    return acc
  }, {} as Record<ToastPosition, (ToastProps & { id: string })[]>)

  const contextValue: ToastContextType = {
    toast,
    dismiss,
    dismissAll,
    toasts,
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      
      {/* Toast containers for each position */}
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <ToastContainer
          key={position}
          position={position as ToastPosition}
          toasts={positionToasts}
          gap={gap}
          offset={offset}
        />
      ))}
    </ToastContext.Provider>
  )
}

// Individual toast container for a specific position
function ToastContainer({
  position,
  toasts,
  gap,
  offset,
}: {
  position: ToastPosition
  toasts: (ToastProps & { id: string })[]
  gap: number
  offset: number
}) {
  if (toasts.length === 0) return null

  const containerClasses = cn(
    "fixed z-50 flex flex-col pointer-events-none",
    POSITION_CLASSES[position]
  )

  const containerStyle = {
    gap: `${gap}px`,
    padding: `${offset}px`,
  }

  return mounted ? createPortal(
    <div className={containerClasses} style={containerStyle}>
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} />
        </div>
      ))}
    </div>,
    document.body
  ) : null
}