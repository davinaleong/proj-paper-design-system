import { Bell, Upload, Search } from "lucide-react"
import { Typography, Icon } from "../../components/core"
import { EmptyState } from "../../components/data-display"
import { Button } from "../../components/forms"

export function EmptyStateShowcase() {
  return (
    <section id="empty-state" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Empty States
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Visual representation for empty or no-content states, providing clear feedback and guidance to users.
        </Typography>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic EmptyState */}
          <EmptyState
            title="No items found"
            description="There are no items to display at the moment."
          />
          
          {/* EmptyState with Icon */}
          <EmptyState
            title="No notifications"
            description="You're all caught up! Check back later for new notifications."
            icon={<Icon icon={Bell} size="lg" />}
          />
          
          {/* EmptyState with Action */}
          <EmptyState
            title="No files uploaded"
            description="Get started by uploading your first file to the system."
            icon={<Icon icon={Upload} size="lg" />}
            action={
              <Button variant="solid" size="sm">
                Upload File
              </Button>
            }
          />
          
          {/* Search EmptyState */}
          <EmptyState
            title="No search results"
            description="Try adjusting your search terms or filters to find what you're looking for."
            icon={<Icon icon={Search} size="lg" />}
            action={
              <Button variant="outline" size="sm">
                Clear Filters
              </Button>
            }
          />
        </div>
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Customizable title and description
          </Typography>
          <Typography variant="body">
            ✅ Optional icon support
          </Typography>
          <Typography variant="body">
            ✅ Action button integration
          </Typography>
          <Typography variant="body">
            ✅ Responsive design
          </Typography>
        </div>
      </div>
    </section>
  )
}