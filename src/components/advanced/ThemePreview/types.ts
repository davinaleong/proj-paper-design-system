import type { ReactNode } from 'react'

export type ThemePreviewSize = 'sm' | 'md' | 'lg'
export type ThemePreviewVariant = 'card' | 'inline' | 'full'
export type ThemeMode = 'light' | 'dark' | 'paper' | 'system'

export interface ThemeColorPalette {
  /**
   * Primary color scheme
   */
  primary: string
  
  /**
   * Secondary color scheme
   */
  secondary: string
  
  /**
   * Background color
   */
  background: string
  
  /**
   * Surface/card background
   */
  surface: string
  
  /**
   * Text color
   */
  text: string
  
  /**
   * Muted text color
   */
  textMuted: string
  
  /**
   * Border color
   */
  border: string
  
  /**
   * Accent color
   */
  accent?: string
}

export interface ThemeDefinition {
  /**
   * Theme identifier
   */
  id: string
  
  /**
   * Theme display name
   */
  name: string
  
  /**
   * Theme description
   */
  description?: string
  
  /**
   * Theme mode
   */
  mode: ThemeMode
  
  /**
   * Color palette
   */
  colors: ThemeColorPalette
  
  /**
   * Preview image URL
   */
  preview?: string
  
  /**
   * Whether this theme is currently active
   */
  active?: boolean
  
  /**
   * Whether this theme is a premium theme
   */
  premium?: boolean
}

export interface ThemePreviewProps {
  /**
   * Available themes to preview
   */
  themes: ThemeDefinition[]
  
  /**
   * Currently active theme ID
   */
  activeTheme?: string
  
  /**
   * Size variant
   * @default 'md'
   */
  size?: ThemePreviewSize
  
  /**
   * Display variant
   * @default 'card'
   */
  variant?: ThemePreviewVariant
  
  /**
   * Number of columns in grid layout
   * @default 3
   */
  columns?: number
  
  /**
   * Whether to show theme names
   * @default true
   */
  showNames?: boolean
  
  /**
   * Whether to show theme descriptions
   * @default true
   */
  showDescriptions?: boolean
  
  /**
   * Whether to show color swatches
   * @default true
   */
  showColors?: boolean
  
  /**
   * Whether to show component previews
   * @default true
   */
  showComponents?: boolean
  
  /**
   * Custom preview content
   */
  previewContent?: ReactNode
  
  /**
   * Theme selection callback
   */
  onThemeSelect?: (theme: ThemeDefinition) => void
  
  /**
   * Theme hover callback
   */
  onThemeHover?: (theme: ThemeDefinition | null) => void
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string
}
