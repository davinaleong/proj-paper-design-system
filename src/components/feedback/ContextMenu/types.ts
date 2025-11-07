import type { ReactNode, HTMLAttributes, CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"

export type ContextMenuVariant = "solid" | "outline" | "ghost" // Based on Button variants but limited to suitable ones

export type ContextMenuPlacement = 
  | "bottom" 
  | "bottom-start" 
  | "bottom-end"
  | "top" 
  | "top-start" 
  | "top-end"
  | "left" 
  | "left-start" 
  | "left-end"
  | "right" 
  | "right-start" 
  | "right-end"

export interface ContextMenuDismissible {
  clickOutside?: boolean
  escapeKey?: boolean
  itemClick?: boolean
}

export interface ContextMenuPosition {
  top: number
  left: number
}

export interface ContextMenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Menu item content
   */
  children: ReactNode

  /**
   * Icon to display
   */
  icon?: LucideIcon

  /**
   * Icon position relative to text
   */
  iconPosition?: "left" | "right"

  /**
   * Whether the item is disabled
   */
  disabled?: boolean

  /**
   * Whether the item is selected/active
   */
  selected?: boolean

  /**
   * Color theme for the item
   */
  color?: ColorVariant

  /**
   * Click handler
   */
  onClick?: () => void

  /**
   * Keyboard shortcut to display
   */
  shortcut?: string

  /**
   * Additional description text
   */
  description?: string

  /**
   * Whether the item is destructive (dangerous action)
   */
  destructive?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface ContextMenuSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface ContextMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Label content
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface ContextMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Target element that triggers the context menu
   */
  children: ReactNode

  /**
   * Menu items to display
   */
  items: (ContextMenuItemProps | 'separator' | { type: 'label'; label: string })[]

  /**
   * Whether the context menu is open (controlled)
   */
  isOpen?: boolean

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Placement of the context menu relative to cursor
   */
  placement?: ContextMenuPlacement

  /**
   * Visual variant following Button design system
   */
  variant?: ContextMenuVariant

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * How the context menu can be dismissed
   */
  dismissible?: ContextMenuDismissible

  /**
   * Offset from cursor position in pixels
   */
  offset?: number

  /**
   * Additional CSS classes for context menu content
   */
  contentClassName?: string

  /**
   * Additional CSS styles for context menu content
   */
  contentStyle?: CSSProperties

  /**
   * Whether to render in portal
   */
  portal?: boolean

  /**
   * Whether the context menu is disabled
   */
  disabled?: boolean

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number

  /**
   * Z-index for the context menu
   */
  zIndex?: number

  /**
   * Custom gesture configuration for mobile/tablet
   */
  mobileGesture?: {
    /**
     * Long press duration in milliseconds
     */
    longPressDuration?: number
    
    /**
     * Whether to prevent default touch actions
     */
    preventTouchDefault?: boolean
  }
}