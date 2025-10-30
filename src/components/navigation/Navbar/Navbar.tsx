import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import type { NavbarProps, NavbarItem } from "./types"
import { cn } from "../../../utils/cn"
import { Brand } from "../../core/Brand"
import { Button } from "../../forms/Button"

const variantClasses = {
  default: "bg-[#faf9f6]/95 border-b border-stone-200/50",
  transparent: "bg-transparent",
  solid: "bg-[#faf9f6] border-b border-stone-200",
  bordered: "bg-[#faf9f6]/95 border border-stone-200/50 rounded-lg mx-4 mt-4",
}

const positionClasses = {
  fixed: "fixed top-0 left-0 right-0 z-50",
  sticky: "sticky top-0 z-50",
  static: "relative",
}

export const Navbar = ({
  items,
  brand,
  variant = "default",
  position = "static",
  blurred = true,
  compact = false,
  className,
  onItemClick,
  onBrandClick,
  rightContent,
  showMobileMenu = true,
  mobileMenuOpen = false,
  onMobileMenuToggle,
}: NavbarProps) => {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const isMobileMenuOpen = mobileMenuOpen ?? internalMobileMenuOpen
  const setMobileMenuOpen = onMobileMenuToggle ?? setInternalMobileMenuOpen

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        const dropdown = dropdownRefs.current[openDropdown]
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setOpenDropdown(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [openDropdown])

  const handleItemClick = (item: NavbarItem) => {
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

    // Close mobile menu after navigation
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false)
    }

    // Close dropdown if open
    setOpenDropdown(null)
  }

  const handleDropdownToggle = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId)
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

  const renderNavItem = (item: NavbarItem, mobile = false) => {
    const hasChildren = item.children && item.children.length > 0
    const isDropdownOpen = openDropdown === item.id

    const baseClasses = cn(
      "inline-flex items-center gap-2 px-[1em] py-[1em] text-sm font-medium rounded-sm transition-colors",
      "hover:bg-stone-100 hover:text-stone-900",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
      item.disabled
        ? "text-stone-400 cursor-not-allowed"
        : "text-stone-700 cursor-pointer",
      mobile && "w-full justify-start"
    )

    if (hasChildren) {
      return (
        <div
          key={item.id}
          className="relative"
          ref={(el) => {
            dropdownRefs.current[item.id] = el
          }}
        >
          <button
            className={cn(baseClasses, isDropdownOpen && "bg-stone-100")}
            onClick={() => handleDropdownToggle(item.id)}
            disabled={item.disabled}
          >
            {item.icon && <item.icon className="w-4 h-4" />}
            <span>{item.label}</span>
            {item.badge && (
              <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                {item.badge}
              </span>
            )}
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform",
                isDropdownOpen && "rotate-180"
              )}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className={cn(
                "absolute top-full left-0 mt-1 min-w-48 bg-white border border-stone-200 rounded-sm shadow-lg py-1 z-50",
                mobile && "relative mt-2 shadow-none border-l-2 border-stone-200 ml-4"
              )}
            >
              {item.children?.map((child) => (
                <button
                  key={child.id}
                  className={cn(
                    "w-full px-4 py-2 text-sm text-left hover:bg-stone-50",
                    "flex items-center gap-2 transition-colors",
                    child.disabled
                      ? "text-stone-400 cursor-not-allowed"
                      : "text-stone-700"
                  )}
                  onClick={() => !child.disabled && child.onClick?.()}
                  disabled={child.disabled}
                >
                  {child.icon && <child.icon className="w-4 h-4" />}
                  <span>{child.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <button
        key={item.id}
        className={baseClasses}
        onClick={() => handleItemClick(item)}
        disabled={item.disabled}
      >
        {item.icon && <item.icon className="w-4 h-4" />}
        <span>{item.label}</span>
        {item.badge && (
          <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
            {item.badge}
          </span>
        )}
      </button>
    )
  }

  return (
    <nav
      className={cn(
        "w-full",
        positionClasses[position],
        variantClasses[variant],
        blurred && "backdrop-blur-sm",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          compact ? "py-2" : "py-4"
        )}
      >
        <div className="grid grid-cols-3 items-center gap-[1em]">
          {/* Left: Brand */}
          <div className="flex justify-start">
            {brand && (
              <>
                {brand.logo || brand.text ? (
                  <Brand
                      logoSrc={brand.logo}
                      title={brand.text}
                      size={compact ? "sm" : "md"}
                      showLogo={!!brand.logo}
                      showText={!!brand.text}
                      titleVariant={brand.titleVariant}
                      subtitleVariant={brand.subtitleVariant}
                      scaleWithParent={true}
                      onClick={handleBrandClick}
                    />
                ) : (
                  <Brand size={compact ? "sm" : "md"} onClick={handleBrandClick} />
                )}
              </>
            )}
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            {items.map((item) => renderNavItem(item))}
          </div>

          {/* Right: Right Content & Mobile Menu Button */}
          <div className="flex items-center justify-end gap-4">
            {rightContent}
            
            {showMobileMenu && (
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && showMobileMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-stone-200">
            <div className="flex flex-col space-y-1 mt-4">
              {items.map((item) => renderNavItem(item, true))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

Navbar.displayName = "Navbar"