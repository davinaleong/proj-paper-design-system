import React, { useState } from "react"
import { Tooltip } from "./Tooltip.jsx"
import type { TooltipPosition, TooltipTrigger, TooltipSize } from "./types.js"
import type { ColorVariant } from "../../../utils/colors.js"

/**
 * Comprehensive showcase for the Tooltip component
 * Demonstrates all positioning options, triggers, colors, and features
 */
export const TooltipShowcase: React.FC = () => {
  const [manualOpen, setManualOpen] = useState(false)

  const positions: TooltipPosition[] = [
    "top",
    "top-start",
    "top-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
    "right",
    "right-start",
    "right-end",
  ]

  const triggers: TooltipTrigger[] = ["hover", "click", "focus", "manual"]
  const sizes: TooltipSize[] = ["sm", "md", "lg"]

  const colorVariants: ColorVariant[] = [
    "default",
    "primary",
    "secondary",
    "accent",
    "success",
    "warning",
    "danger",
    "info",
    "neutral",
  ]

  return (
    <div className="space-y-8 p-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Tooltip Showcase</h2>
        <p className="text-slate-600">
          Interactive tooltips with customizable positioning, triggers, colors,
          and styling.
        </p>
      </div>

      {/* Basic Examples */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Basic Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip content="This is a simple tooltip">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
              Hover me
            </button>
          </Tooltip>

          <Tooltip
            content="Click to toggle this tooltip"
            trigger="click"
            colorVariant="success"
          >
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
              Click me
            </button>
          </Tooltip>

          <Tooltip
            content="Focus with keyboard navigation"
            trigger="focus"
            colorVariant="info"
          >
            <button className="px-4 py-2 bg-sky-500 text-white rounded focus:bg-sky-600 cursor-pointer">
              Tab to me
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Position Demonstrations */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">All Positions</h3>
        <div className="grid grid-cols-4 gap-8 p-8 bg-slate-50 rounded-lg">
          {positions.map((position) => (
            <div key={position} className="flex justify-center">
              <Tooltip
                content={`Tooltip positioned: ${position}`}
                position={position}
                showDelay={100}
              >
                <button className="px-3 py-2 bg-slate-600 text-white text-sm rounded hover:bg-slate-700 cursor-pointer">
                  {position}
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      </section>

      {/* Trigger Types */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Trigger Types</h3>
        <div className="flex flex-wrap gap-4">
          {triggers.map((trigger) => (
            <Tooltip
              key={trigger}
              content={`Triggered by: ${trigger}`}
              trigger={trigger}
              open={trigger === "manual" ? manualOpen : undefined}
              onOpenChange={trigger === "manual" ? setManualOpen : undefined}
              colorVariant={
                trigger === "hover"
                  ? "primary"
                  : trigger === "click"
                  ? "success"
                  : trigger === "focus"
                  ? "warning"
                  : "info"
              }
            >
              <button
                className={`px-4 py-2 rounded text-white cursor-pointer ${
                  trigger === "hover"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : trigger === "click"
                    ? "bg-green-500 hover:bg-green-600"
                    : trigger === "focus"
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-purple-500 hover:bg-purple-600"
                }`}
                onClick={
                  trigger === "manual"
                    ? () => setManualOpen(!manualOpen)
                    : undefined
                }
              >
                {trigger === "manual" ? "Toggle Manual" : `${trigger} trigger`}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Size Variants</h3>
        <div className="flex flex-wrap gap-4">
          {sizes.map((size) => (
            <Tooltip
              key={size}
              content={`This is a ${size} sized tooltip with some example content to show the different sizing options available.`}
              size={size}
              colorVariant="neutral"
            >
              <button
                className={`rounded bg-slate-600 text-white hover:bg-slate-700 cursor-pointer ${
                  size === "sm"
                    ? "px-2 py-1 text-sm"
                    : size === "md"
                    ? "px-3 py-2 text-base"
                    : "px-4 py-3 text-lg"
                }`}
              >
                Size {size.toUpperCase()}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">Color Variants</h3>
        <div className="grid grid-cols-3 gap-4">
          {colorVariants.map((color) => (
            <Tooltip
              key={color}
              content={`${
                color.charAt(0).toUpperCase() + color.slice(1)
              } colored tooltip`}
              colorVariant={color}
              position="top"
            >
              <button className="px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300 w-full cursor-pointer">
                {color}
              </button>
            </Tooltip>
          ))}
        </div>
      </section>

      {/* Advanced Features */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Advanced Features
        </h3>
        <div className="grid grid-cols-2 gap-6">
          {/* Custom Delays */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Custom Delays</h4>
            <div className="flex gap-2">
              <Tooltip
                content="Fast show (0ms delay)"
                showDelay={0}
                colorVariant="success"
              >
                <button className="px-3 py-2 bg-green-100 text-green-800 rounded text-sm cursor-pointer">
                  Fast
                </button>
              </Tooltip>
              <Tooltip
                content="Slow show (800ms delay)"
                showDelay={800}
                colorVariant="warning"
              >
                <button className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded text-sm cursor-pointer">
                  Slow
                </button>
              </Tooltip>
              <Tooltip
                content="Delayed hide (500ms)"
                hideDelay={500}
                colorVariant="info"
              >
                <button className="px-3 py-2 bg-blue-100 text-blue-800 rounded text-sm cursor-pointer">
                  Sticky
                </button>
              </Tooltip>
            </div>
          </div>

          {/* No Arrow */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Arrow Options</h4>
            <div className="flex gap-2">
              <Tooltip content="With arrow (default)" arrow={true}>
                <button className="px-3 py-2 bg-slate-100 text-slate-800 rounded text-sm cursor-pointer">
                  With Arrow
                </button>
              </Tooltip>
              <Tooltip content="No arrow" arrow={false}>
                <button className="px-3 py-2 bg-slate-100 text-slate-800 rounded text-sm cursor-pointer">
                  No Arrow
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Custom Styling */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Custom Styling</h4>
            <div className="flex gap-2">
              <Tooltip
                content="Custom styled tooltip with extra classes"
                tooltipClassName="font-bold shadow-xl"
                maxWidth="200px"
              >
                <button className="px-3 py-2 bg-purple-100 text-purple-800 rounded text-sm cursor-pointer">
                  Custom Style
                </button>
              </Tooltip>
              <Tooltip
                content="High z-index tooltip"
                zIndex={999}
                colorVariant="danger"
              >
                <button className="px-3 py-2 bg-red-100 text-red-800 rounded text-sm cursor-pointer">
                  High Z-Index
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Disabled State */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Disabled State</h4>
            <div className="flex gap-2">
              <Tooltip content="This tooltip is disabled" disabled>
                <button className="px-3 py-2 bg-gray-200 text-gray-500 rounded text-sm cursor-not-allowed">
                  Disabled Tooltip
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Content */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Complex Content
        </h3>
        <div className="flex flex-wrap gap-4">
          <Tooltip
            content={
              <div className="space-y-2">
                <div className="font-semibold">Rich Content Tooltip</div>
                <div className="text-sm opacity-90">
                  This tooltip contains multiple elements and styled content.
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Status: Active
                </div>
              </div>
            }
            size="lg"
            maxWidth="250px"
          >
            <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 cursor-pointer">
              Rich Content
            </button>
          </Tooltip>

          <Tooltip
            content="This is a very long tooltip content that demonstrates how the tooltip handles longer text and will wrap appropriately based on the max width constraints."
            size="md"
            maxWidth="300px"
            position="bottom"
          >
            <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 cursor-pointer">
              Long Content
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Usage Guidelines
        </h3>
        <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm text-slate-600">
          <p>
            <strong>Hover trigger:</strong> Best for supplementary information
            that doesn't require action
          </p>
          <p>
            <strong>Click trigger:</strong> Good for tooltips with interactive
            content or when hover conflicts with other interactions
          </p>
          <p>
            <strong>Focus trigger:</strong> Essential for keyboard accessibility
            and form field help text
          </p>
          <p>
            <strong>Manual trigger:</strong> Use when you need programmatic
            control over tooltip visibility
          </p>
          <p>
            <strong>Positioning:</strong> The tooltip will automatically adjust
            if it would overflow the viewport
          </p>
        </div>
      </section>
    </div>
  )
}

TooltipShowcase.displayName = "TooltipShowcase"
