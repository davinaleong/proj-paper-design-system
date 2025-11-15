import type { ColorVariant, ColorIntensity } from "../../../utils/color"
import type { ElementType, ReactNode } from "react"

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "title"
  | "subtitle"
  | "body"
  | "bodyLarge"
  | "bodySmall"
  | "caption"
  | "overline"
  | "code"
  | "pre"
  | "strong"
  | "em"
  | "small"
  | "kbd"
  | "del"
  | "sub"
  | "sup"
  | "abbr"
  | "cite"
  | "q"
  | "dfn"
  | "samp"
  | "var"
  | "time"
  | "data"
  | "ins"

export type TypographyWeight =
  | "thin"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"

export type TypographyAlign = "left" | "center" | "right" | "justify"

export interface TypographyProps {
  /**
   * Typography variant that determines size and styling
   */
  variant?: TypographyVariant

  /**
   * Text color variant
   */
  color?: ColorVariant

  /**
   * Color intensity
   */
  intensity?: ColorIntensity

  /**
   * Font weight
   */
  weight?: TypographyWeight

  /**
   * Text alignment
   */
  align?: TypographyAlign

  /**
   * Whether text should be truncated with ellipsis
   */
  truncate?: boolean

  /**
   * Whether text should wrap or nowrap
   */
  noWrap?: boolean

  /**
   * Maximum number of lines before truncation (requires truncate)
   */
  maxLines?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Children content
   */
  children?: ReactNode

  /**
   * HTML element type (auto-determined by variant if not specified)
   */
  as?: ElementType

  /**
   * Title attribute for abbreviations and other elements
   */
  title?: string

  /**
   * DateTime attribute for time elements
   */
  dateTime?: string

  /**
   * Value attribute for data elements
   */
  value?: string | number

  /**
   * ID attribute
   */
  id?: string

  /**
   * Common HTML event handlers and attributes
   */
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  role?: string
  'aria-label'?: string
  'aria-describedby'?: string
  'data-testid'?: string
}
