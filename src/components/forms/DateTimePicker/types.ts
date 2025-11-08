import type { ReactNode } from "react"
import type { ColorVariant } from "../../../utils/colors.js"

/**
 * Day of the week starting options
 */
export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = Sunday, 1 = Monday, etc.

/**
 * Hour format options
 */
export type HourFormat = "12h" | "24h"

/**
 * Time interval options for time picker
 */
export type TimeInterval = 5 | 10 | 15 | 30 | 60 // minutes

/**
 * DateTimePicker variants
 */
export type DateTimePickerVariant = "date" | "time" | "datetime"

/**
 * Appearance variants (following Button.tsx patterns)
 */
export type DateTimePickerAppearance = "solid" | "outline" | "ghost" | "soft"

/**
 * Size variants
 */
export type DateTimePickerSize = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Calendar view modes
 */
export type CalendarView = "day" | "month" | "year" | "decade"

/**
 * Date range for calendar navigation
 */
export interface DateRange {
  start: Date
  end: Date
}

/**
 * Calendar cell data
 */
export interface CalendarCell {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  isDisabled: boolean
  isPrevMonth: boolean
  isNextMonth: boolean
}

/**
 * Time option for time picker
 */
export interface TimeOption {
  hour: number
  minute: number
  period?: "AM" | "PM" // Only for 12h format
  display: string
  value: string // "HH:mm" format
}

/**
 * Base props shared across all picker components
 */
export interface BasePickerProps {
  /** Current selected value */
  value?: Date | null
  /** Default value (uncontrolled) */
  defaultValue?: Date | null
  /** Change handler */
  onChange?: (date: Date | null) => void
  /** Size variant */
  size?: DateTimePickerSize
  /** Appearance variant */
  appearance?: DateTimePickerAppearance
  /** Color variant */
  color?: ColorVariant
  /** Disabled state */
  disabled?: boolean
  /** Placeholder text */
  placeholder?: string
  /** Custom CSS classes */
  className?: string
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Custom date formatter */
  formatDate?: (date: Date) => string
  /** Error state */
  error?: boolean
  /** Helper text */
  helperText?: string
  /** Required state */
  required?: boolean
  /** Aria label */
  "aria-label"?: string
}

/**
 * Date picker specific props
 */
export interface DatePickerProps extends BasePickerProps {
  /** First day of the week (0 = Sunday, 1 = Monday, etc.) */
  firstDayOfWeek?: FirstDayOfWeek
  /** Show today button */
  showTodayButton?: boolean
  /** Today button text */
  todayButtonText?: string
  /** Custom calendar cell renderer */
  renderCell?: (cell: CalendarCell) => ReactNode
  /** Disabled dates predicate */
  isDateDisabled?: (date: Date) => boolean
  /** Show week numbers */
  showWeekNumbers?: boolean
}

/**
 * Time picker specific props
 */
export interface TimePickerProps extends BasePickerProps {
  /** Hour format */
  hourFormat?: HourFormat
  /** Time interval in minutes */
  interval?: TimeInterval
  /** Show now button */
  showNowButton?: boolean
  /** Now button text */
  nowButtonText?: string
  /** Custom time formatter */
  formatTime?: (date: Date) => string
  /** Time input step (for native time input fallback) */
  step?: number
}

/**
 * Main DateTimePicker component props
 */
export interface DateTimePickerProps extends BasePickerProps {
  /** Picker variant */
  variant?: DateTimePickerVariant
  /** Date picker props (when variant includes date) */
  datePickerProps?: Omit<DatePickerProps, keyof BasePickerProps>
  /** Time picker props (when variant includes time) */
  timePickerProps?: Omit<TimePickerProps, keyof BasePickerProps>
  /** Custom input formatter */
  formatValue?: (date: Date, variant: DateTimePickerVariant) => string
}

/**
 * Calendar component props
 */
export interface CalendarProps {
  /** Selected date */
  value?: Date | null
  /** Change handler */
  onChange?: (date: Date) => void
  /** Current view mode */
  view?: CalendarView
  /** View change handler */
  onViewChange?: (view: CalendarView) => void
  /** First day of the week */
  firstDayOfWeek?: FirstDayOfWeek
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Show today button */
  showTodayButton?: boolean
  /** Today button text */
  todayButtonText?: string
  /** Custom cell renderer */
  renderCell?: (cell: CalendarCell) => ReactNode
  /** Disabled dates predicate */
  isDateDisabled?: (date: Date) => boolean
  /** Show week numbers */
  showWeekNumbers?: boolean
  /** Color variant */
  color?: ColorVariant
  /** Size variant */
  size?: DateTimePickerSize
  /** Custom CSS classes */
  className?: string
}

/**
 * Time grid component props
 */
export interface TimeGridProps {
  /** Selected time */
  value?: Date | null
  /** Change handler */
  onChange?: (date: Date) => void
  /** Hour format */
  hourFormat?: HourFormat
  /** Time interval in minutes */
  interval?: TimeInterval
  /** Show now button */
  showNowButton?: boolean
  /** Now button text */
  nowButtonText?: string
  /** Minimum selectable time */
  minTime?: Date
  /** Maximum selectable time */
  maxTime?: Date
  /** Color variant */
  color?: ColorVariant
  /** Size variant */
  size?: DateTimePickerSize
  /** Custom CSS classes */
  className?: string
}

/**
 * Date/Time picker state for internal use
 */
export interface DateTimePickerState {
  isOpen: boolean
  view: CalendarView
  displayDate: Date // The date being displayed in calendar (may differ from selected)
  selectedDate: Date | null
  inputValue: string
}

/**
 * Calendar navigation actions
 */
export type CalendarAction = 
  | { type: "SET_VIEW"; view: CalendarView }
  | { type: "SET_DISPLAY_DATE"; date: Date }
  | { type: "SELECT_DATE"; date: Date | null }
  | { type: "GO_TO_TODAY" }
  | { type: "NAVIGATE_MONTH"; direction: "prev" | "next" }
  | { type: "NAVIGATE_YEAR"; direction: "prev" | "next" }
  | { type: "NAVIGATE_DECADE"; direction: "prev" | "next" }
  | { type: "SET_INPUT_VALUE"; value: string }
  | { type: "TOGGLE_OPEN" }
  | { type: "CLOSE" }