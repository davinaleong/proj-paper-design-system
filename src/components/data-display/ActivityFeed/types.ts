import type { ReactNode } from "react"

export type ActivityVariant = "default" | "success" | "warning" | "error" | "info"
export type ActivitySize = "sm" | "md" | "lg"

export interface ActivityItem {
  id: string
  title: string
  description?: string
  timestamp: string
  variant?: ActivityVariant
  icon?: ReactNode
  avatar?: ReactNode
  metadata?: ReactNode
  action?: ReactNode
  onClick?: () => void
}

export interface ActivityFeedProps {
  /**
   * Array of activity items
   */
  items: ActivityItem[]

  /**
   * Feed size
   */
  size?: ActivitySize

  /**
   * Show relative timestamps
   */
  showRelativeTime?: boolean

  /**
   * Maximum items to display
   */
  maxItems?: number

  /**
   * Loading state
   */
  loading?: boolean

  /**
   * Empty state message
   */
  emptyMessage?: string

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Header content
   */
  header?: ReactNode

  /**
   * Footer content (e.g., "Load more" button)
   */
  footer?: ReactNode
}