import type { LucideIcon } from "lucide-react"
import type { TypographyVariant } from "../../core/Typography/types"

export interface NavbarItem {
  id: string
  label: string
  href?: string
  icon?: LucideIcon
  badge?: string | number
  children?: NavbarSubItem[]
  disabled?: boolean
  onClick?: () => void
}

export interface NavbarSubItem {
  id: string
  label: string
  href?: string
  icon?: LucideIcon
  disabled?: boolean
  onClick?: () => void
}

export type NavbarVariant = "default" | "transparent" | "solid" | "bordered"
export type NavbarPosition = "fixed" | "sticky" | "static"

export interface NavbarProps {
  /**
   * Navigation items to display
   */
  items: NavbarItem[]

  /**
   * Brand logo or text
   */
  brand?: {
    logo?: string
    text?: string
    href?: string
    onClick?: () => void
    titleVariant?: TypographyVariant
    subtitleVariant?: TypographyVariant
  }

  /**
   * Visual variant of the navbar
   * @default "default"
   */
  variant?: NavbarVariant

  /**
   * Position behavior of the navbar
   * @default "static"
   */
  position?: NavbarPosition

  /**
   * Whether to show backdrop blur effect
   * @default true
   */
  blurred?: boolean

  /**
   * Whether the navbar is compact (smaller height)
   * @default false
   */
  compact?: boolean

  /**
   * Custom className for the navbar
   */
  className?: string

  /**
   * Callback when a navigation item is clicked
   */
  onItemClick?: (item: NavbarItem) => void

  /**
   * Callback when brand is clicked
   */
  onBrandClick?: () => void

  /**
   * Additional content to render on the right side
   */
  rightContent?: React.ReactNode

  /**
   * Whether to show mobile menu button
   * @default true
   */
  showMobileMenu?: boolean

  /**
   * Whether mobile menu is open
   */
  mobileMenuOpen?: boolean

  /**
   * Callback when mobile menu state changes
   */
  onMobileMenuToggle?: (open: boolean) => void
}