import type { ColorVariant } from "../../../utils/color"

export type PaginationVariant = "solid" | "outline" | "ghost" | "link" | "plain"

export type PaginationFormat = 
  | "prev-next"           // Prev, Next
  | "first-last"          // First, Prev, Current, Next, Last
  | "numbers"             // 1 ... 3, 4, 5 ... 7
  | "letters"             // a ... c, d, e ... g
  | "roman"               // i ... iii, iv, v ... vii

export type PaginationSize = "sm" | "md" | "lg"

export interface PaginationProps {
  /**
   * Current active page (1-indexed)
   */
  currentPage: number

  /**
   * Total number of pages
   */
  totalPages: number

  /**
   * Visual variant style
   */
  variant?: PaginationVariant

  /**
   * Color theme
   */
  color?: ColorVariant

  /**
   * Size of pagination controls
   */
  size?: PaginationSize

  /**
   * Pagination format/layout
   */
  format?: PaginationFormat

  /**
   * Number of page numbers to show around current page
   */
  siblingCount?: number

  /**
   * Whether to show boundary pages (first/last)
   */
  showBoundaries?: boolean

  /**
   * Whether to show ellipsis for gaps
   */
  showEllipsis?: boolean

  /**
   * Custom labels for navigation
   */
  labels?: {
    previous?: string
    next?: string
    first?: string
    last?: string
    page?: string
  }

  /**
   * Whether pagination is disabled
   */
  disabled?: boolean

  /**
   * Whether to show page info text
   */
  showPageInfo?: boolean

  /**
   * Additional CSS classes
   * Note: Pagination automatically becomes horizontally scrollable when content overflows
   */
  className?: string

  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void
}