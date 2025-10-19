import type { ReactNode } from "react"

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse"

export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse"

export type FlexJustify =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly"

export type FlexAlign = "start" | "end" | "center" | "baseline" | "stretch"

export type FlexGap = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

export type FlexShrink = "0" | "1" | "auto"

export type FlexGrow = "0" | "1" | "auto"

export type FlexBasis = "auto" | "full" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4"

export interface FlexResponsive {
  base?: FlexGap
  sm?: FlexGap
  md?: FlexGap
  lg?: FlexGap
  xl?: FlexGap
}

export interface FlexProps {
  children: ReactNode
  direction?: FlexDirection
  wrap?: FlexWrap
  justify?: FlexJustify
  align?: FlexAlign
  gap?: FlexGap | FlexResponsive
  /**
   * Control flex-shrink behavior
   */
  shrink?: FlexShrink
  /**
   * Control flex-grow behavior
   */
  grow?: FlexGrow
  /**
   * Control flex-basis behavior
   */
  basis?: FlexBasis
  /**
   * Make children full width
   */
  fullWidth?: boolean
  /**
   * Prevent text wrapping in children
   */
  noWrap?: boolean
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Apply paper theme styling
   */
  paper?: boolean
}
