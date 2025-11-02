import { useState } from "react"
import { Paper, Typography, Brand } from "../../components/core"
import { Navbar, Sidebar, Breadcrumbs, Tabs, Pagination, Stepper, CommandPalette, Menu, TreeView } from "../../components/navigation"
import { Home, Users, Settings, Bell, Search, FileText, Calendar, Mail, BarChart3, Zap, Shield, FolderOpen, File, Database, Globe, User, CreditCard, CheckCircle, Copy, Edit, Trash2, Plus, Download, Share, Heart, Star, Bookmark, MessageSquare, Code, Package, GitBranch, Folder, Image, Video, Music, X } from "lucide-react"

export function NavigationShowcase() {
  // Sample navigation items
  const navItems = [
    { id: "home", label: "Home", href: "#overview", icon: Home },
    { id: "about", label: "About", href: "#typography", icon: Users },
    { 
      id: "services", 
      label: "Services", 
      icon: Settings,
      children: [
        { id: "design", label: "Design", href: "#ui-primitives" },
        { id: "development", label: "Development", href: "#form-controls" },
        { id: "consulting", label: "Consulting", href: "#data-display" },
      ]
    },
    { id: "contact", label: "Contact", href: "#navigation", icon: Bell, badge: "New" },
  ]

  // Sample sidebar items
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", href: "#overview", icon: Home },
    { id: "projects", label: "Projects", href: "#projects", icon: FileText, badge: 3 },
    { 
      id: "team", 
      label: "Team", 
      icon: Users,
      children: [
        { id: "members", label: "Members", href: "#members" },
        { id: "roles", label: "Roles", href: "#roles" },
        { id: "permissions", label: "Permissions", href: "#permissions" },
      ]
    },
    { id: "calendar", label: "Calendar", href: "#calendar", icon: Calendar },
    { id: "messages", label: "Messages", href: "#messages", icon: Mail, badge: "12" },
    { id: "analytics", label: "Analytics", href: "#analytics", icon: BarChart3 },
    { 
      id: "admin", 
      label: "Administration", 
      icon: Shield,
      children: [
        { id: "settings", label: "Settings", href: "#settings", icon: Settings },
        { id: "integrations", label: "Integrations", href: "#integrations", icon: Zap },
        { id: "security", label: "Security", href: "#security" },
      ]
    },
  ]

  // Command Palette demo helper component
  function CommandPaletteDemoCard() {
    const [open, setOpen] = useState(false)

    const sampleCommands = [
      {
        id: "open-settings",
        name: "Open Settings",
        description: "Open the settings panel",
        shortcut: ["S"],
        execute: () => window.alert("Settings opened"),
      },
      {
        id: "go-home",
        name: "Go to Home",
        description: "Scroll to the overview section",
        shortcut: ["H"],
        execute: () => {
          const el = document.querySelector('#overview')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        },
      },
      {
        id: "create-item",
        name: "Create New Item",
        description: "Open create item dialog",
        shortcut: ["N"],
        execute: () => window.alert('Create item'),
      },
    ]

    return (
      <div className="p-4 border border-stone-200 rounded-lg flex flex-col gap-3">
        <div>
          <Typography variant="h4" className="mb-2">Command Palette</Typography>
          <Typography variant="body" className="text-stone-600 text-sm">Keyboard-driven navigation (press Ctrl/Cmd+K)</Typography>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded text-sm"
          >
            Open Palette
          </button>
          <div className="text-xs text-stone-500">or press <Typography variant="kbd" as="span">⌘K</Typography> / <Typography variant="kbd" as="span">Ctrl+K</Typography></div>
        </div>

        {open && (
          <CommandPalette
            commands={sampleCommands}
            initialOpen={true}
            onOpenChange={(o) => setOpen(o)}
          />
        )}
      </div>
    )
  }

  // Advanced Command Palette Demo
  function AdvancedCommandPaletteDemo() {
    const [open, setOpen] = useState(false)

    const advancedCommands = [
      {
        id: "quick-search",
        name: "Quick Search",
        description: "Search across all content and files",
        shortcut: ["Ctrl", "F"],
        execute: () => window.alert('Opening quick search...'),
      },
      {
        id: "global-nav",
        name: "Go to Dashboard",
        description: "Navigate to the main dashboard",
        shortcut: ["G", "D"],
        execute: () => window.alert('Navigating to dashboard...'),
      },
      {
        id: "user-profile",
        name: "View Profile",
        description: "Open your user profile settings",
        shortcut: ["G", "P"],
        execute: () => window.alert('Opening profile...'),
      },
      {
        id: "help-center",
        name: "Help & Support",
        description: "Access documentation and support",
        shortcut: ["?"],
        execute: () => window.alert('Opening help center...'),
      },
      {
        id: "feedback",
        name: "Send Feedback",
        description: "Report bugs or suggest features",
        execute: () => window.alert('Opening feedback form...'),
      },
      {
        id: "keyboard-shortcuts",
        name: "Keyboard Shortcuts",
        description: "View all available keyboard shortcuts",
        shortcut: ["Ctrl", "?"],
        execute: () => window.alert('Showing shortcuts...'),
      },
    ]

    return (
      <div className="space-y-4">
        <div>
          <Typography variant="body" className="text-stone-600 mb-4">
            Extended command palette with navigation, search, and utility commands with multi-key shortcuts.
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-sm font-medium"
          >
            Open Advanced Palette
          </button>
          <Typography variant="caption" className="text-stone-500">
            Try searching "profile", "help", or "nav"
          </Typography>
        </div>

        {open && (
          <CommandPalette
            commands={advancedCommands}
            placeholder="Search commands and actions..."
            initialOpen={true}
            onOpenChange={(o) => setOpen(o)}
          />
        )}
      </div>
    )
  }

  // Theme Command Palette Demo  
  function ThemeCommandPaletteDemo() {
    const [open, setOpen] = useState(false)
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>('light')

    const themeCommands = [
      {
        id: "theme-light",
        name: "Switch to Light Theme",
        description: "Use light mode for the interface",
        shortcut: ["T", "L"],
        execute: () => {
          setCurrentTheme('light')
          window.alert('Switched to light theme')
        },
      },
      {
        id: "theme-dark",
        name: "Switch to Dark Theme", 
        description: "Use dark mode for the interface",
        shortcut: ["T", "D"],
        execute: () => {
          setCurrentTheme('dark')
          window.alert('Switched to dark theme')
        },
      },
      {
        id: "theme-auto",
        name: "Auto Theme",
        description: "Follow system theme preference",
        shortcut: ["T", "A"],
        execute: () => {
          setCurrentTheme('auto')
          window.alert('Using system theme')
        },
      },
      {
        id: "settings-notifications",
        name: "Notification Settings",
        description: "Configure notification preferences",
        execute: () => window.alert('Opening notification settings...'),
      },
      {
        id: "settings-privacy",
        name: "Privacy Settings",
        description: "Manage privacy and data settings",
        execute: () => window.alert('Opening privacy settings...'),
      },
      {
        id: "settings-accessibility",
        name: "Accessibility Settings",
        description: "Configure accessibility options",
        execute: () => window.alert('Opening accessibility settings...'),
      },
    ]

    return (
      <div className="space-y-4">
        <div>
          <Typography variant="body" className="text-stone-600 mb-2">
            Theme switching and settings commands with state management.
          </Typography>
          <Typography variant="caption" className="text-stone-500">
            Current theme: <span className="font-medium">{currentTheme}</span>
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded text-sm font-medium"
          >
            Open Theme Settings
          </button>
          <Typography variant="caption" className="text-stone-500">
            Try "theme", "dark", "notifications"
          </Typography>
        </div>

        {open && (
          <CommandPalette
            commands={themeCommands}
            placeholder="Search settings and theme options..."
            initialOpen={true}
            onOpenChange={(o) => setOpen(o)}
          />
        )}
      </div>
    )
  }

  // Developer Command Palette Demo
  function DeveloperCommandPaletteDemo() {
    const [open, setOpen] = useState(false)

    const devCommands = [
      {
        id: "console-log",
        name: "Open Browser Console",
        description: "Open developer tools console",
        shortcut: ["F12"],
        execute: () => {
          console.log('Command palette demo - opening console')
          window.alert('Check browser console (F12)')
        },
      },
      {
        id: "reload-page",
        name: "Reload Page",
        description: "Refresh the current page",
        shortcut: ["Ctrl", "R"],
        execute: () => window.location.reload(),
      },
      {
        id: "clear-cache",
        name: "Clear Cache",
        description: "Clear browser cache and reload",
        shortcut: ["Ctrl", "Shift", "R"],
        execute: () => {
          window.alert('Clearing cache and reloading...')
          window.location.reload()
        },
      },
      {
        id: "inspect-element",
        name: "Inspect Element",
        description: "Enable element inspector",
        execute: () => window.alert('Element inspector activated'),
      },
      {
        id: "view-source",
        name: "View Page Source",
        description: "View HTML source code",
        shortcut: ["Ctrl", "U"],
        execute: () => window.alert('Opening page source...'),
      },
      {
        id: "performance",
        name: "Performance Monitor",
        description: "Open performance analysis tools",
        execute: () => {
          console.log('Performance monitoring started')
          window.alert('Performance monitor opened (check console)')
        },
      },
      {
        id: "network-tab",
        name: "Network Analysis",
        description: "Monitor network requests",
        execute: () => window.alert('Opening network analysis...'),
      },
    ]

    return (
      <div className="space-y-4">
        <div>
          <Typography variant="body" className="text-stone-600 mb-4">
            Developer-focused commands for debugging, performance monitoring, and development tasks.
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded text-sm font-medium"
          >
            Open Dev Tools
          </button>
          <Typography variant="caption" className="text-stone-500">
            Try "console", "reload", "performance"
          </Typography>
        </div>

        {open && (
          <CommandPalette
            commands={devCommands}
            placeholder="Search developer commands..."
            initialOpen={true}
            onOpenChange={(o) => setOpen(o)}
          />
        )}
      </div>
    )
  }

  // File Navigation Command Demo
  function FileNavigationCommandDemo() {
    const [open, setOpen] = useState(false)

    const fileCommands = [
      {
        id: "recent-files",
        name: "Recent Files",
        description: "View recently opened files",
        shortcut: ["Ctrl", "Shift", "T"],
        execute: () => window.alert('Showing recent files...'),
      },
      {
        id: "file-search",
        name: "Search Files",
        description: "Search across all project files",
        shortcut: ["Ctrl", "P"],
        execute: () => window.alert('Opening file search...'),
      },
      {
        id: "goto-line",
        name: "Go to Line",
        description: "Jump to specific line number",
        shortcut: ["Ctrl", "G"],
        execute: () => window.alert('Go to line dialog opened'),
      },
      {
        id: "file-tree",
        name: "Toggle File Explorer",
        description: "Show/hide file explorer sidebar",
        shortcut: ["Ctrl", "B"],
        execute: () => window.alert('Toggling file explorer...'),
      },
      {
        id: "new-file",
        name: "New File",
        description: "Create a new file",
        shortcut: ["Ctrl", "N"],
        execute: () => window.alert('Creating new file...'),
      },
      {
        id: "save-file",
        name: "Save File",
        description: "Save current file",
        shortcut: ["Ctrl", "S"],
        execute: () => window.alert('File saved!'),
      },
      {
        id: "save-all",
        name: "Save All Files",
        description: "Save all open files",
        shortcut: ["Ctrl", "Shift", "S"],
        execute: () => window.alert('All files saved!'),
      },
      {
        id: "close-tab",
        name: "Close Tab",
        description: "Close current file tab",
        shortcut: ["Ctrl", "W"],
        execute: () => window.alert('Tab closed'),
      },
    ]

    return (
      <div className="space-y-4">
        <div>
          <Typography variant="body" className="text-stone-600 mb-4">
            File management and navigation commands commonly found in code editors and file managers.
          </Typography>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="px-3 py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 rounded text-sm font-medium"
          >
            Open File Commands
          </button>
          <Typography variant="caption" className="text-stone-500">
            Try "file", "save", "search", "new"
          </Typography>
        </div>

        {open && (
          <CommandPalette
            commands={fileCommands}
            placeholder="Search file commands..."
            initialOpen={true}
            onOpenChange={(o) => setOpen(o)}
          />
        )}
      </div>
    )
  }

  // TreeView demo helper component
  function TreeViewDemo({ showLines = true, showIcons = true }: { showLines?: boolean, showIcons?: boolean }) {
    const [selectedId, setSelectedId] = useState<string>()

    const treeData = [
      {
        id: "root",
        label: "Project Root",
        icon: Folder,
        children: [
          {
            id: "src",
            label: "src",
            icon: Folder,
            children: [
              {
                id: "components",
                label: "components",
                icon: Folder,
                children: [
                  { id: "button.tsx", label: "Button.tsx", icon: Code },
                  { id: "input.tsx", label: "Input.tsx", icon: Code },
                  { id: "modal.tsx", label: "Modal.tsx", icon: Code },
                ]
              },
              {
                id: "utils",
                label: "utils",
                icon: Folder,
                children: [
                  { id: "helpers.ts", label: "helpers.ts", icon: Code },
                  { id: "api.ts", label: "api.ts", icon: Code },
                ]
              },
              { id: "main.tsx", label: "main.tsx", icon: Code },
              { id: "app.tsx", label: "App.tsx", icon: Code },
            ]
          },
          {
            id: "public",
            label: "public",
            icon: Folder,
            children: [
              { id: "index.html", label: "index.html", icon: FileText },
              { id: "favicon.ico", label: "favicon.ico", icon: Image },
              {
                id: "assets",
                label: "assets",
                icon: Folder,
                children: [
                  { id: "logo.png", label: "logo.png", icon: Image },
                  { id: "banner.jpg", label: "banner.jpg", icon: Image },
                  { id: "video.mp4", label: "video.mp4", icon: Video },
                  { id: "audio.mp3", label: "audio.mp3", icon: Music },
                ]
              }
            ]
          },
          { id: "package.json", label: "package.json", icon: Package, badge: "main" },
          { id: "README.md", label: "README.md", icon: FileText },
          { id: ".gitignore", label: ".gitignore", icon: GitBranch },
        ]
      },
      {
        id: "node_modules",
        label: "node_modules",
        icon: Package,
        badge: "1.2k",
        disabled: true,
        children: []
      }
    ]

    return (
      <TreeView
        data={treeData}
        defaultExpanded={["root", "src", "components", "public"]}
        selectedId={selectedId}
        onSelect={(node) => {
          setSelectedId(node.id)
          if (!node.children?.length) {
            alert(`Selected: ${node.label}`)
          }
        }}
        showLines={showLines}
        showIcons={showIcons}
      />
    )
  }

  // Contained FAB Demo Component
  function FABDemoContained({ actions }: { actions: Array<{ id: string, label: string, icon: React.ElementType, onClick: () => void, badge?: string }> }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <div className="flex flex-col gap-2">
        {/* Secondary actions */}
        {isExpanded && (
          <div className="flex flex-col gap-2">
            {actions.map((action) => {
              const ActionIcon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.onClick()
                    setIsExpanded(false)
                  }}
                  className="relative w-12 h-12 bg-white border border-stone-200 rounded-full flex items-center justify-center shadow-lg hover:bg-stone-50 hover:shadow-xl transition-all"
                  title={action.label}
                >
                  <ActionIcon className="w-5 h-5 text-stone-700" />
                  {action.badge && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                      {action.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all"
          title="Quick Actions"
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </button>
      </div>
    )
  }

  // Contained Toolbar Demo Component
  function ToolbarDemoContained() {
    const toolbarActions = [
      { id: "copy", label: "Copy", icon: Copy, onClick: () => alert("Copy") },
      { id: "edit", label: "Edit", icon: Edit, onClick: () => alert("Edit") },
      { id: "share", label: "Share", icon: Share, onClick: () => alert("Share") },
      { id: "download", label: "Download", icon: Download, onClick: () => alert("Download") },
      { id: "trash", label: "Delete", icon: Trash2, onClick: () => alert("Delete") },
    ]

    return (
      <div className="flex items-center gap-2 p-2 bg-white border border-stone-200 rounded-lg shadow-lg">
        {toolbarActions.map((action) => {
          const ActionIcon = action.icon
          return (
            <button
              key={action.id}
              onClick={action.onClick}
              className="p-2 rounded-sm hover:bg-stone-100 transition-colors"
              title={action.label}
            >
              <ActionIcon className="w-5 h-5 text-stone-700" />
            </button>
          )
        })}
      </div>
    )
  }

  // Contained Menu Variant Demo Component
  function MenuVariantDemoContained() {
    const [isExpanded, setIsExpanded] = useState(false)
    const menuActions = [
      { id: "comment", label: "Add Comment", icon: MessageSquare, onClick: () => alert("Comment") },
      { id: "bookmark", label: "Bookmark", icon: Bookmark, onClick: () => alert("Bookmark"), badge: "new" },
      { id: "share", label: "Share", icon: Share, onClick: () => alert("Share") },
      { id: "download", label: "Download", icon: Download, onClick: () => alert("Download") },
      { id: "edit", label: "Edit", icon: Edit, onClick: () => alert("Edit") },
    ]

    return (
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        >
          {isExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>

        {isExpanded && (
          <div className="absolute bottom-16 right-0 w-48 p-2 bg-white border border-stone-200 rounded-lg shadow-lg">
            {menuActions.map((action) => {
              const ActionIcon = action.icon
              return (
                <button
                  key={action.id}
                  onClick={() => {
                    action.onClick()
                    setIsExpanded(false)
                  }}
                  className="w-full flex items-center gap-3 p-2 rounded-sm text-left hover:bg-stone-100 transition-colors"
                >
                  <ActionIcon className="w-4 h-4 text-stone-700" />
                  <Typography variant="body" className="text-sm text-stone-900">
                    {action.label}
                  </Typography>
                  {action.badge && (
                    <span className="ml-auto px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {action.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <section id="navigation">
        <Paper>
          <div className="mb-8">
            <Typography variant="h2" className="mb-4">
              Navigation Components
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Navigation components for organizing and moving through your
              application with Dav/Devs Paper styling.
            </Typography>
          </div>

          {/* Navbar Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Navbar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              A flexible navigation bar with support for dropdowns, mobile menus, and various styling options.
            </Typography>

            {/* Default Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Default Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Dav/Devs Paper" }}
                />
              </div>
            </div>

            {/* Solid Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Solid Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Brand" }}
                  variant="solid"
                />
              </div>
            </div>

            {/* Compact Navbar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Compact Navbar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems}
                  brand={{ text: "Compact" }}
                  compact={true}
                />
              </div>
            </div>

            {/* Navbar with Right Content */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Navbar with Right Content
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <Navbar
                  items={navItems.slice(0, 2)} // Show fewer items
                  brand={{ text: "Brand" }}
                  rightContent={
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-stone-100 rounded-sm">
                        <Search className="w-4 h-4" />
                      </button>
                      <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-sm hover:bg-blue-700">
                        Sign In
                      </button>
                    </div>
                  }
                />
              </div>
            </div>

            {/* Custom Brand Font Sizes */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Custom Brand Font Sizes
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Demonstrate how to customize brand font sizes using titleVariant and subtitleVariant props.
              </Typography>
              
              <div className="space-y-4">
                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Large Brand (h1 title, body subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Large Brand",
                        titleVariant: "h1",
                        subtitleVariant: "body"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Medium Brand (h3 title, bodySmall subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Medium Brand",
                        titleVariant: "h3",
                        subtitleVariant: "bodySmall"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Small Brand (h6 title, caption subtitle)
                  </Typography>
                  <div className="border border-stone-200 rounded-lg overflow-hidden">
                    <Navbar
                      items={navItems.slice(0, 2)}
                      brand={{
                        text: "Small Brand",
                        titleVariant: "h6",
                        subtitleVariant: "caption"
                      }}
                      compact={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Standalone Brand Examples */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Standalone Brand Component
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Brand component with various font size customizations.
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 space-y-6">
                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Default Brand
                  </Typography>
                  <Brand />
                </div>

                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Large Brand (h1 title)
                  </Typography>
                  <Brand 
                    titleVariant="h1" 
                    title="Big Brand Name"
                    subtitle="Impressive tagline"
                  />
                </div>

                <div>
                  <Typography variant="caption" color="muted" className="mb-2 block">
                    Compact Brand (caption title, overline subtitle)
                  </Typography>
                  <Brand 
                    titleVariant="caption" 
                    subtitleVariant="overline"
                    title="Tiny Brand"
                    subtitle="SMALL SUBTITLE"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Navbar Example */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Floating Navbar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              A floating navigation bar that can be positioned anywhere on the
              screen with smooth scrolling and automatic highlighting.
            </Typography>
            <Typography variant="body" className="mb-4">
              ✅ Automatic scroll-based highlighting
              <br />
              ✅ Smooth scrolling to sections
              <br />
              ✅ Configurable positioning (corners)
              <br />
              ✅ Responsive design with backdrop blur
              <br />
              ✅ Paper theme styling
              <br />✅ Full accessibility support
            </Typography>

            {/* The floating navbar is rendered at the app level */}
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                The floating navbar is currently active in the top-right corner
                of this page. Scroll through the sections to see the automatic
                highlighting in action.
              </Typography>
            </div>
          </div>

          {/* Sidebar Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Sidebar
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              A flexible sidebar navigation component with support for nested items, collapsing, and various positioning options.
            </Typography>

            {/* Default Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Default Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Dav/Devs Paper", logo: "/logo-coloured.svg" }}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Main content area. The sidebar provides navigation with collapsible groups, badges, and smooth interactions.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Compact Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Compact", logo: "/logo-coloured.svg" }}
                    variant="compact"
                    width="sm"
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Compact sidebar variant with smaller width for space-efficient layouts.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapsible Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Collapsible Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={sidebarItems}
                    brand={{ text: "Collapsible", logo: "/logo-coloured.svg" }}
                    collapsible={true}
                    collapsed={false}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Click the collapse button in the sidebar header to toggle between expanded and collapsed states.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with Scroll Spy */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Sidebar with Scroll Spy
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Automatically highlights the current section based on scroll position.
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden">
                <div className="flex h-80">
                  <Sidebar
                    items={[
                      { id: "overview", label: "Overview", href: "#overview", icon: Home },
                      { id: "typography", label: "Typography", href: "#typography", icon: FileText },
                      { id: "ui-primitives", label: "UI Primitives", href: "#ui-primitives", icon: Calendar },
                      { id: "form-controls", label: "Form Controls", href: "#form-controls", icon: Settings },
                      { id: "navigation", label: "Navigation", href: "#navigation", icon: BarChart3 },
                    ]}
                    brand={{ text: "Spy Demo", logo: "/logo-coloured.svg" }}
                    spy={true}
                    spyOffset={100}
                  />
                  <div className="flex-1 p-6 bg-stone-50">
                    <Typography variant="body" className="text-stone-600">
                      Scroll spy is active! The sidebar will automatically highlight the current section as you scroll through the page. Try scrolling to see it in action.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Sidebar */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Floating Sidebar
              </Typography>
              <div className="border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                <div className="relative h-80 p-4">
                  <Sidebar
                    items={sidebarItems.slice(0, 4)} // Show fewer items
                    brand={{ text: "Float", logo: "/logo-coloured.svg" }}
                    variant="floating"
                    width="sm"
                    className="absolute top-4 left-4 h-72"
                  />
                  <div className="ml-60 p-4">
                    <Typography variant="body" className="text-stone-600">
                      Floating sidebar variant with backdrop blur and shadow effects. Perfect for overlay scenarios or when you need the sidebar to stand out from the background.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumbs Examples */}
          <div className="mb-8">
            <Typography variant="h3" className="mb-4">
              Breadcrumbs
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-6">
              Navigation trail showing the current location hierarchy with support for collapsing, icons, and various separators.
            </Typography>

            {/* Basic Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Basic Breadcrumbs
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Home", href: "#overview" },
                    { id: "products", label: "Products", href: "#products" },
                    { id: "category", label: "Electronics", href: "#electronics" },
                    { id: "product", label: "Smartphone" },
                  ]}
                />
              </div>
            </div>

            {/* With Icons */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                With Icons
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Dashboard", href: "#overview", icon: Home },
                    { id: "docs", label: "Documentation", href: "#docs", icon: FileText },
                    { id: "components", label: "Components", href: "#components", icon: FolderOpen },
                    { id: "navigation", label: "Navigation", icon: File },
                  ]}
                  showIcons={true}
                />
              </div>
            </div>

            {/* Different Separators */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Different Separators
              </Typography>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Chevron (default)
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="chevron"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Slash
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="slash"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Arrow
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="arrow"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Dot
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#" },
                      { id: "docs", label: "Docs", href: "#" },
                      { id: "current", label: "Current Page" },
                    ]}
                    separator="dot"
                  />
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Different Sizes
              </Typography>
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Small
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="sm"
                    showIcons={true}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Medium (default)
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="md"
                    showIcons={true}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Large
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "current", label: "Current Page", icon: File },
                    ]}
                    size="lg"
                    showIcons={true}
                  />
                </div>
              </div>
            </div>

            {/* Collapsed Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Collapsed Long Paths
              </Typography>
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Breadcrumbs
                  items={[
                    { id: "home", label: "Home", href: "#", icon: Home },
                    { id: "workspace", label: "Workspace", href: "#" },
                    { id: "projects", label: "Projects", href: "#" },
                    { id: "project", label: "Design System", href: "#" },
                    { id: "components", label: "Components", href: "#" },
                    { id: "navigation", label: "Navigation", href: "#" },
                    { id: "breadcrumbs", label: "Breadcrumbs", href: "#" },
                    { id: "current", label: "Current Page" },
                  ]}
                  maxItems={4}
                  showIcons={true}
                />
              </div>
              <Typography variant="caption" color="muted" className="mt-2">
                Click the "..." button to expand and show all items
              </Typography>
            </div>

            {/* Icon-Only Breadcrumbs */}
            <div className="mb-6">
              <Typography variant="h4" className="mb-3">
                Icon-Only Breadcrumbs
              </Typography>
              <Typography variant="body" className="text-stone-600 mb-4">
                Compact breadcrumbs showing only icons, perfect for space-constrained layouts.
              </Typography>
              
              <div className="space-y-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Medium
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Dashboard", href: "#", icon: Home },
                      { id: "docs", label: "Documentation", href: "#", icon: FileText },
                      { id: "components", label: "Components", href: "#", icon: FolderOpen },
                      { id: "navigation", label: "Navigation", icon: File },
                    ]}
                    iconOnly={true}
                    size="md"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Small with Slash Separator
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "home", label: "Home", href: "#", icon: Home },
                      { id: "settings", label: "Settings", href: "#", icon: Settings },
                      { id: "profile", label: "Profile", href: "#", icon: Users },
                      { id: "security", label: "Security", icon: Shield },
                    ]}
                    iconOnly={true}
                    size="sm"
                    separator="slash"
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-2">
                    Icon-Only Large with Dot Separator
                  </Typography>
                  <Breadcrumbs
                    items={[
                      { id: "dashboard", label: "Dashboard", href: "#", icon: BarChart3 },
                      { id: "analytics", label: "Analytics", href: "#", icon: Zap },
                      { id: "reports", label: "Reports", icon: FileText },
                    ]}
                    iconOnly={true}
                    size="lg"
                    separator="dot"
                  />
                </div>
              </div>
              
              <Typography variant="caption" color="muted" className="mt-3">
                Hover over icons to see tooltips with labels. Each icon is clickable and maintains full accessibility.
              </Typography>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Tabs
            </Typography>
            
            <Typography variant="body" color="muted" className="mb-6">
              Tabbed interfaces for organizing content into switchable sections with multiple variants and orientations.
            </Typography>

            {/* Basic Tabs Example */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Basic Tab Interface
              </Typography>
              
              <Tabs
                items={[
                  {
                    id: "overview",
                    label: "Overview",
                    icon: Home,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Dashboard Overview</Typography>
                        <Typography variant="body" color="stone">
                          Welcome to your dashboard. Here you can view recent activity, project summaries, and quick access to important features.
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Active Projects</Typography>
                            <Typography variant="h3" color="primary">12</Typography>
                          </Paper>
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Team Members</Typography>
                            <Typography variant="h3" color="success">8</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "analytics",
                    label: "Analytics",
                    icon: BarChart3,
                    badge: "New",
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Analytics Dashboard</Typography>
                        <Typography variant="body" color="stone">
                          View detailed analytics and performance metrics for your projects and team.
                        </Typography>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="primary" className="mb-2">2.4k</Typography>
                            <Typography variant="body" color="stone">Page Views</Typography>
                          </Paper>
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="success" className="mb-2">98.2%</Typography>
                            <Typography variant="body" color="stone">Uptime</Typography>
                          </Paper>
                          <Paper className="p-4 text-center">
                            <Typography variant="h3" color="warning" className="mb-2">1.8s</Typography>
                            <Typography variant="body" color="stone">Load Time</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "settings",
                    label: "Settings",
                    icon: Settings,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Application Settings</Typography>
                        <Typography variant="body" color="stone">
                          Configure your application preferences, security settings, and team permissions.
                        </Typography>
                        <div className="space-y-3">
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">General Settings</Typography>
                            <Typography variant="body" color="stone">Theme, language, timezone preferences</Typography>
                          </Paper>
                          <Paper className="p-4">
                            <Typography variant="h5" color="stone" className="mb-2">Security</Typography>
                            <Typography variant="body" color="stone">Password policy, two-factor authentication</Typography>
                          </Paper>
                        </div>
                      </div>
                    )
                  },
                  {
                    id: "team",
                    label: "Team",
                    icon: Users,
                    disabled: true,
                    content: (
                      <div className="space-y-4">
                        <Typography variant="h4" color="stone">Team Management</Typography>
                        <Typography variant="body" color="stone">
                          Manage team members, roles, and permissions.
                        </Typography>
                      </div>
                    )
                  }
                ]}
                variant="tabs"
                color="primary"
                size="md"
                defaultActiveTab="overview"
                showContent={true}
              />
            </div>

            {/* Tab Variants */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Tab Variants
              </Typography>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Pills Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Pills Style</Typography>
                  <Tabs
                    items={[
                      { id: "files", label: "Files", icon: FileText, content: <Typography variant="body">File management interface</Typography> },
                      { id: "data", label: "Database", icon: Database, content: <Typography variant="body">Database connections and queries</Typography> },
                      { id: "network", label: "Network", icon: Globe, content: <Typography variant="body">Network monitoring and settings</Typography> }
                    ]}
                    variant="pills"
                    color="success"
                    size="sm"
                    showContent={false}
                  />
                </div>

                {/* Ghost Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Ghost Style</Typography>
                  <Tabs
                    items={[
                      { id: "inbox", label: "Inbox", icon: Mail, badge: "3", content: <Typography variant="body">Email inbox</Typography> },
                      { id: "calendar-tab", label: "Calendar", icon: Calendar, content: <Typography variant="body">Calendar events</Typography> },
                      { id: "tasks", label: "Tasks", icon: FileText, badge: "12", content: <Typography variant="body">Task management</Typography> }
                    ]}
                    variant="ghost"
                    color="warning"
                    showContent={false}
                  />
                </div>

                {/* Links Variant */}
                <div className="space-y-3">
                  <Typography variant="bodySmall" color="muted">Links Style</Typography>
                  <Tabs
                    items={[
                      { id: "docs", label: "Documentation", icon: FileText, content: <Typography variant="body">Documentation</Typography> },
                      { id: "api", label: "API Reference", icon: Zap, content: <Typography variant="body">API docs</Typography> },
                      { id: "guides", label: "Guides", icon: FolderOpen, content: <Typography variant="body">Tutorial guides</Typography> }
                    ]}
                    variant="links"
                    color="info"
                    showContent={false}
                  />
                </div>
              </div>
            </div>

            {/* Vertical Tabs */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Vertical Orientation
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-4 bg-white">
                <Tabs
                  items={[
                    { 
                      id: "profile-settings", 
                      label: "Profile", 
                      icon: Users, 
                      content: (
                        <Typography variant="body">
                          Manage your profile information, avatar, and personal preferences.
                        </Typography>
                      ) 
                    },
                    { 
                      id: "security-settings", 
                      label: "Security", 
                      icon: Shield, 
                      content: (
                        <Typography variant="body">
                          Configure security settings, password, and two-factor authentication.
                        </Typography>
                      ) 
                    },
                    { 
                      id: "notification-settings", 
                      label: "Notifications", 
                      icon: Bell, 
                      badge: "2",
                      content: (
                        <Typography variant="body">
                          Set up notification preferences for email, push, and in-app alerts.
                        </Typography>
                      ) 
                    }
                  ]}
                  variant="ghost"
                  color="secondary"
                  orientation="vertical"
                  showContent={true}
                />
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Tabs support multiple variants (tabs, pills, ghost, links, plain), orientations (horizontal, vertical), 
              sizes, color themes, icons, badges, and can be controlled or uncontrolled.
            </Typography>
          </div>

          {/* Pagination Section */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Pagination
            </Typography>
            
            <Typography variant="body" color="muted" className="mb-6">
              Navigate through multi-page content with various formats including numbers, letters, and roman numerals.
            </Typography>

            {/* Basic Pagination Examples */}
            <div className="space-y-6">
              <Typography variant="h4" className="mb-3">
                Pagination Formats
              </Typography>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Numeric Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Numeric Pagination (1 ... 3, 4, 5 ... 7)
                  </Typography>
                  <Pagination
                    currentPage={4}
                    totalPages={15}
                    format="numbers"
                    variant="outline"
                    color="primary"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Letter Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Letter Pagination (a ... c, d, e ... g)
                  </Typography>
                  <Pagination
                    currentPage={4}
                    totalPages={12}
                    format="letters"
                    variant="ghost"
                    color="success"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Roman Numeral Pagination */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Roman Numeral Pagination (i ... iii, iv, v ... vii)
                  </Typography>
                  <Pagination
                    currentPage={5}
                    totalPages={10}
                    format="roman"
                    variant="solid"
                    color="secondary"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Simple Navigation */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Previous / Next Navigation
                  </Typography>
                  <Pagination
                    currentPage={2}
                    totalPages={5}
                    format="prev-next"
                    variant="link"
                    color="info"
                    onPageChange={() => {}}
                  />
                </div>

                {/* Full Navigation */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    First / Previous / Current / Next / Last
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={8}
                    format="first-last"
                    variant="outline"
                    color="warning"
                    onPageChange={() => {}}
                    showPageInfo={true}
                  />
                </div>

                {/* Horizontal Scrolling Test */}
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Horizontal Scrolling (Large Page Count)
                  </Typography>
                  <div className="max-w-sm mx-auto border border-dashed border-blue-300 p-2 rounded">
                    <Typography variant="caption" color="muted" className="mb-2 block text-center">
                      Constrained to 384px width - scroll horizontally →
                    </Typography>
                    <Pagination
                      currentPage={25}
                      totalPages={100}
                      format="numbers"
                      variant="outline"
                      color="primary"
                      onPageChange={() => {}}
                      siblingCount={3}
                      showBoundaries={true}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Variants */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Style Variants
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Solid Variant
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={7}
                    variant="solid"
                    color="primary"
                    size="sm"
                    onPageChange={() => {}}
                  />
                </div>

                <div className="border border-stone-200 rounded-lg p-4 bg-white">
                  <Typography variant="bodySmall" color="muted" className="mb-3">
                    Ghost Variant
                  </Typography>
                  <Pagination
                    currentPage={3}
                    totalPages={7}
                    variant="ghost"
                    color="success"
                    size="sm"
                    onPageChange={() => {}}
                  />
                </div>
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Pagination supports multiple formats (numbers, letters, roman numerals), variants (solid, outline, ghost, link, plain), 
              sizes, color themes, and comprehensive accessibility features.
            </Typography>
          </div>

          {/* Stepper Component */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Stepper
            </Typography>

            <Typography variant="body" className="text-stone-600 mb-6">
              Step indicators for multi-step processes with various formats and interactive features.
            </Typography>

            <div className="space-y-8">
              {/* Numeric Format */}
              <div>
                <Typography variant="h4" className="mb-4">
                  Numeric Format
                </Typography>
                <div className="border border-stone-200 rounded-lg p-6 bg-white">
                  <Stepper
                    steps={[
                      { id: 1, title: "Account", description: "Create account", status: "completed" },
                      { id: 2, title: "Profile", description: "Set up profile", status: "completed" },
                      { id: 3, title: "Verification", description: "Verify email", status: "current" },
                      { id: 4, title: "Complete", description: "Finish setup", status: "pending" }
                    ]}
                    currentStep={2}
                    format="numeric"
                    variant="solid"
                    color="primary"
                  />
                </div>
              </div>

              {/* Custom Icons */}
              <div>
                <Typography variant="h4" className="mb-4">
                  Custom Icons
                </Typography>
                <div className="border border-stone-200 rounded-lg p-6 bg-white">
                  <Stepper
                    steps={[
                      { id: 'user', title: "User Details", status: "completed", icon: User },
                      { id: 'payment', title: "Payment", status: "current", icon: CreditCard },
                      { id: 'complete', title: "Complete", status: "pending", icon: CheckCircle }
                    ]}
                    currentStep={1}
                    format="custom"
                    variant="solid"
                    color="success"
                    size="lg"
                  />
                </div>
              </div>

              {/* Vertical Layout */}
              <div>
                <Typography variant="h4" className="mb-4">
                  Vertical Layout
                </Typography>
                <div className="border border-stone-200 rounded-lg p-6 bg-white max-w-md">
                  <Stepper
                    steps={[
                      { id: 1, title: "Planning", description: "Define requirements", status: "completed" },
                      { id: 2, title: "Design", description: "Create mockups", status: "completed" },
                      { id: 3, title: "Development", description: "Build features", status: "current" },
                      { id: 4, title: "Testing", description: "Quality assurance", status: "pending" }
                    ]}
                    currentStep={2}
                    format="numeric"
                    variant="outline"
                    color="purple"
                    orientation="vertical"
                    size="md"
                  />
                </div>
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Stepper supports numeric, alpha, roman, and custom icon formats with horizontal/vertical layouts, 
              multiple variants, sizes, colors, and interactive step navigation.
            </Typography>
          </div>

          {/* Command Palette Section */}
          <div className="space-y-6">
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

                <CommandPaletteDemoCard />
              </div>
            </div>

            {/* Advanced Commands Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Advanced Commands
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <AdvancedCommandPaletteDemo />
              </div>
            </div>

            {/* Theme Switching Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Theme & Settings Commands
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <ThemeCommandPaletteDemo />
              </div>
            </div>

            {/* Developer Commands Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Developer Commands
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <DeveloperCommandPaletteDemo />
              </div>
            </div>

            {/* File Navigation Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                File & Navigation Commands
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <FileNavigationCommandDemo />
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Command palette supports keyboard navigation (↑↓ arrows, Enter), search filtering, 
              keyboard shortcuts, command descriptions, and custom execution handlers.
            </Typography>
          </div>

          {/* Menu Component */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Menu
            </Typography>

            <Typography variant="body" className="text-stone-600 mb-6">
              Contextual menu system with support for nested items, shortcuts, and separators.
            </Typography>

            {/* Basic Menu */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Basic Context Menu
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <div className="flex flex-wrap gap-4">
                  <Menu
                    trigger={
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700">
                        File Menu
                      </button>
                    }
                    items={[
                      { id: "new", label: "New File", icon: FileText, shortcut: ["Ctrl", "N"], onClick: () => alert("New file") },
                      { id: "open", label: "Open", icon: FolderOpen, shortcut: ["Ctrl", "O"], onClick: () => alert("Open file") },
                      { id: "sep1", label: "", separator: true },
                      { id: "save", label: "Save", icon: Download, shortcut: ["Ctrl", "S"], onClick: () => alert("Save file") },
                      { id: "save-as", label: "Save As...", onClick: () => alert("Save as") },
                      { id: "sep2", label: "", separator: true },
                      { id: "exit", label: "Exit", disabled: true, onClick: () => alert("Exit") },
                    ]}
                  />

                  <Menu
                    trigger={
                      <button className="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700">
                        Edit Menu
                      </button>
                    }
                    items={[
                      { id: "copy", label: "Copy", icon: Copy, shortcut: ["Ctrl", "C"], onClick: () => alert("Copy") },
                      { id: "cut", label: "Cut", icon: Edit, shortcut: ["Ctrl", "X"], onClick: () => alert("Cut") },
                      { id: "paste", label: "Paste", icon: Plus, shortcut: ["Ctrl", "V"], onClick: () => alert("Paste") },
                      { id: "sep1", label: "", separator: true },
                      { id: "delete", label: "Delete", icon: Trash2, onClick: () => alert("Delete") },
                    ]}
                    align="center"
                  />

                  <Menu
                    trigger={
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-700">
                        Share Menu
                      </button>
                    }
                    items={[
                      { id: "share-link", label: "Copy Link", icon: Share, onClick: () => alert("Copy link") },
                      { id: "share-email", label: "Share via Email", icon: Mail, onClick: () => alert("Share email") },
                      { id: "sep1", label: "", separator: true },
                      { id: "bookmark", label: "Add Bookmark", icon: Bookmark, onClick: () => alert("Bookmark") },
                      { id: "favorite", label: "Add to Favorites", icon: Heart, onClick: () => alert("Favorite") },
                    ]}
                    align="end"
                  />
                </div>
              </div>
            </div>

            {/* Nested Menu */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Nested Menu
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <Menu
                  trigger={
                    <button className="px-4 py-2 bg-stone-600 text-white rounded-sm hover:bg-stone-700">
                      Advanced Menu
                    </button>
                  }
                  items={[
                    { id: "new", label: "New", icon: Plus, 
                      children: [
                        { id: "file", label: "File", icon: FileText, onClick: () => alert("New file") },
                        { id: "folder", label: "Folder", icon: Folder, onClick: () => alert("New folder") },
                        { id: "project", label: "Project", icon: Package, onClick: () => alert("New project") },
                      ]
                    },
                    { id: "open", label: "Open Recent", icon: FolderOpen,
                      children: [
                        { id: "project1", label: "My Project", onClick: () => alert("Open project 1") },
                        { id: "project2", label: "Design System", onClick: () => alert("Open project 2") },
                        { id: "project3", label: "Portfolio Site", onClick: () => alert("Open project 3") },
                      ]
                    },
                    { id: "sep1", label: "", separator: true },
                    { id: "preferences", label: "Preferences", icon: Settings,
                      children: [
                        { id: "theme", label: "Theme", onClick: () => alert("Theme settings") },
                        { id: "shortcuts", label: "Keyboard Shortcuts", onClick: () => alert("Shortcuts") },
                        { id: "extensions", label: "Extensions", onClick: () => alert("Extensions") },
                      ]
                    },
                  ]}
                />
              </div>
            </div>

            {/* Menu Positioning */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Menu Positioning
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-8 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <Menu
                    trigger={<button className="px-3 py-2 bg-blue-100 text-blue-800 rounded">Top</button>}
                    side="top"
                    items={[
                      { id: "item1", label: "Item 1", onClick: () => alert("Item 1") },
                      { id: "item2", label: "Item 2", onClick: () => alert("Item 2") },
                    ]}
                  />
                  
                  <Menu
                    trigger={<button className="px-3 py-2 bg-green-100 text-green-800 rounded">Right</button>}
                    side="right"
                    items={[
                      { id: "item1", label: "Item 1", onClick: () => alert("Item 1") },
                      { id: "item2", label: "Item 2", onClick: () => alert("Item 2") },
                    ]}
                  />
                  
                  <Menu
                    trigger={<button className="px-3 py-2 bg-yellow-100 text-yellow-800 rounded">Bottom</button>}
                    side="bottom"
                    items={[
                      { id: "item1", label: "Item 1", onClick: () => alert("Item 1") },
                      { id: "item2", label: "Item 2", onClick: () => alert("Item 2") },
                    ]}
                  />
                  
                  <Menu
                    trigger={<button className="px-3 py-2 bg-red-100 text-red-800 rounded">Left</button>}
                    side="left"
                    items={[
                      { id: "item1", label: "Item 1", onClick: () => alert("Item 1") },
                      { id: "item2", label: "Item 2", onClick: () => alert("Item 2") },
                    ]}
                  />
                </div>
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              Menu supports nested items, keyboard shortcuts, separators, disabled states, and flexible positioning.
            </Typography>
          </div>

          {/* TreeView Component */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Tree View
            </Typography>

            <Typography variant="body" className="text-stone-600 mb-6">
              Hierarchical data navigation with expandable nodes, icons, and badges.
            </Typography>

            {/* Basic TreeView */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                File System Tree
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <TreeViewDemo />
              </div>
            </div>

            {/* TreeView without lines */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Clean Tree (No Connection Lines)
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <TreeViewDemo showLines={false} />
              </div>
            </div>

            {/* TreeView without icons */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Text-Only Tree
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <TreeViewDemo showIcons={false} />
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              TreeView supports nested hierarchies, custom icons, badges, connection lines, and selection states.
            </Typography>
          </div>

          {/* QuickActions Component */}
          <div className="space-y-6">
            <Typography variant="h3" className="mb-4">
              Quick Actions
            </Typography>

            <Typography variant="body" className="text-stone-600 mb-6">
              Floating action buttons and toolbars for quick access to common actions.
            </Typography>

            {/* FAB Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Floating Action Button (FAB)
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <Typography variant="body" className="text-stone-600 mb-4">
                  FAB examples with expandable secondary actions and badges:
                </Typography>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* FAB Demo 1 */}
                  <div className="border border-stone-200 rounded-lg p-4 bg-stone-50 min-h-[200px] relative">
                    <Typography variant="bodySmall" color="muted" className="mb-2">
                      FAB with Secondary Actions
                    </Typography>
                    <div className="absolute bottom-4 right-4">
                      <FABDemoContained actions={[
                        { id: "edit", label: "Edit", icon: Edit, onClick: () => alert("Edit") },
                        { id: "share", label: "Share", icon: Share, onClick: () => alert("Share") },
                        { id: "bookmark", label: "Bookmark", icon: Bookmark, onClick: () => alert("Bookmark") },
                      ]} />
                    </div>
                  </div>

                  {/* FAB Demo 2 */}
                  <div className="border border-stone-200 rounded-lg p-4 bg-stone-50 min-h-[200px] relative">
                    <Typography variant="bodySmall" color="muted" className="mb-2">
                      FAB with Badge Notifications
                    </Typography>
                    <div className="absolute bottom-4 right-4">
                      <FABDemoContained actions={[
                        { id: "like", label: "Like", icon: Heart, onClick: () => alert("Liked!"), badge: "3" },
                        { id: "star", label: "Star", icon: Star, onClick: () => alert("Starred!") },
                        { id: "comment", label: "Comment", icon: MessageSquare, onClick: () => alert("Comment"), badge: "new" },
                      ]} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Toolbar Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Action Toolbar
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-white">
                <Typography variant="body" className="text-stone-600 mb-4">
                  Toolbar variant for horizontal action layouts:
                </Typography>
                
                <div className="flex justify-center">
                  <ToolbarDemoContained />
                </div>
              </div>
            </div>

            {/* Menu Variant Demo */}
            <div className="space-y-4">
              <Typography variant="h4" className="mb-3">
                Action Menu
              </Typography>
              
              <div className="border border-stone-200 rounded-lg p-6 bg-stone-50 min-h-48 relative">
                <Typography variant="body" className="text-stone-600 mb-4">
                  Menu variant with expandable action list:
                </Typography>
                
                <div className="absolute bottom-4 right-4">
                  <MenuVariantDemoContained />
                </div>
              </div>
            </div>

            <Typography variant="caption" color="muted" className="mt-4">
              QuickActions supports FAB, toolbar, and menu variants with flexible positioning and badge support.
            </Typography>
          </div>
        </Paper>
      </section>
    </>
  )
}
