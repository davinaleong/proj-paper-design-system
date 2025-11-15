import type { HTMLAttributes } from "react"
import type { ColorVariant } from "../../../utils/color"

export type DotIndicatorSize = "xs" | "sm" | "md" | "lg" | "xl"

export type DotIndicatorVariant = "solid" | "soft" | "outline" | "pulse"

export interface DotIndicatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  /**
   * Color theme for the dot indicator
   * @default "primary"
   */
  color?: ColorVariant

  /**
   * Visual variant of the dot indicator
   * @default "solid"
   */
  variant?: DotIndicatorVariant

  /**
   * Size of the dot indicator
   * @default "md"
   */
  size?: DotIndicatorSize

  /**
   * Whether the dot should animate
   * @default false
   */
  animated?: boolean

  /**
   * Animation duration in milliseconds
   * @default 1500
   */
  animationDuration?: number

  /**
   * Custom animation delay in milliseconds
   * @default 0
   */
  animationDelay?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Test identifier
   */
  "data-testid"?: string
}
