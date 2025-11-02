import React, { useMemo } from "react"
import { Check, X, AlertCircle } from "lucide-react"
import { cn } from "../../../utils/cn"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { Typography } from "../../core/Typography"
import type { StepperProps, StepItemProps, StepStatus, StepperFormat } from "./types"
import type { IconButtonVariant } from "../../forms/IconButton/types"
import "./Stepper.css"

// Helper functions for different step formats
const formatStepNumber = (index: number, format: StepperFormat): string => {
  const stepNumber = index + 1
  
  switch (format) {
    case "numeric":
      return stepNumber.toString()
    case "alpha":
      return String.fromCharCode(96 + stepNumber) // a, b, c, d...
    case "roman":
      return toRoman(stepNumber).toLowerCase()
    case "custom":
      return "" // Icons will be used instead
    default:
      return stepNumber.toString()
  }
}

// Roman numeral converter (reused from pagination)
const toRoman = (num: number): string => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ]

  let result = ""
  for (const { value, symbol } of romanNumerals) {
    while (num >= value) {
      result += symbol
      num -= value
    }
  }
  return result
}

// Get status icon
const getStatusIcon = (status: StepStatus) => {
  switch (status) {
    case "completed":
      return Check
    case "error":
      return X
    case "current":
      return AlertCircle
    default:
      return undefined
  }
}

// Step Item Component
const StepItem: React.FC<StepItemProps> = ({
  step,
  index,
  totalSteps,
  variant,
  size,
  color,
  format,
  orientation,
  showDescription,
  showConnector,
  clickable,
  onClick,
  className,
}) => {
  const isLast = index === totalSteps - 1
  const stepNumber = formatStepNumber(index, format)
  const statusIcon = getStatusIcon(step.status)
  const displayIcon = format === "custom" ? step.icon : statusIcon

  // Size classes
  const sizeClasses = {
    sm: {
      step: "min-w-6 w-6 h-6 text-xs",
      connector: orientation === "horizontal" ? "h-px" : "w-px",
      content: "text-xs",
      title: "text-sm",
      description: "text-xs",
      gap: orientation === "horizontal" ? "gap-2" : "gap-1",
    },
    md: {
      step: "min-w-8 w-8 h-8 text-sm",
      connector: orientation === "horizontal" ? "h-0.5" : "w-0.5",
      content: "text-sm",
      title: "text-base",
      description: "text-sm",
      gap: orientation === "horizontal" ? "gap-3" : "gap-2",
    },
    lg: {
      step: "min-w-10 w-10 h-10 text-base",
      connector: orientation === "horizontal" ? "h-1" : "w-1",
      content: "text-base",
      title: "text-lg",
      description: "text-base",
      gap: orientation === "horizontal" ? "gap-4" : "gap-3",
    },
  }

  // Get variant-specific styling based on step status
  const getStepVariant = (): IconButtonVariant => {
    switch (step.status) {
      case "completed":
        return "solid"
      case "current":
        return variant === "plain" ? "solid" : (variant === "link" ? "solid" : variant as IconButtonVariant)
      case "error":
        return "solid"
      case "pending":
        return variant === "solid" ? "outline" : (variant === "link" ? "outline" : variant as IconButtonVariant)
      default:
        return variant === "link" ? "solid" : variant as IconButtonVariant
    }
  }

  const getStepColor = () => {
    switch (step.status) {
      case "completed":
        return "success"
      case "current":
        return color
      case "error":
        return "danger"
      case "pending":
        return "muted"
      default:
        return color
    }
  }

  const handleClick = () => {
    if (clickable && !step.disabled && onClick) {
      onClick(index, step)
    }
  }

  const isClickable = clickable && !step.disabled

  // Render step indicator
  const renderStepIndicator = () => {
    const stepVariant = getStepVariant()
    const stepColor = getStepColor()
    const stepClasses = cn(
      "flex items-center justify-center rounded-full font-medium transition-all duration-200",
      "focus:outline-none focus:ring-2 focus:ring-offset-2",
      sizeClasses[size].step,
      isClickable && "cursor-pointer hover:scale-105",
      step.disabled && "opacity-50 cursor-not-allowed",
      className
    )

    if (displayIcon) {
      return (
        <IconButton
          icon={displayIcon}
          variant={stepVariant}
          color={stepColor}
          size={size}
          disabled={step.disabled}
          onClick={handleClick}
          className={stepClasses}
          aria-label={`Step ${index + 1}: ${step.title}`}
        />
      )
    }

    return (
      <Button
        variant={stepVariant}
        color={stepColor}
        size={size}
        disabled={step.disabled}
        onClick={handleClick}
        className={stepClasses}
        aria-label={`Step ${index + 1}: ${step.title}`}
      >
        {stepNumber}
      </Button>
    )
  }

  // Render connector line
  const renderConnector = () => {
    if (!showConnector || isLast) return null

    const connectorClasses = cn(
      "stepper-connector bg-border transition-colors duration-200",
      orientation === "horizontal" 
        ? cn("flex-1", sizeClasses[size].connector)
        : cn("flex-1", sizeClasses[size].connector, "min-h-8"),
      step.status === "completed" && "bg-success",
      className
    )

    return <div className={connectorClasses} />
  }

  // Layout based on orientation
  if (orientation === "vertical") {
    return (
      <div className={cn("flex flex-col", className)}>
        <div className={cn("flex items-start", sizeClasses[size].gap)}>
          <div className="flex flex-col items-center">
            {renderStepIndicator()}
            {renderConnector()}
          </div>
          <div className="flex-1 min-w-0">
            <Typography
              variant="h6"
              className={cn(
                "font-medium",
                sizeClasses[size].title,
                step.status === "completed" && "text-success",
                step.status === "current" && "text-primary",
                step.status === "error" && "text-danger",
                step.status === "pending" && "text-muted"
              )}
            >
              {step.title}
            </Typography>
            {showDescription && step.description && (
              <Typography
                variant="body"
                className={cn(
                  "text-muted mt-1",
                  sizeClasses[size].description
                )}
              >
                {step.description}
              </Typography>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Horizontal layout
  return (
    <div className={cn("flex items-center", sizeClasses[size].gap, className)}>
      <div className="flex flex-col items-center text-center min-w-[6em] sm:min-w-[8em] md:min-w-[15em] flex-shrink-0">
        {renderStepIndicator()}
        <div className="mt-2 leading-tight whitespace-normal">
          <Typography
            variant="h6"
            className={cn(
              "flex justify-center text-center",
              "font-medium",
              sizeClasses[size].title,
              step.status === "completed" && "text-success",
              step.status === "current" && "text-primary",
              step.status === "error" && "text-danger",
              step.status === "pending" && "text-muted"
            )}
          >
            {step.title}
          </Typography>
          {showDescription && step.description && (
            <Typography
              variant="body"
              className={cn(
                "flex justify-center text-center",
                "text-muted mt-1",
                sizeClasses[size].description
              )}
            >
              {step.description}
            </Typography>
          )}
        </div>
      </div>
      {renderConnector()}
    </div>
  )
}

// Main Stepper Component
export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  variant = "solid",
  size = "md",
  color = "primary",
  format = "numeric",
  orientation = "horizontal",
  showDescriptions = true,
  showConnectors = true,
  clickableSteps = false,
  onStepClick,
  className,
  showContent = false,
  ...props
}) => {
  // Validate currentStep
  const validCurrentStep = Math.max(0, Math.min(currentStep, steps.length - 1))

  // Update step statuses based on current step
  const processedSteps = useMemo(() => {
    return steps.map((step, index) => {
      let status = step.status
      
      // Auto-determine status if not explicitly set
      if (index < validCurrentStep) {
        status = "completed"
      } else if (index === validCurrentStep) {
        status = "current"
      } else if (status === undefined) {
        status = "pending"
      }

      return {
        ...step,
        status,
      }
    })
  }, [steps, validCurrentStep])

  const currentStepData = processedSteps[validCurrentStep]

  const stepperClasses = cn(
    "stepper",
    orientation === "horizontal" ? "flex items-start" : "flex flex-col",
    className
  )

  return (
    <div className={stepperClasses} {...props}>
      {/* Steps */}
      <div 
        className={cn(
          "stepper-steps",
          orientation === "horizontal" ? "flex items-start w-full" : "flex flex-col"
        )}
      >
        {processedSteps.map((step, index) => (
          <StepItem
            key={step.id}
            step={step}
            index={index}
            totalSteps={steps.length}
            variant={variant}
            size={size}
            color={color}
            format={format}
            orientation={orientation}
            showDescription={showDescriptions}
            showConnector={showConnectors}
            clickable={clickableSteps || step.clickable || false}
            onClick={onStepClick}
          />
        ))}
      </div>

      {/* Step Content */}
      {showContent && currentStepData?.content && (
        <div className={cn(
          "stepper-content mt-6 p-4 bg-paper border border-border rounded-lg",
          "transition-all duration-300 ease-in-out"
        )}>
          {currentStepData.content}
        </div>
      )}
    </div>
  )
}

export default Stepper