import type { ReactNode } from 'react'

export interface ErrorInfo {
  /**
   * Error message
   */
  message: string
  
  /**
   * Error stack trace
   */
  stack?: string
  
  /**
   * Component stack trace where error occurred
   */
  componentStack?: string
  
  /**
   * Error name/type
   */
  name?: string
  
  /**
   * Additional error details
   */
  cause?: unknown
}

export interface ErrorBoundaryState {
  /**
   * Whether an error has occurred
   */
  hasError: boolean
  
  /**
   * Error information
   */
  error?: ErrorInfo
  
  /**
   * Random key to force re-render on retry
   */
  retryKey: number
}

export interface ErrorBoundaryProps {
  /**
   * Child components to wrap with error boundary
   */
  children: ReactNode
  
  /**
   * Custom fallback component to render when error occurs
   */
  fallback?: ReactNode | ((error: ErrorInfo) => ReactNode)
  
  /**
   * Whether to show error details in fallback UI
   * @default false
   */
  showErrorDetails?: boolean
  
  /**
   * Whether to show retry button
   * @default true
   */
  showRetryButton?: boolean
  
  /**
   * Custom retry button text
   * @default "Try Again"
   */
  retryText?: string
  
  /**
   * Custom error title
   * @default "Something went wrong"
   */
  errorTitle?: string
  
  /**
   * Custom error message
   * @default "An unexpected error occurred. Please try refreshing the page."
   */
  errorMessage?: string
  
  /**
   * Callback when error occurs
   */
  onError?: (error: ErrorInfo) => void
  
  /**
   * Callback when retry is clicked
   */
  onRetry?: () => void
  
  /**
   * Enable console logging of errors
   * @default true
   */
  enableLogging?: boolean
  
  /**
   * Custom CSS class for error boundary container
   */
  className?: string
  
  /**
   * Component identifier for debugging
   */
  name?: string
}