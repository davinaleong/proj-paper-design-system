import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Tooltip } from "./Tooltip.jsx"

// Mock window methods
beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.runOnlyPendingTimers()
  vi.useRealTimers()
  vi.clearAllMocks()
})

describe("Tooltip", () => {
  const defaultProps = {
    content: "Test tooltip content",
    children: <button>Trigger</button>,
  }

  it("renders trigger element", () => {
    render(<Tooltip {...defaultProps} />)
    expect(screen.getByRole("button", { name: "Trigger" })).toBeInTheDocument()
  })

  it("does not show tooltip initially", () => {
    render(<Tooltip {...defaultProps} />)
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
  })

  describe("hover trigger", () => {
    it("shows tooltip on hover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="hover" />)

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      vi.advanceTimersByTime(200) // Default showDelay

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
        expect(screen.getByText("Test tooltip content")).toBeInTheDocument()
      })
    })

    it("hides tooltip on unhover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="hover" showDelay={0} />)

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })

      await user.unhover(trigger)
      vi.advanceTimersByTime(0) // Default hideDelay

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
      })
    })

    it("respects custom show delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="hover" showDelay={500} />)

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      vi.advanceTimersByTime(400)
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

      vi.advanceTimersByTime(100)
      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })
    })

    it("respects custom hide delay", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <Tooltip
          {...defaultProps}
          trigger="hover"
          showDelay={0}
          hideDelay={300}
        />
      )

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })

      await user.unhover(trigger)
      vi.advanceTimersByTime(200)
      expect(screen.getByRole("tooltip")).toBeInTheDocument()

      vi.advanceTimersByTime(100)
      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
      })
    })
  })

  describe("click trigger", () => {
    it("shows tooltip on click", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="click" />)

      const trigger = screen.getByRole("button")
      await user.click(trigger)

      vi.advanceTimersByTime(200)

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })
    })

    it("toggles tooltip on multiple clicks", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <Tooltip
          {...defaultProps}
          trigger="click"
          showDelay={0}
          hideDelay={0}
        />
      )

      const trigger = screen.getByRole("button")

      // First click shows
      await user.click(trigger)
      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })

      // Second click hides
      await user.click(trigger)
      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
      })
    })
  })

  describe("focus trigger", () => {
    it("shows tooltip on focus", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="focus" />)

      await user.tab() // Focus the button

      vi.advanceTimersByTime(200)

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })
    })

    it("hides tooltip on blur", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="focus" showDelay={0} />)

      await user.tab() // Focus

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })

      await user.tab() // Blur by moving focus

      await waitFor(() => {
        expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
      })
    })
  })

  describe("manual trigger", () => {
    it("respects controlled open prop", () => {
      const { rerender } = render(
        <Tooltip {...defaultProps} trigger="manual" open={false} />
      )
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()

      rerender(<Tooltip {...defaultProps} trigger="manual" open={true} />)
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })

    it("calls onOpenChange when state changes", async () => {
      const onOpenChange = vi.fn()
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(
        <Tooltip
          {...defaultProps}
          trigger="hover"
          showDelay={0}
          onOpenChange={onOpenChange}
        />
      )

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      await waitFor(() => {
        expect(onOpenChange).toHaveBeenCalledWith(true)
      })
    })
  })

  describe("positioning", () => {
    it("applies correct position classes for top", () => {
      render(<Tooltip {...defaultProps} position="top" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("fixed")
    })

    it("applies correct position classes for bottom", () => {
      render(<Tooltip {...defaultProps} position="bottom" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("fixed")
    })

    it("applies correct position classes for left", () => {
      render(<Tooltip {...defaultProps} position="left" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("fixed")
    })

    it("applies correct position classes for right", () => {
      render(<Tooltip {...defaultProps} position="right" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("fixed")
    })

    it("handles position variants with start/end", () => {
      const { rerender } = render(
        <Tooltip {...defaultProps} position="top-start" open={true} />
      )
      expect(screen.getByRole("tooltip")).toBeInTheDocument()

      rerender(<Tooltip {...defaultProps} position="bottom-end" open={true} />)
      expect(screen.getByRole("tooltip")).toBeInTheDocument()
    })
  })

  describe("color variants", () => {
    it("applies default color variant", () => {
      render(<Tooltip {...defaultProps} colorVariant="default" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("text-slate-700", "bg-slate-50")
    })

    it("applies primary color variant", () => {
      render(<Tooltip {...defaultProps} colorVariant="primary" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("text-blue-700", "bg-blue-50")
    })

    it("applies success color variant", () => {
      render(<Tooltip {...defaultProps} colorVariant="success" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("text-green-700", "bg-green-50")
    })

    it("applies warning color variant", () => {
      render(<Tooltip {...defaultProps} colorVariant="warning" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("text-yellow-700", "bg-yellow-50")
    })

    it("applies danger color variant", () => {
      render(<Tooltip {...defaultProps} colorVariant="danger" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("text-red-700", "bg-red-50")
    })
  })

  describe("size variants", () => {
    it("applies small size classes", () => {
      render(<Tooltip {...defaultProps} size="sm" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("max-w-xs", "text-xs", "px-2", "py-1")
    })

    it("applies medium size classes", () => {
      render(<Tooltip {...defaultProps} size="md" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("max-w-sm", "text-sm", "px-3", "py-2")
    })

    it("applies large size classes", () => {
      render(<Tooltip {...defaultProps} size="lg" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("max-w-md", "text-base", "px-4", "py-3")
    })
  })

  describe("arrow", () => {
    it("shows arrow by default", () => {
      render(<Tooltip {...defaultProps} open={true} />)
      const tooltip = screen.getByRole("tooltip")
      const arrow = tooltip.querySelector(".border-4")
      expect(arrow).toBeInTheDocument()
    })

    it("hides arrow when disabled", () => {
      render(<Tooltip {...defaultProps} arrow={false} open={true} />)
      const tooltip = screen.getByRole("tooltip")
      const arrow = tooltip.querySelector(".border-4")
      expect(arrow).not.toBeInTheDocument()
    })

    it("applies custom arrow classes", () => {
      render(
        <Tooltip {...defaultProps} arrowClassName="custom-arrow" open={true} />
      )
      const tooltip = screen.getByRole("tooltip")
      const arrow = tooltip.querySelector(".custom-arrow")
      expect(arrow).toBeInTheDocument()
    })
  })

  describe("accessibility", () => {
    it("has correct ARIA attributes", () => {
      render(<Tooltip {...defaultProps} open={true} />)

      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveAttribute("role", "tooltip")
      expect(tooltip).toHaveAttribute("id", "tooltip-content")
    })

    it("connects trigger to tooltip with aria-describedby", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="hover" showDelay={0} />)

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-describedby", "tooltip-content")
      })
    })

    it("removes aria-describedby when tooltip is hidden", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <Tooltip
          {...defaultProps}
          trigger="hover"
          showDelay={0}
          hideDelay={0}
        />
      )

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      await waitFor(() => {
        expect(trigger).toHaveAttribute("aria-describedby", "tooltip-content")
      })

      await user.unhover(trigger)

      await waitFor(() => {
        expect(trigger).not.toHaveAttribute("aria-describedby")
      })
    })

    it("supports keyboard navigation for focus trigger", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} trigger="focus" showDelay={0} />)

      await user.tab()

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })
    })
  })

  describe("disabled state", () => {
    it("does not show tooltip when disabled", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(<Tooltip {...defaultProps} disabled trigger="hover" />)

      const trigger = screen.getByRole("button")
      await user.hover(trigger)

      vi.advanceTimersByTime(200)

      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })

    it("still renders children when disabled", () => {
      render(<Tooltip {...defaultProps} disabled />)
      expect(
        screen.getByRole("button", { name: "Trigger" })
      ).toBeInTheDocument()
    })
  })

  describe("styling", () => {
    it("applies custom tooltip classes", () => {
      render(
        <Tooltip
          {...defaultProps}
          tooltipClassName="custom-tooltip"
          open={true}
        />
      )
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("custom-tooltip")
    })

    it("applies custom container classes", () => {
      render(<Tooltip {...defaultProps} className="custom-container" />)
      const container = screen.getByRole("button").parentElement
      expect(container).toHaveClass("custom-container")
    })

    it("supports custom max width", () => {
      render(<Tooltip {...defaultProps} maxWidth="400px" open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveStyle({ maxWidth: "400px" })
    })

    it("applies custom z-index", () => {
      render(<Tooltip {...defaultProps} zIndex={999} open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveStyle({ zIndex: "999" })
    })
  })

  describe("animation", () => {
    it("applies animation classes when open", () => {
      render(<Tooltip {...defaultProps} open={true} />)
      const tooltip = screen.getByRole("tooltip")
      expect(tooltip).toHaveClass("opacity-100", "scale-100")
      expect(tooltip).not.toHaveClass("opacity-0", "scale-95")
    })

    it("applies animation classes when closed", () => {
      render(<Tooltip {...defaultProps} open={false} />)
      // When closed, tooltip isn't rendered, so we test the closed behavior
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument()
    })
  })

  describe("edge cases", () => {
    it("handles string children", () => {
      render(
        <Tooltip content="Test tooltip">
          <span>Text trigger</span>
        </Tooltip>
      )
      expect(screen.getByText("Text trigger")).toBeInTheDocument()
    })

    it("handles multiple event handlers on children", async () => {
      const childClick = vi.fn()
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })

      render(
        <Tooltip {...defaultProps} trigger="hover" showDelay={0}>
          <button onClick={childClick}>Custom Button</button>
        </Tooltip>
      )

      const trigger = screen.getByRole("button")
      await user.click(trigger)

      expect(childClick).toHaveBeenCalled()
    })

    it("handles rapid hover/unhover", async () => {
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
      render(
        <Tooltip
          {...defaultProps}
          trigger="hover"
          showDelay={100}
          hideDelay={100}
        />
      )

      const trigger = screen.getByRole("button")

      // Rapid hover/unhover
      await user.hover(trigger)
      vi.advanceTimersByTime(50)
      await user.unhover(trigger)
      vi.advanceTimersByTime(50)
      await user.hover(trigger)
      vi.advanceTimersByTime(100)

      await waitFor(() => {
        expect(screen.getByRole("tooltip")).toBeInTheDocument()
      })
    })
  })
})
