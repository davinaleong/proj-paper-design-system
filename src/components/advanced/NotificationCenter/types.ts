import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type NotificationPriority = 'low' | 'medium' | 'high' | 'urgent'
export type NotificationStatus = 'unread' | 'read' | 'archived'
export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'system' | 'message' | 'update' | 'reminder'
export type NotificationCenterSize = 'sm' | 'md' | 'lg'
export type NotificationCenterVariant = 'default' | 'compact' | 'floating'

export interface NotificationAction {
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
   * Whether the action is destructive (uses warning colors)
   */
  destructive?: boolean
  
  /**
   * Whether the action is primary (emphasized)
   */
  primary?: boolean
  
  /**
   * Click handler
   */
  onClick: (notification: Notification) => void
  
  /**
   * Custom CSS class
   */
  className?: string
}

export interface NotificationSender {
  /**
   * Unique identifier for the sender
   */
  id?: string
  
  /**
   * Sender name
   */
  name: string
  
  /**
   * Sender avatar URL or initials
   */
  avatar?: string
  
  /**
   * Sender role or title
   */
  role?: string
  
  /**
   * Link to sender profile
   */
  href?: string
}

export interface Notification {
  /**
   * Unique identifier
   */
  id: string
  
  /**
   * Notification title
   */
  title: string
  
  /**
   * Notification content/message
   */
  content: ReactNode
  
  /**
   * Notification type
   */
  type: NotificationType
  
  /**
   * Priority level
   */
  priority: NotificationPriority
  
  /**
   * Current status
   */
  status: NotificationStatus
  
  /**
   * Timestamp when notification was created
   */
  timestamp: Date
  
  /**
   * Optional sender information
   */
  sender?: NotificationSender
  
  /**
   * Custom icon override
   */
  icon?: LucideIcon
  
  /**
   * Custom icon color
   */
  iconColor?: string
  
  /**
   * Additional metadata
   */
  metadata?: ReactNode
  
  /**
   * Related link/URL
   */
  href?: string
  
  /**
   * Whether notification can be dismissed
   */
  dismissible?: boolean
  
  /**
   * Custom actions for this notification
   */
  actions?: NotificationAction[]
  
  /**
   * Category/group for organization
   */
  category?: string
  
  /**
   * Tags for filtering
   */
  tags?: string[]
}

export interface NotificationGroup {
  /**
   * Group identifier
   */
  id: string
  
  /**
   * Group label
   */
  label: string
  
  /**
   * Notifications in this group
   */
  notifications: Notification[]
  
  /**
   * Whether group is collapsed
   */
  collapsed?: boolean
}

export interface NotificationCenterProps {
  /**
   * Array of notifications to display
   */
  notifications: Notification[]
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: NotificationCenterSize
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: NotificationCenterVariant
  
  /**
   * Maximum height before scrolling
   */
  maxHeight?: string
  
  /**
   * Whether to show search/filter bar
   * @default true
   */
  showSearch?: boolean
  
  /**
   * Whether to show filter controls
   * @default true
   */
  showFilters?: boolean
  
  /**
   * Whether to group notifications by date/category
   * @default false
   */
  groupBy?: 'date' | 'category' | 'type' | 'priority' | false
  
  /**
   * Whether to show mark all as read button
   * @default true
   */
  showMarkAllRead?: boolean
  
  /**
   * Whether to show clear all button
   * @default true
   */
  showClearAll?: boolean
  
  /**
   * Custom actions available for all notifications
   */
  globalActions?: NotificationAction[]
  
  /**
   * Empty state content
   */
  emptyState?: ReactNode
  
  /**
   * Loading state
   */
  loading?: boolean
  
  /**
   * Custom CSS class
   */
  className?: string
  
  /**
   * Callback when notification is clicked
   */
  onNotificationClick?: (notification: Notification) => void
  
  /**
   * Callback when notification is dismissed
   */
  onNotificationDismiss?: (notification: Notification) => void
  
  /**
   * Callback when notification status changes
   */
  onNotificationStatusChange?: (notification: Notification, status: NotificationStatus) => void
  
  /**
   * Callback when mark all as read is clicked
   */
  onMarkAllRead?: () => void
  
  /**
   * Callback when clear all is clicked
   */
  onClearAll?: () => void
  
  /**
   * Callback when search query changes
   */
  onSearchChange?: (query: string) => void
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
}