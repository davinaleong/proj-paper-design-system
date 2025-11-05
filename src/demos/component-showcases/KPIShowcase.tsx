import { DollarSign, Target, Zap, ShoppingCart, Users, Activity, TrendingUp } from "lucide-react"
import { Typography, Icon } from "../../components/core"
import { KPI } from "../../components/data-display"

export function KPIShowcase() {
  return (
    <section id="kpi" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          KPI (Key Performance Indicators)
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Enhanced metrics display with progress tracking, targets, and trend indicators for business dashboards.
        </Typography>
      </div>

      <div className="space-y-8">
        {/* Basic KPIs */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Basic KPIs
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        </div>

        {/* Format Variants */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
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

        {/* Size Variants */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
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
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Multiple format styles (card, minimal, highlighted)
          </Typography>
          <Typography variant="body">
            ✅ Progress tracking with target values
          </Typography>
          <Typography variant="body">
            ✅ Trend indicators with time periods
          </Typography>
          <Typography variant="body">
            ✅ Multiple size variants (sm, md, lg)
          </Typography>
          <Typography variant="body">
            ✅ Color-coded variants for different states
          </Typography>
          <Typography variant="body">
            ✅ Icon integration for visual context
          </Typography>
        </div>
      </div>
    </section>
  )
}