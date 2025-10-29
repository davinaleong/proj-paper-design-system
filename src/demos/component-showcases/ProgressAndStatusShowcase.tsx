import { Bell, Upload, Search, Users, DollarSign, TrendingUp, Activity } from "lucide-react"
import { Paper, Typography, Icon } from "../../components/core"
import { ProgressCircle, ProgressBar, EmptyState, Statistic } from "../../components/data-display"
import { Button } from "../../components/forms/Button/Button"

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
            in your application, styled for the Paper Design System.
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

        {/* Future Progress/Status Components */}
        <div className="space-y-6">
          <Typography variant="h3" className="mb-4">
            Coming Soon
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <Typography variant="h4" className="mb-2">
                KPI Dashboard
              </Typography>
              <Typography variant="body" className="text-stone-600 text-sm">
                Key performance indicator dashboard
              </Typography>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <Typography variant="h4" className="mb-2">
                Timeline
              </Typography>
              <Typography variant="body" className="text-stone-600 text-sm">
                Event timeline visualization
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  )
}
