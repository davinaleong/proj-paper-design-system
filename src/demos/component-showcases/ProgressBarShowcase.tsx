import { Typography } from "../../components/core"
import { ProgressBar } from "../../components/data-display"

export function ProgressBarShowcase() {
  return (
    <section id="progress-bar" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Progress Bars
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Linear progress indicator for visualizing completion percentage in a bar format.
        </Typography>
      </div>

      <div className="space-y-6">
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
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Customizable height, color, and label color
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