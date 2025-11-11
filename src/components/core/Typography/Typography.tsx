import { forwardRef } from "react"
import clsx from "clsx"
import { getTextColorClasses } from "../../../utils/color"
import {
  containerResponsiveHeadings,
  containerResponsiveBody,
  containerResponsiveFonts,
} from "../../../utils/containerFonts"
import type { TypographyProps, TypographyVariant } from "./types"

// Map variants to default HTML elements
const VARIANT_ELEMENTS: Record<TypographyVariant, keyof HTMLElementTagNameMap> =
  {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    title: "h2",
    subtitle: "h3",
    body: "p",
    bodyLarge: "p",
    bodySmall: "p",
    caption: "span",
    overline: "span",
    code: "code",
    pre: "pre",
    strong: "strong",
    em: "em",
    small: "small",
    kbd: "kbd",
    del: "del",
    sub: "sub",
    sup: "sup",
    abbr: "abbr",
    cite: "cite",
    q: "q",
    dfn: "dfn",
    samp: "samp",
    var: "var",
    time: "time",
    data: "data",
    ins: "ins",
  }

// Typography scale with paper theme fonts and container-based responsive sizing
const VARIANT_CLASSES: Record<TypographyVariant, string> = {
  // Headings (Playfair Display) - now container-responsive
  h1: `font-playfair ${containerResponsiveHeadings.h1} font-bold tracking-tight`,
  h2: `font-playfair ${containerResponsiveHeadings.h2} font-bold tracking-tight`,
  h3: `font-playfair ${containerResponsiveHeadings.h3} font-semibold tracking-tight`,
  h4: `font-playfair ${containerResponsiveHeadings.h4} font-semibold`,
  h5: `font-playfair ${containerResponsiveHeadings.h5} font-medium`,
  h6: `font-playfair ${containerResponsiveHeadings.h6} font-medium`,

  // Semantic variants (Montserrat) - now container-responsive
  title: `font-montserrat ${containerResponsiveHeadings.h2} font-bold tracking-tight`,
  subtitle: `font-montserrat ${containerResponsiveHeadings.h4} font-semibold text-gray-600 dark:text-gray-400`,

  // Body text (Montserrat) - now container-responsive
  body: `font-montserrat ${containerResponsiveBody.regular}`,
  bodyLarge: `font-montserrat ${containerResponsiveBody.large}`,
  bodySmall: `font-montserrat ${containerResponsiveBody.small}`,

  // Utility text (Montserrat) - now container-responsive
  caption: `font-montserrat ${containerResponsiveBody.caption} text-gray-500 dark:text-gray-400`,
  overline: `font-montserrat ${containerResponsiveFonts.xs} font-medium uppercase tracking-wider leading-normal text-gray-500 dark:text-gray-400`,

  // Code text (Source Code Pro) - container-responsive
  code: `font-source-code-pro ${containerResponsiveFonts.sm} bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-sm`,
  pre: `font-source-code-pro ${containerResponsiveFonts.sm} bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto`,

  // Semantic text elements
  strong: `font-montserrat font-bold`,
  em: `font-montserrat italic`,
  small: `font-montserrat ${containerResponsiveFonts.xs} text-gray-600 dark:text-gray-400`,
  
  // Keyboard input styling
  kbd: `font-source-code-pro ${containerResponsiveFonts.xs} font-medium bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 shadow-sm`,
  
  // Text modifications
  del: `font-montserrat line-through text-gray-500 dark:text-gray-400`,
  ins: `font-montserrat underline decoration-green-500 text-green-700 dark:text-green-400`,
  
  // Subscript and superscript
  sub: `font-montserrat ${containerResponsiveFonts.xs} align-sub`,
  sup: `font-montserrat ${containerResponsiveFonts.xs} align-super`,
  
  // Semantic elements
  abbr: `font-montserrat border-b border-dotted border-gray-400 dark:border-gray-500 cursor-help`,
  cite: `font-montserrat italic text-gray-700 dark:text-gray-300`,
  q: `font-montserrat before:content-['"'] after:content-['"'] text-gray-700 dark:text-gray-300`,
  dfn: `font-montserrat italic font-medium text-gray-200 dark:text-gray-50`,
  
  // Code-related elements
  samp: `font-source-code-pro ${containerResponsiveFonts.sm} bg-gray-50 dark:bg-gray-900 px-1 py-0.5 rounded border`,
  var: `font-source-code-pro ${containerResponsiveFonts.sm} italic font-medium text-purple-600 dark:text-purple-400`,
  
  // Time and data
  time: `font-montserrat ${containerResponsiveFonts.sm} text-gray-600 dark:text-gray-400`,
  data: `font-montserrat font-medium text-gray-200 dark:text-gray-50`,
}

const WEIGHT_CLASSES = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
} as const

const ALIGN_CLASSES = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
} as const

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = "body",
      color = "default",
      intensity = "bold",
      weight,
      align,
      truncate = false,
      noWrap = false,
      maxLines,
      className,
      children,
      as,
      title,
      dateTime,
      value,
      ...props
    },
    ref
  ) => {
    // Determine the HTML element
    const Component = as || VARIANT_ELEMENTS[variant]

    // Get base variant classes
    const variantClasses = VARIANT_CLASSES[variant]

    // Get text color classes
    const colorClasses = getTextColorClasses(color, intensity)

    // Build classes
    const typographyClasses = clsx(
      // Base variant styles
      variantClasses,

      // Text color
      colorClasses,

      // Weight override
      weight && WEIGHT_CLASSES[weight],

      // Alignment
      align && ALIGN_CLASSES[align],

      // Text wrapping
      noWrap && "whitespace-nowrap",
      truncate && !maxLines && "truncate",

      // Multi-line truncation
      maxLines &&
        truncate && [
          "overflow-hidden",
          "display: -webkit-box",
          "-webkit-box-orient: vertical",
          { [`-webkit-line-clamp: ${maxLines}`]: true },
        ],

      // Custom classes
      className
    )

    const style =
      maxLines && truncate
        ? {
            display: "-webkit-box",
            WebkitBoxOrient: "vertical" as const,
            WebkitLineClamp: maxLines,
            overflow: "hidden",
          }
        : undefined

    return (
      <Component
        ref={ref}
        className={typographyClasses}
        style={style}
        title={title}
        dateTime={dateTime}
        value={value}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Typography.displayName = "Typography"
