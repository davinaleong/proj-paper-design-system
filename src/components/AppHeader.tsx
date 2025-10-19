import { useState } from "react"
import { Moon, Sun, Palette } from "lucide-react"
import { Paper, Container, Brand } from "../components/core"
import { IconButton } from "../components/forms"

export function AppHeader() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark" | "paper">(
    "paper"
  )

  return (
    <Paper
      variant="elevated"
      padding="md"
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <Container maxWidth="xl">
        <header className="flex items-center justify-between">
          <div className="flex-1">
            <Brand />
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
      </Container>
    </Paper>
  )
}
