import { useState } from 'react'
import { ErrorBoundary } from '../../components/system-utilities/ErrorBoundary'
import type { ErrorInfo } from '../../components/system-utilities/ErrorBoundary'
import { Paper } from '../../components/core/Paper'
import { Typography } from '../../components/core/Typography'
import { Button } from '../../components/forms/Button'
import { Card } from '../../components/layout/Card'
import { Badge } from '../../components/layout/Badge'
import { Section } from '../../components/layout/Section'

// Component that intentionally throws errors for demonstration
function BuggyComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('This is a test error thrown by BuggyComponent!')
  }
  
  return (
    <Card className="p-6">
      <Typography variant="h6" className="text-green-700 mb-2">
        ✅ Component Working
      </Typography>
      <Typography variant="body">
        This component is working normally. No errors to catch here!
      </Typography>
    </Card>
  )
}

// Another error component for different scenarios
function AsyncErrorComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Async operation failed unexpectedly')
  }
  
  return (
    <Card className="p-6">
      <Typography variant="h6" className="text-blue-700 mb-2">
        🔄 Async Component
      </Typography>
      <Typography variant="body">
        This simulates an async component that might throw during render.
      </Typography>
    </Card>
  )
}

// Component that throws error with detailed stack
function DeepNestedErrorComponent({ shouldThrow }: { shouldThrow: boolean }) {
  const ThrowingChild = () => {
    if (shouldThrow) {
      throw new Error('Deep nested component error with complex stack trace')
    }
    return <span>Deep nested component is OK</span>
  }
  
  return (
    <Card className="p-6">
      <Typography variant="h6" className="text-purple-700 mb-2">
        🏗️ Nested Component
      </Typography>
      <Typography variant="body" className="mb-2">
        Component with deeply nested error source:
      </Typography>
      <div className="bg-stone-50 p-3 rounded">
        <ThrowingChild />
      </div>
    </Card>
  )
}

export function ErrorBoundaryShowcase() {
  const [triggerError1, setTriggerError1] = useState(false)
  const [triggerError2, setTriggerError2] = useState(false)
  const [triggerError3, setTriggerError3] = useState(false)
  const [triggerError4, setTriggerError4] = useState(false)
  const [errorLog, setErrorLog] = useState<Array<{ time: string; message: string }>>([])

  const logError = (error: ErrorInfo) => {
    const errorInfo = {
      time: new Date().toLocaleTimeString(),
      message: error.message || 'Unknown error',
    }
    setErrorLog(prev => [errorInfo, ...prev.slice(0, 4)]) // Keep last 5 errors
  }

  const resetAllErrors = () => {
    setTriggerError1(false)
    setTriggerError2(false)
    setTriggerError3(false)
    setTriggerError4(false)
  }

  const customFallback = (error: ErrorInfo) => (
    <Card className="p-6 border-2 border-orange-200 bg-orange-50">
      <Typography variant="h6" className="text-orange-800 mb-2">
        🎨 Custom Error UI
      </Typography>
      <Typography variant="body" className="text-orange-700 mb-4">
        This is a custom fallback component with a unique design.
      </Typography>
      <Typography variant="caption" className="text-orange-600 font-mono">
        Error: {error.message}
      </Typography>
    </Card>
  )

  return (
    <div className="space-y-8">
      <Section>
        <Typography variant="h4" className="mb-4">Error Boundary Component</Typography>
        <Typography variant="body" className="text-neutral-600 mb-6">
          React Error Boundary that catches JavaScript errors in component trees, logs them, and displays fallback UI with recovery options.
        </Typography>
      </Section>

      {/* Control Panel */}
      <Section>
        <Typography variant="h5" className="mb-4">Error Testing Controls</Typography>
        <Paper className="p-4">
          <div className="flex flex-wrap gap-3 mb-4">
            <Button
              variant={triggerError1 ? 'solid' : 'outline'}
              onClick={() => setTriggerError1(!triggerError1)}
              className={triggerError1 ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Toggle Basic Error
            </Button>
            <Button
              variant={triggerError2 ? 'solid' : 'outline'}
              onClick={() => setTriggerError2(!triggerError2)}
              className={triggerError2 ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Toggle Async Error
            </Button>
            <Button
              variant={triggerError3 ? 'solid' : 'outline'}
              onClick={() => setTriggerError3(!triggerError3)}
              className={triggerError3 ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Toggle Nested Error
            </Button>
            <Button
              variant={triggerError4 ? 'solid' : 'outline'}
              onClick={() => setTriggerError4(!triggerError4)}
              className={triggerError4 ? 'bg-red-600 hover:bg-red-700' : ''}
            >
              Toggle Custom Fallback Error
            </Button>
          </div>
          <Button
            variant="outline"
            onClick={resetAllErrors}
            className="w-full sm:w-auto"
          >
            Reset All Errors
          </Button>
        </Paper>
      </Section>

      {/* Basic Error Boundary */}
      <Section>
        <Typography variant="h5" className="mb-4">Basic Error Boundary</Typography>
        <ErrorBoundary
          onError={logError}
          name="BasicErrorBoundary"
        >
          <BuggyComponent shouldThrow={triggerError1} />
        </ErrorBoundary>
      </Section>

      {/* Error Boundary with Details */}
      <Section>
        <Typography variant="h5" className="mb-4">Error Boundary with Details (Development)</Typography>
        <ErrorBoundary
          showErrorDetails={true}
          errorTitle="Development Error"
          errorMessage="This error boundary shows detailed error information for debugging."
          onError={logError}
          name="DetailedErrorBoundary"
        >
          <AsyncErrorComponent shouldThrow={triggerError2} />
        </ErrorBoundary>
      </Section>

      {/* Custom Fallback */}
      <Section>
        <Typography variant="h5" className="mb-4">Custom Fallback UI</Typography>
        <ErrorBoundary
          fallback={customFallback}
          onError={logError}
          name="CustomFallbackBoundary"
        >
          <DeepNestedErrorComponent shouldThrow={triggerError3} />
        </ErrorBoundary>
      </Section>

      {/* No Retry Button */}
      <Section>
        <Typography variant="h5" className="mb-4">Error Boundary without Retry</Typography>
        <ErrorBoundary
          showRetryButton={false}
          errorTitle="Critical Error"
          errorMessage="This error cannot be recovered from. Please refresh the page manually."
          onError={logError}
          name="NoRetryBoundary"
        >
          <BuggyComponent shouldThrow={triggerError4} />
        </ErrorBoundary>
      </Section>

      {/* Nested Error Boundaries */}
      <Section>
        <Typography variant="h5" className="mb-4">Nested Error Boundaries</Typography>
        <Typography variant="body" className="text-neutral-600 mb-4">
          Multiple error boundaries can be nested to handle errors at different levels.
        </Typography>
        <ErrorBoundary
          errorTitle="Outer Boundary"
          className="border-2 border-blue-200 rounded-lg"
          onError={(error) => logError({ ...error, message: `Outer: ${error.message}` })}
          name="OuterBoundary"
        >
          <Paper className="p-4 bg-blue-50">
            <Typography variant="h6" className="mb-4">Outer Error Boundary</Typography>
            <ErrorBoundary
              errorTitle="Inner Boundary"
              className="border-2 border-green-200 rounded-lg"  
              onError={(error) => logError({ ...error, message: `Inner: ${error.message}` })}
              name="InnerBoundary"
            >
              <Paper className="p-4 bg-green-50">
                <Typography variant="h6" className="mb-4">Inner Error Boundary</Typography>
                <Button
                  variant="outline"
                  onClick={() => {
                    throw new Error('Error from button click in nested boundary')
                  }}
                >
                  Throw Error in Inner Boundary
                </Button>
              </Paper>
            </ErrorBoundary>
          </Paper>
        </ErrorBoundary>
      </Section>

      {/* Error Log */}
      <Section>
        <Typography variant="h5" className="mb-4">Error Log</Typography>
        <Paper className="p-4">
          {errorLog.length === 0 ? (
            <Typography variant="body" className="text-neutral-500 italic">
              No errors logged yet. Trigger some errors above to see them here.
            </Typography>
          ) : (
            <div className="space-y-2">
              {errorLog.map((entry, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <Badge variant="soft" color="red" size="sm">
                    {index + 1}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <Typography variant="caption" className="text-red-600 font-mono block">
                      {entry.time}
                    </Typography>
                    <Typography variant="body" className="text-red-800">
                      {entry.message}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {errorLog.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setErrorLog([])}
              className="mt-4"
            >
              Clear Error Log
            </Button>
          )}
        </Paper>
      </Section>

      {/* Usage Examples */}
      <Section>
        <Typography variant="h5" className="mb-4">Usage Examples</Typography>
        <div className="grid gap-6">
          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">Basic Usage</Typography>
            <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>`}
            </pre>
          </Paper>

          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">With Custom Fallback</Typography>
            <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`<ErrorBoundary
  fallback={(error) => (
    <div>Custom error UI: {error.message}</div>
  )}
>
  <MyComponent />
</ErrorBoundary>`}
            </pre>
          </Paper>

          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">With Error Logging</Typography>
            <pre className="text-sm bg-white p-3 rounded border overflow-x-auto">
{`<ErrorBoundary
  onError={(error) => {
    console.error('Component error:', error)
    // Send to error reporting service
  }}
  showErrorDetails={process.env.NODE_ENV === 'development'}
>
  <MyComponent />
</ErrorBoundary>`}
            </pre>
          </Paper>
        </div>
      </Section>
    </div>
  )
}