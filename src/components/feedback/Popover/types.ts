import type { ReactNode, HTMLAttributes, CSSProperties } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"
import type { ButtonVariant, ButtonSize } from "../../forms/Button/types"
import type { IconButtonVariant, IconButtonSize } from "../../forms/IconButton/types"

export type PopoverVariant = ButtonVariant // "solid" | "outline" | "ghost" | "link" | "plain"

export type PopoverSize = ButtonSize // "xs" | "sm" | "md" | "lg" | "xl"

export type PopoverPlacement = 
  | "top" 
  | "top-start" 
  | "top-end"
  | "bottom" 
  | "bottom-start" 
  | "bottom-end"
  | "left" 
  | "left-start" 
  | "left-end"
  | "right" 
  | "right-start" 
  | "right-end"

export type PopoverTrigger = "click" | "hover" | "focus" | "contextMenu"

export interface PopoverDismissible {
  clickOutside?: boolean
  escapeKey?: boolean
}

export interface PopoverPosition {
  top: number
  left: number
}

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /**
   * Trigger element (ReactNode)
   */
  children: ReactNode

  /**
   * Content to display in the popover
   */
  content: ReactNode

  /**
   * Whether the popover is open (controlled)
   */
  isOpen?: boolean

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * How the popover is triggered
   */
  trigger?: PopoverTrigger

  /**
   * Placement of the popover relative to trigger
   */
  placement?: PopoverPlacement

  /**
   * Visual variant following Button design system
   */
  variant?: PopoverVariant

  /**
   * Size of the popover
   */
  size?: PopoverSize

  /**
   * Whether to show arrow pointing to trigger
   */
  showArrow?: boolean

  /**
   * How the popover can be dismissed
   */
  dismissible?: PopoverDismissible

  /**
   * Offset from trigger element in pixels
   */
  offset?: number

  /**
   * Additional CSS classes for popover content
   */
  contentClassName?: string

  /**
   * Additional CSS styles for trigger
   */
  style?: CSSProperties

  /**
   * Additional CSS styles for popover content
   */
  contentStyle?: CSSProperties

  /**
   * Whether to render in portal
   */
  portal?: boolean

  /**
   * Whether the popover is disabled
   */
  disabled?: boolean
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: PopoverVariant
  size?: PopoverSize
  color?: ColorVariant
  paper?: boolean
  arrow?: boolean
  placement?: PopoverPlacement
}

export interface PopoverTriggerButtonProps {
  /**
   * Button content
   */
  children: ReactNode

  /**
   * Visual variant
   */
  variant?: PopoverVariant

  /**
   * Button size
   */
  size?: PopoverSize

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
   * Additional CSS classes
   */
  className?: string
}

export interface PopoverTriggerIconButtonProps {
  /**
   * Icon to display
   */
  icon: LucideIcon

  /**
   * Accessible label for screen readers
   */
  "aria-label": string

  /**
   * Visual variant
   */
  variant?: IconButtonVariant

  /**
   * Button size
   */
  size?: IconButtonSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Additional CSS classes
   */
  className?: string
}