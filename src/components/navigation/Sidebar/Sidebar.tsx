import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, X } from "lucide-react"
import type { SidebarProps, SidebarItem } from "./types"
import { cn } from "../../../utils/cn"
import { Brand } from "../../core/Brand"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"

const variantClasses = {
  default: "bg-[#faf9f6] border-r border-stone-200/60",
  compact: "bg-[#faf9f6] border-r border-stone-200/60",
  floating: "bg-[#faf9f6]/95 backdrop-blur-sm border border-stone-200/50 rounded-lg shadow-lg",
}

const positionClasses = {
  fixed: "fixed top-0 left-0 bottom-0 z-40",
  sticky: "sticky top-0 h-screen",
  static: "relative h-full",
}

const widthClasses = {
  sm: "w-56",
  md: "w-64",
  lg: "w-72",
  auto: "w-auto min-w-48 max-w-80",
}

const collapsedWidthClasses = {
  sm: "w-16",
  md: "w-16",
  lg: "w-20",
  auto: "w-16",
}

export const Sidebar = ({
  items,
  brand,
  variant = "default",
  position = "static",
  width = "md",
  open = true,
  collapsible = false,
  collapsed = false,
  spy = false,
  spyOffset = 100,
  footer,
  className,
  onCollapseChange,
  onClose,
  onItemClick,
  onBrandClick,
  onSpyChange,
}: SidebarProps) => {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set())
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed)
  const [activeSpyId, setActiveSpyId] = useState<string | null>(null)
  
  const isCollapsed = collapsible ? internalCollapsed : false
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle outside click to close sidebar on mobile
  useEffect(() => {
    if (position === "fixed" && open) {
      const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
          onClose?.()
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [position, open, onClose])

  // Scroll spy functionality
  useEffect(() => {
    if (!spy) return

    const getAllNavigationItems = (items: SidebarItem[]): SidebarItem[] => {
      const allItems: SidebarItem[] = []
      
      const collectItems = (itemList: SidebarItem[]) => {
        itemList.forEach(item => {
          if (item.href?.startsWith("#")) {
            allItems.push(item)
          }
          if (item.children) {
            collectItems(item.children)
          }
        })
      }
      
      collectItems(items)
      return allItems
    }

    const handleScroll = () => {
      const allItems = getAllNavigationItems(items)
      const scrollTop = window.pageYOffset
      
      // Find all visible sections
      const visibleSections = allItems
        .map(item => {
          const element = document.querySelector(item.href!)
          if (!element) return null
          
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollTop
          
          return {
            id: item.id,
            href: item.href!,
            top: elementTop,
            isVisible: rect.top <= spyOffset && rect.bottom > 0
          }
        })
        .filter(Boolean)
        .sort((a, b) => a!.top - b!.top)

      // Find the current active section
      let newActiveId: string | null = null
      
      if (visibleSections.length > 0) {
        // Find the topmost visible section
        const currentVisible = visibleSections.find(section => section!.isVisible)
        
        if (currentVisible) {
          newActiveId = currentVisible.id
        } else {
          // If no section is currently visible, use the closest upcoming section
          const upcoming = visibleSections.find(section => section!.top > scrollTop + spyOffset)
          if (upcoming) {
            newActiveId = upcoming.id
          } else {
            // Use the last section if we've scrolled past everything
            newActiveId = visibleSections[visibleSections.length - 1]?.id || null
          }
        }
      }

      if (newActiveId !== activeSpyId) {
        setActiveSpyId(newActiveId)
        onSpyChange?.(newActiveId)
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [spy, items, spyOffset, activeSpyId, onSpyChange])

  // Auto-expand groups when child is active in spy mode
  useEffect(() => {
    if (!spy || !activeSpyId) return

    const findParentGroups = (items: SidebarItem[], targetId: string, parentIds: string[] = []): string[] => {
      for (const item of items) {
        if (item.children) {
          const newParentIds = [...parentIds, item.id]
          if (item.children.some(child => child.id === targetId)) {
            return newParentIds
          }
          const found = findParentGroups(item.children, targetId, newParentIds)
          if (found.length > 0) {
            return found
          }
        }
      }
      return []
    }

    const parentIds = findParentGroups(items, activeSpyId)
    if (parentIds.length > 0) {
      setOpenGroups(prev => {
        const newSet = new Set(prev)
        parentIds.forEach(id => newSet.add(id))
        return newSet
      })
    }
  }, [spy, activeSpyId, items])

  const handleItemClick = (item: SidebarItem) => {
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

    // Close mobile sidebar after navigation
    if (position === "fixed") {
      onClose?.()
    }
  }

  const handleGroupToggle = (itemId: string) => {
    const newOpenGroups = new Set(openGroups)
    if (newOpenGroups.has(itemId)) {
      newOpenGroups.delete(itemId)
    } else {
      newOpenGroups.add(itemId)
    }
    setOpenGroups(newOpenGroups)
  }

  const handleCollapseToggle = () => {
    const newCollapsed = !internalCollapsed
    setInternalCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
    
    // Close all groups when collapsing
    if (newCollapsed) {
      setOpenGroups(new Set())
    }
  }

  const handleBrandClick = () => {
    if (brand?.href) {
      if (brand.href.startsWith("#")) {
        const element = document.querySelector(brand.href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        window.location.href = brand.href
      }
    }
    brand?.onClick?.()
    onBrandClick?.()
  }

  const renderNavItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isGroupOpen = openGroups.has(item.id)
    const indentClass = level > 0 ? `ml-${Math.min(level * 4, 8)}` : ""
    const isActive = spy && activeSpyId === item.id
    const hasActiveChild = spy && item.children?.some(child => 
      child.id === activeSpyId || child.children?.some(grandchild => grandchild.id === activeSpyId)
    )

    if (hasChildren) {
      return (
        <div key={item.id}>
          <Button
            variant="link"
            className={cn(
              "w-full justify-start gap-3 px-3 py-2 h-auto font-medium",
              "hover:bg-stone-100/80 text-stone-700",
              "focus:ring-2 focus:ring-stone-400 focus:ring-offset-1",
              item.disabled && "opacity-50 cursor-not-allowed",
              isActive && "bg-stone-200/60 text-stone-900 font-semibold",
              hasActiveChild && "text-stone-900",
              indentClass,
              isCollapsed && "justify-center px-2"
            )}
            onClick={() => !item.disabled && handleGroupToggle(item.id)}
            disabled={item.disabled}
          >
            {item.icon && (
              <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "w-4 h-4")} />
            )}
            {!isCollapsed && (
              <>
                <span className="truncate flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="px-2 py-0.5 text-xs bg-stone-200 text-stone-700 rounded-full flex-shrink-0">
                    {item.badge}
                  </span>
                )}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform flex-shrink-0",
                    isGroupOpen && "rotate-180"
                  )}
                />
              </>
            )}
          </Button>

          {/* Children */}
          {isGroupOpen && !isCollapsed && (
            <div className="mt-1 space-y-1">
              {item.children?.map((child) => renderNavItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Button
        key={item.id}
        variant="link"
        className={cn(
          "w-full justify-start gap-3 px-3 py-2 h-auto font-medium",
          "hover:bg-stone-100/80 text-stone-700",
          "focus:ring-2 focus:ring-stone-400 focus:ring-offset-1",
          item.disabled && "opacity-50 cursor-not-allowed",
          isActive && "bg-stone-200/60 text-stone-900 font-semibold",
          indentClass,
          isCollapsed && "justify-center px-2"
        )}
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
      >
        {item.icon && (
          <item.icon className={cn("w-5 h-5 flex-shrink-0", isCollapsed && "w-4 h-4")} />
        )}
        {!isCollapsed && (
          <>
            <span className="truncate flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="px-2 py-0.5 text-xs bg-stone-200 text-stone-700 rounded-full flex-shrink-0">
                {item.badge}
              </span>
            )}
          </>
        )}
      </Button>
    )
  }

  if (position === "fixed" && !open) {
    return null
  }

  return (
    <>
      {/* Backdrop for mobile */}
      {position === "fixed" && open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "flex flex-col transition-all duration-300 ease-in-out",
          positionClasses[position],
          variantClasses[variant],
          isCollapsed ? collapsedWidthClasses[width] : widthClasses[width],
          position === "fixed" && "lg:translate-x-0",
          position === "fixed" && !open && "-translate-x-full",
          className
        )}
      >
        {/* Header */}
        <div className={cn(
          "flex items-center p-4 border-b border-stone-200/60",
          isCollapsed ? "justify-center" : "justify-between"
        )}>
          {/* Brand */}
          {brand && !isCollapsed && (
            <Brand
              logoSrc={brand.logo}
              title={brand.text}
              size="sm"
              showLogo={!!brand.logo}
              showText={!!brand.text}
              scaleWithParent={true}
              onClick={handleBrandClick}
            />
          )}

          {/* Collapsed brand (logo only) */}
          {brand && isCollapsed && brand.logo && (
            <Button
              variant="plain"
              className="p-0 h-auto absolute left-4"
              onClick={handleBrandClick}
            >
              <img
                src={brand.logo}
                alt={`${brand.text || 'Brand'} logo`}
                className="h-8 w-8 object-contain"
              />
            </Button>
          )}

          {/* Control buttons */}
          <div className={cn(
            "flex items-center gap-1",
            isCollapsed && "relative"
          )}>
            {collapsible && (
              <IconButton
                icon={isCollapsed ? ChevronRight : ChevronLeft}
                variant="ghost"
                size="sm"
                aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                onClick={handleCollapseToggle}
              />
            )}

            {position === "fixed" && (
              <IconButton
                icon={X}
                variant="ghost"
                size="sm"
                className="lg:hidden"
                aria-label="Close sidebar"
                onClick={onClose}
              />
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            {items.map((item) => renderNavItem(item))}
          </div>
        </nav>

        {/* Footer */}
        {footer && !isCollapsed && (
          <div className="border-t border-stone-200/60 p-4">
            {footer}
          </div>
        )}
      </aside>
    </>
  )
}

Sidebar.displayName = "Sidebar"