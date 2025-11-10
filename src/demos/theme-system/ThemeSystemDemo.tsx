
import { Monitor } from "lucide-react"
import { Paper, Typography } from "../../components/core"
import { Button } from "../../components/forms"
import { ThemeToggle } from "../../components/system-utilities"
import { useTheme } from "../../components/core/ThemeProvider/ThemeContext"

export function ThemeSystemDemo() {
  const theme = useTheme()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <Typography variant="h1" className="text-stone-700 dark:text-stone-50">
          Theme System Demo
        </Typography>
        <Typography variant="body" className="text-stone-500 dark:text-stone-400">
          Experience the warm paper aesthetic with complementary dark theme
        </Typography>
      </div>

      {/* Theme Controls */}
      <Paper variant="outlined" padding="lg" className="bg-stone-100 dark:bg-stone-900 border-stone-300 dark:border-stone-600">
        <div className="space-y-6">
          <Typography variant="h3" className="text-stone-700 dark:text-stone-50">
            Theme Controls
          </Typography>
          
          <div className="space-y-4">
            <div>
              <Typography variant="body" className="text-stone-600 dark:text-stone-400 mb-2">
                Individual Theme Buttons:
              </Typography>
              <div className="flex gap-3">
                <Button
                  onClick={theme.setLightTheme}
                  variant={theme.mode === "light" ? "solid" : "outline"}
                  color="primary"
                  size="sm"
                >
                  Light Theme
                </Button>
                <Button
                  onClick={theme.setDarkTheme}
                  variant={theme.mode === "dark" ? "solid" : "outline"}
                  color="primary"
                  size="sm"
                >
                  Dark Theme
                </Button>
                <Button
                  onClick={theme.setAutoTheme}
                  variant={theme.mode === "auto" ? "solid" : "outline"}
                  color="primary"
                  size="sm"
                  icon={Monitor}
                >
                  Auto (System)
                </Button>
              </div>
            </div>

            <div>
              <Typography variant="body" className="text-stone-600 dark:text-stone-400 mb-2">
                Theme Toggle Component:
              </Typography>
              <ThemeToggle
                variant="buttons"
                size="md"
                buttonVariant="outline"
                showLabels={true}
                showTooltips={true}
              />
            </div>

            <div>
              <Typography variant="body" className="text-stone-600 dark:text-stone-400 mb-2">
                Segmented Theme Toggle:
              </Typography>
              <ThemeToggle
                variant="segmented"
                size="sm"
                showLabels={true}
                showTooltips={false}
              />
            </div>
          </div>
        </div>
      </Paper>

      {/* Current Theme Info */}
      <Paper variant="outlined" padding="lg" className="bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
        <div className="space-y-4">
          <Typography variant="h3" className="text-stone-700 dark:text-stone-50">
            Current Theme State
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Selected Mode
              </Typography>
              <Typography variant="body" className="text-stone-700 dark:text-stone-50 font-semibold">
                {theme.mode}
              </Typography>
            </div>
            
            <div>
              <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Actual Theme
              </Typography>
              <Typography variant="body" className="text-stone-700 dark:text-stone-50 font-semibold">
                {theme.actualTheme}
              </Typography>
            </div>
            
            <div>
              <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Background
              </Typography>
              <Typography variant="body" className="text-stone-600 dark:text-stone-300 font-mono text-sm">
                {theme.actualTheme === "dark" ? "#0c0a09 (stone-950)" : "#faf9f6 (warm paper)"}
              </Typography>
            </div>
            
            <div>
              <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400 uppercase tracking-wide">
                Text Color
              </Typography>
              <Typography variant="body" className="text-stone-600 dark:text-stone-300 font-mono text-sm">
                {theme.actualTheme === "dark" ? "#fafaf9 (stone-50)" : "#44403c (stone-700)"}
              </Typography>
            </div>
          </div>
        </div>
      </Paper>

      {/* Color Demonstration */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Paper variant="outlined" padding="lg" className="bg-stone-100 dark:bg-stone-900 border-stone-300 dark:border-stone-600">
          <Typography variant="h4" className="text-stone-700 dark:text-stone-50 mb-4">
            Text Hierarchy
          </Typography>
          <div className="space-y-3">
            <Typography variant="body" className="text-stone-800 dark:text-stone-50">
              Primary text (stone-800/stone-50)
            </Typography>
            <Typography variant="body" className="text-stone-700 dark:text-stone-100">
              Default text (stone-700/stone-100)  
            </Typography>
            <Typography variant="body" className="text-stone-500 dark:text-stone-400">
              Secondary text (stone-500/stone-400)
            </Typography>
            <Typography variant="bodySmall" className="text-stone-400 dark:text-stone-500">
              Subtle text (stone-400/stone-500)
            </Typography>
          </div>
        </Paper>

        <Paper variant="outlined" padding="lg" className="bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700">
          <Typography variant="h4" className="text-stone-700 dark:text-stone-50 mb-4">
            Surface Elevation
          </Typography>
          <div className="space-y-3">
            <div className="p-3 bg-[#faf9f6] dark:bg-stone-950 border border-stone-200 dark:border-stone-700 rounded">
              <Typography variant="bodySmall" className="text-stone-600 dark:text-stone-400">
                Base background
              </Typography>
            </div>
            <div className="p-3 bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-600 rounded">
              <Typography variant="bodySmall" className="text-stone-600 dark:text-stone-400">
                Panel background
              </Typography>
            </div>
            <div className="p-3 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded">
              <Typography variant="bodySmall" className="text-stone-600 dark:text-stone-400">
                Elevated surface
              </Typography>
            </div>
          </div>
        </Paper>
      </div>

      {/* System Preference Note */}
      {theme.mode === "auto" && (
        <Paper variant="outlined" padding="md" className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3">
            <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <Typography variant="body" className="text-blue-800 dark:text-blue-200">
              Auto mode is active. Theme automatically switches based on your system preference.
              Current system preference: <strong>{theme.actualTheme}</strong>
            </Typography>
          </div>
        </Paper>
      )}
    </div>
  )
}