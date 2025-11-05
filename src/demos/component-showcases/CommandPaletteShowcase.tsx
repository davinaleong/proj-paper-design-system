import { Typography } from "../../components/core"

export function CommandPaletteShowcase() {
  return (
    <div id="command-palette" className="space-y-8">
      <div>
        <Typography variant="h3" className="mb-4">
          Command Palette
        </Typography>

        <Typography variant="body" className="text-stone-600 mb-6">
          Keyboard-driven command interface for quick navigation and actions. Press Ctrl/Cmd+K to open the global command palette.
        </Typography>

        {/* Basic Command Palette */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Basic Command Palette
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <div className="mb-4">
              <Typography variant="body" className="text-stone-600 mb-4">
                A simple command palette with basic navigation and action commands.
              </Typography>
            </div>

            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                The global command palette is available throughout the application. 
                Press <kbd className="px-2 py-1 bg-white border border-stone-200 rounded text-sm">Ctrl+K</kbd> or 
                <kbd className="px-2 py-1 bg-white border border-stone-200 rounded text-sm">Cmd+K</kbd> to open it.
              </Typography>
            </div>
          </div>
        </div>

        {/* Advanced Commands Demo */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Advanced Commands
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <Typography variant="body" className="text-stone-600 mb-4">
              Advanced command palette with grouped commands, icons, and shortcuts.
            </Typography>
            
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                Features include:
                <br />• Fuzzy search across all commands
                <br />• Keyboard shortcuts display
                <br />• Command groups and categories  
                <br />• Recent commands history
                <br />• Custom action handlers
              </Typography>
            </div>
          </div>
        </div>

        {/* Theme Switching Demo */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Theme & Settings Commands
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <Typography variant="body" className="text-stone-600 mb-4">
              Use the command palette to quickly access theme settings and preferences.
            </Typography>
            
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                Available settings commands:
                <br />• Switch between light/dark themes
                <br />• Change color schemes
                <br />• Toggle interface preferences
                <br />• Reset to defaults
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}