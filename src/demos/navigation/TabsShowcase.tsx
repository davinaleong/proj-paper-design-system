import React, { useState } from "react"
import { 
  Home, 
  User, 
  Settings, 
  Mail, 
  FileText, 
  BarChart3, 
  Shield, 
  Bell,
  Database,
  Globe,
  Calendar,
  MessageSquare
} from "lucide-react"
import { Tabs } from "../../components/navigation/Tabs"
import { Paper } from "../../components/core/Paper"
import { Typography } from "../../components/core/Typography"
import type { TabItem, TabVariant } from "../../components/navigation/Tabs"
import type { ColorVariant } from "../../utils/color"

const basicTabItems: TabItem[] = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Welcome Home</Typography>
        <Typography variant="body" color="stone">
          This is the home tab content. Here you can find an overview of your dashboard,
          recent activity, and quick access to frequently used features.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Paper className="p-4">
            <Typography variant="h4" color="stone" className="mb-2">Quick Stats</Typography>
            <Typography variant="body" color="stone">24 active projects</Typography>
          </Paper>
          <Paper className="p-4">
            <Typography variant="h4" color="stone" className="mb-2">Recent Activity</Typography>
            <Typography variant="body" color="stone">3 updates today</Typography>
          </Paper>
        </div>
      </div>
    )
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">User Profile</Typography>
        <Typography variant="body" color="stone">
          Manage your personal information, preferences, and account settings.
        </Typography>
        <Paper className="p-4">
          <Typography variant="h4" color="stone" className="mb-2">Account Information</Typography>
          <div className="space-y-2">
            <Typography variant="body" color="stone">Name: John Doe</Typography>
            <Typography variant="body" color="stone">Email: john@example.com</Typography>
            <Typography variant="body" color="stone">Role: Administrator</Typography>
          </div>
        </Paper>
      </div>
    )
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    badge: "3",
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Application Settings</Typography>
        <Typography variant="body" color="stone">
          Configure application preferences, security settings, and system options.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Paper className="p-4">
            <Typography variant="h4" color="stone" className="mb-2">General</Typography>
            <Typography variant="body" color="stone">Language, timezone, theme</Typography>
          </Paper>
          <Paper className="p-4">
            <Typography variant="h4" color="stone" className="mb-2">Security</Typography>
            <Typography variant="body" color="stone">Password, 2FA, sessions</Typography>
          </Paper>
        </div>
      </div>
    )
  },
  {
    id: "messages",
    label: "Messages",
    icon: Mail,
    disabled: true,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Messages</Typography>
        <Typography variant="body" color="stone">
          View and manage your messages and notifications.
        </Typography>
      </div>
    )
  }
]

const advancedTabItems: TabItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    content: (
      <div className="space-y-6">
        <Typography variant="h3" color="stone">Analytics Dashboard</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Paper className="p-4 text-center">
            <Typography variant="h2" color="primary" className="mb-2">1,234</Typography>
            <Typography variant="body" color="stone">Total Users</Typography>
          </Paper>
          <Paper className="p-4 text-center">
            <Typography variant="h2" color="success" className="mb-2">98.5%</Typography>
            <Typography variant="body" color="stone">Uptime</Typography>
          </Paper>
          <Paper className="p-4 text-center">
            <Typography variant="h2" color="warning" className="mb-2">156</Typography>
            <Typography variant="body" color="stone">Pending Tasks</Typography>
          </Paper>
        </div>
      </div>
    )
  },
  {
    id: "reports",
    label: "Reports",
    icon: FileText,
    badge: "New",
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Reports & Analytics</Typography>
        <Typography variant="body" color="stone">
          Generate and view detailed reports about your system performance and usage.
        </Typography>
        <Paper className="p-4">
          <Typography variant="h4" color="stone" className="mb-2">Available Reports</Typography>
          <ul className="space-y-2">
            <li><Typography variant="body" color="stone">• Monthly Usage Report</Typography></li>
            <li><Typography variant="body" color="stone">• Performance Analytics</Typography></li>
            <li><Typography variant="body" color="stone">• User Activity Summary</Typography></li>
          </ul>
        </Paper>
      </div>
    )
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Security Center</Typography>
        <Typography variant="body" color="stone">
          Monitor security events, manage access controls, and review audit logs.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Paper className="p-4">
            <Typography variant="h4" color="success" className="mb-2">System Status</Typography>
            <Typography variant="body" color="stone">All systems secure</Typography>
          </Paper>
          <Paper className="p-4">
            <Typography variant="h4" color="stone" className="mb-2">Recent Events</Typography>
            <Typography variant="body" color="stone">No suspicious activity</Typography>
          </Paper>
        </div>
      </div>
    )
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    badge: 5,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Notification Center</Typography>
        <Typography variant="body" color="stone">
          Manage your notification preferences and view recent alerts.
        </Typography>
        <Paper className="p-4">
          <Typography variant="h4" color="stone" className="mb-2">Recent Notifications</Typography>
          <div className="space-y-2">
            <Typography variant="body" color="stone">• System update completed</Typography>
            <Typography variant="body" color="stone">• New user registered</Typography>
            <Typography variant="body" color="stone">• Backup finished successfully</Typography>
          </div>
        </Paper>
      </div>
    )
  }
]

const iconOnlyTabItems: TabItem[] = [
  {
    id: "database",
    label: "Database",
    icon: Database,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Database Management</Typography>
        <Typography variant="body" color="stone">
          Monitor database performance, manage connections, and view statistics.
        </Typography>
      </div>
    )
  },
  {
    id: "network",
    label: "Network",
    icon: Globe,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Network Status</Typography>
        <Typography variant="body" color="stone">
          View network topology, monitor traffic, and manage connections.
        </Typography>
      </div>
    )
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: Calendar,
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Calendar Events</Typography>
        <Typography variant="body" color="stone">
          View scheduled events, meetings, and important dates.
        </Typography>
      </div>
    )
  },
  {
    id: "chat",
    label: "Chat",
    icon: MessageSquare,
    badge: "3",
    content: (
      <div className="space-y-4">
        <Typography variant="h3" color="stone">Chat Messages</Typography>
        <Typography variant="body" color="stone">
          View and respond to team messages and conversations.
        </Typography>
      </div>
    )
  }
]

const TabVariantShowcase: React.FC<{ variant: TabVariant; color: ColorVariant; title: string }> = ({ 
  variant, 
  color, 
  title 
}) => {
  const [activeTab, setActiveTab] = useState(basicTabItems[0].id)

  return (
    <div className="space-y-4">
      <Typography variant="h4" color="stone">{title}</Typography>
      <Tabs
        items={basicTabItems}
        variant={variant}
        color={color}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        showContent={true}
      />
    </div>
  )
}

export const TabsShowcase: React.FC = () => {
  const [controlledActiveTab, setControlledActiveTab] = useState(advancedTabItems[0].id)
  const [verticalActiveTab, setVerticalActiveTab] = useState(basicTabItems[0].id)
  const [iconOnlyActiveTab, setIconOnlyActiveTab] = useState(iconOnlyTabItems[0].id)

  return (
    <div className="space-y-12 p-6">
      <div>
        <Typography variant="h1" color="stone" className="mb-2">
          Tabs Component Showcase
        </Typography>
        <Typography variant="body" color="stone" className="mb-8">
          Interactive tabbed interfaces with multiple variants, color themes, and comprehensive functionality.
        </Typography>
      </div>

      {/* Basic Tabs */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Basic Tabs</Typography>
        <Paper className="p-6">
          <Tabs
            items={basicTabItems}
            variant="tabs"
            color="primary"
            defaultActiveTab="home"
            showContent={true}
          />
        </Paper>
      </section>

      {/* Variant Showcase */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Tab Variants</Typography>
        <div className="grid grid-cols-1 gap-8">
          <Paper className="p-6">
            <TabVariantShowcase variant="tabs" color="primary" title="Tabs (Folders Style)" />
          </Paper>
          <Paper className="p-6">
            <TabVariantShowcase variant="pills" color="success" title="Pills Style" />
          </Paper>
          <Paper className="p-6">
            <TabVariantShowcase variant="ghost" color="warning" title="Ghost Style" />
          </Paper>
          <Paper className="p-6">
            <TabVariantShowcase variant="links" color="info" title="Links Style" />
          </Paper>
          <Paper className="p-6">
            <TabVariantShowcase variant="plain" color="stone" title="Plain Style" />
          </Paper>
        </div>
      </section>

      {/* Controlled Tabs */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Controlled Tabs</Typography>
        <Paper className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Typography variant="body" color="stone">
                Active Tab: <strong>{controlledActiveTab}</strong>
              </Typography>
              <button
                onClick={() => setControlledActiveTab("security")}
                className="px-3 py-1 bg-primary-500 text-white rounded text-sm hover:bg-primary-600"
              >
                Go to Security
              </button>
            </div>
            <Tabs
              items={advancedTabItems}
              variant="pills"
              color="primary"
              size="lg"
              activeTab={controlledActiveTab}
              onTabChange={setControlledActiveTab}
              showContent={true}
            />
          </div>
        </Paper>
      </section>

      {/* Vertical Tabs */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Vertical Tabs</Typography>
        <Paper className="p-6">
          <Tabs
            items={basicTabItems}
            variant="ghost"
            color="secondary"
            orientation="vertical"
            activeTab={verticalActiveTab}
            onTabChange={setVerticalActiveTab}
            showContent={true}
          />
        </Paper>
      </section>

      {/* Icon-Only Tabs */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Icon-Only Tabs</Typography>
        <Paper className="p-6">
          <Tabs
            items={iconOnlyTabItems}
            variant="pills"
            color="primary"
            orientation="vertical"
            iconPosition="top"
            activeTab={iconOnlyActiveTab}
            onTabChange={setIconOnlyActiveTab}
            showContent={true}
          />
        </Paper>
      </section>

      {/* Different Sizes */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Tab Sizes</Typography>
        <div className="space-y-6">
          <Paper className="p-6">
            <Typography variant="h4" color="stone" className="mb-4">Small Size</Typography>
            <Tabs
              items={basicTabItems.slice(0, 3)}
              variant="tabs"
              color="primary"
              size="sm"
              showContent={false}
            />
          </Paper>
          <Paper className="p-6">
            <Typography variant="h4" color="stone" className="mb-4">Medium Size (Default)</Typography>
            <Tabs
              items={basicTabItems.slice(0, 3)}
              variant="tabs"
              color="primary"
              size="md"
              showContent={false}
            />
          </Paper>
          <Paper className="p-6">
            <Typography variant="h4" color="stone" className="mb-4">Large Size</Typography>
            <Tabs
              items={basicTabItems.slice(0, 3)}
              variant="tabs"
              color="primary"
              size="lg"
              showContent={false}
            />
          </Paper>
        </div>
      </section>

      {/* Full Width Tabs */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Full Width Tabs</Typography>
        <Paper className="p-6">
          <Tabs
            items={basicTabItems.slice(0, 3)}
            variant="pills"
            color="success"
            fullWidth={true}
            showContent={false}
          />
        </Paper>
      </section>

      {/* Color Variations */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Color Variations</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(["primary", "secondary", "success", "warning", "danger", "info"] as ColorVariant[]).map((color) => (
            <Paper key={color} className="p-6">
              <Typography variant="h4" color="stone" className="mb-4 capitalize">
                {color} Color
              </Typography>
              <Tabs
                items={basicTabItems.slice(0, 3)}
                variant="pills"
                color={color}
                showContent={false}
              />
            </Paper>
          ))}
        </div>
      </section>

      {/* Without Content Panel */}
      <section className="space-y-6">
        <Typography variant="h2" color="stone">Tabs Without Content</Typography>
        <Paper className="p-6">
          <Typography variant="body" color="stone" className="mb-4">
            Use showContent=false when you want to handle content display separately.
          </Typography>
          <Tabs
            items={basicTabItems}
            variant="ghost"
            color="primary"
            showContent={false}
          />
        </Paper>
      </section>
    </div>
  )
}