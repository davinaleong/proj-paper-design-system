import { useState, useMemo } from 'react'
import {
  Search,
  CheckCheck,
  Trash2,
  X,
  Bell,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Info,
  MessageSquare,
  RefreshCw,
  Clock,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { Input } from '../../forms/Input'
import { Button } from '../../forms/Button'
import { IconButton } from '../../forms/IconButton'
import { Typography } from '../../core/Typography'
import { Avatar } from '../../layout/Avatar'
import { Badge } from '../../layout/Badge'
import { cn } from '../../../utils/cn'
import type { NotificationCenterProps, Notification, NotificationGroup, NotificationStatus } from './types'

const sizeClasses = {
  sm: {
    container: 'w-80 max-h-96',
    header: 'p-3',
    content: 'px-3 pb-3',
    notification: 'p-3 gap-3',
    text: 'text-sm',
    title: 'text-sm',
    icon: 'h-4 w-4',
    avatar: 'h-6 w-6',
    action: 'h-7 px-2 text-xs',
  },
  md: {
    container: 'w-96 max-h-[32rem]',
    header: 'p-4',
    content: 'px-4 pb-4',
    notification: 'p-4 gap-3',
    text: 'text-sm',
    title: 'text-base',
    icon: 'h-5 w-5',
    avatar: 'h-8 w-8',
    action: 'h-8 px-3 text-sm',
  },
  lg: {
    container: 'w-[28rem] max-h-[36rem]',
    header: 'p-5',
    content: 'px-5 pb-5',
    notification: 'p-5 gap-4',
    text: 'text-base',
    title: 'text-lg',
    icon: 'h-6 w-6',
    avatar: 'h-10 w-10',
    action: 'h-9 px-4 text-sm',
  },
}

const variantClasses = {
  default: 'bg-white border border-stone-300 rounded-lg shadow-lg',
  compact: 'bg-stone-50 border border-stone-200 rounded-md shadow-md',
  floating: 'bg-white border border-stone-300 rounded-xl shadow-xl backdrop-blur-sm',
}

const typeIcons = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
  system: RefreshCw,
  message: MessageSquare,
  update: Bell,
  reminder: Clock,
}

const typeColors = {
  info: 'text-blue-600',
  success: 'text-green-600',
  warning: 'text-orange-600',
  error: 'text-red-600',
  system: 'text-gray-600',
  message: 'text-purple-600',
  update: 'text-teal-600',
  reminder: 'text-indigo-600',
}

const priorityColors = {
  low: 'bg-gray-100 text-gray-700',
  medium: 'bg-blue-100 text-blue-700',
  high: 'bg-orange-100 text-orange-700',
  urgent: 'bg-red-100 text-red-700',
}

function formatTimestamp(timestamp: Date): string {
  const now = new Date()
  const diffMs = now.getTime() - timestamp.getTime()
  const diffMins = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  
  return timestamp.toLocaleDateString()
}

function groupNotifications(notifications: Notification[], groupBy: 'date' | 'category' | 'type' | 'priority'): NotificationGroup[] {
  const groups: { [key: string]: Notification[] } = {}
  
  notifications.forEach((notification) => {
    let groupKey: string
    
    switch (groupBy) {
      case 'date': {
        const date = notification.timestamp.toDateString()
        groupKey = date === new Date().toDateString() ? 'Today' : date
        break
      }
      case 'category':
        groupKey = notification.category || 'General'
        break
      case 'type':
        groupKey = notification.type.charAt(0).toUpperCase() + notification.type.slice(1)
        break
      case 'priority':
        groupKey = notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)
        break
      default:
        groupKey = 'All'
    }
    
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    groups[groupKey].push(notification)
  })
  
  return Object.entries(groups).map(([label, notifications]) => ({
    id: label.toLowerCase().replace(/\s+/g, '-'),
    label,
    notifications,
  }))
}

function NotificationItem({ 
  notification, 
  size, 
  onNotificationClick, 
  onNotificationDismiss, 
  onNotificationStatusChange 
}: {
  notification: Notification
  size: keyof typeof sizeClasses
  onNotificationClick?: (notification: Notification) => void
  onNotificationDismiss?: (notification: Notification) => void
  onNotificationStatusChange?: (notification: Notification, status: NotificationStatus) => void
}) {
  const classes = sizeClasses[size]
  const IconComponent = notification.icon || typeIcons[notification.type]
  const iconColor = notification.iconColor || typeColors[notification.type]
  
  const handleClick = () => {
    if (notification.status === 'unread') {
      onNotificationStatusChange?.(notification, 'read')
    }
    onNotificationClick?.(notification)
  }
  
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation()
    onNotificationDismiss?.(notification)
  }
  
  const handleStatusToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newStatus = notification.status === 'read' ? 'unread' : 'read'
    onNotificationStatusChange?.(notification, newStatus)
  }
  
  return (
    <div
      className={cn(
        'relative border-b border-stone-200 last:border-b-0 cursor-pointer transition-all duration-200',
        classes.notification,
        notification.status === 'unread' && 'bg-blue-50/50 border-l-4 border-l-blue-500',
        'hover:bg-stone-50'
      )}
      onClick={handleClick}
    >
      {/* Priority indicator */}
      {notification.priority === 'urgent' && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      )}
      
      <div className="flex items-start gap-3">
        {/* Icon/Type indicator */}
        <div className={cn('flex-shrink-0 flex items-center justify-center rounded-full bg-stone-100 border border-stone-200', 
          size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
        )}>
          {IconComponent && (
            <IconComponent className={cn('flex-shrink-0', classes.icon, iconColor)} />
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex-1 min-w-0">
              <Typography
                variant={size === 'lg' ? 'body' : 'bodySmall'}
                weight={notification.status === 'unread' ? 'semibold' : 'normal'}
                className={cn('truncate', classes.title)}
              >
                {notification.title}
              </Typography>
              
              {notification.sender && (
                <div className="flex items-center gap-2 mt-1">
                  <Avatar
                    src={notification.sender.avatar}
                    fallback={notification.sender.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    alt={notification.sender.name}
                    size={size === 'sm' ? 'xs' : 'xs'}
                    className={classes.avatar}
                  />
                  <Typography variant="caption" className="text-stone-600 truncate">
                    {notification.sender.name}
                    {notification.sender.role && ` • ${notification.sender.role}`}
                  </Typography>
                </div>
              )}
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <Typography variant="caption" className="text-stone-500">
                {formatTimestamp(notification.timestamp)}
              </Typography>
              
              {notification.priority !== 'low' && (
                <Badge
                  size="xs"
                  className={cn('ml-1', priorityColors[notification.priority])}
                >
                  {notification.priority}
                </Badge>
              )}
              
              <IconButton
                icon={notification.status === 'read' ? Bell : CheckCircle}
                variant="ghost"
                size="sm"
                className="text-stone-400 hover:text-stone-600"
                onClick={handleStatusToggle}
                aria-label={notification.status === 'read' ? 'Mark as unread' : 'Mark as read'}
              />
              
              {notification.dismissible !== false && (
                <IconButton
                  icon={X}
                  variant="ghost"
                  size="sm"
                  className="text-stone-400 hover:text-red-600"
                  onClick={handleDismiss}
                  aria-label="Dismiss notification"
                />
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className={cn('text-stone-700 mb-2', classes.text)}>
            {notification.content}
          </div>
          
          {/* Metadata */}
          {notification.metadata && (
            <div className={cn('text-stone-600 mb-2', classes.text)}>
              {notification.metadata}
            </div>
          )}
          
          {/* Actions */}
          {notification.actions && notification.actions.length > 0 && (
            <div className="flex items-center gap-2 mt-3">
              {notification.actions.map((action) => (
                <Button
                  key={action.id}
                  variant={action.primary ? 'solid' : 'ghost'}
                  size={size}
                  disabled={action.disabled}
                  className={cn(
                    classes.action,
                    action.destructive && 'text-red-600 hover:text-red-700 hover:bg-red-50',
                    action.className
                  )}
                  onClick={() => action.onClick(notification)}
                >
                  {action.icon && <action.icon className={classes.icon} />}
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function NotificationCenter({
  notifications,
  size = 'md',
  variant = 'default',
  maxHeight,
  showSearch = true,
  showFilters = true,
  groupBy = false,
  showMarkAllRead = true,
  showClearAll = true,
  emptyState,
  loading = false,
  className,
  onNotificationClick,
  onNotificationDismiss,
  onNotificationStatusChange,
  onMarkAllRead,
  onClearAll,
  onSearchChange,
  'data-testid': testId,
}: NotificationCenterProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<string>('all')
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())
  
  const classes = sizeClasses[size]
  const variantClass = variantClasses[variant]
  
  // Filter and search notifications
  const filteredNotifications = useMemo(() => {
    let filtered = notifications
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (notification) =>
          notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (typeof notification.content === 'string' && 
           notification.content.toLowerCase().includes(searchQuery.toLowerCase())) ||
          notification.sender?.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    
    // Apply status filter
    if (selectedFilter !== 'all') {
      filtered = filtered.filter((notification) => {
        switch (selectedFilter) {
          case 'unread':
            return notification.status === 'unread'
          case 'read':
            return notification.status === 'read'
          case 'urgent':
            return notification.priority === 'urgent'
          default:
            return notification.type === selectedFilter
        }
      })
    }
    
    return filtered
  }, [notifications, searchQuery, selectedFilter])
  
  // Group notifications if needed
  const notificationGroups = useMemo(() => {
    if (!groupBy) {
      return [{ id: 'all', label: 'All', notifications: filteredNotifications }]
    }
    return groupNotifications(filteredNotifications, groupBy)
  }, [filteredNotifications, groupBy])
  
  const unreadCount = notifications.filter(n => n.status === 'unread').length
  
  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    onSearchChange?.(value)
  }
  
  const toggleGroup = (groupId: string) => {
    const newCollapsed = new Set(collapsedGroups)
    if (newCollapsed.has(groupId)) {
      newCollapsed.delete(groupId)
    } else {
      newCollapsed.add(groupId)
    }
    setCollapsedGroups(newCollapsed)
  }
  
  return (
    <div
      className={cn(
        'flex flex-col',
        classes.container,
        variantClass,
        className
      )}
      style={{ maxHeight }}
      data-testid={testId}
    >
      {/* Header */}
      <div className={cn('border-b border-stone-200 flex-shrink-0', classes.header)}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Typography variant="h4" className={classes.title}>
              Notifications
            </Typography>
            {unreadCount > 0 && (
              <Badge size="sm" className="bg-blue-500 text-white">
                {unreadCount}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-1">
            {showMarkAllRead && unreadCount > 0 && (
              <IconButton
                icon={CheckCheck}
                variant="ghost"
                size="sm"
                onClick={onMarkAllRead}
                aria-label="Mark all as read"
                className="text-stone-500 hover:text-green-600"
              />
            )}
            
            {showClearAll && notifications.length > 0 && (
              <IconButton
                icon={Trash2}
                variant="ghost"
                size="sm"
                onClick={onClearAll}
                aria-label="Clear all"
                className="text-stone-500 hover:text-red-600"
              />
            )}
          </div>
        </div>
        
        {/* Search */}
        {showSearch && (
          <div className="mb-3">
            <Input
              placeholder="Search notifications..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              leftIcon={Search}
              size={size}
              className="w-full"
            />
          </div>
        )}
        
        {/* Filters */}
        {showFilters && (
          <div className="flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'all', label: 'All' },
              { id: 'unread', label: 'Unread' },
              { id: 'urgent', label: 'Urgent' },
              { id: 'info', label: 'Info' },
              { id: 'success', label: 'Success' },
              { id: 'warning', label: 'Warning' },
              { id: 'error', label: 'Error' },
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'solid' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="flex-shrink-0"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className={cn('flex-1 overflow-y-auto', classes.content)}>
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          emptyState || (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="h-12 w-12 text-stone-400 mb-4" />
              <Typography variant="bodyLarge" weight="semibold" className="text-stone-600 mb-2">
                No notifications
              </Typography>
              <Typography variant="body" className="text-stone-500">
                {searchQuery ? "No notifications match your search." : "You're all caught up!"}
              </Typography>
            </div>
          )
        ) : (
          <div className="space-y-0">
            {notificationGroups.map((group) => (
              <div key={group.id}>
                {groupBy && (
                  <div
                    className="sticky top-0 bg-stone-100 border-b border-stone-200 px-3 py-2 flex items-center justify-between cursor-pointer hover:bg-stone-200 transition-colors"
                    onClick={() => toggleGroup(group.id)}
                  >
                    <Typography variant="bodySmall" weight="semibold" className="text-stone-700">
                      {group.label} ({group.notifications.length})
                    </Typography>
                    {collapsedGroups.has(group.id) ? (
                      <ChevronRight className="h-4 w-4 text-stone-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-stone-500" />
                    )}
                  </div>
                )}
                
                {(!groupBy || !collapsedGroups.has(group.id)) && (
                  <div>
                    {group.notifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        notification={notification}
                        size={size}
                        onNotificationClick={onNotificationClick}
                        onNotificationDismiss={onNotificationDismiss}
                        onNotificationStatusChange={onNotificationStatusChange}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}