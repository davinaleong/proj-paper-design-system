import { DollarSign, TrendingUp, Activity, Users } from "lucide-react"
import { Typography, Icon } from "../../components/core"
import { Statistic } from "../../components/data-display"

export function StatisticShowcase() {
  return (
    <section id="statistic" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Statistics
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Display key metrics and statistics with optional trend indicators and custom styling.
        </Typography>
      </div>

      <div className="space-y-8">
        {/* Basic Statistics */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Basic Statistics
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
        </div>

        {/* Different Sizes */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Size Variants
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Multiple size variants (sm, md, lg)
          </Typography>
          <Typography variant="body">
            ✅ Color variants for different states
          </Typography>
          <Typography variant="body">
            ✅ Optional trend indicators with icons
          </Typography>
          <Typography variant="body">
            ✅ Flexible content alignment
          </Typography>
          <Typography variant="body">
            ✅ Icon support for visual context
          </Typography>
        </div>
      </div>
    </section>
  )
}