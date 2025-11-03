import type { ProseSize, ProseContentType, ProseVariant } from "../../../utils/proseStyles"

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size variant for the prose content
   * @default "base"
   */
  size?: ProseSize
  
  /**
   * Content type preset with optimized styling
   */
  contentType?: ProseContentType
  
  /**
   * Style variant for different use cases
   */
  variant?: ProseVariant
  
  /**
   * Whether to include dark mode styles
   * @default true
   */
  includeDark?: boolean
  
  /**
   * Maximum width constraint
   * @default true
   */
  constrained?: boolean
  
  /**
   * Custom HTML element to render as
   * @default "div"
   */
  as?: keyof HTMLElementTagNameMap
}

export type { ProseSize, ProseContentType, ProseVariant }