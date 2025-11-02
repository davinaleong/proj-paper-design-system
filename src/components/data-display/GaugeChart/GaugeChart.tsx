import React from "react"
import type { GaugeChartProps } from "./types"
import { cn } from "../../../utils/cn"
import { Typography } from "../../core"

const getColorByVariant = (variant: string) => {
  switch (variant) {
    case "success":
      return "#16a34a"
    case "warning":
      return "#f59e0b"
    case "error":
      return "#dc2626"
    case "info":
      return "#2563eb"
    default:
      return "#6b7280"
  }
}

const getSizeValues = (size: string) => {
  switch (size) {
    case "sm":
      return { radius: 40, strokeWidth: 6, fontSize: "text-sm" }
    case "lg":
      return { radius: 70, strokeWidth: 10, fontSize: "text-xl" }
    default: // md
      return { radius: 55, strokeWidth: 8, fontSize: "text-lg" }
  }
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  size = "md",
  variant = "default",
  color,
  label,
  showPercent = true,
  min = 0,
  max = 100,
  children,
  className,
}) => {
  const { radius, strokeWidth, fontSize } = getSizeValues(size)
  const normalizedValue = Math.max(min, Math.min(max, value))
  const percentage = ((normalizedValue - min) / (max - min)) * 100
  
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  
  const center = radius + strokeWidth
  const svgSize = (radius + strokeWidth) * 2
  
  const gaugeColor = color || getColorByVariant(variant)

  return (
    <div className={cn("inline-flex flex-col items-center gap-2", className)}>
      <div className="relative">
        <svg
          width={svgSize}
          height={svgSize}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            className="opacity-30"
          />
          
          {/* Progress circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke={gaugeColor}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {children || (
            <div className="text-center">
              {showPercent && (
                <Typography 
                  variant="h3" 
                  className={cn("font-bold text-stone-900", fontSize)}
                >
                  {Math.round(percentage)}%
                </Typography>
              )}
              {label && (
                <Typography 
                  variant="caption" 
                  className="text-stone-600 mt-1 block"
                >
                  {label}
                </Typography>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

GaugeChart.displayName = "GaugeChart"

export default GaugeChart