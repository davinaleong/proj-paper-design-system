import type { ColorVariant } from "../../../utils/color"
import type { ReactNode } from "react"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Visual variant of the alert
   * @default "default"
   */
  variant?: "default" | "filled" | "outline" | "soft"
  
  /**
   * Color theme of the alert
   * @default "default"
   */
  color?: ColorVariant
  
  /**
   * Size variant for the alert
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
  
  /**
   * Alert title text
   */
  title?: string
  
  /**
   * Alert description/content
   */
  description?: string | ReactNode
  
  /**
   * Icon to display in the alert
   * Can be a React component or element
   */
  icon?: ReactNode
  
  /**
   * Whether to show a default icon based on color
   * @default true
   */
  showDefaultIcon?: boolean
  
  /**
   * Action elements (buttons, links, etc.)
   */
  actions?: ReactNode
  
  /**
   * Whether the alert can be dismissed
   * @default false
   */
  dismissible?: boolean
  
  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void
  
  /**
   * Whether to show a close button
   * @default true when dismissible is true
   */
  showCloseButton?: boolean
  
  /**
   * Custom close button element
   */
  closeButton?: ReactNode
  
  /**
   * Whether to animate the alert entrance
   * @default true
   */
  animated?: boolean
  
  /**
   * Custom HTML element to render as
   * @default "div"
   */
  as?: keyof HTMLElementTagNameMap
}

export type AlertVariant = NonNullable<AlertProps["variant"]>
export type AlertSize = NonNullable<AlertProps["size"]>
export type AlertColor = NonNullable<AlertProps["color"]>
