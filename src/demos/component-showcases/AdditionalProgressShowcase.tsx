import { 
  ShoppingCart, User, Settings, UserPlus, Database, AlertTriangle, Shield, Info, CheckCircle, Bell, AlertCircle 
} from "lucide-react"
import { Typography, Icon } from "../../components/core"
import { GaugeChart, Sparkline, ActivityFeed } from "../../components/data-display"
import { Button } from "../../components/forms"
import { Tag } from "../../components/data-display/Tag/Tag"

export function AdditionalProgressShowcase() {
  return (
    <section id="additional-progress" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Additional Progress Components
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Advanced visualization components for detailed progress tracking and activity monitoring.
        </Typography>
      </div>

      <div className="space-y-12">
        {/* Gauge Chart */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Gauge Chart
            </Typography>
            <Typography variant="body" className="text-gray-600">
              Circular gauge components for KPI visualization with customizable ranges and styling.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Gauge */}
            <div className="text-center">
              <GaugeChart
                value={75}
                label="75%"
                size="md"
              />
              <Typography variant="body" className="mt-2 font-medium">Completion Rate</Typography>
              <Typography variant="bodySmall" className="text-gray-600">Project Progress</Typography>
            </div>

            {/* Success Gauge */}
            <div className="text-center">
              <GaugeChart
                value={92}
                label="92%"
                variant="success"
                size="md"
              />
              <Typography variant="body" className="mt-2 font-medium">System Health</Typography>
              <Typography variant="bodySmall" className="text-gray-600">All systems operational</Typography>
            </div>

            {/* Warning Gauge */}
            <div className="text-center">
              <GaugeChart
                value={65}
                variant="warning"
                size="md"
                showPercent
              />
              <Typography variant="body" className="mt-2 font-medium">Storage Usage</Typography>
              <Typography variant="bodySmall" className="text-gray-600">Approaching limit</Typography>
            </div>

            {/* Error Gauge */}
            <div className="text-center">
              <GaugeChart
                value={15}
                variant="error"
                size="md"
                showPercent
              />
              <Typography variant="body" className="mt-2 font-medium">Battery Level</Typography>
              <Typography variant="bodySmall" className="text-gray-600">Charge required</Typography>
            </div>
          </div>

          {/* Different Sizes */}
          <div className="flex items-center gap-8 justify-center">
            <div className="text-center">
              <GaugeChart value={80} size="sm" showPercent />
              <Typography variant="bodySmall" className="mt-1">Small</Typography>
            </div>
            <div className="text-center">
              <GaugeChart value={80} size="md" showPercent />
              <Typography variant="body" className="mt-2">Medium</Typography>
            </div>
            <div className="text-center">
              <GaugeChart value={80} size="lg" showPercent />
              <Typography variant="title" className="mt-2">Large</Typography>
            </div>
          </div>
        </div>

        {/* Sparkline */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Sparkline
            </Typography>
            <Typography variant="body" className="text-gray-600">
              Miniature trend charts for displaying data patterns in compact spaces.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Line Sparklines */}
            <div>
              <Typography variant="h4" className="mb-4 text-gray-700">Line Charts</Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Typography variant="body" className="text-sm font-medium">
                      Revenue Trend
                    </Typography>
                    <Typography variant="bodySmall" className="text-gray-600">
                      Last 30 days
                    </Typography>
                  </div>
                  <Sparkline
                    data={[120, 150, 180, 165, 190, 210, 195, 225, 240, 260]}
                    variant="line"
                    color="#10b981"
                    size="md"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Typography variant="body" className="text-sm font-medium">
                      User Activity
                    </Typography>
                    <Typography variant="bodySmall" className="text-gray-600">
                      Last 7 days
                    </Typography>
                  </div>
                  <Sparkline
                    data={[45, 52, 38, 67, 73, 69, 82]}
                    variant="line"
                    color="#3b82f6"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Area and Bar Sparklines */}
            <div>
              <Typography variant="h4" className="mb-4 text-gray-700">Area & Bar Charts</Typography>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Typography variant="body" className="text-sm font-medium">
                      Sales Volume
                    </Typography>
                    <Typography variant="bodySmall" className="text-gray-600">
                      Quarterly data
                    </Typography>
                  </div>
                  <Sparkline
                    data={[80, 95, 70, 110, 125, 140, 135, 150]}
                    variant="area"
                    color="#f59e0b"
                    size="md"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Typography variant="body" className="text-sm font-medium">
                      Error Rate
                    </Typography>
                    <Typography variant="bodySmall" className="text-gray-600">
                      Daily incidents
                    </Typography>
                  </div>
                  <Sparkline
                    data={[12, 8, 15, 6, 3, 9, 2]}
                    variant="bar"
                    color="#ef4444"
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Activity Feed
            </Typography>
            <Typography variant="body" className="text-gray-600">
              Real-time activity stream components for displaying user actions and system events.
            </Typography>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* User Activity Feed */}
            <ActivityFeed
              header={
                <Typography variant="h4" className="font-medium text-gray-800">
                  Recent Activity
                </Typography>
              }
              items={[
                {
                  id: "1",
                  title: "New order received",
                  description: "Order #12345 from John Doe",
                  timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
                  variant: "success",
                  icon: <Icon icon={ShoppingCart} size="sm" />,
                  action: <Button variant="ghost" size="sm">View</Button>
                },
                {
                  id: "2", 
                  title: "User profile updated",
                  description: "Sarah Wilson updated her contact information",
                  timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
                  variant: "info",
                  icon: <Icon icon={User} size="sm" />
                },
                {
                  id: "3",
                  title: "System maintenance",
                  description: "Scheduled maintenance completed successfully",
                  timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
                  variant: "warning",
                  icon: <Icon icon={Settings} size="sm" />
                },
                {
                  id: "4",
                  title: "New team member",
                  description: "Alex Johnson joined the development team",
                  timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
                  variant: "default",
                  icon: <Icon icon={UserPlus} size="sm" />
                }
              ]}
              size="md"
              maxItems={4}
            />

            {/* System Events Feed */}
            <ActivityFeed
              header={
                <Typography variant="h4" className="font-medium text-gray-800">
                  System Events
                </Typography>
              }
              items={[
                {
                  id: "s1",
                  title: "Database backup completed",
                  description: "Daily backup finished at 3:00 AM",
                  timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
                  variant: "success",
                  icon: <Icon icon={Database} size="sm" />
                },
                {
                  id: "s2",
                  title: "High memory usage detected",
                  description: "Server node-01 reached 85% memory usage",
                  timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
                  variant: "warning",
                  icon: <Icon icon={AlertTriangle} size="sm" />
                },
                {
                  id: "s3",
                  title: "Security scan completed",
                  description: "No vulnerabilities found in latest scan",
                  timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
                  variant: "success",
                  icon: <Icon icon={Shield} size="sm" />
                }
              ]}
              size="md"
              showRelativeTime
            />
          </div>

          {/* Different Sizes */}
          <div className="space-y-4">
            <Typography variant="h4" className="text-gray-700">Size Variants</Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Small */}
              <ActivityFeed
                header={<Typography variant="body" className="font-medium">Small Feed</Typography>}
                items={[
                  {
                    id: "small1",
                    title: "Quick update",
                    timestamp: new Date().toISOString(),
                    variant: "info",
                    icon: <Icon icon={Info} size="xs" />
                  },
                  {
                    id: "small2",
                    title: "Task completed",
                    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
                    variant: "success",
                    icon: <Icon icon={CheckCircle} size="xs" />
                  }
                ]}
                size="sm"
                maxItems={2}
              />

              {/* Medium */}
              <ActivityFeed
                header={<Typography variant="h4" className="font-medium">Medium Feed</Typography>}
                items={[
                  {
                    id: "med1",
                    title: "Important notification",
                    description: "This requires your attention",
                    timestamp: new Date().toISOString(),
                    variant: "warning",
                    icon: <Icon icon={Bell} size="sm" />
                  }
                ]}
                size="md"
              />

              {/* Large */}
              <ActivityFeed
                header={<Typography variant="h3" className="font-medium">Large Feed</Typography>}
                items={[
                  {
                    id: "large1", 
                    title: "Detailed system event",
                    description: "Comprehensive information about this important event that occurred in the system",
                    timestamp: new Date().toISOString(),
                    variant: "error",
                    icon: <Icon icon={AlertCircle} size="md" />,
                    metadata: (
                      <div className="flex gap-2 mt-2">
                        <Tag variant="solid" colorVariant="red" size="sm">Critical</Tag>
                        <Tag variant="solid" colorVariant="gray" size="sm">Server</Tag>
                      </div>
                    )
                  }
                ]}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}