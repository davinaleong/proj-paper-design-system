import {
  DotIndicator,
  DotIndicatorShowcase,
} from "./components/utilities/DotIndicator"
import { Stack } from "./components/layout/Stack"
import { Flex } from "./components/layout/Flex"
import { Typography } from "./components/core/Typography"
import { Paper } from "./components/core/Paper"

export function DotIndicatorDemo() {
  return (
    <div className="p-8 space-y-8">
      <Paper className="p-6">
        <Typography variant="h2" className="mb-6">
          Dot Indicator Component
        </Typography>

        <Typography variant="body" className="mb-6 text-stone-600">
          Animated dot indicators are versatile visual components that can be
          used for status indicators, loading states, notifications, and more.
          They support multiple colors, sizes, variants, and togglable
          animations.
        </Typography>

        {/* Quick Examples */}
        <Stack gap="lg">
          <div>
            <Typography variant="h4" className="mb-4">
              Quick Examples
            </Typography>

            <Stack gap="md">
              <Flex gap="md" align="center">
                <Typography variant="body">Online Status:</Typography>
                <DotIndicator color="success" variant="solid" animated />
              </Flex>

              <Flex gap="md" align="center">
                <Typography variant="body">Processing:</Typography>
                <DotIndicator color="warning" variant="pulse" animated />
              </Flex>

              <Flex gap="md" align="center">
                <Typography variant="body">Notification:</Typography>
                <DotIndicator color="primary" size="sm" animated />
              </Flex>

              <Flex gap="md" align="center">
                <Typography variant="body">Loading sequence:</Typography>
                <Flex gap="xs">
                  <DotIndicator
                    color="blue"
                    size="sm"
                    animated
                    animationDelay={0}
                  />
                  <DotIndicator
                    color="blue"
                    size="sm"
                    animated
                    animationDelay={200}
                  />
                  <DotIndicator
                    color="blue"
                    size="sm"
                    animated
                    animationDelay={400}
                  />
                </Flex>
              </Flex>
            </Stack>
          </div>

          {/* Features List */}
          <div>
            <Typography variant="h4" className="mb-4">
              Features
            </Typography>
            <Typography variant="body" className="text-stone-600">
              ✅ 5 size variants: xs, sm, md, lg, xl
              <br />
              ✅ 4 visual variants: solid, soft, outline, pulse
              <br />
              ✅ Full color system integration (42+ color variants)
              <br />
              ✅ Togglable animations with customizable duration and delay
              <br />
              ✅ Perfect for status indicators, notifications, and loading
              states
              <br />
              ✅ TypeScript support with comprehensive interfaces
              <br />
              ✅ Accessible and semantic HTML
              <br />✅ Paper theme styling integration
            </Typography>
          </div>
        </Stack>
      </Paper>

      {/* Full Showcase */}
      <DotIndicatorShowcase />
    </div>
  )
}
