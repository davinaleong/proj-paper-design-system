export interface EmptyStateProps {
  /** Main title or heading */
  title: string
  /** Optional description text */
  description?: string
  /** Optional icon or illustration (ReactNode) */
  icon?: React.ReactNode
  /** Optional action button or element (ReactNode) */
  action?: React.ReactNode
  /** Additional className for styling */
  className?: string
}
