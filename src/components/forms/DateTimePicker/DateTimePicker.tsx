import React, { useState, useCallback, useMemo, useRef, useEffect } from "react"
import { Calendar as CalendarIcon, Clock, ChevronDown, X } from "lucide-react"
import type { DateTimePickerProps, DateTimePickerVariant } from "./types"
import { Calendar } from "./Calendar"
import { TimeGrid } from "./TimeGrid"
import { Button } from "../Button/Button"
import { cn } from "../../../utils/cn.js"
import { getColorClassesWithLuminance } from "../../../utils/colors"
import { containerResponsiveUI } from "../../../utils/containerFonts"

const sizeClasses = {
  xs: `px-2 py-1 ${containerResponsiveUI.button.sm}`,
  sm: `px-3 py-1.5 ${containerResponsiveUI.button.sm}`,
  md: `px-4 py-2 ${containerResponsiveUI.button.md}`,
  lg: `px-6 py-2.5 ${containerResponsiveUI.button.lg}`,
  xl: `px-8 py-3 ${containerResponsiveUI.button.lg}`,
}

const appearanceClasses = {
  solid: "border border-stone-300 bg-white shadow-sm",
  outline: "border-2 border-stone-300 bg-transparent shadow-sm",
  ghost: "border border-transparent bg-transparent hover:border-stone-200 hover:bg-stone-50",
  soft: "border border-stone-200 bg-stone-50",
}

/**
 * Format date/time value based on variant
 */
const formatValue = (
  date: Date | null,
  variant: DateTimePickerVariant = "date",
  customFormatter?: (date: Date, variant: DateTimePickerVariant) => string
): string => {
  if (!date) return ""
  
  if (customFormatter) {
    return customFormatter(date, variant)
  }
  
  const dateStr = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
  
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  })
  
  switch (variant) {
    case "date":
      return dateStr
    case "time":
      return timeStr
    case "datetime":
      return `${dateStr} ${timeStr}`
    default:
      return dateStr
  }
}

/**
 * Get icon for the picker variant
 */
const getVariantIcon = (variant: DateTimePickerVariant) => {
  switch (variant) {
    case "time":
      return Clock
    case "date":
    case "datetime":
    default:
      return CalendarIcon
  }
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  defaultValue,
  onChange,
  variant = "date",
  size = "md",
  appearance = "solid",
  color = "primary",
  disabled = false,
  placeholder,
  className,
  minDate,
  maxDate,
  formatValue: customFormatValue,
  error = false,
  helperText,
  required = false,
  datePickerProps = {},
  timePickerProps = {},
  "aria-label": ariaLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue || null)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  
  // Use controlled value if provided, otherwise use internal state
  const currentValue = value !== undefined ? value : internalValue
  
  const handleValueChange = useCallback((newValue: Date | null) => {
    if (value === undefined) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }, [value, onChange])

  const handleDateChange = useCallback((date: Date | null) => {
    if (!date) {
      handleValueChange(null)
      return
    }
    
    if (variant === "date") {
      handleValueChange(date)
      setIsOpen(false)
    } else if (variant === "datetime") {
      // Preserve time if it exists
      if (currentValue) {
        const newDate = new Date(date)
        newDate.setHours(currentValue.getHours(), currentValue.getMinutes(), 0, 0)
        handleValueChange(newDate)
      } else {
        handleValueChange(date)
      }
    }
  }, [variant, currentValue, handleValueChange])

  const handleTimeChange = useCallback((time: Date | null) => {
    if (!time) {
      handleValueChange(null)
      return
    }
    
    if (variant === "time") {
      handleValueChange(time)
      setIsOpen(false)
    } else if (variant === "datetime") {
      // Preserve date if it exists
      if (currentValue) {
        const newDate = new Date(currentValue)
        newDate.setHours(time.getHours(), time.getMinutes(), 0, 0)
        handleValueChange(newDate)
      } else {
        // Use today's date with selected time
        const today = new Date()
        today.setHours(time.getHours(), time.getMinutes(), 0, 0)
        handleValueChange(today)
      }
    }
  }, [variant, currentValue, handleValueChange])

  const handleClear = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation()
    handleValueChange(null)
  }, [handleValueChange])

  const handleTriggerClick = useCallback(() => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }, [disabled, isOpen])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const displayValue = useMemo(() => 
    formatValue(currentValue, variant, customFormatValue),
    [currentValue, variant, customFormatValue]
  )

  const VariantIcon = getVariantIcon(variant)
  const colorClasses = getColorClassesWithLuminance(color, appearance === "solid" ? "solid" : "soft")

  const inputClasses = cn(
    "flex items-center justify-between w-full cursor-pointer",
    "rounded-sm transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "text-stone-900", // Ensure readable text color
    sizeClasses[size],
    appearanceClasses[appearance],
    
    // Only apply color classes for solid appearance to avoid text readability issues
    appearance === "solid" && colorClasses,
    
    // Error state
    error && "border-red-500 focus:ring-red-400",
    
    className
  )

  const renderPicker = () => {
    const showDate = variant === "date" || variant === "datetime"
    const showTime = variant === "time" || variant === "datetime"
    
    return (
      <div className="absolute top-full left-0 z-[9999] mt-1 p-0 bg-white border border-stone-200 rounded-sm shadow-lg">
        <div className={cn(
          "flex",
          variant === "datetime" && "divide-x divide-stone-200"
        )}>
          {/* Date picker */}
          {showDate && (
            <Calendar
              value={currentValue}
              onChange={handleDateChange}
              color={color}
              size={size}
              minDate={minDate}
              maxDate={maxDate}
              className="border-0 shadow-none"
              {...datePickerProps}
            />
          )}
          
          {/* Time picker */}
          {showTime && (
            <TimeGrid
              value={currentValue}
              onChange={handleTimeChange}
              color={color}
              size={size}
              className="border-0 shadow-none"
              {...timePickerProps}
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative">
        <button
          ref={triggerRef}
          type="button"
          onClick={handleTriggerClick}
          disabled={disabled}
          className={inputClasses}
          aria-label={ariaLabel || `Select ${variant}`}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-required={required}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <VariantIcon className="w-4 h-4 text-stone-500 flex-shrink-0" />
            <span className={cn(
              "truncate",
              !displayValue && "text-stone-500"
            )}>
              {displayValue || placeholder || `Select ${variant}...`}
            </span>
          </div>
          
          <div className="flex items-center gap-1 flex-shrink-0">
            {currentValue && !disabled && (
              <Button
                variant="ghost"
                size="xs"
                onClick={handleClear}
                icon={X}
                aria-label="Clear selection"
                className="p-0.5 min-w-0 h-auto"
              />
            )}
            <ChevronDown className={cn(
              "w-4 h-4 text-stone-500 transition-transform duration-200",
              isOpen && "rotate-180"
            )} />
          </div>
        </button>

        {isOpen && !disabled && renderPicker()}
      </div>
      
      {/* Helper text */}
      {helperText && (
        <div className={cn(
          "mt-1 text-xs",
          error ? "text-red-600" : "text-stone-600"
        )}>
          {helperText}
        </div>
      )}
    </div>
  )
}