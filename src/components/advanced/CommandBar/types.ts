import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export type CommandBarPosition = 'top' | 'bottom' | 'floating'
export type CommandBarSize = 'sm' | 'md' | 'lg'
export type CommandBarVariant = 'default' | 'compact' | 'elevated'

export interface CommandBarAction {
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
   * Whether the action is currently active/selected
   */
  active?: boolean
  
  /**
   * Click handler
   */
  onClick: () => void
  
  /**
   * Keyboard shortcut to display
   */
  shortcut?: string
  
  /**
   * Tooltip text
   */
  tooltip?: string
  
  /**
   * Whether this action is destructive (uses warning colors)
   */
  destructive?: boolean
  
  /**
   * Custom CSS class
   */
  className?: string
}

export interface CommandBarGroup {
  /**
   * Unique identifier for the group
   */
  id: string
  
  /**
   * Group label for accessibility
   */
  label?: string
  
  /**
   * Actions in this group
   */
  actions: CommandBarAction[]
  
  /**
   * Whether the group should be separated with dividers
   */
  separated?: boolean
}

export interface CommandBarProps {
  /**
   * Groups of actions to display
   */
  groups: CommandBarGroup[]
  
  /**
   * Position of the command bar
   * @default 'top'
   */
  position?: CommandBarPosition
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: CommandBarSize
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: CommandBarVariant
  
  /**
   * Whether the command bar is visible
   * @default true
   */
  visible?: boolean
  
  /**
   * Whether to show labels for actions
   * @default true
   */
  showLabels?: boolean
  
  /**
   * Whether to show keyboard shortcuts
   * @default true
   */
  showShortcuts?: boolean
  
  /**
   * Maximum number of actions to show before overflow
   */
  maxActions?: number
  
  /**
   * Custom overflow menu label
   * @default 'More actions'
   */
  overflowLabel?: string
  
  /**
   * Whether to auto-hide when not being used
   */
  autoHide?: boolean
  
  /**
   * Auto-hide delay in milliseconds
   * @default 3000
   */
  autoHideDelay?: number
  
  /**
   * Custom CSS class
   */
  className?: string
  
  /**
   * Content to display on the left side
   */
  leftContent?: ReactNode
  
  /**
   * Content to display on the right side
   */
  rightContent?: ReactNode
  
  /**
   * Callback when the command bar is shown/hidden
   */
  onVisibilityChange?: (visible: boolean) => void
  
  /**
   * ARIA label for accessibility
   */
  'aria-label'?: string
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
}
