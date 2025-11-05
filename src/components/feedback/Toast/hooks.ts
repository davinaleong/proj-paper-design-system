import { useContext } from "react"
import { ToastContext } from "./context"
import type { ToastProps } from "./types"

// Hook to use toast context
export function useToast() {
  const context = useContext(ToastContext)
  
  if (context === null) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  
  return context
}

// Convenience functions for common toast types
export function useToastHelpers() {
  const { toast } = useToast()

  return {
    success: (props: Omit<ToastProps, 'color' | 'visible' | 'onAnimationComplete'>) =>
      toast({ ...props, color: "success" }),
    
    error: (props: Omit<ToastProps, 'color' | 'visible' | 'onAnimationComplete'>) =>
      toast({ ...props, color: "danger" }),
    
    warning: (props: Omit<ToastProps, 'color' | 'visible' | 'onAnimationComplete'>) =>
      toast({ ...props, color: "warning" }),
    
    info: (props: Omit<ToastProps, 'color' | 'visible' | 'onAnimationComplete'>) =>
      toast({ ...props, color: "info" }),
    
    loading: (props: Omit<ToastProps, 'color' | 'duration' | 'visible' | 'onAnimationComplete'>) =>
      toast({ ...props, color: "primary", duration: 0 }),
  }
}