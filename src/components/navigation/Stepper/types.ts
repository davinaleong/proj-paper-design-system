import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/color"
import type { ButtonVariant } from "../../forms/Button/types"

export type StepperVariant = ButtonVariant // "solid" | "outline" | "ghost" | "link" | "plain"

export type StepperSize = "sm" | "md" | "lg"

export type StepperFormat = "numeric" | "alpha" | "roman" | "custom"

export type StepperOrientation = "horizontal" | "vertical"

export type StepStatus = "completed" | "current" | "pending" | "error"

export interface StepData {
  /**
   * Unique identifier for the step
   */
  id: string | number

  /**
   * Step title/label
   */
  title: string

  /**
   * Optional step description
   */
  description?: string

  /**
   * Step status
   */
  status: StepStatus

  /**
   * Custom icon (only used when format is "custom")
   */
  icon?: LucideIcon

  /**
   * Whether this step is clickable/interactive
   */
  clickable?: boolean

  /**
   * Whether this step is disabled
   */
  disabled?: boolean

  /**
   * Optional step content
   */
  content?: ReactNode
}

export interface StepperProps {
  /**
   * Array of step data
   */
  steps: StepData[]

  /**
   * Current active step index (0-based)
   */
  currentStep: number

  /**
   * Visual variant (follows Button variants)
   */
  variant?: StepperVariant

  /**
   * Size of the stepper
   */
  size?: StepperSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Step number format
   */
  format?: StepperFormat

  /**
   * Orientation of the stepper
   */
  orientation?: StepperOrientation

  /**
   * Whether to show step descriptions
   */
  showDescriptions?: boolean

  /**
   * Whether to show connecting lines between steps
   */
  showConnectors?: boolean

  /**
   * Whether steps are clickable
   */
  clickableSteps?: boolean

  /**
   * Callback when a step is clicked
   */
  onStepClick?: (stepIndex: number, step: StepData) => void

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Whether to show step content below the stepper
   */
  showContent?: boolean

  /**
   * Custom labels for different statuses
   */
  statusLabels?: {
    completed?: string
    current?: string
    pending?: string
    error?: string
  }
}

export interface StepItemProps {
  /**
   * Step data
   */
  step: StepData

  /**
   * Step index (0-based)
   */
  index: number

  /**
   * Total number of steps
   */
  totalSteps: number

  /**
   * Visual variant
   */
  variant: StepperVariant

  /**
   * Size
   */
  size: StepperSize

  /**
   * Color theme
   */
  color: ColorVariant

  /**
   * Step format
   */
  format: StepperFormat

  /**
   * Orientation
   */
  orientation: StepperOrientation

  /**
   * Whether to show description
   */
  showDescription: boolean

  /**
   * Whether to show connector to next step
   */
  showConnector: boolean

  /**
   * Whether this step is clickable
   */
  clickable: boolean

  /**
   * Click handler
   */
  onClick?: (stepIndex: number, step: StepData) => void

  /**
   * Additional CSS classes
   */
  className?: string
}