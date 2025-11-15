import React, { useState } from "react"
import { ThemeToggle } from "../../components/system-utilities/ThemeToggle"
import type { ThemeToggleMode } from "../../components/system-utilities/ThemeToggle/types" 
import { Section } from "../../components/layout/Section"
import { Paper } from "../../components/core/Paper"
import { Typography } from "../../components/core/Typography"
import { Stack } from "../../components/layout/Stack"
import { Button } from "../../components/forms/Button"
import { Badge } from "../../components/layout/Badge"
import { Card } from "../../components/layout/Card"

export const ThemeToggleShowcase: React.FC = () => {
  const [buttonsTheme, setButtonsTheme] = useState<ThemeToggleMode>("light")
  const [segmentedTheme, setSegmentedTheme] = useState<ThemeToggleMode>("light")
  const [dropdownTheme, setDropdownTheme] = useState<ThemeToggleMode>("dark")
  const [compactTheme, setCompactTheme] = useState<ThemeToggleMode>("system")
  const [demoTheme, setDemoTheme] = useState<ThemeToggleMode>("light")

  // Theme-specific styles
  const getThemeStyles = (theme: ThemeToggleMode) => {
    switch (theme) {
      case "light":
        return {
          container: "bg-white border-gray-200 text-gray-900",
          paper: "bg-gray-50 border-gray-200",
          text: "text-gray-900",
          muted: "text-gray-600"
        }
      case "dark":
        return {
          container: "bg-gray-900 border-gray-700 text-white",
          paper: "bg-gray-800 border-gray-700",
          text: "text-white",
          muted: "text-gray-300"
        }
      case "system":
      default:
        return {
          container: "bg-paper-50 border-stone-200 text-stone-900",
          paper: "bg-white border-stone-200",
          text: "text-stone-900",
          muted: "text-stone-600"
        }
    }
  }

  const themeStyles = getThemeStyles(demoTheme)

  return (
    <div className="space-y-8">
      <Section>
        <Typography variant="h2" className="mb-6">
          ThemeToggle Component
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-8">
          A flexible theme toggle component supporting multiple variants and customization options.
        </Typography>
      </Section>

      {/* Live Theme Demo */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Live Theme Demonstration
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-4">
          Use the theme toggle below to see how it affects the appearance of UI components in real-time.
        </Typography>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Typography variant="bodySmall" className="font-medium">
              Current Theme: {demoTheme}
            </Typography>
            <ThemeToggle
              value={demoTheme}
              onChange={setDemoTheme}
              showLabels={true}
              size="md"
            />
          </div>
          
          {/* Demo Content that changes with theme */}
          <div className={`p-6 rounded-lg border-2 transition-all duration-300 ${themeStyles.container}`}>
            <Typography className={`text-xl font-semibold mb-4 ${themeStyles.text}`}>
              Sample Interface ({demoTheme} Theme)
            </Typography>
            
            <div className="space-y-4">
              <div className={`p-4 rounded border ${themeStyles.paper}`}>
                <Typography className={`font-medium mb-2 ${themeStyles.text}`}>
                  Card Component
                </Typography>
                <Typography className={`text-sm ${themeStyles.muted}`}>
                  This card demonstrates how the {demoTheme} theme affects background colors, borders, and text contrast.
                </Typography>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="solid"
                  color="primary"
                  size="sm"
                >
                  Primary Action
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                >
                  Secondary Action
                </Button>
                <Badge variant="soft" color="success">
                  Status: {demoTheme}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Basic Usage */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Basic Usage
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="flex items-center gap-6">
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  Default (Icons Only)
                </Typography>
                <ThemeToggle
                  value={buttonsTheme}
                  onChange={setButtonsTheme}
                />
              </div>
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  With Labels
                </Typography>
                <ThemeToggle
                  value={buttonsTheme}
                  onChange={setButtonsTheme}
                  showLabels={true}
                />
              </div>
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* Variants */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Variants
        </Typography>
        <Stack gap="lg">
          <div>
            <Typography variant="h4" className="mb-3">Buttons Variant</Typography>
            <Paper className="p-6">
              <div className="space-y-4">
                <div>
                  <Typography variant="bodySmall" className="mb-2 text-stone-600">
                    Individual toggle buttons (default)
                  </Typography>
                  <ThemeToggle
                    variant="buttons"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                    showTooltips={true}
                  />
                </div>
                <div>
                  <Typography variant="bodySmall" className="mb-2 text-stone-600">
                    With labels and different button variant
                  </Typography>
                  <ThemeToggle
                    variant="buttons"
                    buttonVariant="outline"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                    showLabels={true}
                    showTooltips={false}
                  />
                </div>
              </div>
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">Segmented Variant</Typography>
            <Paper className="p-6">
              <div className="space-y-4">
                <div>
                  <Typography variant="bodySmall" className="mb-2 text-stone-600">
                    Unified segmented control (icons only)
                  </Typography>
                  <ThemeToggle
                    variant="segmented"
                    value={segmentedTheme}
                    onChange={setSegmentedTheme}
                    showTooltips={true}
                  />
                </div>
                <div>
                  <Typography variant="bodySmall" className="mb-2 text-stone-600">
                    With labels
                  </Typography>
                  <ThemeToggle
                    variant="segmented"
                    value={segmentedTheme}
                    onChange={setSegmentedTheme}
                    showLabels={true}
                    showTooltips={false}
                  />
                </div>
              </div>
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">Dropdown Variant</Typography>
            <Paper className="p-6">
              <div className="space-y-4">
                <div>
                  <Typography variant="bodySmall" className="mb-2 text-stone-600">
                    Single button that cycles through options
                  </Typography>
                  <ThemeToggle
                    variant="dropdown"
                    value={dropdownTheme}
                    onChange={setDropdownTheme}
                    showTooltips={true}
                  />
                </div>
              </div>
            </Paper>
          </div>
        </Stack>
      </Section>

      {/* Sizes */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Sizes
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div>
                  <Typography variant="bodySmall" className="mb-2 font-medium">
                    Extra Small
                  </Typography>
                  <ThemeToggle
                    size="xs"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                  />
                </div>
                <div>
                  <Typography variant="bodySmall" className="mb-2 font-medium">
                    Small
                  </Typography>
                  <ThemeToggle
                    size="sm"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                  />
                </div>
                <div>
                  <Typography variant="bodySmall" className="mb-2 font-medium">
                    Medium (Default)
                  </Typography>
                  <ThemeToggle
                    size="md"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <Typography variant="bodySmall" className="mb-2 font-medium">
                    Large
                  </Typography>
                  <ThemeToggle
                    size="lg"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                  />
                </div>
                <div>
                  <Typography variant="bodySmall" className="mb-2 font-medium">
                    Extra Large
                  </Typography>
                  <ThemeToggle
                    size="xl"
                    value={buttonsTheme}
                    onChange={setButtonsTheme}
                  />
                </div>
              </div>
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* With Labels and Descriptions */}
      <Section>
        <Typography variant="h3" className="mb-4">
          With Labels and Descriptions
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="space-y-6">
              <ThemeToggle
                value={buttonsTheme}
                onChange={setButtonsTheme}
                label="Theme Preference"
                helperText="Choose your preferred color theme for the interface"
                showLabels={true}
                size="md"
              />
              
              <ThemeToggle
                variant="segmented"
                value={segmentedTheme}
                onChange={setSegmentedTheme}
                label="Display Mode"
                helperText="Select the visual appearance that works best for you"
                showLabels={true}
                size="md"
              />
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* Compact Mode */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Compact Mode
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="flex items-center gap-8">
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  Normal Spacing
                </Typography>
                <ThemeToggle
                  value={compactTheme}
                  onChange={setCompactTheme}
                  compact={false}
                />
              </div>
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  Compact Spacing
                </Typography>
                <ThemeToggle
                  value={compactTheme}
                  onChange={setCompactTheme}
                  compact={true}
                />
              </div>
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* Orientation */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Orientation (Segmented Only)
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="flex items-start gap-8">
              <div>
                <Typography variant="bodySmall" className="mb-3 font-medium">
                  Horizontal (Default)
                </Typography>
                <ThemeToggle
                  variant="segmented"
                  orientation="horizontal"
                  value={segmentedTheme}
                  onChange={setSegmentedTheme}
                  showLabels={true}
                />
              </div>
              <div>
                <Typography variant="bodySmall" className="mb-3 font-medium">
                  Vertical
                </Typography>
                <ThemeToggle
                  variant="segmented"
                  orientation="vertical"
                  value={segmentedTheme}
                  onChange={setSegmentedTheme}
                  showLabels={true}
                />
              </div>
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* Disabled State */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Disabled State
        </Typography>
        <Stack gap="lg">
          <Paper className="p-6">
            <div className="flex items-center gap-8">
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  Buttons Variant
                </Typography>
                <ThemeToggle
                  value={buttonsTheme}
                  onChange={setButtonsTheme}
                  disabled={true}
                />
              </div>
              <div>
                <Typography variant="bodySmall" className="mb-2 font-medium">
                  Segmented Variant
                </Typography>
                <ThemeToggle
                  variant="segmented"
                  value={segmentedTheme}
                  onChange={setSegmentedTheme}
                  disabled={true}
                  showLabels={true}
                />
              </div>
            </div>
          </Paper>
        </Stack>
      </Section>

      {/* Integration Examples */}
      <Section>
        <Typography variant="h3" className="mb-4">
          Integration Examples
        </Typography>
        <Stack gap="lg">
          <div>
            <Typography variant="h4" className="mb-3">Header/Toolbar Integration</Typography>
            <Paper className="p-4">
              <div className="flex items-center justify-between">
                <Typography variant="h5">Application Settings</Typography>
                <ThemeToggle
                  value={compactTheme}
                  onChange={setCompactTheme}
                  size="sm"
                  showTooltips={true}
                  compact={true}
                />
              </div>
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">Settings Panel Integration</Typography>
            <Paper className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Typography variant="bodyLarge" className="font-medium">
                      Appearance
                    </Typography>
                    <Typography variant="bodySmall" className="text-stone-600">
                      Customize the visual theme of your interface
                    </Typography>
                  </div>
                  <ThemeToggle
                    variant="segmented"
                    value={segmentedTheme}
                    onChange={setSegmentedTheme}
                    showLabels={true}
                  />
                </div>
              </div>
            </Paper>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">Real Application Context</Typography>
            <Typography variant="body" className="text-stone-600 mb-3">
              This example shows how theme switching affects a typical application interface:
            </Typography>
            <Card className="p-0 overflow-hidden">
              {/* Mock header */}
              <div className={`p-4 border-b transition-all duration-300 ${themeStyles.container}`}>
                <div className="flex items-center justify-between">
                  <Typography className={`font-semibold ${themeStyles.text}`}>
                    Dashboard
                  </Typography>
                  <ThemeToggle
                    value={demoTheme}
                    onChange={setDemoTheme}
                    size="sm"
                    compact={true}
                  />
                </div>
              </div>
              
              {/* Mock content */}
              <div className={`p-4 transition-all duration-300 ${themeStyles.container}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`p-3 rounded border ${themeStyles.paper}`}>
                    <Typography className={`text-sm font-medium ${themeStyles.text}`}>
                      Users
                    </Typography>
                    <Typography className={`text-2xl font-bold ${themeStyles.text}`}>
                      1,234
                    </Typography>
                  </div>
                  <div className={`p-3 rounded border ${themeStyles.paper}`}>
                    <Typography className={`text-sm font-medium ${themeStyles.text}`}>
                      Revenue
                    </Typography>
                    <Typography className={`text-2xl font-bold ${themeStyles.text}`}>
                      $45,678
                    </Typography>
                  </div>
                  <div className={`p-3 rounded border ${themeStyles.paper}`}>
                    <Typography className={`text-sm font-medium ${themeStyles.text}`}>
                      Orders
                    </Typography>
                    <Typography className={`text-2xl font-bold ${themeStyles.text}`}>
                      890
                    </Typography>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Stack>
      </Section>
    </div>
  )
}

ThemeToggleShowcase.displayName = "ThemeToggleShowcase"