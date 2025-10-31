import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

export interface SidebarItem {
  id: string
  label: string
  href?: string
  icon?: LucideIcon
  badge?: string | number
  disabled?: boolean
  children?: SidebarItem[]
  onClick?: () => void
}

export interface SidebarProps {
  /**
   * Navigation items to display
   */
  items: SidebarItem[]

  /**
   * Brand configuration for the top of the sidebar
   */
  brand?: {
    logo?: string
    text?: string
    href?: string
    onClick?: () => void
  }

  /**
   * Sidebar variant
   */
  variant?: "default" | "compact" | "floating"

  /**
   * Whether the sidebar is open (for mobile/overlay behavior)
   */
  open?: boolean

  /**
   * Position of the sidebar
   */
  position?: "fixed" | "sticky" | "static"

  /**
   * Width of the sidebar
   */
  width?: "sm" | "md" | "lg" | "auto"

  /**
   * Content to display at the bottom of the sidebar
   */
  footer?: ReactNode

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Whether to show collapse button
   */
  collapsible?: boolean

  /**
   * Whether sidebar is collapsed
   */
  collapsed?: boolean

  /**
   * Enable scroll spy functionality to highlight current section
   */
  spy?: boolean

  /**
   * Offset for scroll spy detection (in pixels)
   */
  spyOffset?: number

  /**
   * Callback when collapse state changes
   */
  onCollapseChange?: (collapsed: boolean) => void

  /**
   * Callback when sidebar should close (mobile)
   */
  onClose?: () => void

  /**
   * Callback when item is clicked
   */
  onItemClick?: (item: SidebarItem) => void

  /**
   * Callback when brand is clicked
   */
  onBrandClick?: () => void

  /**
   * Callback when active spy item changes
   */
  onSpyChange?: (activeId: string | null) => void
}