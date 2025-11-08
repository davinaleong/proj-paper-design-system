import { 
  CheckCircle, Clock, GitCommit, AlertCircle, MessageSquare, Target, Users, DollarSign 
} from "lucide-react"
import { Typography, Icon } from "../../components/core"
import { Timeline } from "../../components/data-display"
import { Button } from "../../components/forms"

export function TimelineShowcase() {
  return (
    <section id="timeline" className="py-12 space-y-8">
      <div className="space-y-4">
        <Typography variant="h2" className="text-gray-900">
          Timeline
        </Typography>
        <Typography variant="bodyLarge" className="text-gray-600">
          Display chronological sequences of events, activities, or processes with visual indicators and rich content.
        </Typography>
      </div>

      <div className="space-y-8">
        {/* Basic Timeline */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Project Timeline
          </Typography>
          <Timeline
            items={[
              {
                id: "1",
                title: "Project Kickoff",
                description: "Initial meeting with stakeholders and team members",
                timestamp: "2024-01-15",
                variant: "success",
                icon: <Icon icon={CheckCircle} size="sm" />,
                metadata: (
                  <div className="flex gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Completed
                    </span>
                  </div>
                )
              },
              {
                id: "2", 
                title: "Design Phase",
                description: "Create wireframes, mockups, and design system components",
                timestamp: "2024-01-22",
                variant: "info",
                icon: <Icon icon={Clock} size="sm" />,
                metadata: (
                  <div className="flex gap-2">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      In Progress
                    </span>
                  </div>
                )
              },
              {
                id: "3",
                title: "Development Sprint 1",
                description: "Implement core functionality and components",
                timestamp: "2024-02-05",
                variant: "warning",
                icon: <Icon icon={GitCommit} size="sm" />,
                action: (
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                )
              },
              {
                id: "4",
                title: "Testing & QA",
                description: "Comprehensive testing and quality assurance",
                timestamp: "2024-02-20",
                variant: "default",
                icon: <Icon icon={AlertCircle} size="sm" />
              }
            ]}
            size="md"
          />
        </div>

        {/* Size Variants */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Size Variants
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Small Timeline */}
            <div>
              <Typography variant="body" className="mb-2 font-medium text-gray-600">
                Small
              </Typography>
              <Timeline
                items={[
                  {
                    id: "s1",
                    title: "Task Created",
                    timestamp: "10:30 AM",
                    variant: "success",
                    icon: <Icon icon={CheckCircle} size="xs" />
                  },
                  {
                    id: "s2",
                    title: "In Review",
                    timestamp: "2:15 PM", 
                    variant: "info",
                    icon: <Icon icon={Clock} size="xs" />
                  }
                ]}
                size="sm"
              />
            </div>

            {/* Medium Timeline */}
            <div>
              <Typography variant="body" className="mb-2 font-medium text-gray-600">
                Medium (Default)
              </Typography>
              <Timeline
                items={[
                  {
                    id: "m1",
                    title: "Comment Added",
                    description: "New feedback received",
                    timestamp: "1 hour ago",
                    variant: "info",
                    icon: <Icon icon={MessageSquare} size="sm" />
                  },
                  {
                    id: "m2",
                    title: "Status Updated",
                    timestamp: "30 min ago",
                    variant: "success", 
                    icon: <Icon icon={CheckCircle} size="sm" />
                  }
                ]}
                size="md"
              />
            </div>

            {/* Large Timeline */}
            <div>
              <Typography variant="body" className="mb-2 font-medium text-gray-600">
                Large
              </Typography>
              <Timeline
                items={[
                  {
                    id: "l1",
                    title: "Milestone Reached",
                    description: "Successfully completed phase 1 of the project",
                    timestamp: "Yesterday",
                    variant: "success",
                    icon: <Icon icon={Target} size="md" />,
                    action: (
                      <Button variant="solid" size="sm">
                        Celebrate
                      </Button>
                    )
                  }
                ]}
                size="lg"
              />
            </div>
          </div>
        </div>

        {/* Alternating Timeline */}
        <div className="space-y-4">
          <Typography variant="h3" className="text-gray-800">
            Alternating Layout
          </Typography>
          <Timeline
            items={[
              {
                id: "a1",
                title: "User Registration",
                description: "New user signed up for the platform",
                timestamp: "9:00 AM",
                variant: "success",
                icon: <Icon icon={Users} size="sm" />
              },
              {
                id: "a2",
                title: "Payment Processing",
                description: "Subscription payment completed successfully",
                timestamp: "9:15 AM",
                variant: "success",
                icon: <Icon icon={DollarSign} size="sm" />
              },
              {
                id: "a3",
                title: "System Alert",
                description: "High traffic detected, scaling resources",
                timestamp: "9:45 AM",
                variant: "warning",
                icon: <Icon icon={AlertCircle} size="sm" />
              },
              {
                id: "a4",
                title: "Issue Resolved",
                description: "All systems operating normally",
                timestamp: "10:30 AM",
                variant: "success",
                icon: <Icon icon={CheckCircle} size="sm" />
              }
            ]}
            alternate={true}
            size="md"
          />
        </div>
        
        <div className="space-y-2">
          <Typography variant="body">
            ✅ Chronological event sequencing
          </Typography>
          <Typography variant="body">
            ✅ Rich content with icons and metadata
          </Typography>
          <Typography variant="body">
            ✅ Multiple size variants (sm, md, lg)
          </Typography>
          <Typography variant="body">
            ✅ Color-coded variants for different states
          </Typography>
          <Typography variant="body">
            ✅ Alternating layout support
          </Typography>
          <Typography variant="body">
            ✅ Action button integration
          </Typography>
        </div>
      </div>
    </section>
  )
}