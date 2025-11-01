import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/colors"

export interface TabItem {
  id: string
  label: string
  content: ReactNode
  icon?: LucideIcon
  disabled?: boolean
  badge?: string | number
}

export type TabVariant = "tabs" | "pills" | "ghost" | "links" | "plain"

export interface TabsProps {
  /**
   * Tab items to display
   */
  items: TabItem[]

  /**
   * Currently active tab ID
   */
  activeTab?: string

  /**
   * Default active tab ID
   */
  defaultActiveTab?: string

  /**
   * Tab variant style
   */
  variant?: TabVariant

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Size of the tabs
   */
  size?: "sm" | "md" | "lg"

  /**
   * Orientation of the tabs
   */
  orientation?: "horizontal" | "vertical"

  /**
   * Whether to show icons
   */
  showIcons?: boolean

  /**
   * Icon position
   */
  iconPosition?: "left" | "right" | "top"

  /**
   * Whether tabs should fill available width
   */
  fullWidth?: boolean

  /**
   * Whether to show content panel
   */
  showContent?: boolean

  /**
   * Additional CSS classes for the tab container
   */
  className?: string

  /**
   * Additional CSS classes for the content area
   */
  contentClassName?: string

  /**
   * Callback when tab changes
   */
  onTabChange?: (tabId: string) => void
}