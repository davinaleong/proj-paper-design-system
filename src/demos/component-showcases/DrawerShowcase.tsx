import { useState } from "react"
import { Menu, Settings, User, ShoppingCart, MessageSquare, Bell, ChevronRight } from "lucide-react"
import { Drawer } from "../../components/overlays"
import { Button } from "../../components/forms"
import { IconButton } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import { Stack, Divider } from "../../components/layout"
import type { ColorVariant } from "../../utils/colors"

export function DrawerShowcase() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Drawer
        </Typography>
        <Typography variant="body" color="muted">
          Slide-out panels with Paper styling, multiple positions, animations, and comprehensive trigger options.
        </Typography>
      </div>

      {/* Basic Usage */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Basic Usage</Typography>
        <div className="flex gap-4">
          <Drawer
            content={
              <div className="space-y-4">
                <Typography variant="h4">Welcome!</Typography>
                <Typography variant="body">
                  This is a basic drawer with default settings. It slides in from the right
                  and can be closed by clicking the overlay or pressing Escape.
                </Typography>
                <Button onClick={() => setBasicOpen(false)}>Close Drawer</Button>
              </div>
            }
            isOpen={basicOpen}
            onOpenChange={setBasicOpen}
            title="Basic Drawer"
          >
            <Button onClick={() => setBasicOpen(true)}>Open Basic Drawer</Button>
          </Drawer>
        </div>
      </Paper>

      {/* Position Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Position Variants</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Drawer
            content={
              <div className="space-y-4">
                <Typography variant="h4">Left Drawer</Typography>
                <Typography variant="body">
                  This drawer slides in from the left side of the screen.
                </Typography>
              </div>
            }
            position="left"
            title="Left Panel"
            variant="solid"
            color="primary"
          >
            <Button variant="outline" className="w-full">From Left</Button>
          </Drawer>

          <Drawer
            content={
              <div className="space-y-4">
                <Typography variant="h4">Right Drawer</Typography>
                <Typography variant="body">
                  This drawer slides in from the right side of the screen.
                </Typography>
              </div>
            }
            position="right"
            title="Right Panel"
            variant="solid"
            color="success"
          >
            <Button variant="outline" className="w-full">From Right</Button>
          </Drawer>

          <Drawer
            content={
              <div className="space-y-4">
                <Typography variant="h4">Top Drawer</Typography>
                <Typography variant="body">
                  This drawer slides down from the top of the screen.
                </Typography>
              </div>
            }
            position="top"
            title="Top Panel"
            variant="solid"
            color="warning"
            size="sm"
          >
            <Button variant="outline" className="w-full">From Top</Button>
          </Drawer>

          <Drawer
            content={
              <div className="space-y-4">
                <Typography variant="h4">Bottom Drawer</Typography>
                <Typography variant="body">
                  This drawer slides up from the bottom of the screen.
                </Typography>
              </div>
            }
            position="bottom"
            title="Bottom Panel"
            variant="solid"
            color="info"
            size="sm"
          >
            <Button variant="outline" className="w-full">From Bottom</Button>
          </Drawer>
        </div>
      </Paper>

      {/* Variant System */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Visual Variants</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <Drawer
            content={<div className="space-y-4">
              <Typography variant="h4">Solid Variant</Typography>
              <Typography variant="body">Strong presence with elevated background.</Typography>
            </div>}
            variant="solid"
            color="primary"
            title="Solid"
          >
            <Button variant="solid" size="sm" className="w-full">Solid</Button>
          </Drawer>

          <Drawer
            content={<div className="space-y-4">
              <Typography variant="h4">Outline Variant</Typography>
              <Typography variant="body">Border-focused with clean lines.</Typography>
            </div>}
            variant="outline"
            color="secondary"
            title="Outline"
          >
            <Button variant="outline" size="sm" className="w-full">Outline</Button>
          </Drawer>

          <Drawer
            content={<div className="space-y-4">
              <Typography variant="h4">Ghost Variant</Typography>
              <Typography variant="body">Minimal styling with subtle presence.</Typography>
            </div>}
            variant="ghost"
            color="neutral"
            title="Ghost"
          >
            <Button variant="ghost" size="sm" className="w-full">Ghost</Button>
          </Drawer>

          <Drawer
            content={<div className="space-y-4">
              <Typography variant="h4">Link Variant</Typography>
              <Typography variant="body">Text-focused appearance.</Typography>
            </div>}
            variant="link"
            color="info"
            title="Link"
          >
            <Button variant="link" size="sm" className="w-full">Link</Button>
          </Drawer>

          <Drawer
            content={<div className="space-y-4">
              <Typography variant="h4">Plain Variant</Typography>
              <Typography variant="body">Completely unstyled base.</Typography>
            </div>}
            variant="plain"
            color="paper"
            title="Plain"
          >
            <Button variant="plain" size="sm" className="w-full">Plain</Button>
          </Drawer>
        </div>
      </Paper>

      {/* Size Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Size Variants</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
            <Drawer
              key={size}
              content={
                <div className="space-y-4">
                  <Typography variant="h4">Size: {size.toUpperCase()}</Typography>
                  <Typography variant="body">
                    This drawer uses the {size} size variant.
                    {size === "full" && " It covers the entire viewport."}
                  </Typography>
                </div>
              }
              size={size}
              title={`${size.toUpperCase()} Size`}
            >
              <Button variant="outline" size="sm" className="w-full">
                {size.toUpperCase()}
              </Button>
            </Drawer>
          ))}
        </div>
      </Paper>

      {/* Animation Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Animation Variants</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {(["slide", "fade", "scale", "slideScale"] as const).map((animation) => (
            <Drawer
              key={animation}
              content={
                <div className="space-y-4">
                  <Typography variant="h4">{animation} Animation</Typography>
                  <Typography variant="body">
                    This drawer uses the {animation} animation effect.
                  </Typography>
                </div>
              }
              animation={animation}
              title={`${animation} Effect`}
              color="purple"
            >
              <Button variant="outline" size="sm" className="w-full">
                {animation}
              </Button>
            </Drawer>
          ))}
        </div>
      </Paper>

      {/* Trigger Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Trigger Variants</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Typography variant="h5">Click Trigger</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <Typography variant="h4">Click Triggered</Typography>
                  <Typography variant="body">
                    This drawer opens on click - the default behavior.
                  </Typography>
                </div>
              }
              trigger="click"
              title="Click Trigger"
            >
              <Button variant="solid" color="blue">Click to Open</Button>
            </Drawer>
          </div>

          <div className="space-y-2">
            <Typography variant="h5">Hover Trigger</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <Typography variant="h4">Hover Triggered</Typography>
                  <Typography variant="body">
                    This drawer opens on hover with a slight delay.
                  </Typography>
                </div>
              }
              trigger="hover"
              title="Hover Trigger"
            >
              <Button variant="solid" color="green">Hover to Open</Button>
            </Drawer>
          </div>

          <div className="space-y-2">
            <Typography variant="h5">Context Menu Trigger</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <Typography variant="h4">Context Menu</Typography>
                  <Typography variant="body">
                    This drawer opens on right-click or long-press.
                  </Typography>
                </div>
              }
              trigger="contextMenu"
              title="Context Menu"
            >
              <Button variant="solid" color="orange">Right-click to Open</Button>
            </Drawer>
          </div>
        </div>
      </Paper>

      {/* Real-world Examples */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Real-world Examples</Typography>
        
        {/* Navigation Drawer */}
        <div className="space-y-6">
          <div>
            <Typography variant="h4" className="mb-3">Navigation Drawer</Typography>
            <Drawer
              content={
                <nav className="space-y-2">
                  <div className="flex items-center gap-3 p-3 hover:bg-stone-100 rounded-lg cursor-pointer">
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-stone-100 rounded-lg cursor-pointer">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-stone-100 rounded-lg cursor-pointer">
                    <Bell className="w-5 h-5" />
                    <span>Notifications</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </div>
                  <Divider />
                  <div className="flex items-center gap-3 p-3 hover:bg-stone-100 rounded-lg cursor-pointer">
                    <MessageSquare className="w-5 h-5" />
                    <span>Help & Support</span>
                    <ChevronRight className="w-4 h-4 ml-auto" />
                  </div>
                </nav>
              }
              isOpen={navOpen}
              onOpenChange={setNavOpen}
              position="left"
              title="Navigation"
              variant="solid"
              color="primary"
              size="md"
            >
              <IconButton 
                icon={Menu} 
                variant="outline"
                onClick={() => setNavOpen(true)}
                aria-label="Open navigation"
              />
            </Drawer>
          </div>

          {/* Settings Panel */}
          <div>
            <Typography variant="h4" className="mb-3">Settings Panel</Typography>
            <Drawer
              content={
                <div className="space-y-6">
                  <div>
                    <Typography variant="h5" className="mb-3">Appearance</Typography>
                    <Stack direction="column" gap="sm">
                      <div className="flex items-center justify-between">
                        <span>Dark Mode</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Compact View</span>
                        <input type="checkbox" className="rounded" />
                      </div>
                    </Stack>
                  </div>
                  
                  <Divider />
                  
                  <div>
                    <Typography variant="h5" className="mb-3">Notifications</Typography>
                    <Stack direction="column" gap="sm">
                      <div className="flex items-center justify-between">
                        <span>Email Notifications</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Push Notifications</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    </Stack>
                  </div>

                  <Divider />

                  <div className="flex gap-2">
                    <Button variant="solid" size="sm">Save Changes</Button>
                    <Button variant="outline" size="sm" onClick={() => setSettingsOpen(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              }
              isOpen={settingsOpen}
              onOpenChange={setSettingsOpen}
              position="right"
              title="Settings"
              variant="outline"
              color="secondary"
              size="lg"
            >
              <Button 
                variant="ghost" 
                icon={Settings}
                onClick={() => setSettingsOpen(true)}
              >
                Settings
              </Button>
            </Drawer>
          </div>

          {/* Shopping Cart (Bottom Sheet Style) */}
          <div>
            <Typography variant="h4" className="mb-3">Shopping Cart (Mobile Style)</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div>
                        <div className="font-medium">Premium T-Shirt</div>
                        <div className="text-sm text-stone-600">Size: M, Color: Blue</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$29.99</div>
                        <div className="text-sm text-stone-600">Qty: 1</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
                      <div>
                        <div className="font-medium">Comfort Jeans</div>
                        <div className="text-sm text-stone-600">Size: 32, Color: Dark Blue</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">$59.99</div>
                        <div className="text-sm text-stone-600">Qty: 1</div>
                      </div>
                    </div>
                  </div>

                  <Divider />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$89.98</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>$99.97</span>
                    </div>
                  </div>

                  <Button variant="solid" color="success" className="w-full">
                    Proceed to Checkout
                  </Button>
                </div>
              }
              position="bottom"
              title="Shopping Cart"
              variant="solid"
              color="neutral"
              size="sm"
              animation="slideScale"
            >
              <Button variant="solid" icon={ShoppingCart} color="success">
                View Cart (2)
              </Button>
            </Drawer>
          </div>
        </div>
      </Paper>

      {/* Color Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Color Variants</Typography>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "primary", "secondary", "success", "warning", "danger", "info",
            "red", "orange", "green", "blue", "purple", "pink"
          ].map((color) => (
            <Drawer
              key={color}
              content={
                <div className="space-y-4">
                  <Typography variant="h4" className="capitalize">{color}</Typography>
                  <Typography variant="body">
                    This drawer uses the {color} color theme.
                  </Typography>
                </div>
              }
              color={color as ColorVariant}
              title={color.charAt(0).toUpperCase() + color.slice(1)}
              variant="solid"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full capitalize"
                color={color as ColorVariant}
              >
                {color}
              </Button>
            </Drawer>
          ))}
        </div>
      </Paper>

      {/* Configuration Options */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Configuration Options</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Typography variant="h5">Without Overlay</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <Typography variant="h4">No Background Overlay</Typography>
                  <Typography variant="body">
                    This drawer doesn't dim the background content.
                  </Typography>
                </div>
              }
              overlay={false}
              title="No Overlay"
            >
              <Button variant="outline">No Overlay</Button>
            </Drawer>
          </div>

          <div className="space-y-4">
            <Typography variant="h5">No Close Button</Typography>
            <Drawer
              content={
                <div className="space-y-4">
                  <Typography variant="h4">No Close Button</Typography>
                  <Typography variant="body">
                    You can only close this by clicking outside or pressing Escape.
                  </Typography>
                </div>
              }
              dismissible={{ closeButton: false, clickOutside: true, escapeKey: true }}
              title="Manual Close Only"
            >
              <Button variant="outline">No Close Button</Button>
            </Drawer>
          </div>
        </div>
      </Paper>
    </div>
  )
}