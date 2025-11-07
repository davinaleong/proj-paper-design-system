import React from 'react';
import type { DropdownMenuItemProps } from './types';
import { cn } from '../../../utils';

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  selected = false,
  onClick,
  shortcut,
  description,
  className,
  ...props
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      className={cn(
        'flex items-center gap-3 px-3 py-2 text-sm',
        'text-stone-900 dark:text-stone-100',
        'hover:bg-stone-100 dark:hover:bg-stone-800',
        'focus:bg-stone-100 dark:focus:bg-stone-800 focus:outline-none',
        'cursor-pointer transition-colors duration-150',
        {
          'text-stone-400 dark:text-stone-600 cursor-not-allowed hover:bg-transparent dark:hover:bg-transparent': disabled,
          'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100': selected,
        },
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span>{children}</span>
          {shortcut && (
            <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
              {shortcut}
            </span>
          )}
        </div>
        {description && (
          <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            {description}
          </div>
        )}
      </div>
      
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 flex-shrink-0" />
      )}
    </div>
  );
};

export default DropdownMenuItem;