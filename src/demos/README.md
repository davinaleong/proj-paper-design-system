# Demos and Showcases

This folder contains all demo and showcase code for the Paper Design System components.

## Structure

```
src/demos/
├── components/          # Component demos (formerly src/demo/)
│   ├── CoreComponentsDemo.tsx
│   ├── FormFieldDemo.tsx
│   ├── LayoutShowcase.tsx
│   ├── TypographyShowcase.tsx
│   ├── UIPrimitivesShowcase.tsx
│   └── index.ts
├── showcases/          # Feature showcases (formerly src/showcases/)
│   ├── DataDisplayShowcase.tsx
│   ├── FormControlsShowcase.tsx
│   ├── NavigationShowcase.tsx
│   └── index.ts
├── DotIndicatorDemo.tsx     # Individual component demo
├── StaticTableDemo.tsx      # Individual component demo
├── index.ts                 # Main exports
└── README.md               # This file
```

## Usage

All demos and showcases can be imported from the main demos folder:

```typescript
import {
  // Component demos
  CoreComponentsDemo,
  TypographyShowcase,
  LayoutShowcase,
  UIPrimitivesShowcase,

  // Feature showcases
  FormControlsShowcase,
  DataDisplayShowcase,
  NavigationShowcase,

  // Individual demos
  DotIndicatorDemo,
  StaticTableDemo,
} from "./demos"
```

Or import from specific subfolders:

```typescript
import { FormControlsShowcase } from "./demos/showcases"
import { TypographyShowcase } from "./demos/components"
```

## Organization

- **components/**: Focused demos for specific component categories (core, layout, forms, etc.)
- **showcases/**: Comprehensive showcases that demonstrate multiple related components together
- **Root level**: Individual component demos and utility demos
