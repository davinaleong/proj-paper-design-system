import type { ReactNode } from "react"

export type GaugeChartSize = "sm" | "md" | "lg"
export type GaugeChartVariant = "default" | "success" | "warning" | "error" | "info"

export interface GaugeChartProps {
  /**
   * Current value (0-100)
   */
  value: number

  /**
   * Chart size
   */
  size?: GaugeChartSize

  /**
   * Color variant
   */
  variant?: GaugeChartVariant

  /**
   * Custom color override
   */
  color?: string

  /**
   * Label text
   */
  label?: string

  /**
   * Show percentage in center
   */
  showPercent?: boolean

  /**
   * Minimum value for the gauge
   */
  min?: number

  /**
   * Maximum value for the gauge
   */
  max?: number

  /**
   * Custom center content
   */
  children?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string
}
