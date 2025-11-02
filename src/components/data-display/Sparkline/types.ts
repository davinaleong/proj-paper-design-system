export type SparklineData = number[]

export type SparklineVariant = "line" | "area" | "bar"
export type SparklineSize = "sm" | "md" | "lg"

export interface SparklineProps {
  /**
   * Data points for the sparkline
   */
  data: SparklineData

  /**
   * Chart type
   */
  variant?: SparklineVariant

  /**
   * Chart size
   */
  size?: SparklineSize

  /**
   * Custom width
   */
  width?: number

  /**
   * Custom height
   */
  height?: number

  /**
   * Line/fill color
   */
  color?: string

  /**
   * Show dots on data points
   */
  showDots?: boolean

  /**
   * Highlight last value
   */
  highlightLast?: boolean

  /**
   * Additional CSS classes
   */
  className?: string
}