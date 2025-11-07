import React from 'react';
import type { DropdownMenuItemProps } from './types';
import { cn } from '../../../utils';

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  selected = false,
  color = 'primary',
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
        'paper-dropdown-menu-item',
        {
          'paper-dropdown-menu-item--disabled': disabled,
          'paper-dropdown-menu-item--selected': selected,
        },
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-disabled={disabled}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className="paper-dropdown-menu-item__icon" />
      )}
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span>{children}</span>
          {shortcut && (
            <span className="paper-dropdown-menu-item__shortcut">
              {shortcut}
            </span>
          )}
        </div>
        {description && (
          <div className="paper-dropdown-menu-item__description">
            {description}
          </div>
        )}
      </div>
      
      {Icon && iconPosition === 'right' && (
        <Icon className="paper-dropdown-menu-item__icon" />
      )}
    </div>
  );
};