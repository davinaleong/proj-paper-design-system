import { useState } from 'react'
import { 
  Bell,
  MessageSquare, 
  AlertTriangle, 
  CheckCircle, 
  AlertCircle,
  RefreshCw,
  Clock,
  Users,
  Settings,
  Heart,
  Zap,
  Trophy,
  Calendar,
  FileText,
  Download,
  Share2,
  Eye,
  MessageCircle,
  UserMinus,
} from 'lucide-react'
import { NotificationCenter } from '../../components/premium/NotificationCenter'
import { Button } from '../../components/forms/Button'
import { Typography } from '../../components/core/Typography'
import { Container } from '../../components/core/Container'
import { Section } from '../../components/layout/Section'
import { Card } from '../../components/layout/Card'
import { Flex } from '../../components/layout/Flex'
import type { Notification, NotificationStatus } from '../../components/premium/NotificationCenter'

// Sample notifications data
const createSampleNotifications = (): Notification[] => [
  // Recent urgent notifications
  {
    id: '1',
    title: 'System maintenance scheduled',
    content: 'Scheduled maintenance will begin in 2 hours. Services may be temporarily unavailable.',
    type: 'warning',
    priority: 'urgent',
    status: 'unread',
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    category: 'system',
    icon: AlertTriangle,
    iconColor: 'text-orange-600',
    sender: {
      id: 'system',
      name: 'System Administrator',
      role: 'Admin',
      avatar: '/api/placeholder/32/32',
    },
    actions: [
      {
        id: 'view-schedule',
        label: 'View Schedule',
        icon: Calendar,
        primary: true,
        onClick: (notification) => console.log('View schedule for:', notification.id),
      },
      {
        id: 'dismiss',
        label: 'Dismiss',
        onClick: (notification) => console.log('Dismiss:', notification.id),
      },
    ],
  },
  {
    id: '2',
    title: 'New message from Sarah Chen',
    content: 'Hey! I wanted to follow up on our discussion about the new project timeline.',
    type: 'message',
    priority: 'high',
    status: 'unread',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    category: 'messages',
    sender: {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: '/api/placeholder/32/32',
    },
    actions: [
      {
        id: 'reply',
        label: 'Reply',
        icon: MessageSquare,
        primary: true,
        onClick: (notification) => console.log('Reply to:', notification.id),
      },
      {
        id: 'view-thread',
        label: 'View Thread',
        icon: Eye,
        onClick: (notification) => console.log('View thread:', notification.id),
      },
    ],
  },
  {
    id: '3',
    title: 'Deployment completed successfully',
    content: 'Version 2.1.0 has been deployed to production. All systems are operational.',
    type: 'success',
    priority: 'medium',
    status: 'unread',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    category: 'deployments',
    icon: CheckCircle,
    iconColor: 'text-green-600',
    sender: {
      id: 'deploy-bot',
      name: 'Deploy Bot',
      role: 'Automation',
      avatar: '/api/placeholder/32/32',
    },
    metadata: 'Build #1247 • Duration: 3m 42s',
    actions: [
      {
        id: 'view-logs',
        label: 'View Logs',
        icon: FileText,
        onClick: (notification) => console.log('View logs:', notification.id),
      },
      {
        id: 'view-metrics',
        label: 'View Metrics',
        icon: Zap,
        onClick: (notification) => console.log('View metrics:', notification.id),
      },
    ],
  },
  {
    id: '4',
    title: 'Security alert: Failed login attempts',
    content: 'Multiple failed login attempts detected from IP 192.168.1.100.',
    type: 'error',
    priority: 'urgent',
    status: 'read',
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    category: 'security',
    icon: AlertCircle,
    iconColor: 'text-red-600',
    sender: {
      id: 'security-system',
      name: 'Security System',
      role: 'Security',
      avatar: '/api/placeholder/32/32',
    },
    metadata: 'IP: 192.168.1.100 • Attempts: 5',
    actions: [
      {
        id: 'block-ip',
        label: 'Block IP',
        icon: UserMinus,
        destructive: true,
        onClick: (notification) => console.log('Block IP for:', notification.id),
      },
      {
        id: 'investigate',
        label: 'Investigate',
        icon: Eye,
        primary: true,
        onClick: (notification) => console.log('Investigate:', notification.id),
      },
    ],
  },
  {
    id: '5',
    title: 'Weekly report available',
    content: 'Your weekly analytics report is ready for review.',
    type: 'info',
    priority: 'low',
    status: 'read',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    category: 'reports',
    sender: {
      id: 'analytics-bot',
      name: 'Analytics Bot',
      role: 'Analytics',
      avatar: '/api/placeholder/32/32',
    },
    actions: [
      {
        id: 'download',
        label: 'Download',
        icon: Download,
        primary: true,
        onClick: (notification) => console.log('Download report:', notification.id),
      },
      {
        id: 'share',
        label: 'Share',
        icon: Share2,
        onClick: (notification) => console.log('Share report:', notification.id),
      },
    ],
  },
  {
    id: '6',
    title: 'Team member joined',
    content: 'Alex Rodriguez has joined the Design Team.',
    type: 'info',
    priority: 'low',
    status: 'read',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    category: 'team',
    sender: {
      id: 'hr-system',
      name: 'HR System',
      role: 'Human Resources',
      avatar: '/api/placeholder/32/32',
    },
    actions: [
      {
        id: 'welcome',
        label: 'Send Welcome',
        icon: Heart,
        primary: true,
        onClick: (notification) => console.log('Send welcome:', notification.id),
      },
      {
        id: 'view-profile',
        label: 'View Profile',
        icon: Users,
        onClick: (notification) => console.log('View profile:', notification.id),
      },
    ],
  },
  // Additional notifications for variety
  {
    id: '7',
    title: 'Backup completed',
    content: 'Daily backup completed successfully. 2.3 GB backed up.',
    type: 'success',
    priority: 'low',
    status: 'read',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    category: 'system',
    dismissible: false,
  },
  {
    id: '8',
    title: 'You have 3 unread comments',
    content: 'New comments on your recent blog post "Getting Started with React".',
    type: 'info',
    priority: 'medium',
    status: 'unread',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
    category: 'social',
    actions: [
      {
        id: 'view-comments',
        label: 'View Comments',
        icon: MessageCircle,
        primary: true,
        onClick: (notification) => console.log('View comments:', notification.id),
      },
    ],
  },
  {
    id: '9',
    title: 'Achievement unlocked!',
    content: 'Congratulations! You\'ve completed 100 tasks this month.',
    type: 'success',
    priority: 'medium',
    status: 'read',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    category: 'achievements',
    icon: Trophy,
    iconColor: 'text-yellow-600',
    actions: [
      {
        id: 'share-achievement',
        label: 'Share',
        icon: Share2,
        onClick: (notification) => console.log('Share achievement:', notification.id),
      },
    ],
  },
  {
    id: '10',
    title: 'Reminder: Meeting in 15 minutes',
    content: 'Don\'t forget about your meeting with the development team.',
    type: 'reminder',
    priority: 'high',
    status: 'unread',
    timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago (yesterday)
    category: 'calendar',
    icon: Clock,
    iconColor: 'text-indigo-600',
    actions: [
      {
        id: 'join-meeting',
        label: 'Join Meeting',
        icon: Users,
        primary: true,
        onClick: (notification) => console.log('Join meeting:', notification.id),
      },
      {
        id: 'reschedule',
        label: 'Reschedule',
        icon: Calendar,
        onClick: (notification) => console.log('Reschedule:', notification.id),
      },
    ],
  },
]

export function NotificationCenterShowcase() {
  const [notifications, setNotifications] = useState<Notification[]>(createSampleNotifications())
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [variant, setVariant] = useState<'default' | 'compact' | 'floating'>('default')
  const [groupBy, setGroupBy] = useState<'date' | 'category' | 'type' | 'priority' | false>(false)
  
  const handleNotificationClick = (notification: Notification) => {
    console.log('Clicked notification:', notification.id)
  }
  
  const handleNotificationDismiss = (notification: Notification) => {
    setNotifications(prev => prev.filter(n => n.id !== notification.id))
  }
  
  const handleNotificationStatusChange = (notification: Notification, status: NotificationStatus) => {
    setNotifications(prev => 
      prev.map(n => n.id === notification.id ? { ...n, status } : n)
    )
  }
  
  const handleMarkAllRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, status: 'read' as NotificationStatus }))
    )
  }
  
  const handleClearAll = () => {
    setNotifications([])
  }
  
  const handleSearchChange = (query: string) => {
    console.log('Search query:', query)
  }
  
  const resetNotifications = () => {
    setNotifications(createSampleNotifications())
  }
  
  const addRandomNotification = () => {
    const types: Array<Notification['type']> = ['info', 'success', 'warning', 'error', 'message', 'system', 'reminder', 'update']
    const priorities: Array<Notification['priority']> = ['low', 'medium', 'high', 'urgent']
    const titles = [
      'New task assigned',
      'File uploaded successfully',
      'Server performance alert',
      'Comment on your post',
      'System update available',
      'Backup completed',
      'Meeting reminder',
      'New team member',
    ]
    
    const randomType = types[Math.floor(Math.random() * types.length)]
    const randomPriority = priorities[Math.floor(Math.random() * priorities.length)]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]
    
    const newNotification: Notification = {
      id: `random-${Date.now()}`,
      title: randomTitle,
      content: 'This is a randomly generated notification for testing purposes.',
      type: randomType,
      priority: randomPriority,
      status: 'unread',
      timestamp: new Date(),
      category: 'testing',
      sender: {
        id: 'test-user',
        name: 'Test User',
        role: 'Tester',
        avatar: '/api/placeholder/32/32',
      },
    }
    
    setNotifications(prev => [newNotification, ...prev])
  }
  
  const unreadCount = notifications.filter(n => n.status === 'unread').length
  
  return (
    <Container size="full" className="py-8">
      <Section>
        <div className="mb-8">
          <Typography variant="h1" className="mb-4">
            NotificationCenter Component
          </Typography>
          <Typography variant="body" className="text-stone-600 mb-6">
            A comprehensive notification management system with filtering, grouping, search, 
            and bulk actions. Perfect for displaying system alerts, messages, and user activities.
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
              <Typography variant="bodySmall" className="text-stone-500 mb-1">
                Total Notifications
              </Typography>
              <Typography variant="h3" className="text-blue-600">
                {notifications.length}
              </Typography>
            </Card>
            <Card className="p-4">
              <Typography variant="bodySmall" className="text-stone-500 mb-1">
                Unread
              </Typography>
              <Typography variant="h3" className="text-orange-600">
                {unreadCount}
              </Typography>
            </Card>
            <Card className="p-4">
              <Typography variant="bodySmall" className="text-stone-500 mb-1">
                Urgent
              </Typography>
              <Typography variant="h3" className="text-red-600">
                {notifications.filter(n => n.priority === 'urgent').length}
              </Typography>
            </Card>
            <Card className="p-4">
              <Typography variant="bodySmall" className="text-stone-500 mb-1">
                Categories
              </Typography>
              <Typography variant="h3" className="text-green-600">
                {new Set(notifications.map(n => n.category)).size}
              </Typography>
            </Card>
          </div>
        </div>
        
        {/* Controls */}
        <Card className="p-6 mb-8">
          <Typography variant="h3" className="mb-4">
            Configuration
          </Typography>
          
          <Flex direction="column" gap="lg">
            <Flex gap="md" wrap>
              <div>
                <Typography variant="bodySmall" weight="semibold" className="mb-2 block">
                  Size
                </Typography>
                <Flex gap="xs">
                  {(['sm', 'md', 'lg'] as const).map((s) => (
                    <Button
                      key={s}
                      variant={size === s ? 'solid' : 'outline'}
                      size="sm"
                      onClick={() => setSize(s)}
                    >
                      {s.toUpperCase()}
                    </Button>
                  ))}
                </Flex>
              </div>
              
              <div>
                <Typography variant="bodySmall" weight="semibold" className="mb-2 block">
                  Variant
                </Typography>
                <Flex gap="xs">
                  {(['default', 'compact', 'floating'] as const).map((v) => (
                    <Button
                      key={v}
                      variant={variant === v ? 'solid' : 'outline'}
                      size="sm"
                      onClick={() => setVariant(v)}
                    >
                      {v.charAt(0).toUpperCase() + v.slice(1)}
                    </Button>
                  ))}
                </Flex>
              </div>
              
              <div>
                <Typography variant="bodySmall" weight="semibold" className="mb-2 block">
                  Group By
                </Typography>
                <Flex gap="xs">
                  {([false, 'date', 'category', 'type', 'priority'] as const).map((g) => (
                    <Button
                      key={g || 'none'}
                      variant={groupBy === g ? 'solid' : 'outline'}
                      size="sm"
                      onClick={() => setGroupBy(g)}
                    >
                      {g || 'None'}
                    </Button>
                  ))}
                </Flex>
              </div>
            </Flex>
            
            <Flex gap="md" wrap>
              <Button
                variant="outline"
                onClick={addRandomNotification}
                icon={Bell}
              >
                Add Notification
              </Button>
              <Button
                variant="outline"
                onClick={resetNotifications}
                icon={RefreshCw}
              >
                Reset
              </Button>
              <Button
                variant="ghost"
                onClick={() => setNotifications([])}
                icon={AlertCircle}
                className="text-red-600 hover:text-red-700"
              >
                Clear All
              </Button>
            </Flex>
          </Flex>
        </Card>
        
        {/* Live Example */}
        <Card className="p-6">
          <Typography variant="h3" className="mb-4">
            Live Example
          </Typography>
          
          <div className="flex justify-center">
            <NotificationCenter
              notifications={notifications}
              size={size}
              variant={variant}
              groupBy={groupBy}
              showSearch={true}
              showFilters={true}
              showMarkAllRead={true}
              showClearAll={true}
              onNotificationClick={handleNotificationClick}
              onNotificationDismiss={handleNotificationDismiss}
              onNotificationStatusChange={handleNotificationStatusChange}
              onMarkAllRead={handleMarkAllRead}
              onClearAll={handleClearAll}
              onSearchChange={handleSearchChange}
              data-testid="notification-center-demo"
            />
          </div>
        </Card>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <Typography variant="h4">
                Smart Notifications
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Comprehensive notification types with priority levels, timestamps, 
              and rich metadata support.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <Typography variant="h4">
                Sender Information
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Rich sender profiles with avatars, names, roles, and contextual information.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <Typography variant="h4">
                Advanced Filtering
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Search, filter by type/status/priority, and group notifications 
              for better organization.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              <Typography variant="h4">
                Interactive Actions
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Custom actions with primary/secondary styling, icons, and 
              destructive action support.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-teal-600" />
              </div>
              <Typography variant="h4">
                Status Management
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Read/unread status tracking with bulk operations for 
              efficient notification management.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <Typography variant="h4">
                Priority System
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Four-level priority system with visual indicators and 
              urgent notification highlighting.
            </Typography>
          </Card>
        </div>
        
        {/* Code Example */}
        <Card className="p-6 mt-8">
          <Typography variant="h3" className="mb-4">
            Usage Example
          </Typography>
          <div className="bg-stone-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-stone-100">
              <code>{`import { NotificationCenter } from '@/components/premium/NotificationCenter'

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New message received',
      content: 'You have a new message from Sarah Chen.',
      type: 'message',
      priority: 'high',
      status: 'unread',
      timestamp: new Date(),
      sender: {
        id: 'sarah-chen',
        name: 'Sarah Chen',
        role: 'Product Manager',
        avatar: '/avatars/sarah.jpg',
      },
      actions: [
        {
          id: 'reply',
          label: 'Reply',
          primary: true,
          onClick: (notification) => handleReply(notification),
        },
      ],
    },
  ])

  return (
    <NotificationCenter
      notifications={notifications}
      size="md"
      variant="default"
      groupBy="date"
      showSearch={true}
      showFilters={true}
      onNotificationClick={handleNotificationClick}
      onNotificationDismiss={handleNotificationDismiss}
      onNotificationStatusChange={handleStatusChange}
      onMarkAllRead={handleMarkAllRead}
      onClearAll={handleClearAll}
    />
  )
}`}</code>
            </pre>
          </div>
        </Card>
      </Section>
    </Container>
  )
}