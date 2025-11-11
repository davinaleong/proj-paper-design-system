import { useState, useRef, useEffect } from 'react'
import {
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { Avatar } from '../../layout/Avatar'
import { Badge } from '../../layout/Badge'
import { Typography } from '../../core/Typography'
import { cn } from '../../../utils/cn'
import type { UserMenuProps, UserMenuItem, UserMenuGroup } from './types'

const sizeClasses = {
  sm: {
    trigger: 'h-8 px-2 text-sm',
    avatar: 'h-6 w-6',
    menu: 'min-w-56',
    item: 'px-3 py-2 text-sm',
    profile: 'p-3',
    separator: 'my-1',
  },
  md: {
    trigger: 'h-10 px-3 text-sm',
    avatar: 'h-8 w-8',
    menu: 'min-w-64',
    item: 'px-4 py-2.5 text-sm',
    profile: 'p-4',
    separator: 'my-1.5',
  },
  lg: {
    trigger: 'h-12 px-4 text-base',
    avatar: 'h-10 w-10',
    menu: 'min-w-72',
    item: 'px-5 py-3 text-base',
    profile: 'p-5',
    separator: 'my-2',
  },
}

const variantClasses = {
  default: 'bg-white border border-stone-300 rounded-lg shadow-lg',
  compact: 'bg-stone-50 border border-stone-200 rounded-md shadow-md',
  floating: 'bg-white border border-stone-300 rounded-xl shadow-xl backdrop-blur-sm',
}

const statusColors = {
  online: 'bg-green-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
  offline: 'bg-gray-400',
}

const statusLabels = {
  online: 'Online',
  away: 'Away',
  busy: 'Busy',
  offline: 'Offline',
}

function isUserMenuGroup(item: UserMenuItem | UserMenuGroup): item is UserMenuGroup {
  return 'items' in item
}

export function UserMenu({
  user,
  items,
  size = 'md',
  variant = 'default',
  position = 'bottom-right',
  showProfile = true,
  showStatus = true,
  trigger,
  open,
  onOpenChange,
  className,
  'data-testid': testId,
}: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  
  const isControlled = open !== undefined
  const menuOpen = isControlled ? open : isOpen
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        if (!isControlled) {
          setIsOpen(false)
        }
        onOpenChange?.(false)
      }
    }
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        if (!isControlled) {
          setIsOpen(false)
        }
        onOpenChange?.(false)
      }
    }
    
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen, isControlled, onOpenChange])
  
  const classes = sizeClasses[size]
  const variantClass = variantClasses[variant]
  
  const handleToggle = () => {
    const newOpen = !menuOpen
    if (!isControlled) {
      setIsOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }
  
  const getUserInitials = () => {
    return user.initials || user.name.split(' ').map(n => n[0]).join('').slice(0, 2)
  }
  
  const renderMenuItem = (item: UserMenuItem) => {
    const handleClick = () => {
      if (item.disabled) return
      
      if (item.href) {
        window.open(item.href, item.target || '_self')
      } else {
        item.onClick?.()
      }
      
      // Close menu after click
      if (!isControlled) {
        setIsOpen(false)
      }
      onOpenChange?.(false)
    }
    
    return (
      <div
        key={item.id}
        className={cn(
          'flex items-center justify-between w-full cursor-pointer hover:bg-stone-50 rounded-sm transition-colors',
          classes.item,
          item.destructive && 'text-red-600 hover:bg-red-50',
          item.disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
        )}
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          {item.icon && (
            <item.icon className={cn(
              'h-4 w-4 flex-shrink-0',
              item.destructive ? 'text-red-500' : 'text-stone-500'
            )} />
          )}
          <Typography
            variant="body"
            className={cn(
              item.destructive && 'text-red-600',
              item.disabled && 'text-stone-400'
            )}
          >
            {item.label}
          </Typography>
        </div>
        
        <div className="flex items-center gap-2">
          {item.badge && (
            <Badge size="xs" className="bg-blue-100 text-blue-700">
              {item.badge}
            </Badge>
          )}
          {item.href && item.target === '_blank' && (
            <ExternalLink className="h-3 w-3 text-stone-400" />
          )}
        </div>
      </div>
    )
  }
  
  const renderGroup = (group: UserMenuGroup) => (
    <div key={group.id}>
      {group.label && (
        <div className="px-4 py-2 border-t border-stone-200 first:border-t-0">
          <Typography variant="bodySmall" weight="semibold" className="text-stone-500 uppercase tracking-wide">
            {group.label}
          </Typography>
        </div>
      )}
      <div className="space-y-1">
        {group.items.map(renderMenuItem)}
      </div>
    </div>
  )
  
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'top-full left-0 mt-2'
      case 'bottom-right':
        return 'top-full right-0 mt-2'
      case 'top-left':
        return 'bottom-full left-0 mb-2'
      case 'top-right':
        return 'bottom-full right-0 mb-2'
      default:
        return 'top-full right-0 mt-2'
    }
  }

  const defaultTrigger = (
    <button
      ref={triggerRef}
      className={cn(
        'flex items-center gap-2 hover:bg-stone-100 rounded-sm transition-colors',
        classes.trigger
      )}
      onClick={handleToggle}
      data-testid={testId}
    >
      <div className="relative">
        <Avatar
          src={user.avatar}
          alt={user.name}
          fallback={getUserInitials()}
          size={size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'}
        />
        {showStatus && user.status && (
          <div className={cn(
            'absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white',
            statusColors[user.status]
          )} />
        )}
      </div>
      <ChevronDown className="h-4 w-4 text-stone-500" />
    </button>
  )
  
  return (
    <div className="relative inline-block">
      {trigger || defaultTrigger}
      
      {menuOpen && (
        <div
          ref={menuRef}
          className={cn(
            'absolute z-50',
            getPositionClasses(),
            variantClass,
            classes.menu,
            className
          )}
        >
          {/* User Profile Section */}
          {showProfile && (
            <div className={cn('border-b border-stone-200', classes.profile)}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    fallback={getUserInitials()}
                    size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
                  />
                  {showStatus && user.status && (
                    <div className={cn(
                      'absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white',
                      statusColors[user.status]
                    )} />
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <Typography variant="bodyLarge" weight="semibold" className="truncate">
                    {user.name}
                  </Typography>
                  <Typography variant="bodySmall" className="text-stone-500 truncate">
                    {user.email}
                  </Typography>
                  {user.role && (
                    <Typography variant="bodySmall" className="text-stone-400 truncate">
                      {user.role}
                    </Typography>
                  )}
                </div>
                
                {showStatus && user.status && (
                  <div className="text-right">
                    <div className={cn(
                      'inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-medium',
                      user.status === 'online' && 'bg-green-100 text-green-700',
                      user.status === 'away' && 'bg-yellow-100 text-yellow-700',
                      user.status === 'busy' && 'bg-red-100 text-red-700',
                      user.status === 'offline' && 'bg-gray-100 text-gray-700'
                    )}>
                      <div className={cn('w-1 h-1 rounded-full', statusColors[user.status])} />
                      {statusLabels[user.status]}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Menu Items */}
          <div className="py-2">
            {items.map((item) => 
              isUserMenuGroup(item) ? renderGroup(item) : renderMenuItem(item)
            )}
          </div>
        </div>
      )}
    </div>
  )
}
