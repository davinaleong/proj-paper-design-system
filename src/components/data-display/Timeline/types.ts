export interface TimelineItem {
  /** Unique identifier for the timeline item */
  id: string
  /** Title or main content of the timeline item */
  title: string
  /** Optional description or additional content */
  description?: string
  /** Timestamp or date for the item */
  timestamp: string | Date
  /** Optional icon to display */
  icon?: React.ReactNode
  /** Visual variant for the timeline item */
  variant?: "default" | "success" | "warning" | "error" | "info"
  /** Custom action or button */
  action?: React.ReactNode
  /** Additional metadata or content */
  metadata?: React.ReactNode
}

export interface TimelineProps {
  /** Array of timeline items to display */
  items: TimelineItem[]
  /** Layout orientation */
  orientation?: "vertical" | "horizontal"
  /** Size variant */
  size?: "sm" | "md" | "lg"
  /** Whether to show the connecting line */
  showConnector?: boolean
  /** Whether to alternate item positions (for vertical layout) */
  alternate?: boolean
  /** Custom className for styling */
  className?: string
  /** Callback when an item is clicked */
  onItemClick?: (item: TimelineItem) => void
}