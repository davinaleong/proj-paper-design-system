import React, { useMemo, useCallback } from "react"
import { Clock } from "lucide-react"
import type { TimeGridProps, TimeOption, HourFormat, TimeInterval } from "./types"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/color"
import { containerResponsiveUI } from "../../../utils/containerFonts"
import { Button } from "../Button/Button"

const sizeClasses = {
  xs: `${containerResponsiveUI.button.sm}`,
  sm: `${containerResponsiveUI.button.sm}`,
  md: `${containerResponsiveUI.button.md}`,
  lg: `${containerResponsiveUI.button.lg}`,
  xl: `${containerResponsiveUI.button.lg}`,
}

/**
 * Generate time options based on hour format and interval
 */
const generateTimeOptions = (
  hourFormat: HourFormat = "12h",
  interval: TimeInterval = 15
): TimeOption[] => {
  const options: TimeOption[] = []
  const is12Hour = hourFormat === "12h"
  
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const date = new Date()
      date.setHours(hour, minute, 0, 0)
      
      let displayHour = hour
      let period: "AM" | "PM" | undefined
      
      if (is12Hour) {
        period = hour < 12 ? "AM" : "PM"
        displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
      }
      
      const hourStr = displayHour.toString().padStart(is12Hour ? 1 : 2, "0")
      const minuteStr = minute.toString().padStart(2, "0")
      const timeStr = `${hourStr}:${minuteStr}`
      
      options.push({
        hour,
        minute,
        period,
        display: is12Hour ? `${timeStr} ${period}` : timeStr,
        value: `${hour.toString().padStart(2, "0")}:${minuteStr}`
      })
    }
  }
  
  return options
}

/**
 * Get the closest time option to the current time
 */
const getClosestTimeOption = (
  options: TimeOption[],
  interval: TimeInterval
): TimeOption => {
  const now = new Date()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  
  // Round to nearest interval
  const roundedMinutes = Math.round(currentMinutes / interval) * interval
  const roundedHour = Math.floor(roundedMinutes / 60) % 24
  const roundedMinute = roundedMinutes % 60
  
  // Find the option that matches the rounded time
  const closestOption = options.find(
    option => option.hour === roundedHour && option.minute === roundedMinute
  )
  
  return closestOption || options[0]
}

/**
 * Format time value for display
 */
const formatTimeValue = (date: Date | null, hourFormat: HourFormat = "12h"): string => {
  if (!date) return ""
  
  const hour = date.getHours()
  const minute = date.getMinutes()
  const minuteStr = minute.toString().padStart(2, "0")
  
  if (hourFormat === "12h") {
    const period = hour < 12 ? "AM" : "PM"
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minuteStr} ${period}`
  }
  
  return `${hour.toString().padStart(2, "0")}:${minuteStr}`
}

export const TimeGrid: React.FC<TimeGridProps> = ({
  value,
  onChange,
  hourFormat = "12h",
  interval = 15,
  showNowButton = true,
  nowButtonText = "Now",
  color = "primary",
  size = "md",
  className,
}) => {
  const timeOptions = useMemo(() => 
    generateTimeOptions(hourFormat, interval),
    [hourFormat, interval]
  )

  const selectedValue = useMemo(() => {
    if (!value) return null
    return formatTimeValue(value, hourFormat)
  }, [value, hourFormat])

  const handleTimeSelect = useCallback((option: TimeOption) => {
    const newDate = new Date()
    newDate.setHours(option.hour, option.minute, 0, 0)
    onChange?.(newDate)
  }, [onChange])

  const handleNowClick = useCallback(() => {
    const closestOption = getClosestTimeOption(timeOptions, interval)
    handleTimeSelect(closestOption)
  }, [timeOptions, interval, handleTimeSelect])

  const colorClasses = getColorClassesWithLuminance(color, "soft")

  const timeGroups = useMemo(() => {
    const groups: { period?: string; options: TimeOption[] }[] = []
    
    if (hourFormat === "12h") {
      const amOptions = timeOptions.filter(option => option.period === "AM")
      const pmOptions = timeOptions.filter(option => option.period === "PM")
      
      groups.push(
        { period: "AM", options: amOptions },
        { period: "PM", options: pmOptions }
      )
    } else {
      groups.push({ options: timeOptions })
    }
    
    return groups
  }, [timeOptions, hourFormat])

  return (
    <div className={cn(
      "bg-paper-50 border border-stone-200 rounded-sm shadow-sm",
      "w-fit max-w-sm",
      className
    )}>
      {/* Header with Now button */}
      {showNowButton && (
        <div className="p-3 border-b border-stone-200">
          <Button
            variant="outline"
            size="sm"
            onClick={handleNowClick}
            icon={Clock}
            color="secondary"
            className="w-full"
          >
            {nowButtonText}
          </Button>
        </div>
      )}

      {/* Time options */}
      <div className="max-h-64 overflow-y-auto p-2">
        {timeGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-4 last:mb-0">
            {/* Period header for 12h format */}
            {group.period && (
              <div className={cn(
                "text-center font-semibold text-stone-600 mb-2 py-1",
                sizeClasses[size]
              )}>
                {group.period}
              </div>
            )}
            
            {/* Time options grid */}
            <div className="grid grid-cols-3 gap-1">
              {group.options.map((option) => {
                const isSelected = selectedValue === option.display
                
                return (
                  <button
                    key={option.value}
                    onClick={() => handleTimeSelect(option)}
                    className={cn(
                      "p-2 text-center rounded-sm transition-all duration-150",
                      "hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-400",
                      sizeClasses[size],
                      
                      // Selected styling
                      isSelected && cn(
                        "font-semibold",
                        colorClasses
                      ),
                      
                      // Default styling
                      !isSelected && "text-stone-700 hover:bg-stone-100"
                    )}
                  >
                    {hourFormat === "12h" ? 
                      option.display.replace(` ${option.period}`, "") : 
                      option.display
                    }
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
