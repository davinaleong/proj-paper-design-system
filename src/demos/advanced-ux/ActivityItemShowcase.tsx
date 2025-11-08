import { useState } from 'react'
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Upload,
  Trash2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react'
import { AdvancedActivityItem as ActivityItem } from '../../components'
import type { ActivityItemType, ActivityItemAction } from '../../components'
import { Typography } from '../../components/core/Typography'
import { Paper } from '../../components/core/Paper'
import { Switch } from '../../components/forms/Switch'

// Sample activity data
const sampleActivities = [
  {
    id: '1',
    actor: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      role: 'Product Designer',
      href: '#profile-sarah',
    },
    content: 'Created a new design system component for activity feeds. This includes multiple variants and comprehensive accessibility features.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    type: 'action' as ActivityItemType,
    metadata: 'This activity includes additional details about the design system update, including breaking changes and migration guide.',
    unread: true,
  },
  {
    id: '2',
    actor: {
      name: 'Alex Rivera', 
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      role: 'Frontend Developer',
    },
    content: 'Commented on the pull request: "The implementation looks good, but we should consider adding more test coverage for the edge cases."',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
    type: 'comment' as ActivityItemType,
  },
  {
    id: '3',
    actor: {
      name: 'System',
      role: 'Automated',
    },
    content: 'Deployed version 2.1.0 to production successfully. All health checks passed.',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    type: 'system' as ActivityItemType,
  },
  {
    id: '4',
    actor: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      role: 'UX Researcher',
    },
    content: 'Updated the user research findings document with new insights from the latest usability testing session.',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    type: 'update' as ActivityItemType,
    metadata: 'Key findings include improved task completion rates and reduced cognitive load in the new interface design.',
  },
  {
    id: '5',
    actor: {
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      role: 'Team Lead',
    },
    content: 'You have been mentioned in a discussion about the Q4 roadmap planning meeting scheduled for next week.',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    type: 'notification' as ActivityItemType,
    unread: true,
  },
]

const getActionButtons = (activityId: string): ActivityItemAction[] => [
  {
    id: `like-${activityId}`,
    label: 'Like',
    icon: Heart,
    onClick: () => console.log(`Liked activity ${activityId}`),
  },
  {
    id: `comment-${activityId}`,
    label: 'Comment',
    icon: MessageCircle,
    onClick: () => console.log(`Comment on activity ${activityId}`),
  },
  {
    id: `share-${activityId}`,
    label: 'Share',
    icon: Share2,
    onClick: () => console.log(`Shared activity ${activityId}`),
  },
  {
    id: `bookmark-${activityId}`,
    label: 'Bookmark',
    icon: Bookmark,
    onClick: () => console.log(`Bookmarked activity ${activityId}`),
  },
  {
    id: `delete-${activityId}`,
    label: 'Delete',
    icon: Trash2,
    onClick: () => console.log(`Deleted activity ${activityId}`),
    destructive: true,
  },
]

export function ActivityItemShowcase() {
  const [showRelativeTime, setShowRelativeTime] = useState(true)
  const [showActions, setShowActions] = useState(true)
  const [compact, setCompact] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<string>('')

  const handleActivityClick = (activityId: string) => {
    setSelectedActivity(selectedActivity === activityId ? '' : activityId)
  }

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="mb-2">
          Activity Item Component
        </Typography>
        <Typography variant="body" className="text-stone-600 mb-6">
          Display activity feeds, notifications, and timeline events with rich content and actions.
        </Typography>
      </div>

      {/* Controls */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">
          Interactive Controls
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Relative Time</Typography>
            <Switch checked={showRelativeTime} onChange={(checked) => setShowRelativeTime(checked)} />
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Show Actions</Typography>
            <Switch checked={showActions} onChange={(checked) => setShowActions(checked)} />
          </div>
          <div className="flex items-center justify-between">
            <Typography variant="bodySmall">Compact View</Typography>
            <Switch checked={compact} onChange={(checked) => setCompact(checked)} />
          </div>
        </div>
        {selectedActivity && (
          <div className="p-3 bg-stone-50 rounded border">
            <Typography variant="bodySmall" className="font-mono">
              Selected Activity: <span className="text-blue-600">{selectedActivity}</span>
            </Typography>
          </div>
        )}
      </Paper>

      {/* Activity Feed Example */}
      <div>
        <Typography variant="h3" className="mb-4">
          Activity Feed
        </Typography>
        <Paper className="p-6">
          <Typography variant="bodySmall" className="text-stone-600 mb-4">
            A typical activity feed with various types of activities
          </Typography>
          <div className="space-y-4">
            {sampleActivities.map((activity) => (
              <ActivityItem
                key={activity.id}
                actor={activity.actor}
                content={activity.content}
                timestamp={activity.timestamp}
                type={activity.type}
                variant={compact ? 'compact' : 'default'}
                metadata={activity.metadata}
                actions={showActions ? getActionButtons(activity.id) : []}
                unread={activity.unread}
                showRelativeTime={showRelativeTime}
                onClick={() => handleActivityClick(activity.id)}
                data-testid={`activity-${activity.id}`}
              />
            ))}
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
              <ActivityItem
                actor={{
                  name: 'John Smith',
                  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150',
                  role: 'Software Engineer',
                }}
                content={`This is an activity item in ${size} size. Notice how the avatar, text, and spacing scale appropriately.`}
                timestamp={new Date()}
                type="action"
                size={size}
                actions={showActions ? getActionButtons(`size-${size}`) : []}
                showRelativeTime={showRelativeTime}
              />
            </Paper>
          ))}
        </div>
      </div>

      {/* Activity Types */}
      <div>
        <Typography variant="h3" className="mb-4">
          Activity Types
        </Typography>
        <Paper className="p-6">
          <Typography variant="bodySmall" className="text-stone-600 mb-4">
            Different activity types with their associated icons and colors
          </Typography>
          <div className="grid gap-4">
            {[
              { type: 'comment' as ActivityItemType, label: 'Comment', content: 'Added a comment to the discussion' },
              { type: 'action' as ActivityItemType, label: 'Action', content: 'Performed an important action' },
              { type: 'update' as ActivityItemType, label: 'Update', content: 'Updated project settings' },
              { type: 'system' as ActivityItemType, label: 'System', content: 'System maintenance completed' },
              { type: 'notification' as ActivityItemType, label: 'Notification', content: 'You received a new notification' },
              { type: 'custom' as ActivityItemType, label: 'Custom', content: 'Custom activity type example' },
            ].map((item) => (
              <ActivityItem
                key={item.type}
                actor={{
                  name: 'Demo User',
                  role: item.label,
                }}
                content={item.content}
                timestamp={new Date()}
                type={item.type}
                showRelativeTime={showRelativeTime}
              />
            ))}
          </div>
        </Paper>
      </div>

      {/* Visual Variants */}
      <div>
        <Typography variant="h3" className="mb-4">
          Visual Variants
        </Typography>
        <div className="space-y-6">
          {[
            { 
              variant: 'default' as const, 
              label: 'Default', 
              description: 'Standard appearance with stone background, rounded corners, and subtle border',
              containerClass: 'bg-gray-50 p-4 rounded-lg'
            },
            { 
              variant: 'compact' as const, 
              label: 'Compact', 
              description: 'Minimal design with transparent background, bottom border only, reduced padding - perfect for dense activity feeds',
              containerClass: 'bg-white border-l-4 border-l-blue-200 p-4'
            },
            { 
              variant: 'detailed' as const, 
              label: 'Detailed', 
              description: 'Premium appearance with white background, enhanced shadows, stronger borders, and hover effects',
              containerClass: 'bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg'
            },
          ].map((item) => (
            <div key={item.variant} className={item.containerClass}>
              <Typography variant="h4" className="mb-2">
                {item.label} Variant
              </Typography>
              <Typography variant="bodySmall" className="text-stone-600 mb-4">
                {item.description}
              </Typography>
              <ActivityItem
                actor={{
                  name: 'Jane Doe',
                  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150',
                  role: 'Product Manager',
                }}
                content={`This activity item uses the ${item.variant} variant. Notice the different visual styling, spacing, and layout approach.`}
                timestamp={new Date()}
                type="action"
                variant={item.variant}
                metadata="Additional metadata content that can be expanded or collapsed to show more details about this activity."
                actions={showActions ? getActionButtons(`variant-${item.variant}`) : []}
                showRelativeTime={showRelativeTime}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Side-by-Side Comparison */}
      <div>
        <Typography variant="h3" className="mb-4">
          Side-by-Side Variant Comparison
        </Typography>
        <Paper className="p-6">
          <Typography variant="bodySmall" className="text-stone-600 mb-4">
            Same content rendered with different variants to highlight the visual differences
          </Typography>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { variant: 'default' as const, label: 'Default' },
              { variant: 'compact' as const, label: 'Compact' },
              { variant: 'detailed' as const, label: 'Detailed' },
            ].map((item) => (
              <div key={`compare-${item.variant}`} className="space-y-2">
                <Typography variant="bodySmall" weight="semibold" className="text-center">
                  {item.label}
                </Typography>
                <ActivityItem
                  actor={{
                    name: 'Alex Chen',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
                    role: 'Developer',
                  }}
                  content="Completed the feature implementation and submitted for code review."
                  timestamp={new Date(Date.now() - 45 * 60 * 1000)}
                  type="action"
                  variant={item.variant}
                  showRelativeTime={showRelativeTime}
                />
              </div>
            ))}
          </div>
        </Paper>
      </div>

      {/* Custom Icons and Colors */}
      <div>
        <Typography variant="h3" className="mb-4">
          Custom Icons and Colors
        </Typography>
        <Paper className="p-6">
          <Typography variant="bodySmall" className="text-stone-600 mb-4">
            Activities with custom icons and colors
          </Typography>
          <div className="grid gap-4">
            <ActivityItem
              actor={{
                name: 'Upload Bot',
                role: 'Automated System',
              }}
              content="File upload completed successfully"
              timestamp={new Date()}
              type="custom"
              icon={Upload}
              iconColor="text-green-600"
              showRelativeTime={showRelativeTime}
            />
            <ActivityItem
              actor={{
                name: 'Security Scanner',
                role: 'Security System',
              }}
              content="Security scan detected potential vulnerabilities"
              timestamp={new Date()}
              type="custom"
              icon={AlertCircle}
              iconColor="text-red-600"
              showRelativeTime={showRelativeTime}
            />
            <ActivityItem
              actor={{
                name: 'Integration Service',
                role: 'External API',
              }}
              content="Successfully synchronized data with external service"
              timestamp={new Date()}
              type="custom"
              icon={ExternalLink}
              iconColor="text-purple-600"
              showRelativeTime={showRelativeTime}
            />
          </div>
        </Paper>
      </div>

      {/* Interactive Features */}
      <div>
        <Typography variant="h3" className="mb-4">
          Interactive Features
        </Typography>
        <Paper className="p-6">
          <Typography variant="bodySmall" className="text-stone-600 mb-4">
            Activities with expandable metadata and actions
          </Typography>
          <div className="space-y-4">
            <ActivityItem
              actor={{
                name: 'Emma Wilson',
                avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
                role: 'UI Designer',
                href: '#profile-emma',
              }}
              content="Shared a comprehensive design review with detailed feedback and recommendations for the new dashboard interface."
              timestamp={new Date(Date.now() - 30 * 60 * 1000)}
              type="action"
              metadata={
                <div className="space-y-2">
                  <Typography variant="bodySmall" weight="semibold">
                    Design Review Summary:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1 text-sm text-stone-600">
                    <li>Navigation patterns are intuitive and consistent</li>
                    <li>Color contrast meets WCAG AA standards</li>
                    <li>Recommend adjusting button sizes for better mobile experience</li>
                    <li>Consider adding loading states for better user feedback</li>
                  </ul>
                </div>
              }
              actions={[
                {
                  id: 'view-review',
                  label: 'View Full Review',
                  icon: ExternalLink,
                  onClick: () => console.log('Viewing full review'),
                },
                {
                  id: 'respond',
                  label: 'Respond',
                  icon: MessageCircle,
                  onClick: () => console.log('Responding to review'),
                },
                {
                  id: 'approve',
                  label: 'Approve',
                  icon: Heart,
                  onClick: () => console.log('Approving review'),
                },
              ]}
              unread={true}
              showRelativeTime={showRelativeTime}
            />
          </div>
        </Paper>
      </div>
    </div>
  )
}