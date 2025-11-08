import { Typography } from "../../components/core"
import { Sidebar } from "../../components/navigation"
import { Home, FileText, Calendar, Mail, BarChart3, Shield, Settings, Zap, Users } from "lucide-react"

export function SidebarShowcase() {
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
    <div id="sidebar" className="space-y-8">
      <div>
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
    </div>
  )
}