import type { FlexProps, FlexGap, FlexResponsive } from "./types"
import { cn } from "../../../utils/cn.js"

const directionClasses: Record<string, string> = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse",
}

const wrapClasses: Record<string, string> = {
  nowrap: "flex-nowrap",
  wrap: "flex-wrap",
  "wrap-reverse": "flex-wrap-reverse",
}

const justifyClasses: Record<string, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
}

const alignClasses: Record<string, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
}

const gapClasses: Record<FlexGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
}

const shrinkClasses: Record<string, string> = {
  "0": "flex-shrink-0",
  "1": "flex-shrink",
  auto: "flex-shrink",
}

const growClasses: Record<string, string> = {
  "0": "flex-grow-0",
  "1": "flex-grow",
  auto: "flex-grow",
}

const basisClasses: Record<string, string> = {
  auto: "flex-auto",
  full: "flex-1",
  "1/2": "flex-1/2",
  "1/3": "flex-1/3",
  "2/3": "flex-2/3",
  "1/4": "flex-1/4",
  "3/4": "flex-3/4",
}

const paperClasses = [
  "bg-stone-50",
  "border",
  "border-stone-200/60",
  "rounded-sm",
  "shadow-sm",
  "backdrop-blur-sm",
  "hover:shadow-md",
  "hover:-translate-y-[1px]",
  "active:shadow-inner",
  "transition-all",
  "duration-200",
]

function getResponsiveGapClasses(gap: FlexGap | FlexResponsive): string {
  if (typeof gap === "string") {
    return gapClasses[gap]
  }

  const classes: string[] = []

  if (gap.base) classes.push(gapClasses[gap.base])
  if (gap.sm) classes.push(`sm:${gapClasses[gap.sm]}`)
  if (gap.md) classes.push(`md:${gapClasses[gap.md]}`)
  if (gap.lg) classes.push(`lg:${gapClasses[gap.lg]}`)
  if (gap.xl) classes.push(`xl:${gapClasses[gap.xl]}`)

  return classes.join(" ")
}

export function Flex({
  children,
  direction = "row",
  wrap = "nowrap",
  justify = "start",
  align = "stretch",
  gap = "md",
  shrink,
  grow,
  basis,
  fullWidth = false,
  noWrap = false,
  className,
  paper = false,
}: FlexProps) {
  const directionClass = directionClasses[direction]
  const wrapClass = wrapClasses[wrap]
  const justifyClass = justifyClasses[justify]
  const alignClass = alignClasses[align]
  const gapClass = getResponsiveGapClasses(gap)
  const shrinkClass = shrink ? shrinkClasses[shrink] : ""
  const growClass = grow ? growClasses[grow] : ""
  const basisClass = basis ? basisClasses[basis] : ""

  const flexClasses = cn(
    "flex",
    directionClass,
    wrapClass,
    justifyClass,
    alignClass,
    gapClass,
    shrinkClass,
    growClass,
    basisClass,
    fullWidth && "w-full",
    noWrap && "whitespace-nowrap",
    paper && paperClasses,
    className
  )

  return <div className={flexClasses}>{children}</div>
}
