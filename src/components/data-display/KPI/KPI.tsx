import React from "react"
import { TrendingUp, TrendingDown, Minus, Target } from "lucide-react"
import { cn } from "../../../utils/cn"
import { Icon } from "../../core"
import type { KPIProps } from "./types"

const variantStyles = {
  default: {
    bg: "bg-white",
    border: "border-stone-200",
    title: "text-stone-700",
    value: "text-stone-900",
    subtitle: "text-stone-500",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    title: "text-green-700",
    value: "text-green-900",
    subtitle: "text-green-600",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200", 
    title: "text-amber-700",
    value: "text-amber-900",
    subtitle: "text-amber-600",
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    title: "text-red-700",
    value: "text-red-900",
    subtitle: "text-red-600",
  },
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "text-blue-700",
    value: "text-blue-900",
    subtitle: "text-blue-600",
  },
}

const sizeStyles = {
  sm: {
    container: "p-3",
    value: "text-lg font-bold",
    title: "text-xs font-medium uppercase tracking-wide",
    subtitle: "text-xs",
    icon: "text-lg",
  },
  md: {
    container: "p-4",
    value: "text-2xl font-bold",
    title: "text-sm font-medium uppercase tracking-wide",
    subtitle: "text-sm",
    icon: "text-xl",
  },
  lg: {
    container: "p-6",
    value: "text-3xl font-bold",
    title: "text-base font-medium uppercase tracking-wide",
    subtitle: "text-base",
    icon: "text-2xl",
  },
}

const formatStyles = {
  card: "rounded-lg shadow-sm",
  minimal: "rounded border-l-4 shadow-none",
  highlighted: "rounded-lg shadow-md border-2",
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

export const KPI: React.FC<KPIProps> = ({
  value,
  title,
  subtitle,
  target,
  progress,
  variant = "default",
  size = "md",
  icon,
  trend,
  format = "card",
  className,
}) => {
  const variantClass = variantStyles[variant]
  const sizeClass = sizeStyles[size]
  const formatClass = formatStyles[format]

  return (
    <div
      className={cn(
        "border transition-all duration-200 hover:shadow-md",
        variantClass.bg,
        variantClass.border,
        formatClass,
        sizeClass.container,
        className
      )}
    >
      {/* Header with Icon and Title */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className={cn(sizeClass.title, variantClass.title)}>
            {title}
          </div>
          {subtitle && (
            <div className={cn(sizeClass.subtitle, variantClass.subtitle, "mt-1")}>
              {subtitle}
            </div>
          )}
        </div>
        {icon && (
          <div className={cn(sizeClass.icon, variantClass.title)}>
            {icon}
          </div>
        )}
      </div>

      {/* Main Value */}
      <div className={cn(sizeClass.value, variantClass.value, "mb-2")}>
        {value}
      </div>

      {/* Target and Progress */}
      {target && (
        <div className="flex items-center gap-2 mb-2">
          <Icon icon={Target} size="sm" className={variantClass.subtitle} />
          <span className={cn("text-xs font-medium", variantClass.subtitle)}>
            Target: {target}
          </span>
        </div>
      )}

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className={cn("text-xs font-medium", variantClass.subtitle)}>
              Progress
            </span>
            <span className={cn("text-xs font-medium", variantClass.subtitle)}>
              {progress}%
            </span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-2">
            <div
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                variant === "success" ? "bg-green-500" :
                variant === "warning" ? "bg-amber-500" :
                variant === "error" ? "bg-red-500" :
                variant === "info" ? "bg-blue-500" :
                "bg-stone-400"
              )}
              style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
            />
          </div>
        </div>
      )}

      {/* Trend Indicator */}
      {trend && (
        <div className={cn("flex items-center gap-1", trendStyles[trend.type])}>
          <Icon icon={trendIcons[trend.type]} size="sm" />
          <span className="text-sm font-medium">
            {trend.value > 0 ? '+' : ''}{trend.value}%
          </span>
          {trend.period && (
            <span className="text-xs text-stone-500 ml-1">
              {trend.period}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
