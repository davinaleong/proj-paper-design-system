import type { LucideIcon } from "lucide-react"
import type { TextAlignment } from "../shared"

export type SearchBarSize = "sm" | "md" | "lg"

export type SearchBarVariant = "default" | "filled" | "outlined"

export type SearchBarWidth = "fixed" | "flexible"

export interface SearchBarProps {
  /**
   * Search value
   */
  value?: string

  /**
   * Default value for uncontrolled search
   */
  defaultValue?: string

  /**
   * Placeholder text
   */
  placeholder?: string

  /**
   * Visual variant
   */
  variant?: SearchBarVariant

  /**
   * Search bar size
   */
  size?: SearchBarSize

  /**
   * Width behavior - fixed has recommended min-width, flexible spans parent
   */
  width?: SearchBarWidth

  /**
   * Disabled state
   */
  disabled?: boolean

  /**
   * Readonly state
   */
  readonly?: boolean

  /**
   * Required field
   */
  required?: boolean

  /**
   * Error state
   */
  error?: boolean

  /**
   * Error message
   */
  errorMessage?: string

  /**
   * Helper text
   */
  helperText?: string

  /**
   * Label text
   */
  label?: string

  /**
   * Label text alignment
   */
  labelAlign?: TextAlignment

  /**
   * Helper/error message text alignment
   */
  messageAlign?: TextAlignment

  /**
   * Left icon (defaults to Search icon)
   */
  leftIcon?: LucideIcon

  /**
   * Right icon
   */
  rightIcon?: LucideIcon

  /**
   * Hide the default search icon
   */
  hideSearchIcon?: boolean

  /**
   * Search handler
   */
  onSearch?: (value: string) => void

  /**
   * Change handler
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * Focus handler
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Blur handler
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void

  /**
   * Clear handler (when clear button is clicked)
   */
  onClear?: () => void

  /**
   * Show clear button when there's a value
   */
  showClearButton?: boolean

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Input name attribute
   */
  name?: string

  /**
   * Input id attribute
   */
  id?: string
}