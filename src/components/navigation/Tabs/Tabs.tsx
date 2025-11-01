import React, { useState, useMemo } from "react"
import { cn } from "../../../utils/cn"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { Paper } from "../../core/Paper"
import type { TabsProps, TabVariant } from "./types"

const getTabVariantClasses = (variant: TabVariant): string => {
  switch (variant) {
    case "tabs":
      return "border-b border-stone-200 bg-paper"
    case "pills":
      return "bg-stone-100 p-1 rounded-lg"
    case "ghost":
      return "bg-transparent"
    case "links":
      return "bg-transparent space-x-1"
    case "plain":
      return ""
    default:
      return "border-b border-stone-200 bg-paper"
  }
}

const getTabButtonClasses = (
  variant: TabVariant,
  isActive: boolean,
  color: string,
  size: string
): string => {
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5"
  }

  const baseClasses = sizeClasses[size as keyof typeof sizeClasses]

  switch (variant) {
    case "tabs":
      return cn(
        baseClasses,
        "border-b-2 rounded-none",
        isActive
          ? `border-${color}-500 text-${color}-600 bg-paper`
          : "border-transparent text-stone-600 hover:text-stone-900 hover:border-stone-300"
      )
    case "pills":
      return cn(
        baseClasses,
        "rounded-md",
        isActive
          ? `bg-${color}-500 text-white shadow-sm`
          : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
      )
    case "ghost":
      return cn(
        baseClasses,
        "rounded-md",
        isActive
          ? `bg-${color}-50 text-${color}-600 border border-${color}-200`
          : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
      )
    case "links":
      return cn(
        baseClasses,
        "underline-offset-4",
        isActive
          ? `text-${color}-600 underline`
          : "text-stone-600 hover:text-stone-900 hover:underline"
      )
    case "plain":
      return cn(
        baseClasses,
        isActive
          ? `text-${color}-600`
          : "text-stone-600 hover:text-stone-900"
      )
    default:
      return baseClasses
  }
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  defaultActiveTab,
  variant = "tabs",
  color = "primary",
  size = "md",
  orientation = "horizontal",
  showIcons = true,
  iconPosition = "left",
  fullWidth = false,
  showContent = true,
  className,
  contentClassName,
  onTabChange
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    activeTab || defaultActiveTab || items[0]?.id || ""
  )

  const currentActiveTab = activeTab || internalActiveTab
  const activeTabItem = useMemo(
    () => items.find(item => item.id === currentActiveTab),
    [items, currentActiveTab]
  )

  const handleTabClick = (tabId: string) => {
    if (activeTab === undefined) {
      setInternalActiveTab(tabId)
    }
    onTabChange?.(tabId)
  }

  const tabContainerClasses = getTabVariantClasses(variant)

  const isVertical = orientation === "vertical"
  const showIconsOnly = iconPosition === "top" && isVertical

  return (
    <div className={cn("w-full", isVertical && "flex gap-6", className)}>
      {/* Tab Navigation */}
      <div
        className={cn(
          "flex",
          isVertical ? "flex-col min-w-48" : "flex-row",
          tabContainerClasses,
          fullWidth && !isVertical && "w-full",
          className
        )}
        role="tablist"
        aria-orientation={orientation}
      >
        {items.map((item) => {
          const isActive = item.id === currentActiveTab
          const tabButtonClasses = getTabButtonClasses(variant, isActive, color, size)
          
          const buttonProps = {
            key: item.id,
            variant: variant === "plain" ? "plain" : "ghost",
            color: isActive ? color : "stone",
            size,
            disabled: item.disabled,
            className: cn(
              tabButtonClasses,
              fullWidth && !isVertical && "flex-1",
              item.disabled && "opacity-50 cursor-not-allowed"
            ),
            onClick: () => !item.disabled && handleTabClick(item.id),
            role: "tab",
            "aria-selected": isActive,
            "aria-controls": `tabpanel-${item.id}`,
            id: `tab-${item.id}`
          } as const

          if (showIconsOnly && item.icon) {
            return (
              <IconButton
                {...buttonProps}
                icon={item.icon}
                aria-label={item.label}
              />
            )
          }

          return (
            <Button
              {...buttonProps}
              icon={showIcons && (iconPosition === "left" || iconPosition === "right" || iconPosition === "top") ? item.icon : undefined}
              iconPosition={iconPosition === "top" ? "left" : iconPosition}
            >
              <span className="flex items-center gap-2">
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={cn(
                      "inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full",
                      isActive
                        ? "bg-white/20 text-current"
                        : "bg-stone-100 text-stone-600"
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </span>
            </Button>
          )
        })}
      </div>

      {/* Tab Content */}
      {showContent && activeTabItem && (
        <div
          className={cn(
            "flex-1",
            !isVertical && "mt-6",
            contentClassName
          )}
          role="tabpanel"
          aria-labelledby={`tab-${currentActiveTab}`}
          id={`tabpanel-${currentActiveTab}`}
        >
          <Paper className="h-full p-6">
            {activeTabItem.content}
          </Paper>
        </div>
      )}
    </div>
  )
}