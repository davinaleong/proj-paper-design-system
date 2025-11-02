import React, { useState } from "react"
import type { QuickActionsProps } from "./types"
import { cn } from "../../../utils/cn"
import { Paper, Typography } from "../../core"
import { Badge } from "../../layout"
import { Plus, X } from "lucide-react"

export const QuickActions: React.FC<QuickActionsProps> = ({
  actions,
  position = "bottom-right",
  variant = "fab",
  className,
  mainAction,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const getPositionClasses = () => {
    const baseClasses = "fixed z-50"
    
    switch (position) {
      case "bottom-left":
        return cn(baseClasses, "bottom-6 left-6")
      case "top-right":
        return cn(baseClasses, "top-6 right-6")
      case "top-left":
        return cn(baseClasses, "top-6 left-6")
      case "bottom-center":
        return cn(baseClasses, "bottom-6 left-1/2 -translate-x-1/2")
      case "top-center":
        return cn(baseClasses, "top-6 left-1/2 -translate-x-1/2")
      default: // bottom-right
        return cn(baseClasses, "bottom-6 right-6")
    }
  }

  const getActionDirection = () => {
    if (variant === "toolbar" || variant === "menu") return "flex-row"
    
    switch (position) {
      case "bottom-right":
      case "bottom-left":
      case "bottom-center":
        return "flex-col-reverse"
      default:
        return "flex-col"
    }
  }

  const renderFAB = () => {
    const MainActionIcon = mainAction?.icon || Plus

    return (
      <div className={cn("flex gap-3", getActionDirection())}>
        {/* Secondary actions */}
        {isExpanded && (
          <div className={cn("flex gap-2", getActionDirection())}>
            {actions.map((action) => {
              const ActionIcon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.onClick()
                    setIsExpanded(false)
                  }}
                  disabled={action.disabled}
                  className={cn(
                    "relative w-12 h-12 bg-white border border-stone-200 rounded-full",
                    "flex items-center justify-center shadow-lg",
                    "hover:bg-stone-50 hover:shadow-xl transition-all",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    action.disabled && "opacity-50 cursor-not-allowed"
                  )}
                  title={action.label}
                >
                  <ActionIcon className="w-5 h-5 text-stone-700" />
                  {action.badge && (
                    <Badge
                      variant="solid"
                      color="primary"
                      size="xs"
                      className="absolute -top-1 -right-1"
                    >
                      {action.badge}
                    </Badge>
                  )}
                </button>
              )
            })}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => {
            if (mainAction) {
              mainAction.onClick()
            } else {
              setIsExpanded(!isExpanded)
            }
          }}
          className={cn(
            "w-14 h-14 bg-blue-600 text-white rounded-full",
            "flex items-center justify-center shadow-lg",
            "hover:bg-blue-700 hover:shadow-xl transition-all",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          )}
          title={mainAction?.label || "Quick Actions"}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MainActionIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    )
  }

  const renderToolbar = () => {
    return (
      <Paper className="flex items-center gap-2 p-2 shadow-lg">
        {actions.map((action) => {
          const ActionIcon = action.icon
          return (
            <button
              key={action.id}
              onClick={action.onClick}
              disabled={action.disabled}
              className={cn(
                "relative p-2 rounded-sm",
                "hover:bg-stone-100 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                action.disabled && "opacity-50 cursor-not-allowed"
              )}
              title={action.label}
            >
              <ActionIcon className="w-5 h-5 text-stone-700" />
              {action.badge && (
                <Badge
                  variant="solid"
                  color="primary"
                  size="xs"
                  className="absolute -top-1 -right-1"
                >
                  {action.badge}
                </Badge>
              )}
            </button>
          )
        })}
      </Paper>
    )
  }

  const renderMenu = () => {
    return (
      <div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "w-12 h-12 bg-blue-600 text-white rounded-full",
            "flex items-center justify-center shadow-lg",
            "hover:bg-blue-700 transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          )}
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>

        {isExpanded && (
          <Paper className="absolute bottom-16 right-0 w-48 p-2 shadow-lg">
            {actions.map((action) => {
              const ActionIcon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.onClick()
                    setIsExpanded(false)
                  }}
                  disabled={action.disabled}
                  className={cn(
                    "w-full flex items-center gap-3 p-2 rounded-sm text-left",
                    "hover:bg-stone-100 transition-colors",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500",
                    action.disabled && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ActionIcon className="w-4 h-4 text-stone-700" />
                  <Typography variant="body" className="text-sm text-stone-900">
                    {action.label}
                  </Typography>
                  {action.badge && (
                    <Badge
                      variant="soft"
                      color="primary"
                      size="xs"
                      className="ml-auto"
                    >
                      {action.badge}
                    </Badge>
                  )}
                </button>
              )
            })}
          </Paper>
        )}
      </div>
    )
  }

  const renderActions = () => {
    switch (variant) {
      case "toolbar":
        return renderToolbar()
      case "menu":
        return renderMenu()
      default:
        return renderFAB()
    }
  }

  return (
    <div className={cn(getPositionClasses(), className)}>
      {renderActions()}
    </div>
  )
}

QuickActions.displayName = "QuickActions"

export default QuickActions