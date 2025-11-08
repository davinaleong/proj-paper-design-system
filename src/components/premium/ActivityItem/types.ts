import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type ActivityItemSize = 'sm' | 'md' | 'lg'
export type ActivityItemVariant = 'default' | 'compact' | 'detailed'
export type ActivityItemType = 'comment' | 'action' | 'update' | 'system' | 'notification' | 'custom'

export interface ActivityItemAction {
  /**
   * Unique identifier for the action
   */
  id: string
  
  /**
   * Action label
   */
  label: string
  
  /**
   * Icon component
   */
  icon?: LucideIcon
  
  /**
   * Whether the action is disabled
   */
  disabled?: boolean
  
  /**
   * Click handler
   */
  onClick: () => void
  
  /**
   * Whether this action is destructive (uses warning colors)
   */
  destructive?: boolean
  
  /**
   * Custom CSS class
   */
  className?: string
}

export interface ActivityItemActor {
  /**
   * Actor name
   */
  name: string
  
  /**
   * Actor avatar URL or initials
   */
  avatar?: string
  
  /**
   * Actor role or title
   */
  role?: string
  
  /**
   * Link to actor profile
   */
  href?: string
}

export interface ActivityItemProps {
  /**
   * Activity actor (user who performed the action)
   */
  actor: ActivityItemActor
  
  /**
   * Main activity content
   */
  content: ReactNode
  
  /**
   * Activity timestamp
   */
  timestamp: string | Date
  
  /**
   * Activity type for styling and icon
   */
  type?: ActivityItemType
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ActivityItemSize
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: ActivityItemVariant
  
  /**
   * Custom icon to override type-based icon
   */
  icon?: LucideIcon
  
  /**
   * Icon color variant
   */
  iconColor?: string
  
  /**
   * Additional metadata content
   */
  metadata?: ReactNode
  
  /**
   * Action buttons
   */
  actions?: ActivityItemAction[]
  
  /**
   * Whether the activity is unread/new
   */
  unread?: boolean
  
  /**
   * Whether the activity is collapsed
   */
  collapsed?: boolean
  
  /**
   * Show relative time (e.g., "2 hours ago") instead of absolute
   */
  showRelativeTime?: boolean
  
  /**
   * Custom CSS class
   */
  className?: string
  
  /**
   * Click handler for the entire activity item
   */
  onClick?: () => void
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
}