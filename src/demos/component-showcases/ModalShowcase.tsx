import { useState } from "react"
import { Settings, FileText, Heart, Download, Bell, User, Mail, Calendar } from "lucide-react"
import { Paper, Typography } from "../../components/core"
import { Button } from "../../components/forms"
import { Modal } from "../../components/feedback"
import type { ModalState, ModalVariant } from "../../components/feedback/Modal/types"
import type { ColorVariant } from "../../utils/colors"

export function ModalShowcase() {
  const [basicModal, setBasicModal] = useState(false)
  const [styledModals, setStyledModals] = useState<Record<string, boolean>>({})
  const [sizeModals, setSizeModals] = useState<Record<string, boolean>>({})
  const [taskbarModals, setTaskbarModals] = useState<Record<string, ModalState>>({})

  const toggleStyledModal = (key: string) => {
    setStyledModals(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleSizeModal = (key: string) => {
    setSizeModals(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const setTaskbarModal = (key: string, state: ModalState) => {
    setTaskbarModals(prev => ({ ...prev, [key]: state }))
  }

  const variants: ModalVariant[] = ["solid", "outline", "ghost", "elevated"]
  const colors: ColorVariant[] = ["primary", "secondary", "success", "warning", "danger", "info"]
  const sizes = [
    { key: "xs", label: "Extra Small" },
    { key: "sm", label: "Small" },
    { key: "md", label: "Medium" },
    { key: "lg", label: "Large" },
    { key: "xl", label: "Extra Large" }
  ]

  return (
    <Paper className="p-8 my-8">
      <div className="space-y-12">
        {/* Header */}
        <div>
          <Typography variant="h2" className="text-stone-900 mb-2">
            Modal Component
          </Typography>
          <Typography variant="body" className="text-stone-600">
            Flexible modal component with Paper design system styling, multiple variants, color options, 
            and taskbar-style minimize functionality.
          </Typography>
        </div>

        {/* Basic Modal */}
        <div>
          <Typography variant="h3" className="mb-6">
            Basic Modal
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Standard modal with header, body, and footer. Includes minimize, maximize, and close controls.
          </Typography>
          
          <Button 
            variant="solid" 
            color="primary"
            onClick={() => setBasicModal(true)}
          >
            Open Basic Modal
          </Button>

          <Modal
            open={basicModal}
            title="Welcome to Modal"
            description="This is a basic modal example"
            icon={Settings}
            onClose={() => setBasicModal(false)}
            footer={
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setBasicModal(false)}>
                  Cancel
                </Button>
                <Button variant="solid" color="primary" onClick={() => setBasicModal(false)}>
                  Confirm
                </Button>
              </div>
            }
          >
            <div className="space-y-4">
              <Typography variant="body">
                This is the modal body content. You can place any content here including forms, 
                text, images, or other components.
              </Typography>
              <Typography variant="body">
                The modal automatically handles backdrop clicks, escape key presses, and provides 
                minimize/maximize functionality.
              </Typography>
            </div>
          </Modal>
        </div>

        {/* Variants and Colors */}
        <div>
          <Typography variant="h3" className="mb-6">
            Variants & Colors
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Different visual styles and color themes following the button component patterns.
          </Typography>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {variants.map((variant) => (
              <Button 
                key={variant}
                variant="outline" 
                onClick={() => toggleStyledModal(`variant-${variant}`)}
                className="capitalize"
              >
                {variant}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {colors.map((color) => (
              <Button 
                key={color}
                variant="solid"
                color={color}
                onClick={() => toggleStyledModal(`color-${color}`)}
                className="capitalize"
              >
                {color}
              </Button>
            ))}
          </div>

          {/* Variant Modals */}
          {variants.map((variant) => (
            <Modal
              key={`variant-${variant}`}
              open={styledModals[`variant-${variant}`] || false}
              title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Modal`}
              description={`This modal uses the ${variant} variant`}
              variant={variant}
              icon={FileText}
              onClose={() => toggleStyledModal(`variant-${variant}`)}
              footer={
                <div className="flex justify-end">
                  <Button 
                    variant="outline"
                    onClick={() => toggleStyledModal(`variant-${variant}`)}
                  >
                    Close
                  </Button>
                </div>
              }
            >
              <Typography variant="body">
                This modal demonstrates the <strong>{variant}</strong> variant styling. 
                Each variant provides a different visual appearance while maintaining 
                consistent functionality.
              </Typography>
            </Modal>
          ))}

          {/* Color Modals */}
          {colors.map((color) => (
            <Modal
              key={`color-${color}`}
              open={styledModals[`color-${color}`] || false}
              title={`${color.charAt(0).toUpperCase() + color.slice(1)} Theme`}
              description={`Modal with ${color} color theme`}
              variant="solid"
              color={color}
              icon={Heart}
              onClose={() => toggleStyledModal(`color-${color}`)}
              footer={
                <div className="flex justify-end">
                  <Button 
                    variant="solid"
                    color={color}
                    onClick={() => toggleStyledModal(`color-${color}`)}
                  >
                    Close
                  </Button>
                </div>
              }
            >
              <Typography variant="body">
                This modal uses the <strong>{color}</strong> color theme with automatic 
                text color optimization for accessibility compliance.
              </Typography>
            </Modal>
          ))}
        </div>

        {/* Sizes */}
        <div>
          <Typography variant="h3" className="mb-6">
            Modal Sizes
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Different size options to fit various content needs.
          </Typography>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {sizes.map(({ key, label }) => (
              <Button 
                key={key}
                variant="outline" 
                onClick={() => toggleSizeModal(key)}
                size="sm"
              >
                {label}
              </Button>
            ))}
          </div>

          {sizes.map(({ key, label }) => (
            <Modal
              key={`size-${key}`}
              open={sizeModals[key] || false}
              title={`${label} Modal`}
              description={`Size: ${key}`}
              size={key as "xs" | "sm" | "md" | "lg" | "xl"}
              icon={Download}
              onClose={() => toggleSizeModal(key)}
            >
              <Typography variant="body">
                This is a <strong>{label.toLowerCase()}</strong> modal. The content area 
                adjusts to fit the specified size while maintaining proper proportions.
              </Typography>
            </Modal>
          ))}
        </div>

        {/* Taskbar/Minimize Demo */}
        <div>
          <Typography variant="h3" className="mb-6">
            Taskbar & Minimize
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-4">
            Modals can be minimized to a taskbar-style interface at the bottom left of the screen.
          </Typography>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              variant="solid"
              color="primary"
              icon={Bell}
              onClick={() => setTaskbarModal("notifications", "open")}
            >
              Notifications
            </Button>
            <Button 
              variant="solid"
              color="success"
              icon={User}
              onClick={() => setTaskbarModal("profile", "open")}
            >
              Profile
            </Button>
            <Button 
              variant="solid"
              color="warning"
              icon={Mail}
              onClick={() => setTaskbarModal("messages", "open")}
            >
              Messages
            </Button>
            <Button 
              variant="solid"
              color="info"
              icon={Calendar}
              onClick={() => setTaskbarModal("calendar", "open")}
            >
              Calendar
            </Button>
          </div>

          <div className="mt-4 p-4 bg-stone-50 rounded-lg">
            <Typography variant="small" className="text-stone-600">
              <strong>Tip:</strong> Click the minimize button (—) in any modal header to minimize it to the taskbar. 
              Click the taskbar item to restore the modal.
            </Typography>
          </div>

          {/* Taskbar Modals */}
          <Modal
            state={taskbarModals.notifications || "closed"}
            title="Notifications"
            description="Your recent notifications"
            icon={Bell}
            color="primary"
            onStateChange={(state) => setTaskbarModal("notifications", state)}
            footer={
              <div className="flex justify-between">
                <Button variant="outline" size="sm">Mark All Read</Button>
                <Button variant="solid" color="primary" size="sm">
                  Settings
                </Button>
              </div>
            }
          >
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-3 bg-stone-50 rounded border-l-4 border-blue-500">
                  <Typography variant="small" className="font-medium">
                    New notification {i}
                  </Typography>
                  <Typography variant="small" className="text-stone-600">
                    This is a sample notification message.
                  </Typography>
                </div>
              ))}
            </div>
          </Modal>

          <Modal
            state={taskbarModals.profile || "closed"}
            title="User Profile"
            description="Edit your profile information"
            icon={User}
            color="success"
            onStateChange={(state) => setTaskbarModal("profile", state)}
          >
            <div className="space-y-4">
              <div>
                <Typography variant="small" className="font-medium text-stone-700 mb-1">
                  Name
                </Typography>
                <div className="p-2 bg-stone-50 rounded">John Doe</div>
              </div>
              <div>
                <Typography variant="small" className="font-medium text-stone-700 mb-1">
                  Email
                </Typography>
                <div className="p-2 bg-stone-50 rounded">john@example.com</div>
              </div>
            </div>
          </Modal>

          <Modal
            state={taskbarModals.messages || "closed"}
            title="Messages"
            description="Your message inbox"
            icon={Mail}
            color="warning"
            onStateChange={(state) => setTaskbarModal("messages", state)}
          >
            <Typography variant="body">
              Message interface would go here. This modal can be minimized and restored 
              from the taskbar at the bottom left.
            </Typography>
          </Modal>

          <Modal
            state={taskbarModals.calendar || "closed"}
            title="Calendar"
            description="Your schedule and events"
            icon={Calendar}
            color="info"
            size="lg"
            onStateChange={(state) => setTaskbarModal("calendar", state)}
          >
            <Typography variant="body">
              Calendar view would be displayed here. This is a larger modal to accommodate 
              more complex content like calendar grids.
            </Typography>
          </Modal>
        </div>
      </div>
    </Paper>
  )
}