import type { ReactNode, HTMLAttributes } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"
import type { ButtonVariant, ButtonSize } from "../../forms/Button/types"

export type DrawerVariant = ButtonVariant // "solid" | "outline" | "ghost" | "link" | "plain"

export type DrawerColor = ColorVariant

export type DrawerTrigger = "click" | "hover" | "contextMenu"

export type DrawerPosition = "top" | "right" | "bottom" | "left"

export type DrawerAnimation = "slide" | "fade" | "scale" | "slideScale"

export type DrawerSize = "sm" | "md" | "lg" | "xl" | "full"

export interface DrawerDismissible {
  /**
   * Close on overlay click
   */
  clickOutside?: boolean
  
  /**
   * Close on Escape key
   */
  escapeKey?: boolean
  
  /**
   * Show close button
   */
  closeButton?: boolean
}

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Trigger element (ReactNode)
   */
  children: ReactNode

  /**
   * Drawer content
   */
  content: ReactNode

  /**
   * Optional header title
   */
  title?: string

  /**
   * Controlled open state
   */
  isOpen?: boolean

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * How the drawer is triggered
   */
  trigger?: DrawerTrigger

  /**
   * Close behaviors
   */
  dismissible?: DrawerDismissible

  /**
   * Visual style variant
   */
  variant?: DrawerVariant

  /**
   * Color theme
   */
  color?: DrawerColor

  /**
   * Slide direction
   */
  position?: DrawerPosition

  /**
   * Entry/exit animation effect
   */
  animation?: DrawerAnimation

  /**
   * Drawer size
   */
  size?: DrawerSize

  /**
   * Show background overlay
   */
  overlay?: boolean

  /**
   * Close on Escape key
   */
  closeOnEscape?: boolean

  /**
   * Close on overlay click
   */
  closeOnOverlayClick?: boolean

  /**
   * Trap focus within drawer
   */
  trapFocus?: boolean

  /**
   * Additional CSS classes for drawer content
   */
  contentClassName?: string

  /**
   * Additional CSS classes for overlay
   */
  overlayClassName?: string

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number

  /**
   * Z-index for the drawer
   */
  zIndex?: number

  /**
   * Whether the drawer is disabled
   */
  disabled?: boolean

  /**
   * Custom close icon
   */
  closeIcon?: LucideIcon
}

export interface DrawerTriggerProps {
  /**
   * Trigger content
   */
  children: ReactNode

  /**
   * Visual variant
   */
  variant?: DrawerVariant

  /**
   * Button size
   */
  size?: ButtonSize

  /**
   * Color theme
   */
  color?: DrawerColor

  /**
   * Icon to display
   */
  icon?: LucideIcon

  /**
   * Icon position
   */
  iconPosition?: "left" | "right"

  /**
   * Whether the trigger is disabled
   */
  disabled?: boolean

  /**
   * Whether the drawer is open (for styling)
   */
  isOpen?: boolean

  /**
   * Click handler
   */
  onClick?: () => void

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to display
   */
  children: ReactNode

  /**
   * Optional title
   */
  title?: string

  /**
   * Position of the drawer
   */
  position: DrawerPosition

  /**
   * Size variant
   */
  size: DrawerSize

  /**
   * Color theme
   */
  color: DrawerColor

  /**
   * Visual variant
   */
  variant: DrawerVariant

  /**
   * Whether to show close button
   */
  showCloseButton?: boolean

  /**
   * Close button click handler
   */
  onClose?: () => void

  /**
   * Custom close icon
   */
  closeIcon?: LucideIcon

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface DrawerOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether overlay is visible
   */
  visible: boolean

  /**
   * Click handler for overlay
   */
  onClick?: () => void

  /**
   * Animation duration
   */
  animationDuration?: number

  /**
   * Z-index
   */
  zIndex?: number

  /**
   * Additional CSS classes
   */
  className?: string
}