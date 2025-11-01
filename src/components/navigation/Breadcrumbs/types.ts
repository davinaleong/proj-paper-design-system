import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export interface BreadcrumbItem {
  id: string
  label: string
  href?: string
  icon?: LucideIcon
  disabled?: boolean
  onClick?: () => void
}

export interface BreadcrumbsProps {
  /**
   * Breadcrumb items to display
   */
  items: BreadcrumbItem[]

  /**
   * Maximum number of items to show before collapsing
   */
  maxItems?: number

  /**
   * Separator between breadcrumb items
   */
  separator?: "slash" | "chevron" | "arrow" | "dot" | ReactNode

  /**
   * Size of the breadcrumbs
   */
  size?: "sm" | "md" | "lg"

  /**
   * Whether to show icons
   */
  showIcons?: boolean

  /**
   * Show only icons without text labels
   */
  iconOnly?: boolean

  /**
   * Whether to show the home icon for the first item
   */
  showHome?: boolean

  /**
   * Custom home icon
   */
  homeIcon?: LucideIcon

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Callback when an item is clicked
   */
  onItemClick?: (item: BreadcrumbItem) => void
}