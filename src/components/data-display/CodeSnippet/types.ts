import type { ColorVariant } from "../../../utils/colors"

export type CodeSnippetSize = "xs" | "sm" | "md" | "lg" | "xl"
export type CodeSnippetVariant = "solid" | "soft" | "outline" | "ghost"
export type CodeSnippetLanguage = 
  | "javascript" | "typescript" | "jsx" | "tsx"
  | "html" | "css" | "scss" | "json" | "yaml"
  | "python" | "java" | "csharp" | "php"
  | "bash" | "shell" | "powershell" | "sql"
  | "markdown" | "xml" | "diff" | "plaintext"

export interface CodeSnippetProps {
  /**
   * The code content to display (as children)
   * Usage: <CodeSnippet>{codeString}</CodeSnippet>
   */
  children?: string
  /**
   * The code content to display (as prop)
   * Usage: <CodeSnippet code={codeString} />
   * Note: If both children and code are provided, code prop takes precedence
   */
  code?: string
  /**
   * Programming language for syntax highlighting
   * @default "plaintext"
   */
  language?: CodeSnippetLanguage
  /**
   * Size variant
   * @default "md"
   */
  size?: CodeSnippetSize
  /**
   * Visual variant
   * @default "soft"
   */
  variant?: CodeSnippetVariant
  /**
   * Color theme
   * @default "slate"
   */
  color?: ColorVariant
  /**
   * Show line numbers
   * @default false
   */
  showLineNumbers?: boolean
  /**
   * Lines to highlight (1-indexed)
   */
  highlightLines?: number[]
  /**
   * Maximum height before scrolling
   */
  maxHeight?: string | number
  /**
   * Show copy button
   * @default true
   */
  showCopyButton?: boolean
  /**
   * Custom copy button text
   * @default "Copy"
   */
  copyButtonText?: string
  /**
   * Custom copied button text
   * @default "Copied!"
   */
  copiedButtonText?: string
  /**
   * Show filename/title
   */
  filename?: string
  /**
   * Allow text wrapping
   * @default false
   */
  wrap?: boolean
  /**
   * Disable syntax highlighting
   * @default false
   */
  noSyntaxHighlight?: boolean
  /**
   * Show alternating line colors for better readability
   * @default false
   */
  alternateLines?: boolean
  /**
   * Custom CSS class
   */
  className?: string
  /**
   * Callback when code is copied
   */
  onCopy?: (code: string) => void
}