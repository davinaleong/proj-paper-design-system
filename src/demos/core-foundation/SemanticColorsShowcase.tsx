import { Typography } from "../../components/core"
import { Flex, Card, Badge } from "../../components/layout"
import { 
  getSemanticColorClassesWithDarkMode,
  getThemeAwareSemanticClasses,
  getSemanticColorPalette
} from "../../utils/color"
import type { SemanticColorVariant, StyleVariant } from "../../utils/color"

export function SemanticColorsShowcase() {
  const semanticColors: SemanticColorVariant[] = [
    "primary", "secondary", "accent", "success", "warning", "danger", "info", "neutral", "default"
  ]
  
  const styleVariants: StyleVariant[] = ["solid", "soft", "outline", "ghost"]

  return (
    <div className="space-y-12">
      <div>
        <Typography variant="h2" className="mb-2">
          Semantic Colors with Dark Mode
        </Typography>
        <Typography variant="body" color="neutral" intensity="muted" className="max-w-2xl">
          Comprehensive semantic color system with full light and dark theme support. 
          These colors automatically adapt to theme changes and provide consistent branding across components.
        </Typography>
      </div>

      {/* Theme-Aware Classes Demo */}
      <div>
        <Typography variant="h3" className="mb-4">
          Theme-Aware Classes
        </Typography>
        <Typography variant="body" className="mb-6 text-neutral-600 dark:text-neutral-400">
          These classes automatically switch between light and dark modes using Tailwind's <code className="bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded text-sm">dark:</code> modifier.
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticColors.map(color => {
            const themeAware = getThemeAwareSemanticClasses(color, "soft")
            return (
              <div
                key={color}
                className={`p-4 rounded-lg border transition-colors ${themeAware.combined}`}
              >
                <div className="space-y-2">
                  <Typography variant="h5" className="capitalize">
                    {color}
                  </Typography>
                  <Typography variant="caption" className="opacity-75">
                    Soft variant with theme-aware classes
                  </Typography>
                  <div className="text-xs font-mono bg-black/5 dark:bg-white/5 p-2 rounded mt-2">
                    {themeAware.background.split(' ').slice(0, 2).join(' ')}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Style Variants Matrix */}
      <div>
        <Typography variant="h3" className="mb-4">
          Style Variants Matrix
        </Typography>
        <Typography variant="body" className="mb-6 text-neutral-600 dark:text-neutral-400">
          Each semantic color supports multiple style variants that adapt to both light and dark themes.
        </Typography>

        <div className="space-y-8">
          {semanticColors.slice(0, 4).map(color => (
            <div key={color} className="space-y-4">
              <Typography variant="h4" className="capitalize">
                {color} Color
              </Typography>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {styleVariants.map(style => {
                  const lightClasses = getSemanticColorClassesWithDarkMode(color, style, "light")
                  const darkClasses = getSemanticColorClassesWithDarkMode(color, style, "dark")
                  const themeAware = getThemeAwareSemanticClasses(color, style)
                  
                  return (
                    <div key={style} className="space-y-3">
                      <Typography variant="h6" className="capitalize">
                        {style}
                      </Typography>
                      
                      {/* Theme-aware button */}
                      <button
                        className={`w-full px-4 py-2 rounded-lg font-medium transition-colors border ${themeAware.combined}`}
                      >
                        {style} Button
                      </button>
                      
                      {/* Light theme example */}
                      <div className="text-xs space-y-1">
                        <div className="font-medium text-neutral-700 dark:text-neutral-300">Light Theme:</div>
                        <div className="font-mono bg-stone-100 dark:bg-stone-800 p-2 rounded text-xs">
                          {lightClasses.background}
                        </div>
                      </div>
                      
                      {/* Dark theme example */}
                      <div className="text-xs space-y-1">
                        <div className="font-medium text-neutral-700 dark:text-neutral-300">Dark Theme:</div>
                        <div className="font-mono bg-stone-100 dark:bg-stone-800 p-2 rounded text-xs">
                          {darkClasses.background}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Badge Examples */}
      <div>
        <Typography variant="h3" className="mb-4">
          Badges with Dark Mode
        </Typography>
        <Typography variant="body" className="mb-6 text-neutral-600 dark:text-neutral-400">
          Badge components using the semantic color system automatically adapt to theme changes.
        </Typography>

        <div className="space-y-6">
          {styleVariants.map(style => (
            <div key={style} className="space-y-3">
              <Typography variant="h5" className="capitalize">
                {style} Badges
              </Typography>
              <Flex gap="sm" wrap="wrap">
                {semanticColors.map(color => (
                  <Badge key={color} variant={style} color={color}>
                    {color}
                  </Badge>
                ))}
              </Flex>
            </div>
          ))}
        </div>
      </div>

      {/* Color Palette Reference */}
      <div>
        <Typography variant="h3" className="mb-4">
          Complete Color Palette
        </Typography>
        <Typography variant="body" className="mb-6 text-neutral-600 dark:text-neutral-400">
          Full reference showing all color combinations across themes and styles.
        </Typography>

        <div className="space-y-8">
          {semanticColors.slice(0, 3).map(color => {
            const palette = getSemanticColorPalette(color)
            
            return (
              <Card key={color} className="p-6">
                <Typography variant="h4" className="mb-4 capitalize">
                  {color} Palette
                </Typography>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Light Theme */}
                  <div>
                    <Typography variant="h5" className="mb-3">
                      Light Theme
                    </Typography>
                    <div className="space-y-3">
                      {styleVariants.map(style => {
                        const classes = palette.light[style]
                        return (
                          <div key={style} className="flex items-center justify-between p-3 bg-white border rounded-lg">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded ${classes.background} ${classes.border} border`}
                              />
                              <div>
                                <div className="font-medium capitalize">{style}</div>
                                <div className="text-xs text-neutral-500 font-mono">
                                  {classes.background.split(' ')[0]}
                                </div>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded text-sm ${classes.combined}`}>
                              Sample
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Dark Theme */}
                  <div>
                    <Typography variant="h5" className="mb-3">
                      Dark Theme
                    </Typography>
                    <div className="space-y-3">
                      {styleVariants.map(style => {
                        const classes = palette.dark[style]
                        return (
                          <div key={style} className="flex items-center justify-between p-3 bg-stone-900 border border-stone-700 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 rounded ${classes.background} ${classes.border} border`}
                              />
                              <div>
                                <div className="font-medium capitalize text-white">{style}</div>
                                <div className="text-xs text-stone-400 font-mono">
                                  {classes.background.split(' ')[0]}
                                </div>
                              </div>
                            </div>
                            <div className={`px-3 py-1 rounded text-sm ${classes.combined}`}>
                              Sample
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Implementation Examples */}
      <div>
        <Typography variant="h3" className="mb-4">
          Implementation Examples
        </Typography>
        <Typography variant="body" className="mb-6 text-neutral-600 dark:text-neutral-400">
          Code examples showing how to use the semantic color system in your components.
        </Typography>

        <div className="space-y-6">
          <Card className="p-6">
            <Typography variant="h5" className="mb-4">
              Basic Usage
            </Typography>
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
              <pre className="text-sm text-stone-800 dark:text-stone-200">
{`import { getThemeAwareSemanticClasses } from "../utils/color"

function MyComponent() {
  const classes = getThemeAwareSemanticClasses("primary", "soft")
  
  return (
    <button className={\`\${classes.combined} px-4 py-2 rounded-lg\`}>
      Theme-aware button
    </button>
  )
}`}
              </pre>
            </div>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-4">
              Advanced Usage
            </Typography>
            <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-lg">
              <pre className="text-sm text-stone-800 dark:text-stone-200">
{`import { 
  getSemanticColorClassesWithDarkMode,
  getBatchThemeAwareClasses 
} from "../utils/color"

function StatusIndicator({ status }: { status: 'success' | 'warning' | 'danger' }) {
  const colorClasses = getSemanticColorClassesWithDarkMode(status, "soft", "light")
  
  return (
    <div className={\`\${colorClasses.combined} px-3 py-1 rounded-full\`}>
      {status}
    </div>
  )
}

// Batch generate colors for consistent theming
const alertColors = getBatchThemeAwareClasses(["success", "warning", "danger"], "outline")`}
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}