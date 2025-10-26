import React from "react"
import type { ProgressCircleProps } from "./types"
import { cn } from "../../../utils/cn"

export const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  size = 64,
  strokeWidth = 6,
  color = "#2563eb", // default blue-600
  label,
  showPercent = true,
  ariaLabel = "Progress",
  className,
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(100, value))
  const offset = circumference - (progress / 100) * circumference

  return (
    <div
      className={cn("relative inline-block", className)}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
    >
      <svg width={size} height={size} className="block">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb" // gray-200
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        {label ? (
          <span className="text-base font-medium text-stone-700">{label}</span>
        ) : showPercent ? (
          <span className="text-base font-medium text-stone-700">
            {progress}%
          </span>
        ) : null}
      </div>
    </div>
  )
}
