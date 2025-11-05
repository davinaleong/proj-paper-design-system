import { useState } from "react"
import { Toast } from "./Toast"
import { ToastProvider } from "./ToastProvider"
import { useToast, useToastHelpers } from "./hooks"
import { Button } from "../../forms/Button"
import { IconButton } from "../../forms/IconButton"
import { Typography } from "../../core/Typography"
import { Paper } from "../../core/Paper"
import { Flex } from "../../layout/Flex"
import { Stack } from "../../layout/Stack"
import { Grid } from "../../layout/Grid"
import { Section } from "../../layout/Section"
import { Bell, Heart, Star } from "lucide-react"
import type { ToastVariant, ToastPosition } from "./types"
import type { ColorVariant } from "../../../utils/colors"

const variants: ToastVariant[] = ["solid", "outline", "ghost", "soft", "plain"]
const positions: ToastPosition[] = [
  "top-left", "top-center", "top-right",
  "bottom-left", "bottom-center", "bottom-right",
  "center"
]

const colors: ColorVariant[] = [
  "primary", "secondary", "success", "danger", "warning", "info", 
  "default", "paper", "accent"
]

function ToastShowcaseInner() {
  const { toast, dismissAll } = useToast()
  const { success, error, warning, info, loading } = useToastHelpers()
  const [currentPosition, setCurrentPosition] = useState<ToastPosition>("top-right")

  return (
    <Section className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <Typography variant="h1" className="mb-4">
          Toast Component
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-4">
          A comprehensive toast notification component following the Paper Design System.
          Supports multiple variants, colors, positions, and advanced features like auto-dismiss,
          progress bars, and animation controls.
        </Typography>
        <Typography variant="body" className="mb-4">
          ✅ 5 visual variants (following button patterns): solid, outline, ghost, soft, plain
          <br />
          ✅ Full color variant support with semantic defaults
          <br />
          ✅ 7 position variants with smart animation directions
          <br />
          ✅ Auto-dismiss with progress indicators and hover pause
          <br />
          ✅ Toast provider with queue management and context hooks
          <br />
          ✅ Paper theme styling with elevation and blur effects
          <br />
          ✅ Accessibility features with ARIA labels and live regions
        </Typography>
      </div>

      {/* Quick Actions */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Quick Actions
        </Typography>
        <Flex gap="md" wrap="wrap">
          <Button onClick={() => success({ title: "Success!", description: "Operation completed successfully" })}>
            Success Toast
          </Button>
          <Button onClick={() => error({ title: "Error!", description: "Something went wrong" })}>
            Error Toast
          </Button>
          <Button onClick={() => warning({ title: "Warning!", description: "Please review this action" })}>
            Warning Toast
          </Button>
          <Button onClick={() => info({ title: "Info", description: "Here's some helpful information" })}>
            Info Toast
          </Button>
          <Button onClick={() => loading({ title: "Loading...", description: "Please wait" })}>
            Loading Toast
          </Button>
          <Button variant="outline" onClick={dismissAll}>
            Clear All
          </Button>
        </Flex>
      </Paper>

      {/* Position Control */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Position Control
        </Typography>
        <div className="mb-4">
          <Typography variant="body" className="mb-2">
            Current Position: <code className="bg-gray-100 px-2 py-1 rounded text-sm">{currentPosition}</code>
          </Typography>
          <Grid columns={{ md: 7 }} gap="sm">
            {positions.map((position) => (
              <Button
                key={position}
                size="sm"
                variant={currentPosition === position ? "solid" : "outline"}
                onClick={() => setCurrentPosition(position)}
                className="text-xs"
              >
                {position.replace("-", " ")}
              </Button>
            ))}
          </Grid>
        </div>
        <Button 
          onClick={() => toast({ 
            title: `Toast at ${currentPosition}`, 
            description: "This toast appears at the selected position",
            position: currentPosition 
          })}
        >
          Show Toast at {currentPosition}
        </Button>
      </Paper>

      {/* Static Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Static Examples
        </Typography>
        <Stack gap="md">
          {/* Variant Examples */}
          <div>
            <Typography variant="h4" className="mb-3">
              Variants
            </Typography>
            <Stack gap="sm">
              {variants.map((variant) => (
                <Toast
                  key={variant}
                  variant={variant}
                  color="primary"
                  title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
                  description="This is a sample toast message"
                  icon={<Bell className="w-5 h-5" />}
                  duration={0}
                  visible={true}
                />
              ))}
            </Stack>
          </div>

          {/* Color Examples */}
          <div>
            <Typography variant="h4" className="mb-3">
              Color Variants
            </Typography>
            <Grid columns={{ md: 2 }} gap="sm">
              {colors.map((color) => (
                <Toast
                  key={color}
                  variant="solid"
                  color={color}
                  title={`${color.charAt(0).toUpperCase() + color.slice(1)} Color`}
                  description="Toast with semantic color"
                  duration={0}
                  visible={true}
                />
              ))}
            </Grid>
          </div>

          {/* Size Examples */}
          <div>
            <Typography variant="h4" className="mb-3">
              Size Variants
            </Typography>
            <Stack gap="sm">
              <Toast
                size="sm"
                title="Small Toast"
                description="Compact size for minimal notifications"
                duration={0}
                visible={true}
              />
              <Toast
                size="md"
                title="Medium Toast"
                description="Default size for most notifications"
                duration={0}
                visible={true}
              />
              <Toast
                size="lg"
                title="Large Toast"
                description="Larger size for important notifications with more content"
                duration={0}
                visible={true}
              />
            </Stack>
          </div>

          {/* Feature Examples */}
          <div>
            <Typography variant="h4" className="mb-3">
              Feature Examples
            </Typography>
            <Stack gap="sm">
              <Toast
                title="With Progress Bar"
                description="This toast shows auto-dismiss progress"
                duration={0}
                showProgress={true}
                visible={true}
              />
              <Toast
                title="Custom Icon"
                description="Toast with a custom icon"
                icon={<Heart className="w-5 h-5 text-red-500" />}
                showDefaultIcon={false}
                duration={0}
                visible={true}
              />
              <Toast
                variant="solid"
                color="primary"
                title="With Actions"
                description="Toast with action buttons (solid variant)"
                actions={
                  <Flex gap="sm">
                    <Button size="sm" variant="outline">Undo</Button>
                    <Button size="sm" variant="ghost">Confirm</Button>
                  </Flex>
                }
                duration={0}
                visible={true}
              />
              <Toast
                variant="outline"
                color="danger"
                title="Outline with Actions"
                description="Outline variant with action buttons"
                actions={
                  <Flex gap="sm">
                    <Button size="sm" variant="outline" color="danger">Cancel</Button>
                    <Button size="sm" variant="solid" color="danger">Delete</Button>
                  </Flex>
                }
                duration={0}
                visible={true}
              />
              <Toast
                title="Non-dismissible"
                description="This toast cannot be dismissed manually"
                dismissible={false}
                duration={0}
                visible={true}
              />
            </Stack>
          </div>
        </Stack>
      </Paper>

      {/* Live Demo */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Live Demo
        </Typography>
        <Grid columns={{ md: 2, lg: 3 }} gap="md">
          {variants.map((variant) =>
            colors.slice(0, 3).map((color) => (
              <Button
                key={`${variant}-${color}`}
                variant="outline"
                size="sm"
                onClick={() => 
                  toast({
                    variant,
                    color,
                    title: `${variant} ${color}`,
                    description: `A ${variant} variant toast with ${color} color`,
                    position: currentPosition,
                  })
                }
              >
                {variant} {color}
              </Button>
            ))
          )}
        </Grid>
      </Paper>

      {/* Advanced Features */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Advanced Features
        </Typography>
        <Flex gap="md" wrap="wrap">
          <Button
            onClick={() => 
              toast({
                title: "Auto-dismiss in 3s",
                description: "This toast will dismiss automatically",
                duration: 3000,
                showProgress: true,
                position: currentPosition,
              })
            }
          >
            Auto Dismiss (3s)
          </Button>
          <Button
            onClick={() => 
              toast({
                title: "Persistent Toast",
                description: "This toast stays until manually dismissed",
                duration: 0,
                position: currentPosition,
              })
            }
          >
            No Auto Dismiss
          </Button>
          <Button
            onClick={() => 
              toast({
                title: "Animated Toast",
                description: "With smooth entrance and exit animations",
                animated: true,
                position: currentPosition,
              })
            }
          >
            Animated Entry
          </Button>
          <Button
            onClick={() => 
              toast({
                title: "Complex Toast",
                description: "With custom icon, actions, and progress",
                icon: <Star className="w-5 h-5 text-yellow-500" />,
                showDefaultIcon: false,
                actions: (
                  <Flex gap="sm">
                    <IconButton icon={Heart} size="sm" variant="ghost" aria-label="Like" />
                    <Button size="sm">View Details</Button>
                  </Flex>
                ),
                showProgress: true,
                duration: 5000,
                position: currentPosition,
              })
            }
          >
            Complex Toast
          </Button>
        </Flex>
      </Paper>
    </Section>
  )
}

export function ToastShowcase() {
  return (
    <ToastProvider maxToasts={8} defaultPosition="top-right">
      <ToastShowcaseInner />
    </ToastProvider>
  )
}