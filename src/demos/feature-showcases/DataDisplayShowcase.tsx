import { Paper, Typography } from "../../components/core"
import { StaticTable } from "../../components/data-display/StaticTable"
import { Table } from "../../components/data-display/Table"
import { DescriptionListShowcase } from "../data-display/DescriptionListShowcase"
import { TagShowcase } from "../data-display/TagShowcase"
import { TooltipShowcase } from "../data-display/TooltipShowcase"
import { DotIndicatorShowcase } from "../system-utilities/DotIndicatorShowcase"

// Sample data for tables
const sampleData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    progress: 85,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
    progress: 60,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Active",
    progress: 92,
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Manager",
    status: "Active",
    progress: 78,
  },
]

const staticTableColumns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
  { key: "progress", label: "Progress" },
]

export function DataDisplayShowcase() {
  return (
    <section id="data-display">
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Static Table
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            A comprehensive table component with color variants, multiple
            styles, and built-in features for displaying tabular data with Paper
            Design System aesthetics.
          </Typography>
          <Typography variant="body" className="mb-4">
            ✅ 8 color variant themes with priority hierarchy
            <br />
            ✅ Multiple table variants: default, striped, bordered, compact
            <br />
            ✅ Size options: small, medium, large
            <br />
            ✅ Custom render functions for complex content
            <br />
            ✅ Loading and empty states
            <br />
            ✅ Color variants for rows and columns
            <br />
            ✅ Paper theme styling with subtle shadows
            <br />
            ✅ Full accessibility support
            <br />✅ TypeScript support with comprehensive interfaces
          </Typography>
        </div>

        {/* Basic Table */}
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            Basic Static Table
          </Typography>
          <StaticTable
            columns={staticTableColumns}
            rows={sampleData}
            variant="default"
            size="md"
          />
        </div>

        {/* Table Variants */}
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            Table Variants
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="h5" className="mb-2">
                Striped
              </Typography>
              <StaticTable
                columns={staticTableColumns}
                rows={sampleData.slice(0, 3)}
                variant="striped"
                size="sm"
              />
            </div>
            <div>
              <Typography variant="h5" className="mb-2">
                Bordered
              </Typography>
              <StaticTable
                columns={staticTableColumns}
                rows={sampleData.slice(0, 3)}
                variant="bordered"
                size="sm"
              />
            </div>
            <div>
              <Typography variant="h5" className="mb-2">
                Compact
              </Typography>
              <StaticTable
                columns={staticTableColumns}
                rows={sampleData.slice(0, 3)}
                variant="compact"
                size="sm"
              />
            </div>
          </div>
        </div>

        {/* Color Variants */}
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            Color Variants
          </Typography>
          <div className="space-y-4">
            <StaticTable
              columns={staticTableColumns}
              rows={sampleData.slice(0, 2)}
              variant="striped"
              size="sm"
              colorVariant="primary"
            />
            <StaticTable
              columns={staticTableColumns}
              rows={sampleData.slice(0, 2)}
              variant="striped"
              size="sm"
              colorVariant="success"
            />
          </div>
        </div>
      </Paper>

      {/* Table (Advanced Data Grid) Component Showcase */}
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Table (Advanced Data Grid)
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            A powerful data grid component with sorting, filtering, pagination,
            and advanced features for complex data presentation needs.
          </Typography>
        </div>

        {/* Basic Table Example */}
        <div className="mb-8">
          <Typography variant="h4" className="mb-4">
            Basic Table with Sorting
          </Typography>
          <Typography variant="body" className="mb-4 text-stone-600">
            Click on column headers to sort the data. The table supports
            ascending and descending sort orders.
          </Typography>

          <Table
            columns={[
              {
                id: "name",
                accessor: "name",
                header: "Name",
                sortable: true,
                cell: ({ value }) => (
                  <Typography variant="body" className="font-medium">
                    {String(value)}
                  </Typography>
                ),
              },
              {
                id: "email",
                accessor: "email",
                header: "Email",
                sortable: true,
                cell: ({ value }) => (
                  <Typography variant="body" className="text-stone-600">
                    {String(value)}
                  </Typography>
                ),
              },
              {
                id: "role",
                accessor: "role",
                header: "Role",
                sortable: true,
                cell: ({ value }) => (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value === "Admin"
                        ? "bg-red-100 text-red-800"
                        : value === "Manager"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {String(value)}
                  </span>
                ),
              },
              {
                id: "status",
                accessor: "status",
                header: "Status",
                sortable: true,
                cell: ({ value }) => (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      value === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {String(value)}
                  </span>
                ),
              },
              {
                id: "progress",
                accessor: "progress",
                header: "Progress",
                sortable: true,
                cell: ({ value }) => (
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${String(value)}%` }}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      className="text-stone-600 min-w-8"
                    >
                      {String(value)}%
                    </Typography>
                  </div>
                ),
              },
            ]}
            data={sampleData}
          />
        </div>
      </Paper>

      {/* Description List Component Showcase */}
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Description List
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Flexible component for displaying key-value pairs with multiple
            layout options, size variants, and comprehensive theming support.
          </Typography>
          <Typography variant="body" className="mb-4">
            ✅ Horizontal and vertical layouts
            <br />
            ✅ Size variants: small, medium, large
            <br />
            ✅ Color variants with full theming support
            <br />
            ✅ Bordered and striped styling options
            <br />
            ✅ Custom render functions for complex content
            <br />
            ✅ Paper theme styling with consistent spacing
            <br />
            ✅ Full accessibility support
            <br />✅ TypeScript support with comprehensive interfaces
          </Typography>
        </div>

        <DescriptionListShowcase />
      </Paper>

      {/* Tag Component Showcase */}
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Tag
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Versatile tag component for labels, categories, and status
            indicators with comprehensive theming and interaction support.
          </Typography>
          <Typography variant="body" className="mb-4">
            ✅ Size variants: extra small, small, medium, large
            <br />
            ✅ Visual variants: solid, soft, outline, ghost
            <br />
            ✅ Full color system integration (42 variants)
            <br />
            ✅ Dismissible functionality with custom icons
            <br />
            ✅ Start and end icon support
            <br />
            ✅ Clickable state with hover effects
            <br />
            ✅ Dot indicator option
            <br />
            ✅ Content truncation with ellipsis
            <br />
            ✅ Paper theme styling with backdrop blur
            <br />
            ✅ Full accessibility support
            <br />✅ TypeScript support with comprehensive interfaces
          </Typography>
        </div>

        <TagShowcase />
      </Paper>

      {/* Tooltip Component Showcase */}
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Tooltip
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Accessible tooltip component with multiple positioning options,
            trigger modes, and Dav/Devs Paper styling.
          </Typography>
          <Typography variant="body" className="mb-4">
            ✅ Multiple positioning options (top, bottom, left, right)
            <br />
            ✅ Auto-positioning with collision detection
            <br />
            ✅ Multiple trigger modes (hover, click, focus)
            <br />
            ✅ Custom delay and animation timing
            <br />
            ✅ Rich content support with React nodes
            <br />
            ✅ Keyboard navigation and escape handling
            <br />
            ✅ Viewport boundary detection and auto-adjustment
            <br />
            ✅ Paper-like styling with backdrop blur
            <br />
            ✅ Full accessibility support
            <br />✅ TypeScript support with comprehensive interfaces
          </Typography>
        </div>

        <TooltipShowcase />
      </Paper>

      {/* Dot Indicator Component Showcase */}
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Dot Indicator
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Versatile animated dot indicators for status visualization,
            notifications, and loading states. Perfect for minimal UI elements
            that need to convey state or activity.
          </Typography>
          <Typography variant="body" className="mb-4">
            ✅ 5 size variants: extra small, small, medium, large, extra large
            <br />
            ✅ 4 visual variants: solid, soft, outline, pulse
            <br />
            ✅ Full color system integration (42+ variants)
            <br />
            ✅ Togglable animation with custom duration and delay
            <br />
            ✅ Perfect for status indicators and loading states
            <br />
            ✅ Staggered animation sequences support
            <br />
            ✅ Notification badge compatibility
            <br />
            ✅ Paper theme styling integration
            <br />
            ✅ Full accessibility support
            <br />✅ TypeScript support with comprehensive interfaces
          </Typography>
        </div>

        <DotIndicatorShowcase />
      </Paper>
    </section>
  )
}
