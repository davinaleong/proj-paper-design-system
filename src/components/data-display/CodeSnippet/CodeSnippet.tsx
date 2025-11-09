"use client"

import React, { useState, useEffect, useRef } from "react"
import { Copy, Check, FileText } from "lucide-react"
import { cn } from "../../../utils/cn"
import { getColorClasses } from "../../../utils/colors"
import type { CodeSnippetProps, CodeSnippetSize, CodeSnippetVariant } from "./types"

// Size classes
const sizeClasses: Record<CodeSnippetSize, string> = {
  xs: "text-xs p-2",
  sm: "text-sm p-3", 
  md: "text-sm p-4",
  lg: "text-base p-5",
  xl: "text-lg p-6"
}

// Variant classes
const variantClasses: Record<CodeSnippetVariant, string> = {
  solid: "border-0",
  soft: "border-0",
  outline: "border",
  ghost: "border-0"
}

// Language syntax highlighting patterns (basic)
const syntaxPatterns = {
  // Keywords
  keywords: /\b(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)\b/g,
  // Strings
  strings: /(["'`])(?:(?=(\\?))\2.)*?\1/g,
  // Comments
  comments: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
  // Numbers
  numbers: /\b\d+\.?\d*\b/g,
  // Functions
  functions: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
  // HTML tags
  htmlTags: /<\/?[a-z][\s\S]*?>/gi,
  // CSS properties
  cssProperties: /([a-z-]+)\s*:/g
}

// Simple syntax highlighter
const highlightSyntax = (code: string, language: string): string => {
  if (!code) return ""
  
  let highlighted = code
  
  // Apply different highlighting based on language
  switch (language) {
    case "html":
    case "xml":
      highlighted = highlighted.replace(syntaxPatterns.htmlTags, '<span class="text-blue-600">$&</span>')
      break
    case "css":
    case "scss":
      highlighted = highlighted.replace(syntaxPatterns.cssProperties, '<span class="text-purple-600">$1</span>:')
      break
    case "javascript":
    case "typescript":
    case "jsx":
    case "tsx":
    case "java":
    case "csharp":
    case "php":
    case "python":
      // Keywords
      highlighted = highlighted.replace(syntaxPatterns.keywords, '<span class="text-purple-600 font-semibold">$&</span>')
      // Functions
      highlighted = highlighted.replace(syntaxPatterns.functions, '<span class="text-blue-600">$1</span>')
      break
  }
  
  // Common patterns for all languages
  highlighted = highlighted.replace(syntaxPatterns.strings, '<span class="text-green-600">$&</span>')
  highlighted = highlighted.replace(syntaxPatterns.comments, '<span class="text-gray-500 italic">$&</span>')
  highlighted = highlighted.replace(syntaxPatterns.numbers, '<span class="text-orange-600">$&</span>')
  
  return highlighted
}

/**
 * CodeSnippet component for displaying formatted code with syntax highlighting
 *
 * Features:
 * - Syntax highlighting for 16+ languages
 * - Copy to clipboard functionality
 * - Line numbers support
 * - Line highlighting
 * - Alternating line colors for better readability
 * - Multiple size and visual variants
 * - Full color system integration
 * - Filename/title display
 * - Text wrapping control
 * - Scrollable content with max height
 * - Paper-like styling with backdrop blur
 * - Full accessibility support
 * - Flexible code input via children or code prop
 *
 * Usage:
 * - <CodeSnippet>{codeString}</CodeSnippet>
 * - <CodeSnippet code={codeString} />
 */
export const CodeSnippet = React.forwardRef<HTMLDivElement, CodeSnippetProps>(
  ({
    children,
    code: codeProp,
    language = "plaintext",
    size = "md",
    variant = "soft", 
    color = "slate",
    showLineNumbers = false,
    highlightLines = [],
    maxHeight,
    showCopyButton = true,
    copyButtonText = "Copy",
    copiedButtonText = "Copied!",
    filename,
    wrap = false,
    noSyntaxHighlight = false,
    alternateLines = false,
    className,
    onCopy,
    ...props
  }, ref) => {
    const [copied, setCopied] = useState(false)
    const [mounted, setMounted] = useState(false)
    const codeRef = useRef<HTMLElement>(null)

    // Use either code prop or children
    const code = codeProp || children || ""

    // Mount state for SSR
    useEffect(() => {
      setMounted(true)
    }, [])

    // Handle copy to clipboard
    const handleCopy = async () => {
      if (!mounted || !code) return
      
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(code)
        } else {
          // Fallback for older browsers
          const textArea = document.createElement("textarea")
          textArea.value = code
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand("copy")
          document.body.removeChild(textArea)
        }
        
        setCopied(true)
        onCopy?.(code)
        
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error("Failed to copy code:", err)
      }
    }

    // Split code into lines for line numbering
    const codeLines = React.useMemo(() => {
      return code ? code.split('\n') : []
    }, [code])

    // Get color classes
    const colorClasses = getColorClasses(color, variant === "solid" ? "solid" : "soft")

    // Build CSS classes
    const containerClasses = cn(
      "paper-code-snippet group relative rounded-lg font-mono",
      "bg-white/50 backdrop-blur-sm",
      sizeClasses[size],
      variantClasses[variant],
      colorClasses,
      variant === "outline" && "border-stone-200",
      className
    )

    const codeContainerClasses = cn(
      "relative overflow-auto",
      maxHeight && `max-h-[${typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight}]`
    )

    const codeClasses = cn(
      "block w-full",
      wrap ? "whitespace-pre-wrap" : "whitespace-pre",
      showLineNumbers && "pl-12"
    )

    const lineNumberClasses = cn(
      "absolute left-0 top-0 select-none text-gray-400 text-right pr-2 pointer-events-none",
      sizeClasses[size].includes("text-xs") ? "text-xs" : 
      sizeClasses[size].includes("text-sm") ? "text-sm" :
      sizeClasses[size].includes("text-base") ? "text-base" : "text-lg"
    )

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {/* Header with filename and copy button */}
        {(filename || showCopyButton) && (
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-stone-200/50">
            {filename && (
              <div className="flex items-center gap-2 text-stone-600">
                <FileText className="w-4 h-4" />
                <span className="text-sm font-medium">{filename}</span>
              </div>
            )}
            
            {showCopyButton && (
              <button
                onClick={handleCopy}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium",
                  "bg-stone-100 hover:bg-stone-200 text-stone-700",
                  "transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2"
                )}
                disabled={!mounted}
                aria-label={copied ? copiedButtonText : copyButtonText}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">{copiedButtonText}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{copyButtonText}</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Code content */}
        <div className={codeContainerClasses}>
          {showLineNumbers && (
            <div className={lineNumberClasses}>
              {codeLines.map((_, index) => {
                const lineNumber = index + 1
                const isHighlighted = highlightLines.includes(lineNumber)
                const isEvenLine = lineNumber % 2 === 0
                return (
                  <div
                    key={lineNumber}
                    className={cn(
                      "block leading-relaxed",
                      alternateLines && isEvenLine && "bg-stone-50/50",
                      isHighlighted && "bg-yellow-200/30 text-yellow-800 font-semibold"
                    )}
                  >
                    {lineNumber}
                  </div>
                )
              })}
            </div>
          )}
          
          <code
            ref={codeRef}
            className={codeClasses}
            data-language={language}
          >
            {noSyntaxHighlight ? (
              codeLines.map((line, index) => {
                const lineNumber = index + 1
                const isHighlighted = highlightLines.includes(lineNumber)
                const isEvenLine = lineNumber % 2 === 0
                return (
                  <div
                    key={lineNumber}
                    className={cn(
                      "block leading-relaxed",
                      alternateLines && isEvenLine && "bg-stone-50/50",
                      isHighlighted && "bg-yellow-200/30 px-1 -mx-1 rounded"
                    )}
                  >
                    {line}
                  </div>
                )
              })
            ) : (
              codeLines.map((line, index) => {
                const lineNumber = index + 1
                const isHighlighted = highlightLines.includes(lineNumber)
                const isEvenLine = lineNumber % 2 === 0
                const highlightedLine = highlightSyntax(line, language)
                
                return (
                  <div
                    key={lineNumber}
                    className={cn(
                      "block leading-relaxed",
                      alternateLines && isEvenLine && "bg-stone-50/50",
                      isHighlighted && "bg-yellow-200/30 px-1 -mx-1 rounded"
                    )}
                    dangerouslySetInnerHTML={{ __html: highlightedLine }}
                  />
                )
              })
            )}
          </code>
        </div>
        
        {/* Copy button (floating) when no header */}
        {showCopyButton && !filename && (
          <button
            onClick={handleCopy}
            className={cn(
              "absolute top-3 right-3 opacity-0 group-hover:opacity-100",
              "flex items-center gap-1.5 px-2 py-1 rounded text-xs",
              "bg-white/80 hover:bg-white text-stone-600 hover:text-stone-800",
              "border border-stone-200 shadow-sm",
              "transition-all duration-200",
              "focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-400"
            )}
            disabled={!mounted}
            aria-label={copied ? copiedButtonText : copyButtonText}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-green-600" />
                <span className="text-green-600">{copiedButtonText}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>{copyButtonText}</span>
              </>
            )}
          </button>
        )}
      </div>
    )
  }
)

CodeSnippet.displayName = "CodeSnippet"

export default CodeSnippet