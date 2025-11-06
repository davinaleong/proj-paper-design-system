import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"
import type { ButtonHTMLAttributes, RefAttributes } from "react"

export type IconButtonVariant = "solid" | "outline" | "ghost" | "plain"
export type IconButtonSize = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Props for the IconButton component.
 * Extends standard HTML button attributes for full compatibility.
 */
export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "type" | "onClick"> {
  /**
   * Icon component to render (Lucide icon or compatible)
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
   * Loading state
   */
  loading?: boolean

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Button type
   */
  type?: "button" | "submit" | "reset"

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Mouse enter handler
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Mouse leave handler
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void

  /**
   * Context menu handler
   */
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Additional CSS classes
   */
  className?: string
}

export type IconButtonRef = RefAttributes<HTMLButtonElement>
