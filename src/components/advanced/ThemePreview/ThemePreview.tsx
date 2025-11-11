import { useState } from 'react'
import {
  Palette,
  Sun,
  Moon,
  Monitor,
  FileText,
  Check,
  Crown,
  Eye,
} from 'lucide-react'
import { Badge } from '../../layout/Badge'
import { Typography } from '../../core/Typography'
import { cn } from '../../../utils/cn'
import type { ThemePreviewProps, ThemeDefinition } from './types'

const sizeClasses = {
  sm: {
    grid: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3',
    card: 'p-3',
    preview: 'h-20',
    swatch: 'w-3 h-3',
    button: 'text-xs px-2 py-1',
  },
  md: {
    grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    card: 'p-4',
    preview: 'h-24',
    swatch: 'w-4 h-4',
    button: 'text-sm px-3 py-1.5',
  },
  lg: {
    grid: 'grid-cols-1 md:grid-cols-2 gap-6',
    card: 'p-6',
    preview: 'h-32',
    swatch: 'w-5 h-5',
    button: 'text-base px-4 py-2',
  },
}

const variantClasses = {
  card: 'bg-white border border-stone-300 rounded-lg shadow-sm hover:shadow-md transition-shadow',
  inline: 'bg-stone-50 border border-stone-200 rounded-md',
  full: 'bg-white border-2 border-stone-300 rounded-xl shadow-lg hover:shadow-xl transition-shadow',
}

const ThemeModeIcon = ({ mode }: { mode: string }) => {
  switch (mode) {
    case 'light':
      return <Sun className="h-4 w-4" />
    case 'dark':
      return <Moon className="h-4 w-4" />
    case 'paper':
      return <FileText className="h-4 w-4" />
    case 'system':
      return <Monitor className="h-4 w-4" />
    default:
      return <Palette className="h-4 w-4" />
  }
}

const ThemeColorSwatch = ({ color, size = 'md' }: { color: string; size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClass = size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'
  
  return (
    <div
      className={cn('rounded-full border border-stone-200', sizeClass)}
      style={{ backgroundColor: color }}
    />
  )
}

const ComponentPreview = ({ theme, size }: { theme: ThemeDefinition; size: 'sm' | 'md' | 'lg' }) => {
  const classes = sizeClasses[size]
  
  return (
    <div
      className={cn('rounded-md border overflow-hidden', classes.preview)}
      style={{
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.border,
      }}
    >
      {/* Header bar */}
      <div
        className="h-6 border-b flex items-center px-2 gap-1"
        style={{
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
      </div>
      
      {/* Content area */}
      <div className="p-2 space-y-1">
        {/* Primary button */}
        <div
          className="h-2 w-8 rounded-sm"
          style={{ backgroundColor: theme.colors.primary }}
        />
        
        {/* Text lines */}
        <div
          className="h-1 w-12 rounded-sm"
          style={{ backgroundColor: theme.colors.text, opacity: 0.8 }}
        />
        <div
          className="h-1 w-10 rounded-sm"
          style={{ backgroundColor: theme.colors.textMuted, opacity: 0.6 }}
        />
        
        {/* Secondary elements */}
        <div className="flex gap-1 mt-1">
          <div
            className="h-1 w-3 rounded-sm"
            style={{ backgroundColor: theme.colors.secondary }}
          />
          <div
            className="h-1 w-4 rounded-sm"
            style={{ backgroundColor: theme.colors.accent || theme.colors.primary, opacity: 0.7 }}
          />
        </div>
      </div>
    </div>
  )
}

export function ThemePreview({
  themes,
  activeTheme,
  size = 'md',
  variant = 'card',
  columns,
  showNames = true,
  showDescriptions = true,
  showColors = true,
  showComponents = true,
  previewContent,
  onThemeSelect,
  onThemeHover,
  className,
  'data-testid': testId,
}: ThemePreviewProps) {
  const [hoveredTheme, setHoveredTheme] = useState<string | null>(null)
  
  const classes = sizeClasses[size]
  const variantClass = variantClasses[variant]
  
  // Calculate grid columns based on props or size
  const getGridCols = () => {
    if (columns) {
      switch (Math.min(columns, 4)) {
        case 1: return 'grid-cols-1'
        case 2: return 'grid-cols-1 md:grid-cols-2'
        case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        default: return classes.grid
      }
    }
    return classes.grid
  }
  
  const gridCols = getGridCols()
  
  const handleThemeClick = (theme: ThemeDefinition) => {
    onThemeSelect?.(theme)
  }
  
  const handleThemeHover = (theme: ThemeDefinition | null) => {
    setHoveredTheme(theme?.id || null)
    onThemeHover?.(theme)
  }
  
  const isActive = (theme: ThemeDefinition) => {
    return activeTheme ? theme.id === activeTheme : theme.active
  }
  
  const isHovered = (theme: ThemeDefinition) => {
    return hoveredTheme === theme.id
  }
  
  return (
    <div
      className={cn('grid', gridCols, className)}
      data-testid={testId}
    >
      {themes.map((theme) => (
        <div
          key={theme.id}
          className={cn(
            'relative cursor-pointer transition-all duration-200',
            variantClass,
            classes.card,
            isActive(theme) && 'ring-2 ring-blue-500 ring-offset-2',
            isHovered(theme) && 'scale-[1.02]'
          )}
          onClick={() => handleThemeClick(theme)}
          onMouseEnter={() => handleThemeHover(theme)}
          onMouseLeave={() => handleThemeHover(null)}
        >
          {/* Active indicator */}
          {isActive(theme) && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
              <Check className="h-3 w-3 text-white" />
            </div>
          )}
          
          {/* Premium badge */}
          {theme.premium && (
            <div className="absolute top-2 left-2 z-10">
              <Badge size="xs" className="bg-amber-100 text-amber-700 border-amber-200">
                <Crown className="h-3 w-3 mr-1" />
                Pro
              </Badge>
            </div>
          )}
          
          {/* Component Preview */}
          {showComponents && (
            <div className="mb-3">
              {previewContent ? (
                <div className={cn('rounded-md overflow-hidden', classes.preview)}>
                  {previewContent}
                </div>
              ) : (
                <ComponentPreview theme={theme} size={size} />
              )}
            </div>
          )}
          
          {/* Theme Info */}
          <div className="space-y-2">
            {/* Name and Mode */}
            {showNames && (
              <div className="flex items-center justify-between">
                <Typography variant="bodyLarge" weight="semibold" className="truncate">
                  {theme.name}
                </Typography>
                <div className="flex items-center gap-1 text-stone-500">
                  <ThemeModeIcon mode={theme.mode} />
                  <Typography variant="bodySmall" className="capitalize">
                    {theme.mode}
                  </Typography>
                </div>
              </div>
            )}
            
            {/* Description */}
            {showDescriptions && theme.description && (
              <Typography variant="bodySmall" className="text-stone-600 line-clamp-2">
                {theme.description}
              </Typography>
            )}
            
            {/* Color Swatches */}
            {showColors && (
              <div className="flex items-center gap-1">
                <ThemeColorSwatch color={theme.colors.primary} size={size} />
                <ThemeColorSwatch color={theme.colors.secondary} size={size} />
                <ThemeColorSwatch color={theme.colors.background} size={size} />
                <ThemeColorSwatch color={theme.colors.surface} size={size} />
                {theme.colors.accent && (
                  <ThemeColorSwatch color={theme.colors.accent} size={size} />
                )}
                <Typography variant="bodySmall" className="text-stone-500 ml-1">
                  +{Object.keys(theme.colors).length - 4} more
                </Typography>
              </div>
            )}
          </div>
          
          {/* Hover overlay */}
          {isHovered(theme) && (
            <div className="absolute inset-0 bg-blue-50 bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <Eye className="h-4 w-4 text-blue-600" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
