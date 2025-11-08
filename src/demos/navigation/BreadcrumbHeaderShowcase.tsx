import React, { useState } from "react"
import { 
  Plus, 
  Download, 
  Filter, 
  Users, 
  Clock, 
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Settings,
  Share2
} from "lucide-react"
import { BreadcrumbHeader } from "../../components/utilities/BreadcrumbHeader"
import type { BreadcrumbItem } from "../../components/navigation/Breadcrumbs/types"
import type { 
  BreadcrumbHeaderAction, 
  BreadcrumbHeaderMetadata 
} from "../../components/utilities/BreadcrumbHeader/types"
import { Section } from "../../components/layout/Section"
import { Paper } from "../../components/core/Paper"
import { Typography } from "../../components/core/Typography"
import { Stack } from "../../components/layout/Stack"

export const BreadcrumbHeaderShowcase: React.FC = () => {
  const [searchValue, setSearchValue] = useState("")
  const [stickySearchValue, setStickySearchValue] = useState("")

  // Sample breadcrumbs
  const projectBreadcrumbs: BreadcrumbItem[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "website", label: "Website Redesign", href: "/projects/website" }
  ]

  const usersBreadcrumbs: BreadcrumbItem[] = [
    { id: "home", label: "Dashboard", href: "/" },
    { id: "admin", label: "Administration", href: "/admin" },
    { id: "users", label: "User Management", href: "/admin/users" }
  ]

  // Sample actions
  const projectActions: BreadcrumbHeaderAction[] = [
    {
      id: "create",
      label: "New Task",
      icon: Plus,
      variant: "solid",
      color: "primary",
      onClick: () => console.log("Create task")
    },
    {
      id: "export",
      label: "Export",
      icon: Download,
      variant: "outline",
      onClick: () => console.log("Export data")
    },
    {
      id: "filter",
      label: "Filter",
      icon: Filter,
      variant: "ghost",
      onClick: () => console.log("Open filters")
    }
  ]

  const managementActions: BreadcrumbHeaderAction[] = [
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      variant: "outline",
      onClick: () => console.log("Open settings")
    }
  ]

  // Sample metadata
  const projectMetadata: BreadcrumbHeaderMetadata[] = [
    {
      id: "updated",
      label: "Last updated",
      value: "2 hours ago",
      icon: Clock
    },
    {
      id: "members",
      label: "Team members",
      value: "12",
      icon: Users
    },
    {
      id: "status",
      label: "Status",
      value: "In Progress",
      icon: AlertCircle,
      className: "text-amber-600"
    }
  ]

  const userMetadata: BreadcrumbHeaderMetadata[] = [
    {
      id: "total",
      label: "Total users",
      value: "1,247",
      icon: Users
    },
    {
      id: "active",
      label: "Active today",
      value: "89",
      icon: Eye
    }
  ]

  return (
    <div className="space-y-8">
      <Section>
        <Typography variant="h2" className="mb-6">
          Breadcrumb Header Component
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-8">
          A composite page header component that combines breadcrumbs, page title, actions, and metadata.
        </Typography>
      </Section>

      {/* Basic Usage */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Basic Usage
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Project Dashboard"
              subtitle="Manage your project tasks and timeline"
              breadcrumbs={projectBreadcrumbs}
            />
          </Paper>
        </Stack>
      </Section>

      {/* With Actions */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Actions
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Website Redesign"
              subtitle="Frontend development project"
              breadcrumbs={projectBreadcrumbs}
              actions={projectActions}
            />
          </Paper>
        </Stack>
      </Section>

      {/* With Metadata */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Metadata
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Website Redesign"
              subtitle="Frontend development project"
              breadcrumbs={projectBreadcrumbs}
              actions={[projectActions[0]]} // Just primary action
              metadata={projectMetadata}
            />
          </Paper>
        </Stack>
      </Section>

      {/* With Search */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Search
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="User Management"
              subtitle="Manage user accounts and permissions"
              breadcrumbs={usersBreadcrumbs}
              searchable
              searchPlaceholder="Search users..."
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              actions={managementActions}
              metadata={userMetadata}
            />
          </Paper>
        </Stack>
      </Section>

      {/* With Back Button */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Back Button
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="User Details"
              subtitle="John Doe - john.doe@example.com"
              breadcrumbs={[...usersBreadcrumbs, { id: "user", label: "John Doe" }]}
              showBackButton
              backButtonText="Back to Users"
              onBackClick={() => console.log("Navigate back")}
              actions={[
                {
                  id: "edit",
                  label: "Edit",
                  icon: Edit,
                  variant: "solid",
                  color: "primary",
                  onClick: () => console.log("Edit user")
                },
                {
                  id: "share",
                  label: "Share",
                  icon: Share2,
                  variant: "outline",
                  onClick: () => console.log("Share user")
                },
                {
                  id: "delete",
                  label: "Delete",
                  icon: Trash2,
                  variant: "outline",
                  color: "danger",
                  onClick: () => console.log("Delete user")
                }
              ]}
            />
          </Paper>
        </Stack>
      </Section>

      {/* Size Variations */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Size Variations
        </Typography>
        <Stack gap="lg">
          <div>
            <Typography variant="h4" className="mb-2">Small</Typography>
            <Paper className="p-0">
              <BreadcrumbHeader
                title="Small Header"
                subtitle="Compact layout for space-constrained areas"
                breadcrumbs={projectBreadcrumbs}
                size="sm"
                actions={[projectActions[0]]}
              />
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Medium (Default)</Typography>
            <Paper className="p-0">
              <BreadcrumbHeader
                title="Medium Header"
                subtitle="Standard layout for most use cases"
                breadcrumbs={projectBreadcrumbs}
                size="md"
                actions={[projectActions[0], projectActions[1]]}
              />
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Large</Typography>
            <Paper className="p-0">
              <BreadcrumbHeader
                title="Large Header"
                subtitle="Prominent layout for important pages"
                breadcrumbs={projectBreadcrumbs}
                size="lg"
                actions={projectActions}
                metadata={projectMetadata.slice(0, 2)}
              />
            </Paper>
          </div>
        </Stack>
      </Section>

      {/* Compact Mode */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Compact Mode
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Compact Header"
              subtitle="Reduced spacing and sizing"
              breadcrumbs={projectBreadcrumbs}
              compact
              actions={[projectActions[0]]}
              metadata={projectMetadata.slice(0, 2)}
            />
          </Paper>
        </Stack>
      </Section>

      {/* Sticky Header */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Sticky Header
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-4">
          This header will stick to the top when scrolling (scroll down to see the effect).
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Sticky Dashboard"
              subtitle="This header stays at the top while scrolling"
              breadcrumbs={projectBreadcrumbs}
              sticky
              searchable
              searchPlaceholder="Search content..."
              searchValue={stickySearchValue}
              onSearchChange={setStickySearchValue}
              actions={[
                {
                  id: "refresh",
                  label: "Refresh",
                  variant: "outline",
                  onClick: () => console.log("Refresh")
                }
              ]}
            />
          </Paper>
          
          {/* Content to demonstrate sticky behavior */}
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <Paper key={i} className="p-6">
                <Typography variant="h4" className="mb-2">
                  Content Section {i + 1}
                </Typography>
                <Typography variant="body" className="text-stone-600">
                  This is some sample content to demonstrate the sticky header behavior. 
                  Keep scrolling to see how the header remains fixed at the top of the viewport.
                </Typography>
              </Paper>
            ))}
          </div>
        </Stack>
      </Section>

      {/* With Prefix/Suffix Content */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Custom Content
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Custom Header"
              subtitle="With prefix and suffix content"
              breadcrumbs={projectBreadcrumbs}
              prefixContent={
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
              }
              suffixContent={
                <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                  Live
                </div>
              }
              actions={[projectActions[0]]}
            />
          </Paper>
        </Stack>
      </Section>

      {/* Paper Variants */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Paper Variants
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          The BreadcrumbHeader component supports different Paper variants for various visual styles.
        </Typography>
        <Stack gap="lg">
          <div>
            <Typography variant="h4" className="mb-2">Flat Variant</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              No shadow or border, blends seamlessly with the background.
            </Typography>
            <BreadcrumbHeader
              title="Flat Header Style"
              subtitle="Clean and minimal appearance"
              breadcrumbs={projectBreadcrumbs}
              actions={[projectActions[0]]}
              metadata={projectMetadata.slice(0, 2)}
              className="border-0 shadow-none bg-stone-50"
            />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Elevated Variant (Default)</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              Subtle shadow for depth and visual hierarchy.
            </Typography>
            <Paper className="p-0">
              <BreadcrumbHeader
                title="Elevated Header Style"
                subtitle="Standard raised appearance with shadow"
                breadcrumbs={projectBreadcrumbs}
                actions={[projectActions[0], projectActions[1]]}
                metadata={projectMetadata.slice(0, 2)}
              />
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Outlined Variant</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              Defined border without shadow for clean separation.
            </Typography>
            <BreadcrumbHeader
              title="Outlined Header Style"
              subtitle="Clear border definition without shadow"
              breadcrumbs={projectBreadcrumbs}
              actions={[projectActions[0]]}
              metadata={[projectMetadata[0]]}
              className="border-2 border-stone-200 shadow-none bg-white"
            />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Custom Background</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              Different background colors and treatments.
            </Typography>
            <BreadcrumbHeader
              title="Custom Background Header"
              subtitle="With gradient background and custom styling"
              breadcrumbs={projectBreadcrumbs}
              actions={[
                {
                  id: "custom",
                  label: "Custom Action",
                  icon: Settings,
                  variant: "outline",
                  color: "secondary",
                  onClick: () => console.log("Custom action")
                }
              ]}
              className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
            />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Dark Theme Style</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              Dark background with light text for contrast themes.
            </Typography>
            <BreadcrumbHeader
              title="Dark Theme Header"
              subtitle="Optimized for dark interfaces"
              breadcrumbs={projectBreadcrumbs}
              actions={[
                {
                  id: "dark",
                  label: "Dark Action",
                  icon: Eye,
                  variant: "outline",
                  color: "info",
                  onClick: () => console.log("Dark action")
                }
              ]}
              metadata={[
                {
                  id: "dark-status",
                  label: "Theme",
                  value: "Dark Mode",
                  icon: AlertCircle
                }
              ]}
              className="bg-stone-800 border border-stone-700 text-white"
              titleClassName="text-white"
            />
          </div>
        </Stack>
      </Section>

      {/* No Breadcrumbs */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Without Breadcrumbs
        </Typography>
        <Stack gap="lg">
          <Paper className="p-0">
            <BreadcrumbHeader
              title="Standalone Header"
              subtitle="Sometimes you don't need breadcrumbs"
              actions={[
                {
                  id: "primary",
                  label: "Primary Action",
                  variant: "solid",
                  color: "primary",
                  onClick: () => console.log("Primary action")
                }
              ]}
              metadata={[
                {
                  id: "info",
                  label: "Status",
                  value: "Active",
                  icon: AlertCircle
                }
              ]}
            />
          </Paper>
        </Stack>
      </Section>
    </div>
  )
}

BreadcrumbHeaderShowcase.displayName = "BreadcrumbHeaderShowcase"