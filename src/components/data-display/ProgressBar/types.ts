export interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number
  /** Height of the bar in px */
  height?: number
  /** Color of the progress indicator */
  color?: string
  /** Optional label to display inside the bar */
  label?: string
  /** Show percentage text inside the bar */
  showPercent?: boolean
  /** Accessible label for screen readers */
  ariaLabel?: string
  /** Additional className for styling */
  className?: string
  /** Label color: 'black' | 'white' (default: 'black') */
  labelColor?: "black" | "white"
}
