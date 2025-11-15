import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/color"

export type SkeletonVariant = "text" | "image" | "avatar" | "button" | "card" | "custom"

export type SkeletonSize = "xs" | "sm" | "md" | "lg" | "xl"

export type SkeletonAnimation = "pulse" | "shimmer" | "wave" | "none"

export interface SkeletonProps {
  /**
   * Type of skeleton loading state
   */
  variant?: SkeletonVariant

  /**
   * Size of the skeleton element
   */
  size?: SkeletonSize

  /**
   * Animation type for the loading effect
   */
  animation?: SkeletonAnimation

  /**
   * Number of lines for text skeletons
   */
  lines?: number

  /**
   * Width of the skeleton (CSS value or preset)
   */
  width?: string | number

  /**
   * Height of the skeleton (CSS value or preset)
   */
  height?: string | number

  /**
   * Border radius for the skeleton
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full"

  /**
   * Whether to use Paper styling
   */
  paper?: boolean

  /**
   * Color theme for the skeleton
   */
  color?: ColorVariant

  /**
   * Animation speed in seconds
   */
  speed?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Custom children content (for custom variant)
   */
  children?: ReactNode

  /**
   * Whether the skeleton should be visible
   */
  loading?: boolean
}

export interface SkeletonTextProps extends Omit<SkeletonProps, 'variant'> {
  variant?: 'text'
}

export interface SkeletonImageProps extends Omit<SkeletonProps, 'variant'> {
  variant?: 'image'
  /**
   * Aspect ratio for image skeleton
   */
  aspectRatio?: "square" | "video" | "photo" | "wide"
}