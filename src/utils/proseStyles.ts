/**
 * Paper Theme Prose Styles
 * 
 * Comprehensive CSS styles for prose content (markdown, generated content, etc.)
 * that matches the Dav/Devs Paper Design System aesthetic.
 * 
 * Features:
 * - Paper theme colors and typography
 * - Container-responsive font sizing
 * - Semantic HTML styling
 * - Code syntax highlighting
 * - Enhanced readability
 * - Accessibility compliance
 */

import { 
  containerResponsiveHeadings, 
  containerResponsiveBody, 
  containerResponsiveFonts 
} from "./containerFonts"

/**
 * Core prose styles that can be applied to any container
 * Usage: <div className={proseStyles}>...</div>
 */
export const proseStyles = `
  max-w-none [container-type:inline-size] rounded-sm
  
  [&_h1]:font-playfair [&_h1]:${containerResponsiveHeadings.h1} [&_h1]:font-bold [&_h1]:tracking-tight [&_h1]:text-gray-900 [&_h1]:mb-8 [&_h1]:mt-12 [&_h1:first-child]:mt-0
  [&_h2]:font-playfair [&_h2]:${containerResponsiveHeadings.h2} [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-gray-900 [&_h2]:mb-6 [&_h2]:mt-10 [&_h2]:border-b [&_h2]:border-stone-200 [&_h2]:pb-2
  [&_h3]:font-playfair [&_h3]:${containerResponsiveHeadings.h3} [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-gray-900 [&_h3]:mb-4 [&_h3]:mt-8
  [&_h4]:font-playfair [&_h4]:${containerResponsiveHeadings.h4} [&_h4]:font-semibold [&_h4]:text-gray-900 [&_h4]:mb-3 [&_h4]:mt-6
  [&_h5]:font-playfair [&_h5]:${containerResponsiveHeadings.h5} [&_h5]:font-medium [&_h5]:text-gray-900 [&_h5]:mb-2 [&_h5]:mt-4
  [&_h6]:font-playfair [&_h6]:${containerResponsiveHeadings.h6} [&_h6]:font-medium [&_h6]:text-gray-900 [&_h6]:mb-2 [&_h6]:mt-4
  
  [&_p]:font-montserrat [&_p]:${containerResponsiveBody.regular} [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:mb-6
  [&_.lead]:font-montserrat [&_.lead]:${containerResponsiveBody.lead} [&_.lead]:text-gray-600 [&_.lead]:mb-8
  
  [&_ul]:font-montserrat [&_ul]:${containerResponsiveBody.regular} [&_ul]:text-gray-700 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
  [&_ol]:font-montserrat [&_ol]:${containerResponsiveBody.regular} [&_ol]:text-gray-700 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6
  [&_li]:mb-2 [&_li]:leading-relaxed
  
  [&_a]:text-teal-700 [&_a]:no-underline [&_a]:border-b [&_a]:border-teal-200
  [&_a:hover]:text-teal-800 [&_a:hover]:border-teal-300
  [&_a:focus]:outline-none [&_a:focus]:ring-2 [&_a:focus]:ring-teal-500 [&_a:focus]:ring-offset-2 [&_a:focus]:ring-offset-stone-50
  
  [&_blockquote]:border-l-4 [&_blockquote]:border-stone-300 [&_blockquote]:bg-stone-50 [&_blockquote]:p-6 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8
  [&_blockquote]:font-montserrat [&_blockquote]:${containerResponsiveBody.regular} [&_blockquote]:italic [&_blockquote]:text-gray-600
  
  [&_code]:font-source-code-pro [&_code]:${containerResponsiveFonts.sm} [&_code]:bg-stone-100 [&_code]:text-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-sm [&_code]:border [&_code]:border-stone-200
  
  [&_pre]:font-source-code-pro [&_pre]:${containerResponsiveFonts.sm} [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-6 [&_pre]:rounded-sm [&_pre]:border [&_pre]:border-stone-200 [&_pre]:overflow-x-auto [&_pre]:my-8 [&_pre]:shadow-sm
  [&_pre_code]:bg-transparent [&_pre_code]:border-none [&_pre_code]:p-0 [&_pre_code]:text-inherit
  
  [&_table]:border-collapse [&_table]:border [&_table]:border-stone-200 [&_table]:rounded-lg [&_table]:overflow-hidden [&_table]:shadow-sm [&_table]:my-8 [&_table]:w-full
  [&_thead]:bg-stone-100
  [&_th]:font-montserrat [&_th]:font-semibold [&_th]:${containerResponsiveFonts.sm} [&_th]:text-gray-900 [&_th]:p-4 [&_th]:border-b [&_th]:border-stone-200 [&_th]:text-left
  [&_td]:font-montserrat [&_td]:${containerResponsiveFonts.sm} [&_td]:text-gray-700 [&_td]:p-4 [&_td]:border-b [&_td]:border-stone-100
  [&_tbody_tr:hover]:bg-stone-50
  
  [&_hr]:border-stone-300 [&_hr]:my-12 [&_hr]:border-t-2
  
  [&_img]:rounded-lg [&_img]:shadow-md [&_img]:border [&_img]:border-stone-200 [&_img]:my-8
  [&_figcaption]:font-montserrat [&_figcaption]:${containerResponsiveFonts.sm} [&_figcaption]:text-gray-600 [&_figcaption]:text-center [&_figcaption]:mt-4 [&_figcaption]:italic
  
  [&_strong]:font-bold [&_strong]:text-gray-900
  [&_em]:italic [&_em]:text-gray-700
  [&_small]:font-montserrat [&_small]:${containerResponsiveFonts.xs} [&_small]:text-gray-600
  [&_mark]:bg-yellow-100 [&_mark]:text-yellow-900 [&_mark]:px-1 [&_mark]:py-0.5 [&_mark]:rounded-sm
  [&_kbd]:font-source-code-pro [&_kbd]:${containerResponsiveFonts.xs} [&_kbd]:font-medium [&_kbd]:bg-stone-100 [&_kbd]:border [&_kbd]:border-stone-300 [&_kbd]:rounded [&_kbd]:px-2 [&_kbd]:py-1 [&_kbd]:shadow-sm [&_kbd]:text-gray-800
  [&_del]:line-through [&_del]:text-gray-500
  [&_ins]:underline [&_ins]:decoration-green-500 [&_ins]:text-green-700
  [&_sub]:${containerResponsiveFonts.xs} [&_sub]:align-sub
  [&_sup]:${containerResponsiveFonts.xs} [&_sup]:align-super
`

/**
 * Dark mode prose styles for paper theme
 */
export const proseDarkStyles = `
  dark:[&_h1]:text-gray-100 dark:[&_h2]:text-gray-100 dark:[&_h3]:text-gray-100 dark:[&_h4]:text-gray-100 dark:[&_h5]:text-gray-100 dark:[&_h6]:text-gray-100
  dark:[&_p]:text-gray-100
  dark:[&_.lead]:text-gray-400
  dark:[&_ul]:text-gray-100 dark:[&_ol]:text-gray-100
  
  dark:[&_a]:text-teal-400 dark:[&_a]:border-teal-800
  dark:[&_a:hover]:text-teal-300 dark:[&_a:hover]:border-teal-700
  dark:[&_a:focus]:ring-teal-400 dark:[&_a:focus]:ring-offset-gray-900
  
  dark:[&_blockquote]:border-gray-600 dark:[&_blockquote]:bg-gray-800 dark:[&_blockquote]:text-gray-400
  
  dark:[&_code]:bg-gray-800 dark:[&_code]:text-gray-100 dark:[&_code]:border-gray-600
  dark:[&_pre]:bg-gray-950 dark:[&_pre]:border-gray-700
  
  dark:[&_table]:border-gray-600
  dark:[&_thead]:bg-gray-800
  dark:[&_th]:text-gray-100 dark:[&_th]:border-gray-600
  dark:[&_td]:text-gray-100 dark:[&_td]:border-gray-700
  dark:[&_tbody_tr:hover]:bg-gray-800
  
  dark:[&_hr]:border-gray-600
  dark:[&_img]:border-gray-600
  dark:[&_figcaption]:text-gray-400
  
  dark:[&_strong]:text-gray-100
  dark:[&_em]:text-gray-100
  dark:[&_small]:text-gray-400
  
  dark:[&_mark]:bg-yellow-900 dark:[&_mark]:text-yellow-100
  dark:[&_kbd]:bg-gray-800 dark:[&_kbd]:border-gray-600 dark:[&_kbd]:text-gray-100
  
  dark:[&_del]:text-gray-500
  dark:[&_ins]:text-green-400
`

/**
 * Size variants for prose content
 */
export const proseSizeVariants = {
  sm: `text-sm`,
  base: `text-base`,
  lg: `text-lg`,
  xl: `text-xl`,
  "2xl": `text-2xl`
} as const

/**
 * Complete prose styles with all variants
 * Usage: <div className={getProseStyles('lg', true)}>...</div>
 */
export function getProseStyles(
  size: keyof typeof proseSizeVariants = 'base',
  includeDark: boolean = true
): string {
  return [
    proseStyles,
    proseSizeVariants[size],
    includeDark && proseDarkStyles
  ].filter(Boolean).join(' ')
}

/**
 * Prose styles for specific content types
 */
export const proseContentTypes = {
  // Article/blog content
  article: `${proseStyles} [&_h1]:text-5xl [&_h2]:text-4xl [&_p]:text-lg [&_p]:leading-loose`,
  
  // Documentation content
  documentation: `${proseStyles}`,
  
  // Comment/description content
  comment: `${proseStyles} [&_h1]:text-2xl [&_h2]:text-xl [&_p]:text-sm [&_p]:mb-4`,
  
  // README/markdown files
  markdown: `${proseStyles}`,
  
  // Code documentation
  codeDoc: `${proseStyles} [&_code]:text-xs [&_pre]:text-xs`
} as const

/**
 * Custom prose variants with Paper theme enhancements
 */
export const proseVariants = {
  // Elegant variant for premium content
  elegant: `
    ${proseStyles}
    [&_h1]:text-6xl [&_h1]:text-center [&_h1]:mb-12
    [&_h2]:text-4xl [&_h2]:text-center [&_h2]:border-none [&_h2]:mb-8
    [&_p]:text-lg [&_p]:leading-loose [&_p]:mb-8
    [&_blockquote]:text-xl [&_blockquote]:leading-loose
  `,
  
  // Compact variant for dense content
  compact: `
    ${proseStyles}
    [&_h1]:mb-4 [&_h2]:mb-3 [&_h3]:mb-2 [&_h4]:mb-2 [&_h5]:mb-1 [&_h6]:mb-1
    [&_p]:mb-4 [&_ul]:mb-4 [&_ol]:mb-4
  `,
  
  // Code-focused variant
  code: `
    ${proseStyles}
    [&_code]:text-sm [&_pre]:text-sm
    [&_code]:bg-gray-900 [&_code]:text-gray-100 [&_code]:px-3 [&_code]:py-2
    [&_pre]:bg-gray-950 [&_pre]:border-gray-700 [&_pre]:rounded-sm
  `
} as const

export type ProseSize = keyof typeof proseSizeVariants
export type ProseContentType = keyof typeof proseContentTypes
export type ProseVariant = keyof typeof proseVariants