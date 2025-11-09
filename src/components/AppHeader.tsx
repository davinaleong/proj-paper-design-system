import { Menu } from "lucide-react"
import { Paper, Typography } from "../components/core"
import { IconButton } from "../components/forms"
import { ThemeToggle } from "../components/system-utilities"
import { useTheme } from "../components/core/ThemeProvider/ThemeContext"

interface AppHeaderProps {
  onMobileMenuClick?: () => void
}

export function AppHeader({ onMobileMenuClick }: AppHeaderProps) {
  const theme = useTheme()

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (theme.mode) {
      case 'light':
        return {
          background: 'bg-white/80 border-gray-200',
          text: 'text-gray-800'
        }
      case 'dark':
        return {
          background: 'bg-gray-900/80 border-gray-700',
          text: 'text-gray-50'
        }
      case 'paper':
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
