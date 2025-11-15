import type { ReactNode, HTMLAttributes } from "react"
import type { LucideIcon } from "lucide-react"
import type { ColorVariant } from "../../../utils/color"
import type { DropdownMenuVariant, DropdownMenuSize, DropdownMenuPlacement } from "../../overlays/DropdownMenu/types"

export type FilterMenuSize = DropdownMenuSize // "xs" | "sm" | "md" | "lg" | "xl"
export type FilterMenuVariant = DropdownMenuVariant // "solid" | "outline" | "ghost" | "link" | "plain"
export type FilterMenuPlacement = DropdownMenuPlacement

export interface FilterOption {
  /**
   * Unique identifier for the filter option
   */
  id: string

  /**
   * Display label for the filter option
   */
  label: string

  /**
   * Optional description for the filter option
   */
  description?: string

  /**
   * Optional icon for the filter option
   */
  icon?: LucideIcon

  /**
   * Whether this option is currently selected
   */
  selected?: boolean

  /**
   * Whether this option is disabled
   */
  disabled?: boolean

  /**
   * Number of items this filter would show (optional count)
   */
  count?: number

  /**
   * Additional metadata for the filter option
   */
  metadata?: Record<string, unknown>
}

export interface SortOption {
  /**
   * Unique identifier for the sort option
   */
  id: string

  /**
   * Display label for the sort option
   */
  label: string

  /**
   * Optional description for the sort option
   */
  description?: string

  /**
   * Optional icon for the sort option
   */
  icon?: LucideIcon

  /**
   * Sort direction (asc = ascending, desc = descending)
   */
  direction?: "asc" | "desc"

  /**
   * Whether this option is currently selected
   */
  selected?: boolean

  /**
   * Whether this option is disabled
   */
  disabled?: boolean

  /**
   * Additional metadata for the sort option
   */
  metadata?: Record<string, unknown>
}

export interface FilterGroup {
  /**
   * Unique identifier for the filter group
   */
  id: string

  /**
   * Display label for the filter group
   */
  label: string

  /**
   * Optional description for the filter group
   */
  description?: string

  /**
   * Filter options in this group
   */
  options: FilterOption[]

  /**
   * Whether multiple options can be selected in this group
   */
  multiple?: boolean

  /**
   * Whether this group is collapsible in the UI
   */
  collapsible?: boolean

  /**
   * Whether this group is initially collapsed
   */
  defaultCollapsed?: boolean
}

export interface FilterMenuState {
  /**
   * Currently selected filter options by group ID
   */
  filters: Record<string, string[]>

  /**
   * Currently selected sort option ID
   */
  sort?: string

  /**
   * Search query for filtering options
   */
  search?: string
}

export interface FilterMenuCallbacks {
  /**
   * Called when filter selection changes
   */
  onFiltersChange?: (filters: Record<string, string[]>) => void

  /**
   * Called when sort selection changes
   */
  onSortChange?: (sortId: string) => void

  /**
   * Called when search query changes
   */
  onSearchChange?: (query: string) => void

  /**
   * Called when filters are cleared
   */
  onClear?: () => void

  /**
   * Called when the menu is opened/closed
   */
  onOpenChange?: (open: boolean) => void
}

export interface FilterMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>, FilterMenuCallbacks {
  /**
   * Filter groups to display
   */
  filterGroups?: FilterGroup[]

  /**
   * Sort options to display
   */
  sortOptions?: SortOption[]

  /**
   * Current state of the filter menu
   */
  state?: FilterMenuState

  /**
   * Default state of the filter menu
   */
  defaultState?: FilterMenuState

  /**
   * Visual variant following DropdownMenu design system
   */
  variant?: FilterMenuVariant

  /**
   * Size of the filter menu trigger
   */
  size?: FilterMenuSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Placement of the dropdown menu
   */
  placement?: FilterMenuPlacement

  /**
   * Whether the menu is currently open (controlled)
   */
  isOpen?: boolean

  /**
   * Whether the filter menu is disabled
   */
  disabled?: boolean

  /**
   * Whether to show a search input for filtering options
   */
  searchable?: boolean

  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string

  /**
   * Whether to show clear all button
   */
  showClearAll?: boolean

  /**
   * Whether to show apply/cancel buttons
   */
  showApplyButtons?: boolean

  /**
   * Whether to show item counts for filter options
   */
  showCounts?: boolean

  /**
   * Custom trigger content (if not provided, uses default button)
   */
  trigger?: ReactNode

  /**
   * Custom trigger icon
   */
  triggerIcon?: LucideIcon

  /**
   * Custom trigger text
   */
  triggerText?: string

  /**
   * Whether to show active filter count in trigger
   */
  showActiveCount?: boolean

  /**
   * Maximum height for the dropdown content
   */
  maxHeight?: string

  /**
   * Whether to use Paper styling
   */
  paper?: boolean

  /**
   * Additional CSS classes for the trigger
   */
  triggerClassName?: string

  /**
   * Additional CSS classes for the dropdown content
   */
  contentClassName?: string

  /**
   * Z-index for the dropdown
   */
  zIndex?: number
}

export interface FilterMenuTriggerProps {
  /**
   * Trigger content
   */
  children?: ReactNode

  /**
   * Visual variant
   */
  variant?: FilterMenuVariant

  /**
   * Button size
   */
  size?: FilterMenuSize

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Custom trigger icon
   */
  icon?: LucideIcon

  /**
   * Whether the dropdown is open (for styling)
   */
  isOpen?: boolean

  /**
   * Whether the trigger is disabled
   */
  disabled?: boolean

  /**
   * Number of active filters to show
   */
  activeCount?: number

  /**
   * Additional CSS classes
   */
  className?: string

  /**
   * Click handler
   */
  onClick?: () => void
}

export interface FilterMenuContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Filter groups to display
   */
  filterGroups?: FilterGroup[]

  /**
   * Sort options to display
   */
  sortOptions?: SortOption[]

  /**
   * Current filter state
   */
  state: FilterMenuState

  /**
   * Callbacks for state changes
   */
  callbacks: FilterMenuCallbacks

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Whether to show search input
   */
  searchable?: boolean

  /**
   * Search placeholder text
   */
  searchPlaceholder?: string

  /**
   * Whether to show clear all button
   */
  showClearAll?: boolean

  /**
   * Whether to show apply/cancel buttons
   */
  showApplyButtons?: boolean

  /**
   * Whether to show item counts
   */
  showCounts?: boolean

  /**
   * Maximum height for scrollable content
   */
  maxHeight?: string

  /**
   * Additional CSS classes
   */
  className?: string
}