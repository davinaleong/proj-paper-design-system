import type { ReactNode, HTMLAttributes } from "react"
import type { ColorVariant } from "../../../utils/colors"

export type BackdropVariant = "solid" | "blur" | "patterned"

export interface BackdropProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Whether the backdrop is visible
   */
  isOpen?: boolean

  /**
   * Backdrop visual variant
   */
  variant?: BackdropVariant

  /**
   * Color overlay for blur and patterned variants
   */
  color?: ColorVariant

  /**
   * Opacity of the backdrop (0-1)
   */
  opacity?: number

  /**
   * Click handler for backdrop
   */
  onClick?: () => void

  /**
   * Whether the backdrop is dismissible by clicking
   */
  dismissible?: boolean

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number

  /**
   * Z-index for the backdrop
   */
  zIndex?: number

  /**
   * Pattern type for patterned variant
   */
  pattern?: "dots" | "grid" | "diagonal" | "waves"

  /**
   * Pattern intensity for patterned variant
   */
  patternIntensity?: "subtle" | "medium" | "strong"

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Children to render above the backdrop
   */
  children?: ReactNode
}