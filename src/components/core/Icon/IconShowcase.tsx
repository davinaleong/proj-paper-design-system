import { 
  Star, 
  Heart, 
  Settings, 
  User, 
  Home, 
  Search,
  Bell,
  Menu,
  ArrowRight,
  Check
} from "lucide-react"
import { Icon } from "./Icon"
import { Card } from "../../layout/Card"
import { Stack } from "../../layout/Stack"
import { Typography } from "../Typography"
import type { ColorVariant } from "../../../utils/color"

const DEMO_ICONS = [
  { icon: Star, name: "Star" },
  { icon: Heart, name: "Heart" },
  { icon: Settings, name: "Settings" },
  { icon: User, name: "User" },
  { icon: Home, name: "Home" },
  { icon: Search, name: "Search" },
  { icon: Bell, name: "Bell" },
  { icon: Menu, name: "Menu" },
  { icon: ArrowRight, name: "Arrow Right" },
  { icon: Check, name: "Check" },
]

const COLOR_VARIANTS: { color: ColorVariant; name: string }[] = [
  { color: "default", name: "Default" },
  { color: "primary", name: "Primary" },
  { color: "secondary", name: "Secondary" },
  { color: "success", name: "Success" },
  { color: "warning", name: "Warning" },
  { color: "danger", name: "Danger" },
  { color: "info", name: "Info" },
  { color: "paper", name: "Paper" },
  { color: "transparent", name: "Transparent" },
]

export function IconShowcase() {
  return (
    <Stack gap="lg" className="max-w-4xl mx-auto p-6">
      <div>
        <Typography variant="h2" className="mb-2">
          Icon Component Showcase
        </Typography>
        <Typography variant="body" className="text-stone-600 dark:text-stone-400">
          Icons automatically adapt to dark mode with proper contrast. All icons should be white in dark mode.
        </Typography>
      </div>

      {/* Basic Icons Grid */}
      <Card className="p-6">
        <Typography variant="h3" className="mb-4">
          Basic Icons (Default Color)
        </Typography>
        <div className="grid grid-cols-5 gap-4">
          {DEMO_ICONS.map(({ icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-2 p-3 rounded border">
              <Icon icon={icon} size="lg" />
              <Typography variant="bodySmall" className="text-center">
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </Card>

      {/* Different Sizes */}
      <Card className="p-6">
        <Typography variant="h3" className="mb-4">
          Icon Sizes
        </Typography>
        <div className="flex items-center gap-6">
          {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Icon icon={Star} size={size} />
              <Typography variant="bodySmall">{size}</Typography>
            </div>
          ))}
        </div>
      </Card>

      {/* Color Variants */}
      <Card className="p-6">
        <Typography variant="h3" className="mb-4">
          Color Variants
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          {COLOR_VARIANTS.map(({ color, name }) => (
            <div key={color} className="flex items-center gap-3 p-3 rounded border">
              <Icon icon={Heart} color={color} size="lg" />
              <div>
                <Typography variant="body" className="font-medium">
                  {name}
                </Typography>
                <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400">
                  {color}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Intensity Levels */}
      <Card className="p-6">
        <Typography variant="h3" className="mb-4">
          Intensity Levels (Default Color)
        </Typography>
        <div className="grid grid-cols-2 gap-4">
          {(["subtle", "soft", "bold", "strong"] as const).map((intensity) => (
            <div key={intensity} className="flex items-center gap-3 p-3 rounded border">
              <Icon icon={Settings} intensity={intensity} size="lg" />
              <div>
                <Typography variant="body" className="font-medium capitalize">
                  {intensity}
                </Typography>
                <Typography variant="bodySmall" className="text-stone-500 dark:text-stone-400">
                  intensity="{intensity}"
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Dark Mode Test Section */}
      <Card className="p-6 bg-stone-900 text-white">
        <Typography variant="h3" className="mb-4 text-white">
          Dark Background Test
        </Typography>
        <Typography variant="body" className="mb-4 text-stone-300">
          Icons on dark backgrounds should be white for proper contrast.
        </Typography>
        <div className="flex items-center gap-6">
          {DEMO_ICONS.slice(0, 5).map(({ icon, name }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon icon={icon} size="lg" className="text-white" />
              <Typography variant="bodySmall" className="text-stone-300 text-center">
                {name}
              </Typography>
            </div>
          ))}
        </div>
      </Card>
    </Stack>
  )
}
