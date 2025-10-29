# Dav/Devs Paper Design System

A warm, tactile React component library built with TypeScript and Tailwind CSS, featuring paper-inspired aesthetics and a comprehensive set of UI components.

## ✨ Features

- 🎨 **Paper-inspired Design**: Warm, tactile aesthetic with texture and elevation
- 📱 **Responsive**: Mobile-first design with responsive components
- 🎯 **TypeScript**: Full type safety and excellent developer experience
- 🎨 **Tailwind CSS**: Utility-first styling with custom design tokens
- ♿ **Accessible**: WCAG compliant components with proper ARIA support
- 🎭 **Themeable**: Light, dark, and paper theme variants
- 📦 **Modular**: Import only what you need

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/davinaleong/davdevs-paper-design-system.git
cd davdevs-paper-design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

```tsx
import { ThemeProvider, Paper, Typography, Button } from './components';

function App() {
  return (
    <ThemeProvider theme="paper">
      <Paper variant="elevated" padding="lg">
        <Typography variant="h1">Welcome to Dav/Devs Paper</Typography>
        <Typography variant="body" className="mb-4">
          A beautiful, accessible design system.
        </Typography>
        <Button variant="solid">Get Started</Button>
      </Paper>
    </ThemeProvider>
  );
}
```

## 📦 Components

### Core Foundation
- **ThemeProvider** - Theme context management
- **Paper** - Surface component with elevation and texture
- **Typography** - Complete text hierarchy system
- **Icon** - Lucide React integration
- **Container** - Responsive width management
- **Brand** - Logo and brand identity

### Layout & Structure
- **Grid** - CSS Grid layout utility
- **Stack** - Flexible stacking layouts
- **Flex** - Flexbox utilities
- **Card** - Content cards with variants
- **Section** - Content sectioning
- **Avatar** - User profile images
- **Badge** - Status indicators
- **Divider** - Content separation

### Form Controls
- **Button** - Various button styles and states
- **Input** - Text input with validation
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox with states
- **Radio** - Radio button selections
- **Select** - Dropdown selections
- **Switch** - Toggle switches
- **Slider** - Range sliders
- **FileUpload** - File upload component

### Data Display
- **Table** - Data tables with sorting/filtering
- **StaticTable** - Simple data tables
- **Tag** - Content tags
- **Tooltip** - Contextual information
- **DescriptionList** - Key-value displays
- **EmptyState** - Empty state illustrations
- **ProgressBar** - Linear progress indicators
- **ProgressCircle** - Circular progress indicators
- **Statistic** - Metric displays
- **KPI** - Key performance indicators
- **Timeline** - Event timeline visualization

### Navigation
- **FloatingNavbar** - Floating navigation component
- **Breadcrumb** - Navigation breadcrumbs (coming soon)
- **Pagination** - Page navigation (coming soon)

## 🎨 Design Tokens

The design system uses a comprehensive token system:

- **Colors**: 22 color variants with paper theme integration
- **Typography**: Montserrat, Playfair Display, and Source Code Pro
- **Spacing**: Consistent spacing scale
- **Elevation**: Paper-inspired shadow system
- **Border Radius**: Subtle rounded corners

## 🛠️ Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── core/           # Foundation components
│   ├── layout/         # Layout utilities
│   ├── forms/          # Form controls
│   ├── data-display/   # Data presentation
│   ├── navigation/     # Navigation components
│   └── utilities/      # Special utilities
├── demos/              # Component showcases
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 📚 Documentation

Visit the [component showcase](http://localhost:5174) to see all components in action with interactive examples and code snippets.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to help improve the design system.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [Dav/Devs](https://github.com/davinaleong)
