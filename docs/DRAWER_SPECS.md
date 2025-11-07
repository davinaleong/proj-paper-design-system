# Drawer Component Specification

The Drawer component provides slide-out panels for navigation, settings, or contextual content with comprehensive customization options that follow the Dav/Devs Paper Design System.

## 🎯 Overview

A flexible drawer/sidebar component that reuses existing design system components and maintains consistency with established patterns.

## 📋 Core Requirements

### Component Reuse Strategy

1. **Panel Component**: Base container with Paper styling and elevation
2. **Button Component**: Trigger buttons with full variant support  
3. **IconButton Component**: Compact trigger options and close buttons

### Paper Design System Integration

- **Surface Treatment**: Consistent Panel component elevation and shadows
- **Typography**: Integrated heading and content typography hierarchy
- **Spacing**: Standardized padding and margin using design system tokens
- **Borders**: Subtle borders with Paper theme colors (#e5e3df)
- **Background**: Off-white paper (#faf9f6) with subtle textures

## 🛠 Technical Specifications

### Variant System (follows Button variants)

```typescript
type DrawerVariant = "solid" | "outline" | "ghost" | "link" | "plain"
```

- **Solid**: Full background with strong presence
- **Outline**: Border-focused with transparent background  
- **Ghost**: Minimal styling with hover effects
- **Link**: Text-only appearance with underline effects
- **Plain**: Completely unstyled for custom implementations

### Color Variants (follows ColorVariant system)

```typescript
type DrawerColor = ColorVariant // 42 color options
```

**Primary Colors**: primary, secondary, danger, success, warning, info  
**Extended Palette**: Full Tailwind spectrum (red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose)  
**Neutral Options**: neutral, paper (design system specific)

### Trigger Variants (follows DropdownMenu trigger system)

```typescript
type DrawerTrigger = "click" | "hover" | "contextMenu"
```

- **Click**: Standard click-to-open interaction
- **Hover**: Open on mouse enter with configurable delay
- **ContextMenu**: Right-click or long-press activation

### Position Variants

```typescript
type DrawerPosition = "top" | "right" | "bottom" | "left"
```

- **Top**: Slides down from top edge
- **Right**: Slides in from right edge (most common)
- **Bottom**: Slides up from bottom edge  
- **Left**: Slides in from left edge

### Animation Variants

```typescript
type DrawerAnimation = "slide" | "fade" | "scale" | "slideScale"
```

- **Slide**: Pure directional slide motion
- **Fade**: Opacity-based entrance with subtle scale
- **Scale**: Scale-based entrance from center
- **SlideScale**: Combined slide and scale for enhanced effect

## 🎨 Component Architecture

### Core Props Interface

```typescript
interface DrawerProps {
  // Content & Trigger
  children: ReactNode              // Trigger element
  content: ReactNode              // Drawer content
  title?: string                  // Optional header title
  
  // Behavior
  isOpen?: boolean                // Controlled open state
  onOpenChange?: (open: boolean) => void
  trigger?: DrawerTrigger         // Interaction method
  dismissible?: DrawerDismissible // Close behaviors
  
  // Styling
  variant?: DrawerVariant         // Visual style
  color?: DrawerColor            // Color theme
  position?: DrawerPosition       // Slide direction
  animation?: DrawerAnimation     // Entry/exit effect
  
  // Layout
  size?: "sm" | "md" | "lg" | "xl" | "full"
  overlay?: boolean               // Background overlay
  
  // Accessibility
  closeOnEscape?: boolean
  closeOnOverlayClick?: boolean
  trapFocus?: boolean
  
  // Styling
  className?: string
  contentClassName?: string
  overlayClassName?: string
}
```

### Dismissible Configuration

```typescript
interface DrawerDismissible {
  clickOutside?: boolean          // Close on overlay click
  escapeKey?: boolean            // Close on Escape key
  closeButton?: boolean          // Show close button
}
```

### Size Variants

- **sm**: 320px width/height (mobile-friendly)
- **md**: 480px width/height (standard content)
- **lg**: 640px width/height (rich content)
- **xl**: 800px width/height (complex layouts)
- **full**: 100% viewport coverage (mobile sheets)

## 🔧 Implementation Details

### Panel Integration

- **Base Container**: Uses Panel component for consistent Paper styling
- **Elevation**: Configurable elevation levels (0-5) for depth
- **Background**: Paper theme backgrounds with subtle textures
- **Borders**: Consistent border radius and subtle border colors

### Button Integration

- **Trigger Button**: Full Button component with all variants and colors
- **Close Button**: IconButton with consistent styling and accessibility
- **Action Buttons**: Support for footer action buttons using Button component

### Animation System

- **CSS Transitions**: Smooth hardware-accelerated animations
- **Duration Control**: Configurable animation timing (150ms-500ms)
- **Easing Functions**: Paper-appropriate easing curves
- **Reduced Motion**: Respects user motion preferences

### Accessibility Features

- **Focus Management**: Automatic focus trapping within drawer
- **Keyboard Navigation**: Full keyboard support with logical tab order
- **ARIA Attributes**: Proper dialog and overlay semantics
- **Screen Reader**: Comprehensive screen reader announcements

## 📚 Usage Examples

### Basic Drawer

```typescript
<Drawer
  content={<div>Drawer content</div>}
  variant="solid"
  color="primary"
  position="right"
>
  <Button>Open Drawer</Button>
</Drawer>
```

### Advanced Navigation Drawer

```typescript
<Drawer
  content={<NavigationMenu />}
  title="Navigation"
  variant="outline"
  color="neutral"
  position="left" 
  size="md"
  animation="slideScale"
  dismissible={{
    clickOutside: true,
    escapeKey: true,
    closeButton: true
  }}
  overlay={true}
  trapFocus={true}
>
  <IconButton icon={Menu} variant="ghost" />
</Drawer>
```

### Settings Panel

```typescript
<Drawer
  content={<SettingsForm />}
  title="Settings"
  variant="solid"
  color="secondary"
  position="right"
  size="lg"
  trigger="contextMenu"
  animation="slide"
>
  <Button variant="ghost" icon={Settings}>
    Settings
  </Button>
</Drawer>
```

### Mobile Bottom Sheet

```typescript
<Drawer
  content={<MobileActions />}
  variant="solid"
  color="paper"
  position="bottom"
  size="sm"
  animation="slide"
  dismissible={{
    clickOutside: true,
    escapeKey: true
  }}
  overlay={true}
>
  <IconButton icon={MoreVertical} />
</Drawer>
```

## ✅ Implementation Checklist

### Core Functionality
- [ ] Base Drawer component with Panel integration
- [ ] Trigger system with Button/IconButton components
- [ ] Position variants (top, right, bottom, left)
- [ ] Animation variants (slide, fade, scale, slideScale)

### Styling System
- [ ] Button variant inheritance (solid, outline, ghost, link, plain)
- [ ] Full ColorVariant support (42 colors)
- [ ] Size variants (sm, md, lg, xl, full)
- [ ] Paper theme integration

### Interaction System
- [ ] DropdownMenu trigger variants (click, hover, contextMenu)
- [ ] Dismissible configurations
- [ ] Overlay background with click-to-close
- [ ] Keyboard navigation and focus management

### Accessibility
- [ ] Focus trapping within drawer
- [ ] ARIA attributes and semantics
- [ ] Screen reader announcements
- [ ] Keyboard navigation support
- [ ] Reduced motion preferences

### Documentation
- [ ] TypeScript interfaces and types
- [ ] Component API documentation
- [ ] Usage examples and patterns
- [ ] Storybook stories with all variants
- [ ] Unit tests with comprehensive coverage

## 🎨 Design Considerations

### Visual Hierarchy

- **Header**: Clear title area with optional close button
- **Content**: Scrollable content area with consistent padding
- **Footer**: Optional action area for buttons and controls

### Responsive Behavior

- **Desktop**: Side panels with configurable widths
- **Tablet**: Adaptive sizing with overlay interactions
- **Mobile**: Bottom sheets and full-screen modals

### Motion Design

- **Enter Animations**: Smooth slide-in effects from specified direction
- **Exit Animations**: Reverse slide-out with fade
- **Interaction Feedback**: Subtle hover and press states on triggers
- **Performance**: Hardware-accelerated transforms for smooth 60fps

This specification ensures the Drawer component maintains consistency with the Paper Design System while providing comprehensive functionality for navigation, settings panels, and contextual content overlays.