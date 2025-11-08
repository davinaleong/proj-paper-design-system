import type { ReactNode } from 'react'

export type ClipboardButtonVariant = 'button' | 'icon' | 'text'
export type ClipboardButtonSize = 'sm' | 'md' | 'lg'
export type ClipboardButtonStyle = 'solid' | 'outline' | 'ghost' | 'link'

export interface ClipboardButtonProps {
  /**
   * The text content to copy to clipboard
   */
  text: string
  
  /**
   * Button variant style
   * @default 'button'
   */
  variant?: ClipboardButtonVariant
  
  /**
   * Button size
   * @default 'md'
   */
  size?: ClipboardButtonSize
  
  /**
   * Button style variant
   * @default 'outline'
   */
  style?: ClipboardButtonStyle
  
  /**
   * Button text content
   * @default 'Copy'
   */
  children?: ReactNode
  
  /**
   * Text to show when copy is successful
   * @default 'Copied!'
   */
  successText?: string
  
  /**
   * Text to show when copy fails
   * @default 'Failed to copy'
   */
  errorText?: string
  
  /**
   * Duration to show success/error state in milliseconds
   * @default 2000
   */
  feedbackDuration?: number
  
  /**
   * Whether to show visual feedback on copy
   * @default true
   */
  showFeedback?: boolean
  
  /**
   * Custom success icon component
   */
  successIcon?: ReactNode
  
  /**
   * Custom error icon component
   */
  errorIcon?: ReactNode
  
  /**
   * Custom copy icon component
   */
  copyIcon?: ReactNode
  
  /**
   * Callback when copy is successful
   */
  onSuccess?: (text: string) => void
  
  /**
   * Callback when copy fails
   */
  onError?: (error: Error) => void
  
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean
  
  /**
   * Custom CSS class
   */
  className?: string
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
  
  /**
   * Title attribute for tooltip
   */
  title?: string
}