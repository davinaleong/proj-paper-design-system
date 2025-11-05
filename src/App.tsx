import { ThemeProvider, Typography, Paper } from "./components/core"
import { AppHeader } from "./components/AppHeader"
import { FloatingNavbar } from "./components/navigation"
import {
  CoreComponentsShowcase,
  TypographyShowcase,
  LayoutShowcase,
  UIPrimitivesShowcase,
  ProseShowcase,
  AlertShowcase,
  ProgressCircleShowcase,
  ProgressBarShowcase,
  EmptyStateShowcase,
  StatisticShowcase,
  KPIShowcase,
  TimelineShowcase,
  AdditionalProgressShowcase,
} from "./demos/component-showcases"
import {
  FormControlsShowcase,
  DataDisplayShowcase,
  NavigationShowcase,
} from "./demos/feature-showcases"
import "./App.css"

function App() {
  return (
    <ThemeProvider defaultTheme={{ mode: "paper" }}>
      <AppContent />
    </ThemeProvider>
  )
}

function AppContent() {
  const floatingNavItems = [
    { id: "overview", label: "Overview", href: "#overview" },
    { id: "typography", label: "Typography", href: "#typography" },
    { id: "layout", label: "Layout", href: "#layout" },
    { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives" },
    { id: "form-controls", label: "Form Controls", href: "#form-controls" },
    { id: "data-display", label: "Data Display", href: "#data-display" },
    { id: "navigation", label: "Navigation", href: "#navigation" },
    { id: "alerts", label: "Alerts", href: "#alerts" },
    { id: "progress-circle", label: "Progress Circle", href: "#progress-circle" },
    { id: "progress-bar", label: "Progress Bar", href: "#progress-bar" },
    { id: "empty-state", label: "Empty State", href: "#empty-state" },
    { id: "statistic", label: "Statistics", href: "#statistic" },
    { id: "kpi", label: "KPI", href: "#kpi" },
    { id: "timeline", label: "Timeline", href: "#timeline" },
    { id: "additional-progress", label: "Additional Progress", href: "#additional-progress" },
    { id: "prose", label: "Prose Styles", href: "#prose" },
  ]

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-gray-900">
      {/* Floating Navigation */}
      <FloatingNavbar
        items={floatingNavItems}
        position="top-right"
        offset={{ x: 20, y: 120 }}
      />

      {/* Header */}
      <AppHeader />

      {/* Main Content */}
      <main className="space-y-0">
        {/* Core Components */}
        <section id="overview">
          <CoreComponentsShowcase />
        </section>

        <section id="typography">
          <TypographyShowcase />
        </section>

        {/* Semantic Typography Examples */}
        <section id="semantic-typography">
          <Paper className="p-6 my-8">
            <Typography variant="h3" className="mb-4 text-stone-800">
              Semantic Typography Examples
            </Typography>

            <div className="space-y-4 text-stone-800">
              <div><Typography variant="strong">Strong text</Typography> — bold emphasis</div>
              <div><Typography variant="em">Emphasized text</Typography> — italicized</div>
              <div><Typography variant="small">Small text</Typography> — fine print</div>
              <div>Keyboard input: <Typography variant="kbd">Ctrl</Typography> + <Typography variant="kbd">C</Typography></div>
              <div><Typography variant="del">Deleted text</Typography> — shows removed content</div>
              <div><Typography variant="ins">Inserted text</Typography> — shows inserted content</div>
              <div>Formula: H<Typography variant="sub">2</Typography>O — subscript example</div>
              <div>Math: E = mc<Typography variant="sup">2</Typography> — superscript example</div>
              <div><Typography variant="abbr" title="World Wide Web">WWW</Typography> — abbreviation with title</div>
              <div>Reference: <Typography variant="cite">Design System Handbook</Typography></div>
              <div>He said <Typography variant="q">"Hello world"</Typography> — inline quote</div>
              <div><Typography variant="dfn">Responsive design</Typography> — definition term</div>
              <div>Sample output: <Typography variant="samp">Hello, world!</Typography></div>
              <div>Variable: <Typography variant="var">userName</Typography></div>
              <div>Published: <Typography variant="time" dateTime="2024-01-15">January 15, 2024</Typography></div>
              <div>Value: <Typography variant="data" value="42">42</Typography></div>
            </div>
          </Paper>
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

        {/* Alerts */}
        <section id="alerts">
          <AlertShowcase />
        </section>

        {/* Progress Circle */}
        <section id="progress-circle">
          <ProgressCircleShowcase />
        </section>

        {/* Progress Bar */}
        <section id="progress-bar">
          <ProgressBarShowcase />
        </section>

        {/* Empty State */}
        <section id="empty-state">
          <EmptyStateShowcase />
        </section>

        {/* Statistics */}
        <section id="statistic">
          <StatisticShowcase />
        </section>

        {/* KPI */}
        <section id="kpi">
          <KPIShowcase />
        </section>

        {/* Timeline */}
        <section id="timeline">
          <TimelineShowcase />
        </section>

        {/* Additional Progress Components */}
        <section id="additional-progress">
          <AdditionalProgressShowcase />
        </section>

        {/* Prose Styles */}
        <section id="prose">
          <ProseShowcase />
        </section>
      </main>
    </div>
  )
}

export default App
