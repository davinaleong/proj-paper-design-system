import { useState } from "react"
import { ThemeProvider, Typography, Paper } from "./components/core"
import { AppHeader } from "./components/AppHeader"
import { Sidebar } from "./components/navigation"
import { Home, FileText, BarChart3, Navigation, TrendingUp, MessageCircle, Layers, Search, Settings } from "lucide-react"
import { Divider } from "./components/layout/Divider"
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
  BreadcrumbHeaderShowcase,
  TabsShowcase,
  PaginationShowcase,
  StepperShowcase,
  CommandPaletteShowcase,
  MenuShowcase,
  TreeViewShowcase,
  QuickActionsShowcase,
  ContextMenuShowcase,
  DropdownMenuShowcase,
  DrawerShowcase,
  BackdropShowcase,
  LightboxShowcase,
  LoaderShowcase,
  SkeletonShowcase,
  PopoverShowcase,
  FormControlsShowcase,
  DataDisplayShowcase,
  CodeSnippetShowcase,
  SearchBarShowcase,
  FilterMenuShowcase,
  DateTimePickerShowcase,
  ThemeToggleShowcase,
  DotIndicatorShowcase,
  ScrollAreaShowcase,
  ErrorBoundaryShowcase,
  ClipboardButtonShowcase,
  CommandBarShowcase,
  ActivityItemShowcase,
  NotificationCenterShowcase,
  UserMenuShowcase,
  ThemePreviewShowcase,
} from "./demos"
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
    // Specialized Inputs Group
    { 
      id: "specialized-inputs", 
      label: "Specialized Inputs", 
      icon: Search,
      children: [
        { id: "searchbar", label: "SearchBar", href: "#searchbar" },
        { id: "filtermenu", label: "FilterMenu", href: "#filtermenu" },
        { id: "datetimepicker", label: "DateTimePicker", href: "#datetimepicker" },
        { id: "breadcrumb-header", label: "Breadcrumb Header", href: "#breadcrumb-header" },
      ]
    },
    // System Utilities Group
    { 
      id: "system-utilities", 
      label: "System Utilities", 
      icon: Settings,
      children: [
        { id: "theme-toggle", label: "Theme Toggle", href: "#theme-toggle" },
        { id: "dot-indicator", label: "Dot Indicator", href: "#dot-indicator" },
        { id: "scroll-area", label: "Scroll Area", href: "#scroll-area" },
        { id: "error-boundary", label: "Error Boundary", href: "#error-boundary" },
        { id: "clipboard-button", label: "Clipboard Button", href: "#clipboard-button" },
      ]
    },
    // Advanced UX Group
    { 
      id: "advanced-ux", 
      label: "Advanced UX", 
      icon: Layers,
      children: [
        { id: "command-bar", label: "Command Bar", href: "#command-bar" },
        { id: "activity-item", label: "Activity Item", href: "#activity-item" },
        { id: "notification-center", label: "Notification Center", href: "#notification-center" },
        { id: "user-menu", label: "User Menu", href: "#user-menu" },
        { id: "theme-preview", label: "Theme Preview", href: "#theme-preview" },
        { id: "command-palette", label: "Command Palette", href: "#command-palette" },
        { id: "quick-actions", label: "Quick Actions", href: "#quick-actions" },
      ]
    },
    // Data Display Group
    { 
      id: "data", 
      label: "Data Display", 
      icon: BarChart3,
      children: [
        { id: "data-display", label: "Data Display", href: "#data-display" },
        { id: "code-snippet", label: "Code Snippet", href: "#code-snippet" },
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
        { id: "menu", label: "Menu", href: "#menu" },
        { id: "tree-view", label: "Tree View", href: "#tree-view" },
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
    // Overlays Group
    { 
      id: "overlays", 
      label: "Overlays", 
      icon: Layers,
      children: [
        { id: "backdrop", label: "Backdrop", href: "#backdrop" },
        { id: "lightbox", label: "Lightbox", href: "#lightbox" },
        { id: "drawer", label: "Drawer", href: "#drawer" },
        { id: "popover", label: "Popover", href: "#popover" },
        { id: "dropdown-menu", label: "Dropdown Menu", href: "#dropdown-menu" },
        { id: "context-menu", label: "Context Menu", href: "#context-menu" },
        { id: "modal", label: "Modal", href: "#modal" },
        { id: "confirmation-dialog", label: "Confirmation Dialog", href: "#confirmation-dialog" },
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
        { id: "loading-spinner", label: "Loading Spinner", href: "#loading-spinner" },
        { id: "loader", label: "Loader", href: "#loader" },
        { id: "skeleton", label: "Skeleton", href: "#skeleton" },
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
        {/* =========================== */}
        {/* CORE FOUNDATION */}
        {/* =========================== */}
        
        <section id="overview" className="mb-8">
          <CoreComponentsShowcase />
        </section>

        <Divider className="my-12" />

        <section id="luminance" className="mb-8">
          <LuminanceShowcase />
        </section>

        <section id="typography" className="mb-8">
          <TypographyShowcase />
        </section>

        {/* Semantic Typography Examples */}
        <section id="semantic-typography" className="mb-8">
          <Paper className="p-6">
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

        <section id="layout" className="mb-8">
          <LayoutShowcase />
        </section>

        <section id="ui-primitives" className="mb-8">
          <UIPrimitivesShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* FORM CONTROLS */}
        {/* =========================== */}
        
        <section id="form-controls" className="mb-8">
          <FormControlsShowcase />
        </section>

        {/* Specialized Inputs */}
        <section id="searchbar" className="mb-8">
          <SearchBarShowcase />
        </section>

        <section id="filtermenu" className="mb-8">
          <FilterMenuShowcase />
        </section>

        <section id="datetimepicker" className="mb-8">
          <DateTimePickerShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* DATA DISPLAY */}
        {/* =========================== */}
        
        <section id="data-display" className="mb-8">
          <DataDisplayShowcase />
        </section>

        <Divider className="my-8" />

        <section id="code-snippet" className="mb-8">
          <CodeSnippetShowcase />
        </section>

        <Divider className="my-12" />
        
        {/* =========================== */}
        {/* NAVIGATION COMPONENTS */}
        {/* =========================== */}
        
        <section id="navbar" className="mb-8">
          <NavbarShowcase />
        </section>

        <section id="floating-navbar" className="mb-8">
          <FloatingNavbarShowcase />
        </section>

        <section id="sidebar" className="mb-8">
          <SidebarShowcase />
        </section>

        <section id="breadcrumbs" className="mb-8">
          <BreadcrumbsShowcase />
        </section>

        <section id="breadcrumb-header" className="mb-8">
          <BreadcrumbHeaderShowcase />
        </section>
        
        <section id="tabs" className="mb-8">
          <TabsShowcase />
        </section>

        <section id="pagination" className="mb-8">
          <PaginationShowcase />
        </section>

        <section id="stepper" className="mb-8">
          <StepperShowcase />
        </section>

        <section id="command-palette" className="mb-8">
          <CommandPaletteShowcase />
        </section>

        <section id="menu" className="mb-8">
          <MenuShowcase />
        </section>

        <section id="tree-view" className="mb-8">
          <TreeViewShowcase />
        </section>

        <section id="quick-actions" className="mb-8">
          <QuickActionsShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* SYSTEM UTILITIES */}
        {/* =========================== */}
        
        <section id="theme-toggle" className="mb-8">
          <ThemeToggleShowcase />
        </section>

        <section id="dot-indicator" className="mb-8">
          <DotIndicatorShowcase />
        </section>

        <section id="scroll-area" className="mb-8">
          <ScrollAreaShowcase />
        </section>

        <section id="error-boundary" className="mb-8">
          <ErrorBoundaryShowcase />
        </section>

        <section id="clipboard-button" className="mb-8">
          <ClipboardButtonShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* ADVANCED UX COMPONENTS */}
        {/* =========================== */}
        
        <section id="command-bar" className="mb-8">
          <CommandBarShowcase />
        </section>

        <section id="activity-item" className="mb-8">
          <ActivityItemShowcase />
        </section>

        <section id="notification-center" className="mb-8">
          <NotificationCenterShowcase />
        </section>

        <section id="user-menu" className="mb-8">
          <UserMenuShowcase />
        </section>

        <section id="theme-preview" className="mb-8">
          <ThemePreviewShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* OVERLAYS & INTERACTIVE */}
        {/* =========================== */}
        
        <section id="backdrop" className="mb-8">
          <BackdropShowcase />
        </section>

        <section id="lightbox" className="mb-8">
          <LightboxShowcase />
        </section>

        <section id="drawer" className="mb-8">
          <DrawerShowcase />
        </section>

        <section id="popover" className="mb-8">
          <PopoverShowcase />
        </section>

        <section id="dropdown-menu" className="mb-8">
          <DropdownMenuShowcase />
        </section>

        <section id="context-menu" className="mb-8">
          <ContextMenuShowcase />
        </section>

        <section id="modal" className="mb-8">
          <ModalShowcase />
        </section>

        <section id="confirmation-dialog" className="mb-8">
          <ConfirmationDialogShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* FEEDBACK & ALERTS */}
        {/* =========================== */}
        
        <section id="alerts" className="mb-8">
          <AlertShowcase />
        </section>

        <section id="toast" className="mb-8">
          <ToastShowcase />
        </section>

        <section id="loading-spinner" className="mb-8">
          <LoadingSpinnerShowcase />
        </section>

        <section id="loader" className="mb-8">
          <LoaderShowcase />
        </section>

        <section id="skeleton" className="mb-8">
          <SkeletonShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PROGRESS & STATUS */}
        {/* =========================== */}
        
        <section id="progress-circle" className="mb-8">
          <ProgressCircleShowcase />
        </section>

        <section id="progress-bar" className="mb-8">
          <ProgressBarShowcase />
        </section>

        <section id="additional-progress" className="mb-8">
          <AdditionalProgressShowcase />
        </section>

        <section id="empty-state" className="mb-8">
          <EmptyStateShowcase />
        </section>

        <section id="statistic" className="mb-8">
          <StatisticShowcase />
        </section>

        <section id="kpi" className="mb-8">
          <KPIShowcase />
        </section>

        <section id="timeline" className="mb-8">
          <TimelineShowcase />
        </section>
        
        <Divider className="my-12" />
        
        {/* =========================== */}
        {/* PROSE & CONTENT */}  
        {/* =========================== */}
        
        <section id="prose" className="mb-8">
          <ProseShowcase />
        </section>
      </main>
    </div>
  </div>
)
}

export default App
