"use client"

import React, { useState } from "react"
import { Sun, Moon, Palette, Monitor } from "lucide-react"
import type { ThemeToggleProps, ThemeToggleOption, ThemeToggleMode } from "./types"
import type { IconButtonVariant } from "../../forms/IconButton/types"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { Typography } from "../../core/Typography"
import { Tooltip } from "../../data-display/Tooltip"
import { cn } from "../../../utils/cn"

// Default theme options
const defaultThemeOptions: ThemeToggleOption[] = [
  {
    id: "light",
    mode: "light",
    label: "Light",
    icon: Sun,
    description: "Light theme with bright colors"
  },
  {
    id: "dark", 
    mode: "dark",
    label: "Dark",
    icon: Moon,
    description: "Dark theme with muted colors"
  },
  {
    id: "paper",
    mode: "paper", 
    label: "Paper",
    icon: Palette,
    description: "Warm paper theme with cream background"
  },
  {
    id: "auto",
    mode: "auto",
    label: "Auto",
    icon: Monitor,
    description: "Follow system preference"
  }
]

const sizeClasses = {
  xs: "gap-1",
  sm: "gap-1.5", 
  md: "gap-2",
  lg: "gap-2.5",
  xl: "gap-3"
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  value,
  defaultValue = "paper",
  options = defaultThemeOptions.slice(0, 3), // Default to light, dark, paper
  variant = "buttons",
  size = "sm",
  buttonVariant = "ghost",
  color = "primary",
  disabled = false,
  showLabels = false,
  showTooltips = true,
  orientation = "horizontal",
  compact = false,
  label,
  helperText,
  onChange,
  prefixContent,
  suffixContent,
  className,
  containerClassName,
  buttonClassName,
}) => {
  const [internalValue, setInternalValue] = useState<ThemeToggleMode>(defaultValue)
  const currentValue = value ?? internalValue

  const handleChange = (mode: ThemeToggleMode) => {
    if (disabled) return
    
    if (onChange) {
      onChange(mode)
    } else {
      setInternalValue(mode)
    }
  }

  const renderButtonToggle = () => {
    const containerClasses = cn(
      "flex items-center",
      orientation === "vertical" ? "flex-col" : "flex-row",
      sizeClasses[size],
      compact && "gap-1",
      containerClassName
    )

    return (
      <div className={containerClasses}>
        {prefixContent}
        
        {options.map((option) => {
          const isActive = currentValue === option.mode
          
          let button: React.ReactElement

          if (showLabels) {
            button = (
              <Button
                key={option.id}
                variant={isActive ? "solid" : buttonVariant}
                color={isActive ? color : "default"}
                size={size}
                icon={option.icon}
                disabled={disabled || option.disabled}
                onClick={() => handleChange(option.mode)}
                className={cn(buttonClassName)}
                aria-label={option.description || `Switch to ${option.label} theme`}
              >
                {option.label}
              </Button>
            )
          } else {
            // Map Button variant to IconButton variant
            const iconButtonVariant: IconButtonVariant = buttonVariant === "link" ? "ghost" : 
              (buttonVariant as IconButtonVariant)
            
            button = (
              <IconButton
                key={option.id}
                variant={isActive ? "solid" : iconButtonVariant}
                color={isActive ? color : "default"}
                size={size}
                icon={option.icon}
                disabled={disabled || option.disabled}
                onClick={() => handleChange(option.mode)}
                className={cn(buttonClassName)}
                aria-label={option.description || `Switch to ${option.label} theme`}
              />
            )
          }

          // Wrap with tooltip if enabled and not showing labels
          if (showTooltips && !showLabels && !disabled && !option.disabled) {
            return (
              <Tooltip
                key={option.id}
                content={
                  <div className="text-center">
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-xs opacity-80 mt-1">{option.description}</div>
                    )}
                  </div>
                }
                position="bottom"
              >
                {button}
              </Tooltip>
            )
          }

          return button
        })}
        
        {suffixContent}
      </div>
    )
  }

  const renderSegmentedToggle = () => {
    const containerClasses = cn(
      "inline-flex items-center bg-stone-100 rounded-md p-1",
      orientation === "vertical" ? "flex-col" : "flex-row",
      compact && "p-0.5",
      disabled && "opacity-50 cursor-not-allowed",
      containerClassName
    )

    return (
      <div className={containerClasses}>
        {prefixContent}
        
        {options.map((option, index) => {
          const isActive = currentValue === option.mode
          const isFirst = index === 0
          const isLast = index === options.length - 1
          
          const buttonClasses = cn(
            "relative flex items-center justify-center px-3 py-1.5 text-sm font-medium transition-all",
            "focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-1",
            size === "xs" && "px-2 py-1 text-xs",
            size === "sm" && "px-3 py-1.5 text-sm", 
            size === "md" && "px-4 py-2 text-sm",
            size === "lg" && "px-5 py-2.5 text-base",
            size === "xl" && "px-6 py-3 text-base",
            orientation === "horizontal" && [
              isFirst && "rounded-l-sm",
              isLast && "rounded-r-sm"
            ],
            orientation === "vertical" && [
              isFirst && "rounded-t-sm",
              isLast && "rounded-b-sm"
            ],
            isActive ? [
              "bg-white text-stone-900 shadow-sm",
              "border border-stone-200"
            ] : [
              "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
            ],
            (disabled || option.disabled) && "cursor-not-allowed opacity-50",
            compact && "px-2 py-1",
            buttonClassName
          )

          const content = (
            <button
              key={option.id}
              type="button"
              className={buttonClasses}
              disabled={disabled || option.disabled}
              onClick={() => handleChange(option.mode)}
              aria-label={option.description || `Switch to ${option.label} theme`}
            >
              <option.icon className={cn(
                "flex-shrink-0",
                size === "xs" && "w-3 h-3",
                size === "sm" && "w-4 h-4", 
                size === "md" && "w-4 h-4",
                size === "lg" && "w-5 h-5",
                size === "xl" && "w-5 h-5",
                showLabels && "mr-2"
              )} />
              {showLabels && <span>{option.label}</span>}
            </button>
          )

          // Wrap with tooltip if enabled and not showing labels
          if (showTooltips && !showLabels && !disabled && !option.disabled) {
            return (
              <Tooltip
                key={option.id}
                content={
                  <div className="text-center">
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-xs opacity-80 mt-1">{option.description}</div>
                    )}
                  </div>
                }
                position="bottom"
              >
                {content}
              </Tooltip>
            )
          }

          return content
        })}
        
        {suffixContent}
      </div>  
    )
  }

  const renderDropdownToggle = () => {
    // For now, we'll implement this as a simple button that cycles through options
    const currentOption = options.find(opt => opt.mode === currentValue) || options[0]
    const nextOption = options[(options.indexOf(currentOption) + 1) % options.length]

    // Map Button variant to IconButton variant
    const iconButtonVariant: IconButtonVariant = buttonVariant === "link" ? "ghost" : 
      (buttonVariant as IconButtonVariant)

    const button = (
      <IconButton
        icon={currentOption.icon}
        variant={iconButtonVariant}
        color={color}
        size={size}
        disabled={disabled}
        onClick={() => handleChange(nextOption.mode)}
        className={cn(buttonClassName)}
        aria-label={`Current: ${currentOption.label}. Click to switch to ${nextOption.label}`}
      />
    )

    if (showTooltips && !disabled) {
      return (
        <Tooltip
          content={
            <div className="text-center">
              <div className="font-medium">Theme: {currentOption.label}</div>
              <div className="text-xs opacity-80 mt-1">
                Click to switch to {nextOption.label}
              </div>
            </div>
          }
          position="bottom"
        >
          {button}
        </Tooltip>
      )
    }

    return button
  }

  const renderToggle = () => {
    switch (variant) {
      case "dropdown":
        return renderDropdownToggle()
      case "segmented":
        return renderSegmentedToggle()
      case "buttons":
      default:
        return renderButtonToggle()
    }
  }

  const hasLabel = label || helperText

  if (hasLabel) {
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        {label && (
          <Typography variant="bodySmall" className="font-medium text-stone-700">
            {label}
          </Typography>
        )}
        {renderToggle()}
        {helperText && (
          <Typography variant="caption" className="text-stone-500">
            {helperText}
          </Typography>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {renderToggle()}
    </div>
  )
}

ThemeToggle.displayName = "ThemeToggle"