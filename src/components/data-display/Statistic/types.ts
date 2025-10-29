export interface StatisticProps {
  /** The main numeric value or statistic */
  value: string | number
  /** Label or title for the statistic */
  label: string
  /** Optional description or subtitle */
  description?: string
  /** Optional icon to display */
  icon?: React.ReactNode
  /** Visual style variant */
  variant?: "default" | "success" | "warning" | "error" | "info"
  /** Size variant */
  size?: "sm" | "md" | "lg"
  /** Alignment of content */
  align?: "left" | "center" | "right"
  /** Optional trend indicator */
  trend?: {
    value: number
    label?: string
    type: "up" | "down" | "neutral"
  }
  /** Additional className for styling */
  className?: string
}