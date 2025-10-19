import { render, screen } from "@testing-library/react"
import { DotIndicator } from "./DotIndicator"

describe("DotIndicator", () => {
  it("renders with default props", () => {
    render(<DotIndicator data-testid="dot-indicator" />)

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).toBeInTheDocument()
    expect(dot).toHaveClass("inline-block", "rounded-full", "w-2", "h-2")
  })

  it("applies size classes correctly", () => {
    render(<DotIndicator size="lg" data-testid="dot-indicator" />)

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).toHaveClass("w-3", "h-3")
  })

  it("applies animation when animated prop is true", () => {
    render(<DotIndicator animated data-testid="dot-indicator" />)

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).toHaveClass("animate-pulse")
  })

  it("does not apply animation when animated prop is false", () => {
    render(<DotIndicator animated={false} data-testid="dot-indicator" />)

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).not.toHaveClass("animate-pulse")
  })

  it("applies custom className", () => {
    render(
      <DotIndicator className="custom-class" data-testid="dot-indicator" />
    )

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).toHaveClass("custom-class")
  })

  it("applies custom animation duration and delay", () => {
    render(
      <DotIndicator
        animated
        animationDuration={2000}
        animationDelay={500}
        data-testid="dot-indicator"
      />
    )

    const dot = screen.getByTestId("dot-indicator")
    expect(dot).toHaveStyle({
      animationDuration: "2000ms",
      animationDelay: "500ms",
      animationIterationCount: "infinite",
    })
  })

  it("forwards ref correctly", () => {
    const ref = { current: null }
    render(<DotIndicator ref={ref} data-testid="dot-indicator" />)

    expect(ref.current).toBe(screen.getByTestId("dot-indicator"))
  })

  it("supports all variants", () => {
    const variants = ["solid", "soft", "outline", "pulse"] as const

    variants.forEach((variant) => {
      const { unmount } = render(
        <DotIndicator variant={variant} data-testid={`dot-${variant}`} />
      )

      const dot = screen.getByTestId(`dot-${variant}`)
      expect(dot).toBeInTheDocument()

      unmount()
    })
  })

  it("supports all sizes", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const
    const sizeClasses = {
      xs: ["w-1", "h-1"],
      sm: ["w-1.5", "h-1.5"],
      md: ["w-2", "h-2"],
      lg: ["w-3", "h-3"],
      xl: ["w-4", "h-4"],
    }

    sizes.forEach((size) => {
      const { unmount } = render(
        <DotIndicator size={size} data-testid={`dot-${size}`} />
      )

      const dot = screen.getByTestId(`dot-${size}`)
      expect(dot).toHaveClass(...sizeClasses[size])

      unmount()
    })
  })
})
