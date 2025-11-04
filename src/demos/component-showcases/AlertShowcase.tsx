import React, { useState } from 'react'
import { Alert } from '../../components/feedback'
import { Typography } from '../../components/core'
import { Button } from '../../components/forms'
import { ExternalLink, Download, Trash2, AlertTriangle } from 'lucide-react'

export const AlertShowcase: React.FC = () => {
  const [showDismissibleAlert, setShowDismissibleAlert] = useState(true)
  const [showCustomAlert, setShowCustomAlert] = useState(true)

  return (
    <div className="py-12 space-y-12">
      <div className="text-center space-y-4">
        <Typography variant="h1" className="text-gray-900">
          Alert Component
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600 max-w-3xl mx-auto">
          Flexible alert component with support for different variants, colors, sizes, and icons.
          Perfect for notifications, status messages, and user feedback.
        </Typography>
      </div>

      {/* Basic Alerts */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Basic Alerts
        </Typography>
        <div className="grid md:grid-cols-3 gap-4">
          <Alert 
            title="Default Alert"
            description="This is a default alert with standard styling."
          />
          <Alert 
            color="success"
            title="Success"
            description="Your changes have been saved successfully."
          />
          <Alert 
            color="warning"
            title="Warning"
            description="Please review your settings before proceeding."
          />
          <Alert 
            color="danger"
            title="Error"
            description="There was an error processing your request."
          />
          <Alert 
            color="info"
            title="Information"
            description="Here's some helpful information about this feature."
          />
        </div>
      </section>

      {/* Variants */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Variants
        </Typography>
        <div className="grid gap-6">
          {/* Default variant */}
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Default
            </Typography>
            <div className="grid md:grid-cols-3 gap-4">
              <Alert 
                color="primary"
                title="Primary Alert"
                description="Default variant with subtle background and border."
                variant="default"
              />
              <Alert 
                color="success"
                title="Success Alert"
                description="Default variant with success styling."
                variant="default"
              />
            </div>
          </div>

          {/* Filled variant */}
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Filled
            </Typography>
            <div className="grid md:grid-cols-3 gap-4">
              <Alert 
                color="primary"
                title="Primary Alert"
                description="Filled variant with solid background color."
                variant="filled"
              />
              <Alert 
                color="danger"
                title="Error Alert"
                description="Filled variant with error styling."
                variant="filled"
              />
            </div>
          </div>

          {/* Outline variant */}
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Outline
            </Typography>
            <div className="grid md:grid-cols-3 gap-4">
              <Alert 
                color="warning"
                title="Warning Alert"
                description="Outline variant with border emphasis."
                variant="outline"
              />
              <Alert 
                color="info"
                title="Info Alert"
                description="Outline variant with information styling."
                variant="outline"
              />
            </div>
          </div>

          {/* Soft variant */}
          <div className="space-y-4">
            <Typography variant="h3" className="text-gray-800">
              Soft
            </Typography>
            <div className="grid md:grid-cols-3 gap-4">
              <Alert 
                color="success"
                title="Success Alert"
                description="Soft variant with subtle background tint."
                variant="soft"
              />
              <Alert 
                color="accent"
                title="Accent Alert"
                description="Soft variant with accent color."
                variant="soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Sizes
        </Typography>
        <div className="grid md:grid-cols-3 gap-4">
          <Alert 
            size="sm"
            color="primary"
            title="Small Alert"
            description="Compact size for inline notifications."
          />
          <Alert 
            size="md"
            color="primary"
            title="Medium Alert (Default)"
            description="Standard size for most use cases with balanced spacing."
          />
          <Alert 
            size="lg"
            color="primary"
            title="Large Alert"
            description="Larger size for prominent notifications and important messages."
          />
        </div>
      </section>

      {/* With Actions */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          With Actions
        </Typography>
        <div className="space-y-4">
          <Alert 
            color="info"
            title="Update Available"
            description="A new version of the application is available for download."
            actions={
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="ghost" size="sm">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            }
          />
          <Alert 
            color="warning"
            variant="soft"
            title="Storage Almost Full"
            description="You're using 90% of your storage quota. Consider upgrading your plan."
            actions={
              <div className="flex gap-2">
                <Button variant="solid" size="sm" color="warning">
                  Upgrade Plan
                </Button>
                <Button variant="ghost" size="sm">
                  Manage Files
                </Button>
              </div>
            }
          />
        </div>
      </section>

      {/* Dismissible Alerts */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Dismissible Alerts
        </Typography>
        <div className="grid md:grid-cols-3 gap-4">
          {showDismissibleAlert && (
            <Alert 
              color="success"
              title="Dismissible Alert"
              description="Click the X button to dismiss this alert."
              dismissible
              onDismiss={() => setShowDismissibleAlert(false)}
            />
          )}
          {!showDismissibleAlert && (
            <div className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-200 rounded-sm">
              <Typography variant="body" className="text-gray-500">
                Alert was dismissed.
              </Typography>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowDismissibleAlert(true)}
              >
                Show Again
              </Button>
            </div>
          )}
          
          <Alert 
            color="danger"
            variant="filled"
            title="Error with Custom Close"
            description="This alert has a custom close button behavior."
            showCloseButton
            closeButton={
              <Button
                variant="ghost"
                size="sm"
                onClick={() => alert('Custom close action')}
                className="text-white hover:bg-white/10 -m-1"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            }
          />
        </div>
      </section>

      {/* Custom Icons */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Custom Icons
        </Typography>
        <div className="grid md:grid-cols-3 gap-4">
          <Alert 
            color="warning"
            title="Custom Icon Alert"
            description="This alert uses a custom icon instead of the default."
            icon={<AlertTriangle className="w-5 h-5 text-amber-500" />}
          />
          <Alert 
            color="primary"
            title="No Icon Alert"
            description="This alert has no icon displayed."
            showDefaultIcon={false}
          />
        </div>
      </section>

      {/* Complex Content */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Complex Content
        </Typography>
        <div className="space-y-4">
          {showCustomAlert && (
            <Alert 
              color="info"
              variant="default"
              size="lg"
              dismissible
              onDismiss={() => setShowCustomAlert(false)}
            >
              <Typography variant="h4" className="font-semibold text-gray-900 mb-2">
                Welcome to Paper Design System
              </Typography>
              <Typography variant="body" className="text-gray-700 mb-4">
                Get started with our comprehensive component library featuring:
              </Typography>
              <ul className="space-y-1 text-sm text-gray-600 mb-4">
                <li>• Responsive design components</li>
                <li>• Accessible by default</li>
                <li>• Paper theme integration</li>
                <li>• TypeScript support</li>
              </ul>
              <div className="flex gap-2">
                <Button variant="solid" size="sm" color="primary">
                  Get Started
                </Button>
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
              </div>
            </Alert>
          )}
          {!showCustomAlert && (
            <div className="flex items-center gap-3 p-4 border-2 border-dashed border-gray-200 rounded-sm">
              <Typography variant="body" className="text-gray-500">
                Complex alert was dismissed.
              </Typography>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowCustomAlert(true)}
              >
                Show Again
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-6">
        <Typography variant="h2" className="text-gray-900">
          Color Variants
        </Typography>
        <div className="grid gap-4">
          {/* Primary colors */}
          <div className="grid md:grid-cols-2 gap-4">
            <Alert color="primary" title="Primary" description="Primary color alert" variant="soft" />
            <Alert color="secondary" title="Secondary" description="Secondary color alert" variant="soft" />
            <Alert color="accent" title="Accent" description="Accent color alert" variant="soft" />
            <Alert color="paper" title="Paper" description="Paper theme color alert" variant="soft" />
          </div>
          
          {/* Status colors */}
          <div className="grid md:grid-cols-4 gap-4">
            <Alert color="success" title="Success" description="Success status" variant="outline" size="sm" />
            <Alert color="warning" title="Warning" description="Warning status" variant="outline" size="sm" />
            <Alert color="danger" title="Danger" description="Danger status" variant="outline" size="sm" />
            <Alert color="info" title="Info" description="Information" variant="outline" size="sm" />
          </div>
          
          {/* Tailwind colors */}
          <div className="grid md:grid-cols-3 gap-4">
            <Alert color="blue" title="Blue" description="Blue color" variant="filled" size="sm" />
            <Alert color="green" title="Green" description="Green color" variant="filled" size="sm" />
            <Alert color="purple" title="Purple" description="Purple color" variant="filled" size="sm" />
          </div>
        </div>
      </section>
    </div>
  )
}