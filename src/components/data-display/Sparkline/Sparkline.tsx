import React from "react"
import type { SparklineProps } from "./types"
import { cn } from "../../../utils/cn"

const getSizeValues = (size: string) => {
  switch (size) {
    case "sm":
      return { width: 60, height: 20 }
    case "lg":
      return { width: 120, height: 40 }
    default: // md
      return { width: 80, height: 30 }
  }
}

export const Sparkline: React.FC<SparklineProps> = ({
  data,
  variant = "line",
  size = "md",
  width: customWidth,
  height: customHeight,
  color = "#2563eb",
  showDots = false,
  highlightLast = false,
  className,
}) => {
  const { width: defaultWidth, height: defaultHeight } = getSizeValues(size)
  const width = customWidth || defaultWidth
  const height = customHeight || defaultHeight

  if (!data || data.length === 0) {
    return (
      <div 
        className={cn("bg-stone-100 rounded", className)}
        style={{ width, height }}
      />
    )
  }

  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  const range = maxValue - minValue || 1

  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * width,
    y: height - ((value - minValue) / range) * height,
  }))

  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ')

  const areaPathData = variant === "area" 
    ? `${pathData} L ${width} ${height} L 0 ${height} Z`
    : ""

  const renderBars = () => {
    const barWidth = width / data.length * 0.8
    const barSpacing = width / data.length * 0.2

    return data.map((value, index) => {
      const barHeight = ((value - minValue) / range) * height
      const x = (index / data.length) * width + barSpacing / 2
      const y = height - barHeight

      return (
        <rect
          key={index}
          x={x}
          y={y}
          width={barWidth}
          height={barHeight}
          fill={color}
          className="transition-all duration-200"
        />
      )
    })
  }

  return (
    <svg
      width={width}
      height={height}
      className={cn("overflow-visible", className)}
      style={{ display: "block" }}
    >
      {variant === "bar" ? (
        renderBars()
      ) : (
        <>
          {variant === "area" && (
            <path
              d={areaPathData}
              fill={color}
              fillOpacity={0.2}
              stroke="none"
            />
          )}
          
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth={variant === "area" ? 1.5 : 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-200"
          />

          {showDots && points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r={1.5}
              fill={color}
              className="transition-all duration-200"
            />
          ))}

          {highlightLast && points.length > 0 && (
            <circle
              cx={points[points.length - 1].x}
              cy={points[points.length - 1].y}
              r={3}
              fill={color}
              stroke="white"
              strokeWidth={1}
              className="transition-all duration-200"
            />
          )}
        </>
      )}
    </svg>
  )
}

Sparkline.displayName = "Sparkline"

export default Sparkline
