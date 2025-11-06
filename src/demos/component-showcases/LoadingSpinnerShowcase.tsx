import { useState } from "react"
import { Download, Save, Upload, Trash2, RefreshCw } from "lucide-react"
import { Paper, Typography } from "../../components/core"
import { Button } from "../../components/forms"
import { LoadingSpinner } from "../../components/feedback"
import type { LoadingSpinnerIcon, LoadingSpinnerSize, LoadingSpinnerTextPosition, LoadingSpinnerVariant } from "../../components/feedback/LoadingSpinner/types"
import type { ColorVariant } from "../../utils/colors"

export function LoadingSpinnerShowcase() {
  const [activeSpinners, setActiveSpinners] = useState<Record<string, boolean>>({})
  const [dismissedSpinners, setDismissedSpinners] = useState<Record<string, boolean>>({})

  const toggleSpinner = (key: string) => {
    setActiveSpinners(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const dismissSpinner = (key: string) => {
    setDismissedSpinners(prev => ({ ...prev, [key]: true }))
    setActiveSpinners(prev => ({ ...prev, [key]: false }))
  }

  const resetSpinner = (key: string) => {
    setDismissedSpinners(prev => ({ ...prev, [key]: false }))
    setActiveSpinners(prev => ({ ...prev, [key]: true }))
  }

  const spinnerIcons: LoadingSpinnerIcon[] = ["loader2", "loader", "refresh-cw", "rotate-3d", "circle-dashed"]
  const sizes: LoadingSpinnerSize[] = ["xs", "sm", "md", "lg", "xl"]
  const colors: ColorVariant[] = ["primary", "secondary", "success", "warning", "danger", "info"]
  const textPositions: LoadingSpinnerTextPosition[] = ["left", "right", "top", "bottom"]
  const variants: LoadingSpinnerVariant[] = ["default", "solid", "outline", "ghost", "elevated"]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Loading Spinner
        </Typography>
        <Typography variant="body" color="muted">
          Animated loading indicators with Lucide icons, customizable styling, and Paper Design System integration.
        </Typography>
      </div>

      {/* Basic Examples */}
      <section>
        <Typography variant="h3" className="mb-4">
          Basic Loading Spinners
        </Typography>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Simple Spinner */}
          <Paper className="p-4 flex flex-col items-center space-y-4">
            <Typography variant="h5" className="text-stone-700">
              Simple Spinner
            </Typography>
            <LoadingSpinner loading={true} />
          </Paper>

          {/* With Text */}
          <Paper className="p-4 flex flex-col items-center space-y-4">
            <Typography variant="h5" className="text-stone-700">
              With Text
            </Typography>
            <LoadingSpinner 
              loading={true} 
              text="Loading..."
            />
          </Paper>

          {/* Different Icon */}
          <Paper className="p-4 flex flex-col items-center space-y-4">
            <Typography variant="h5" className="text-stone-700">
              Custom Icon
            </Typography>
            <LoadingSpinner 
              loading={true} 
              icon="refresh-cw"
              text="Refreshing..."
              color="success"
            />
          </Paper>
        </div>
      </section>

      {/* Spinner Icons */}
      <section>
        <Typography variant="h3" className="mb-4">
          Spinner Icon Variants
        </Typography>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {spinnerIcons.map((iconType) => (
            <Paper key={iconType} className="p-4 flex flex-col items-center space-y-3">
              <Typography variant="small" className="text-stone-600 capitalize font-mono">
                {iconType}
              </Typography>
              <LoadingSpinner 
                loading={true} 
                icon={iconType}
                size="lg"
                color="primary"
              />
            </Paper>
          ))}
        </div>
      </section>

      {/* Sizes */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Size Variants
        </Typography>
        
        <Paper className="p-6">
          <div className="flex items-center justify-around">
            {sizes.map((size) => (
              <div key={size} className="flex flex-col items-center space-y-2">
                <Typography variant="small" className="text-stone-600 uppercase">
                  {size}
                </Typography>
                <LoadingSpinner 
                  loading={true} 
                  size={size}
                  color="primary"
                />
              </div>
            ))}
          </div>
        </Paper>
      </section>

      {/* Colors */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Color Variants
        </Typography>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colors.map((color) => (
            <Paper key={color} className="p-4 flex flex-col items-center space-y-3">
              <Typography variant="small" className="text-stone-600 capitalize">
                {color}
              </Typography>
              <LoadingSpinner 
                loading={true} 
                color={color}
                text={`${color} loading...`}
                size="lg"
              />
            </Paper>
          ))}
        </div>
      </section>

      {/* Text Positions */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Text Positioning
        </Typography>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {textPositions.map((position) => (
            <Paper key={position} className="p-6 flex flex-col items-center space-y-4">
              <Typography variant="small" className="text-stone-600 capitalize">
                {position}
              </Typography>
              <div className="min-h-20 flex items-center justify-center">
                <LoadingSpinner 
                  loading={true} 
                  text="Loading..."
                  textPosition={position}
                  color="primary"
                  size="lg"
                />
              </div>
            </Paper>
          ))}
        </div>
      </section>

      {/* Background Variants (Paper Styling) */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Background Variants (Paper Styling)
        </Typography>
        
        <div className="space-y-4">
          {variants.map((variant) => (
            <div key={variant} className="space-y-2">
              <Typography variant="h5" className="text-stone-700 capitalize">
                {variant} Variant
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["primary", "success", "warning"].map((color) => (
                  <LoadingSpinner
                    key={`${variant}-${color}`}
                    loading={true}
                    variant={variant as LoadingSpinnerVariant}
                    color={color as ColorVariant}
                    background={true}
                    text={`${variant} ${color} loading...`}
                    textPosition="right"
                    size="md"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Examples */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Interactive Examples
        </Typography>
        
        <div className="space-y-6">
          {/* Dismissible Spinner */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Dismissible Loading
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => toggleSpinner("dismissible")}
                disabled={activeSpinners.dismissible}
              >
                Start Dismissible Loading
              </Button>
              
              {activeSpinners.dismissible && !dismissedSpinners.dismissible && (
                <LoadingSpinner
                  loading={true}
                  background={true}
                  variant="elevated"
                  color="primary"
                  text="Processing... (dismissible)"
                  dismissible={true}
                  onDismiss={() => dismissSpinner("dismissible")}
                />
              )}
              
              {dismissedSpinners.dismissible && (
                <Button 
                  variant="outline" 
                  onClick={() => resetSpinner("dismissible")}
                >
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Task Simulations */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Task Simulations
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* File Upload */}
              <div className="space-y-3">
                <Button 
                  icon={Upload}
                  onClick={() => toggleSpinner("upload")}
                  disabled={activeSpinners.upload}
                  variant="outline"
                  color="info"
                >
                  Upload File
                </Button>
                {activeSpinners.upload && (
                  <LoadingSpinner
                    loading={true}
                    background={true}
                    variant="outline"
                    color="info"
                    icon="loader2"
                    text="Uploading file..."
                    textPosition="right"
                    dismissible={true}
                    onDismiss={() => dismissSpinner("upload")}
                  />
                )}
              </div>

              {/* Save Document */}
              <div className="space-y-3">
                <Button 
                  icon={Save}
                  onClick={() => toggleSpinner("save")}
                  disabled={activeSpinners.save}
                  variant="outline"
                  color="success"
                >
                  Save Document
                </Button>
                {activeSpinners.save && (
                  <LoadingSpinner
                    loading={true}
                    background={true}
                    variant="solid"
                    color="success"
                    icon="loader"
                    text="Saving..."
                    textPosition="right"
                    speed={0.8}
                  />
                )}
              </div>

              {/* Download */}
              <div className="space-y-3">
                <Button 
                  icon={Download}
                  onClick={() => toggleSpinner("download")}
                  disabled={activeSpinners.download}
                  variant="outline"
                  color="primary"
                >
                  Download
                </Button>
                {activeSpinners.download && (
                  <LoadingSpinner
                    loading={true}
                    background={true}
                    variant="ghost"
                    color="primary"
                    icon="circle-dashed"
                    text="Downloading..."
                    textPosition="bottom"
                    centered={true}
                  />
                )}
              </div>

              {/* Delete */}
              <div className="space-y-3">
                <Button 
                  icon={Trash2}
                  onClick={() => toggleSpinner("delete")}
                  disabled={activeSpinners.delete}
                  variant="outline"
                  color="danger"
                >
                  Delete Items
                </Button>
                {activeSpinners.delete && (
                  <LoadingSpinner
                    loading={true}
                    background={true}
                    variant="elevated"
                    color="danger"
                    icon="refresh-cw"
                    text="Deleting items..."
                    textPosition="right"
                    speed={1.5}
                    dismissible={true}
                    onDismiss={() => dismissSpinner("delete")}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Speed Control */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Speed Variations
            </Typography>
            <div className="flex flex-wrap gap-6">
              {[0.5, 1, 2, 3].map((speed) => (
                <div key={speed} className="flex flex-col items-center space-y-2">
                  <Typography variant="small" className="text-stone-600">
                    {speed}s
                  </Typography>
                  <LoadingSpinner
                    loading={true}
                    speed={speed}
                    text={`${speed}s speed`}
                    textPosition="bottom"
                    color="accent"
                    size="lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Usage */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Advanced Usage
        </Typography>
        
        <div className="space-y-6">
          {/* Custom Lucide Icon */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Custom Lucide Icon
            </Typography>
            <LoadingSpinner
              loading={true}
              icon={RefreshCw}
              background={true}
              variant="elevated"
              color="paper"
              text="Using custom Lucide icon"
              textPosition="right"
              size="lg"
            />
          </div>

          {/* Inline Usage */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Inline Usage
            </Typography>
            <Typography variant="body" className="text-stone-700">
              Processing your request{" "}
              <LoadingSpinner
                loading={true}
                inline={true}
                size="sm"
                color="primary"
              />{" "}
              please wait...
            </Typography>
          </div>

          {/* Custom Content */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-3">
              Custom Content
            </Typography>
            <LoadingSpinner
              loading={true}
              background={true}
              variant="outline"
              color="info"
              textPosition="bottom"
              centered={true}
            >
              <div className="text-center space-y-1">
                <Typography variant="body" className="font-medium">
                  Processing your request
                </Typography>
                <Typography variant="small" className="text-stone-600">
                  This may take a few moments...
                </Typography>
              </div>
            </LoadingSpinner>
          </div>
        </div>
      </section>

      {/* Control Panel */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Control Panel
        </Typography>
        
        <Paper className="p-4">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const keys = ["upload", "save", "download", "delete", "dismissible"]
                keys.forEach(key => {
                  setActiveSpinners(prev => ({ ...prev, [key]: false }))
                  setDismissedSpinners(prev => ({ ...prev, [key]: false }))
                })
              }}
            >
              Stop All
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                const keys = ["upload", "save", "download", "delete", "dismissible"]
                keys.forEach(key => {
                  setActiveSpinners(prev => ({ ...prev, [key]: true }))
                  setDismissedSpinners(prev => ({ ...prev, [key]: false }))
                })
              }}
            >
              Start All
            </Button>
          </div>
        </Paper>
      </section>
    </div>
  )
}