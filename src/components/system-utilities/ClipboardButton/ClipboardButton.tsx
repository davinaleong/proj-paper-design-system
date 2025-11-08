import { useState, useCallback } from 'react'
import { Copy, Check, X } from 'lucide-react'
import { Button } from '../../forms/Button'
import { IconButton } from '../../forms/IconButton'
import { Typography } from '../../core/Typography'
import { cn } from '../../../utils/cn'
import type { ClipboardButtonProps } from './types'

type ClipboardState = 'idle' | 'success' | 'error'

// Hook for clipboard functionality
function useClipboard(
  text: string,
  onSuccess?: (text: string) => void,
  onError?: (error: Error) => void,
  feedbackDuration = 2000
) {
  const [state, setState] = useState<ClipboardState>('idle')

  const copyToClipboard = useCallback(async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Use modern Clipboard API
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for older browsers or non-HTTPS
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        
        if (!successful) {
          throw new Error('Failed to copy text')
        }
      }
      
      setState('success')
      onSuccess?.(text)
      
      // Reset to idle after feedback duration
      setTimeout(() => setState('idle'), feedbackDuration)
      
    } catch (error) {
      setState('error')
      onError?.(error instanceof Error ? error : new Error('Copy failed'))
      
      // Reset to idle after feedback duration
      setTimeout(() => setState('idle'), feedbackDuration)
    }
  }, [text, onSuccess, onError, feedbackDuration])

  return { state, copyToClipboard }
}

export function ClipboardButton({
  text,
  variant = 'button',
  size = 'md',
  style = 'outline',
  children = 'Copy',
  successText = 'Copied!',
  errorText = 'Failed to copy',
  feedbackDuration = 2000,
  showFeedback = true,
  successIcon,
  errorIcon,
  copyIcon,
  onSuccess,
  onError,
  disabled = false,
  className,
  'aria-label': ariaLabel,
  'data-testid': testId,
  title,
}: ClipboardButtonProps) {
  const { state, copyToClipboard } = useClipboard(
    text,
    onSuccess,
    onError,
    feedbackDuration
  )

  // Default icons
  const defaultCopyIcon = copyIcon || <Copy size={16} />
  const defaultSuccessIcon = successIcon || <Check size={16} />
  const defaultErrorIcon = errorIcon || <X size={16} />

  // Determine current display content
  const getCurrentContent = () => {
    if (!showFeedback || state === 'idle') {
      return {
        text: children,
        icon: defaultCopyIcon,
        colorClass: ''
      }
    }
    
    if (state === 'success') {
      return {
        text: successText,
        icon: defaultSuccessIcon,
        colorClass: 'text-green-600'
      }
    }
    
    if (state === 'error') {
      return {
        text: errorText,
        icon: defaultErrorIcon,
        colorClass: 'text-red-600'
      }
    }

    return {
      text: children,
      icon: defaultCopyIcon,
      colorClass: ''
    }
  }

  const content = getCurrentContent()
  const isDisabled = disabled || state === 'success' || state === 'error'

  // Map style to IconButton variant
  const getIconButtonVariant = (style: string) => {
    switch (style) {
      case 'solid': return 'solid'
      case 'outline': return 'outline'  
      case 'ghost': return 'ghost'
      case 'link': return 'plain'
      default: return 'outline'
    }
  }

  // Button variants
  if (variant === 'icon') {
    // For icon variant, we need to handle icons differently since IconButton expects LucideIcon
    const getIconComponent = () => {
      if (state === 'success' && showFeedback) return Check
      if (state === 'error' && showFeedback) return X
      return Copy
    }

    return (
      <IconButton
        icon={getIconComponent()}
        onClick={copyToClipboard}
        disabled={isDisabled}
        variant={getIconButtonVariant(style)}
        size={size}
        className={cn(content.colorClass, className)}
        aria-label={ariaLabel || `Copy "${text}" to clipboard`}
        data-testid={testId}
        title={title || `Copy "${text}" to clipboard`}
      />
    )
  }

  if (variant === 'text') {
    return (
      <button
        onClick={copyToClipboard}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center gap-2 text-sm font-medium transition-colors',
          'hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          isDisabled && 'pointer-events-none',
          content.colorClass || 'text-stone-600',
          className
        )}
        aria-label={ariaLabel || `Copy "${text}" to clipboard`}
        data-testid={testId}
        title={title || `Copy "${text}" to clipboard`}
      >
        {content.icon}
        <Typography variant="caption" className="font-medium">
          {content.text}
        </Typography>
      </button>
    )
  }

  // Default button variant
  return (
    <Button
      onClick={copyToClipboard}
      disabled={isDisabled}
      variant={style}
      size={size}
      className={cn(content.colorClass, className)}
      aria-label={ariaLabel || `Copy "${text}" to clipboard`}
      data-testid={testId}
      title={title || `Copy "${text}" to clipboard`}
    >
      <span className="flex items-center gap-2">
        {content.icon}
        {content.text}
      </span>
    </Button>
  )
}