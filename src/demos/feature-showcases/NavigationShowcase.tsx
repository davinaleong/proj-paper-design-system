import { Paper, Typography, Brand } from "../../components/core"
import { Navbar, Sidebar } from "../../components/navigation"
import { Home, Users, Settings, Bell, Search, FileText, Calendar, Mail, BarChart3, Zap, Shield } from "lucide-react"

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

          {/* Future Navigation Components */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Coming Soon
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Breadcrumbs
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Navigation trail showing current location
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Tabs
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Content switching interface
                </Typography>
              </div>

              <div className="p-4 border border-stone-200 rounded-lg">
                <Typography variant="h4" className="mb-2">
                  Pagination
                </Typography>
                <Typography variant="body" className="text-stone-600 text-sm">
                  Page navigation controls
                </Typography>
              </div>

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
