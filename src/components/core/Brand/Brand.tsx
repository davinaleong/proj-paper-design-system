import { forwardRef } from "react"
import { clsx } from "clsx"
import { Typography } from "../Typography"
import { Button } from "../../forms/Button"
import type { TypographyVariant } from "../Typography/types"
import { containerQueryContext } from "../../../utils/containerFonts"

export interface BrandProps {
  size?: "sm" | "md" | "lg"
  showLogo?: boolean
  showText?: boolean
  logoSrc?: string
  title?: string
  subtitle?: string
  titleVariant?: TypographyVariant
  subtitleVariant?: TypographyVariant
  onClick?: () => void
  className?: string
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
    const finalTitleVariant = titleVariant || config.titleVariant
    const finalSubtitleVariant = subtitleVariant || config.subtitleVariant

    const rootClasses = clsx(
      "flex items-center",
      config.gap,
      onClick && "cursor-pointer hover:opacity-80 transition-opacity",
      scaleWithParent && containerQueryContext,
      className
    )

    // --- Layout decision rules ---
    const hasSubtitle = !!subtitle && size !== "sm"
    const showLogoBlock = showLogo && logoSrc
    const showTextBlock = showText && (title || hasSubtitle)

    const renderText = () => {
      if (!showTextBlock) return null

      // Subtitle layout (two lines)
      if (hasSubtitle) {
        return (
          <div className="flex flex-col items-start min-w-0 flex-1">
            <Typography
              variant={finalTitleVariant}
              className="font-playfair leading-tight whitespace-nowrap"
            >
              {title}
            </Typography>
            <Typography
              variant={finalSubtitleVariant}
              color="muted"
              className="mt-0.5 whitespace-nowrap"
            >
              {subtitle}
            </Typography>
          </div>
        )
      }

      // Title only (single line)
      return (
        <Typography
          variant={finalTitleVariant}
          className="font-playfair leading-tight whitespace-nowrap"
        >
          {title}
        </Typography>
      )
    }

    const content = (
      <>
        {showLogoBlock && (
          <img
            src={logoSrc}
            alt={`${title} logo`}
            className={clsx(config.logo, "object-contain flex-shrink-0")}
          />
        )}
        {renderText()}
      </>
    )

    if (onClick) {
      return (
        <Button
          variant="plain"
          className={clsx(
            rootClasses,
            "p-0 h-auto min-w-0 hover:bg-transparent hover:opacity-80"
          )}
          onClick={onClick}
          {...props}
        >
          {content}
        </Button>
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
