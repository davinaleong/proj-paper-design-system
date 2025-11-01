import { Paper, Typography, Brand } from "../../components/core"
import { Navbar, Sidebar, Breadcrumbs, Tabs, Pagination } from "../../components/navigation"
import { Home, Users, Settings, Bell, Search, FileText, Calendar, Mail, BarChart3, Zap, Shield, FolderOpen, File, Database, Globe } from "lucide-react"

export function NavigationShowcase() {
  // Sample navigation items
  const navItems = [
    { id: "home", label: "Home", href: "#overview", icon: Home },
    { id: "about", label: "About", href: "#typography", icon: Users },
    { 
      id: "services", 
      label: "Services", 
      icon: Settings,
      children: [
        { id: "design", label: "Design", href: "#ui-primitives" },
        { id: "development", label: "Development", href: "#form-controls" },
        { id: "consulting", label: "Consulting", href: "#data-display" },
      ]
    },
    { id: "contact", label: "Contact", href: "#navigation", icon: Bell, badge: "New" },
  ]

  // Sample sidebar items
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", href: "#overview", icon: Home },
    { id: "projects", label: "Projects", href: "#projects", icon: FileText, badge: 3 },
    { 
      id: "team", 
      label: "Team", 
      icon: Users,
      children: [
        { id: "members", label: "Members", href: "#members" },
        { id: "roles", label: "Roles", href: "#roles" },
        { id: "permissions", label: "Permissions", href: "#permissions" },
      ]
    },
    { id: "calendar", label: "Calendar", href: "#calendar", icon: Calendar },
    { id: "messages", label: "Messages", href: "#messages", icon: Mail, badge: "12" },
    { id: "analytics", label: "Analytics", href: "#analytics", icon: BarChart3 },
    { 
      id: "admin", 
      label: "Administration", 
      icon: Shield,
      children: [
        { id: "settings", label: "Settings", href: "#settings", icon: Settings },
        { id: "integrations", label: "Integrations", href: "#integrations", icon: Zap },
        { id: "security", label: "Security", href: "#security" },
      ]
    },
  ]

  return (
    <>
      <section id="navigation">
        <Paper>
          <div className="mb-8">
            <Typography variant="h2" className="mb-4">
              Navigation Components
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Navigation components for organizing and moving through your
              application with Dav/Devs Paper styling.
            </Typography>
          </div>

          {/* Navbar Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Navbar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              A flexible navigation bar with support for dropdowns, mobile menus, and various styling options.
            </Typography>

            {/* Default Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Default Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Dav/Devs Paper" }}
                />
              </div>
            </div>

            {/* Solid Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Solid Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Brand" }}
                  variant="solid"
                />
              </div>
            </div>

            {/* Compact Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Compact Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Compact" }}
                  compact={true}
                />
              </div>
            </div>

            {/* Navbar with Right Content */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Navbar with Right Content
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems.slice(0, 2)} // Show fewer items
                  brand={{ text: "Brand" }}
                  rightContent={
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-stone-100 rounded-sm">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-sm hover:bg-blue-700">
                        Sign In
                      </button>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Custom Brand Font Sizes */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Custom Brand Font Sizes
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Demonstrate how to customize brand font sizes using titleVariant and subtitleVariant props.
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Large Brand (h1 title, body subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Large Brand",
                        titleVariant: "h1",
                        subtitleVariant: "body"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Medium Brand (h3 title, bodySmall subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Medium Brand",
                        titleVariant: "h3",
                        subtitleVariant: "bodySmall"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Small Brand (h6 title, caption subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Small Brand",
                        titleVariant: "h6",
                        subtitleVariant: "caption"
                      }}
                      compact={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Standalone Brand Examples */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Standalone Brand Component
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Brand component with various font size customizations.
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 space-y-6">
                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Default Brand
                  </Typography>
                  <Brand />
                </div>

                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Large Brand (h1 title)
                  </Typography>
                  <Brand 
                    titleVariant="h1" 
                    title="Big Brand Name"
                    subtitle="Impressive tagline"
                  />
                </div>

                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Compact Brand (caption title, overline subtitle)
                  </Typography>
                  <Brand 
                    titleVariant="caption" 
                    subtitleVariant="overline"
                    title="Tiny Brand"
                    subtitle="SMALL SUBTITLE"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Navbar Example */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Floating Navbar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              A floating navigation bar that can be positioned anywhere on the
              screen with smooth scrolling and automatic highlighting.
            </Typography>
            <Typography variant="body" className="mb-4">
              ✅ Automatic scroll-based highlighting
              <br />
              ✅ Smooth scrolling to sections
              <br />
              ✅ Configurable positioning (corners)
              <br />
              ✅ Responsive design with backdrop blur
              <br />
              ✅ Paper theme styling
              <br />✅ Full accessibility support
            </Typography>

            {/* The floating navbar is rendered at the app level */}
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                The floating navbar is currently active in the top-right corner
                of this page. Scroll through the sections to see the automatic
                highlighting in action.
              </Typography>
            </div>
          </div>

          {/* Sidebar Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Sidebar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              A flexible sidebar navigation component with support for nested items, collapsing, and various positioning options.
            </Typography>

            {/* Default Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Default Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Dav/Devs Paper", logo: "/logo-coloured.svg" }}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Main content area. The sidebar provides navigation with collapsible groups, badges, and smooth interactions.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Compact Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Compact", logo: "/logo-coloured.svg" }}
                    variant="compact"
                    width="sm"
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Compact sidebar variant with smaller width for space-efficient layouts.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Collapsible Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Collapsible", logo: "/logo-coloured.svg" }}
                    collapsible={true}
                    collapsed={false}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Click the collapse button in the sidebar header to toggle between expanded and collapsed states.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Scroll Spy */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Sidebar with Scroll Spy
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Automatically highlights the current section based on scroll position.
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={[
                      { id: "overview", label: "Overview", href: "#overview", icon: Home },
                      { id: "typography", label: "Typography", href: "#typography", icon: FileText },
                      { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives", icon: Calendar },
                      { id: "form-controls", label: "Form Controls", href: "#form-controls", icon: Settings },
                      { id: "navigation", label: "Navigation", href: "#navigation", icon: BarChart3 },
                    ]}
                    brand={{ text: "Spy Demo", logo: "/logo-coloured.svg" }}
                    spy={true}
                    spyOffset={100}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Scroll spy is active! The sidebar will automatically highlight the current section as you scroll through the page. Try scrolling to see it in action.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Floating Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                <div className="relative h-80 p-4">
                  <Sidebar
                    items={sidebarItems.slice(0, 4)} // Show fewer items
                    brand={{ text: "Float", logo: "/logo-coloured.svg" }}
                    variant="floating"
                    width="sm"
                    className="absolute top-4 left-4 h-72"
                  />
                  <div className="ml-60 p-4">
                    <Typography variant="body" className="text-stone-600">
                      Floating sidebar variant with backdrop blur and shadow effects. Perfect for overlay scenarios or when you need the sidebar to stand out from the background.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumbs Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Breadcrumbs
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              Navigation trail showing the current location hierarchy with support for collapsing, icons, and various separators.
            </Typography>

            {/* Basic Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Basic Breadcrumbs
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Home", href: "#overview" },
                    { id: "products", label: "Products", href: "#products" },
                    { id: "category", label: "Electronics", href: "#electronics" },
                    { id: "product", label: "Smartphone" },
                  ]}
                />
              </div>
            </div>

            {/* With Icons */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                With Icons
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Dashboard", href: "#overview", icon: Home },
                    { id: "docs", label: "Documentation", href: "#docs", icon: FileText },
                    { id: "components", label: "Components", href: "#components", icon: FolderOpen },
                    { id: "navigation", label: "Navigation", icon: File },
                  ]}
                  showIcons={true}
                />
              </div>
            </div>

            {/* Different Separators */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Different Separators
              </Typography>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Chevron (default)
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="chevron"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Slash
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="slash"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Arrow
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="arrow"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Dot
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="dot"
                  />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Different Sizes
              </Typography>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Small
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="sm"
                    showIcons={true}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Medium (default)
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="md"
                    showIcons={true}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Large
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="lg"
                    showIcons={true}
                  />
                </div>
              </div>
            </div>

            {/* Collapsed Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Collapsed Long Paths
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Home", href: "#", icon: Home },
                    { id: "workspace", label: "Workspace", href: "#" },
                    { id: "projects", label: "Projects", href: "#" },
                    { id: "project", label: "Design System", href: "#" },
                    { id: "components", label: "Components", href: "#" },
                    { id: "navigation", label: "Navigation", href: "#" },
                    { id: "breadcrumbs", label: "Breadcrumbs", href: "#" },
                    { id: "current", label: "Current Page" },
                  ]}
                  maxItems={4}
                  showIcons={true}
                />
              </div>
              <Typography variant="caption" color="muted" className="mt-2">
                Click the "..." button to expand and show all items
              </Typography>
            </div>

            {/* Icon-Only Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Icon-Only Breadcrumbs
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Compact breadcrumbs showing only icons, perfect for space-constrained layouts.
              </Typography>
              
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Medium
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Dashboard", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "components", label: "Components", href: "#", icon: FolderOpen },
                      { id: "navigation", label: "Navigation", icon: File },
                    ]}
                    iconOnly={true}
                    size="md"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Small with Slash Separator
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "settings", label: "Settings", href: "#", icon: Settings },
                      { id: "profile", label: "Profile", href: "#", icon: Users },
                      { id: "security", label: "Security", icon: Shield },
                    ]}
                    iconOnly={true}
                    size="sm"
                    separator="slash"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Large with Dot Separator
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "dashboard", label: "Dashboard", href: "#", icon: BarChart3 },
                      { id: "analytics", label: "Analytics", href: "#", icon: Zap },
                      { id: "reports", label: "Reports", icon: FileText },
                    ]}
                    iconOnly={true}
                    size="lg"
                    separator="dot"
                  />
                </div>
              </div>
              
              <Typography variant="caption" color="muted" className="mt-3">
                Hover over icons to see tooltips with labels. Each icon is clickable and maintains full accessibility.
              </Typography>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Tabs
            </Typography>
            
            <Typography variant="body" color="muted" className="mb-6">
              Tabbed interfaces for organizing content into switchable sections with multiple variants and orientations.
            </Typography>

            {/* Basic Tabs Example */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Basic Tab Interface
              </Typography>
              
              <Tabs
                items={[
                  {
                    id: "overview",
                    label: "Overview",
                    icon: Home,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Dashboard Overview</Typography>
                        <Typography variant="body" color="stone">
                          Welcome to your dashboard. Here you can view recent activity, project summaries, and quick access to important features.
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Active Projects</Typography>
                            <Typography variant="h3" color="primary">12</Typography>
                          </Paper>
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Team Members</Typography>
                            <Typography variant="h3" color="success">8</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "analytics",
                    label: "Analytics",
                    icon: BarChart3,
                    badge: "New",
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Analytics Dashboard</Typography>
                        <Typography variant="body" color="stone">
                          View detailed analytics and performance metrics for your projects and team.
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="primary" className="mb-2">2.4k</Typography>
                            <Typography variant="body" color="stone">Page Views</Typography>
                          </Paper>
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="success" className="mb-2">98.2%</Typography>
                            <Typography variant="body" color="stone">Uptime</Typography>
                          </Paper>
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="warning" className="mb-2">1.8s</Typography>
                            <Typography variant="body" color="stone">Load Time</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "settings",
                    label: "Settings",
                    icon: Settings,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Application Settings</Typography>
                        <Typography variant="body" color="stone">
                          Configure your application preferences, security settings, and team permissions.
                        </Typography>
                        <div className="space-y-3">
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">General Settings</Typography>
                            <Typography variant="body" color="stone">Theme, language, timezone preferences</Typography>
                          </Paper>
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Security</Typography>
                            <Typography variant="body" color="stone">Password policy, two-factor authentication</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "team",
                    label: "Team",
                    icon: Users,
                    disabled: true,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Team Management</Typography>
                        <Typography variant="body" color="stone">
                          Manage team members, roles, and permissions.
                        </Typography>
                      </div>
                    )
                  }
                ]}
                variant="tabs"
                color="primary"
                size="md"
                defaultActiveTab="overview"
                showContent={true}
              />
            </div>

            {/* Tab Variants */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Tab Variants
              </Typography>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Pills Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Pills Style</Typography>
                  <Tabs
                    items={[
                      { id: "files", label: "Files", icon: FileText, content: <Typography variant="body">File management interface</Typography> },
                      { id: "data", label: "Database", icon: Database, content: <Typography variant="body">Database connections and queries</Typography> },
                      { id: "network", label: "Network", icon: Globe, content: <Typography variant="body">Network monitoring and settings</Typography> }
                    ]}
                    variant="pills"
                    color="success"
                    size="sm"
                    showContent={false}
                  />
                </div>

                {/* Ghost Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Ghost Style</Typography>
                  <Tabs
                    items={[
                      { id: "inbox", label: "Inbox", icon: Mail, badge: "3", content: <Typography variant="body">Email inbox</Typography> },
                      { id: "calendar-tab", label: "Calendar", icon: Calendar, content: <Typography variant="body">Calendar events</Typography> },
                      { id: "tasks", label: "Tasks", icon: FileText, badge: "12", content: <Typography variant="body">Task management</Typography> }
                    ]}
                    variant="ghost"
                    color="warning"
                    showContent={false}
                  />
                </div>

                {/* Links Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Links Style</Typography>
                  <Tabs
                    items={[
                      { id: "docs", label: "Documentation", icon: FileText, content: <Typography variant="body">Documentation</Typography> },
                      { id: "api", label: "API Reference", icon: Zap, content: <Typography variant="body">API docs</Typography> },
                      { id: "guides", label: "Guides", icon: FolderOpen, content: <Typography variant="body">Tutorial guides</Typography> }
                    ]}
                    variant="links"
                    color="info"
                    showContent={false}
                  />
                </div>
              </div>
            </div>

            {/* Vertical Tabs */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Vertical Orientation
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Tabs
                  items={[
                    { 
                      id: "profile-settings", 
                      label: "Profile", 
                      icon: Users, 
                      content: (
                        <Typography variant="body">
                          Manage your profile information, avatar, and personal preferences.
                        </Typography>
                      ) 
                    },
                    { 
                      id: "security-settings", 
                      label: "Security", 
                      icon: Shield, 
                      content: (
                        <Typography variant="body">
                          Configure security settings, password, and two-factor authentication.
                        </Typography>
                      ) 
                    },
                    { 
                      id: "notification-settings", 
                      label: "Notifications", 
                      icon: Bell, 
                      badge: "2",
                      content: (
                        <Typography variant="body">
                          Set up notification preferences for email, push, and in-app alerts.
                        </Typography>
                      ) 
                    }
                  ]}
                  variant="ghost"
                  color="secondary"
                  orientation="vertical"
                  showContent={true}
                />
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Tabs support multiple variants (tabs, pills, ghost, links, plain), orientations (horizontal, vertical), 
              sizes, color themes, icons, badges, and can be controlled or uncontrolled.
            </Typography>
          </div>

          {/* Pagination Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Pagination
            </Typography>
            
            <Typography variant="body" color="muted" className="mb-6">
              Navigate through multi-page content with various formats including numbers, letters, and roman numerals.
            </Typography>

            {/* Basic Pagination Examples */}
            <div className="space-y-6">
              <Typography variant="h4" className="mb-3">
                Pagination Formats
              </Typography>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Numeric Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Numeric Pagination (1 ... 3, 4, 5 ... 7)
                  </Typography>
                  <Pagination
                    currentPage={4}
                    totalPages={15}
                    format="numbers"
                    variant="outline"
                    color="primary"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Letter Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Letter Pagination (a ... c, d, e ... g)
                  </Typography>
                  <Pagination
                    currentPage={4}
                    totalPages={12}
                    format="letters"
                    variant="ghost"
                    color="success"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Roman Numeral Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Roman Numeral Pagination (i ... iii, iv, v ... vii)
                  </Typography>
                  <Pagination
                    currentPage={5}
                    totalPages={10}
                    format="roman"
                    variant="solid"
                    color="secondary"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Simple Navigation */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Previous / Next Navigation
                  </Typography>
                  <Pagination
                    currentPage={2}
                    totalPages={5}
                    format="prev-next"
                    variant="link"
                    color="info"
                    onPageChange={() => {}}
                  />
                </div>

                {/* Full Navigation */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    First / Previous / Current / Next / Last
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={8}
                    format="first-last"
                    variant="outline"
                    color="warning"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Horizontal Scrolling Test */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Horizontal Scrolling (Large Page Count)
                  </Typography>
                  <div className="max-w-sm mx-auto border border-dashed border-blue-300 p-2 rounded">
                    <Typography variant="caption" color="muted" className="mb-2 block text-center">
                      Constrained to 384px width - scroll horizontally →
                    </Typography>
                    <Pagination
                      currentPage={25}
                      totalPages={100}
                      format="numbers"
                      variant="outline"
                      color="primary"
                      onPageChange={() => {}}
                      siblingCount={3}
                      showBoundaries={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Variants */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Style Variants
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Solid Variant
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={7}
                    variant="solid"
                    color="primary"
                    size="sm"
                    onPageChange={() => {}}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Ghost Variant
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={7}
                    variant="ghost"
                    color="success"
                    size="sm"
                    onPageChange={() => {}}
                  />
                </div>
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Pagination supports multiple formats (numbers, letters, roman numerals), variants (solid, outline, ghost, link, plain), 
              sizes, color themes, and comprehensive accessibility features.
            </Typography>
          </div>

          {/* Future Navigation Components */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Coming Soon
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Stepper
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Multi-step process indicator
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Command Palette
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Keyboard-driven navigation
                </Typography>
              </div>
            </div>
          </div>
        </Paper>
      </section>
    </>
  )
}
