import { ThemeProvider } from "./components/core"
import { AppHeader } from "./components/AppHeader"
import { FloatingNavbar } from "./components/navigation"
import {
  CoreComponentsDemo,
  TypographyShowcase,
  LayoutShowcase,
  UIPrimitivesShowcase,
} from "./demos/components"
import {
  FormControlsShowcase,
  DataDisplayShowcase,
  NavigationShowcase,
} from "./demos/showcases"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme={{ mode: "paper" }}>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const navItems = [
    { id: "overview", label: "Overview", href: "#overview" },
    { id: "typography", label: "Typography", href: "#typography" },
    { id: "layout", label: "Layout", href: "#layout" },
    { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives" },
    { id: "form-controls", label: "Form Controls", href: "#form-controls" },
    { id: "data-display", label: "Data Display", href: "#data-display" },
    { id: "navigation", label: "Navigation", href: "#navigation" },
  ]

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-gray-900">
      {/* Floating Navigation */}
      <FloatingNavbar
        items={navItems}
        position="top-right"
        offset={{ x: 20, y: 120 }}
      />

      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="space-y-0">
        {/* Core Components */}
        <section id="overview">
          <CoreComponentsDemo />
        </section>

        <section id="typography">
          <TypographyShowcase />
        </section>

        <section id="layout">
          <LayoutShowcase />
        </section>

        <section id="ui-primitives">
          <UIPrimitivesShowcase />
        </section>

        {/* Form Controls */}
        <section id="form-controls">
          <FormControlsShowcase />
        </section>

        {/* Data Display */}
        <section id="data-display">
          <DataDisplayShowcase />
        </section>

        {/* Navigation */}
        <section id="navigation">
          <NavigationShowcase />
        </section>
      </main>
    </div>
  )
}

export default App
