import { useState } from "react"
import { ThemeProvider, Typography, Paper } from "./components/core"
import { AppHeader } from "./components/AppHeader"
import { Sidebar } from "./components/navigation"
import { Home, FileText, BarChart3, Navigation, TrendingUp, MessageCircle } from "lucide-react"
import {
  CoreComponentsShowcase,
  TypographyShowcase,
  LayoutShowcase,
  UIPrimitivesShowcase,
  ProseShowcase,
  AlertShowcase,
  ToastShowcase,
  ModalShowcase,
  ConfirmationDialogShowcase,
  LoadingSpinnerShowcase,
  LuminanceShowcase,
  ProgressCircleShowcase,
  ProgressBarShowcase,
  EmptyStateShowcase,
  StatisticShowcase,
  KPIShowcase,
  TimelineShowcase,
  AdditionalProgressShowcase,
  NavbarShowcase,
  FloatingNavbarShowcase,
  SidebarShowcase,
  BreadcrumbsShowcase,
  TabsShowcase,
  PaginationShowcase,
  StepperShowcase,
  CommandPaletteShowcase,
  MenuShowcase,
  TreeViewShowcase,
  QuickActionsShowcase,
} from "./demos/component-showcases"
import { LoaderShowcase } from "./components/feedback/Loader/LoaderShowcase"
import { SkeletonShowcase } from "./components/feedback/Skeleton/SkeletonShowcase"
import { PopoverShowcase } from "./components/feedback/Popover/PopoverShowcase"
import { DropdownMenuShowcase } from "./components/feedback/DropdownMenu/DropdownMenuShowcase"
import {
  FormControlsShowcase,
  DataDisplayShowcase,
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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const sidebarItems = [
    // Core Components Group
    { 
      id: "core", 
      label: "Core Components", 
      icon: Home,
      children: [
        { id: "overview", label: "Overview", href: "#overview" },
        { id: "luminance", label: "Luminance-Based Text Colors", href: "#luminance" },
        { id: "typography", label: "Typography", href: "#typography" },
        { id: "layout", label: "Layout", href: "#layout" },
        { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives" },
        { id: "prose", label: "Prose Styles", href: "#prose" },

      ]
    },
    // Form Controls Group
    { 
      id: "forms", 
      label: "Form Controls", 
      icon: FileText,
      children: [
        { id: "form-controls", label: "Form Controls", href: "#form-controls" },
      ]
    },
    // Data Display Group
    { 
      id: "data", 
      label: "Data Display", 
      icon: BarChart3,
      children: [
        { id: "data-display", label: "Data Display", href: "#data-display" },
        { id: "statistic", label: "Statistics", href: "#statistic" },
        { id: "kpi", label: "KPI", href: "#kpi" },
        { id: "timeline", label: "Timeline", href: "#timeline" },
        { id: "empty-state", label: "Empty State", href: "#empty-state" },
      ]
    },
    // Navigation Group
    { 
      id: "navigation", 
      label: "Navigation", 
      icon: Navigation,
      children: [
        { id: "navbar", label: "Navbar", href: "#navbar" },
        { id: "floating-navbar", label: "Floating Navbar", href: "#floating-navbar" },
        { id: "sidebar", label: "Sidebar", href: "#sidebar" },
        { id: "breadcrumbs", label: "Breadcrumbs", href: "#breadcrumbs" },
        { id: "tabs", label: "Tabs", href: "#tabs" },
        { id: "pagination", label: "Pagination", href: "#pagination" },
        { id: "stepper", label: "Stepper", href: "#stepper" },
        { id: "command-palette", label: "Command Palette", href: "#command-palette" },
        { id: "menu", label: "Menu", href: "#menu" },
        { id: "tree-view", label: "Tree View", href: "#tree-view" },
        { id: "quick-actions", label: "Quick Actions", href: "#quick-actions" },
      ]
    },
    // Progress & Status Group
    { 
      id: "progress", 
      label: "Progress & Status", 
      icon: TrendingUp,
      children: [
        { id: "progress-circle", label: "Progress Circle", href: "#progress-circle" },
        { id: "progress-bar", label: "Progress Bar", href: "#progress-bar" },
        { id: "additional-progress", label: "Additional Progress", href: "#additional-progress" },
      ]
    },
    // User Feedback Group
    { 
      id: "feedback", 
      label: "User Feedback", 
      icon: MessageCircle,
      children: [
        { id: "alerts", label: "Alerts", href: "#alerts" },
        { id: "toast", label: "Toast", href: "#toast" },
        { id: "modal", label: "Modal", href: "#modal" },
        { id: "confirmation-dialog", label: "Confirmation Dialog", href: "#confirmation-dialog" },
        { id: "loading-spinner", label: "Loading Spinner", href: "#loading-spinner" },
        { id: "loader", label: "Loader", href: "#loader" },
        { id: "skeleton", label: "Skeleton", href: "#skeleton" },
        { id: "popover", label: "Popover", href: "#popover" },
        { id: "dropdown-menu", label: "Dropdown Menu", href: "#dropdown-menu" },
      ]
    },
  ]

  return (
  <div className="flex bg-[#faf9f6] dark:bg-gray-900 min-h-screen">
    {/* Sidebar (fixed for md+) */}
    <Sidebar
      items={sidebarItems}
      brand={{ text: "Paper Design System", logo: "/logo-coloured.svg" }}
      width="lg"
      position="fixed"
      open={isMobileSidebarOpen}
      className="h-screen"
      spy={true}
      spyOffset={100}
      onClose={() => setIsMobileSidebarOpen(false)}
    />

    {/* Main content wrapper */}
    <div className="flex-1 flex flex-col min-h-screen md:ml-72 relative z-10 overflow-x-hidden">
      <AppHeader onMobileMenuClick={() => setIsMobileSidebarOpen(true)} />

      {/* Scrollable content area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Core Components */}
        <section id="overview">
          <CoreComponentsShowcase />
        </section>

        {/* Luminance */}
        <section id="luminance">
          <LuminanceShowcase />
        </section>

        {/* Typography */}
        <section id="typography">
          <TypographyShowcase />
        </section>

        {/* Luminance */}
        <section id="luminance">
          <LuminanceShowcase />
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

        {/* Navigation Components */}
        <section id="navbar">
          <NavbarShowcase />
        </section>

        <section id="floating-navbar">
          <FloatingNavbarShowcase />
        </section>

        <section id="sidebar">
          <SidebarShowcase />
        </section>

        <section id="breadcrumbs">
          <BreadcrumbsShowcase />
        </section>

        <section id="tabs">
          <TabsShowcase />
        </section>

        <section id="pagination">
          <PaginationShowcase />
        </section>

        <section id="stepper">
          <StepperShowcase />
        </section>

        <section id="command-palette">
          <CommandPaletteShowcase />
        </section>

        <section id="menu">
          <MenuShowcase />
        </section>

        <section id="tree-view">
          <TreeViewShowcase />
        </section>

        <section id="quick-actions">
          <QuickActionsShowcase />
        </section>

        {/* Alerts */}
        <section id="alerts">
          <AlertShowcase />
        </section>

        {/* Toast */}
        <section id="toast">
          <ToastShowcase />
        </section>

        {/* Modal */}
        <section id="modal">
          <ModalShowcase />
        </section>

        {/* Confirmation Dialog */}
        <section id="confirmation-dialog">
          <ConfirmationDialogShowcase />
        </section>

        {/* Loading Spinner */}
        <section id="loading-spinner">
          <LoadingSpinnerShowcase />
        </section>

        {/* Loader */}
        <section id="loader">
          <LoaderShowcase />
        </section>

        {/* Skeleton */}
        <section id="skeleton">
          <SkeletonShowcase />
        </section>

        {/* Popover */}
        <section id="popover">
          <PopoverShowcase />
        </section>

        {/* Dropdown Menu */}
        <section id="dropdown-menu">
          <DropdownMenuShowcase />
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
  </div>
)
}

export default App
