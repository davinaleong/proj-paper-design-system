import { forwardRef } from "react"
import { cn } from "../../../utils/cn"
import { 
  getProseStyles, 
  proseContentTypes, 
  proseVariants,
} from "../../../utils/proseStyles"
import type { ProseProps } from "./types"

/**
 * Prose component for rendering styled markdown and rich text content
 * 
 * Provides Paper theme-consistent styling for all common prose elements:
 * - Headings with Playfair Display font
 * - Body text with Montserrat font
 * - Code blocks with Source Code Pro font
 * - Tables, lists, blockquotes, and more
 * - Container-responsive typography
 * - Dark mode support
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <Prose>
 *   <h1>Article Title</h1>
 *   <p>Article content...</p>
 * </Prose>
 * 
 * // With content type preset
 * <Prose contentType="article">
 *   {markdownContent}
 * </Prose>
 * 
 * // With custom variant
 * <Prose variant="elegant" size="lg">
 *   {premiumContent}
 * </Prose>
 * ```
 */
export const Prose = forwardRef<HTMLElement, ProseProps>(
  (
    {
      size = "base",
      contentType,
      variant,
      includeDark = true,
      constrained = true,
      className,
      children,
      as = "div",
      ...props
    },
    ref
  ) => {
    const Component = as as React.ElementType

    // Determine which styles to apply
    const getStyles = () => {
      if (contentType) {
        return proseContentTypes[contentType]
      }
      
      if (variant) {
        return proseVariants[variant]
      }
      
      return getProseStyles(size, includeDark)
    }

    const proseClasses = cn(
      // Base prose styles
      getStyles(),
      
      // Container query context for responsive typography
      "[container-type:inline-size]",
      
      // Width constraints
      constrained && "max-w-4xl mx-auto",
      
      // Custom classes
      className
    )

    return (
      <Component ref={ref} className={proseClasses} {...props}>
        {children}
      </Component>
    )
  }
)

Prose.displayName = "Prose"
