export interface ProgressCircleProps {
  /** Progress value (0-100) */
  value: number
  /** Size of the circle in px */
  size?: number
  /** Stroke width in px */
  strokeWidth?: number
  /** Color of the progress indicator */
  color?: string
  /** Optional label to display in the center */
  label?: string
  /** Show percentage text in the center */
  showPercent?: boolean
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Additional className for styling */
  className?: string
}
