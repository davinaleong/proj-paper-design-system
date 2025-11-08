import { useState } from "react"
import { Toast, ToastProvider, useToast, useToastHelpers } from "../../components/feedback/Toast"
import { Button } from "../../components/forms/Button"
import { Typography } from "../../components/core/Typography"
import { Paper } from "../../components/core/Paper"
import { Flex } from "../../components/layout/Flex"
import { Stack } from "../../components/layout/Stack"
import { Grid } from "../../components/layout/Grid"
import { Bell, Star } from "lucide-react"
import type { ToastVariant, ToastPosition } from "../../components/feedback/Toast/types"
import type { ColorVariant } from "../../utils/colors"

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

function ToastDemoInner() {
  const { toast, dismissAll } = useToast()
  const { success, error, warning, info, loading } = useToastHelpers()
  const [currentPosition, setCurrentPosition] = useState<ToastPosition>("top-right")

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Toast Notifications
        </Typography>
        <Typography variant="body" className="mb-4 text-stone-600">
          Paper Design System toast component with 5 variants, full color support, 
          position controls, auto-dismiss, and context management.
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
        <Typography variant="h4" className="mb-4">
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
        <Typography variant="h4" className="mb-4">
          Variant Examples
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
      </Paper>

      {/* Live Demo */}
      <Paper className="p-6">
        <Typography variant="h4" className="mb-4">
          Live Demo
        </Typography>
        <Grid columns={{ md: 2, lg: 3 }} gap="md">
          {variants.slice(0, 3).map((variant) =>
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
        <Typography variant="h4" className="mb-4">
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
                title: "Complex Toast",
                description: "With custom icon and actions",
                icon: <Star className="w-5 h-5 text-yellow-500" />,
                showDefaultIcon: false,
                actions: (
                  <Flex gap="sm">
                    <Button size="sm" variant="outline">Undo</Button>
                    <Button size="sm">Confirm</Button>
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
    </div>
  )
}

export function ToastDemo() {
  return (
    <ToastProvider maxToasts={8} defaultPosition="top-right">
      <ToastDemoInner />
    </ToastProvider>
  )
}