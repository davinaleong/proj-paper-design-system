import { useState } from 'react'
import {
  Save,
  Copy,
  Download,
  Share,
  Edit,
  Trash2,
  Settings,
  Search,
  Filter,
  RefreshCw,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SkipForward,
  Volume2,
} from 'lucide-react'
import { CommandBar } from '../../components'
import type { CommandBarGroup } from '../../components'
import { Typography } from '../../components/core/Typography'
import { Paper } from '../../components/core/Paper'
import { Switch } from '../../components/forms/Switch'

// Sample action groups
const getEditorActions = (onAction: (action: string) => void): CommandBarGroup[] => [
  {
    id: 'file',
    label: 'File actions',
    actions: [
      {
        id: 'save',
        label: 'Save',
        icon: Save,
        onClick: () => onAction('Save'),
        shortcut: 'Ctrl+S',
        tooltip: 'Save current document',
      },
      {
        id: 'copy',
        label: 'Copy',
        icon: Copy,
        onClick: () => onAction('Copy'),
        shortcut: 'Ctrl+C',
      },
      {
        id: 'download',
        label: 'Download',
        icon: Download,
        onClick: () => onAction('Download'),
      },
    ],
  },
  {
    id: 'sharing',
    label: 'Sharing actions',
    separated: true,
    actions: [
      {
        id: 'share',
        label: 'Share',
        icon: Share,
        onClick: () => onAction('Share'),
      },
    ],
  },
  {
    id: 'edit',
    label: 'Edit actions',
    separated: true,
    actions: [
      {
        id: 'edit',
        label: 'Edit',
        icon: Edit,
        onClick: () => onAction('Edit'),
        active: true,
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: Trash2,
        onClick: () => onAction('Delete'),
        destructive: true,
        tooltip: 'Permanently delete this item',
      },
    ],
  },
]

const getMediaActions = (onAction: (action: string) => void): CommandBarGroup[] => [
  {
    id: 'playback',
    label: 'Playback controls',
    actions: [
      {
        id: 'previous',
        label: 'Previous',
        icon: ChevronLeft,
        onClick: () => onAction('Previous'),
      },
      {
        id: 'play',
        label: 'Play',
        icon: Play,
        onClick: () => onAction('Play'),
        active: true,
      },
      {
        id: 'pause',
        label: 'Pause',
        icon: Pause,
        onClick: () => onAction('Pause'),
      },
      {
        id: 'next',
        label: 'Next',
        icon: ChevronRight,
        onClick: () => onAction('Next'),
      },
    ],
  },
  {
    id: 'controls',
    label: 'Media controls',
    separated: true,
    actions: [
      {
        id: 'skip',
        label: 'Skip Forward',
        icon: SkipForward,
        onClick: () => onAction('Skip'),
        shortcut: '→',
      },
      {
        id: 'volume',
        label: 'Volume',
        icon: Volume2,
        onClick: () => onAction('Volume'),
      },
    ],
  },
]

const getTableActions = (onAction: (action: string) => void): CommandBarGroup[] => [
  {
    id: 'view',
    label: 'View controls',
    actions: [
      {
        id: 'search',
        label: 'Search',
        icon: Search,
        onClick: () => onAction('Search'),
        shortcut: 'Ctrl+F',
      },
      {
        id: 'filter',
        label: 'Filter',
        icon: Filter,
        onClick: () => onAction('Filter'),
        active: true,
      },
      {
        id: 'refresh',
        label: 'Refresh',
        icon: RefreshCw,
        onClick: () => onAction('Refresh'),
        shortcut: 'F5',
      },
    ],
  },
  {
    id: 'actions',
    label: 'Table actions',
    separated: true,
    actions: [
      {
        id: 'add',
        label: 'Add Row',
        icon: Plus,
        onClick: () => onAction('Add Row'),
      },
      {
        id: 'remove',
        label: 'Remove Row',
        icon: Minus,
        onClick: () => onAction('Remove Row'),
        disabled: true,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: Settings,
        onClick: () => onAction('Settings'),
      },
    ],
  },
]

export function CommandBarShowcase() {
  const [lastAction, setLastAction] = useState<string>('None')
  const [showLabels, setShowLabels] = useState(true)
  const [showShortcuts, setShowShortcuts] = useState(true)
  const [autoHide, setAutoHide] = useState(false)
  const [visible, setVisible] = useState(true)

  const handleAction = (action: string) => {
    setLastAction(action)
  }

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="mb-2">
          CommandBar Component
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Contextual action bars for displaying grouped commands and controls.
        </Typography>
      </div>

      {/* Controls */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Interactive Controls
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Show Labels</Typography>
            <Switch checked={showLabels} onChange={(checked) => setShowLabels(checked)} />
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Show Shortcuts</Typography>
            <Switch checked={showShortcuts} onChange={(checked) => setShowShortcuts(checked)} />
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Auto Hide</Typography>
            <Switch checked={autoHide} onChange={(checked) => setAutoHide(checked)} />
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Visible</Typography>
            <Switch checked={visible} onChange={(checked) => setVisible(checked)} />
          </div>
        </div>
        <div className="p-3 bg-stone-50 rounded border">
          <Typography variant="bodySmall" className="font-mono">
            Last Action: <span className="text-blue-600">{lastAction}</span>
          </Typography>
        </div>
      </Paper>

      {/* Editor Command Bar */}
      <div>
        <Typography variant="h3" className="mb-4">
          Editor Command Bar
        </Typography>
        <Paper className="p-6 space-y-4">
          <Typography variant="bodySmall" className="text-stone-600">
            Top position with file and editing actions
          </Typography>
          <div className="relative border-2 border-dashed border-stone-200 rounded-lg min-h-[120px]">
            <CommandBar
              groups={getEditorActions(handleAction)}
              position="top"
              size="md"
              variant="default"
              showLabels={showLabels}
              showShortcuts={showShortcuts}
              autoHide={autoHide}
              visible={visible}
              onVisibilityChange={setVisible}
            />
            <div className="p-8 pt-16">
              <Typography variant="bodySmall" className="text-center text-stone-500">
                Content area with editor command bar at top
              </Typography>
            </div>
          </div>
        </Paper>
      </div>

      {/* Media Player Command Bar */}
      <div>
        <Typography variant="h3" className="mb-4">
          Media Player Command Bar
        </Typography>
        <Paper className="p-6 space-y-4">
          <Typography variant="bodySmall" className="text-stone-600">
            Bottom position with media controls
          </Typography>
          <div className="relative border-2 border-dashed border-stone-200 rounded-lg min-h-[120px]">
            <div className="p-8 pb-16">
              <Typography variant="bodySmall" className="text-center text-stone-500">
                Media content with controls at bottom
              </Typography>
            </div>
            <CommandBar
              groups={getMediaActions(handleAction)}
              position="bottom"
              size="md"
              variant="elevated"
              showLabels={showLabels}
              showShortcuts={showShortcuts}
              visible={visible}
            />
          </div>
        </Paper>
      </div>

      {/* Floating Command Bar */}
      <div>
        <Typography variant="h3" className="mb-4">
          Floating Command Bar
        </Typography>
        <Paper className="p-6 space-y-4">
          <Typography variant="bodySmall" className="text-stone-600">
            Floating position with table actions
          </Typography>
          <div className="relative border-2 border-dashed border-stone-200 rounded-lg min-h-[200px] overflow-hidden">
            <div className="p-8">
              <Typography variant="bodySmall" className="text-center text-stone-500 mb-4">
                Table or grid content
              </Typography>
              <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="h-8 bg-stone-100 rounded" />
                ))}
              </div>
            </div>
            <CommandBar
              groups={getTableActions(handleAction)}
              position="floating"
              size="sm"
              variant="elevated"
              showLabels={showLabels}
              showShortcuts={showShortcuts}
              visible={visible}
              className="left-1/2 top-4 -translate-x-1/2"
            />
          </div>
        </Paper>
      </div>

      {/* Size Variants */}
      <div>
        <Typography variant="h3" className="mb-4">
          Size Variants
        </Typography>
        <div className="grid gap-6">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <Paper key={size} className="p-6">
              <Typography variant="h4" className="mb-2 capitalize">
                {size} Size
              </Typography>
              <div className="relative border-2 border-dashed border-stone-200 rounded-lg">
                <CommandBar
                  groups={getEditorActions(handleAction)}
                  position="top"
                  size={size}
                  variant="default"
                  showLabels={showLabels}
                  showShortcuts={showShortcuts}
                  visible={visible}
                />
                <div className="p-6 pt-12">
                  <Typography variant="bodySmall" className="text-center text-stone-500">
                    Content with {size} command bar
                  </Typography>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      </div>

      {/* With Custom Content */}
      <div>
        <Typography variant="h3" className="mb-4">
          With Custom Content
        </Typography>
        <Paper className="p-6 space-y-4">
          <Typography variant="bodySmall" className="text-stone-600">
            Command bar with custom left and right content
          </Typography>
          <div className="relative border-2 border-dashed border-stone-200 rounded-lg">
            <CommandBar
              groups={getEditorActions(handleAction)}
              position="top"
              size="md"
              variant="default"
              showLabels={showLabels}
              showShortcuts={showShortcuts}
              visible={visible}
              leftContent={
                <Typography variant="bodySmall" className="font-semibold text-stone-700">
                  Document.txt
                </Typography>
              }
              rightContent={
                <div className="flex items-center gap-2">
                  <Typography variant="caption" className="text-stone-500">
                    Saved 2 min ago
                  </Typography>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              }
            />
            <div className="p-8 pt-16">
              <Typography variant="bodySmall" className="text-center text-stone-500">
                Content with custom command bar content
              </Typography>
            </div>
          </div>
        </Paper>
      </div>

      {/* Overflow Handling */}
      <div>
        <Typography variant="h3" className="mb-4">
          Overflow Handling
        </Typography>
        <Paper className="p-6 space-y-4">
          <Typography variant="bodySmall" className="text-stone-600">
            Command bar with limited space showing overflow menu
          </Typography>
          <div className="relative border-2 border-dashed border-stone-200 rounded-lg">
            <CommandBar
              groups={[...getEditorActions(handleAction), ...getTableActions(handleAction)]}
              position="top"
              size="md"
              variant="default"
              showLabels={showLabels}
              showShortcuts={showShortcuts}
              visible={visible}
              maxActions={4}
              overflowLabel="More actions"
            />
            <div className="p-8 pt-16">
              <Typography variant="bodySmall" className="text-center text-stone-500">
                Content with overflow command bar (max 4 actions)
              </Typography>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )
}
