import React, { useState } from "react"
import { 
  DateTimePicker, 
  type DateTimePickerVariant, 
  type DateTimePickerAppearance
} from "../../components/forms"
import { Paper, Typography } from "../../components/core"

const DateTimePickerShowcase: React.FC = () => {
  const [basicDate, setBasicDate] = useState<Date | null>(null)
  const [basicTime, setBasicTime] = useState<Date | null>(null)
  const [basicDateTime, setBasicDateTime] = useState<Date | null>(null)
  const variants: DateTimePickerVariant[] = ["date", "time", "datetime"]
  const appearances: DateTimePickerAppearance[] = ["solid", "outline", "ghost", "soft"]
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const

  return (
    <div className="max-width-6xl mx-auto p-8 space-y-12">
      {/* Header */}
      <Paper className="p-8 text-center">
        <Typography variant="h1" className="mb-4">
          DateTimePicker Component
        </Typography>
        <Typography variant="body" className="text-stone-600">
          Comprehensive date and time picker with multiple variants, custom styling, 
          and extensive configuration options. Supports date-only, time-only, and combined datetime selection.
        </Typography>
      </Paper>

      {/* Basic Usage */}
      <Paper className="p-8 pb-100">
        <Typography variant="h2" className="mb-2">Basic Usage</Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Basic date, time, and datetime pickers with default settings
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Typography variant="h6" className="mb-2">Date Picker</Typography>
            <DateTimePicker
              variant="date"
              value={basicDate}
              onChange={setBasicDate}
              placeholder="Select a date..."
            />
            <Typography variant="caption" className="mt-2 text-stone-600 block">
              Selected: {basicDate ? basicDate.toLocaleDateString() : "None"}
            </Typography>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-2">Time Picker</Typography>
            <DateTimePicker
              variant="time"
              value={basicTime}
              onChange={setBasicTime}
              placeholder="Select a time..."
            />
            <Typography variant="caption" className="mt-2 text-stone-600 block">
              Selected: {basicTime ? basicTime.toLocaleTimeString() : "None"}
            </Typography>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-2">DateTime Picker</Typography>
            <DateTimePicker
              variant="datetime"
              value={basicDateTime}
              onChange={setBasicDateTime}
              placeholder="Select date and time..."
            />
            <Typography variant="caption" className="mt-2 text-stone-600 block">
              Selected: {basicDateTime ? basicDateTime.toLocaleString() : "None"}
            </Typography>
          </div>
        </div>
      </Paper>

      {/* Variants */}
      <Paper className="p-8 pb-100">
        <Typography variant="h2" className="mb-2">Picker Variants</Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Different picker types for various use cases
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((variant) => (
            <div key={variant} className="space-y-3">
              <Typography variant="h6" className="capitalize">{variant} Picker</Typography>
              <DateTimePicker
                variant={variant}
                placeholder={`Select ${variant}...`}
              />
            </div>
          ))}
        </div>
      </Paper>

      {/* Appearance Variants */}
      <Paper className="p-8 pb-100">
        <Typography variant="h2" className="mb-2">Appearance Variants</Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Different visual styles following Button component patterns
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appearances.map((appearance) => (
            <div key={appearance} className="space-y-3">
              <Typography variant="h6" className="capitalize">{appearance}</Typography>
              <DateTimePicker
                variant="date"
                appearance={appearance}
                placeholder={`${appearance} style`}
              />
            </div>
          ))}
        </div>
      </Paper>

      {/* Size Variants */}
      <Paper className="p-8">
        <Typography variant="h2" className="mb-2">Size Variants</Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Different sizes to fit various layouts
        </Typography>
        <div className="space-y-4">
          {sizes.map((size) => (
            <div key={size} className="space-y-2">
              <Typography variant="body" className="font-medium capitalize">
                Size: {size}
              </Typography>
              <DateTimePicker
                variant="date"
                size={size}
                placeholder={`${size.toUpperCase()} size picker`}
              />
            </div>
          ))}
        </div>
      </Paper>
    </div>
  )
}

export default DateTimePickerShowcase