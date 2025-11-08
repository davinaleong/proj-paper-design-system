import { Typography } from "../../components/core"
import { ProgressCircle } from "../../components/data-display"

export function ProgressCircleShowcase() {
  return (
    <section id="progress-circle" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Progress Circles
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Circular progress indicator for visualizing completion percentage.
        </Typography>
      </div>

      <div className="space-y-6">
        <div className="flex gap-8 items-center">
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
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Customizable size and color
          </Typography>
          <Typography variant="body">
            ✅ Optional label or percent display
          </Typography>
          <Typography variant="body">
            ✅ Accessible and responsive
          </Typography>
        </div>
      </div>
    </section>
  )
}