import type { ReactNode, HTMLAttributes } from "react"
import type { ColorVariant } from "../../../utils/color.js"

export type TooltipPosition =
  | "top"
  | "top-start"
  | "top-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"

export type TooltipTrigger = "hover" | "click" | "focus" | "manual"

export type TooltipSize = "sm" | "md" | "lg"

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "content"> {
  /**
   * The content to display in the tooltip
   */
  content: ReactNode

  /**
   * The element that triggers the tooltip
   */
  children: ReactNode

  /**
   * Position of the tooltip relative to the trigger element
   * @default "top"
   */
  position?: TooltipPosition

  /**
   * How the tooltip is triggered
   * @default "hover"
   */
  trigger?: TooltipTrigger

  /**
   * Color variant of the tooltip
   * @default "default"
   */
  colorVariant?: ColorVariant

  /**
   * Size variant of the tooltip
   * @default "md"
   */
  size?: TooltipSize

  /**
   * Whether the tooltip is open (for manual control)
   */
  open?: boolean

  /**
   * Default open state (for uncontrolled component)
   * @default false
   */
  defaultOpen?: boolean

  /**
   * Callback when tooltip open state changes
   */
  onOpenChange?: (open: boolean) => void

  /**
   * Delay before showing tooltip in milliseconds
   * @default 200
   */
  showDelay?: number

  /**
   * Delay before hiding tooltip in milliseconds
   * @default 0
   */
  hideDelay?: number

  /**
   * Whether to show an arrow pointing to the trigger
   * @default true
   */
  arrow?: boolean

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean

  /**
   * Maximum width of the tooltip content
   */
  maxWidth?: string

  /**
   * Whether to allow tooltip content to be interactive
   * @default false
   */
  interactive?: boolean

  /**
   * Offset distance from the trigger element in pixels
   * @default 8
   */
  offset?: number

  /**
   * Whether to flip tooltip position when there's not enough space
   * @default true
   */
  flip?: boolean

  /**
   * Custom class name for the tooltip content
   */
  tooltipClassName?: string

  /**
   * Custom class name for the tooltip arrow
   */
  arrowClassName?: string

  /**
   * Whether to prevent tooltip from going outside viewport
   * @default true
   */
  preventOverflow?: boolean

  /**
   * Z-index value for the tooltip
   * @default 50
   */
  zIndex?: number
}
