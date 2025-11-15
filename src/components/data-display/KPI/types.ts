export interface KPIProps {
  /** The main KPI value */
  value: string | number
  /** The KPI title/label */
  title: string
  /** Optional subtitle or description */
  subtitle?: string
  /** Optional target or goal value */
  target?: string | number
  /** Current progress towards target (0-100) */
  progress?: number
  /** Visual variant style */
  variant?: "default" | "success" | "warning" | "error" | "info"
  /** Size variant */
  size?: "sm" | "md" | "lg"
  /** Optional icon */
  icon?: React.ReactNode
  /** Trend information */
  trend?: {
    value: number
    period?: string
    type: "up" | "down" | "neutral"
  }
  /** Format style for the KPI card */
  format?: "card" | "minimal" | "highlighted"
  /** Additional className for styling */
  className?: string
}
