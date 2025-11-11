import { useState } from "react"
import { ChevronRight, Slash, ArrowRight, MoreHorizontal, Home } from "lucide-react"
import type { BreadcrumbsProps, BreadcrumbItem } from "./types"
import { cn } from "../../../utils/cn"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"

const sizeClasses = {
  sm: {
    button: "text-xs px-1 py-0.5 h-auto",
    separator: "w-3 h-3",
    spacing: "gap-1",
  },
  md: {
    button: "text-sm px-2 py-1 h-auto",
    separator: "w-4 h-4",
    spacing: "gap-2",
  },
  lg: {
    button: "text-base px-3 py-1.5 h-auto",
    separator: "w-5 h-5",
    spacing: "gap-3",
  },
}

const separatorIcons = {
  slash: Slash,
  chevron: ChevronRight,
  arrow: ArrowRight,
  dot: () => <span className="text-stone-400">•</span>,
}

export const Breadcrumbs = ({
  items,
  maxItems = 5,
  separator = "chevron",
  size = "md",
  showIcons = true,
  iconOnly = false,
  showHome = false,
  homeIcon = Home,
  className,
  onItemClick,
}: BreadcrumbsProps) => {
  const [showAllItems, setShowAllItems] = useState(false)
  
  const sizeConfig = sizeClasses[size]
  
  // Determine which items to show
  const shouldCollapse = items.length > maxItems && !showAllItems
  const visibleItems = shouldCollapse 
    ? [
        items[0], // First item
        ...items.slice(-(maxItems - 2)) // Last few items
      ]
    : items

  const hiddenItemsCount = shouldCollapse ? items.length - maxItems + 1 : 0

  const handleItemClick = (item: BreadcrumbItem) => {
    if (item.disabled) return

    if (item.href) {
      // Handle anchor links for smooth scrolling
      if (item.href.startsWith("#")) {
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        // Handle regular navigation
        window.location.href = item.href
      }
    }

    item.onClick?.()
    onItemClick?.(item)
  }

  const renderSeparator = (index: number) => {
    if (typeof separator === "string") {
      const SeparatorIcon = separatorIcons[separator as keyof typeof separatorIcons]
      return (
        <span key={`separator-${index}`} className="flex items-center text-stone-400">
          {separator === "dot" ? (
            <span className="text-stone-400">•</span>
          ) : (
            <SeparatorIcon className={sizeConfig.separator} />
          )}
        </span>
      )
    }
    
    // Custom separator
    return (
      <span key={`separator-${index}`} className="flex items-center text-stone-400">
        {separator}
      </span>
    )
  }

  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number, isLast: boolean) => {
    const isFirst = index === 0
    const displayIcon = showIcons && (item.icon || (showHome && isFirst))
    const IconComponent = displayIcon ? (item.icon || homeIcon) : undefined

    // For icon-only mode, ensure we have an icon or use a fallback
    const showLabel = !iconOnly
    const EffectiveIcon = iconOnly ? (IconComponent || homeIcon) : IconComponent

    if (iconOnly && !IconComponent) {
      // Fallback to Home icon if no icon is provided in icon-only mode
      console.warn(`Breadcrumb item "${item.label}" has no icon in iconOnly mode, using fallback`)
    }

    return (
      <li key={item.id} className="flex items-center">
        {isLast ? (
          // Last item (current page) - not clickable
          iconOnly ? (
            <span
              className={cn(
                "flex items-center justify-center font-medium text-stone-900 rounded-sm",
                sizeConfig.button,
                item.disabled && "opacity-50"
              )}
              title={item.label}
            >
              {EffectiveIcon && <EffectiveIcon className={sizeConfig.separator} />}
            </span>
          ) : (
            <span
              className={cn(
                "flex items-center gap-1.5 font-medium text-stone-900",
                sizeConfig.button,
                item.disabled && "opacity-50"
              )}
            >
              {IconComponent && <IconComponent className={sizeConfig.separator} />}
              {showLabel && <span className="truncate">{item.label}</span>}
            </span>
          )
        ) : (
          // Clickable breadcrumb item
          iconOnly ? (
            <IconButton
              icon={EffectiveIcon || homeIcon}
              variant="plain"
              size={size === "sm" ? "xs" : size === "lg" ? "md" : "sm"}
              aria-label={item.label}
              className="text-stone-600 hover:text-stone-900"
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
            />
          ) : (
            <Button
              variant="plain"
              className={cn(
                "font-normal text-stone-600 hover:text-stone-900 hover:underline",
                "focus:ring-1 focus:ring-stone-400 focus:ring-offset-0",
                sizeConfig.button,
                item.disabled && "opacity-50 cursor-not-allowed hover:no-underline"
              )}
              onClick={() => handleItemClick(item)}
              disabled={item.disabled}
            >
              <div className="flex items-center gap-1.5">
                {IconComponent && <IconComponent className={sizeConfig.separator} />}
                {showLabel && <span className="truncate">{item.label}</span>}
              </div>
            </Button>
          )
        )}
      </li>
    )
  }

  const renderCollapseButton = () => {
    if (!shouldCollapse) return null

    return (
      <>
        <li className="flex items-center">
          <IconButton
            icon={MoreHorizontal}
            variant="plain"
            size={size === "sm" ? "xs" : size === "lg" ? "md" : "sm"}
            aria-label={`Show ${hiddenItemsCount} hidden items`}
            className="text-stone-500 hover:text-stone-700"
            onClick={() => setShowAllItems(true)}
          />
        </li>
        {renderSeparator(-1)}
      </>
    )
  }

  return (
    <nav
      className={cn("flex", className)}
      aria-label="Breadcrumb navigation"
    >
      <ol className={cn("flex items-center flex-wrap", sizeConfig.spacing)}>
        {/* First item */}
        {visibleItems.length > 0 && (
          <>
            {renderBreadcrumbItem(visibleItems[0], 0, visibleItems.length === 1)}
            {visibleItems.length > 1 && renderSeparator(0)}
          </>
        )}

        {/* Collapse button if needed */}
        {renderCollapseButton()}

        {/* Remaining items */}
        {visibleItems.slice(1).map((item, index) => {
          const actualIndex = shouldCollapse ? items.length - visibleItems.length + index + 1 : index + 1
          const isLast = index === visibleItems.length - 2
          
          return (
            <div key={item.id} className="flex items-center gap-2">
              {renderBreadcrumbItem(item, actualIndex, isLast)}
              {!isLast && renderSeparator(actualIndex)}
            </div>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumbs.displayName = "Breadcrumbs"
