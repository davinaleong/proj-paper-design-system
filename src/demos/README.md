# Component Showcases

This folder contains all showcase code for the Paper Design System components. All files follow the "Showcase" naming convention for consistency.

## Structure

```
src/demos/
├── component-showcases/    # Individual component showcases
│   ├── CoreComponentsShowcase.tsx
│   ├── FormFieldShowcase.tsx
│   ├── LayoutShowcase.tsx
│   ├── TypographyShowcase.tsx
│   ├── UIPrimitivesShowcase.tsx
│   └── index.ts
├── feature-showcases/      # Multi-component feature showcases
│   ├── DataDisplayShowcase.tsx
│   ├── FormControlsShowcase.tsx
│   ├── NavigationShowcase.tsx
│   └── index.ts
├── DotIndicatorShowcase.tsx    # Individual component showcase
├── StaticTableShowcase.tsx     # Individual component showcase
├── index.ts                    # Main exports
└── README.md                   # This file
```

## Usage

All showcases can be imported from the main demos folder:

````typescript
import {
  // Component showcases
  CoreComponentsShowcase,
  TypographyShowcase,
  LayoutShowcase,
  UIPrimitivesShowcase,
  FormFieldShowcase,

  // Feature showcases
  FormControlsShowcase,
  DataDisplayShowcase,
  NavigationShowcase,

  // Individual showcases
  DotIndicatorShowcase,
  StaticTableShowcase,
} from "./demos"
Or import from specific subfolders:

```typescript
import { FormControlsShowcase } from "./demos/feature-showcases"
import { TypographyShowcase } from "./demos/component-showcases"
```

## Organization

- **component-showcases/**: Individual component showcases focusing on specific component categories (core, layout, forms, etc.)
- **feature-showcases/**: Comprehensive showcases that demonstrate multiple related components working together
- **Root level**: Standalone component showcases and specialized demonstrations

## Naming Convention

All files consistently use the "Showcase" suffix:
- File names: `ComponentNameShowcase.tsx`
- Function names: `ComponentNameShowcase()`
- Export names: `ComponentNameShowcase`
````
