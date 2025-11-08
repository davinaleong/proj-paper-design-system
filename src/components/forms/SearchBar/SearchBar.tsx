import { forwardRef } from "react"
import { Search, X } from "lucide-react"
import type { SearchBarProps } from "./types"
import { cn } from "../../../utils/cn.js"
import { containerResponsiveUI } from "../../../utils/containerFonts"

const sizeClasses = {
  sm: `px-3 py-1.5 ${containerResponsiveUI.input.sm}`,
  md: `px-3 py-2 ${containerResponsiveUI.input.md}`,
  lg: `px-4 py-2.5 ${containerResponsiveUI.input.lg}`,
}

const iconSizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-5 h-5",
}

const textAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
}

const iconPaddingClasses = {
  sm: {
    left: "pl-9",
    right: "pr-9",
    both: "pl-9 pr-9",
  },
  md: {
    left: "pl-10",
    right: "pr-10",
    both: "pl-10 pr-10",
  },
  lg: {
    left: "pl-11",
    right: "pr-11",
    both: "pl-11 pr-11",
  },
}

const widthClasses = {
  fixed: "min-w-64", // Recommended min-width for fixed
  flexible: "w-full", // Spans entire parent
}

const baseSearchClasses = [
  "rounded-sm", // Paper theme consistency
  "border",
  "bg-white",
  "transition-all",
  "duration-200",
  "placeholder-stone-400",
  "disabled:opacity-50",
  "disabled:cursor-not-allowed",
  "disabled:bg-stone-50",
  // Remove default search input styling
  "[&::-webkit-search-cancel-button]:appearance-none",
  "[&::-webkit-search-decoration]:appearance-none",
  "[&::-webkit-search-results-button]:appearance-none",
  "[&::-webkit-search-results-decoration]:appearance-none",
]

const readonlyClasses = [
  "bg-stone-50/50",
  "cursor-default",
  "focus:ring-0",
  "focus:border-stone-200/60",
  "hover:border-stone-200/60",
]

const variantClasses = {
  default: [
    "border-stone-200/60",
    "focus:border-stone-400",
    "focus:ring-1",
    "focus:ring-stone-200",
    "hover:border-stone-300",
  ],
  filled: [
    "border-stone-200/60",
    "bg-stone-50",
    "focus:bg-white",
    "focus:border-stone-400",
    "focus:ring-1",
    "focus:ring-stone-200",
    "hover:border-stone-300",
  ],
  outlined: [
    "border-2",
    "border-stone-300",
    "focus:border-stone-500",
    "hover:border-stone-400",
  ],
}

const errorClasses = [
  "border-red-300",
  "focus:border-red-500",
  "focus:ring-red-200",
  "hover:border-red-400",
]

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value,
      defaultValue,
      placeholder = "Search...",
      variant = "default",
      size = "md",
      width = "flexible",
      disabled = false,
      readonly = false,
      required = false,
      error = false,
      errorMessage,
      helperText,
      label,
      labelAlign = "left",
      messageAlign = "left",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      hideSearchIcon = false,
      onSearch,
      onChange,
      onFocus,
      onBlur,
      onClear,
      showClearButton = true,
      className,
      name,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || name
    const hasError = error || !!errorMessage
    const helpText = errorMessage || helperText
    const hasValue = value || defaultValue

    // Determine which icons to show
    const showLeftIcon = !hideSearchIcon || LeftIcon
    const showRightIcon = RightIcon || (showClearButton && hasValue && !disabled && !readonly)
    const EffectiveLeftIcon = LeftIcon || (!hideSearchIcon ? Search : undefined)

    const searchClasses = cn(
      baseSearchClasses,
      sizeClasses[size],
      variantClasses[variant],
      widthClasses[width],
      hasError && errorClasses,
      readonly && readonlyClasses,
      showLeftIcon && iconPaddingClasses[size].left,
      showRightIcon && iconPaddingClasses[size].right,
      showLeftIcon && showRightIcon && iconPaddingClasses[size].both,
      className
    )

    const iconClasses = iconSizeClasses[size]

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && onSearch) {
        event.preventDefault()
        onSearch(event.currentTarget.value)
      }
    }

    const handleClear = () => {
      if (onClear) {
        onClear()
      }
    }

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block",
              containerResponsiveUI.label,
              "text-stone-700",
              textAlignClasses[labelAlign]
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {showLeftIcon && EffectiveLeftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
              <EffectiveLeftIcon className={iconClasses} />
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type="search"
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            className={searchClasses}
            {...props}
          />

          {showRightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">
              {RightIcon ? (
                <RightIcon className={iconClasses} />
              ) : showClearButton && hasValue && !disabled && !readonly ? (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center justify-center hover:text-stone-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className={iconClasses} />
                </button>
              ) : null}
            </div>
          )}
        </div>

        {helpText && (
          <p
            className={cn(
              containerResponsiveUI.helper,
              hasError ? "text-red-600" : "text-stone-500",
              textAlignClasses[messageAlign]
            )}
          >
            {helpText}
          </p>
        )}
      </div>
    )
  }
)

SearchBar.displayName = "SearchBar"