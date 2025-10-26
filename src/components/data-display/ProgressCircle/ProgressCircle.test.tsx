import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { ProgressCircle } from "./ProgressCircle"

describe("ProgressCircle", () => {
  it("renders with default props and shows percent", () => {
    render(<ProgressCircle value={75} />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument()
    expect(screen.getByText("75%")).toBeInTheDocument()
  })

  it("clamps value between 0 and 100", () => {
    render(<ProgressCircle value={-10} />)
    expect(screen.getByText("0%")).toBeInTheDocument()
    render(<ProgressCircle value={150} />)
    expect(screen.getByText("100%")).toBeInTheDocument()
  })

  it("renders a custom label if provided", () => {
    render(<ProgressCircle value={50} label="Loading" showPercent={false} />)
    expect(screen.getByText("Loading")).toBeInTheDocument()
    expect(screen.queryByText("50%"))?.not.toBeInTheDocument()
  })

  it("hides percent if showPercent is false and no label", () => {
    render(<ProgressCircle value={30} showPercent={false} />)
    expect(screen.queryByText("30%"))?.not.toBeInTheDocument()
  })

  it("applies custom color and size", () => {
    render(<ProgressCircle value={60} color="#16a34a" size={80} />)
    const svg = screen.getByRole("progressbar").querySelector("svg")
    expect(svg).toHaveAttribute("width", "80")
    // Color is applied to the second circle
    const circles = svg?.querySelectorAll("circle")
    expect(circles?.[1]).toHaveAttribute("stroke", "#16a34a")
  })
})
