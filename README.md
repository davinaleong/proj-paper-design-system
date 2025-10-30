# Dav/Devs Paper Design System

> ⚠️ **Work in Progress** - This design system is currently under active development. Components and APIs may change without notice. Not recommended for production use yet.

A warm, tactile React component library built with TypeScript and Tailwind CSS, featuring paper-inspired aesthetics and a comprehensive set of UI components.

## ✨ Features

- 🎨 **Paper-inspired Design**: Warm, tactile aesthetic with texture and elevation
- 📱 **Responsive**: Mobile-first design with responsive components
- 🎯 **TypeScript**: Full type safety and excellent developer experience
- 🎨 **Tailwind CSS**: Utility-first styling with custom design tokens
- ♿ **Accessible**: WCAG compliant components with proper ARIA support
- 🎭 **Themeable**: Light, dark, and paper theme variants
- 📦 **Modular**: Import only what you need

## � Development Status

This project is currently in **active development**. Here's what's available:

### ✅ Completed Components
- Core foundation (Paper, Typography, Icon, Container, Brand)
- Layout utilities (Grid, Stack, Flex, Card, Section)
- Basic form controls (Button, Input, Textarea, Checkbox, Radio)
- Data display (Table, StaticTable, Tag, Tooltip, DescriptionList)
- Progress indicators (ProgressBar, ProgressCircle)
- Advanced data display (Statistic, KPI, Timeline, EmptyState)

### 🚧 In Development
- Form validation and error handling
- Advanced form controls (Select, Switch, Slider, FileUpload)
- Navigation components (Breadcrumb, Pagination)
- Theme variants (Dark mode, High contrast)
- Component testing suite

### 📋 Planned Features
- Storybook documentation
- NPM package publishing
- Accessibility audit and improvements
- Performance optimizations
- Design token export

## �🚀 Getting Started

### Installation

> **Note**: This project is not yet published to NPM. Clone the repository for local development.

```bash
# Clone the repository
git clone https://github.com/davinaleong/proj-davdevs-paper.git
cd proj-davdevs-paper

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

> **Development Note**: Import paths and component APIs are subject to change as the library evolves.

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

> **Component Status**: ✅ Ready | 🚧 In Development | 📋 Planned

### Core Foundation
- **ThemeProvider** ✅ - Theme context management
- **Paper** ✅ - Surface component with elevation and texture
- **Typography** ✅ - Complete text hierarchy system
- **Icon** ✅ - Lucide React integration
- **Container** ✅ - Responsive width management
- **Brand** ✅ - Logo and brand identity

### Layout & Structure
- **Grid** ✅ - CSS Grid layout utility
- **Stack** ✅ - Flexible stacking layouts
- **Flex** ✅ - Flexbox utilities
- **Card** ✅ - Content cards with variants
- **Section** ✅ - Content sectioning
- **Avatar** 🚧 - User profile images
- **Badge** 🚧 - Status indicators
- **Divider** 🚧 - Content separation

### Form Controls
- **Button** ✅ - Various button styles and states
- **Input** ✅ - Text input with validation
- **Textarea** ✅ - Multi-line text input
- **Checkbox** ✅ - Checkbox with states
- **Radio** ✅ - Radio button selections
- **Select** 🚧 - Dropdown selections
- **Switch** 🚧 - Toggle switches
- **Slider** 🚧 - Range sliders
- **FileUpload** 🚧 - File upload component

### Data Display
- **Table** ✅ - Data tables with sorting/filtering
- **StaticTable** ✅ - Simple data tables
- **Tag** ✅ - Content tags
- **Tooltip** ✅ - Contextual information
- **DescriptionList** ✅ - Key-value displays
- **EmptyState** ✅ - Empty state illustrations
- **ProgressBar** ✅ - Linear progress indicators
- **ProgressCircle** ✅ - Circular progress indicators
- **Statistic** ✅ - Metric displays
- **KPI** ✅ - Key performance indicators
- **Timeline** ✅ - Event timeline visualization

### Navigation
- **FloatingNavbar** ✅ - Floating navigation component
- **Navbar** ✅ - Traditional navigation bar with dropdowns and mobile support
- **Breadcrumb** 📋 - Navigation breadcrumbs
- **Pagination** 📋 - Page navigation

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

> **Development Preview**: Visit the [component showcase](http://localhost:5174) to see all components in action with interactive examples and code snippets. Note that the showcase reflects the current development state and may include incomplete components.

## ⚠️ Development Notes

- **Breaking Changes**: APIs and component interfaces may change during development
- **Testing**: Component testing suite is still being developed
- **Accessibility**: WCAG compliance is being implemented incrementally
- **Performance**: Optimizations planned for future releases
- **Documentation**: Comprehensive docs will be available with the stable release

## 🤝 Contributing

This project is actively seeking contributors! As a work-in-progress design system, there are many opportunities to help:

- 🐛 Report bugs and inconsistencies
- 💡 Suggest component improvements
- 🎨 Help with design refinements
- ♿ Improve accessibility features
- 📝 Contribute to documentation
- 🧪 Add component tests

Please check the [open issues](https://github.com/davinaleong/proj-davdevs-paper/issues) and feel free to submit pull requests.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [Dav/Devs](https://github.com/davinaleong)
