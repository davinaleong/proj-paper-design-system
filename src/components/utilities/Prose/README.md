# Paper Theme Prose Styles

Comprehensive CSS and React components for styling prose content (markdown, generated content, etc.) that matches the Dav/Devs Paper Design System aesthetic.

## Features

- **Paper Theme Integration**: Colors, typography, and spacing that match the design system
- **Container-Responsive**: Typography scales based on container width using CSS container queries
- **Typography Hierarchy**: Playfair Display for headings, Montserrat for body, Source Code Pro for code
- **Dark Mode Support**: Automatic dark mode styles with proper contrast ratios
- **Accessibility**: WCAG 2.1 AA compliant contrast ratios and semantic HTML
- **Flexible Usage**: Both utility classes and React component wrapper

## Usage

### React Component

```tsx
import { Prose } from '@davdevs/paper'

// Basic usage
<Prose>
  <h1>Article Title</h1>
  <p>Article content with proper Paper theme styling...</p>
</Prose>

// With content type preset
<Prose contentType="article">
  {markdownContent}
</Prose>

// With custom variant
<Prose variant="elegant" size="lg">
  {premiumContent}
</Prose>

// With custom constraints
<Prose constrained={false} includeDark={false}>
  {customContent}
</Prose>
```

### CSS Classes

```tsx
import { proseStyles, getProseStyles, useProseStyles } from '@davdevs/paper'

// Direct class usage
<div className={proseStyles}>
  {content}
</div>

// Programmatic styles
<div className={getProseStyles('lg', true)}>
  {content}
</div>

// Hook for custom components
function MyArticle() {
  const styles = useProseStyles({
    size: 'lg',
    contentType: 'article',
    constrained: true
  })
  
  return <article className={styles}>{content}</article>
}
```

## Content Types

### `article`
Optimized for long-form reading with larger typography and generous spacing.

```tsx
<Prose contentType="article">
  {blogPost}
</Prose>
```

### `documentation`
Balanced typography for technical documentation with proper code styling.

```tsx
<Prose contentType="documentation">
  {apiDocs}
</Prose>
```

### `comment`
Compact styling for user comments and descriptions.

```tsx
<Prose contentType="comment">
  {userComment}
</Prose>
```

### `markdown`
Standard styling for general markdown content.

```tsx
<Prose contentType="markdown">
  {readmeContent}
</Prose>
```

### `codeDoc`
Enhanced code documentation with smaller code blocks.

```tsx
<Prose contentType="codeDoc">
  {technicalDocs}
</Prose>
```

## Style Variants

### `elegant`
Luxurious typography for premium content and landing pages.

```tsx
<Prose variant="elegant">
  <h1>Premium Article</h1>
  <p>Large, elegant typography...</p>
</Prose>
```

### `compact`
Reduced spacing for information-dense layouts.

```tsx
<Prose variant="compact">
  {dashboardContent}
</Prose>
```

### `code`
Enhanced styling for code-heavy documentation.

```tsx
<Prose variant="code">
  {technicalGuide}
</Prose>
```

## Size Variants

- `sm`: Small prose for compact layouts
- `base`: Standard prose size (default)
- `lg`: Large prose for comfortable reading
- `xl`: Extra large for emphasis
- `2xl`: Maximum size for hero content

```tsx
<Prose size="lg">
  {content}
</Prose>
```

## Styling Coverage

### Typography Elements
- **Headings** (h1-h6): Playfair Display with proper hierarchy
- **Body text** (p): Montserrat with relaxed line height
- **Code** (code, pre): Source Code Pro with syntax highlighting
- **Lists** (ul, ol): Proper spacing and bullets/numbers
- **Links** (a): Paper theme accent colors with hover states

### Content Elements
- **Blockquotes**: Elegant styling with Paper theme colors
- **Tables**: Full styling with borders, zebra stripes, and hover states
- **Images**: Rounded corners, shadows, and proper captions
- **Horizontal rules**: Subtle dividers matching the theme

### Text Treatments
- **Strong/Bold**: Enhanced weight and color
- **Emphasis/Italic**: Proper italic styling
- **Mark/Highlight**: Yellow highlighting with good contrast
- **Code spans**: Inline code with background and borders
- **Keyboard input**: Styled kbd elements for shortcuts
- **Subscript/Superscript**: Scientific notation support

### Interactive Elements
- **Focus states**: Proper keyboard navigation
- **Hover effects**: Subtle interactions
- **Selection**: Custom text selection colors

## Container Queries

The prose styles use CSS container queries for responsive typography:

```css
/* Automatic scaling based on container width */
.prose-container {
  container-type: inline-size;
}

/* Typography scales at these breakpoints */
@container (min-width: 320px) { /* Small container */ }
@container (min-width: 480px) { /* Medium container */ }
@container (min-width: 640px) { /* Large container */ }
@container (min-width: 768px) { /* Extra large container */ }
@container (min-width: 1024px) { /* XXL container */ }
```

## Color Palette

The prose styles use the Paper theme color palette:

- **Base**: `#faf9f6` (off-white paper background)
- **Text**: Gray scale from `gray-600` to `gray-900`
- **Accent**: Teal colors for links and highlights
- **Code**: High contrast backgrounds for readability
- **Borders**: Subtle stone colors for dividers

## Accessibility

- **WCAG 2.1 AA** compliant contrast ratios
- **Semantic HTML** structure maintained
- **Screen reader** friendly markup
- **Keyboard navigation** support
- **Motion preferences** respected for animations

## Dark Mode

Dark mode styles are automatically applied when the parent theme is in dark mode:

```tsx
<ThemeProvider defaultTheme={{ mode: "dark" }}>
  <Prose>
    {/* Automatically styled for dark mode */}
  </Prose>
</ThemeProvider>
```

## Integration with Paper Components

Prose styles work seamlessly with other Paper components:

```tsx
<Paper className="p-8">
  <Prose>
    <h1>Article in Paper Container</h1>
    <p>Content automatically inherits container queries...</p>
  </Prose>
</Paper>
```

## Performance

- **Tree-shakeable**: Only import what you need
- **No runtime JS**: Pure CSS for prose styling
- **Container queries**: Native CSS performance
- **Optimized classes**: Minimal class generation

## Customization

Extend the prose styles for custom use cases:

```tsx
import { useProseStyles } from '@davdevs/paper'

function CustomProse({ children, className }) {
  const baseStyles = useProseStyles({ size: 'lg' })
  
  return (
    <div className={cn(baseStyles, 'my-custom-prose', className)}>
      {children}
    </div>
  )
}
```

The Paper theme prose styles provide a complete solution for styling any text content while maintaining the warm, sophisticated aesthetic of the Dav/Devs Paper Design System.