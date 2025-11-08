# DotIndicator Component

A versatile animated dot indicator component for status visualization, notifications, and loading states.

## Features

- **5 Size Variants**: `xs`, `sm`, `md`, `lg`, `xl`
- **4 Visual Variants**: `solid`, `soft`, `outline`, `pulse`
- **42+ Color Variants**: Complete color system integration
- **Togglable Animation**: Enable/disable with custom duration and delay
- **TypeScript Support**: Comprehensive type definitions
- **Accessibility**: Semantic HTML and ARIA support
- **Paper Theme Integration**: Consistent with design system

## Basic Usage

```tsx
import { DotIndicator } from "@/components/system-utilities/DotIndicator"

// Basic dot indicator
<DotIndicator />

// Animated status indicator
<DotIndicator color="success" animated />

// Custom size and variant
<DotIndicator
  size="lg"
  variant="pulse"
  color="warning"
  animated
/>
```

## Props

| Prop                | Type                  | Default     | Description                          |
| ------------------- | --------------------- | ----------- | ------------------------------------ |
| `color`             | `ColorVariant`        | `"primary"` | Color theme for the indicator        |
| `variant`           | `DotIndicatorVariant` | `"solid"`   | Visual style variant                 |
| `size`              | `DotIndicatorSize`    | `"md"`      | Size of the indicator                |
| `animated`          | `boolean`             | `false`     | Whether the indicator should animate |
| `animationDuration` | `number`              | `1500`      | Animation duration in milliseconds   |
| `animationDelay`    | `number`              | `0`         | Animation delay in milliseconds      |
| `className`         | `string`              | -           | Additional CSS classes               |
| `data-testid`       | `string`              | -           | Test identifier                      |

## Size Variants

```tsx
<DotIndicator size="xs" />   {/* 4px */}
<DotIndicator size="sm" />   {/* 6px */}
<DotIndicator size="md" />   {/* 8px - default */}
<DotIndicator size="lg" />   {/* 12px */}
<DotIndicator size="xl" />   {/* 16px */}
```

## Visual Variants

```tsx
<DotIndicator variant="solid" />    {/* Filled dot */}
<DotIndicator variant="soft" />     {/* Soft background */}
<DotIndicator variant="outline" />  {/* Border only */}
<DotIndicator variant="pulse" />    {/* Pulsing effect */}
```

## Color Variants

```tsx
{/* Semantic colors */}
<DotIndicator color="primary" />
<DotIndicator color="secondary" />
<DotIndicator color="success" />
<DotIndicator color="warning" />
<DotIndicator color="danger" />
<DotIndicator color="info" />

{/* Tailwind colors */}
<DotIndicator color="red" />
<DotIndicator color="blue" />
<DotIndicator color="green" />
{/* ...and many more */}
```

## Animation Control

```tsx
{
  /* Basic animation */
}
;<DotIndicator animated />

{
  /* Custom timing */
}
;<DotIndicator
  animated
  animationDuration={1000} // 1 second
  animationDelay={500} // 0.5 second delay
/>

{
  /* Staggered sequence */
}
;<div className="flex gap-1">
  <DotIndicator animated animationDelay={0} />
  <DotIndicator animated animationDelay={200} />
  <DotIndicator animated animationDelay={400} />
</div>
```

## Common Use Cases

### Status Indicators

```tsx
<div className="flex items-center gap-2">
  <span>Online</span>
  <DotIndicator color="success" variant="solid" animated />
</div>

<div className="flex items-center gap-2">
  <span>Processing</span>
  <DotIndicator color="warning" variant="pulse" animated />
</div>

<div className="flex items-center gap-2">
  <span>Offline</span>
  <DotIndicator color="danger" variant="soft" />
</div>
```

### Notification Badges

```tsx
<div className="relative">
  <Button>Messages</Button>
  <DotIndicator
    className="absolute -top-1 -right-1"
    color="primary"
    size="sm"
    animated
  />
</div>
```

### Loading States

```tsx
<div className="flex items-center gap-2">
  <span>Loading</span>
  <div className="flex gap-1">
    <DotIndicator animated animationDelay={0} />
    <DotIndicator animated animationDelay={200} />
    <DotIndicator animated animationDelay={400} />
  </div>
</div>
```

### Step Indicators

```tsx
<div className="flex items-center gap-4">
  <DotIndicator color="success" size="lg" />
  <DotIndicator color="primary" size="lg" animated />
  <DotIndicator color="muted" size="lg" />
</div>
```

## Accessibility

The component follows accessibility best practices:

- Uses semantic `div` elements
- Supports `data-testid` for testing
- Respects user's motion preferences
- High contrast color combinations

## Testing

```tsx
import { render, screen } from "@testing-library/react"
import { DotIndicator } from "@/components/system-utilities/DotIndicator"

test("renders dot indicator", () => {
  render(<DotIndicator data-testid="dot" />)
  expect(screen.getByTestId("dot")).toBeInTheDocument()
})

test("applies animation classes", () => {
  render(<DotIndicator animated data-testid="dot" />)
  expect(screen.getByTestId("dot")).toHaveClass("animate-pulse")
})
```

## Styling

The component uses Tailwind CSS classes and can be customized with:

- `className` prop for additional styles
- CSS custom properties for fine-tuning
- Tailwind utility classes for spacing and positioning

## Related Components

- `Badge` - For text-based indicators
- `Loader` - For loading spinners
- `ProgressBar` - For progress indication
- `Tag` - For labeled indicators
