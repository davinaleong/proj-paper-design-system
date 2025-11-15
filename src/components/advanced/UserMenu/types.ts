import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type UserMenuSize = 'sm' | 'md' | 'lg'
export type UserMenuVariant = 'default' | 'compact' | 'floating'
export type UserMenuPosition = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'

export interface UserMenuItem {
  /**
   * Unique identifier for the menu item
   */
  id: string
  
  /**
   * Menu item label
   */
  label: string
  
  /**
   * Optional icon
   */
  icon?: LucideIcon
  
  /**
   * Whether this is a destructive action
   */
  destructive?: boolean
  
  /**
   * Whether this item is disabled
   */
  disabled?: boolean
  
  /**
   * Click handler
   */
  onClick?: () => void
  
  /**
   * Optional href for link items
   */
  href?: string
  
  /**
   * Whether to open link in new tab
   */
  target?: '_blank' | '_self'
  
  /**
   * Optional badge/indicator
   */
  badge?: string | number
  
  /**
   * Whether this item should be separated from others
   */
  separator?: boolean
}

export interface UserMenuGroup {
  /**
   * Group identifier
   */
  id: string
  
  /**
   * Optional group label
   */
  label?: string
  
  /**
   * Menu items in this group
   */
  items: UserMenuItem[]
}

export interface UserProfile {
  /**
   * User's display name
   */
  name: string
  
  /**
   * User's email address
   */
  email: string
  
  /**
   * User's avatar URL
   */
  avatar?: string
  
  /**
   * User's role or title
   */
  role?: string
  
  /**
   * User's initials (fallback for avatar)
   */
  initials?: string
  
  /**
   * User's status
   */
  status?: 'online' | 'away' | 'busy' | 'offline'
}

export interface UserMenuProps {
  /**
   * User profile information
   */
  user: UserProfile
  
  /**
   * Menu items or groups
   */
  items: (UserMenuItem | UserMenuGroup)[]
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: UserMenuSize
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: UserMenuVariant
  
  /**
   * Menu position relative to trigger
   * @default 'bottom-right'
   */
  position?: UserMenuPosition
  
  /**
   * Whether to show user profile section
   * @default true
   */
  showProfile?: boolean
  
  /**
   * Whether to show status indicator
   * @default true
   */
  showStatus?: boolean
  
  /**
   * Custom trigger element
   */
  trigger?: ReactNode
  
  /**
   * Whether the menu is open (controlled mode)
   */
  open?: boolean
  
  /**
   * Callback when menu open state changes
   */
  onOpenChange?: (open: boolean) => void
  
  /**
   * Custom footer content
   */
  footer?: ReactNode
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
}
