import React, { useState, useRef, useEffect } from "react"
import type { MenuProps, MenuItem } from "./types"
import { cn } from "../../../utils/cn"
import { Paper, Typography } from "../../core"
import { ChevronRight } from "lucide-react"

export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  align = "start",
  side = "bottom",
  className,
  disabled = false,
}) => {
  const [open, setOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set())
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
        setOpenSubmenus(new Set())
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  const handleItemClick = (item: MenuItem) => {
    if (item.disabled || item.children) return
    
    item.onClick?.()
    setOpen(false)
    setOpenSubmenus(new Set())
  }

  const toggleSubmenu = (itemId: string) => {
    setOpenSubmenus(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const renderMenuItem = (item: MenuItem, level = 0) => {
    if (item.separator) {
      return (
        <div
          key={`separator-${item.id}`}
          className="h-px bg-stone-200 my-1"
          role="separator"
        />
      )
    }

    const hasChildren = item.children && item.children.length > 0
    const isSubmenuOpen = openSubmenus.has(item.id)
    const ItemIcon = item.icon

    return (
      <div key={item.id}>
        <button
          className={cn(
            "w-full text-left px-3 py-2 text-sm rounded-sm flex items-center justify-between group",
            "hover:bg-stone-100 focus:bg-stone-100 focus:outline-none",
            item.disabled && "opacity-50 cursor-not-allowed",
            level > 0 && "ml-4"
          )}
          onClick={() => {
            if (hasChildren) {
              toggleSubmenu(item.id)
            } else {
              handleItemClick(item)
            }
          }}
          disabled={item.disabled}
        >
          <div className="flex items-center gap-2">
            {ItemIcon && <ItemIcon className="w-4 h-4" />}
            <Typography variant="body" className="text-stone-900">
              {item.label}
            </Typography>
          </div>

          <div className="flex items-center gap-1">
            {item.shortcut && (
              <div className="flex items-center gap-1">
                {item.shortcut.map((key) => (
                  <Typography
                    key={key}
                    variant="caption"
                    className="px-1 py-0.5 bg-stone-100 rounded text-stone-600"
                  >
                    {key}
                  </Typography>
                ))}
              </div>
            )}
            {hasChildren && (
              <ChevronRight
                className={cn(
                  "w-3 h-3 text-stone-600 transition-transform",
                  isSubmenuOpen && "rotate-90"
                )}
              />
            )}
          </div>
        </button>

        {hasChildren && isSubmenuOpen && (
          <div className="mt-1 ml-2 border-l border-stone-200 pl-2">
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  const getMenuPosition = () => {
    const baseClasses = "absolute z-50 min-w-48"
    
    switch (side) {
      case "top":
        return cn(baseClasses, "bottom-full mb-2")
      case "right":
        return cn(baseClasses, "left-full ml-2 top-0")
      case "left":
        return cn(baseClasses, "right-full mr-2 top-0")
      default: // bottom
        return cn(baseClasses, "top-full mt-2")
    }
  }

  const getMenuAlignment = () => {
    switch (align) {
      case "center":
        return "left-1/2 -translate-x-1/2"
      case "end":
        return "right-0"
      default: // start
        return "left-0"
    }
  }

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        onClick={() => !disabled && setOpen(!open)}
        className={cn(disabled && "opacity-50 cursor-not-allowed")}
      >
        {trigger}
      </div>

      {open && (
        <div
          ref={menuRef}
          className={cn(
            getMenuPosition(),
            getMenuAlignment(),
            className
          )}
        >
          <Paper className="p-2 shadow-lg border border-stone-200">
            {items.map((item) => renderMenuItem(item))}
          </Paper>
        </div>
      )}
    </div>
  )
}

Menu.displayName = "Menu"

export default Menu