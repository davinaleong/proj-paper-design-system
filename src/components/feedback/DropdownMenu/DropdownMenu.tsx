import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback
} from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { DropdownMenuProps, DropdownMenuPosition, DropdownMenuItemProps } from './types';
import { DropdownMenuItem } from './DropdownMenuItem';
import { DropdownMenuSeparator } from './DropdownMenuSeparator';
import { DropdownMenuLabel } from './DropdownMenuLabel';
import { cn } from '../../../utils';
import './DropdownMenu.css';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  items,
  isOpen: controlledIsOpen,
  onOpenChange,
  trigger = 'click',
  placement = 'bottom-start',
  variant = 'solid',

  showChevron = true,
  chevronPlacement = 'right',
  chevronIcon,
  dismissible = { clickOutside: true, escapeKey: true, itemClick: true },
  offset = 8,
  contentClassName,
  contentStyle,
  portal = true,
  disabled = false,

  animationDuration = 200,
  zIndex = 50,
  ...props
}) => {
  // Internal state for uncontrolled mode
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen;
  const setIsOpen = useCallback((open: boolean) => {
    if (controlledIsOpen === undefined) {
      setUncontrolledIsOpen(open);
    }
    onOpenChange?.(open);
  }, [controlledIsOpen, onOpenChange]);

  // Refs for positioning
  const triggerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<DropdownMenuPosition>({ top: 0, left: 0 });

  // Calculate position based on trigger and placement
  const calculatePosition = useCallback((): DropdownMenuPosition => {
    if (!triggerRef.current || !menuRef.current) {
      return { top: 0, left: 0 };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY
    };

    let top = 0;
    let left = 0;

    // Base positioning
    switch (placement) {
      case 'top':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.left + (triggerRect.width - menuRect.width) / 2;
        break;
      case 'top-start':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - menuRect.height - offset;
        left = triggerRect.right - menuRect.width;
        break;
      case 'bottom':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - menuRect.width) / 2;
        break;
      case 'bottom-start':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = triggerRect.right - menuRect.width;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - menuRect.height) / 2;
        left = triggerRect.left - menuRect.width - offset;
        break;
      case 'left-start':
        top = triggerRect.top;
        left = triggerRect.left - menuRect.width - offset;
        break;
      case 'left-end':
        top = triggerRect.bottom - menuRect.height;
        left = triggerRect.left - menuRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - menuRect.height) / 2;
        left = triggerRect.right + offset;
        break;
      case 'right-start':
        top = triggerRect.top;
        left = triggerRect.right + offset;
        break;
      case 'right-end':
        top = triggerRect.bottom - menuRect.height;
        left = triggerRect.right + offset;
        break;
    }

    // Add scroll offset
    top += viewport.scrollY;
    left += viewport.scrollX;

    // Boundary detection and adjustment
    const padding = 8;
    
    // Horizontal boundaries
    if (left < padding) {
      left = padding;
    } else if (left + menuRect.width > viewport.width - padding) {
      left = viewport.width - menuRect.width - padding;
    }
    
    // Vertical boundaries
    if (top < padding + viewport.scrollY) {
      top = padding + viewport.scrollY;
    } else if (top + menuRect.height > viewport.height + viewport.scrollY - padding) {
      top = viewport.height + viewport.scrollY - menuRect.height - padding;
    }

    return { top, left };
  }, [placement, offset]);

  // Update position when open
  useEffect(() => {
    if (isOpen) {
      const updatePosition = () => {
        setPosition(calculatePosition());
      };
      
      updatePosition();
      
      // Listen for scroll and resize
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen, calculatePosition]);

  // Handle trigger events
  const handleTriggerClick = useCallback((event: React.MouseEvent) => {
    if (disabled) return;
    
    if (trigger === 'click' || trigger === 'contextMenu') {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  }, [trigger, isOpen, setIsOpen, disabled]);

  const handleTriggerMouseEnter = useCallback(() => {
    if (disabled) return;
    
    if (trigger === 'hover') {
      setIsOpen(true);
    }
  }, [trigger, setIsOpen, disabled]);

  const handleTriggerMouseLeave = useCallback(() => {
    if (disabled) return;
    
    if (trigger === 'hover') {
      setIsOpen(false);
    }
  }, [trigger, setIsOpen, disabled]);

  const handleTriggerFocus = useCallback(() => {
    if (disabled) return;
    
    if (trigger === 'focus') {
      setIsOpen(true);
    }
  }, [trigger, setIsOpen, disabled]);

  const handleTriggerBlur = useCallback(() => {
    if (disabled) return;
    
    if (trigger === 'focus') {
      setIsOpen(false);
    }
  }, [trigger, setIsOpen, disabled]);

  const handleTriggerContextMenu = useCallback((event: React.MouseEvent) => {
    if (disabled) return;
    
    if (trigger === 'contextMenu') {
      event.preventDefault();
      setIsOpen(true);
    }
  }, [trigger, setIsOpen, disabled]);

  // Handle menu item click
  const handleItemClick = useCallback((itemProps: DropdownMenuItemProps) => {
    if (itemProps.onClick) {
      itemProps.onClick();
    }
    
    if (dismissible.itemClick) {
      setIsOpen(false);
    }
  }, [dismissible.itemClick, setIsOpen]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !dismissible.clickOutside) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (
        triggerRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, dismissible.clickOutside, setIsOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen || !dismissible.escapeKey) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, dismissible.escapeKey, setIsOpen]);

  // Determine chevron icon
  const ChevronIcon = chevronIcon || (placement.startsWith('top') ? ChevronUp : ChevronDown);

  // Check if child is IconButton
  const isIconButton = React.isValidElement(children) && 
    typeof (children as React.ReactElement).type === 'function' && 
    ((children as React.ReactElement).type as React.ComponentType<unknown>).displayName === 'IconButton';

  // Create composite icon for IconButton that combines original icon with chevron
  const createCompositeIcon = (OriginalIcon: React.ComponentType<{ className?: string }>) => {
    return function CompositeIcon({ className, ...props }: { className?: string }) {
      return (
        <div className={cn("relative inline-flex items-center justify-center", className)} {...props}>
          <OriginalIcon className="w-full h-full" />
          {showChevron && (
            <ChevronIcon 
              className={cn(
                "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-white dark:bg-gray-800 rounded-full p-0.5",
                isOpen && "rotate-180",
                "transition-transform duration-200"
              )} 
            />
          )}
        </div>
      );
    };
  };

  // Clone the Button child and inject chevron as icon (for regular Button) or composite icon (for IconButton)
  const triggerElement = React.isValidElement(children) 
    ? (isIconButton 
        ? React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
            ref: triggerRef,
            onClick: (event: React.MouseEvent) => {
              handleTriggerClick(event);
              const originalOnClick = (children as React.ReactElement<{ onClick?: (event: React.MouseEvent) => void }>).props.onClick;
              if (originalOnClick) {
                originalOnClick(event);
              }
            },
            onMouseEnter: () => {
              handleTriggerMouseEnter();
            },
            onMouseLeave: () => {
              handleTriggerMouseLeave();
            },
            onFocus: () => {
              handleTriggerFocus();
            },
            onBlur: () => {
              handleTriggerBlur();
            },
            onContextMenu: (event: React.MouseEvent) => {
              handleTriggerContextMenu(event);
            },
            // Replace icon with composite icon that includes chevron (if showChevron is true)
            icon: showChevron 
              ? createCompositeIcon((children as React.ReactElement<{ icon: React.ComponentType<{ className?: string }> }>).props.icon)
              : (children as React.ReactElement<{ icon: React.ComponentType<{ className?: string }> }>).props.icon,
            className: cn(
              (children as React.ReactElement<{ className?: string }>).props.className,
              isOpen && 'paper-dropdown-trigger--active'
            ),
            disabled: disabled || (children as React.ReactElement<{ disabled?: boolean }>).props.disabled,
            'aria-expanded': isOpen,
            'aria-haspopup': true,
            'aria-describedby': isOpen ? 'paper-dropdown-menu-content' : undefined,
          })
        : React.cloneElement(children as React.ReactElement<Record<string, unknown>>, {
            ref: triggerRef,
            onClick: (event: React.MouseEvent) => {
              handleTriggerClick(event);
              // Call existing onClick if present
              const originalOnClick = (children as React.ReactElement<{ onClick?: (event: React.MouseEvent) => void }>).props.onClick;
              if (originalOnClick) {
                originalOnClick(event);
              }
            },
            onMouseEnter: () => {
              handleTriggerMouseEnter();
            },
            onMouseLeave: () => {
              handleTriggerMouseLeave();
            },
            onFocus: () => {
              handleTriggerFocus();
            },
            onBlur: () => {
              handleTriggerBlur();
            },
            onContextMenu: (event: React.MouseEvent) => {
              handleTriggerContextMenu(event);
            },
            // Handle chevron icon injection - only for regular Button, not IconButton
            ...(showChevron && {
              icon: ChevronIcon,
              iconPosition: chevronPlacement,
            }),
            className: cn(
              (children as React.ReactElement<{ className?: string }>).props.className,
              isOpen && 'paper-dropdown-trigger--active'
            ),
            disabled: disabled || (children as React.ReactElement<{ disabled?: boolean }>).props.disabled,
            'aria-expanded': isOpen,
            'aria-haspopup': true,
            'aria-describedby': isOpen ? 'paper-dropdown-menu-content' : undefined,
          })
      )
    : (
        // Fallback for non-React elements
        <span
          ref={triggerRef}
          onClick={handleTriggerClick}
          onMouseEnter={handleTriggerMouseEnter}
          onMouseLeave={handleTriggerMouseLeave}
          onFocus={handleTriggerFocus}
          onBlur={handleTriggerBlur}
          onContextMenu={handleTriggerContextMenu}
          className={cn(
            'paper-dropdown-trigger',
            'inline-flex items-center gap-2',
            isOpen && 'paper-dropdown-trigger--active',
            disabled && 'cursor-not-allowed opacity-50'
          )}
          aria-expanded={isOpen}
          aria-haspopup={true}
          aria-describedby={isOpen ? 'paper-dropdown-menu-content' : undefined}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
          {children}
        </span>
      );

  // Render menu items
  const renderItems = () => {
    return items.map((item, index) => {
      if (item === 'separator') {
        return <DropdownMenuSeparator key={`separator-${index}`} />;
      }
      
      if (typeof item === 'object' && 'type' in item && item.type === 'label') {
        return (
          <DropdownMenuLabel key={`label-${index}`}>
            {item.label}
          </DropdownMenuLabel>
        );
      }
      
      const menuItem = item as DropdownMenuItemProps;
      return (
        <DropdownMenuItem
          key={`item-${index}`}
          {...menuItem}
          onClick={() => handleItemClick(menuItem)}
        />
      );
    });
  };

  // Dropdown menu content
  const menuContent = (
    <div
      ref={menuRef}
      id="paper-dropdown-menu-content"
      role="menu"
      className={cn(
        'paper-dropdown-menu',
        `paper-dropdown-menu--${variant}`,
        `paper-dropdown-menu--placement-${placement}`,
        {
          'paper-dropdown-menu--enter': isOpen,
          'paper-dropdown-menu--enter-active': isOpen,
        },
        contentClassName
      )}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex,
        '--dropdown-duration': `${animationDuration}ms`,
        ...contentStyle,
      } as React.CSSProperties}
      {...props}
    >
      {renderItems()}
    </div>
  );

  return (
    <>
      {triggerElement}
      {isOpen && (
        portal 
          ? createPortal(menuContent, document.body)
          : menuContent
      )}
    </>
  );
};

export default DropdownMenu;