import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/colors"
import type { LucideIcon } from "lucide-react"

export type LoadingSpinnerIcon = "loader2" | "loader" | "refresh-cw" | "rotate-3d" | "circle-dashed"

export type LoadingSpinnerSize = "xs" | "sm" | "md" | "lg" | "xl"

export type LoadingSpinnerTextPosition = "left" | "right" | "top" | "bottom"

export type LoadingSpinnerVariant = "default" | "solid" | "outline" | "ghost" | "elevated"

export interface LoadingSpinnerProps {
  /**
   * Whether the spinner is visible/active
   */
  loading?: boolean

  /**
   * Type of spinner icon to use
   */
  icon?: LoadingSpinnerIcon | LucideIcon

  /**
   * Size of the spinner
   */
  size?: LoadingSpinnerSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Visual variant (applies when background is provided)
   */
  variant?: LoadingSpinnerVariant

  /**
   * Loading text content
   */
  text?: string | ReactNode

  /**
   * Position of text relative to spinner
   */
  textPosition?: LoadingSpinnerTextPosition

  /**
   * Whether the loading can be dismissed
   */
  dismissible?: boolean

  /**
   * Custom spinner speed (CSS animation duration in seconds)
   */
  speed?: number

  /**
   * Whether to show background container (enables Paper styling)
   */
  background?: boolean

  /**
   * Whether to center the spinner in its container
   */
  centered?: boolean

  /**
   * Whether to show as inline element
   */
  inline?: boolean

  /**
   * Z-index for overlay mode
   */
  zIndex?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Additional CSS classes for the spinner icon
   */
  iconClassName?: string

  /**
   * Additional CSS classes for the text
   */
  textClassName?: string

  /**
   * Additional CSS classes for the container (when background is true)
   */
  containerClassName?: string

  /**
   * Callback when dismissed (if dismissible)
   */
  onDismiss?: () => void

  /**
   * Custom children content (overrides text)
   */
  children?: ReactNode
}