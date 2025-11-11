"use client"

import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback
} from 'react';
import { createPortal } from 'react-dom';
import type { ContextMenuProps, ContextMenuPosition, ContextMenuItemProps } from './types';
import { ContextMenuItem } from './ContextMenuItem';
import { ContextMenuSeparator } from './ContextMenuSeparator';
import { ContextMenuLabel } from './ContextMenuLabel';
import { cn } from '../../../utils';
import { getColorClassesWithLuminance } from '../../../utils/colors';
import './ContextMenu.css';

export const ContextMenu: React.FC<ContextMenuProps> = ({
  children,
  items,
  isOpen: controlledIsOpen,
  onOpenChange,
  placement = 'bottom-start',
  variant = 'solid',
  color = 'primary',
  dismissible = { clickOutside: true, escapeKey: true, itemClick: true },
  offset = 8,
  contentClassName,
  contentStyle,
  portal = true,
  disabled = false,
  animationDuration = 200,
  zIndex = 50,
  mobileGesture = {
    longPressDuration: 500,
    preventTouchDefault: true
  },
  ...props
}) => {
  // Internal state for uncontrolled mode
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Use controlled state if provided, otherwise use internal state
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen;
  const setIsOpen = useCallback((open: boolean) => {
    if (controlledIsOpen === undefined) {
      setUncontrolledIsOpen(open);
    }
    onOpenChange?.(open);
  }, [controlledIsOpen, onOpenChange]);

  // Mount state effect for SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  // Refs for positioning
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<ContextMenuPosition>({ top: 0, left: 0 });
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mobile gesture handling
  const longPressTimeoutRef = useRef<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // Calculate position based on cursor position and placement
  const calculatePosition = useCallback((cursorX: number, cursorY: number): ContextMenuPosition => {
    if (!menuRef.current || typeof window === 'undefined') {
      return { top: cursorY, left: cursorX };
    }

    const menuRect = menuRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      scrollX: window.scrollX,
      scrollY: window.scrollY
    };

    let top = cursorY;
    let left = cursorX;

    // Adjust position based on placement preference
    switch (placement) {
      case 'top':
        top = cursorY - menuRect.height - offset;
        left = cursorX - (menuRect.width / 2);
        break;
      case 'top-start':
        top = cursorY - menuRect.height - offset;
        left = cursorX;
        break;
      case 'top-end':
        top = cursorY - menuRect.height - offset;
        left = cursorX - menuRect.width;
        break;
      case 'bottom':
        top = cursorY + offset;
        left = cursorX - (menuRect.width / 2);
        break;
      case 'bottom-start':
        top = cursorY + offset;
        left = cursorX;
        break;
      case 'bottom-end':
        top = cursorY + offset;
        left = cursorX - menuRect.width;
        break;
      case 'left':
        top = cursorY - (menuRect.height / 2);
        left = cursorX - menuRect.width - offset;
        break;
      case 'left-start':
        top = cursorY;
        left = cursorX - menuRect.width - offset;
        break;
      case 'left-end':
        top = cursorY - menuRect.height;
        left = cursorX - menuRect.width - offset;
        break;
      case 'right':
        top = cursorY - (menuRect.height / 2);
        left = cursorX + offset;
        break;
      case 'right-start':
        top = cursorY;
        left = cursorX + offset;
        break;
      case 'right-end':
        top = cursorY - menuRect.height;
        left = cursorX + offset;
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
    if (isOpen && cursorPosition.x !== 0 && cursorPosition.y !== 0 && typeof window !== 'undefined') {
      const updatePosition = () => {
        setPosition(calculatePosition(cursorPosition.x, cursorPosition.y));
      };
      
      // Small delay to ensure menu is rendered for size calculation
      const timeoutId = setTimeout(updatePosition, 10);
      
      // Listen for scroll and resize
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
      
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isOpen, cursorPosition, calculatePosition]);

  // Handle right-click (desktop)
  const handleContextMenu = useCallback((event: React.MouseEvent) => {
    if (disabled) return;
    
    event.preventDefault();
    setCursorPosition({ x: event.clientX, y: event.clientY });
    setIsOpen(true);
  }, [disabled, setIsOpen]);

  // Handle touch events (mobile/tablet)
  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    if (disabled) return;
    
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    
    // Start long press timer
    longPressTimeoutRef.current = window.setTimeout(() => {
      if (touchStartRef.current) {
        if (mobileGesture.preventTouchDefault) {
          event.preventDefault();
        }
        setCursorPosition({ x: touchStartRef.current.x, y: touchStartRef.current.y });
        setIsOpen(true);
      }
    }, mobileGesture.longPressDuration);
  }, [disabled, setIsOpen, mobileGesture]);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    if (!touchStartRef.current || !longPressTimeoutRef.current) return;
    
    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
    const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
    
    // Cancel long press if finger moves too much
    if (deltaX > 10 || deltaY > 10) {
      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
        longPressTimeoutRef.current = null;
      }
      touchStartRef.current = null;
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (longPressTimeoutRef.current) {
      clearTimeout(longPressTimeoutRef.current);
      longPressTimeoutRef.current = null;
    }
    touchStartRef.current = null;
  }, []);

  // Handle menu item click
  const handleItemClick = useCallback((itemProps: ContextMenuItemProps) => {
    if (itemProps.onClick) {
      itemProps.onClick();
    }
    
    if (dismissible.itemClick) {
      setIsOpen(false);
    }
  }, [dismissible.itemClick, setIsOpen]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !dismissible.clickOutside || typeof document === 'undefined') return;

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
    if (!isOpen || !dismissible.escapeKey || typeof document === 'undefined') return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, dismissible.escapeKey, setIsOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (longPressTimeoutRef.current) {
        clearTimeout(longPressTimeoutRef.current);
      }
    };
  }, []);

  // Render menu items
  const renderItems = () => {
    return items.map((item, index) => {
      if (item === 'separator') {
        return <ContextMenuSeparator key={`separator-${index}`} />;
      }
      
      if (typeof item === 'object' && 'type' in item && item.type === 'label') {
        return (
          <ContextMenuLabel key={`label-${index}`}>
            {item.label}
          </ContextMenuLabel>
        );
      }
      
      const menuItem = item as ContextMenuItemProps;
      return (
        <ContextMenuItem
          key={`item-${index}`}
          {...menuItem}
          onClick={() => handleItemClick(menuItem)}
        />
      );
    });
  };

  // Trigger element with context menu handlers
  const triggerElement = React.isValidElement(children) 
    ? React.cloneElement(children as React.ReactElement<React.HTMLAttributes<HTMLElement>>, {
        onContextMenu: handleContextMenu,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        className: cn(
          (children as React.ReactElement<{ className?: string }>).props.className,
          'paper-context-menu-trigger'
        ),
      })
    : (
        <div
          ref={triggerRef}
          onContextMenu={handleContextMenu}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="paper-context-menu-trigger"
        >
          {children}
        </div>
      );

  // Context menu content
  const menuContent = (
    <div
      ref={menuRef}
      role="menu"
      className={cn(
        'paper-context-menu',
        `paper-context-menu--${variant}`,
        `paper-context-menu--placement-${placement}`,
        {
          'paper-context-menu--enter': isOpen,
          'paper-context-menu--enter-active': isOpen,
        },
        // Apply color classes with luminance calculation
        getColorClassesWithLuminance(color, variant === 'solid' ? 'solid' : 'soft', true),
        contentClassName
      )}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex,
        '--context-menu-duration': `${animationDuration}ms`,
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
      {isOpen && mounted && (
        portal 
          ? createPortal(menuContent, document.body)
          : menuContent
      )}
    </>
  );
};

export default ContextMenu;
