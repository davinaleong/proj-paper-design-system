"use client"

import React, { 
  useState, 
  useRef, 
  useEffect, 
  useCallback
} from 'react';
import { createPortal } from 'react-dom';
import type { PopoverProps, PopoverPosition } from './types';
import { cn } from '../../../utils';
import './Popover.css';

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  isOpen: controlledIsOpen,
  onOpenChange,
  trigger = 'click',
  placement = 'bottom',
  variant = 'solid',
  size = 'md',
  showArrow = true,
  dismissible = { clickOutside: true, escapeKey: true },
  offset = 8,
  contentClassName,
  contentStyle,
  portal = true,
  disabled = false,
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
  const triggerRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<PopoverPosition>({ top: 0, left: 0 });

  // Calculate position based on trigger and placement
  const calculatePosition = useCallback((): PopoverPosition => {
    if (!triggerRef.current || !popoverRef.current || typeof window === 'undefined') {
      return { top: 0, left: 0 };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
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
        top = triggerRect.top - popoverRect.height - offset;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'top-start':
        top = triggerRect.top - popoverRect.height - offset;
        left = triggerRect.left;
        break;
      case 'top-end':
        top = triggerRect.top - popoverRect.height - offset;
        left = triggerRect.right - popoverRect.width;
        break;
      case 'bottom':
        top = triggerRect.bottom + offset;
        left = triggerRect.left + (triggerRect.width - popoverRect.width) / 2;
        break;
      case 'bottom-start':
        top = triggerRect.bottom + offset;
        left = triggerRect.left;
        break;
      case 'bottom-end':
        top = triggerRect.bottom + offset;
        left = triggerRect.right - popoverRect.width;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.left - popoverRect.width - offset;
        break;
      case 'left-start':
        top = triggerRect.top;
        left = triggerRect.left - popoverRect.width - offset;
        break;
      case 'left-end':
        top = triggerRect.bottom - popoverRect.height;
        left = triggerRect.left - popoverRect.width - offset;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - popoverRect.height) / 2;
        left = triggerRect.right + offset;
        break;
      case 'right-start':
        top = triggerRect.top;
        left = triggerRect.right + offset;
        break;
      case 'right-end':
        top = triggerRect.bottom - popoverRect.height;
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
    } else if (left + popoverRect.width > viewport.width - padding) {
      left = viewport.width - popoverRect.width - padding;
    }
    
    // Vertical boundaries
    if (top < padding + viewport.scrollY) {
      top = padding + viewport.scrollY;
    } else if (top + popoverRect.height > viewport.height + viewport.scrollY - padding) {
      top = viewport.height + viewport.scrollY - popoverRect.height - padding;
    }

    return { top, left };
  }, [placement, offset]);

  // Update position when open
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
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

  const handleTriggerContextMenu = useCallback((event: React.MouseEvent) => {
    if (disabled) return;
    
    if (trigger === 'contextMenu') {
      event.preventDefault();
      setIsOpen(true);
    }
  }, [trigger, setIsOpen, disabled]);

  // Handle outside click
  useEffect(() => {
    if (!isOpen || !dismissible.clickOutside || typeof document === 'undefined') return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (
        triggerRef.current?.contains(target) ||
        popoverRef.current?.contains(target)
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

  // Wrap trigger in a span to attach event handlers and ref
  const triggerElement = (
    <span
      ref={triggerRef}
      onClick={handleTriggerClick}
      onMouseEnter={handleTriggerMouseEnter}
      onMouseLeave={handleTriggerMouseLeave}
      onContextMenu={handleTriggerContextMenu}
      className={cn(
        'inline-block',
        isOpen && 'paper-popover-trigger--active'
      )}
      aria-expanded={isOpen}
      aria-haspopup={true}
      aria-describedby={isOpen ? 'paper-popover-content' : undefined}
      style={{ cursor: disabled ? 'default' : 'pointer' }}
    >
      {children}
    </span>
  );

  // Popover content
  const popoverContent = (
    <div
      ref={popoverRef}
      id="paper-popover-content"
      role="tooltip"
      className={cn(
        'paper-popover',
        `paper-popover--${variant}`,
        `paper-popover--${size}`,
        `paper-popover--placement-${placement}`,
        {
          'paper-popover--enter': isOpen,
          'paper-popover--enter-active': isOpen,
        },
        contentClassName
      )}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        ...contentStyle,
      }}
      {...props}
    >
      {content}
      {showArrow && (
        <div className="paper-popover__arrow" aria-hidden="true" />
      )}
    </div>
  );

  return (
    <>
      {triggerElement}
      {isOpen && mounted && (
        portal 
          ? createPortal(popoverContent, document.body)
          : popoverContent
      )}
    </>
  );
};

export default Popover;
