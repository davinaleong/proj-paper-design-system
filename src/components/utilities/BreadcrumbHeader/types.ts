import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import type { BreadcrumbsProps, BreadcrumbItem } from "../../navigation/Breadcrumbs/types"

export interface BreadcrumbHeaderAction {
  /**
   * Unique identifier for the action
   */
  id: string

  /**
   * Action label text
   */
  label: string

  /**
   * Optional icon for the action
   */
  icon?: LucideIcon

  /**
   * Visual variant of the action button
   */
  variant?: "solid" | "outline" | "ghost" | "link" | "plain"

  /**
   * Color theme of the action button
   */
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info"

  /**
   * Whether the action is disabled
   */
  disabled?: boolean

  /**
   * Whether the action is loading
   */
  loading?: boolean

  /**
   * Click handler for the action
   */
  onClick?: () => void

  /**
   * Additional CSS classes for the action button
   */
  className?: string
}

export interface BreadcrumbHeaderMetadata {
  /**
   * Unique identifier for the metadata item
   */
  id: string

  /**
   * Metadata label
   */
  label: string

  /**
   * Metadata value (can be text or JSX)
   */
  value: ReactNode

  /**
   * Optional icon for the metadata item
   */
  icon?: LucideIcon

  /**
   * Additional CSS classes for the metadata item
   */
  className?: string
}

export interface BreadcrumbHeaderProps {
  /**
   * Page title to display
   */
  title: string

  /**
   * Optional subtitle or description
   */
  subtitle?: string

  /**
   * Breadcrumb items for navigation
   */
  breadcrumbs?: BreadcrumbItem[]

  /**
   * Action buttons to display in the header
   */
  actions?: BreadcrumbHeaderAction[]

  /**
   * Metadata items to display (last modified, status, etc.)
   */
  metadata?: BreadcrumbHeaderMetadata[]

  /**
   * Whether to show a back button (useful for mobile)
   */
  showBackButton?: boolean

  /**
   * Custom back button text
   */
  backButtonText?: string

  /**
   * Back button click handler
   */
  onBackClick?: () => void

  /**
   * Whether to include search functionality
   */
  searchable?: boolean

  /**
   * Search placeholder text
   */
  searchPlaceholder?: string

  /**
   * Search value (controlled)
   */
  searchValue?: string

  /**
   * Search change handler
   */
  onSearchChange?: (value: string) => void

  /**
   * Size variant for the header
   */
  size?: "sm" | "md" | "lg"

  /**
   * Whether to use compact layout
   */
  compact?: boolean

  /**
   * Whether to make the header sticky
   */
  sticky?: boolean

  /**
   * Custom breadcrumb props (overrides for the internal Breadcrumbs component)
   */
  breadcrumbProps?: Partial<BreadcrumbsProps>

  /**
   * Additional CSS classes for the header container
   */
  className?: string

  /**
   * Additional CSS classes for the title
   */
  titleClassName?: string

  /**
   * Additional CSS classes for the actions container
   */
  actionsClassName?: string

  /**
   * Additional CSS classes for the metadata container
   */
  metadataClassName?: string

  /**
   * Custom content to render before the title
   */
  prefixContent?: ReactNode

  /**
   * Custom content to render after the actions
   */
  suffixContent?: ReactNode

  /**
   * Callback when breadcrumb item is clicked
   */
  onBreadcrumbClick?: (item: BreadcrumbItem) => void
}