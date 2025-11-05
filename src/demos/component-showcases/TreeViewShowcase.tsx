import { Typography } from "../../components/core"
import { Folder, Image, Video, Code, Package, GitBranch, Database, Globe } from "lucide-react"

export function TreeViewShowcase() {
  return (
    <div id="tree-view" className="space-y-8">
      <div>
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
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600">
                File system tree view with folders, files, and various file types represented by different icons.
              </Typography>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-blue-600" />
                  <Typography variant="body">📁 Project Root</Typography>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <Typography variant="body">📁 src</Typography>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <Typography variant="body">📄 App.tsx</Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-600" />
                      <Typography variant="body">📄 main.tsx</Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <Typography variant="body">📁 assets</Typography>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <Image className="w-4 h-4 text-purple-600" />
                      <Typography variant="body">🖼️ logo.png</Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-red-600" />
                      <Typography variant="body">🎥 demo.mp4</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Structure Tree */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Project Structure
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600 mb-4">
                Development project structure with different file types and nested folders.
              </Typography>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-orange-600" />
                  <Typography variant="body">🌳 Repository</Typography>
                </div>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-brown-600" />
                    <Typography variant="body">📦 package.json</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <Typography variant="body">📁 components</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-blue-600" />
                    <Typography variant="body">📁 utils</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-green-600" />
                    <Typography variant="body">🗄️ database.db</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <Typography variant="body">🌐 index.html</Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TreeView without lines */}
        <div className="space-y-4">
          <Typography variant="h4" className="mb-3">
            Compact Tree View
          </Typography>
          
          <div className="border border-stone-200 rounded-lg p-6 bg-white">
            <div className="p-4 bg-stone-100 rounded-lg">
              <Typography variant="body" className="text-stone-600 mb-4">
                Compact tree view without connecting lines for a cleaner appearance.
              </Typography>
              
              <div className="space-y-1">
                <Typography variant="body">🏠 Home</Typography>
                <Typography variant="body" className="ml-4">👤 Users</Typography>
                <Typography variant="body" className="ml-8">📋 Profiles</Typography>
                <Typography variant="body" className="ml-8">⚙️ Settings</Typography>
                <Typography variant="body" className="ml-4">📊 Reports</Typography>
                <Typography variant="body" className="ml-8">📈 Analytics</Typography>
                <Typography variant="body" className="ml-8">📋 Summary</Typography>
              </div>
            </div>
          </div>
        </div>

        <Typography variant="caption" color="muted" className="mt-4">
          Tree views support expandable/collapsible nodes, custom icons, badges, selection states, and keyboard navigation for hierarchical data display.
        </Typography>
      </div>
    </div>
  )
}