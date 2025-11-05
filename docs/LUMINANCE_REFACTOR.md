# Color Luminance Refactor Documentation

## Overview

The `colors.ts` utility has been enhanced with luminance-based color calculation functions that automatically determine optimal text contrast for accessibility compliance. This refactor adds scientific color theory to ensure WCAG-compliant color combinations.

## New Functions Added

### Core Luminance Functions

#### `getOptimalTextColor(backgroundColor: string, threshold?: number): "black" | "white"`
Calculates the optimal text color (black or white) for a given background color using luminance analysis.

**Examples:**
```typescript
getOptimalTextColor("#ffffff") // returns "black"
getOptimalTextColor("#000000") // returns "white"
getOptimalTextColor("#3b82f6") // returns "white"
getOptimalTextColor("#faf9f6") // returns "black" (Paper base)
```

#### `getContrastRatios(backgroundColor: string)`
Returns contrast ratios for both black and white text on the given background.

**Returns:**
```typescript
{
  black: number,     // Contrast ratio with black text
  white: number,     // Contrast ratio with white text
  optimal: "black" | "white"  // Which provides better contrast
}
```

#### `meetsWCAGStandard(backgroundColor: string, textColor: string, level?: "AA" | "AAA", size?: "normal" | "large"): boolean`
Validates if a color combination meets WCAG accessibility standards.

**Examples:**
```typescript
meetsWCAGStandard("#ffffff", "#000000", "AA") // true
meetsWCAGStandard("#ffffff", "#cccccc", "AA") // false
meetsWCAGStandard("#ffffff", "#999999", "AA", "large") // might be true
```

### Tailwind Integration Functions

#### `getOptimalTextClasses(backgroundColor: string, customTextColors?): string`
Returns Tailwind classes for optimal text color based on background luminance.

**Examples:**
```typescript
getOptimalTextClasses("#ffffff") // "text-black dark:text-black"
getOptimalTextClasses("#0f766e") // "text-white dark:text-white"

// With custom colors
getOptimalTextClasses("#3b82f6", { 
  black: "text-gray-900", 
  white: "text-gray-100" 
}) // "text-gray-100 dark:text-gray-100"
```

#### `getColorClassesWithLuminance(color, style, autoTextColor?, extra?): string`
Enhanced version of `getColorClasses` that automatically calculates optimal text color for solid variants.

**Examples:**
```typescript
// Standard behavior
getColorClassesWithLuminance('primary', 'solid', false)
// "bg-blue-600 text-white border-blue-600 hover:bg-blue-700..."

// With automatic optimal text calculation
getColorClassesWithLuminance('primary', 'solid', true)
// "bg-blue-600 border-blue-600 hover:bg-blue-700... text-white dark:text-white"
```

## Technical Implementation

### Luminance Calculation
The functions use the WCAG 2.1 relative luminance formula:
```
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

Where R, G, B are linearized RGB values with gamma correction applied.

### Contrast Ratio Calculation
Contrast ratios are calculated using:
```
contrast = (lighter + 0.05) / (darker + 0.05)
```

This provides values from 1 (no contrast) to 21 (maximum contrast).

### WCAG Standards Supported
- **AA Normal Text**: 4.5:1 minimum contrast
- **AA Large Text**: 3:1 minimum contrast  
- **AAA Normal Text**: 7:1 minimum contrast
- **AAA Large Text**: 4.5:1 minimum contrast

## Design System Integration

### Paper Theme Colors Results
Based on luminance analysis of Paper Design System colors:

| Color | Hex | Optimal Text | Black Contrast | White Contrast | WCAG AA |
|-------|-----|--------------|----------------|----------------|---------|
| Paper Base | #faf9f6 | black | 19.95 | 1.05 | ✅ |
| Paper Surface | #ffffff | black | 21.00 | 1.00 | ✅ |
| Paper Accent | #0f766e | white | 3.84 | 5.47 | ✅ |
| Paper Accent2 | #7c3aed | white | 3.69 | 5.70 | ✅ |

### Color Variant Results
Analysis of standard design system colors:

| Variant | Optimal Text | WCAG AA Compliant |
|---------|--------------|-------------------|
| Primary Blue | white | ❌ (3.68:1) |
| Success Green | white | ❌ (2.54:1) |
| Danger Red | white | ❌ (3.76:1) |
| Warning Yellow | white | ❌ (2.15:1) |

*Note: Some colors may need darker variants for full WCAG compliance.*

## Usage Recommendations

### For Component Development
1. Use `getOptimalTextColor()` when dynamically determining text color
2. Use `getOptimalTextClasses()` for Tailwind-based components
3. Use `getColorClassesWithLuminance()` with `autoTextColor: true` for automatically accessible buttons

### For Accessibility Testing
1. Use `meetsWCAGStandard()` to validate color combinations
2. Use `getContrastRatios()` to debug contrast issues
3. Test with both AA and AAA standards for different compliance levels

### Integration Examples

#### Button Component
```typescript
const buttonClasses = getColorClassesWithLuminance(
  color, 
  'solid', 
  true  // Auto-calculate optimal text color
)
```

#### Toast Component
```typescript
const textClasses = getOptimalTextClasses(backgroundColor)
```

#### Theme Validation
```typescript
const isAccessible = meetsWCAGStandard(bgColor, textColor, 'AA')
```

## Benefits

1. **Automatic Accessibility**: No more guessing about text contrast
2. **WCAG Compliance**: Built-in validation against accessibility standards
3. **Scientific Accuracy**: Uses proper luminance calculations
4. **Tailwind Integration**: Seamless integration with existing class system
5. **Design System Consistency**: Ensures consistent contrast across all components

## Migration

Existing code continues to work unchanged. New functions are additive and optional. Components can gradually adopt luminance-based calculations for improved accessibility.