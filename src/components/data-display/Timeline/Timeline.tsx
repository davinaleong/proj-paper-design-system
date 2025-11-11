import React from "react"
import { Circle } from "lucide-react"
import { cn } from "../../../utils/cn"
import type { TimelineProps, TimelineItem } from "./types"

const variantStyles = {
  default: {
    dot: "bg-stone-400 border-stone-200",
    line: "bg-stone-200",
    content: "border-stone-200",
  },
  success: {
    dot: "bg-green-500 border-green-200",
    line: "bg-green-200", 
    content: "border-green-200",
  },
  warning: {
    dot: "bg-amber-500 border-amber-200",
    line: "bg-amber-200",
    content: "border-amber-200",
  },
  error: {
    dot: "bg-red-500 border-red-200",
    line: "bg-red-200",
    content: "border-red-200",
  },
  info: {
    dot: "bg-blue-500 border-blue-200",
    line: "bg-blue-200",
    content: "border-blue-200",
  },
}

const sizeStyles = {
  sm: {
    dot: "w-3 h-3",
    icon: "w-3 h-3",
    title: "text-sm font-medium",
    description: "text-xs",
    timestamp: "text-xs",
    spacing: "gap-3",
    content: "p-3",
  },
  md: {
    dot: "w-4 h-4", 
    icon: "w-4 h-4",
    title: "text-base font-medium",
    description: "text-sm",
    timestamp: "text-sm",
    spacing: "gap-4",
    content: "p-4",
  },
  lg: {
    dot: "w-6 h-6",
    icon: "w-5 h-5",
    title: "text-lg font-semibold",
    description: "text-base",
    timestamp: "text-base",
    spacing: "gap-6",
    content: "p-6",
  },
}

const TimelineItemComponent: React.FC<{
  item: TimelineItem
  size: "sm" | "md" | "lg"
  showConnector: boolean
  isLast: boolean
  isAlternate?: boolean
  onItemClick?: (item: TimelineItem) => void
}> = ({ item, size, showConnector, isLast, isAlternate = false, onItemClick }) => {
  const variant = item.variant || "default"
  const variantClass = variantStyles[variant]
  const sizeClass = sizeStyles[size]

  const formatTimestamp = (timestamp: string | Date) => {
    if (timestamp instanceof Date) {
      return timestamp.toLocaleDateString()
    }
    return timestamp
  }

  const handleClick = () => {
    if (onItemClick) {
      onItemClick(item)
    }
  }

  return (
    <div 
      className={cn(
        "relative flex",
        sizeClass.spacing,
        isAlternate ? "flex-row-reverse" : "",
        onItemClick ? "cursor-pointer" : ""
      )}
      onClick={handleClick}
    >
      {/* Timeline Dot/Icon */}
      <div className="relative flex-shrink-0">
        <div
          className={cn(
            "rounded-full border-2 flex items-center justify-center",
            sizeClass.dot,
            variantClass.dot
          )}
        >
          {item.icon ? (
            <div className={cn("text-white", sizeClass.icon)}>
              {item.icon}
            </div>
          ) : (
            <Circle className={cn("fill-current text-white", sizeClass.icon)} />
          )}
        </div>
        
        {/* Connector Line */}
        {showConnector && !isLast && (
          <div
            className={cn(
              "absolute top-full left-1/2 transform -translate-x-1/2 w-0.5",
              "h-8",
              variantClass.line
            )}
          />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex-1 bg-white rounded-lg border shadow-sm transition-all duration-200",
          sizeClass.content,
          variantClass.content,
          onItemClick ? "hover:shadow-md hover:border-stone-300" : ""
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h3 className={cn(sizeClass.title, "text-stone-900")}>
            {item.title}
          </h3>
          <time className={cn(sizeClass.timestamp, "text-stone-500 ml-2 flex-shrink-0")}>
            {formatTimestamp(item.timestamp)}
          </time>
        </div>

        {/* Description */}
        {item.description && (
          <p className={cn(sizeClass.description, "text-stone-600 mb-2")}>
            {item.description}
          </p>
        )}

        {/* Metadata */}
        {item.metadata && (
          <div className="mb-2">
            {item.metadata}
          </div>
        )}

        {/* Action */}
        {item.action && (
          <div className="mt-3">
            {item.action}
          </div>
        )}
      </div>
    </div>
  )
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  orientation = "vertical",
  size = "md",
  showConnector = true,
  alternate = false,
  className,
  onItemClick,
}) => {
  if (orientation === "horizontal") {
    // Horizontal timeline implementation
    return (
      <div className={cn("flex overflow-x-auto pb-4", className)}>
        {items.map((item, index) => (
          <div key={item.id} className="flex items-center flex-shrink-0">
            <TimelineItemComponent
              item={item}
              size={size}
              showConnector={false}
              isLast={index === items.length - 1}
              onItemClick={onItemClick}
            />
            {showConnector && index < items.length - 1 && (
              <div className={cn(
                "h-0.5 w-8 mx-4",
                variantStyles[item.variant || "default"].line
              )} />
            )}
          </div>
        ))}
      </div>
    )
  }

  // Vertical timeline implementation
  return (
    <div className={cn("space-y-6", className)}>
      {items.map((item, index) => (
        <TimelineItemComponent
          key={item.id}
          item={item}
          size={size}
          showConnector={showConnector}
          isLast={index === items.length - 1}
          isAlternate={alternate && index % 2 === 1}
          onItemClick={onItemClick}
        />
      ))}
    </div>
  )
}
