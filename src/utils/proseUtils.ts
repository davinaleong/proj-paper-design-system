/**
 * Utility function to get prose styles as a string
 * Useful for applying to existing elements or in CSS-in-JS
 */

import { cn } from "./cn"
import { 
  getProseStyles, 
  proseContentTypes, 
  proseVariants,
  type ProseSize, 
  type ProseContentType, 
  type ProseVariant 
} from "./proseStyles"

export function useProseStyles(options: {
  size?: ProseSize
  contentType?: ProseContentType
  variant?: ProseVariant
  includeDark?: boolean
  constrained?: boolean
  className?: string
} = {}) {
  const {
    size = "base",
    contentType,
    variant,
    includeDark = true,
    constrained = true,
    className
  } = options

  const getStyles = () => {
    if (contentType) {
      return proseContentTypes[contentType]
    }
    
    if (variant) {
      return proseVariants[variant]
    }
    
    return getProseStyles(size, includeDark)
  }

  return cn(
    getStyles(),
    "[container-type:inline-size]",
    constrained && "max-w-4xl mx-auto",
    className
  )
}