import React, { Component } from 'react'
import type { ErrorInfo as ReactErrorInfo } from 'react'
import { Paper } from '../../core/Paper'
import { Typography } from '../../core/Typography'
import { Button } from '../../forms/Button'
import { cn } from '../../../utils/cn'
import type { ErrorBoundaryProps, ErrorBoundaryState, ErrorInfo } from './types'

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    
    this.state = {
      hasError: false,
      error: undefined,
      retryKey: 0,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state to render fallback UI
    return {
      hasError: true,
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name,
        cause: error.cause,
      },
    }
  }

  componentDidCatch(error: Error, errorInfo: ReactErrorInfo) {
    const errorDetails: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack || undefined,
      name: error.name,
      cause: error.cause,
    }

    // Update state with component stack
    this.setState({
      error: {
        ...errorDetails,
        componentStack: errorInfo.componentStack || undefined,
      },
    })

    // Log error if enabled
    if (this.props.enableLogging !== false) {
      console.error('ErrorBoundary caught an error:', error)
      console.error('Component stack:', errorInfo.componentStack)
    }

    // Call onError callback
    this.props.onError?.(errorDetails)
  }

  handleRetry = () => {
    // Call onRetry callback
    this.props.onRetry?.()
    
    // Reset error state and force re-render
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      retryKey: prevState.retryKey + 1,
    }))
  }

  renderFallback() {
    const {
      fallback,
      showErrorDetails = false,
      showRetryButton = true,
      retryText = "Try Again",
      errorTitle = "Something went wrong",
      errorMessage = "An unexpected error occurred. Please try refreshing the page.",
      className,
    } = this.props
    
    const { error } = this.state

    // Use custom fallback if provided
    if (fallback) {
      if (typeof fallback === 'function') {
        return fallback(error!)
      }
      return fallback
    }

    // Default fallback UI
    return (
      <div className={cn("flex items-center justify-center min-h-[200px] p-4", className)}>
        <Paper className="p-8 max-w-md w-full text-center" variant="outlined">
          <div className="mb-6">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.962-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <Typography variant="h5" className="text-red-800 mb-2">
              {errorTitle}
            </Typography>
            
            <Typography variant="body" className="text-stone-600 mb-4">
              {errorMessage}
            </Typography>
          </div>

          {/* Error Details (Development) */}
          {showErrorDetails && error && (
            <Paper className="p-4 mb-6 bg-red-50 border border-red-200" variant="flat">
              <Typography variant="caption" className="text-red-700 font-mono text-left block">
                <strong>Error:</strong> {error.message}
              </Typography>
              {error.name && (
                <Typography variant="caption" className="text-red-700 font-mono text-left block mt-1">
                  <strong>Type:</strong> {error.name}
                </Typography>
              )}
              {error.componentStack && (
                <details className="mt-3">
                  <summary className="cursor-pointer text-red-700 font-semibold">
                    Component Stack
                  </summary>
                  <pre className="text-xs text-red-600 mt-2 whitespace-pre-wrap overflow-x-auto">
                    {error.componentStack}
                  </pre>
                </details>
              )}
            </Paper>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {showRetryButton && (
              <Button
                onClick={this.handleRetry}
                variant="solid"
                className="bg-red-600 hover:bg-red-700"
              >
                {retryText}
              </Button>
            )}
            
            <Button
              onClick={() => window.location.reload()}
              variant="outline"
            >
              Refresh Page
            </Button>
          </div>
        </Paper>
      </div>
    )
  }

  render() {
    const { hasError, retryKey } = this.state
    const { children } = this.props

    if (hasError) {
      return this.renderFallback()
    }

    // Wrap children with key to force re-render on retry
    return (
      <React.Fragment key={retryKey}>
        {children}
      </React.Fragment>
    )
  }
}