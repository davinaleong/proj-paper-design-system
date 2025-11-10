import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import type { ButtonVariant, ButtonSize } from "../../forms/Button/types"
import type { ColorVariant } from "../../../utils/colors"
import type { ThemeMode } from "../../../hooks/useThemeMode"

export type ThemeToggleMode = ThemeMode

export type ThemeToggleVariant = "buttons" | "dropdown" | "segmented"

export type ThemeToggleSize = ButtonSize

export interface ThemeToggleOption {
  /**
   * Unique identifier for the theme option
   */
  id: string

  /**
   * Theme mode value
   */
  mode: ThemeToggleMode

  /**
   * Display label for the theme option
   */
  label: string

  /**
   * Icon for the theme option
   */
  icon: LucideIcon

  /**
   * Optional description for the theme option
   */
  description?: string

  /**
   * Whether this option is disabled
   */
  disabled?: boolean
}

export interface ThemeToggleProps {
  /**
   * Current active theme mode
   */
  value?: ThemeToggleMode

  /**
   * Default theme mode for uncontrolled usage
   */
  defaultValue?: ThemeToggleMode

  /**
   * Available theme options
   */
  options?: ThemeToggleOption[]

  /**
   * Visual variant of the theme toggle
   */
  variant?: ThemeToggleVariant

  /**
   * Size of the toggle controls
   */
  size?: ThemeToggleSize

  /**
   * Button variant for button-style toggle
   */
  buttonVariant?: ButtonVariant

  /**
   * Color theme for active state
   */
  color?: ColorVariant

  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean

  /**
   * Show labels alongside icons
   */
  showLabels?: boolean

  /**
   * Show tooltips on hover
   */
  showTooltips?: boolean

  /**
   * Orientation for segmented variant
   */
  orientation?: "horizontal" | "vertical"

  /**
   * Compact mode with reduced spacing
   */
  compact?: boolean

  /**
   * Custom label for the toggle group
   */
  label?: string

  /**
   * Helper text
   */
  helperText?: string

  /**
   * Change handler
   */
  onChange?: (mode: ThemeToggleMode) => void

  /**
   * Custom content to render before the toggle options
   */
  prefixContent?: ReactNode

  /**
   * Custom content to render after the toggle options
   */
  suffixContent?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string

  /**
   * Additional CSS classes for individual toggle buttons
   */
  buttonClassName?: string
}