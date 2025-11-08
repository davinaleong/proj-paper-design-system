import { useState } from 'react'
import {
  MessageCircle,
  Activity,
  AlertCircle,
  Settings,
  Bell,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Clock,
} from 'lucide-react'
import { Avatar } from '../../layout/Avatar'
import { Button } from '../../forms/Button'
import { IconButton } from '../../forms/IconButton'
import { Typography } from '../../core/Typography'
import { cn } from '../../../utils/cn'
import type { ActivityItemProps } from './types'

const sizeClasses = {
  sm: {
    container: 'p-3 gap-2',
    avatar: 'h-6 w-6 text-xs',
    content: 'text-sm',
    timestamp: 'text-xs',
    action: 'h-7 px-2 text-xs',
    iconAction: 'h-7 w-7',
    icon: 'h-4 w-4',
  },
  md: {
    container: 'p-4 gap-3',
    avatar: 'h-8 w-8 text-sm',
    content: 'text-sm',
    timestamp: 'text-xs',
    action: 'h-8 px-3 text-sm',
    iconAction: 'h-8 w-8',
    icon: 'h-5 w-5',
  },
  lg: {
    container: 'p-5 gap-4',
    avatar: 'h-10 w-10 text-base',
    content: 'text-base',
    timestamp: 'text-sm',
    action: 'h-9 px-4 text-sm',
    iconAction: 'h-9 w-9',
    icon: 'h-6 w-6',
  },
}

const variantClasses = {
  default: 'bg-stone-50 border border-stone-200 rounded-lg',
  compact: 'bg-transparent border-b border-stone-200 rounded-none py-2',
  detailed: 'bg-white border border-stone-300 rounded-lg shadow-md hover:shadow-lg transition-shadow',
}

const typeIcons = {
  comment: MessageCircle,
  action: Activity,
  update: AlertCircle,
  system: Settings,
  notification: Bell,
  custom: Activity,
}

const typeColors = {
  comment: 'text-blue-600',
  action: 'text-green-600',
  update: 'text-orange-600',
  system: 'text-gray-600',
  notification: 'text-purple-600',
  custom: 'text-teal-600',
}

function formatTimestamp(timestamp: string | Date, showRelative: boolean = false): string {
  const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp
  
  if (showRelative) {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    
    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    
    return date.toLocaleDateString()
  }
  
  return date.toLocaleString()
}

export function ActivityItem({
  actor,
  content,
  timestamp,
  type = 'custom',
  size = 'md',
  variant = 'default',
  icon,
  iconColor,
  metadata,
  actions = [],
  unread = false,
  collapsed = false,
  showRelativeTime = true,
  className,
  onClick,
  'data-testid': testId,
}: ActivityItemProps) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed)
  const [showActions, setShowActions] = useState(false)

  const classes = sizeClasses[size]
  const variantClass = variantClasses[variant]
  const IconComponent = icon || typeIcons[type]
  const iconColorClass = iconColor || typeColors[type]

  const handleToggleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsCollapsed(!isCollapsed)
  }

  const handleShowActions = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowActions(!showActions)
  }

  const handleItemClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      className={cn(
        'relative transition-all duration-200 ease-in-out',
        variant === 'compact' ? cn('py-3 px-4', size === 'sm' ? 'gap-2' : size === 'lg' ? 'gap-4' : 'gap-3') : classes.container,
        variantClass,
        unread && 'ring-2 ring-blue-500/20 bg-blue-50/50',
        onClick && 'cursor-pointer hover:shadow-md',
        variant === 'compact' && onClick && 'hover:bg-stone-50',
        className
      )}
      onClick={handleItemClick}
      data-testid={testId}
    >
      {/* Unread indicator */}
      {unread && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" />
      )}

      {/* Main content area */}
      <div className="flex items-start w-full">
        {/* Icon/Type indicator */}
        <div className={cn(
          'flex-shrink-0 flex items-center justify-center rounded-full',
          variant === 'detailed' ? 'bg-white border-2 border-stone-300 shadow-sm' : 'bg-stone-100 border border-stone-200',
          variant === 'compact' ? 'bg-transparent border-0' : '',
          classes.icon === 'h-4 w-4' ? 'h-8 w-8' : classes.icon === 'h-5 w-5' ? 'h-10 w-10' : 'h-12 w-12'
        )}>
          {IconComponent && (
            <IconComponent
              className={cn('flex-shrink-0', classes.icon, iconColorClass)}
            />
          )}
        </div>

        {/* Content area */}
        <div className="flex-1 min-w-0">
          {/* Header with actor and timestamp */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="flex items-center gap-2 min-w-0">
              {/* Actor avatar */}
              <Avatar
                src={actor.avatar}
                fallback={actor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                alt={actor.name}
                size={size === 'sm' ? 'xs' : size === 'lg' ? 'sm' : 'xs'}
                className={cn('flex-shrink-0', classes.avatar)}
              />
              
              {/* Actor info */}
              <div className="min-w-0">
                <Typography
                  variant="bodySmall"
                  weight="semibold"
                  className={cn('truncate', classes.content)}
                >
                  {actor.href ? (
                    <a
                      href={actor.href}
                      className="hover:text-teal-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {actor.name}
                    </a>
                  ) : (
                    actor.name
                  )}
                </Typography>
                {actor.role && (
                  <Typography
                    variant="caption"
                    className="text-stone-500 truncate"
                  >
                    {actor.role}
                  </Typography>
                )}
              </div>
            </div>

            {/* Timestamp and controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              <Typography
                variant="caption"
                className={cn('text-stone-500 flex items-center gap-1', classes.timestamp)}
              >
                <Clock className="h-3 w-3" />
                {formatTimestamp(timestamp, showRelativeTime)}
              </Typography>

              {/* Collapse toggle */}
              {metadata && (
                <IconButton
                  icon={isCollapsed ? ChevronRight : ChevronDown}
                  variant="ghost"
                  size="sm"
                  className={cn('text-stone-400 hover:text-stone-600', classes.iconAction)}
                  onClick={handleToggleCollapse}
                  aria-label={isCollapsed ? 'Expand details' : 'Collapse details'}
                />
              )}

              {/* Actions menu */}
              {actions.length > 0 && (
                <IconButton
                  icon={MoreHorizontal}
                  variant="ghost"
                  size="sm"
                  className={cn('text-stone-400 hover:text-stone-600', classes.iconAction)}
                  onClick={handleShowActions}
                  aria-label="Show actions"
                />
              )}
            </div>
          </div>

          {/* Main content */}
          <div className={cn('text-stone-700', classes.content)}>
            {content}
          </div>

          {/* Metadata (collapsible) */}
          {metadata && !isCollapsed && (
            <div className="mt-2 pt-2 border-t border-stone-200">
              <div className={cn('text-stone-600', classes.content)}>
                {metadata}
              </div>
            </div>
          )}

          {/* Actions */}
          {showActions && actions.length > 0 && (
            <div className="mt-3 flex items-center gap-2 pt-2 border-t border-stone-200">
              {actions.map((action) => (
                <Button
                  key={action.id}
                  variant="ghost"
                  size={size}
                  disabled={action.disabled}
                  className={cn(
                    classes.action,
                    action.destructive && 'text-red-600 hover:text-red-700 hover:bg-red-50',
                    action.className
                  )}
                  onClick={() => action.onClick()}
                >
                  {action.icon && (
                    <action.icon className={classes.icon} />
                  )}
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