import { Typography } from "../../components/core"
import { Plus, Edit, Trash2, Share, Download, Heart, Star, MessageSquare, Settings } from "lucide-react"

export function QuickActionsShowcase() {
  return (
    <div id="quick-actions" className="space-y-8">
      <div>
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
              {/* Primary FAB */}
              <div className="relative h-32 bg-stone-100 rounded-lg flex items-center justify-center">
                <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105">
                  <Plus className="w-6 h-6" />
                </button>
                <Typography variant="caption" color="muted" className="absolute bottom-2">
                  Primary FAB
                </Typography>
              </div>

              {/* Mini FAB */}
              <div className="relative h-32 bg-stone-100 rounded-lg flex items-center justify-center">
                <button className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105">
                  <Edit className="w-4 h-4" />
                </button>
                <Typography variant="caption" color="muted" className="absolute bottom-2">
                  Mini FAB
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Action Bar
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <Typography variant="body" className="text-stone-600 mb-4">
              Horizontal action bar with commonly used actions:
            </Typography>
            
            <div className="bg-stone-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Share className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <div className="w-px h-6 bg-stone-300"></div>
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white rounded transition-colors">
                    <Settings className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-100 text-red-600 rounded transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Speed Dial */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Speed Dial
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <Typography variant="body" className="text-stone-600 mb-4">
              Expandable FAB with multiple action options:
            </Typography>
            
            <div className="relative h-48 bg-stone-100 rounded-lg">
              <div className="absolute bottom-4 right-4">
                <div className="space-y-3">
                  {/* Secondary actions (normally hidden) */}
                  <div className="flex flex-col items-end gap-2">
                    <button className="w-10 h-10 bg-white hover:bg-stone-50 text-stone-600 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white hover:bg-stone-50 text-stone-600 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105">
                      <Share className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white hover:bg-stone-50 text-stone-600 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Primary FAB */}
                  <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <Typography variant="caption" color="muted" className="absolute top-4 left-4">
                Click FAB to expand actions
              </Typography>
            </div>
          </div>
        </div>

        {/* Contextual Actions */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Contextual Actions
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <Typography variant="body" className="text-stone-600 mb-4">
              Actions that appear based on user selection or context:
            </Typography>
            
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <Typography variant="body" className="text-blue-800">
                    3 items selected
                  </Typography>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Delete
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Export
                    </button>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Move
                    </button>
                  </div>
                </div>
              </div>
              
              <Typography variant="caption" color="muted">
                Selection-based action bar appears when items are selected
              </Typography>
            </div>
          </div>
        </div>

        <Typography variant="caption" color="muted" className="mt-4">
          Quick actions provide immediate access to frequent tasks through floating buttons, action bars, speed dials, and contextual menus.
        </Typography>
      </div>
    </div>
  )
}