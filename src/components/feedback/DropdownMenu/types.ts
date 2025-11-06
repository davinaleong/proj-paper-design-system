import type { ReactNode, HTMLAttributes, CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"
import type { ButtonVariant, ButtonSize } from "../../forms/Button/types"

export type DropdownMenuVariant = ButtonVariant // "solid" | "outline" | "ghost" | "link" | "plain"

export type DropdownMenuSize = ButtonSize // "xs" | "sm" | "md" | "lg" | "xl"

export type DropdownMenuTrigger = "click" | "hover" | "focus" | "contextMenu"

export type ChevronPlacement = "left" | "right"

export type DropdownMenuPlacement = 
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

export interface DropdownMenuDismissible {
  clickOutside?: boolean
  escapeKey?: boolean
  itemClick?: boolean
}

export interface DropdownMenuPosition {
  top: number
  left: number
}

export interface DropdownMenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
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
   * Additional CSS classes
   */
  className?: string
}

export interface DropdownMenuSeparatorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes
   */
  className?: string
}

export interface DropdownMenuLabelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Label content
   */
  children: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}

export interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Trigger element (ReactNode)
   */
  children: ReactNode

  /**
   * Menu items to display
   */
  items: (DropdownMenuItemProps | 'separator' | { type: 'label'; label: string })[]

  /**
   * Whether the dropdown is open (controlled)
   */
  isOpen?: boolean

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * How the dropdown is triggered
   */
  trigger?: DropdownMenuTrigger

  /**
   * Placement of the dropdown relative to trigger
   */
  placement?: DropdownMenuPlacement

  /**
   * Visual variant following Button design system
   */
  variant?: DropdownMenuVariant

  /**
   * Size of the dropdown trigger
   */
  size?: DropdownMenuSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Whether to show chevron icon
   */
  showChevron?: boolean

  /**
   * Chevron placement relative to content
   */
  chevronPlacement?: ChevronPlacement

  /**
   * Custom chevron icon
   */
  chevronIcon?: LucideIcon

  /**
   * How the dropdown can be dismissed
   */
  dismissible?: DropdownMenuDismissible

  /**
   * Offset from trigger element in pixels
   */
  offset?: number

  /**
   * Additional CSS classes for dropdown content
   */
  contentClassName?: string

  /**
   * Additional CSS styles for trigger
   */
  style?: CSSProperties

  /**
   * Additional CSS styles for dropdown content
   */
  contentStyle?: CSSProperties

  /**
   * Whether to render in portal
   */
  portal?: boolean

  /**
   * Whether the dropdown is disabled
   */
  disabled?: boolean

  /**
   * Whether to use Paper styling
   */
  paper?: boolean

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number

  /**
   * Z-index for the dropdown
   */
  zIndex?: number
}

export interface DropdownMenuTriggerProps {
  /**
   * Trigger content
   */
  children: ReactNode

  /**
   * Visual variant
   */
  variant?: DropdownMenuVariant

  /**
   * Button size
   */
  size?: DropdownMenuSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Icon to display
   */
  icon?: LucideIcon

  /**
   * Icon position
   */
  iconPosition?: "left" | "right"

  /**
   * Whether to show chevron
   */
  showChevron?: boolean

  /**
   * Chevron placement
   */
  chevronPlacement?: ChevronPlacement

  /**
   * Custom chevron icon
   */
  chevronIcon?: LucideIcon

  /**
   * Whether the trigger is disabled
   */
  disabled?: boolean

  /**
   * Whether the dropdown is open (for styling)
   */
  isOpen?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}