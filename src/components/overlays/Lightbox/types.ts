import type { ReactNode, HTMLAttributes } from "react"

export type LightboxVariant = "black" | "blurred" | "blurred-image"

export interface LightboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /**
   * Whether the lightbox is visible
   */
  isOpen?: boolean

  /**
   * Lightbox backdrop variant
   */
  variant?: LightboxVariant

  /**
   * Source image for blurred-image variant
   */
  imageSrc?: string

  /**
   * Click handler for backdrop (to close lightbox)
   */
  onClose?: () => void

  /**
   * Whether the lightbox is dismissible by clicking backdrop
   */
  dismissible?: boolean

  /**
   * Animation duration in milliseconds
   */
  animationDuration?: number

  /**
   * Z-index for the lightbox
   */
  zIndex?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Content to display in the lightbox
   */
  children?: ReactNode
}