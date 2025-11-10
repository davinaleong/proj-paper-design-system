import React from "react"
import { cn } from "../../../utils/cn"
import type { EmptyStateProps } from "./types"

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-4 sm:px-8 bg-white rounded-lg border border-stone-200 shadow-sm",
        className
      )}
    >
      {icon && <div className="mb-4 text-5xl text-stone-300 dark:text-stone-600">{icon}</div>}
      <h2 className="text-lg font-semibold text-stone-700 mb-2">{title}</h2>
      {description && (
        <p className="text-stone-500 text-sm mb-4 max-w-md">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
