import React, { useState } from "react"
import { Tooltip } from "../../components/data-display/Tooltip/Tooltip.jsx"
import { Button } from "../../components/forms/Button/Button.jsx"
import type { TooltipPosition, TooltipTrigger, TooltipSize } from "../../components/data-display/Tooltip/types.js"
import type { ColorVariant } from "../../utils/colors.js"

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
            <Button color="primary">Hover me</Button>
          </Tooltip>

          <Tooltip
            content="Click to toggle this tooltip"
            trigger="click"
            colorVariant="success"
          >
            <Button color="success">Click me</Button>
          </Tooltip>

          <Tooltip
            content="Focus with keyboard navigation"
            trigger="focus"
            colorVariant="info"
          >
            <Button color="info">Tab to me</Button>
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
                <Button size="sm" color="neutral">
                  {position}
                </Button>
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
              <Button
                color={
                  trigger === "hover"
                    ? "primary"
                    : trigger === "click"
                    ? "success"
                    : trigger === "focus"
                    ? "warning"
                    : "secondary"
                }
                onClick={
                  trigger === "manual"
                    ? () => setManualOpen(!manualOpen)
                    : undefined
                }
              >
                {trigger === "manual" ? "Toggle Manual" : `${trigger} trigger`}
              </Button>
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
              <Button
                size={size === "sm" ? "sm" : size === "md" ? "md" : "lg"}
                color="neutral"
              >
                Size {size.toUpperCase()}
              </Button>
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
              <Button color="neutral" className="w-full">
                {color}
              </Button>
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
                <Button size="sm" color="success">
                  Fast
                </Button>
              </Tooltip>
              <Tooltip
                content="Slow show (800ms delay)"
                showDelay={800}
                colorVariant="warning"
              >
                <Button size="sm" color="warning">
                  Slow
                </Button>
              </Tooltip>
              <Tooltip
                content="Delayed hide (500ms)"
                hideDelay={500}
                colorVariant="info"
              >
                <Button size="sm" color="info">
                  Sticky
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* No Arrow */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Arrow Options</h4>
            <div className="flex gap-2">
              <Tooltip content="With arrow (default)" arrow={true}>
                <Button size="sm" color="neutral">
                  With Arrow
                </Button>
              </Tooltip>
              <Tooltip content="No arrow" arrow={false}>
                <Button size="sm" color="neutral">
                  No Arrow
                </Button>
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
                <Button size="sm" color="secondary">
                  Custom Style
                </Button>
              </Tooltip>
              <Tooltip
                content="High z-index tooltip"
                zIndex={999}
                colorVariant="danger"
              >
                <Button size="sm" color="danger">
                  High Z-Index
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* Disabled State */}
          <div className="space-y-2">
            <h4 className="font-medium text-slate-700">Disabled State</h4>
            <div className="flex gap-2">
              <Tooltip content="This tooltip is disabled" disabled>
                <Button size="sm" color="neutral" disabled>
                  Disabled Tooltip
                </Button>
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
            <Button color="accent">Rich Content</Button>
          </Tooltip>

          <Tooltip
            content="This is a very long tooltip content that demonstrates how the tooltip handles longer text and will wrap appropriately based on the max width constraints."
            size="md"
            maxWidth="300px"
            position="bottom"
          >
            <Button color="info">Long Content</Button>
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
