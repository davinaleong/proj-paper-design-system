import { useState } from "react"
import { Loader } from "../../components/feedback/Loader/Loader"
import { Paper, Typography } from "../../components/core"
import { Stack, Grid, Divider } from "../../components/layout"
import type { ColorVariant } from "../../utils/color"
import type { LoaderSize } from "../../components/feedback/Loader/types"

export function LoaderShowcase() {
  const [isLoading, setIsLoading] = useState(true)
  const [showEllipsis, setShowEllipsis] = useState(true)
  const [selectedColor, setSelectedColor] = useState<ColorVariant>("primary")
  const [selectedSize, setSelectedSize] = useState<LoaderSize>("md")
  const [animationSpeed, setAnimationSpeed] = useState(1.5)
  const [isInline, setIsInline] = useState(false)
  const [customText, setCustomText] = useState("Loading")

  const colors: ColorVariant[] = [
    "primary", "secondary", "danger", "success", "warning", "info", 
    "neutral", "red", "orange", "amber", "yellow", "lime", "green",
    "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", 
    "purple", "fuchsia", "pink", "rose"
  ]

  const sizes: LoaderSize[] = ["sm", "md", "lg"]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Loader
        </Typography>
        <Typography variant="body" color="muted">
          Simple text-based loader with animated ellipsis for inline usage and loading states.
        </Typography>
      </div>

      {/* Interactive Controls */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Interactive Demo</Typography>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isLoading}
                  onChange={(e) => setIsLoading(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span>Show Loader</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showEllipsis}
                  onChange={(e) => setShowEllipsis(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span>Show Ellipsis</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isInline}
                  onChange={(e) => setIsInline(e.target.checked)}
                  className="rounded border-gray-300"
                />
                <span>Inline</span>
              </label>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">Text Content:</label>
                <input
                  type="text"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter custom text..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Animation Speed: {animationSpeed}s
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.1"
                  value={animationSpeed}
                  onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Size:</label>
                <div className="flex space-x-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 rounded border ${
                        selectedSize === size
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Color:</label>
                <div className="grid grid-cols-6 gap-1">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-2 py-1 text-xs rounded border capitalize ${
                        selectedColor === color
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 flex items-center justify-center min-h-[200px]">
            <div className="text-center space-y-4">
              <Typography variant="bodySmall" color="muted">Preview</Typography>
              <div className={isInline ? "inline-block" : "block"}>
                <Loader
                  loading={isLoading}
                  text={customText}
                  showEllipsis={showEllipsis}
                  color={selectedColor}
                  size={selectedSize}
                  speed={animationSpeed}
                  inline={isInline}
                />
              </div>
              {isInline && (
                <Typography variant="body" color="muted">
                  This is some text before the loader. <Loader loading={isLoading} text="Processing" color={selectedColor} size={selectedSize} speed={animationSpeed} inline /> And this text comes after.
                </Typography>
              )}
            </div>
          </div>
        </div>
      </Paper>

      <Divider />

      {/* Size Variations */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Size Variations</Typography>
        <Stack direction="column" gap="lg">
          {sizes.map((size) => (
            <div key={size} className="flex items-center space-x-4">
              <span className="w-12 text-sm font-medium capitalize">{size}:</span>
              <Loader text="Loading data" size={size} color="primary" />
            </div>
          ))}
        </Stack>
      </Paper>

      {/* Color Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Color Variants</Typography>
        <Grid columns={4} gap="md">
          {colors.slice(0, 8).map((color) => (
            <div key={color} className="text-center space-y-2">
              <span className="text-sm font-medium capitalize">{color}</span>
              <Loader text="Loading" color={color} />
            </div>
          ))}
        </Grid>
      </Paper>

      {/* Usage Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Usage Examples</Typography>
        <Stack direction="column" gap="lg">
          <div>
            <Typography variant="h4" className="mb-2">Basic Loading</Typography>
            <Loader text="Please wait" />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Without Ellipsis</Typography>
            <Loader text="Processing your request" showEllipsis={false} color="info" />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Inline Usage</Typography>
            <Typography variant="body" color="muted">
              Submitting your form <Loader text="please wait" inline color="warning" size="sm" /> while we process your information.
            </Typography>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Fast Animation</Typography>
            <Loader text="Quick loading" speed={0.8} color="success" />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Slow Animation</Typography>
            <Loader text="Taking some time" speed={2.5} color="secondary" />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Custom Content</Typography>
            <Loader color="purple">
              <span className="font-semibold">Custom loading message</span>
            </Loader>
          </div>
        </Stack>
      </Paper>

      {/* Code Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Code Examples</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Basic Usage</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<Loader text="Loading data" />`}</code>
            </pre>
          </div>

          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Inline Usage</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<p>Processing <Loader text="please wait" inline size="sm" /> ...</p>`}</code>
            </pre>
          </div>

          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Customized</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<Loader
  text="Custom loading"
  color="primary"
  size="lg"
  speed={1.2}
  showEllipsis={true}
/>`}</code>
            </pre>
          </div>
        </div>
      </Paper>
    </div>
  )
}