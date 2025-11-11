import { useState, useEffect, useRef } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '../../forms/Button'
import { IconButton } from '../../forms/IconButton'
import { Typography } from '../../core/Typography'
import { cn } from '../../../utils/cn'
import type { CommandBarProps, CommandBarAction, CommandBarSize } from './types'

const sizeClasses = {
  sm: {
    container: 'h-10 px-2 gap-1',
    button: 'h-8 px-2 text-xs',
    iconButton: 'h-8 w-8',
    text: 'text-xs',
  },
  md: {
    container: 'h-12 px-3 gap-2',
    button: 'h-9 px-3 text-sm',
    iconButton: 'h-9 w-9',
    text: 'text-sm',
  },
  lg: {
    container: 'h-14 px-4 gap-3',
    button: 'h-10 px-4 text-base',
    iconButton: 'h-10 w-10',
    text: 'text-base',
  },
}

const positionClasses = {
  top: 'top-0 left-0 right-0 border-b',
  bottom: 'bottom-0 left-0 right-0 border-t',
  floating: 'shadow-lg rounded-lg border',
}

const variantClasses = {
  default: 'bg-stone-50 border-stone-200 border backdrop-blur-sm',
  compact: 'bg-stone-50 border-stone-200 border backdrop-blur-sm',
  elevated: 'bg-white border-stone-300 border shadow-md backdrop-blur-sm',
}

function ActionButton({ 
  action, 
  size, 
  showLabels, 
  showShortcuts 
}: { 
  action: CommandBarAction
  size: CommandBarSize
  showLabels: boolean
  showShortcuts: boolean
}) {
  const { icon: Icon, label, disabled, active, onClick, shortcut, tooltip, destructive, className } = action
  const classes = sizeClasses[size]

  // Icon-only mode
  if (!showLabels && Icon) {
    return (
      <IconButton
        icon={Icon}
        onClick={onClick}
        disabled={disabled}
        variant={active ? 'solid' : 'ghost'}
        size={size}
        className={cn(
          classes.iconButton,
          destructive && 'text-red-600 hover:text-red-700 hover:bg-red-50',
          active && destructive && 'bg-red-600 text-white hover:bg-red-700',
          className
        )}
        aria-label={tooltip || label}
        title={tooltip || label}
      />
    )
  }

  // Full button with optional icon and label
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant={active ? 'solid' : 'ghost'}
      size={size}
      className={cn(
        classes.button,
        'flex items-center gap-2 justify-center',
        destructive && 'text-red-600 hover:text-red-700 hover:bg-red-50',
        active && destructive && 'bg-red-600 text-white hover:bg-red-700',
        className
      )}
      title={tooltip}
    >
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
      {showLabels && (
        <span className="flex items-center gap-2">
          <span>{label}</span>
          {showShortcuts && shortcut && (
            <Typography
              variant="caption"
              className={cn(
                'px-1.5 py-0.5 bg-stone-100 rounded text-stone-600 font-mono',
                classes.text
              )}
            >
              {shortcut}
            </Typography>
          )}
        </span>
      )}
    </Button>
  )
}

export function CommandBar({
  groups,
  position = 'top',
  size = 'md',
  variant = 'default',
  visible = true,
  showLabels = true,
  showShortcuts = true,
  maxActions,
  overflowLabel = 'More actions',
  autoHide = false,
  autoHideDelay = 3000,
  className,
  leftContent,
  rightContent,
  onVisibilityChange,
  'aria-label': ariaLabel,
  'data-testid': testId,
}: CommandBarProps) {
  const [isVisible, setIsVisible] = useState(visible)
  const [hovering, setHovering] = useState(false)
  const hideTimeoutRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-hide functionality
  useEffect(() => {
    if (!autoHide) return

    const resetHideTimer = () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
      if (!hovering) {
        hideTimeoutRef.current = window.setTimeout(() => {
          setIsVisible(false)
          onVisibilityChange?.(false)
        }, autoHideDelay)
      }
    }

    if (isVisible && !hovering) {
      resetHideTimer()
    }

    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [autoHide, autoHideDelay, hovering, isVisible, onVisibilityChange])

  // Handle visibility changes
  useEffect(() => {
    setIsVisible(visible)
  }, [visible])

  // Flatten all actions
  const allActions = groups.flatMap(group => group.actions)
  
  // Handle overflow
  const overflowActions = maxActions ? allActions.slice(maxActions) : []

  const classes = sizeClasses[size]
  const positionClass = positionClasses[position]
  const variantClass = variantClasses[variant]

  if (!isVisible) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex items-center justify-between',
        'transition-all duration-200 ease-in-out',
        classes.container,
        positionClass,
        variantClass,
        position === 'floating' && 'fixed z-50',
        className
      )}
      onMouseEnter={() => {
        setHovering(true)
        if (autoHide && !isVisible) {
          setIsVisible(true)
          onVisibilityChange?.(true)
        }
      }}
      onMouseLeave={() => setHovering(false)}
      aria-label={ariaLabel || 'Command bar'}
      data-testid={testId}
      role="toolbar"
    >
      {/* Left content */}
      {leftContent && (
        <div className="flex items-center">
          {leftContent}
        </div>
      )}

      {/* Main actions */}
      <div className="flex items-center flex-1 justify-center">
        {groups.map((group, groupIndex) => (
          <div key={group.id} className="flex items-center">
            {/* Group separator */}
            {group.separated && groupIndex > 0 && (
              <div className="h-6 w-px bg-stone-200 mx-2" />
            )}
            
            {/* Group actions */}
            <div className="flex items-center gap-1">
              {group.actions.map((action) => (
                <ActionButton
                  key={action.id}
                  action={action}
                  size={size}
                  showLabels={showLabels}
                  showShortcuts={showShortcuts}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Overflow indicator - simplified for now */}
        {overflowActions.length > 0 && (
          <IconButton
            icon={MoreHorizontal}
            variant="ghost"
            size={size}
            className={classes.iconButton}
            aria-label={`${overflowLabel} (${overflowActions.length})`}
            onClick={() => {
              // TODO: Implement overflow menu when DropdownMenu component is available
              console.log('Overflow actions:', overflowActions)
            }}
          />
        )}
      </div>

      {/* Right content */}
      {rightContent && (
        <div className="flex items-center">
          {rightContent}
        </div>
      )}
    </div>
  )
}
