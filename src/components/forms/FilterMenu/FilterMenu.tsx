import { useState, useCallback, useMemo } from "react"
import { Filter, ChevronDown, X, Check } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { FilterMenuProps, FilterMenuState, FilterGroup, SortOption } from "./types"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"
import { Checkbox } from "../Checkbox"
import { Radio } from "../Radio"
import { cn } from "../../../utils/cn.js"
import { containerResponsiveUI } from "../../../utils/containerFonts"

const FilterMenuTrigger = ({
  children,
  variant = "outline",
  size = "md",
  color = "default",
  icon: TriggerIcon = Filter,
  isOpen = false,
  disabled = false,
  activeCount = 0,
  className,
  onClick,
  ...props
}: {
  children?: React.ReactNode
  variant?: "solid" | "outline" | "ghost" | "link" | "plain"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  color?: string
  icon?: LucideIcon
  isOpen?: boolean
  disabled?: boolean
  activeCount?: number
  className?: string
  onClick?: () => void
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color as "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "default"}
      icon={TriggerIcon}
      iconPosition="left"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "transition-all duration-200",
        isOpen && "ring-2 ring-stone-200 ring-offset-1",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children || "Filter"}
        {activeCount > 0 && (
          <span className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 rounded-full">
            {activeCount}
          </span>
        )}
        <ChevronDown className="w-4 h-4" />
      </span>
    </Button>
  )
}

const FilterGroupSection = ({
  group,
  selectedFilters,
  onFilterChange,
  showCounts = false,
  searchQuery = "",
}: {
  group: FilterGroup
  selectedFilters: string[]
  onFilterChange: (optionId: string, selected: boolean) => void
  showCounts?: boolean
  searchQuery?: string
}) => {
  const [collapsed, setCollapsed] = useState(group.defaultCollapsed || false)

  const filteredOptions = useMemo(() => {
    if (!searchQuery) return group.options
    
    return group.options.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [group.options, searchQuery])

  if (filteredOptions.length === 0) {
    return null
  }

  return (
    <div className="border-b border-stone-200 dark:border-stone-700 last:border-b-0">
      {group.collapsible ? (
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "w-full px-3 py-2 text-left flex items-center justify-between",
            "hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors",
            containerResponsiveUI.label,
            "text-stone-700 dark:text-stone-300 font-medium"
          )}
        >
          <span>{group.label}</span>
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </button>
      ) : (
        <div className={cn(
          "px-3 py-2 border-b border-stone-100 dark:border-stone-800",
          containerResponsiveUI.label,
          "text-stone-700 dark:text-stone-300 font-medium bg-stone-50/50 dark:bg-stone-800/30"
        )}>
          {group.label}
        </div>
      )}

      {(!group.collapsible || !collapsed) && (
        <div className="py-1">
          {filteredOptions.map((option) => {
            const isSelected = selectedFilters.includes(option.id)
            
            return (
              <div
                key={option.id}
                className={cn(
                  "px-3 py-1.5 flex items-center gap-3",
                  "hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors",
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {group.multiple ? (
                  <Checkbox
                    checked={isSelected}
                    onChange={(checked) => onFilterChange(option.id, checked)}
                    disabled={option.disabled}
                    size="sm"
                  />
                ) : (
                  <Radio
                    checked={isSelected}
                    onChange={(checked) => {
                      if (checked) {
                        // For single selection, clear other options first
                        selectedFilters.forEach(id => {
                          if (id !== option.id) {
                            onFilterChange(id, false)
                          }
                        })
                        onFilterChange(option.id, true)
                      }
                    }}
                    disabled={option.disabled}
                    size="sm"
                  />
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {option.icon && (
                      <option.icon className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                    )}
                    <span className={cn(
                      "text-sm",
                      "text-stone-700 dark:text-stone-300 truncate"
                    )}>
                      {option.label}
                    </span>
                    {showCounts && option.count !== undefined && (
                      <span className={cn(
                        "text-xs",
                        "text-stone-500 dark:text-stone-400 shrink-0"
                      )}>
                        ({option.count})
                      </span>
                    )}
                  </div>
                  {option.description && (
                    <p className={cn(
                      "text-xs",
                      "text-stone-500 dark:text-stone-400 mt-0.5"
                    )}>
                      {option.description}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

const SortOptionsSection = ({
  sortOptions,
  selectedSort,
  onSortChange,
  searchQuery = "",
}: {
  sortOptions: SortOption[]
  selectedSort?: string
  onSortChange: (optionId: string) => void
  searchQuery?: string
}) => {
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return sortOptions
    
    return sortOptions.filter(option =>
      option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [sortOptions, searchQuery])

  if (filteredOptions.length === 0) {
    return null
  }

  return (
    <div className="border-b border-stone-200 dark:border-stone-700 last:border-b-0">
      <div className={cn(
        "px-3 py-2 border-b border-stone-100 dark:border-stone-800",
        containerResponsiveUI.label,
        "text-stone-700 dark:text-stone-300 font-medium bg-stone-50/50 dark:bg-stone-800/30"
      )}>
        Sort By
      </div>

      <div className="py-1">
        {filteredOptions.map((option) => {
          const isSelected = selectedSort === option.id
          
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSortChange(option.id)}
              disabled={option.disabled}
              className={cn(
                "w-full px-3 py-1.5 flex items-center gap-3 text-left",
                "hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors",
                option.disabled && "opacity-50 cursor-not-allowed",
                isSelected && "bg-stone-100 dark:bg-stone-800"
              )}
            >
              <div className="w-4 h-4 flex items-center justify-center shrink-0">
                {isSelected && (
                  <Check className="w-3 h-3 text-stone-600 dark:text-stone-400" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {option.icon && (
                    <option.icon className="w-4 h-4 text-stone-500 dark:text-stone-400 shrink-0" />
                  )}
                  <span className={cn(
                    "text-sm",
                    "text-stone-700 dark:text-stone-300 truncate"
                  )}>
                    {option.label}
                  </span>
                  {option.direction && (
                    <span className={cn(
                      "text-xs",
                      "text-stone-500 dark:text-stone-400 shrink-0"
                    )}>
                      ({option.direction === "asc" ? "↑" : "↓"})
                    </span>
                  )}
                </div>
                {option.description && (
                  <p className={cn(
                    "text-xs",
                    "text-stone-500 dark:text-stone-400 mt-0.5"
                  )}>
                    {option.description}
                  </p>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export const FilterMenu = ({
  filterGroups = [],
  sortOptions = [],
  state,
  defaultState = { filters: {}, sort: undefined, search: "" },
  variant = "outline",
  size = "md",
  color = "default",

  isOpen,
  disabled = false,
  searchable = false,
  searchPlaceholder = "Search filters...",
  showClearAll = true,
  showApplyButtons = false,
  showCounts = false,
  trigger,
  triggerIcon = Filter,
  triggerText = "Filter",
  showActiveCount = true,
  maxHeight = "400px",
  paper = true,
  triggerClassName,
  contentClassName,
  zIndex = 50,
  onFiltersChange,
  onSortChange,
  onSearchChange,
  onClear,
  onOpenChange,
  className,
  ...props
}: FilterMenuProps) => {
  // Internal state management
  const [internalState, setInternalState] = useState<FilterMenuState>(defaultState)
  const currentState = state || internalState
  const isControlled = state !== undefined

  // Calculate active filter count
  const activeFilterCount = useMemo(() => {
    return Object.values(currentState.filters).reduce((count, filters) => count + filters.length, 0)
  }, [currentState.filters])

  // Update state helper
  const updateState = useCallback((updates: Partial<FilterMenuState>) => {
    const newState = { ...currentState, ...updates }
    
    if (!isControlled) {
      setInternalState(newState)
    }

    // Call appropriate callbacks
    if (updates.filters && onFiltersChange) {
      onFiltersChange(updates.filters)
    }
    if (updates.sort !== undefined && onSortChange) {
      onSortChange(updates.sort)
    }
    if (updates.search !== undefined && onSearchChange) {
      onSearchChange(updates.search)
    }
  }, [currentState, isControlled, onFiltersChange, onSortChange, onSearchChange])

  // Filter change handler
  const handleFilterChange = useCallback((groupId: string, optionId: string, selected: boolean) => {
    const currentFilters = currentState.filters[groupId] || []
    let newFilters: string[]

    if (selected) {
      newFilters = [...currentFilters, optionId]
    } else {
      newFilters = currentFilters.filter(id => id !== optionId)
    }

    updateState({
      filters: {
        ...currentState.filters,
        [groupId]: newFilters
      }
    })
  }, [currentState.filters, updateState])

  // Sort change handler
  const handleSortChange = useCallback((sortId: string) => {
    updateState({ sort: sortId })
  }, [updateState])

  // Search change handler
  const handleSearchChange = useCallback((query: string) => {
    updateState({ search: query })
  }, [updateState])

  // Clear all handler
  const handleClearAll = useCallback(() => {
    const clearedState = { filters: {}, sort: undefined, search: "" }
    updateState(clearedState)
    
    if (onClear) {
      onClear()
    }
  }, [updateState, onClear])

  // Custom dropdown state
  const [internalIsOpen, setInternalIsOpen] = useState(false)
  const dropdownIsOpen = isOpen !== undefined ? isOpen : internalIsOpen
  
  const toggleDropdown = useCallback(() => {
    const newOpen = !dropdownIsOpen
    if (isOpen === undefined) {
      setInternalIsOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }, [dropdownIsOpen, isOpen, onOpenChange])

  return (
    <div className={cn("relative inline-flex", className)} {...props}>
      {/* Trigger */}
      {trigger || (
        <FilterMenuTrigger
          variant={variant}
          size={size}
          color={color}
          icon={triggerIcon}
          isOpen={dropdownIsOpen}
          disabled={disabled}
          activeCount={showActiveCount ? activeFilterCount : 0}
          className={triggerClassName}
          onClick={toggleDropdown}
        >
          {triggerText}
        </FilterMenuTrigger>
      )}

      {/* Dropdown Content */}
      {dropdownIsOpen && (
        <div 
          className={cn(
            "absolute top-full left-0 mt-2 z-50",
            "w-80 max-w-[90vw]",
            "bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 rounded-lg shadow-lg",
            "transition-all duration-200 ease-out",
            paper && "shadow-md",
            contentClassName
          )}
          style={{ maxHeight, zIndex }}
        >
          {/* Search Bar */}
          {searchable && (
            <div className="p-3 border-b border-stone-200 dark:border-stone-700">
              <SearchBar
                value={currentState.search || ""}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={searchPlaceholder}
                size="sm"
                width="flexible"
              />
            </div>
          )}

          {/* Content */}
          <div className="overflow-y-auto" style={{ maxHeight: searchable ? `calc(${maxHeight} - 60px)` : maxHeight }}>
            {/* Filter Groups */}
            {filterGroups.map((group) => (
              <FilterGroupSection
                key={group.id}
                group={group}
                selectedFilters={currentState.filters[group.id] || []}
                onFilterChange={(optionId, selected) => handleFilterChange(group.id, optionId, selected)}
                showCounts={showCounts}
                searchQuery={currentState.search}
              />
            ))}

            {/* Sort Options */}
            {sortOptions.length > 0 && (
              <SortOptionsSection
                sortOptions={sortOptions}
                selectedSort={currentState.sort}
                onSortChange={handleSortChange}
                searchQuery={currentState.search}
              />
            )}

            {/* Empty State */}
            {filterGroups.length === 0 && sortOptions.length === 0 && (
              <div className="px-3 py-8 text-center">
                <p className={cn(
                  "text-sm",
                  "text-stone-500 dark:text-stone-400"
                )}>
                  No filters available
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          {(showClearAll || showApplyButtons) && (
            <div className="px-3 py-2 border-t border-stone-200 dark:border-stone-700 flex items-center justify-between gap-2">
              {showClearAll && (
                <Button
                  variant="ghost"
                  size="sm"
                  color="muted"
                  icon={X}
                  iconPosition="left"
                  onClick={handleClearAll}
                  disabled={activeFilterCount === 0}
                >
                  Clear All
                </Button>
              )}

              {showApplyButtons && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    color="muted"
                    onClick={() => {
                      setInternalIsOpen(false)
                      onOpenChange?.(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="solid"
                    size="sm"
                    color={color as "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "default"}
                    onClick={() => {
                      setInternalIsOpen(false) 
                      onOpenChange?.(false)
                    }}
                  >
                    Apply ({activeFilterCount})
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

FilterMenu.displayName = "FilterMenu"