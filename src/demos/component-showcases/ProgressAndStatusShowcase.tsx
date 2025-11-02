import { 
  Bell, Upload, Search, Users, DollarSign, TrendingUp, Activity, ShoppingCart, Target, Zap, 
  CheckCircle, AlertCircle, Clock, GitCommit, MessageSquare, User, Settings, UserPlus, 
  Database, AlertTriangle, Shield, Info 
} from "lucide-react"
import { Paper, Typography, Icon } from "../../components/core"
import { 
  ProgressCircle, ProgressBar, EmptyState, Statistic, KPI, Timeline, 
  GaugeChart, Sparkline, ActivityFeed 
} from "../../components/data-display"
import { Button } from "../../components/forms/Button/Button"
import { Tag } from "../../components/data-display/Tag/Tag"

export function ProgressAndStatusShowcase() {
  return (
    <section id="progress-status">
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Progress & Status Components
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Visual indicators for progress, completion, and key status metrics
            in your application, styled for Dav/Devs Paper.
          </Typography>
        </div>

        {/* ProgressCircle Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            Progress Circles
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Circular progress indicator for visualizing completion percentage.
          </Typography>
          <div className="flex gap-8 items-center mb-4">
            <ProgressCircle value={25} label="Quarter" color="#f59e42" />
            <ProgressCircle value={50} size={80} color="#2563eb" />
            <ProgressCircle value={75} size={100} color="#16a34a" />
            <ProgressCircle
              value={100}
              size={64}
              color="#dc2626"
              label="Done"
              showPercent={false}
            />
          </div>
          <Typography variant="body" className="mb-2">
            ✅ Customizable size and color
            <br />✅ Optional label or percent display
            <br />✅ Accessible and responsive
          </Typography>
        </div>

        {/* ProgressBar Example */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            Progress Bars
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Linear progress indicator for visualizing completion percentage in a
            bar format.
          </Typography>
          <div className="space-y-4">
            <ProgressBar
              value={60}
              color="#2563eb"
              label="Loading"
              labelColor="black"
            />
            <ProgressBar
              value={85}
              color="#16a34a"
              height={12}
              label="Almost done"
              labelColor="white"
            />
            <ProgressBar
              value={100}
              color="#dc2626"
              label="Complete"
              showPercent={false}
              labelColor="white"
            />
          </div>
          <Typography variant="body" className="mb-2 mt-2">
            ✅ Customizable height, color, and label color
            <br />✅ Optional label or percent display
            <br />✅ Accessible and responsive
          </Typography>
        </div>

        {/* EmptyState Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            Empty States
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Visual representation for empty or no-content states, providing clear feedback and guidance to users.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {/* Basic EmptyState */}
            <EmptyState
              title="No items found"
              description="There are no items to display at the moment."
            />
            
            {/* EmptyState with Icon */}
            <EmptyState
              title="No notifications"
              description="You're all caught up! Check back later for new notifications."
              icon={<Icon icon={Bell} size="lg" />}
            />
            
            {/* EmptyState with Action */}
            <EmptyState
              title="No files uploaded"
              description="Get started by uploading your first file to the system."
              icon={<Icon icon={Upload} size="lg" />}
              action={
                <Button variant="solid" size="sm">
                  Upload File
                </Button>
              }
            />
            
            {/* Search EmptyState */}
            <EmptyState
              title="No search results"
              description="Try adjusting your search terms or filters to find what you're looking for."
              icon={<Icon icon={Search} size="lg" />}
              action={
                <Button variant="outline" size="sm">
                  Clear Filters
                </Button>
              }
            />
          </div>
          
          <Typography variant="body" className="mb-2">
            ✅ Customizable title and description
            <br />✅ Optional icon support
            <br />✅ Action button integration
            <br />✅ Responsive design
          </Typography>
        </div>

        {/* Statistic Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            Statistic
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Display key metrics and statistics with optional trend indicators and custom styling.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Basic Statistic */}
            <Statistic
              value="1,234"
              label="Total Users"
              description="Active users this month"
            />
            
            {/* Statistic with Icon */}
            <Statistic
              value="$12,345"
              label="Revenue"
              description="Monthly recurring revenue"
              icon={<Icon icon={DollarSign} size="md" />}
              variant="success"
            />
            
            {/* Statistic with Trend (Up) */}
            <Statistic
              value="89.2%"
              label="Conversion Rate"
              description="Last 30 days"
              icon={<Icon icon={TrendingUp} size="md" />}
              variant="info"
              trend={{
                value: 12.5,
                label: "vs last month",
                type: "up"
              }}
            />
            
            {/* Statistic with Trend (Down) */}
            <Statistic
              value="342"
              label="Active Sessions"
              description="Current live sessions"
              icon={<Icon icon={Activity} size="md" />}
              variant="warning"
              trend={{
                value: -8.3,
                label: "vs yesterday",
                type: "down"
              }}
            />
          </div>
          
          {/* Different Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Statistic
              value="42"
              label="Small Size"
              description="Compact display"
              size="sm"
              align="center"
            />
            
            <Statistic
              value="1,337"
              label="Medium Size"
              description="Default size"
              size="md"
              align="center"
              variant="success"
            />
            
            <Statistic
              value="9.8M"
              label="Large Size"
              description="Prominent display"
              size="lg"
              align="center"
              variant="error"
              icon={<Icon icon={Users} size="lg" />}
            />
          </div>
          
          <Typography variant="body" className="mb-2">
            ✅ Multiple size variants (sm, md, lg)
            <br />✅ Color variants for different states
            <br />✅ Optional trend indicators with icons
            <br />✅ Flexible content alignment
            <br />✅ Icon support for visual context
          </Typography>
        </div>

        {/* KPI Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            KPI (Key Performance Indicators)
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Enhanced metrics display with progress tracking, targets, and trend indicators for business dashboards.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Basic KPI */}
            <KPI
              title="Monthly Revenue"
              value="$45,280"
              subtitle="Total sales this month"
              variant="success"
              icon={<Icon icon={DollarSign} size="md" />}
            />
            
            {/* KPI with Target and Progress */}
            <KPI
              title="Sales Target"
              value="847"
              subtitle="Units sold"
              target="1,000"
              progress={84.7}
              variant="info"
              icon={<Icon icon={Target} size="md" />}
              trend={{
                value: 15.3,
                period: "vs last month",
                type: "up"
              }}
            />
            
            {/* KPI with Warning State */}
            <KPI
              title="Conversion Rate"
              value="2.4%"
              subtitle="Website conversions"
              target="3.5%"
              progress={68.6}
              variant="warning"
              icon={<Icon icon={Zap} size="md" />}
              trend={{
                value: -5.2,
                period: "vs last week",
                type: "down"
              }}
            />
          </div>

          {/* Different Formats */}
          <div className="mb-4">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Format Variants
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card Format */}
              <KPI
                title="Orders"
                value="1,234"
                subtitle="Total orders"
                format="card"
                size="sm"
                icon={<Icon icon={ShoppingCart} size="sm" />}
                trend={{ value: 8.5, type: "up", period: "today" }}
              />
              
              {/* Minimal Format */}
              <KPI
                title="Active Users"
                value="5,678"
                subtitle="Currently online"
                format="minimal"
                size="sm"
                variant="info"
                icon={<Icon icon={Users} size="sm" />}
                trend={{ value: 2.1, type: "up", period: "live" }}
              />
              
              {/* Highlighted Format */}
              <KPI
                title="Performance"
                value="98.7%"
                subtitle="System uptime"
                format="highlighted"
                size="sm"
                variant="success"
                icon={<Icon icon={Activity} size="sm" />}
                trend={{ value: 0.3, type: "up", period: "24h" }}
              />
            </div>
          </div>

          {/* Different Sizes */}
          <div className="mb-4">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Size Variants
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <KPI
                title="Small KPI"
                value="42"
                subtitle="Compact display"
                size="sm"
                variant="default"
                progress={42}
              />
              
              <KPI
                title="Medium KPI"
                value="1,337"
                subtitle="Standard display"
                size="md"
                variant="success"
                target="2,000"
                progress={66.9}
                trend={{ value: 12.3, type: "up", period: "this week" }}
              />
              
              <KPI
                title="Large KPI"
                value="9.8M"
                subtitle="Prominent display"
                size="lg"
                variant="info"
                icon={<Icon icon={TrendingUp} size="lg" />}
                trend={{ value: 25.4, type: "up", period: "this quarter" }}
              />
            </div>
          </div>
          
          <Typography variant="body" className="mb-2">
            ✅ Multiple format styles (card, minimal, highlighted)
            <br />✅ Progress tracking with target values
            <br />✅ Trend indicators with time periods
            <br />✅ Multiple size variants (sm, md, lg)
            <br />✅ Color-coded variants for different states
            <br />✅ Icon integration for visual context
          </Typography>
        </div>

        {/* Timeline Examples */}
        <div className="mb-8">
          <Typography variant="h3" className="mb-4">
            Timeline
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Display chronological sequences of events, activities, or processes with visual indicators and rich content.
          </Typography>

          {/* Basic Timeline */}
          <div className="mb-6">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Project Timeline
            </Typography>
            <Timeline
              items={[
                {
                  id: "1",
                  title: "Project Kickoff",
                  description: "Initial meeting with stakeholders and team members",
                  timestamp: "2024-01-15",
                  variant: "success",
                  icon: <Icon icon={CheckCircle} size="sm" />,
                  metadata: (
                    <div className="flex gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Completed
                      </span>
                    </div>
                  )
                },
                {
                  id: "2", 
                  title: "Design Phase",
                  description: "Create wireframes, mockups, and design system components",
                  timestamp: "2024-01-22",
                  variant: "info",
                  icon: <Icon icon={Clock} size="sm" />,
                  metadata: (
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        In Progress
                      </span>
                    </div>
                  )
                },
                {
                  id: "3",
                  title: "Development Sprint 1",
                  description: "Implement core functionality and components",
                  timestamp: "2024-02-05",
                  variant: "warning",
                  icon: <Icon icon={GitCommit} size="sm" />,
                  action: (
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  )
                },
                {
                  id: "4",
                  title: "Testing & QA",
                  description: "Comprehensive testing and quality assurance",
                  timestamp: "2024-02-20",
                  variant: "default",
                  icon: <Icon icon={AlertCircle} size="sm" />
                }
              ]}
              size="md"
            />
          </div>

          {/* Different Sizes */}
          <div className="mb-6">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Size Variants
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Small Timeline */}
              <div>
                <Typography variant="body" className="mb-2 font-medium text-stone-600">
                  Small
                </Typography>
                <Timeline
                  items={[
                    {
                      id: "s1",
                      title: "Task Created",
                      timestamp: "10:30 AM",
                      variant: "success",
                      icon: <Icon icon={CheckCircle} size="xs" />
                    },
                    {
                      id: "s2",
                      title: "In Review",
                      timestamp: "2:15 PM", 
                      variant: "info",
                      icon: <Icon icon={Clock} size="xs" />
                    }
                  ]}
                  size="sm"
                />
              </div>

              {/* Medium Timeline */}
              <div>
                <Typography variant="body" className="mb-2 font-medium text-stone-600">
                  Medium (Default)
                </Typography>
                <Timeline
                  items={[
                    {
                      id: "m1",
                      title: "Comment Added",
                      description: "New feedback received",
                      timestamp: "1 hour ago",
                      variant: "info",
                      icon: <Icon icon={MessageSquare} size="sm" />
                    },
                    {
                      id: "m2",
                      title: "Status Updated",
                      timestamp: "30 min ago",
                      variant: "success", 
                      icon: <Icon icon={CheckCircle} size="sm" />
                    }
                  ]}
                  size="md"
                />
              </div>

              {/* Large Timeline */}
              <div>
                <Typography variant="body" className="mb-2 font-medium text-stone-600">
                  Large
                </Typography>
                <Timeline
                  items={[
                    {
                      id: "l1",
                      title: "Milestone Reached",
                      description: "Successfully completed phase 1 of the project",
                      timestamp: "Yesterday",
                      variant: "success",
                      icon: <Icon icon={Target} size="md" />,
                      action: (
                        <Button variant="solid" size="sm">
                          Celebrate
                        </Button>
                      )
                    }
                  ]}
                  size="lg"
                />
              </div>
            </div>
          </div>

          {/* Alternating Timeline */}
          <div className="mb-6">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Alternating Layout
            </Typography>
            <Timeline
              items={[
                {
                  id: "a1",
                  title: "User Registration",
                  description: "New user signed up for the platform",
                  timestamp: "9:00 AM",
                  variant: "success",
                  icon: <Icon icon={Users} size="sm" />
                },
                {
                  id: "a2",
                  title: "Payment Processing",
                  description: "Subscription payment completed successfully",
                  timestamp: "9:15 AM",
                  variant: "success",
                  icon: <Icon icon={DollarSign} size="sm" />
                },
                {
                  id: "a3",
                  title: "System Alert",
                  description: "High traffic detected, scaling resources",
                  timestamp: "9:45 AM",
                  variant: "warning",
                  icon: <Icon icon={AlertCircle} size="sm" />
                },
                {
                  id: "a4",
                  title: "Issue Resolved",
                  description: "All systems operating normally",
                  timestamp: "10:30 AM",
                  variant: "success",
                  icon: <Icon icon={CheckCircle} size="sm" />
                }
              ]}
              alternate={true}
              size="md"
            />
          </div>

          <Typography variant="body" className="mb-2">
            ✅ Vertical and horizontal orientations
            <br />✅ Multiple size variants (sm, md, lg)
            <br />✅ Color-coded variants for different states
            <br />✅ Icon integration for visual context
            <br />✅ Rich content with actions and metadata
            <br />✅ Alternating layout option
            <br />✅ Clickable items with callbacks
          </Typography>
        </div>

        {/* Additional Progress/Status Components */}
        <div className="space-y-8">
          <Typography variant="h3" className="mb-4">
            Additional Components
          </Typography>

          {/* Gauge Chart */}
          <div className="space-y-4">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Gauge Chart
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Circular gauge components for KPI visualization with customizable ranges and styling.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Basic Gauge */}
              <div className="text-center">
                <GaugeChart
                  value={75}
                  label="75%"
                  size="md"
                />
                <Typography variant="body" className="mt-2 font-medium">Completion Rate</Typography>
                <Typography variant="bodySmall" className="text-stone-600">Project Progress</Typography>
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
                <Typography variant="bodySmall" className="text-stone-600">All systems operational</Typography>
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
                <Typography variant="bodySmall" className="text-stone-600">Approaching limit</Typography>
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
                <Typography variant="bodySmall" className="text-stone-600">Charge required</Typography>
              </div>
            </div>

            {/* Different Sizes */}
            <div className="flex items-center gap-8">
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
          <div className="space-y-4">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Sparkline
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Miniature trend charts for displaying data patterns in compact spaces.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Line Sparklines */}
              <div>
                <Typography variant="h5" className="mb-3">Line Charts</Typography>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Typography variant="body" className="text-sm font-medium">
                        Revenue Trend
                      </Typography>
                      <Typography variant="bodySmall" className="text-stone-600">
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
                      <Typography variant="bodySmall" className="text-stone-600">
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
                <Typography variant="h5" className="mb-3">Area & Bar Charts</Typography>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Typography variant="body" className="text-sm font-medium">
                        Sales Volume
                      </Typography>
                      <Typography variant="bodySmall" className="text-stone-600">
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
                      <Typography variant="bodySmall" className="text-stone-600">
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
          <div className="space-y-4">
            <Typography variant="h4" className="mb-3 text-stone-700">
              Activity Feed
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Real-time activity stream components for displaying user actions and system events.
            </Typography>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* User Activity Feed */}
              <ActivityFeed
                header={
                  <Typography variant="h5" className="font-medium">
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
                  <Typography variant="h5" className="font-medium">
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
              <Typography variant="h5" className="mb-3">Size Variants</Typography>
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
                  header={<Typography variant="h5" className="font-medium">Medium Feed</Typography>}
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
                  header={<Typography variant="h4" className="font-medium">Large Feed</Typography>}
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
      </Paper>
    </section>
  )
}
