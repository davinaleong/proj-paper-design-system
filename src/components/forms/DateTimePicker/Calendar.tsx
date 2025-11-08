import React, { useMemo, useCallback } from "react"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react"
import type { CalendarProps, CalendarCell, CalendarView } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/colors"
import { containerResponsiveUI } from "../../../utils/containerFonts"
import { Button } from "../Button/Button"

const sizeClasses = {
  xs: `${containerResponsiveUI.button.sm}`,
  sm: `${containerResponsiveUI.button.sm}`,
  md: `${containerResponsiveUI.button.md}`,
  lg: `${containerResponsiveUI.button.lg}`,
  xl: `${containerResponsiveUI.button.lg}`,
}

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

/**
 * Get the days of the week starting with the specified first day
 */
const getDaysOfWeek = (firstDayOfWeek: number = 0): string[] => {
  const days = [...DAYS_OF_WEEK]
  return [...days.slice(firstDayOfWeek), ...days.slice(0, firstDayOfWeek)]
}

/**
 * Get calendar cells for the current month view
 */
const getCalendarCells = (
  displayDate: Date,
  selectedDate: Date | null,
  firstDayOfWeek: number = 0,
  isDateDisabled?: (date: Date) => boolean
): CalendarCell[] => {
  const cells: CalendarCell[] = []
  const today = new Date()
  const year = displayDate.getFullYear()
  const month = displayDate.getMonth()
  
  // First day of the month
  const firstDay = new Date(year, month, 1)
  
  // Calculate starting date (may be from previous month)
  const startDate = new Date(firstDay)
  const dayOfWeek = (firstDay.getDay() - firstDayOfWeek + 7) % 7
  startDate.setDate(firstDay.getDate() - dayOfWeek)
  
  // Generate 42 cells (6 weeks × 7 days)
  for (let i = 0; i < 42; i++) {
    const cellDate = new Date(startDate)
    cellDate.setDate(startDate.getDate() + i)
    
    const isCurrentMonth = cellDate.getMonth() === month
    const isToday = cellDate.toDateString() === today.toDateString()
    const isSelected = selectedDate ? cellDate.toDateString() === selectedDate.toDateString() : false
    const isDisabled = isDateDisabled ? isDateDisabled(cellDate) : false
    const isPrevMonth = cellDate.getMonth() < month || (cellDate.getMonth() === 11 && month === 0)
    const isNextMonth = cellDate.getMonth() > month || (cellDate.getMonth() === 0 && month === 11)
    
    cells.push({
      date: cellDate,
      isCurrentMonth,
      isToday,
      isSelected,
      isDisabled,
      isPrevMonth,
      isNextMonth,
    })
  }
  
  return cells
}

/**
 * Get months grid for year view
 */
const getMonthsGrid = (displayDate: Date, selectedDate: Date | null): { month: number; name: string; isSelected: boolean; isCurrent: boolean }[] => {
  const year = displayDate.getFullYear()
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()
  const selectedMonth = selectedDate?.getMonth()
  const selectedYear = selectedDate?.getFullYear()
  
  return MONTHS.map((name, month) => ({
    month,
    name,
    isSelected: selectedYear === year && selectedMonth === month,
    isCurrent: currentYear === year && currentMonth === month
  }))
}

/**
 * Get years grid for decade view
 */
const getYearsGrid = (displayDate: Date, selectedDate: Date | null): { year: number; isSelected: boolean; isCurrent: boolean }[] => {
  const currentYear = displayDate.getFullYear()
  const startYear = Math.floor(currentYear / 10) * 10
  const today = new Date()
  const todayYear = today.getFullYear()
  const selectedYear = selectedDate?.getFullYear()
  
  const years = []
  for (let i = startYear; i < startYear + 12; i++) {
    years.push({
      year: i,
      isSelected: selectedYear === i,
      isCurrent: todayYear === i
    })
  }
  
  return years
}

/**
 * Get decades grid for decade navigation
 */
const getDecadesGrid = (displayDate: Date): { decade: string; startYear: number; isActive: boolean }[] => {
  const currentYear = displayDate.getFullYear()
  const currentDecade = Math.floor(currentYear / 10) * 10
  const startDecade = Math.floor(currentDecade / 100) * 100
  
  const decades = []
  for (let i = startDecade; i < startDecade + 100; i += 10) {
    decades.push({
      decade: `${i}-${i + 9}`,
      startYear: i,
      isActive: i === currentDecade
    })
  }
  
  return decades
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  view = "day",
  onViewChange,
  firstDayOfWeek = 0,
  showTodayButton = true,
  todayButtonText = "Today",
  renderCell,
  isDateDisabled,
  color = "primary",
  size = "md",
  className,
}) => {
  const [displayDate, setDisplayDate] = React.useState(() => value || new Date())
  const [currentView, setCurrentView] = React.useState<CalendarView>(view)

  const handleViewChange = useCallback((newView: CalendarView) => {
    setCurrentView(newView)
    onViewChange?.(newView)
  }, [onViewChange])

  const handleDateSelect = useCallback((date: Date) => {
    if (isDateDisabled?.(date)) return
    onChange?.(date)
  }, [onChange, isDateDisabled])

  const handleTodayClick = useCallback(() => {
    const today = new Date()
    setDisplayDate(today)
    onChange?.(today)
  }, [onChange])

  const navigateMonth = useCallback((direction: "prev" | "next") => {
    setDisplayDate(prev => {
      const newDate = new Date(prev)
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1))
      return newDate
    })
  }, [])

  const navigateYear = useCallback((direction: "prev" | "next") => {
    setDisplayDate(prev => {
      const newDate = new Date(prev)
      newDate.setFullYear(prev.getFullYear() + (direction === "next" ? 1 : -1))
      return newDate
    })
  }, [])

  const navigateDecade = useCallback((direction: "prev" | "next") => {
    setDisplayDate(prev => {
      const newDate = new Date(prev)
      newDate.setFullYear(prev.getFullYear() + (direction === "next" ? 10 : -10))
      return newDate
    })
  }, [])

  const calendarCells = useMemo(() => 
    getCalendarCells(displayDate, value ?? null, firstDayOfWeek, isDateDisabled),
    [displayDate, value, firstDayOfWeek, isDateDisabled]
  )

  const monthsGrid = useMemo(() => 
    getMonthsGrid(displayDate, value ?? null),
    [displayDate, value]
  )

  const yearsGrid = useMemo(() => 
    getYearsGrid(displayDate, value ?? null),
    [displayDate, value]
  )

  const decadesGrid = useMemo(() => 
    getDecadesGrid(displayDate),
    [displayDate]
  )

  const daysOfWeek = useMemo(() => 
    getDaysOfWeek(firstDayOfWeek),
    [firstDayOfWeek]
  )

  const getHeaderTitle = () => {
    const year = displayDate.getFullYear()
    const month = displayDate.getMonth()
    
    switch (currentView) {
      case "day":
        return `${MONTHS[month]} ${year}`
      case "month":
        return `${year}`
      case "year": {
        const startYear = Math.floor(year / 10) * 10
        return `${startYear}-${startYear + 9}`
      }
      case "decade": {
        const startDecade = Math.floor(year / 100) * 100
        return `${startDecade}-${startDecade + 99}`
      }
      default:
        return ""
    }
  }

  const handleHeaderClick = () => {
    switch (currentView) {
      case "day":
        handleViewChange("month")
        break
      case "month":
        handleViewChange("year")
        break
      case "year":
        handleViewChange("decade")
        break
    }
  }

  const handleNavigation = (direction: "prev" | "next") => {
    switch (currentView) {
      case "day":
        navigateMonth(direction)
        break
      case "month":
        navigateYear(direction)
        break
      case "year":
      case "decade":
        navigateDecade(direction)
        break
    }
  }

  const colorClasses = getColorClassesWithLuminance(color, "soft")

  const renderDayView = () => (
    <>
      {/* Days of week header */}
      <div className="grid grid-cols-7 mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className={cn(
              "p-2 text-center font-medium text-stone-600",
              sizeClasses[size]
            )}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarCells.map((cell, index) => {
          const cellContent = renderCell ? renderCell(cell) : cell.date.getDate()
          
          return (
            <button
              key={index}
              onClick={() => handleDateSelect(cell.date)}
              disabled={cell.isDisabled}
              className={cn(
                "aspect-square p-1 text-center rounded-sm transition-all duration-150 z-10",
                "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
                "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent",
                sizeClasses[size],
                
                // Current month styling
                cell.isCurrentMonth ? "text-stone-900" : "text-stone-400",
                
                // Today styling
                cell.isToday && !cell.isSelected && "bg-stone-200 font-semibold",
                
                // Selected styling
                cell.isSelected && cn(
                  "font-semibold",
                  colorClasses
                ),
                
                // Hover for non-selected
                !cell.isSelected && cell.isCurrentMonth && "hover:bg-stone-100"
              )}
            >
              {cellContent}
            </button>
          )
        })}
      </div>
    </>
  )

  const renderMonthView = () => (
    <div className="grid grid-cols-3 gap-2">
      {monthsGrid.map(({ month, name, isSelected, isCurrent }) => (
        <button
          key={month}
          onClick={() => {
            const newDate = new Date(displayDate)
            newDate.setMonth(month)
            setDisplayDate(newDate)
            handleViewChange("day")
          }}
          className={cn(
            "p-3 text-center rounded-sm transition-all duration-150",
            "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
            sizeClasses[size],
            
            isCurrent && !isSelected && "bg-stone-200 font-semibold",
            isSelected && cn("font-semibold", colorClasses)
          )}
        >
          {name}
        </button>
      ))}
    </div>
  )

  const renderYearView = () => (
    <div className="grid grid-cols-3 gap-2">
      {yearsGrid.map(({ year, isSelected, isCurrent }) => (
        <button
          key={year}
          onClick={() => {
            const newDate = new Date(displayDate)
            newDate.setFullYear(year)
            setDisplayDate(newDate)
            handleViewChange("month")
          }}
          className={cn(
            "p-3 text-center rounded-sm transition-all duration-150",
            "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
            sizeClasses[size],
            
            isCurrent && !isSelected && "bg-stone-200 font-semibold",
            isSelected && cn("font-semibold", colorClasses)
          )}
        >
          {year}
        </button>
      ))}
    </div>
  )

  const renderDecadeView = () => (
    <div className="grid grid-cols-2 gap-2">
      {decadesGrid.map(({ decade, startYear, isActive }) => (
        <button
          key={startYear}
          onClick={() => {
            const newDate = new Date(displayDate)
            newDate.setFullYear(startYear)
            setDisplayDate(newDate)
            handleViewChange("year")
          }}
          className={cn(
            "p-3 text-center rounded-sm transition-all duration-150",
            "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
            sizeClasses[size],
            
            isActive && cn("font-semibold", colorClasses)
          )}
        >
          {decade}
        </button>
      ))}
    </div>
  )

  return (
    <div className={cn(
      "bg-paper-50 border border-stone-200 rounded-sm shadow-sm p-4",
      "w-fit max-w-sm",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleNavigation("prev")}
          icon={ChevronLeft}
          aria-label="Previous"
        />
        
        <button
          onClick={handleHeaderClick}
          className={cn(
            "font-semibold px-2 py-1 rounded-sm transition-colors",
            "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
            sizeClasses[size]
          )}
        >
          {getHeaderTitle()}
        </button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleNavigation("next")}
          icon={ChevronRight}
          aria-label="Next"
        />
      </div>

      {/* Calendar content */}
      <div className="mb-4">
        {currentView === "day" && renderDayView()}
        {currentView === "month" && renderMonthView()}
        {currentView === "year" && renderYearView()}
        {currentView === "decade" && renderDecadeView()}
      </div>

      {/* Footer with today button */}
      {showTodayButton && (
        <div className="flex justify-center pt-2 border-t border-stone-200">
          <Button
            variant="outline"
            size="sm"
            onClick={handleTodayClick}
            icon={CalendarIcon}
            color="secondary"
          >
            {todayButtonText}
          </Button>
        </div>
      )}
    </div>
  )
}