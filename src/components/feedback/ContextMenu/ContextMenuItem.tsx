import React from 'react';
import type { ContextMenuItemProps } from './types';
import { cn } from '../../../utils';
import { getColorClassesWithLuminance } from '../../../utils/colors';

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  children,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  selected = false,
  color = 'primary',
  onClick,
  shortcut,
  description,
  destructive = false,
  className,
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const itemClasses = cn(
    // Base styles
    'paper-context-menu-item',
    'flex items-center gap-3 px-3 py-2 text-sm cursor-pointer transition-colors duration-150',
    'rounded-sm',
    
    // State styles
    {
      'paper-context-menu-item--disabled': disabled,
      'paper-context-menu-item--selected': selected,
      'paper-context-menu-item--destructive': destructive,
    },
    
    // Icon position
    iconPosition === 'right' && 'flex-row-reverse',
    
    // Color classes with automatic text color calculation
    !disabled && !destructive && !selected && 
      getColorClassesWithLuminance(color, 'soft', true),
    
    // Destructive styling
    destructive && !disabled && 'text-red-600 hover:bg-red-50 hover:text-red-700',
    destructive && !disabled && 'dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300',
    
    // Selected styling
    selected && !disabled && 
      getColorClassesWithLuminance(color, 'solid', true),
    
    // Disabled styling
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    
    className
  );

  return (
    <div
      role="menuitem"
      className={itemClasses}
      onClick={handleClick}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {/* Icon */}
      {Icon && (
        <Icon className={cn(
          'paper-context-menu-item__icon',
          'w-4 h-4 flex-shrink-0',
          iconPosition === 'right' && 'order-last'
        )} />
      )}
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="paper-context-menu-item__content">
          {children}
        </div>
        {description && (
          <div className={cn(
            'paper-context-menu-item__description',
            'text-xs mt-0.5 opacity-75'
          )}>
            {description}
          </div>
        )}
      </div>
      
      {/* Shortcut */}
      {shortcut && (
        <div className={cn(
          'paper-context-menu-item__shortcut',
          'text-xs opacity-60 flex-shrink-0 ml-auto',
          iconPosition === 'right' && 'mr-auto ml-0'
        )}>
          {shortcut}
        </div>
      )}
    </div>
  );
};

export default ContextMenuItem;