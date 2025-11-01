import React, { useMemo } from "react"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from "lucide-react"
import { cn } from "../../../utils/cn"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { Typography } from "../../core/Typography"
import type { PaginationProps, PaginationFormat, PaginationVariant } from "./types"
import "./Pagination.css"

// Helper functions for different number formats
const formatPageNumber = (page: number, format: PaginationFormat): string => {
  switch (format) {
    case "numbers":
      return page.toString()
    case "letters":
      return String.fromCharCode(96 + page) // a, b, c, d...
    case "roman":
      return toRoman(page).toLowerCase()
    default:
      return page.toString()
  }
}

const toRoman = (num: number): string => {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  
  let result = ""
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i]
      num -= values[i]
    }
  }
  return result
}

// Generate pagination items
const generatePaginationItems = (
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  showBoundaries: boolean,
  format: PaginationFormat
) => {
  const items: Array<{
    type: "page" | "ellipsis" | "first" | "prev" | "next" | "last"
    page?: number
    label?: string
    disabled?: boolean
  }> = []

  // Helper to add ellipsis
  const addEllipsis = () => {
    items.push({ type: "ellipsis", label: "..." })
  }

  // Helper to add page
  const addPage = (page: number) => {
    items.push({
      type: "page",
      page,
      label: formatPageNumber(page, format)
    })
  }

  if (format === "prev-next") {
    // Simple prev/next format
    items.push({
      type: "prev",
      page: currentPage - 1,
      label: "Previous",
      disabled: currentPage <= 1
    })
    items.push({
      type: "next",
      page: currentPage + 1,
      label: "Next",
      disabled: currentPage >= totalPages
    })
    return items
  }

  if (format === "first-last") {
    // First, Prev, Current, Next, Last format
    items.push({
      type: "first",
      page: 1,
      label: "First",
      disabled: currentPage <= 1
    })
    items.push({
      type: "prev",
      page: currentPage - 1,
      label: "Previous",
      disabled: currentPage <= 1
    })
    addPage(currentPage)
    items.push({
      type: "next",
      page: currentPage + 1,
      label: "Next",
      disabled: currentPage >= totalPages
    })
    items.push({
      type: "last",
      page: totalPages,
      label: "Last",
      disabled: currentPage >= totalPages
    })
    return items
  }

  // For numbers, letters, and roman formats
  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1

  // Always show first page if boundaries enabled
  if (showBoundaries && currentPage > 1) {
    addPage(1)
    if (shouldShowLeftDots) {
      addEllipsis()
    }
  }

  // Show sibling pages
  for (let page = leftSiblingIndex; page <= rightSiblingIndex; page++) {
    if (!showBoundaries || page !== 1) {
      addPage(page)
    }
  }

  // Always show last page if boundaries enabled
  if (showBoundaries && rightSiblingIndex < totalPages) {
    if (shouldShowRightDots) {
      addEllipsis()
    }
    addPage(totalPages)
  }

  return items
}

const getButtonVariant = (variant: PaginationVariant, isActive: boolean) => {
  if (isActive) {
    return variant === "link" ? "link" : "solid"
  }
  return variant === "plain" ? "plain" : variant
}

const getIconButtonVariant = (variant: PaginationVariant): "solid" | "outline" | "ghost" | "plain" => {
  return variant === "link" ? "outline" : variant === "plain" ? "plain" : variant
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  variant = "outline",
  color = "primary",
  size = "md",
  format = "numbers",
  siblingCount = 1,
  showBoundaries = true,
  labels = {},
  disabled = false,
  showPageInfo = false,
  className,
  onPageChange
}) => {
  const defaultLabels = {
    previous: "Previous",
    next: "Next",
    first: "First",
    last: "Last",
    page: "Page",
    ...labels
  }

  const paginationItems = useMemo(() => {
    return generatePaginationItems(
      currentPage,
      totalPages,
      siblingCount,
      showBoundaries,
      format
    )
  }, [currentPage, totalPages, siblingCount, showBoundaries, format])

  const handlePageChange = (page: number) => {
    if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange?.(page)
    }
  }

  if (totalPages <= 1) {
    return null
  }

  const sizeClasses = {
    sm: "gap-1",
    md: "gap-2", 
    lg: "gap-3"
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Page Info */}
      {showPageInfo && (
        <div className="text-center mb-4">
          <Typography variant="bodySmall" color="muted">
            {defaultLabels.page} {formatPageNumber(currentPage, format)} of {formatPageNumber(totalPages, format)}
          </Typography>
        </div>
      )}

      {/* Pagination Controls - Scrollable Container */}
      <div className="w-full overflow-x-auto pagination-scroll-container"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none'  /* IE and Edge */
        }}
      >
        <div
          className={cn(
            "flex items-center w-max min-w-full px-2 py-1",
            // Center content when it fits, otherwise let it scroll
            "justify-center",
            sizeClasses[size]
          )}
        >
          <nav 
            className="flex items-center gap-2" 
            aria-label="Pagination"
          >
        {format === "prev-next" && (
          <>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              icon={ChevronLeft}
              iconPosition="left"
            >
              {defaultLabels.previous}
            </Button>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              icon={ChevronRight}
              iconPosition="right"
            >
              {defaultLabels.next}
            </Button>
          </>
        )}

        {format === "first-last" && (
          <>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage <= 1}
              onClick={() => handlePageChange(1)}
              icon={ChevronsLeft}
              iconPosition="left"
            >
              {defaultLabels.first}
            </Button>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              icon={ChevronLeft}
              iconPosition="left"
            >
              {defaultLabels.previous}
            </Button>
            <Button
              variant={getButtonVariant(variant, true)}
              color={color}
              size={size}
              disabled={true}
            >
              {formatPageNumber(currentPage, format)}
            </Button>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              icon={ChevronRight}
              iconPosition="right"
            >
              {defaultLabels.next}
            </Button>
            <Button
              variant={getButtonVariant(variant, false)}
              color={color}
              size={size}
              disabled={disabled || currentPage >= totalPages}
              onClick={() => handlePageChange(totalPages)}
              icon={ChevronsRight}
              iconPosition="right"
            >
              {defaultLabels.last}
            </Button>
          </>
        )}

        {(format === "numbers" || format === "letters" || format === "roman") && (
          <>
            {/* Previous button for numbered formats */}
            <IconButton
              variant={getIconButtonVariant(variant)}
              color={color}
              size={size}
              icon={ChevronLeft}
              aria-label={defaultLabels.previous}
              disabled={disabled || currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />

            {/* Page numbers */}
            {paginationItems.map((item, index) => {
              if (item.type === "ellipsis") {
                return (
                  <div
                    key={`ellipsis-${index}`}
                    className="flex items-center justify-center px-2"
                    aria-hidden="true"
                  >
                    <MoreHorizontal className="h-4 w-4 text-stone-400" />
                  </div>
                )
              }

              if (item.type === "page" && item.page !== undefined) {
                const isActive = item.page === currentPage
                return (
                  <Button
                    key={`page-${item.page}`}
                    variant={getButtonVariant(variant, isActive)}
                    color={color}
                    size={size}
                    disabled={disabled}
                    onClick={() => handlePageChange(item.page!)}
                    aria-label={`${defaultLabels.page} ${item.label}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Button>
                )
              }

              return null
            })}

            {/* Next button for numbered formats */}
            <IconButton
              variant={getIconButtonVariant(variant)}
              color={color}
              size={size}
              icon={ChevronRight}
              aria-label={defaultLabels.next}
              disabled={disabled || currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </>
        )}
        </nav>
        </div>
      </div>
    </div>
  )
}