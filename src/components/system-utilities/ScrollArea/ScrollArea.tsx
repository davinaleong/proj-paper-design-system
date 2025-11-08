import React, { useRef, useEffect, useCallback } from 'react';
import { cn } from '../../../utils/cn';
import type { ScrollAreaProps } from './types';

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  (
    {
      children,
      height,
      width,
      maxHeight,
      maxWidth,
      scrollX = 'auto',
      scrollY = 'auto',
      scrollbarSize = 12,
      thumbColor = 'neutral',
      hideScrollbars = false,
      smoothScroll = true,
      scrollBehavior = 'smooth',
      focusable = false,
      className,
      onScroll,
      onScrollTop,
      onScrollBottom,
      onScrollLeft,
      onScrollRight,
      ...props
    },
    ref
  ) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const lastScrollTop = useRef(0);
    const lastScrollLeft = useRef(0);

    // Handle scroll events and callbacks
    const handleScroll = useCallback(
      (event: React.UIEvent<HTMLDivElement>) => {
        const target = event.currentTarget;
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = target;

        // Call the main scroll callback
        onScroll?.(event);

        // Check for edge scrolling
        const isAtTop = scrollTop === 0;
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
        const isAtLeft = scrollLeft === 0;
        const isAtRight = scrollLeft + clientWidth >= scrollWidth - 1;

        // Fire edge callbacks only when crossing the threshold
        if (isAtTop && lastScrollTop.current > 0) {
          onScrollTop?.();
        }
        if (isAtBottom && lastScrollTop.current < scrollHeight - clientHeight - 1) {
          onScrollBottom?.();
        }
        if (isAtLeft && lastScrollLeft.current > 0) {
          onScrollLeft?.();
        }
        if (isAtRight && lastScrollLeft.current < scrollWidth - clientWidth - 1) {
          onScrollRight?.();
        }

        lastScrollTop.current = scrollTop;
        lastScrollLeft.current = scrollLeft;
      },
      [onScroll, onScrollTop, onScrollBottom, onScrollLeft, onScrollRight]
    );

    // Set up smooth scrolling
    useEffect(() => {
      const element = scrollRef.current;
      if (!element || !smoothScroll) return;

      element.style.scrollBehavior = scrollBehavior;

      return () => {
        if (element) {
          element.style.scrollBehavior = '';
        }
      };
    }, [smoothScroll, scrollBehavior]);

    // Generate scrollbar styles
    const getScrollbarStyles = useCallback(() => {
      const thumbColors = {
        neutral: 'rgb(156 163 175)', // gray-400
        primary: 'rgb(14 116 144)', // cyan-700
        secondary: 'rgb(126 34 206)', // purple-700
        accent: 'rgb(15 118 110)', // teal-700
      };

      const thumbColor_value = thumbColors[thumbColor];
      const trackColor = 'rgb(243 244 246)'; // gray-100

      if (hideScrollbars) {
        return {
          scrollbarWidth: 'none' as const,
          msOverflowStyle: 'none' as const,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        };
      }

      return {
        scrollbarWidth: 'thin' as const,
        scrollbarColor: `${thumbColor_value} ${trackColor}`,
        '&::-webkit-scrollbar': {
          width: `${scrollbarSize}px`,
          height: `${scrollbarSize}px`,
        },
        '&::-webkit-scrollbar-track': {
          background: trackColor,
          borderRadius: `${scrollbarSize / 2}px`,
        },
        '&::-webkit-scrollbar-thumb': {
          background: thumbColor_value,
          borderRadius: `${scrollbarSize / 2}px`,
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: thumbColor_value,
          opacity: 0.8,
        },
        '&::-webkit-scrollbar-corner': {
          background: trackColor,
        },
      };
    }, [scrollbarSize, thumbColor, hideScrollbars]);

    // Convert style object to CSS custom properties
    const scrollbarStyles = getScrollbarStyles();
    const styleProps: React.CSSProperties = {
      height: typeof height === 'number' ? `${height}px` : height,
      width: typeof width === 'number' ? `${width}px` : width,
      maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
      maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
      overflowX: scrollX,
      overflowY: scrollY,
      scrollbarWidth: scrollbarStyles.scrollbarWidth,
      ...(scrollbarStyles.scrollbarColor && {
        scrollbarColor: scrollbarStyles.scrollbarColor,
      }),
    };

    return (
      <div
        ref={ref || scrollRef}
        className={cn(
          'scroll-area',
          'relative',
          'overflow-auto',
          // Paper theme styling
          'bg-paper',
          'rounded-sm',
          // Smooth scrolling
          smoothScroll && 'scroll-smooth',
          // Focusable styling
          focusable && [
            'focus:outline-none',
            'focus:ring-2',
            'focus:ring-primary-500',
            'focus:ring-offset-2',
            'focus:ring-offset-paper',
          ],
          className
        )}
        style={{
          ...styleProps,
          // WebKit scrollbar styles need to be applied via CSS-in-JS or CSS custom properties
          // We'll use a CSS class approach for better browser support
        }}
        tabIndex={focusable ? 0 : -1}
        onScroll={handleScroll}
        {...props}
      >
        <style>
          {`
            .scroll-area::-webkit-scrollbar {
              width: ${scrollbarSize}px;
              height: ${scrollbarSize}px;
            }
            .scroll-area::-webkit-scrollbar-track {
              background: rgb(243 244 246);
              border-radius: ${scrollbarSize / 2}px;
            }
            .scroll-area::-webkit-scrollbar-thumb {
              background: ${
                thumbColor === 'neutral'
                  ? 'rgb(156 163 175)'
                  : thumbColor === 'primary'
                  ? 'rgb(14 116 144)'
                  : thumbColor === 'secondary'
                  ? 'rgb(126 34 206)'
                  : 'rgb(15 118 110)'
              };
              border-radius: ${scrollbarSize / 2}px;
              border: 2px solid transparent;
              background-clip: padding-box;
            }
            .scroll-area::-webkit-scrollbar-thumb:hover {
              opacity: 0.8;
            }
            .scroll-area::-webkit-scrollbar-corner {
              background: rgb(243 244 246);
            }
            ${
              hideScrollbars
                ? `
            .scroll-area {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .scroll-area::-webkit-scrollbar {
              display: none;
            }
            `
                : ''
            }
          `}
        </style>
        <div className="scroll-area-content">
          {children}
        </div>
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';