import { useState } from "react"
import { 
  Skeleton, 
  SkeletonText, 
  SkeletonImage, 
  SkeletonAvatar, 
  SkeletonButton, 
  SkeletonCard 
} from "./Skeleton"
import { Paper, Typography } from "../../core"
import { Stack, Grid, Divider } from "../../layout"
import type { SkeletonVariant, SkeletonSize, SkeletonAnimation } from "./types"

export function SkeletonShowcase() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState<SkeletonVariant>("text")
  const [selectedSize, setSelectedSize] = useState<SkeletonSize>("md")
  const [selectedAnimation, setSelectedAnimation] = useState<SkeletonAnimation>("shimmer")
  const [animationSpeed, setAnimationSpeed] = useState(2)
  const [textLines, setTextLines] = useState(3)
  const [imageAspectRatio, setImageAspectRatio] = useState<"square" | "video" | "photo" | "wide">("photo")

  const variants: SkeletonVariant[] = ["text", "image", "avatar", "button", "card", "custom"]
  const sizes: SkeletonSize[] = ["xs", "sm", "md", "lg", "xl"]
  const animations: SkeletonAnimation[] = ["pulse", "shimmer", "wave", "none"]
  const aspectRatios: Array<"square" | "video" | "photo" | "wide"> = ["square", "video", "photo", "wide"]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Skeleton
        </Typography>
        <Typography variant="body" color="muted">
          Animated loading placeholders with Paper styling, theme support, and various loading states for images and text.
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
                <span>Show Skeleton</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Variant:</label>
              <div className="grid grid-cols-3 gap-2">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-3 py-1 text-xs rounded border capitalize ${
                      selectedVariant === variant
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
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
              <label className="block text-sm font-medium mb-1">Animation:</label>
              <div className="grid grid-cols-2 gap-2">
                {animations.map((animation) => (
                  <button
                    key={animation}
                    onClick={() => setSelectedAnimation(animation)}
                    className={`px-3 py-1 text-xs rounded border capitalize ${
                      selectedAnimation === animation
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {animation}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Animation Speed: {animationSpeed}s
              </label>
              <input
                type="range"
                min="0.5"
                max="4"
                step="0.1"
                value={animationSpeed}
                onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>

            {selectedVariant === "text" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Text Lines: {textLines}
                </label>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={textLines}
                  onChange={(e) => setTextLines(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            )}

            {selectedVariant === "image" && (
              <div>
                <label className="block text-sm font-medium mb-1">Aspect Ratio:</label>
                <div className="grid grid-cols-2 gap-2">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio}
                      onClick={() => setImageAspectRatio(ratio)}
                      className={`px-3 py-1 text-xs rounded border capitalize ${
                        imageAspectRatio === ratio
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8">
            <Typography variant="bodySmall" color="muted" className="mb-4">Preview</Typography>
            <div className="space-y-4">
              {selectedVariant === "text" && (
                <SkeletonText
                  loading={isLoading}
                  lines={textLines}
                  size={selectedSize}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                />
              )}
              
              {selectedVariant === "image" && (
                <SkeletonImage
                  loading={isLoading}
                  aspectRatio={imageAspectRatio}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                />
              )}
              
              {selectedVariant === "avatar" && (
                <SkeletonAvatar
                  loading={isLoading}
                  size={selectedSize}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                  width={selectedSize === "xs" ? 32 : selectedSize === "sm" ? 40 : selectedSize === "md" ? 48 : selectedSize === "lg" ? 56 : 64}
                  height={selectedSize === "xs" ? 32 : selectedSize === "sm" ? 40 : selectedSize === "md" ? 48 : selectedSize === "lg" ? 56 : 64}
                />
              )}
              
              {selectedVariant === "button" && (
                <SkeletonButton
                  loading={isLoading}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                  width={120}
                />
              )}
              
              {selectedVariant === "card" && (
                <SkeletonCard
                  loading={isLoading}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                  height={200}
                />
              )}
              
              {selectedVariant === "custom" && (
                <Skeleton
                  variant="custom"
                  loading={isLoading}
                  animation={selectedAnimation}
                  speed={animationSpeed}
                  className="p-4 space-y-3"
                >
                  <SkeletonAvatar size="sm" />
                  <SkeletonText lines={2} />
                  <SkeletonButton width={80} />
                </Skeleton>
              )}
            </div>
          </div>
        </div>
      </Paper>

      <Divider />

      {/* Variants Gallery */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Skeleton Variants</Typography>
        <Grid columns={2} gap="lg">
          <div>
            <Typography variant="h4" className="mb-2">Text Skeleton</Typography>
            <SkeletonText lines={3} />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Image Skeleton</Typography>
            <SkeletonImage aspectRatio="video" />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Avatar Skeleton</Typography>
            <SkeletonAvatar width={64} height={64} />
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Button Skeleton</Typography>
            <SkeletonButton width={120} />
          </div>
        </Grid>
      </Paper>

      {/* Animation Types */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Animation Types</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animations.map((animation) => (
            <div key={animation} className="text-center space-y-2">
              <Typography variant="bodySmall" color="muted" className="capitalize">{animation}</Typography>
              <SkeletonText lines={2} animation={animation} />
            </div>
          ))}
        </div>
      </Paper>

      {/* Real-world Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Real-world Examples</Typography>
        <Stack direction="column" gap="lg">
          <div>
            <Typography variant="h4" className="mb-2">User Profile Card</Typography>
            <div className="border rounded-lg p-4 space-y-4 max-w-sm">
              <div className="flex items-center space-x-3">
                <SkeletonAvatar width={48} height={48} />
                <div className="flex-1">
                  <SkeletonText lines={1} width="60%" />
                  <SkeletonText lines={1} width="40%" size="sm" />
                </div>
              </div>
              <SkeletonText lines={2} />
              <div className="flex space-x-2">
                <SkeletonButton width={80} />
                <SkeletonButton width={100} />
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Article Card</Typography>
            <div className="border rounded-lg overflow-hidden max-w-sm">
              <SkeletonImage aspectRatio="video" />
              <div className="p-4 space-y-3">
                <SkeletonText lines={1} width="80%" size="lg" />
                <SkeletonText lines={3} />
                <div className="flex items-center space-x-2">
                  <SkeletonAvatar width={24} height={24} />
                  <SkeletonText lines={1} width="50%" size="sm" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h4" className="mb-2">Product Grid</Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <SkeletonImage aspectRatio="square" />
                  <div className="p-3 space-y-2">
                    <SkeletonText lines={1} />
                    <SkeletonText lines={1} width="60%" size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Stack>
      </Paper>

      {/* Theme Demonstration */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Theme Support</Typography>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Typography variant="h4" className="mb-2">Light Theme (Current)</Typography>
            <div className="bg-white p-4 rounded border space-y-3">
              <SkeletonText lines={2} animation="shimmer" />
              <SkeletonImage aspectRatio="video" animation="wave" />
              <div className="flex items-center space-x-2">
                <SkeletonAvatar width={32} height={32} animation="pulse" />
                <SkeletonText lines={1} width="40%" />
              </div>
            </div>
          </div>
          
          <div>
            <Typography variant="h4" className="mb-2">Dark Theme Preview</Typography>
            <div className="bg-gray-900 p-4 rounded border space-y-3">
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse w-3/4"></div>
              </div>
              <div className="aspect-video bg-gray-700 rounded animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-3 bg-gray-700 rounded animate-pulse w-20"></div>
              </div>
            </div>
          </div>
        </div>
      </Paper>

      {/* Code Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Code Examples</Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Basic Text Skeleton</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<SkeletonText lines={3} animation="shimmer" />`}</code>
            </pre>
          </div>

          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Image Skeleton with Aspect Ratio</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<SkeletonImage aspectRatio="video" animation="wave" />`}</code>
            </pre>
          </div>

          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Custom Skeleton Layout</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`<Skeleton variant="custom" className="p-4 space-y-3">
  <SkeletonAvatar size="sm" />
  <SkeletonText lines={2} />
  <SkeletonButton width={80} />
</Skeleton>`}</code>
            </pre>
          </div>

          <div>
            <Typography variant="bodySmall" color="muted" className="mb-2">Conditional Loading</Typography>
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`{isLoading ? (
  <SkeletonText lines={3} />
) : (
  <div>Actual content here</div>
)}`}</code>
            </pre>
          </div>
        </div>
      </Paper>
    </div>
  )
}
