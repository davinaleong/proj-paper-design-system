import type { ColorVariant } from "../../../utils/colors"
import type { ReactNode } from "react"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the toast (following button variants)
   * @default "solid"
   */
  variant?: "solid" | "outline" | "ghost" | "soft" | "plain"
  
  /**
   * Color theme of the toast
   * @default "default"
   */
  color?: ColorVariant
  
  /**
   * Size variant for the toast
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
  
  /**
   * Toast title text
   */
  title?: string
  
  /**
   * Toast description/content
   */
  description?: string | ReactNode
  
  /**
   * Icon to display in the toast
   * Can be a React component or element
   */
  icon?: ReactNode
  
  /**
   * Whether to show a default icon based on color
   * @default true
   */
  showDefaultIcon?: boolean
  
  /**
   * Action elements (buttons, links, etc.)
   */
  actions?: ReactNode
  
  /**
   * Whether the toast can be dismissed
   * @default true
   */
  dismissible?: boolean
  
  /**
   * Callback when toast is dismissed
   */
  onDismiss?: () => void
  
  /**
   * Whether to show a close button
   * @default true when dismissible is true
   */
  showCloseButton?: boolean
  
  /**
   * Custom close button element
   */
  closeButton?: ReactNode
  
  /**
   * Auto-dismiss timeout in milliseconds
   * Set to 0 to disable auto-dismiss
   * @default 5000
   */
  duration?: number
  
  /**
   * Position of the toast
   * @default "top-right"
   */
  position?: ToastPosition
  
  /**
   * Whether to show a progress bar for auto-dismiss
   * @default true when duration > 0
   */
  showProgress?: boolean
  
  /**
   * Whether to pause auto-dismiss on hover
   * @default true
   */
  pauseOnHover?: boolean
  
  /**
   * Whether to animate the toast entrance/exit
   * @default true
   */
  animated?: boolean
  
  /**
   * Animation direction based on position
   * @default "auto" (inferred from position)
   */
  animationDirection?: "auto" | "up" | "down" | "left" | "right"
  
  /**
   * Whether the toast is currently visible
   * @default true
   */
  visible?: boolean
  
  /**
   * Callback when toast animation completes
   */
  onAnimationComplete?: () => void
}

export type ToastVariant = NonNullable<ToastProps["variant"]>
export type ToastSize = NonNullable<ToastProps["size"]>
export type ToastColor = NonNullable<ToastProps["color"]>

export type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right"
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right"
  | "center"

export interface ToastContextType {
  /**
   * Show a toast notification
   */
  toast: (props: Omit<ToastProps, 'visible' | 'onAnimationComplete'>) => string
  
  /**
   * Dismiss a specific toast by ID
   */
  dismiss: (id: string) => void
  
  /**
   * Dismiss all toasts
   */
  dismissAll: () => void
  
  /**
   * List of active toasts
   */
  toasts: (ToastProps & { id: string })[]
}

export interface ToastProviderProps {
  /**
   * Children components
   */
  children: ReactNode
  
  /**
   * Maximum number of toasts to show at once
   * @default 5
   */
  maxToasts?: number
  
  /**
   * Default position for new toasts
   * @default "top-right"
   */
  defaultPosition?: ToastPosition
  
  /**
   * Default duration for new toasts
   * @default 5000
   */
  defaultDuration?: number
  
  /**
   * Gap between toasts in pixels
   * @default 8
   */
  gap?: number
  
  /**
   * Offset from viewport edges in pixels
   * @default 16
   */
  offset?: number
}