import { useState } from "react"
import { AlertTriangle, HelpCircle, Trash2, Save, Download, LogOut, Settings, Shield } from "lucide-react"
import { Paper, Typography } from "../../components/core"
import { Button } from "../../components/forms"
import { ConfirmationDialog } from "../../components/feedback"
import type { ConfirmationDialogVariant, ConfirmationDialogAction } from "../../components/feedback/ConfirmationDialog/types"
import type { ColorVariant } from "../../utils/colors"

export function ConfirmationDialogShowcase() {
  const [basicDialog, setBasicDialog] = useState(false)
  const [variantDialogs, setVariantDialogs] = useState<Record<string, boolean>>({})
  const [colorDialogs, setColorDialogs] = useState<Record<string, boolean>>({})
  const [actionDialogs, setActionDialogs] = useState<Record<string, boolean>>({})
  const [lastAction, setLastAction] = useState<string>("")

  const toggleVariantDialog = (key: string) => {
    setVariantDialogs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleColorDialog = (key: string) => {
    setColorDialogs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleActionDialog = (key: string) => {
    setActionDialogs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleAction = (action: ConfirmationDialogAction, context: string) => {
    setLastAction(`${context}: ${action}`)
    console.log(`Action taken - ${context}:`, action)
  }

  const variants: ConfirmationDialogVariant[] = ["solid", "outline", "ghost", "elevated"]
  const colors: ColorVariant[] = ["primary", "secondary", "success", "warning", "danger", "info"]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h3" className="text-stone-900 mb-2">
          Confirmation Dialog
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Modal dialogs for confirming user actions using native HTML dialog element.
        </Typography>
      </div>

      {/* Last Action Indicator */}
      {lastAction && (
        <Paper className="p-4 bg-green-50 border-green-200">
          <Typography variant="small" className="text-green-800 font-mono">
            Last Action: {lastAction}
          </Typography>
        </Paper>
      )}

      {/* Basic Example */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Basic Confirmation Dialog
        </Typography>
        <div className="flex gap-3 mb-4">
          <Button onClick={() => setBasicDialog(true)}>
            Open Basic Dialog
          </Button>
        </div>

        <ConfirmationDialog
          open={basicDialog}
          title="Confirm Action"
          message="Are you sure you want to proceed with this action? This action cannot be undone."
          icon={HelpCircle}
          onAction={(action) => {
            handleAction(action, "Basic Dialog")
            setBasicDialog(false)
          }}
        />
      </section>

      {/* Variant Examples */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Dialog Variants
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {variants.map((variant) => (
            <Button
              key={variant}
              variant="outline"
              onClick={() => toggleVariantDialog(variant)}
              className="capitalize"
            >
              {variant}
            </Button>
          ))}
        </div>

        {variants.map((variant) => (
          <ConfirmationDialog
            key={variant}
            open={variantDialogs[variant] || false}
            variant={variant}
            title={`${variant} Dialog`}
            message={`This is a ${variant} variant confirmation dialog with Paper Design System styling.`}
            icon={Settings}
            onAction={(action) => {
              handleAction(action, `${variant} variant`)
              setVariantDialogs(prev => ({ ...prev, [variant]: false }))
            }}
          />
        ))}
      </section>

      {/* Color Examples */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Color Variants
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {colors.map((color) => (
            <Button
              key={color}
              variant="outline"
              color={color}
              onClick={() => toggleColorDialog(color)}
              className="capitalize"
            >
              {color}
            </Button>
          ))}
        </div>

        {colors.map((color) => (
          <ConfirmationDialog
            key={color}
            open={colorDialogs[color] || false}
            variant="solid"
            color={color}
            title={`${color} Dialog`}
            message={`This dialog uses the ${color} color variant with automatic text contrast optimization.`}
            icon={Shield}
            onAction={(action) => {
              handleAction(action, `${color} color`)
              setColorDialogs(prev => ({ ...prev, [color]: false }))
            }}
          />
        ))}
      </section>

      {/* Action Button Configurations */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Action Button Configurations
        </Typography>
        
        <div className="space-y-4">
          {/* Delete Confirmation */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              Delete Confirmation (Yes/Cancel)
            </Typography>
            <Button
              variant="outline"
              color="danger"
              icon={Trash2}
              onClick={() => toggleActionDialog("delete")}
            >
              Delete Item
            </Button>
          </div>

          {/* Save Confirmation */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              Save Confirmation (Yes/No/Cancel)
            </Typography>
            <Button
              variant="outline"
              color="primary"
              icon={Save}
              onClick={() => toggleActionDialog("save")}
            >
              Save Changes
            </Button>
          </div>

          {/* Download Confirmation */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              Download Confirmation (Yes/No)
            </Typography>
            <Button
              variant="outline"
              color="info"
              icon={Download}
              onClick={() => toggleActionDialog("download")}
            >
              Download File
            </Button>
          </div>

          {/* Logout Confirmation */}
          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              Logout Confirmation (Custom Text)
            </Typography>
            <Button
              variant="outline"
              color="warning"
              icon={LogOut}
              onClick={() => toggleActionDialog("logout")}
            >
              Sign Out
            </Button>
          </div>
        </div>

        {/* Delete Dialog */}
        <ConfirmationDialog
          open={actionDialogs.delete || false}
          variant="elevated"
          color="danger"
          title="Delete Item"
          message="This item will be permanently deleted. This action cannot be undone."
          icon={Trash2}
          showYes={true}
          showNo={false}
          showCancel={true}
          yesText="Delete"
          yesColor="danger"
          onAction={(action) => {
            handleAction(action, "Delete confirmation")
            setActionDialogs(prev => ({ ...prev, delete: false }))
          }}
        />

        {/* Save Dialog */}
        <ConfirmationDialog
          open={actionDialogs.save || false}
          variant="elevated"
          color="primary"
          title="Save Changes"
          message="Do you want to save your changes before continuing?"
          icon={Save}
          showYes={true}
          showNo={true}
          showCancel={true}
          yesText="Save"
          noText="Don't Save"
          onAction={(action) => {
            handleAction(action, "Save confirmation")
            setActionDialogs(prev => ({ ...prev, save: false }))
          }}
        />

        {/* Download Dialog */}
        <ConfirmationDialog
          open={actionDialogs.download || false}
          variant="elevated"
          color="info"
          title="Download File"
          message="Start downloading this file to your device?"
          icon={Download}
          showYes={true}
          showNo={true}
          showCancel={false}
          yesText="Download"
          noText="Not Now"
          onAction={(action) => {
            handleAction(action, "Download confirmation")
            setActionDialogs(prev => ({ ...prev, download: false }))
          }}
        />

        {/* Logout Dialog */}
        <ConfirmationDialog
          open={actionDialogs.logout || false}
          variant="elevated"
          color="warning"
          title="Sign Out"
          message="Are you sure you want to sign out of your account?"
          icon={LogOut}
          showYes={true}
          showNo={false}
          showCancel={true}
          yesText="Sign Out"
          cancelText="Stay Signed In"
          yesColor="warning"
          onAction={(action) => {
            handleAction(action, "Logout confirmation")
            setActionDialogs(prev => ({ ...prev, logout: false }))
          }}
        />
      </section>

      {/* Advanced Examples */}
      <section>
        <Typography variant="h4" className="text-stone-800 mb-4">
          Advanced Features
        </Typography>
        
        <div className="space-y-4">
          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              Custom Content
            </Typography>
            <Button
              variant="outline"
              onClick={() => toggleActionDialog("custom")}
            >
              Custom Dialog Content
            </Button>
          </div>

          <div>
            <Typography variant="h5" className="text-stone-700 mb-2">
              No Backdrop Dismiss
            </Typography>
            <Button
              variant="outline"
              onClick={() => toggleActionDialog("noBackdrop")}
            >
              Static Backdrop
            </Button>
          </div>
        </div>

        {/* Custom Content Dialog */}
        <ConfirmationDialog
          open={actionDialogs.custom || false}
          variant="elevated"
          color="paper"
          title="Custom Content"
          icon={AlertTriangle}
          onAction={(action) => {
            handleAction(action, "Custom content")
            setActionDialogs(prev => ({ ...prev, custom: false }))
          }}
        >
          <div className="space-y-3">
            <Typography variant="body" className="text-stone-700">
              This dialog contains custom content instead of a simple message.
            </Typography>
            <Paper className="p-3 bg-yellow-50 border-yellow-200">
              <Typography variant="small" className="text-yellow-800">
                <strong>Warning:</strong> This action will affect multiple items.
              </Typography>
            </Paper>
            <ul className="list-disc list-inside space-y-1 text-sm text-stone-600">
              <li>3 files will be modified</li>
              <li>2 database records will be updated</li>
              <li>1 notification will be sent</li>
            </ul>
          </div>
        </ConfirmationDialog>

        {/* No Backdrop Dismiss Dialog */}
        <ConfirmationDialog
          open={actionDialogs.noBackdrop || false}
          variant="elevated"
          color="danger"
          title="Critical Action"
          message="This is a critical action that requires explicit confirmation. You cannot dismiss this dialog by clicking outside."
          icon={AlertTriangle}
          backdrop="static"
          closeOnBackdropClick={false}
          closeOnEscape={false}
          showYes={true}
          showNo={false}
          showCancel={true}
          yesText="I Understand"
          cancelText="Cancel"
          yesColor="danger"
          onAction={(action) => {
            handleAction(action, "Static backdrop")
            setActionDialogs(prev => ({ ...prev, noBackdrop: false }))
          }}
        />
      </section>
    </div>
  )
}