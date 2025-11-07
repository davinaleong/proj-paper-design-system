import { useState, useRef, useEffect } from "react"
import { Typography } from "../../components/core"
import { FileText, FolderOpen, Download, Copy, Edit, Trash2, Plus, Share, Heart, Star, Bookmark, MessageSquare } from "lucide-react"

export function MenuShowcase() {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false
  })
  const contextAreaRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    setContextMenu({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true
    })
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (contextAreaRef.current && !contextAreaRef.current.contains(e.target as Node)) {
      setContextMenu(prev => ({ ...prev, visible: false }))
    }
  }

  useEffect(() => {
    if (contextMenu.visible) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [contextMenu.visible])

  const handleMenuItemClick = (action: string) => {
    console.log(`Context menu action: ${action}`)
    setContextMenu(prev => ({ ...prev, visible: false }))
  }
  return (
    <div id="menu" className="space-y-8">
      <div>
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
              <div className="relative">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700">
                  File Menu
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 rounded-lg shadow-lg p-2 min-w-48">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <FileText className="w-4 h-4" />
                    <span>New File</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+N</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <FolderOpen className="w-4 h-4" />
                    <span>Open</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+O</span>
                  </div>
                  <hr className="my-1 border-stone-200" />
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <Download className="w-4 h-4" />
                    <span>Save</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+S</span>
                  </div>
                  <div className="px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    Save As...
                  </div>
                  <hr className="my-1 border-stone-200" />
                  <div className="px-3 py-2 text-stone-400 rounded text-sm cursor-not-allowed">
                    Exit
                  </div>
                </div>
              </div>

              <div className="relative">
                <button className="px-4 py-2 bg-green-600 text-white rounded-sm hover:bg-green-700">
                  Edit Menu
                </button>
                <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 rounded-lg shadow-lg p-2 min-w-48">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+C</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <Edit className="w-4 h-4" />
                    <span>Paste</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+V</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                    <span className="ml-auto text-xs text-stone-500">Del</span>
                  </div>
                  <hr className="my-1 border-stone-200" />
                  <div className="px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    Select All
                    <span className="ml-auto text-xs text-stone-500">Ctrl+A</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nested Menu */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Nested Menu Items
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <div className="relative">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-sm hover:bg-purple-700">
                Actions Menu
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white border border-stone-200 rounded-lg shadow-lg p-2 min-w-48">
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </div>
                <div className="relative group">
                  <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                    <span className="ml-auto">▶</span>
                  </div>
                  <div className="absolute left-full top-0 ml-1 bg-white border border-stone-200 rounded-lg shadow-lg p-2 min-w-40 opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                      <MessageSquare className="w-4 h-4" />
                      <span>Email</span>
                    </div>
                    <div className="px-3 py-2 hover:bg-stone-100 rounded text-sm">
                      Copy Link
                    </div>
                    <div className="px-3 py-2 hover:bg-stone-100 rounded text-sm">
                      Social Media
                    </div>
                  </div>
                </div>
                <hr className="my-1 border-stone-200" />
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Add to Favorites</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                  <Bookmark className="w-4 h-4" />
                  <span>Bookmark</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm">
                  <Star className="w-4 h-4" />
                  <span>Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right-click Context Menu */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Right-Click Context Menu
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <div 
              ref={contextAreaRef}
              className="relative p-4 bg-stone-100 rounded border-dashed border-2 border-stone-300 cursor-context-menu select-none"
              onContextMenu={handleContextMenu}
              onClick={() => setContextMenu(prev => ({ ...prev, visible: false }))}
            >
              <Typography variant="body" className="text-stone-600 text-center">
                Right-click this area to see a context menu
              </Typography>
              
              {/* Context Menu */}
              {contextMenu.visible && (
                <div 
                  className="absolute bg-white border border-stone-200 rounded-lg shadow-lg p-2 min-w-48 z-50"
                  style={{ 
                    left: `${contextMenu.x}px`, 
                    top: `${contextMenu.y}px`,
                    // Ensure menu doesn't go off-screen
                    transform: contextMenu.x > 200 ? 'translateX(-100%)' : 'none'
                  }}
                >
                  <div 
                    className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm cursor-pointer"
                    onClick={() => handleMenuItemClick('copy')}
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+C</span>
                  </div>
                  <div 
                    className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm cursor-pointer"
                    onClick={() => handleMenuItemClick('paste')}
                  >
                    <Edit className="w-4 h-4" />
                    <span>Paste</span>
                    <span className="ml-auto text-xs text-stone-500">Ctrl+V</span>
                  </div>
                  <hr className="my-1 border-stone-200" />
                  <div 
                    className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm cursor-pointer"
                    onClick={() => handleMenuItemClick('inspect')}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Inspect Element</span>
                  </div>
                  <div 
                    className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm cursor-pointer"
                    onClick={() => handleMenuItemClick('bookmark')}
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Add to Bookmarks</span>
                  </div>
                  <hr className="my-1 border-stone-200" />
                  <div 
                    className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 rounded text-sm cursor-pointer"
                    onClick={() => handleMenuItemClick('delete')}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                    <span className="text-red-600">Delete</span>
                  </div>
                </div>
              )}
            </div>
            <Typography variant="caption" color="muted" className="mt-2 block">
              Context menus appear on right-click and provide contextual actions relevant to the clicked element.
              {contextMenu.visible && (
                <span className="text-green-600 font-medium"> Menu is currently visible!</span>
              )}
            </Typography>
          </div>
        </div>

        <Typography variant="caption" color="muted" className="mt-4">
          Menus support nested items, separators, icons, keyboard shortcuts, disabled states, and various trigger methods including click, hover, and right-click.
        </Typography>
      </div>
    </div>
  )
}