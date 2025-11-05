import { useState } from "react"
import { Moon, Sun, Palette, Menu } from "lucide-react"
import { Paper, Typography } from "../components/core"
import { IconButton } from "../components/forms"

interface AppHeaderProps {
  onMobileMenuClick?: () => void
}

export function AppHeader({ onMobileMenuClick }: AppHeaderProps) {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "paper">(
    "paper"
  )

  return (
    <Paper
      variant="elevated"
      padding="md"
      className="sticky top-0 z-50 backdrop-blur-md border-b border-stone-200"
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
            <Typography variant="h4" className="text-stone-800">
              Component Documentation
            </Typography>
          </div>

          <div className="flex items-center gap-3">
            <IconButton
              onClick={() => setCurrentTheme("light")}
              icon={Sun}
              variant={currentTheme === "light" ? "solid" : "ghost"}
              size="sm"
              aria-label="Light theme"
            />
            <IconButton
              onClick={() => setCurrentTheme("dark")}
              icon={Moon}
              variant={currentTheme === "dark" ? "solid" : "ghost"}
              size="sm"
              aria-label="Dark theme"
            />
            <IconButton
              onClick={() => setCurrentTheme("paper")}
              icon={Palette}
              variant={currentTheme === "paper" ? "solid" : "ghost"}
              size="sm"
              aria-label="Paper theme"
            />
          </div>
        </header>
    </Paper>
  )
}
