import React from "react"
import { ArrowLeft } from "lucide-react"
import type { BreadcrumbHeaderProps } from "./types"
import { Breadcrumbs } from "../../navigation/Breadcrumbs"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { SearchBar } from "../../forms/SearchBar"
import { Typography } from "../../core/Typography"
import { Paper } from "../../core/Paper"
import { cn } from "../../../utils/cn"

const sizeClasses = {
  sm: {
    container: "p-4 gap-3",
    title: "h4" as const,
    subtitle: "caption" as const,
    metadata: "text-xs",
    actions: "gap-2",
  },
  md: {
    container: "p-6 gap-4",
    title: "h3" as const,
    subtitle: "body" as const,
    metadata: "text-sm",
    actions: "gap-3",
  },
  lg: {
    container: "p-8 gap-6",
    title: "h2" as const,
    subtitle: "body" as const,
    metadata: "text-base",
    actions: "gap-4",
  },
}

export const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs = [],
  actions = [],
  metadata = [],
  showBackButton = false,
  backButtonText = "Back",
  onBackClick,
  searchable = false,
  searchPlaceholder = "Search...",
  searchValue,
  onSearchChange,
  size = "md",
  compact = false,
  sticky = false,
  breadcrumbProps = {},
  className,
  titleClassName,
  actionsClassName,
  metadataClassName,
  prefixContent,
  suffixContent,
  onBreadcrumbClick,
}) => {
  const sizeConfig = sizeClasses[size]
  
  const hasActions = actions.length > 0 || searchable || suffixContent
  const hasMetadata = metadata.length > 0
  const hasBreadcrumbs = breadcrumbs.length > 0

  return (
    <Paper
      variant="elevated"
      className={cn(
        "border-b border-stone-200",
        sticky && "sticky top-0 z-40 backdrop-blur-sm bg-paper-50/95",
        compact ? "p-4" : sizeConfig.container,
        className
      )}
    >
      <div className="space-y-4">
        {/* Breadcrumbs Row */}
        {hasBreadcrumbs && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {showBackButton && (
                <IconButton
                  icon={ArrowLeft}
                  variant="ghost"
                  size="sm"
                  onClick={onBackClick}
                  aria-label={backButtonText}
                  className="md:hidden" // Only show on mobile
                />
              )}
              <Breadcrumbs
                items={breadcrumbs}
                size={size === "lg" ? "md" : "sm"}
                onItemClick={onBreadcrumbClick}
                {...breadcrumbProps}
              />
            </div>
            
            {/* Desktop back button as text link */}
            {showBackButton && (
              <Button
                variant="link"
                size="sm"
                onClick={onBackClick}
                className="hidden md:flex"
              >
                {backButtonText}
              </Button>
            )}
          </div>
        )}

        {/* Main Header Row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          {/* Title Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-3">
              {prefixContent && (
                <div className="flex-shrink-0">
                  {prefixContent}
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <Typography
                  variant={sizeConfig.title}
                  className={cn(
                    "text-stone-900 truncate",
                    compact && "text-lg",
                    titleClassName
                  )}
                >
                  {title}
                </Typography>
                
                {subtitle && (
                  <Typography
                    variant={compact ? "caption" : sizeConfig.subtitle}
                    className="text-stone-600 mt-1"
                  >
                    {subtitle}
                  </Typography>
                )}
              </div>
            </div>
          </div>

          {/* Actions Section */}
          {hasActions && (
            <div className={cn(
              "flex items-center flex-wrap",
              sizeConfig.actions,
              actionsClassName
            )}>
              {/* Search */}
              {searchable && (
                <div className="w-full sm:w-auto sm:min-w-64">
                  <SearchBar
                    placeholder={searchPlaceholder}
                    value={searchValue}
                    onChange={(e) => onSearchChange?.(e.target.value)}
                    size={size === "lg" ? "md" : "sm"}
                    className="w-full"
                  />
                </div>
              )}

              {/* Action Buttons */}
              {actions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.variant || "outline"}
                  color={action.color || "primary"}
                  size={size === "lg" ? "md" : "sm"}
                  icon={action.icon}
                  loading={action.loading}
                  disabled={action.disabled}
                  onClick={action.onClick}
                  className={action.className}
                >
                  {action.label}
                </Button>
              ))}

              {suffixContent && (
                <div className="flex-shrink-0">
                  {suffixContent}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Metadata Row */}
        {hasMetadata && (
          <div className={cn(
            "flex flex-wrap items-center gap-4 pt-2 border-t border-stone-100",
            compact && "pt-1 gap-3",
            metadataClassName
          )}>
            {metadata.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "flex items-center gap-1.5 text-stone-600",
                  sizeConfig.metadata,
                  item.className
                )}
              >
                {item.icon && (
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                )}
                <span className="font-medium">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Paper>
  )
}

BreadcrumbHeader.displayName = "BreadcrumbHeader"
