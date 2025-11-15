# Dav/Devs Paper Design System

> 🚀 **Beta Release** - This design system is feature-complete with 74+ components and approaching production readiness. Core components are stable for production use. APIs are stabilizing with minimal breaking changes expected.

A warm, tactile React component library built with TypeScript and Tailwind CSS, featuring paper-inspired aesthetics and a comprehensive set of UI components.

## ✨ Features

- 🎨 **Paper-inspired Design**: Warm, tactile aesthetic with texture and elevation
- 📱 **Responsive**: Mobile-first design with responsive components
- 🎯 **TypeScript**: Full type safety and excellent developer experience
- 🎨 **Tailwind CSS v4**: Modern utility-first styling with custom design tokens
- ♿ **Accessible**: WCAG compliant components with proper ARIA support
- 🎭 **Advanced Theming**: Light, dark, and paper modes with semantic color system
- 📦 **Modular**: Import only what you need
- 🎯 **Advanced UX**: Premium components for complex interfaces
- 🚀 **Modern React**: Built with React 19+ and latest patterns

## 🚀 Development Status

This project has made **significant progress** and is approaching beta status with **74+ components** across 9 categories.

### ✅ Major Component Categories Complete

#### 🏗️ **Core Foundation** (6 components)
- ThemeProvider, Paper, Typography, Icon, Container, Brand

#### 📐 **Layout & Structure** (7 components) 
- Grid (enhanced), Stack/Flex, Card, Section, Avatar, Badge, Divider

#### 📝 **Form Controls** (10 components)
- Button, Input, Textarea, Checkbox, Radio, Select, Switch, Slider, FileUpload, FormField/FormGroup

#### 📊 **Data Display** (11 components)
- Table, StaticTable, Tag, Tooltip, DescriptionList, EmptyState, Statistic, KPI, Timeline, ProgressBar, ProgressCircle

#### 🧭 **Navigation** (8 components)
- Navbar, FloatingNavbar, Sidebar, Breadcrumbs, Tabs, Pagination, Stepper, CommandPalette

#### 🔔 **Feedback & Alerts** (6 components)
- Alert, Toast, Modal, ConfirmDialog, LoadingSpinner, Skeleton

#### 📱 **Overlays & Interactive** (6 components)
- Popover, DropdownMenu, ContextMenu, Drawer, Backdrop, Lightbox

#### 🛠️ **System Utilities** (8 components)
- SearchBar, FilterMenu, DateTimePicker, ThemeToggle, DotIndicator, ScrollArea, ErrorBoundary, ClipboardButton

#### ⭐ **Advanced UX** (5 components)
- CommandBar, ActivityItem, NotificationCenter, UserMenu, ThemePreview

### 🚧 In Development
- **Component Testing Suite** - Comprehensive test coverage
- **Enhanced Documentation** - Component API documentation  
- **Performance Optimization** - Bundle size and render performance
- **Dark Mode Polish** - Refined dark theme variants

### 📋 Upcoming Features
- **Storybook Documentation** - Interactive component playground
- **NPM Package Publishing** - Installable component library
- **Design Token Export** - Figma/Sketch integration
- **Accessibility Audit** - WCAG 2.1 AA compliance verification

## 🚀 Getting Started

### Installation

> **Note**: This project is approaching beta status but is not yet published to NPM. Clone the repository for local development and preview.

```bash
# Clone the repository
git clone https://github.com/davinaleong/proj-davdevs-paper.git
cd proj-davdevs-paper

# Install dependencies
npm install

# Start development server with component showcase
npm run dev
```

### Live Preview

Visit the development server at `http://localhost:5174` to explore:

- **74+ Interactive Components** across 9 categories
- **Live Configuration Controls** for testing component variants
- **Responsive Design Preview** across different screen sizes
- **Theme Switching** between light, dark, and paper modes
- **Copy-Paste Code Examples** for rapid implementation

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

> **Component Status**: ✅ Production Ready | 🎯 Feature Complete | 📋 Planned

### 🏗️ Core Foundation
- **ThemeProvider** ✅ - Theme context with paper mode support
- **Paper** ✅ - Surface component with elevation and texture
- **Typography** ✅ - Complete text hierarchy (15+ semantic variants)
- **Icon** ✅ - Lucide React integration with standardized sizing
- **Container** ✅ - Responsive width management
- **Brand** ✅ - Logo and brand identity component

### 📐 Layout & Structure  
- **Grid** ✅ - Enhanced CSS Grid with responsive breakpoints and auto-fit
- **Stack/Flex** ✅ - Flexible layout utilities with alignment controls
- **Card** ✅ - Content cards with multiple variants and elevations
- **Section** ✅ - Content sectioning with consistent spacing
- **Avatar/AvatarGroup** ✅ - Profile imagery with fallbacks and grouping
- **Badge** ✅ - Status indicators with 40+ color combinations
- **Divider** ✅ - Content separation with styles and orientations

### 📝 Form Controls
- **Button/IconButton** ✅ - Complete button system with loading states
- **Input/Textarea** ✅ - Text inputs with validation and icon support
- **Checkbox/Radio** ✅ - Selection controls with proper accessibility
- **Select** ✅ - Dropdown selections with search and multi-select
- **Switch** ✅ - Toggle controls with smooth animations
- **Slider** ✅ - Range sliders with dual handles and marks
- **FileUpload** ✅ - File handling with drag & drop and progress
- **FormField/FormGroup** ✅ - Field organization with validation

### 📊 Data Display
- **Table** ✅ - Feature-rich data grids with sorting, filtering, pagination
- **StaticTable** ✅ - Simple tables with 8 color variants
- **Tag/Chip** ✅ - Content labels with 42 color combinations and dismissible
- **Tooltip** ✅ - Contextual overlays with positioning
- **DescriptionList** ✅ - Key-value displays with flexible layouts
- **EmptyState** ✅ - No-data placeholders with illustrations
- **ProgressBar/ProgressCircle** ✅ - Progress indicators with animations
- **Statistic/KPI** ✅ - Metric displays with trend indicators
- **Timeline** ✅ - Event sequence visualization

### 🧭 Navigation
- **Navbar** ✅ - Application headers with mobile responsive design
- **FloatingNavbar** ✅ - Scroll-aware section navigation with backdrop blur
- **Sidebar** ✅ - Side navigation with collapsing and mobile overlay
- **Breadcrumbs** ✅ - Navigation trails with separators
- **Tabs** ✅ - Content switching with multiple variants
- **Pagination** ✅ - Advanced page navigation with size options
- **Stepper** ✅ - Multi-step flow indicators
- **CommandPalette** ✅ - Keyboard-driven command interface

### 🔔 Feedback & Alerts
- **Alert/Banner** ✅ - Inline notifications with variants and actions
- **Toast** ✅ - Temporary notifications with positioning and stacking
- **Modal/Dialog** ✅ - Focused interactions with backdrop management
- **ConfirmDialog** ✅ - Action confirmation with customizable content
- **LoadingSpinner/Loader** ✅ - Progress indication with multiple styles
- **Skeleton** ✅ - Content placeholders with shimmer animations

### 📱 Overlays & Interactive
- **Popover** ✅ - Floating content with smart positioning
- **DropdownMenu** ✅ - Contextual action menus with keyboard navigation
- **ContextMenu** ✅ - Right-click interactions with custom triggers
- **Drawer** ✅ - Slide-out panels with multiple positions
- **Backdrop/Lightbox** ✅ - Media viewing with zoom and navigation

### 🛠️ System Utilities
- **SearchBar** ✅ - Search with filters, suggestions, and history
- **FilterMenu** ✅ - Advanced data filtering and sorting interfaces
- **DateTimePicker** ✅ - Date and time selection with calendar
- **ThemeToggle** ✅ - Theme switching with smooth transitions
- **DotIndicator** ✅ - Animated status indicators with 42 color variants
- **ScrollArea** ✅ - Custom scrolling containers
- **ErrorBoundary** ✅ - Error handling with recovery options
- **ClipboardButton** ✅ - Copy-to-clipboard with feedback

### ⭐ Advanced UX (Premium)
- **CommandBar** ✅ - Contextual toolbars with action grouping
- **ActivityItem** ✅ - Activity feed components with rich content
- **NotificationCenter** ✅ - Comprehensive notification management
- **UserMenu** ✅ - User account interfaces with profile display
- **ThemePreview** ✅ - Theme selection and preview system

## 🎨 Design System Features

### Advanced Color System
- **Semantic Color System** with 9 semantic variants (primary, success, danger, etc.)
- **Full Dark Mode Support** with theme-aware color classes and automatic switching
- **4 Style Variants** per color (solid, soft, outline, ghost) across light and dark themes
- **Theme-Aware Utilities** with automatic light/dark mode handling
- **42+ Color Variants** across 22 color families with paper theme integration
- **Intelligent Contrast** with automatic text color selection based on luminance
- **Color Combinations** with over 1,600 tested color pairings

### Typography Hierarchy
- **Montserrat** for clean, readable body text and UI elements
- **Playfair Display** for elegant headings and display text
- **Source Code Pro** for technical content and code blocks
- **15+ Semantic Variants** including specialized markup elements
- **Responsive Scaling** with container-based font sizing

### Spacing & Layout
- **Consistent Grid System** with 4px base unit and logical scale
- **Paper-Inspired Elevations** with organic shadow system
- **Flexible Layouts** supporting CSS Grid and Flexbox patterns
- **Responsive Breakpoints** following mobile-first principles

### Interaction Design  
- **Subtle Animations** enhancing user experience without distraction
- **Paper-Like States** with tactile hover and press effects
- **Accessibility Focus** with proper keyboard navigation and screen reader support
- **Touch-Friendly** with appropriate target sizes and gestures

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
│   ├── core/           # Foundation (ThemeProvider, Paper, Typography, etc.)
│   ├── layout/         # Layout utilities (Grid, Stack, Card, etc.)
│   ├── forms/          # Form controls (Button, Input, Select, etc.)
│   ├── data-display/   # Data presentation (Table, Charts, etc.)
│   ├── navigation/     # Navigation (Navbar, Sidebar, Tabs, etc.)
│   ├── utilities/      # Special utilities (DotIndicator, etc.)
│   └── advanced/       # Advanced UX (CommandBar, UserMenu, etc.)
├── demos/
│   ├── core-foundation/     # Foundation component showcases
│   ├── layout-structure/    # Layout component showcases  
│   ├── form-controls/       # Form component showcases
│   ├── data-display/        # Data component showcases
│   ├── navigation/          # Navigation component showcases
│   ├── feedback-alerts/     # Alert component showcases
│   ├── overlays-interactive/# Overlay component showcases
│   ├── system-utilities/    # Utility component showcases
│   └── advanced-ux/         # Advanced component showcases
├── utils/              # Utility functions (colors, spacing, etc.)
└── assets/             # Static assets (fonts, images, etc.)
```

## 📚 Documentation

### Live Component Showcase
Visit `http://localhost:5174` after running `npm run dev` to explore:

- **Interactive Component Gallery** - Test all 74+ components with live controls
- **Responsive Preview** - See how components adapt across screen sizes  
- **Theme Switching** - Experience light, dark, and paper theme modes
- **Code Examples** - Copy-paste ready implementation snippets
- **Configuration Controls** - Real-time component customization
- **Accessibility Testing** - Keyboard navigation and screen reader support

### Component Categories
- **Core Foundation** - Essential building blocks and theme system
- **Layout Structure** - Grid systems, cards, and content organization  
- **Form Controls** - Complete input system with validation
- **Data Display** - Tables, charts, and data visualization
- **Navigation** - Navbar, sidebar, tabs, and navigation patterns
- **Feedback & Alerts** - Notifications, modals, and user feedback
- **Overlays & Interactive** - Popovers, dropdowns, and floating content
- **System Utilities** - Search, themes, and specialized functionality
- **Advanced UX** - Premium components for complex interfaces

## ⚠️ Beta Status Notes

- **API Stability**: Component APIs are stabilizing but may have minor changes before v1.0
- **Testing Coverage**: Comprehensive test suite in development with priority on core components
- **Accessibility**: WCAG 2.1 AA compliance implemented for most components, audit in progress
- **Performance**: Bundle optimization and code splitting planned for production release
- **Documentation**: Storybook integration planned for enhanced component documentation

### Production Readiness
- ✅ **Core Components** - Ready for production use
- ✅ **Layout System** - Stable and well-tested
- ✅ **Form Controls** - Feature-complete with validation
- 🚧 **Advanced Features** - Some premium components may evolve
- 📋 **Package Distribution** - NPM publishing planned for stable release

## 🤝 Contributing

This design system welcomes contributions! With 74+ components implemented, there are focused opportunities to help:

### Priority Areas
- 🧪 **Testing** - Add comprehensive test coverage for components
- � **Documentation** - Storybook stories and API documentation
- ♿ **Accessibility** - WCAG 2.1 AA compliance verification and improvements
- 🎨 **Design Polish** - Theme refinements and visual consistency
- 🚀 **Performance** - Bundle optimization and code splitting
- 🔧 **Developer Experience** - Better TypeScript definitions and tooling

### How to Contribute
1. **Explore the Showcase** - Run `npm run dev` to see current components
2. **Review Issues** - Check [open issues](https://github.com/davinaleong/proj-davdevs-paper/issues) for specific needs
3. **Test Components** - Report bugs or inconsistencies you discover
4. **Suggest Improvements** - Component enhancements or new feature requests
5. **Submit PRs** - Code contributions following the established patterns

### Code Standards
- **TypeScript First** - Full type safety and proper interfaces
- **Accessibility** - WCAG compliance and semantic HTML
- **Paper Theme** - Consistent with design system aesthetics
- **Testing** - Unit tests for new features and bug fixes

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with ❤️ by [Dav/Devs](https://github.com/davinaleong)
