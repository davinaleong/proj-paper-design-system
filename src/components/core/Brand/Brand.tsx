import { forwardRef } from "react"
import { clsx } from "clsx"
import { Typography } from "../Typography"
import type { TypographyVariant } from "../Typography/types"
import { containerQueryContext } from "../../../utils/containerFonts"

export interface BrandProps {
  /**
   * Size variant of the brand
   */
  size?: "sm" | "md" | "lg"
  /**
   * Whether to show the logo
   */
  showLogo?: boolean
  /**
   * Whether to show the text
   */
  showText?: boolean
  /**
   * Custom logo source
   */
  logoSrc?: string
  /**
   * Brand text content
   */
  title?: string
  /**
   * Subtitle/tagline text
   */
  subtitle?: string
  /**
   * Custom title font size variant (overrides size preset)
   */
  titleVariant?: TypographyVariant
  /**
   * Custom subtitle font size variant (overrides size preset)
   */
  subtitleVariant?: TypographyVariant
  /**
   * Click handler for brand
   */
  onClick?: () => void
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * When true, the brand will act as a container query context so its
   * typography scales relative to the brand's container (and therefore
   * effectively scales with its parent element).
   * @default true
   */
  scaleWithParent?: boolean
}

const SIZE_CONFIG = {
  sm: {
    logo: "h-8 w-8",
    titleVariant: "h6" as const,
    subtitleVariant: "caption" as const,
    gap: "gap-2",
  },
  md: {
    logo: "h-10 w-10",
    titleVariant: "title" as const,
    subtitleVariant: "bodySmall" as const,
    gap: "gap-3",
  },
  lg: {
    logo: "h-12 w-12",
    titleVariant: "h4" as const,
    subtitleVariant: "body" as const,
    gap: "gap-4",
  },
} as const

export const Brand = forwardRef<HTMLDivElement, BrandProps>(
  (
    {
      size = "md",
      showLogo = true,
      showText = true,
      logoSrc = "/logo-coloured.svg",
      title = "Dav/Devs Paper",
      subtitle = "A warm, tactile design system",
      titleVariant,
      subtitleVariant,
      scaleWithParent = true,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const config = SIZE_CONFIG[size]

    // Use custom variants if provided, otherwise fall back to size presets
    const finalTitleVariant = titleVariant || config.titleVariant
    const finalSubtitleVariant = subtitleVariant || config.subtitleVariant

    const brandClasses = clsx(
      "flex items-center flex-shrink-0",
      config.gap,
      onClick && "cursor-pointer hover:opacity-80 transition-opacity",
      className
    )

    // If scaleWithParent is enabled, make this element a container query
    // context so Typography's container-aware classes will scale relative
    // to this element's inline size.
    const rootClasses = clsx(brandClasses, scaleWithParent && containerQueryContext)

    const content = (
      <div>
        {showLogo && (
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className={clsx(config.logo, "object-contain flex-shrink-0")}
          />
        )}

        {showText && (
          <div className="flex flex-col flex-1">
            <Typography
              variant={finalTitleVariant}
              className="font-playfair leading-tight"
            >
              {title}
            </Typography>
            {subtitle && size !== "sm" && (
              <Typography
                variant={finalSubtitleVariant}
                color="muted"
                className="mt-0.5"
              >
                {subtitle}
              </Typography>
            )}
          </div>
        )}
      </div>
    )

    if (onClick) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          onClick={onClick}
          className={rootClasses}
          {...props}
        >
          {content}
        </button>
      )
    }

    return (
      <div ref={ref} className={rootClasses} {...props}>
        {content}
      </div>
    )
  }
)

Brand.displayName = "Brand"
