import { Paper, Typography } from "../../components/core"
import { ProgressCircle } from "../../components/data-display/ProgressCircle/ProgressCircle"
// import { ProgressBar } from "../../components/data-display/ProgressBar/ProgressBar"
// import { KPI } from "../../components/data-display/KPI/KPI"
// import { Statistic } from "../../components/data-display/Statistic/Statistic"

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
            ProgressCircle
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

        {/* Future Progress/Status Components */}
        <div className="space-y-6">
          <Typography variant="h3" className="mb-4">
            Coming Soon
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border border-stone-200 rounded-lg">
              <Typography variant="h4" className="mb-2">
                Progress Bar
              </Typography>
              <Typography variant="body" className="text-stone-600 text-sm">
                Linear progress indicator
              </Typography>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <Typography variant="h4" className="mb-2">
                KPI
              </Typography>
              <Typography variant="body" className="text-stone-600 text-sm">
                Key performance indicator metric
              </Typography>
            </div>
            <div className="p-4 border border-stone-200 rounded-lg">
              <Typography variant="h4" className="mb-2">
                Statistic
              </Typography>
              <Typography variant="body" className="text-stone-600 text-sm">
                Highlighted numeric value
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </section>
  )
}
