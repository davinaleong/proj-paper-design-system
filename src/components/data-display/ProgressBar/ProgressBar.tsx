import React from "react"
import { cn } from "../../../utils/cn"
import type { ProgressBarProps } from "./types"

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = 16,
  color = "#2563eb", // default blue-600
  label,
  showPercent = true,
  ariaLabel = "Progress",
  className,
  labelColor = "black",
}) => {
  const progress = Math.max(0, Math.min(100, value))
  const labelClass =
    labelColor === "white"
      ? "text-xs font-medium text-white"
      : "text-xs font-medium text-stone-700"

  return (
    <div
      className={cn(
        "relative w-full bg-stone-200 rounded-full overflow-hidden",
        className
      )}
      style={{ height }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={ariaLabel}
    >
      <div
        className="h-full rounded-full transition-all duration-300"
        style={{
          width: `${progress}%`,
          background: color,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        {label ? (
          <span className={labelClass}>{label}</span>
        ) : showPercent ? (
          <span className={labelClass}>{progress}%</span>
        ) : null}
      </div>
    </div>
  )
}
