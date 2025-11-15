# Semantic Colors Quick Reference

## 🎨 Color System Overview

The Paper Design System provides a comprehensive semantic color system with full light/dark theme support.

## 🚀 Quick Start

```typescript
import { getThemeAwareSemanticClasses } from "./utils/color"

// Theme-aware button
const classes = getThemeAwareSemanticClasses("primary", "soft")
<button className={classes.combined}>Click me</button>
```

## 📊 Color Matrix

| Semantic Color | Light Theme Base | Dark Theme Base | Use Case |
|---------------|------------------|-----------------|----------|
| `primary`     | `bg-blue-500`    | `bg-blue-400`   | Main brand, CTAs |
| `secondary`   | `bg-slate-500`   | `bg-slate-400`  | Secondary actions |
| `accent`      | `bg-sky-500`     | `bg-sky-400`    | Highlights, links |
| `success`     | `bg-green-500`   | `bg-green-400`  | Success states |
| `warning`     | `bg-yellow-500`  | `bg-yellow-400` | Warnings, caution |
| `danger`      | `bg-red-500`     | `bg-red-400`    | Errors, destructive |
| `info`        | `bg-cyan-500`    | `bg-cyan-400`   | Information |
| `neutral`     | `bg-gray-500`    | `bg-gray-400`   | Neutral content |
| `default`     | `bg-neutral-500` | `bg-neutral-400`| Default styling |

## 🎯 Style Variants

| Style     | Description | Light Example | Dark Example |
|-----------|-------------|---------------|--------------|
| `solid`   | Full color background | `bg-blue-500 text-white` | `bg-blue-400 text-blue-950` |
| `soft`    | Light background | `bg-blue-100 text-blue-700` | `bg-blue-900/20 text-blue-400` |
| `outline` | Border only | `border-blue-500 text-blue-600` | `border-blue-400 text-blue-400` |
| `ghost`   | Minimal styling | `text-blue-600 hover:bg-blue-50` | `text-blue-400 hover:bg-blue-950/10` |

## 🔧 API Functions

### Theme-Aware Classes (Recommended)
```typescript
// Automatically handles both themes with Tailwind's dark: modifier
getThemeAwareSemanticClasses(color, style)
// Returns: { background, text, border, hover, focus, combined }
```

### Specific Theme Classes
```typescript
// For specific theme requirements
getSemanticColorClassesWithDarkMode(color, style, theme)
// Returns: { background, text, border, hover, focus, combined }
```

### Batch Color Generation
```typescript
// Generate colors for multiple variants
getBatchThemeAwareClasses(["primary", "success", "danger"], "soft")
```

### Complete Palette
```typescript
// Get all style variations for a color
getSemanticColorPalette("primary")
// Returns: { light: { solid, soft, outline, ghost }, dark: { solid, soft, outline, ghost } }
```

## 🔄 Migration from Old System

### Before
```typescript
// Old approach - hard-coded colors
<button className="bg-blue-500 text-white hover:bg-blue-600">
  Button
</button>
```

### After
```typescript
// New approach - semantic + theme-aware
const classes = getThemeAwareSemanticClasses("primary", "solid")
<button className={classes.combined}>
  Button
</button>
```

## 🎨 Common Patterns

### Alert Component
```typescript
function Alert({ variant = "info", children }) {
  const classes = getThemeAwareSemanticClasses(variant, "soft")
  return (
    <div className={`${classes.combined} p-4 rounded-lg border`}>
      {children}
    </div>
  )
}
```

### Status Badge
```typescript
function StatusBadge({ status, children }) {
  const colorMap = {
    active: "success",
    pending: "warning", 
    error: "danger",
    inactive: "neutral"
  }
  
  const classes = getThemeAwareSemanticClasses(colorMap[status], "soft")
  return (
    <span className={`${classes.combined} px-2 py-1 text-xs rounded-full`}>
      {children}
    </span>
  )
}
```

### Card with Theme Support
```typescript
function Card({ variant = "default", children }) {
  const classes = getThemeAwareSemanticClasses(variant, "outline")
  return (
    <div className={`${classes.border} bg-white dark:bg-stone-900 p-6 rounded-lg`}>
      {children}
    </div>
  )
}
```

## 🔍 Testing Checklist

- [ ] Component works in light theme
- [ ] Component works in dark theme  
- [ ] Color contrast meets accessibility standards
- [ ] Hover states work in both themes
- [ ] Focus states are visible in both themes
- [ ] Loading states handle theme transitions
- [ ] No hard-coded color values

## 🎯 Pro Tips

1. **Always use semantic colors** instead of specific color names
2. **Test in both themes** during development
3. **Use `combined` property** for quick implementation
4. **Leverage style variants** for different use cases
5. **Consider accessibility** when choosing color combinations

---

*Paper Design System Semantic Colors v2.0*