# ScrollArea Component

A customizable scroll area component with styled scrollbars, smooth scrolling, and comprehensive scroll event callbacks.

## Features

- **Custom Scrollbars**: Styled scrollbars that match the Paper design system
- **Flexible Sizing**: Support for fixed dimensions, max dimensions, and dynamic sizing
- **Scroll Direction Control**: Control horizontal and vertical scrolling independently
- **Event Callbacks**: Rich set of scroll event callbacks for edge detection
- **Smooth Scrolling**: Optional smooth scrolling behavior
- **Accessibility**: Keyboard navigation support and proper ARIA attributes
- **Customizable Appearance**: Multiple thumb colors and scrollbar sizing options
- **Hide Scrollbars**: Option to hide scrollbars while maintaining functionality

## Installation

```tsx
import { ScrollArea } from '@/components/system-utilities/ScrollArea';
// or
import { ScrollArea } from '@/components';
```

## Basic Usage

```tsx
import { ScrollArea } from '@/components/system-utilities/ScrollArea';

function MyComponent() {
  return (
    <ScrollArea height={300}>
      <div>
        {/* Your scrollable content */}
        <p>Long content that requires scrolling...</p>
      </div>
    </ScrollArea>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to be scrolled |
| `height` | `string \| number` | - | Height of the scroll area |
| `width` | `string \| number` | - | Width of the scroll area |
| `maxHeight` | `string \| number` | - | Maximum height of the scroll area |
| `maxWidth` | `string \| number` | - | Maximum width of the scroll area |
| `scrollX` | `'auto' \| 'scroll' \| 'hidden'` | `'auto'` | Horizontal scrollbar behavior |
| `scrollY` | `'auto' \| 'scroll' \| 'hidden'` | `'auto'` | Vertical scrollbar behavior |
| `scrollbarSize` | `number` | `12` | Scrollbar width/height in pixels |
| `thumbColor` | `'neutral' \| 'primary' \| 'secondary' \| 'accent'` | `'neutral'` | Scrollbar thumb color variant |
| `hideScrollbars` | `boolean` | `false` | Whether to hide scrollbars when not scrolling |
| `smoothScroll` | `boolean` | `true` | Whether to enable smooth scrolling |
| `scrollBehavior` | `'auto' \| 'smooth'` | `'smooth'` | Custom scroll behavior for programmatic scrolling |
| `focusable` | `boolean` | `false` | Whether the scroll area should be focusable |
| `className` | `string` | - | Additional CSS classes |
| `onScroll` | `(event: UIEvent) => void` | - | Callback when scroll position changes |
| `onScrollTop` | `() => void` | - | Callback when scrolled to top |
| `onScrollBottom` | `() => void` | - | Callback when scrolled to bottom |
| `onScrollLeft` | `() => void` | - | Callback when scrolled to left |
| `onScrollRight` | `() => void` | - | Callback when scrolled to right |

## Examples

### Basic Vertical Scrolling

```tsx
<ScrollArea height={300}>
  <div>
    {Array.from({ length: 50 }, (_, i) => (
      <div key={i} className="p-4 border-b">
        Item {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>
```

### Horizontal Scrolling

```tsx
<ScrollArea height={200} scrollX="auto" scrollY="hidden">
  <div className="flex gap-4" style={{ minWidth: '1200px' }}>
    {Array.from({ length: 10 }, (_, i) => (
      <div key={i} className="min-w-[200px] p-4 bg-gray-100">
        Card {i + 1}
      </div>
    ))}
  </div>
</ScrollArea>
```

### Both Directions

```tsx
<ScrollArea height={200} width={400}>
  <div style={{ minWidth: '800px', minHeight: '600px' }}>
    <h3>Large Content Area</h3>
    <p>This content requires both horizontal and vertical scrolling.</p>
  </div>
</ScrollArea>
```

### Custom Scrollbar Styling

```tsx
<ScrollArea 
  height={300}
  scrollbarSize={16}
  thumbColor="primary"
  className="border rounded-lg"
>
  <div>Your content here</div>
</ScrollArea>
```

### Hidden Scrollbars

```tsx
<ScrollArea height={300} hideScrollbars>
  <div>Content with hidden scrollbars</div>
</ScrollArea>
```

### With Scroll Events

```tsx
const [scrollPosition, setScrollPosition] = useState('middle');

<ScrollArea 
  height={300}
  onScrollTop={() => setScrollPosition('top')}
  onScrollBottom={() => setScrollPosition('bottom')}
  onScroll={() => setScrollPosition('middle')}
>
  <div>Content with scroll tracking</div>
</ScrollArea>
```

### Focusable for Keyboard Navigation

```tsx
<ScrollArea height={300} focusable>
  <div>
    This scroll area can be focused and navigated with keyboard.
    Click to focus, then use arrow keys or Page Up/Down.
  </div>
</ScrollArea>
```

### Dynamic Height with Max Height

```tsx
<ScrollArea maxHeight={400}>
  <div>
    This content will grow with its content up to 400px,
    then become scrollable.
  </div>
</ScrollArea>
```

## Styling

The ScrollArea component uses the Paper design system colors and follows the established theming patterns:

- **Background**: Uses `bg-paper` for the main background
- **Borders**: Uses `border-paper-border` for consistent borders
- **Scrollbars**: Styled to match the Paper theme with configurable colors
- **Focus States**: Proper focus rings using Paper theme colors

## Accessibility

- Supports keyboard navigation when `focusable` is enabled
- Proper ARIA attributes for screen readers
- Respects user motion preferences
- Maintains semantic HTML structure
- Focus management for keyboard users

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- WebKit scrollbar styling for Chromium-based browsers
- Fallback scrollbar styling for Firefox and other browsers
- Cross-platform scrollbar consistency

## Performance Notes

- Efficiently handles scroll events with proper cleanup
- Optimized for smooth scrolling performance
- Minimal re-renders with proper callback memoization
- Lightweight implementation with no external dependencies