import { cn } from "../../../utils/cn"
import type { ActivityFeedProps, ActivityItem } from "./types"
import { Paper } from "../../core/Paper"
import { Typography } from "../../core/Typography"
import { EmptyState } from "../EmptyState"
import { ProgressCircle } from "../ProgressCircle"

const variantStyles = {
  default: "text-gray-600",
  success: "text-green-600",
  warning: "text-yellow-600", 
  error: "text-red-600",
  info: "text-blue-600"
}

const sizeStyles = {
  sm: {
    container: "gap-2",
    item: "p-2",
    icon: "w-4 h-4",
    avatar: "w-6 h-6",
    title: "text-sm",
    description: "text-xs",
    timestamp: "text-xs"
  },
  md: {
    container: "gap-3",
    item: "p-3",
    icon: "w-5 h-5",
    avatar: "w-8 h-8",
    title: "text-base",
    description: "text-sm",
    timestamp: "text-sm"
  },
  lg: {
    container: "gap-4",
    item: "p-4",
    icon: "w-6 h-6",
    avatar: "w-10 h-10",
    title: "text-lg",
    description: "text-base",
    timestamp: "text-base"
  }
}

function formatRelativeTime(timestamp: string): string {
  const now = new Date()
  const time = new Date(timestamp)
  const diffMs = now.getTime() - time.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMinutes < 1) return "Just now"
  if (diffMinutes < 60) return `${diffMinutes}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  
  return time.toLocaleDateString()
}

function ActivityItemComponent({
  item,
  size = "md",
  showRelativeTime = true
}: {
  item: ActivityItem
  size: NonNullable<ActivityFeedProps["size"]>
  showRelativeTime: boolean
}) {
  const styles = sizeStyles[size]
  const variantClass = variantStyles[item.variant || "default"]

  return (
    <div
      className={cn(
        "flex gap-3 border-l-2 border-transparent hover:border-gray-200 hover:bg-gray-50",
        styles.item,
        item.onClick && "cursor-pointer",
        variantClass && `border-l-${item.variant === "success"
          ? "green"
          : item.variant === "warning"
          ? "yellow"
          : item.variant === "error"
          ? "red"
          : item.variant === "info"
          ? "blue"
          : "gray"}-200`
      )}
      onClick={item.onClick}
    >
      {/* Icon or Avatar */}
      <div className="flex-shrink-0">
        {item.avatar ? (
          <div className={cn("rounded-full overflow-hidden", styles.avatar)}>
            {item.avatar}
          </div>
        ) : item.icon ? (
          <div className={cn("flex items-center justify-center", styles.icon, variantClass)}>
            {item.icon}
          </div>
        ) : (
          <div className={cn("rounded-full bg-gray-200", styles.avatar)} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <Typography
          variant="body"
          className={cn("font-medium text-gray-200 dark:text-gray-50", styles.title)}
        >
          {item.title}
        </Typography>
        {item.description && (
          <Typography
            variant="bodySmall"
            className={cn("text-gray-600 mt-0.5", styles.description)}
          >
            {item.description}
          </Typography>
        )}
        {item.metadata && <div className="mt-2">{item.metadata}</div>}
      </div>
      
      {/* Timestamp */}
      <div className="flex-shrink-0 text-right">
        <Typography
          variant="bodySmall"
          className={cn("text-gray-600", styles.timestamp)}
        >
          {showRelativeTime
            ? formatRelativeTime(item.timestamp)
            : new Date(item.timestamp).toLocaleString()}
        </Typography>
      </div>

      {/* Action */}
      {item.action && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0"
        >
          {item.action}
        </div>
      )}
    </div>
  )
}

export function ActivityFeed({
  items,
  size = "md",
  showRelativeTime = true,
  maxItems,
  loading = false,
  emptyMessage = "No activity yet",
  className,
  header,
  footer,
  ...props
}: ActivityFeedProps) {
  const styles = sizeStyles[size]
  const displayItems = maxItems ? items.slice(0, maxItems) : items

  return (
    <Paper className={cn("divide-y divide-gray-100", className)} {...props}>
      {header && (
        <div className={cn("border-b border-gray-100", styles.item)}>
          {header}
        </div>
      )}

      {loading ? (
        <div className={cn("flex items-center justify-center", styles.item)}>
          <ProgressCircle value={50} size={24} />
          <Typography variant="bodySmall" className="ml-2 text-gray-600">
            Loading activity...
          </Typography>
        </div>
      ) : displayItems.length === 0 ? (
        <div className={styles.item}>
          <EmptyState
            title="No Activity"
            description={emptyMessage}
          />
        </div>
      ) : (
        <div className={cn("divide-y divide-gray-50", styles.container)}>
          {displayItems.map((item) => (
            <ActivityItemComponent
              key={item.id}
              item={item}
              size={size}
              showRelativeTime={showRelativeTime}
            />
          ))}
        </div>
      )}

      {footer && (
        <div className={cn("border-t border-gray-100", styles.item)}>
          {footer}
        </div>
      )}
    </Paper>
  )
}
