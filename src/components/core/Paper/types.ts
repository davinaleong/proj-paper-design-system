import type { BackgroundLevel } from "../../../utils/color"
import type { ElementType, ReactNode } from "react"

export type ThemeElevation = "none" | "sm" | "md" | "lg" | "xl"

export type PaperVariant = "flat" | "elevated" | "outlined"

export type PaperPadding = "none" | "xs" | "sm" | "md" | "lg" | "xl"

export interface PaperProps {
  /**
   * Visual variant of the paper surface
   */
  variant?: PaperVariant

  /**
   * Internal padding of the paper
   */
  padding?: PaperPadding

  /**
   * Elevation override (defaults to theme elevation for elevated variant)
   */
  elevation?: ThemeElevation

  /**
   * Background color variant
   */
  background?: BackgroundLevel | "paper"

  /**
   * Border color variant (for outlined variant)
   */
  borderColor?: BackgroundLevel

  /**
   * Whether to show subtle paper texture
   */
  withTexture?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Children content
   */
  children?: ReactNode

  /**
   * HTML element type
   */
  as?: ElementType
}
