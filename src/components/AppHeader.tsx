import { Menu } from "lucide-react"
import { Paper, Typography } from "../components/core"
import { IconButton } from "../components/forms"
import { ThemeToggle } from "../components/system-utilities"
import { useThemeMode } from "../hooks/useThemeMode"

interface AppHeaderProps {
  onMobileMenuClick?: () => void
}

export function AppHeader({ onMobileMenuClick }: AppHeaderProps) {
  const { theme: themeMode } = useThemeMode()
  
  // Resolve actual theme
  const actualTheme = themeMode === "system" 
    ? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : themeMode === "dark" ? "dark" : "light"

  // Get theme-specific classes based on DARK_MODE_PLAN.md
  const getThemeClasses = () => {
    switch (actualTheme) {
      case 'dark':
        return {
          background: 'bg-stone-900/80 border-stone-600',
          text: 'text-stone-50'
        }
      case 'light':
      default:
        return {
          background: 'bg-[#faf9f6]/80 border-stone-200',
          text: 'text-stone-700'
        }
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <Paper
      variant="elevated"
      padding="md"
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${themeClasses.background}`}
    >
      <header className="flex items-center justify-between">
          {/* Mobile menu button */}
          <IconButton
            onClick={onMobileMenuClick}
            icon={Menu}
            variant="ghost"
            color="default"
            size="sm"
            className="md:hidden"
            aria-label="Open menu"
          />

          <div className="flex-1 md:flex-initial">
            <Typography variant="h4" className={themeClasses.text}>
              Component Documentation
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle
              variant="buttons"
              size="sm"
              buttonVariant="ghost"
              showTooltips={true}
              compact={true}
            />
          </div>
        </header>
    </Paper>
  )
}
