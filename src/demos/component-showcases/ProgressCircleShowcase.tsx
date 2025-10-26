import { ProgressCircle } from "../../../components/data-display/ProgressCircle"
import { Typography } from "../../../components/core"

export function ProgressCircleShowcase() {
  return (
    <div className="space-y-8 p-8 max-w-md mx-auto">
      <Typography variant="h2" className="mb-6">
        ProgressCircle Component
      </Typography>
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
      <div className="mt-8">
        <Typography variant="h4">Custom Sizes & Colors</Typography>
        <div className="flex gap-6 mt-4">
          <ProgressCircle value={40} size={48} color="#6366f1" />
          <ProgressCircle value={80} size={120} color="#f43f5e" />
        </div>
      </div>
    </div>
  )
}
