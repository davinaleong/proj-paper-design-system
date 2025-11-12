import { useState } from "react"
import { DotIndicator } from "./DotIndicator"
import type { DotIndicatorSize, DotIndicatorVariant } from "./types"
import type { ColorVariant } from "../../../utils/color"
import { Stack } from "../../layout/Stack"
import { Flex } from "../../layout/Flex"
import { Typography } from "../../core/Typography"
import { Paper } from "../../core/Paper"
import { Button } from "../../forms/Button"

const colors: ColorVariant[] = [
  "primary",
  "secondary",
  "danger",
  "success",
  "warning",
  "info",
  "default",
  "stone",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
]

const variants: DotIndicatorVariant[] = ["solid", "soft", "outline", "pulse"]
const sizes: DotIndicatorSize[] = ["xs", "sm", "md", "lg", "xl"]

export function DotIndicatorShowcase() {
  const [animated, setAnimated] = useState(true)

  return (
    <div className="space-y-8">
      {/* Controls */}
      <Paper className="p-6">
        <Flex justify="between" align="center">
          <Typography variant="h3">Dot Indicator Showcase</Typography>
          <Button
            onClick={() => setAnimated(!animated)}
            variant={animated ? "solid" : "outline"}
            color="primary"
          >
            {animated ? "Disable" : "Enable"} Animation
          </Button>
        </Flex>
      </Paper>

      {/* Size Variants */}
      <Paper className="p-6">
        <Stack gap="md">
          <Typography variant="h4" className="mb-4">
            Size Variants
          </Typography>
          <Flex gap="lg" align="center">
            {sizes.map((size) => (
              <Stack key={size} gap="sm" align="center">
                <DotIndicator
                  size={size}
                  color="primary"
                  variant="solid"
                  animated={animated}
                />
                <Typography variant="caption" className="text-stone-600">
                  {size}
                </Typography>
              </Stack>
            ))}
          </Flex>
        </Stack>
      </Paper>

      {/* Visual Variants */}
      <Paper className="p-6">
        <Stack gap="md">
          <Typography variant="h4" className="mb-4">
            Visual Variants
          </Typography>
          <Flex gap="lg" align="center">
            {variants.map((variant) => (
              <Stack key={variant} gap="sm" align="center">
                <DotIndicator
                  variant={variant}
                  color="primary"
                  size="lg"
                  animated={animated}
                />
                <Typography variant="caption" className="text-stone-600">
                  {variant}
                </Typography>
              </Stack>
            ))}
          </Flex>
        </Stack>
      </Paper>

      {/* Color Variants */}
      <Paper className="p-6">
        <Stack gap="md">
          <Typography variant="h4" className="mb-4">
            Color Variants
          </Typography>
          <div className="grid grid-cols-7 gap-6">
            {colors.map((color) => (
              <Stack key={color} gap="sm" align="center">
                <DotIndicator
                  color={color}
                  variant="solid"
                  size="lg"
                  animated={animated}
                />
                <Typography
                  variant="caption"
                  className="text-stone-600 text-center"
                >
                  {color}
                </Typography>
              </Stack>
            ))}
          </div>
        </Stack>
      </Paper>

      {/* Usage Examples */}
      <Paper className="p-6">
        <Stack gap="md">
          <Typography variant="h4" className="mb-4">
            Usage Examples
          </Typography>

          <Stack gap="lg" align="start" className="w-full">
            {/* Status indicators */}
            <Flex align="center" gap="xs" noWrap>
              <DotIndicator
                color="success"
                variant="solid"
                animated={animated}
              />
              <Typography variant="body">Online</Typography>
            </Flex>

            <Flex align="center" gap="xs" noWrap>
              <DotIndicator
                color="warning"
                variant="pulse"
                animated={animated}
              />
              <Typography variant="body">Processing</Typography>
            </Flex>

            <Flex align="center" gap="xs" noWrap>
              <DotIndicator color="danger" variant="soft" animated={false} />
              <Typography variant="body">Offline</Typography>
            </Flex>

            {/* Notification indicators */}
            <Flex align="center" gap="xs" noWrap>
              <DotIndicator
                color="primary"
                variant="solid"
                size="sm"
                animated={animated}
                animationDuration={800}
              />
              <Typography variant="body">New Messages</Typography>
            </Flex>

            {/* Loading states */}
            <Flex align="center" gap="xs" noWrap>
              <Flex gap="xs" shrink="0">
                <DotIndicator
                  color="primary"
                  variant="soft"
                  size="sm"
                  animated={animated}
                  animationDelay={0}
                />
                <DotIndicator
                  color="primary"
                  variant="soft"
                  size="sm"
                  animated={animated}
                  animationDelay={200}
                />
                <DotIndicator
                  color="primary"
                  variant="soft"
                  size="sm"
                  animated={animated}
                  animationDelay={400}
                />
              </Flex>
              <Typography variant="body">Loading</Typography>
            </Flex>
          </Stack>
        </Stack>
      </Paper>
    </div>
  )
}
