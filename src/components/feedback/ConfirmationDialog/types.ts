import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/colors"
import type { LucideIcon } from "lucide-react"

export type ConfirmationDialogVariant = "solid" | "outline" | "ghost" | "elevated"

export type ConfirmationDialogSize = "sm" | "md" | "lg"

export type ConfirmationDialogAction = "yes" | "no" | "cancel"

export interface ConfirmationDialogProps {
  /**
   * Whether the dialog is visible
   */
  open?: boolean

  /**
   * Dialog title
   */
  title?: string

  /**
   * Dialog message/description
   */
  message?: string | ReactNode

  /**
   * Visual variant following button patterns
   */
  variant?: ConfirmationDialogVariant

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Dialog size
   */
  size?: ConfirmationDialogSize

  /**
   * Icon for the dialog
   */
  icon?: LucideIcon

  /**
   * Whether to show backdrop overlay
   */
  backdrop?: boolean | "static"

  /**
   * Whether to close on backdrop click
   */
  closeOnBackdropClick?: boolean

  /**
   * Whether to close on escape key
   */
  closeOnEscape?: boolean

  /**
   * Custom dialog content (overrides title and message)
   */
  children?: ReactNode

  /**
   * Text for the "Yes" button
   */
  yesText?: string

  /**
   * Text for the "No" button
   */
  noText?: string

  /**
   * Text for the "Cancel" button
   */
  cancelText?: string

  /**
   * Whether to show the "Yes" button
   */
  showYes?: boolean

  /**
   * Whether to show the "No" button
   */
  showNo?: boolean

  /**
   * Whether to show the "Cancel" button
   */
  showCancel?: boolean

  /**
   * Color variant for the "Yes" button
   */
  yesColor?: ColorVariant

  /**
   * Color variant for the "No" button
   */
  noColor?: ColorVariant

  /**
   * Color variant for the "Cancel" button
   */
  cancelColor?: ColorVariant

  /**
   * Z-index for the dialog
   */
  zIndex?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Additional CSS classes for the dialog content
   */
  contentClassName?: string

  /**
   * Callback when an action is taken
   */
  onAction?: (action: ConfirmationDialogAction) => void

  /**
   * Callback when "Yes" is clicked
   */
  onYes?: () => void

  /**
   * Callback when "No" is clicked
   */
  onNo?: () => void

  /**
   * Callback when "Cancel" is clicked
   */
  onCancel?: () => void

  /**
   * Callback when dialog is closed (any action)
   */
  onClose?: () => void
}