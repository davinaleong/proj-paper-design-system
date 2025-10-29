import { ProgressCircle } from "../../components/data-display/ProgressCircle/ProgressCircle"
import { Typography } from "../../components/core"
// import other progress/status components as needed
// import { ProgressBar } from "./../../components/data-display/ProgressBar/ProgressBar"
// import { KPI } from "./../../components/data-display/KPI/KPI"
// import { Statistic } from "./../../components/data-display/Statistic/Statistic"

export function ProgressAndStatusShowcase() {
  return (
    <div className="space-y-8 p-8 max-w-md mx-auto">
      <Typography variant="h2" className="mb-6">
        Progress & Status Components
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
      {/*
      <div className="mt-8">
        <Typography variant="h4">Progress Bar Example</Typography>
        <ProgressBar value={60} color="#2563eb" />
      </div>
      <div className="mt-8">
        <Typography variant="h4">KPI Example</Typography>
        <KPI value={1234} label="Users" />
      </div>
      <div className="mt-8">
        <Typography variant="h4">Statistic Example</Typography>
        <Statistic value={98.6} label="Satisfaction" />
      </div>
      */}
    </div>
  )
}
