import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/colors"

export type LoaderSize = "sm" | "md" | "lg"

export interface LoaderProps {
  /**
   * Whether the loader is active/visible
   */
  loading?: boolean

  /**
   * Text to display before the ellipsis
   */
  text?: string | ReactNode

  /**
   * Whether to show animated ellipsis dots
   */
  showEllipsis?: boolean

  /**
   * Color theme for the text and ellipsis
   */
  color?: ColorVariant

  /**
   * Size of the loader text
   */
  size?: LoaderSize

  /**
   * Speed of ellipsis animation (in seconds)
   */
  speed?: number

  /**
   * Whether to render as inline element
   */
  inline?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Additional CSS classes for the text
   */
  textClassName?: string

  /**
   * Additional CSS classes for the ellipsis
   */
  ellipsisClassName?: string

  /**
   * Custom children content (overrides text)
   */
  children?: ReactNode
}