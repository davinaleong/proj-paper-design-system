export interface ScrollAreaProps {
  /**
   * Content to be scrolled
   */
  children: React.ReactNode;
  
  /**
   * Height of the scroll area. If not provided, the component will fill available space
   */
  height?: string | number;
  
  /**
   * Width of the scroll area. If not provided, the component will fill available space
   */
  width?: string | number;
  
  /**
   * Maximum height of the scroll area
   */
  maxHeight?: string | number;
  
  /**
   * Maximum width of the scroll area
   */
  maxWidth?: string | number;
  
  /**
   * Whether to show horizontal scrollbar
   * @default 'auto'
   */
  scrollX?: 'auto' | 'scroll' | 'hidden';
  
  /**
   * Whether to show vertical scrollbar
   * @default 'auto'
   */
  scrollY?: 'auto' | 'scroll' | 'hidden';
  
  /**
   * Scrollbar width/height in pixels
   * @default 12
   */
  scrollbarSize?: number;
  
  /**
   * Scrollbar thumb color variant
   * @default 'neutral'
   */
  thumbColor?: 'neutral' | 'primary' | 'secondary' | 'accent';
  
  /**
   * Whether to hide scrollbars when not scrolling
   * @default false
   */
  hideScrollbars?: boolean;
  
  /**
   * Whether to enable smooth scrolling
   * @default true
   */
  smoothScroll?: boolean;
  
  /**
   * Custom scroll behavior for programmatic scrolling
   * @default 'smooth'
   */
  scrollBehavior?: 'auto' | 'smooth';
  
  /**
   * Whether the scroll area should be focusable
   * @default false
   */
  focusable?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Callback when scroll position changes
   */
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
  
  /**
   * Callback when scrolled to top
   */
  onScrollTop?: () => void;
  
  /**
   * Callback when scrolled to bottom
   */
  onScrollBottom?: () => void;
  
  /**
   * Callback when scrolled to left
   */
  onScrollLeft?: () => void;
  
  /**
   * Callback when scrolled to right
   */
  onScrollRight?: () => void;
}