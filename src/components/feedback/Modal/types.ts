import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/color"
import type { LucideIcon } from "lucide-react"

export type ModalVariant = "solid" | "outline" | "ghost" | "elevated"

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full"

export type ModalState = "open" | "minimized" | "closed"

export interface ModalProps {
  /**
   * Whether the modal is visible
   */
  open?: boolean

  /**
   * Modal state (open, minimized, closed)
   */
  state?: ModalState

  /**
   * Modal title
   */
  title?: string

  /**
   * Modal description/subtitle
   */
  description?: string

  /**
   * Visual variant following button patterns
   */
  variant?: ModalVariant

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Modal size
   */
  size?: ModalSize

  /**
   * Icon for the modal header
   */
  icon?: LucideIcon

  /**
   * Whether the modal can be minimized
   */
  minimizable?: boolean

  /**
   * Whether the modal can be maximized/expanded
   */
  maximizable?: boolean

  /**
   * Whether the modal can be closed
   */
  closable?: boolean

  /**
   * Whether the modal can be dragged
   */
  draggable?: boolean

  /**
   * Whether the modal can be resized
   */
  resizable?: boolean

  /**
   * Whether to show backdrop overlay
   */
  backdrop?: boolean | "static"

  /**
   * Whether to close on backdrop click
   */
  closeOnBackdropClick?: boolean

  /**
   * Whether to close on escape key
   */
  closeOnEscape?: boolean

  /**
   * Custom header content
   */
  header?: ReactNode

  /**
   * Modal body content
   */
  children?: ReactNode

  /**
   * Custom footer content
   */
  footer?: ReactNode

  /**
   * Position when minimized (for taskbar functionality)
   */
  minimizedPosition?: {
    x?: number
    y?: number
  }

  /**
   * Z-index for the modal
   */
  zIndex?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Additional CSS classes for the backdrop (note: with dialog element, backdrop styling is handled via backdrop:: pseudo-element)
   */
  backdropClassName?: string

  /**
   * Additional CSS classes for the modal content
   */
  contentClassName?: string

  /**
   * Callback when modal state changes
   */
  onStateChange?: (state: ModalState) => void

  /**
   * Callback when modal is opened
   */
  onOpen?: () => void

  /**
   * Callback when modal is closed
   */
  onClose?: () => void

  /**
   * Callback when modal is minimized
   */
  onMinimize?: () => void

  /**
   * Callback when modal is maximized
   */
  onMaximize?: () => void

  /**
   * Callback when modal is restored from minimized/maximized
   */
  onRestore?: () => void
}

export interface ModalHeaderProps {
  /**
   * Modal title
   */
  title?: string

  /**
   * Modal description/subtitle
   */
  description?: string

  /**
   * Icon for the header
   */
  icon?: LucideIcon

  /**
   * Whether the modal can be minimized
   */
  minimizable?: boolean

  /**
   * Whether the modal can be maximized
   */
  maximizable?: boolean

  /**
   * Whether the modal can be closed
   */
  closable?: boolean

  /**
   * Current modal state
   */
  state?: ModalState

  /**
   * Color variant
   */
  color?: ColorVariant

  /**
   * Optimal text color classes calculated from luminance
   */
  optimalTextClasses?: string

  /**
   * Custom header content
   */
  children?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Callback when minimize is clicked
   */
  onMinimize?: () => void

  /**
   * Callback when maximize is clicked
   */
  onMaximize?: () => void

  /**
   * Callback when close is clicked
   */
  onClose?: () => void

  /**
   * Callback when restore is clicked
   */
  onRestore?: () => void
}

export interface ModalBodyProps {
  /**
   * Body content
   */
  children?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Whether to add default padding
   */
  padding?: boolean
}

export interface ModalFooterProps {
  /**
   * Footer content
   */
  children?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Whether to add default padding
   */
  padding?: boolean
}

export interface ModalTaskbarItemProps {
  /**
   * Modal title
   */
  title?: string

  /**
   * Icon for the taskbar item
   */
  icon?: LucideIcon

  /**
   * Color variant
   */
  color?: ColorVariant

  /**
   * Whether the item is active/focused
   */
  active?: boolean

  /**
   * Position on screen
   */
  position?: {
    x?: number
    y?: number
  }

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Callback when taskbar item is clicked
   */
  onClick?: () => void

  /**
   * Callback when close button is clicked
   */
  onClose?: () => void
}