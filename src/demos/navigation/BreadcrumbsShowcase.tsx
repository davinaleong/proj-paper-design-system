import { Typography } from "../../components/core"
import { Breadcrumbs } from "../../components/navigation"
import { Home, FileText, FolderOpen, File, Settings, Users, Shield, BarChart3, Zap } from "lucide-react"

export function BreadcrumbsShowcase() {
  return (
    <div id="breadcrumbs" className="space-y-8">
      <div>
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
    </div>
  )
}