import React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "../../../utils/cn"
import { Icon } from "../../core"
import type { StatisticProps } from "./types"

const variantStyles = {
  default: "text-stone-700",
  success: "text-green-700",
  warning: "text-amber-700", 
  error: "text-red-700",
  info: "text-blue-700",
}

const sizeStyles = {
  sm: {
    value: "text-lg font-semibold",
    label: "text-sm",
    description: "text-xs",
  },
  md: {
    value: "text-2xl font-bold",
    label: "text-sm",
    description: "text-sm",
  },
  lg: {
    value: "text-4xl font-bold",
    label: "text-base",
    description: "text-sm",
  },
}

const alignmentStyles = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
}

const trendStyles = {
  up: "text-green-600",
  down: "text-red-600", 
  neutral: "text-stone-500",
}

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
}

export const Statistic: React.FC<StatisticProps> = ({
  value,
  label,
  description,
  icon,
  variant = "default",
  size = "md",
  align = "left",
  trend,
  className,
}) => {
  const alignClass = alignmentStyles[align]
  const variantClass = variantStyles[variant]
  const sizeClass = sizeStyles[size]

  return (
    <div
      className={cn(
        "p-4 bg-white rounded-lg border border-stone-200 shadow-sm",
        alignClass,
        className
      )}
    >
      {/* Icon */}
      {icon && (
        <div className={cn("mb-2", variantClass)}>
          {icon}
        </div>
      )}

      {/* Value */}
      <div className={cn(sizeClass.value, variantClass)}>
        {value}
      </div>

      {/* Label */}
      <div className={cn(sizeClass.label, "font-medium text-stone-600 mt-1")}>
        {label}
      </div>

      {/* Description */}
      {description && (
        <div className={cn(sizeClass.description, "text-stone-500 mt-1")}>
          {description}
        </div>
      )}

      {/* Trend Indicator */}
      {trend && (
        <div className={cn("flex items-center gap-1 mt-2", trendStyles[trend.type])}>
          <Icon icon={trendIcons[trend.type]} size="sm" />
          <span className="text-sm font-medium">
            {trend.value > 0 ? '+' : ''}{trend.value}%
          </span>
          {trend.label && (
            <span className="text-xs text-stone-500 ml-1">
              {trend.label}
            </span>
          )}
        </div>
      )}
    </div>
  )
}