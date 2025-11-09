import { Menu } from "lucide-react"
import { Paper, Typography } from "../components/core"
import { IconButton } from "../components/forms"
import { ThemeToggle } from "../components/system-utilities"

interface AppHeaderProps {
  onMobileMenuClick?: () => void
}

export function AppHeader({ onMobileMenuClick }: AppHeaderProps) {

  return (
    <Paper
      variant="elevated"
      padding="md"
      className="sticky top-0 z-50 backdrop-blur-md border-b border-stone-200 dark:border-gray-700 bg-[#faf9f6]/80 dark:bg-gray-800/80"
    >
      <header className="flex items-center justify-between">
          {/* Mobile menu button */}
          <IconButton
            onClick={onMobileMenuClick}
            icon={Menu}
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-label="Open menu"
          />

          <div className="flex-1 md:flex-initial">
            <Typography variant="h4" className="text-stone-800 dark:text-gray-100">
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
