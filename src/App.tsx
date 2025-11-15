import { useState } from "react"
import { Typography, Paper } from "./components/core"
import { useThemeMode } from "./hooks/useThemeMode"
import { AppHeader } from "./components/AppHeader"
import { Sidebar } from "./components/navigation"
import { Home, FileText, BarChart3, Navigation, TrendingUp, MessageCircle, Layers, Search, Settings } from "lucide-react"
import { Divider } from "./components/layout/Divider"
import {
  // Core Foundation (Phase 1)
  CoreComponentsShowcase,
  TypographyShowcase,
  
  // Layout Structure (Phase 2)
  LayoutShowcase,
  UIPrimitivesShowcase,
  
  // Form Controls (Phase 3)
  FormControlsShowcase,
  DateTimePickerShowcase,
  
  // Data Display (Phase 4)
  DataDisplayShowcase,
  CodeSnippetShowcase,
  StatisticShowcase,
  KPIShowcase,
  TimelineShowcase,
  EmptyStateShowcase,
  ProgressCircleShowcase,
  ProgressBarShowcase,
  AdditionalProgressShowcase,
  
  // Navigation (Phase 5)
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
  
  // Feedback & Alerts (Phase 6)  
  AlertShowcase,
  ToastShowcase,
  LoadingSpinnerShowcase,
  LoaderShowcase,
  SkeletonShowcase,
  
  // Overlays & Interactive (Phase 7)
  ModalShowcase,
  ConfirmationDialogShowcase,
  DrawerShowcase,
  PopoverShowcase,
  DropdownMenuShowcase,
  ContextMenuShowcase,
  BackdropShowcase,
  LightboxShowcase,
  
  // Utilities & Special (Phase 8)
  SearchBarShowcase,
  FilterMenuShowcase,
  DotIndicatorShowcase,
  TreeViewShowcase,
  QuickActionsShowcase,
  ProseShowcase,
  
  // System Utilities
  ThemeToggleShowcase,
  ScrollAreaShowcase,
  ErrorBoundaryShowcase,  
  ClipboardButtonShowcase,
  
  // Premium Features (Phase 9)
  CommandBarShowcase,
  ActivityItemShowcase,
  NotificationCenterShowcase,
  UserMenuShowcase,
  ThemePreviewShowcase,
} from "./demos"
import "./App.css"

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const { theme: themeMode, isLoading } = useThemeMode()
  
  // Mock theme object for compatibility
  const theme = { mode: themeMode }

  const sidebarItems = [
    // Phase 1: Foundation & Core
    { 
      id: "core-foundation", 
      label: "Core Foundation", 
      icon: Home,
      children: [
        { id: "overview", label: "Core Components", href: "#overview" },
        { id: "typography", label: "Typography", href: "#typography" },
        { id: "semantic-typography", label: "Semantic Typography", href: "#semantic-typography" },
      ]
    },
    // Phase 2: Layout & Structure
    { 
      id: "layout-structure", 
      label: "Layout & Structure", 
      icon: Layers,
      children: [
        { id: "layout", label: "Layout Components", href: "#layout" },
        { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives" },
      ]
    },
    // Phase 3: Form Controls
    { 
      id: "form-controls", 
      label: "Form Controls", 
      icon: FileText,
      children: [
        { id: "form-controls", label: "Form Controls", href: "#form-controls" },
        { id: "datetimepicker", label: "DateTimePicker", href: "#datetimepicker" },
      ]
    },
    // Phase 4: Data Display
    { 
      id: "data-display", 
      label: "Data Display", 
      icon: BarChart3,
      children: [
        { id: "data-display", label: "Data Display", href: "#data-display" },
        { id: "code-snippet", label: "Code Snippet", href: "#code-snippet" },
        { id: "statistic", label: "Statistics", href: "#statistic" },
        { id: "kpi", label: "KPI", href: "#kpi" },
        { id: "timeline", label: "Timeline", href: "#timeline" },
        { id: "empty-state", label: "Empty State", href: "#empty-state" },
        { id: "progress-circle", label: "Progress Circle", href: "#progress-circle" },
        { id: "progress-bar", label: "Progress Bar", href: "#progress-bar" },
        { id: "additional-progress", label: "Additional Progress", href: "#additional-progress" },
      ]
    },
    // Phase 5: Navigation
    { 
      id: "navigation", 
      label: "Navigation", 
      icon: Navigation,
      children: [
        { id: "navbar", label: "Navbar", href: "#navbar" },
        { id: "floating-navbar", label: "Floating Navbar", href: "#floating-navbar" },
        { id: "sidebar", label: "Sidebar", href: "#sidebar" },
        { id: "breadcrumbs", label: "Breadcrumbs", href: "#breadcrumbs" },
        { id: "breadcrumb-header", label: "Breadcrumb Header", href: "#breadcrumb-header" },
        { id: "tabs", label: "Tabs", href: "#tabs" },
        { id: "pagination", label: "Pagination", href: "#pagination" },
        { id: "stepper", label: "Stepper", href: "#stepper" },
        { id: "command-palette", label: "Command Palette", href: "#command-palette" },
        { id: "menu", label: "Menu", href: "#menu" },
      ]
    },
    // Phase 6: Feedback & Alerts
    { 
      id: "feedback-alerts", 
      label: "Feedback & Alerts", 
      icon: MessageCircle,
      children: [
        { id: "alerts", label: "Alerts", href: "#alerts" },
        { id: "toast", label: "Toast", href: "#toast" },
        { id: "loading-spinner", label: "Loading Spinner", href: "#loading-spinner" },
        { id: "loader", label: "Loader", href: "#loader" },
        { id: "skeleton", label: "Skeleton", href: "#skeleton" },
      ]
    },
    // Phase 7: Overlays & Interactive
    { 
      id: "overlays-interactive", 
      label: "Overlays & Interactive", 
      icon: Layers,
      children: [
        { id: "modal", label: "Modal", href: "#modal" },
        { id: "confirmation-dialog", label: "Confirmation Dialog", href: "#confirmation-dialog" },
        { id: "drawer", label: "Drawer", href: "#drawer" },
        { id: "popover", label: "Popover", href: "#popover" },
        { id: "dropdown-menu", label: "Dropdown Menu", href: "#dropdown-menu" },
        { id: "context-menu", label: "Context Menu", href: "#context-menu" },
        { id: "backdrop", label: "Backdrop", href: "#backdrop" },
        { id: "lightbox", label: "Lightbox", href: "#lightbox" },
      ]
    },
    // Phase 8: Utilities & Special
    { 
      id: "utilities-special", 
      label: "Utilities & Special", 
      icon: Search,
      children: [
        { id: "searchbar", label: "SearchBar", href: "#searchbar" },
        { id: "filtermenu", label: "FilterMenu", href: "#filtermenu" },
        { id: "dot-indicator", label: "Dot Indicator", href: "#dot-indicator" },
        { id: "tree-view", label: "Tree View", href: "#tree-view" },
        { id: "quick-actions", label: "Quick Actions", href: "#quick-actions" },
        { id: "prose", label: "Prose Styles", href: "#prose" },
      ]
    },
    // System Utilities
    { 
      id: "system-utilities", 
      label: "System Utilities", 
      icon: Settings,
      children: [
        { id: "theme-toggle", label: "Theme Toggle", href: "#theme-toggle" },
        { id: "scroll-area", label: "Scroll Area", href: "#scroll-area" },
        { id: "error-boundary", label: "Error Boundary", href: "#error-boundary" },
        { id: "clipboard-button", label: "Clipboard Button", href: "#clipboard-button" },
      ]
    },
    // Phase 9: Premium Features
    { 
      id: "premium-features", 
      label: "Premium Features", 
      icon: TrendingUp,
      children: [
        { id: "command-bar", label: "Command Bar", href: "#command-bar" },
        { id: "activity-item", label: "Activity Item", href: "#activity-item" },
        { id: "notification-center", label: "Notification Center", href: "#notification-center" },
        { id: "user-menu", label: "User Menu", href: "#user-menu" },
        { id: "theme-preview", label: "Theme Preview", href: "#theme-preview" },
      ]
    },
  ]

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (theme.mode) {
      case 'light':
        return 'bg-white text-gray-800'
      case 'dark':
        return 'bg-gray-900 text-gray-50'
      case 'system':
      default:
        return 'bg-[#faf9f6] text-stone-700'
    }
  }

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${getThemeClasses()}`}>
      {/* Theme Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 dark:bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-3">
            <div className="w-5 h-5 border-2 border-blue-600 dark:border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <Typography variant="body" className="text-gray-700 dark:text-gray-300">
              Applying theme...
            </Typography>
          </div>
        </div>
      )}

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
        {/* PHASE 1: CORE FOUNDATION */}
        {/* =========================== */}
        
        <section id="overview" className="mb-8">
          <CoreComponentsShowcase />
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
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PHASE 2: LAYOUT & STRUCTURE */}
        {/* =========================== */}

        <section id="layout" className="mb-8">
          <LayoutShowcase />
        </section>

        <section id="ui-primitives" className="mb-8">
          <UIPrimitivesShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PHASE 3: FORM CONTROLS */}
        {/* =========================== */}
        
        <section id="form-controls" className="mb-8">
          <FormControlsShowcase />
        </section>

        <section id="datetimepicker" className="mb-8">
          <DateTimePickerShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PHASE 4: DATA DISPLAY */}
        {/* =========================== */}
        
        <section id="data-display" className="mb-8">
          <DataDisplayShowcase />
        </section>

        <section id="code-snippet" className="mb-8">
          <CodeSnippetShowcase />
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

        <section id="empty-state" className="mb-8">
          <EmptyStateShowcase />
        </section>

        <section id="progress-circle" className="mb-8">
          <ProgressCircleShowcase />
        </section>

        <section id="progress-bar" className="mb-8">
          <ProgressBarShowcase />
        </section>

        <section id="additional-progress" className="mb-8">
          <AdditionalProgressShowcase />
        </section>

        <Divider className="my-12" />
        
        {/* =========================== */}
        {/* PHASE 5: NAVIGATION */}
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
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PHASE 6: FEEDBACK & ALERTS */}
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
        {/* PHASE 7: OVERLAYS & INTERACTIVE */}
        {/* =========================== */}
        
        <section id="modal" className="mb-8">
          <ModalShowcase />
        </section>

        <section id="confirmation-dialog" className="mb-8">
          <ConfirmationDialogShowcase />
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

        <section id="backdrop" className="mb-8">
          <BackdropShowcase />
        </section>

        <section id="lightbox" className="mb-8">
          <LightboxShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* PHASE 8: UTILITIES & SPECIAL */}
        {/* =========================== */}

        <section id="searchbar" className="mb-8">
          <SearchBarShowcase />
        </section>

        <section id="filtermenu" className="mb-8">
          <FilterMenuShowcase />
        </section>

        <section id="dot-indicator" className="mb-8">
          <DotIndicatorShowcase />
        </section>

        <section id="tree-view" className="mb-8">
          <TreeViewShowcase />
        </section>

        <section id="quick-actions" className="mb-8">
          <QuickActionsShowcase />
        </section>
        
        <section id="prose" className="mb-8">
          <ProseShowcase />
        </section>
        
        <Divider className="my-12" />

        {/* =========================== */}
        {/* SYSTEM UTILITIES */}
        {/* =========================== */}
        
        <section id="theme-toggle" className="mb-8">
          <ThemeToggleShowcase />
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
        {/* PHASE 9: PREMIUM FEATURES */}
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
      </main>
    </div>
  </div>
  )
}

export default App
