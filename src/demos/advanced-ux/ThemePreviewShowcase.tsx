import { useState } from 'react'
import { 
  Palette,
  Sun,
  Moon,
  Monitor,
  Sparkles,
  Eye,
  Heart,
  Settings,
} from 'lucide-react'
import { ThemePreview } from '../../components'
import type { ThemeDefinition } from '../../components'
import { Button } from '../../components/forms/Button'
import { Typography } from '../../components/core/Typography'
import { Section } from '../../components/layout/Section'
import { Card } from '../../components/layout/Card'
import { Flex } from '../../components/layout/Flex'
import { Switch } from '../../components/forms/Switch'

// Sample theme definitions
const sampleThemes: ThemeDefinition[] = [
  {
    id: 'paper-light',
    name: 'Paper Light',
    description: 'Clean, minimal design with subtle shadows and paper-like textures',
    mode: 'light',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textMuted: '#64748b',
      border: '#e2e8f0',
      accent: '#06b6d4',
    },
    active: true,
  },
  {
    id: 'paper-dark',
    name: 'Paper Dark',
    description: 'Elegant dark theme with soft contrasts and comfortable reading',
    mode: 'dark',
    colors: {
      primary: '#60a5fa',
      secondary: '#94a3b8',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textMuted: '#94a3b8',
      border: '#334155',
      accent: '#22d3ee',
    },
  },
  {
    id: 'emerald',
    name: 'Emerald',
    description: 'Nature-inspired green tones with fresh, vibrant accents',
    mode: 'light',
    colors: {
      primary: '#10b981',
      secondary: '#6b7280',
      background: '#ffffff',
      surface: '#f0fdf4',
      text: '#1f2937',
      textMuted: '#6b7280',
      border: '#d1fae5',
      accent: '#34d399',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm oranges and reds reminiscent of golden hour',
    mode: 'light',
    colors: {
      primary: '#f97316',
      secondary: '#78716c',
      background: '#fffbeb',
      surface: '#fef3c7',
      text: '#1c1917',
      textMuted: '#78716c',
      border: '#fed7aa',
      accent: '#fb923c',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep blues and purples for late-night productivity',
    mode: 'dark',
    colors: {
      primary: '#8b5cf6',
      secondary: '#a1a1aa',
      background: '#0c0a19',
      surface: '#1a1625',
      text: '#f4f4f5',
      textMuted: '#a1a1aa',
      border: '#2d2438',
      accent: '#a78bfa',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Cool blues and teals inspired by ocean depths',
    mode: 'light',
    colors: {
      primary: '#0ea5e9',
      secondary: '#64748b',
      background: '#f0f9ff',
      surface: '#e0f2fe',
      text: '#0f172a',
      textMuted: '#64748b',
      border: '#bae6fd',
      accent: '#06b6d4',
    },
  },
  {
    id: 'cherry',
    name: 'Cherry Blossom',
    description: 'Soft pinks and roses with delicate, feminine touches',
    mode: 'light',
    colors: {
      primary: '#ec4899',
      secondary: '#6b7280',
      background: '#fdf2f8',
      surface: '#fce7f3',
      text: '#1f2937',
      textMuted: '#6b7280',
      border: '#f9a8d4',
      accent: '#f472b6',
    },
    premium: true,
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Deep greens and browns for a natural, earthy feel',
    mode: 'dark',
    colors: {
      primary: '#22c55e',
      secondary: '#a3a3a3',
      background: '#0a0f0a',
      surface: '#1a2e1a',
      text: '#f0fdf4',
      textMuted: '#a3a3a3',
      border: '#166534',
      accent: '#4ade80',
    },
    premium: true,
  },
  {
    id: 'system',
    name: 'System',
    description: 'Adapts to your device settings automatically',
    mode: 'system',
    colors: {
      primary: '#6366f1',
      secondary: '#6b7280',
      background: '#ffffff',
      surface: '#f9fafb',
      text: '#111827',
      textMuted: '#6b7280',
      border: '#e5e7eb',
      accent: '#8b5cf6',
    },
  },
]

export function ThemePreviewShowcase() {
  const [activeTheme, setActiveTheme] = useState('paper-light')
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [variant, setVariant] = useState<'card' | 'inline' | 'full'>('card')
  const [columns, setColumns] = useState(3)
  const [showNames, setShowNames] = useState(true)
  const [showDescriptions, setShowDescriptions] = useState(true)
  const [showColors, setShowColors] = useState(true)
  const [showComponents, setShowComponents] = useState(true)
  const [filterMode, setFilterMode] = useState<'all' | 'light' | 'dark' | 'premium'>('all')
  
  const filteredThemes = sampleThemes.filter(theme => {
    if (filterMode === 'all') return true
    if (filterMode === 'premium') return !!theme.premium
    return theme.mode === filterMode
  })
  
  const handleThemeSelect = (theme: ThemeDefinition) => {
    setActiveTheme(theme.id)
    console.log('Selected theme:', theme.name)
  }
  
  const handleThemeHover = (theme: ThemeDefinition | null) => {
    if (theme) {
      console.log('Hovering theme:', theme.name)
    }
  }
  
  return (
    <Section className="py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h1" className="mb-4">
            Theme Preview
          </Typography>
          <Typography variant="bodyLarge" className="text-stone-600 max-w-2xl mx-auto">
            A comprehensive theme showcase component for displaying and selecting from 
            multiple design themes with live previews and color palettes.
          </Typography>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Total Themes
            </Typography>
            <Typography variant="h3" className="text-blue-600">
              {sampleThemes.length}
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Premium Themes
            </Typography>
            <Typography variant="h3" className="text-amber-600">
              {sampleThemes.filter(t => t.premium).length}
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Active Theme
            </Typography>
            <Typography variant="h3" className="text-green-600">
              {sampleThemes.find(t => t.id === activeTheme)?.name || 'None'}
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Filtered Results
            </Typography>
            <Typography variant="h3" className="text-purple-600">
              {filteredThemes.length}
            </Typography>
          </Card>
        </div>
        
        {/* Controls */}
        <Card className="p-6 mb-8">
          <Typography variant="h3" className="mb-6">
            Configuration
          </Typography>
          
          <Flex direction="column" gap="lg">
            {/* Filter Controls */}
            <div>
              <Typography variant="h4" className="mb-3">
                Filter Themes
              </Typography>
              <Flex gap="md" wrap="wrap">
                {[
                  { value: 'all', label: 'All Themes', icon: Palette },
                  { value: 'light', label: 'Light Mode', icon: Sun },
                  { value: 'dark', label: 'Dark Mode', icon: Moon },
                  { value: 'premium', label: 'Premium Only', icon: Sparkles },
                ].map(({ value, label, icon: Icon }) => (
                  <Button
                    key={value}
                    variant={filterMode === value ? 'solid' : 'outline'}
                    onClick={() => setFilterMode(value as 'all' | 'light' | 'dark' | 'premium')}
                    icon={Icon}
                  >
                    {label}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Size Controls */}
            <div>
              <Typography variant="h4" className="mb-3">
                Size
              </Typography>
              <Flex gap="md" wrap="wrap">
                {(['sm', 'md', 'lg'] as const).map((sizeOption) => (
                  <Button
                    key={sizeOption}
                    variant={size === sizeOption ? 'solid' : 'outline'}
                    onClick={() => setSize(sizeOption)}
                  >
                    {sizeOption.toUpperCase()}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Variant Controls */}
            <div>
              <Typography variant="h4" className="mb-3">
                Variant
              </Typography>
              <Flex gap="md" wrap="wrap">
                {(['card', 'inline', 'full'] as const).map((variantOption) => (
                  <Button
                    key={variantOption}
                    variant={variant === variantOption ? 'solid' : 'outline'}
                    onClick={() => setVariant(variantOption)}
                  >
                    {variantOption.charAt(0).toUpperCase() + variantOption.slice(1)}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Grid Columns */}
            <div>
              <Typography variant="h4" className="mb-3">
                Grid Columns
              </Typography>
              <Flex gap="md" wrap="wrap">
                {[1, 2, 3, 4].map((colCount) => (
                  <Button
                    key={colCount}
                    variant={columns === colCount ? 'solid' : 'outline'}
                    onClick={() => setColumns(colCount)}
                  >
                    {colCount} Column{colCount !== 1 ? 's' : ''}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Display Options */}
            <div>
              <Typography variant="h4" className="mb-3">
                Display Options
              </Typography>
              <Flex gap="lg" wrap="wrap">
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showNames}
                    onChange={(checked) => setShowNames(checked)}
                  />
                  <Typography variant="body">Show Names</Typography>
                </Flex>
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showDescriptions}
                    onChange={(checked) => setShowDescriptions(checked)}
                  />
                  <Typography variant="body">Show Descriptions</Typography>
                </Flex>
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showColors}
                    onChange={(checked) => setShowColors(checked)}
                  />
                  <Typography variant="body">Show Colors</Typography>
                </Flex>
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showComponents}
                    onChange={(checked) => setShowComponents(checked)}
                  />
                  <Typography variant="body">Show Components</Typography>
                </Flex>
              </Flex>
            </div>
          </Flex>
        </Card>
        
        {/* Live Example */}
        <Card className="p-6">
          <Typography variant="h3" className="mb-4">
            Live Example
          </Typography>
          
          <ThemePreview
            themes={filteredThemes}
            activeTheme={activeTheme}
            size={size}
            variant={variant}
            columns={columns}
            showNames={showNames}
            showDescriptions={showDescriptions}
            showColors={showColors}
            showComponents={showComponents}
            onThemeSelect={handleThemeSelect}
            onThemeHover={handleThemeHover}
          />
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <Typography variant="h4">
                Live Previews
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Interactive component previews showing how themes look in real interfaces.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Palette className="h-6 w-6 text-green-600" />
              </div>
              <Typography variant="h4">
                Color Palettes
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Visual color swatches showing primary, secondary, and accent colors for each theme.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="h-6 w-6 text-purple-600" />
              </div>
              <Typography variant="h4">
                Flexible Layout
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Configurable grid layouts, sizes, and display options for different use cases.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Monitor className="h-6 w-6 text-orange-600" />
              </div>
              <Typography variant="h4">
                Theme Modes
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Support for light, dark, system, and custom theme modes with appropriate icons.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Sparkles className="h-6 w-6 text-teal-600" />
              </div>
              <Typography variant="h4">
                Premium Themes
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Special indicators and badges for premium themes with upgrade prompts.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <Typography variant="h4">
                Interactive States
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Hover effects, active indicators, and smooth transitions for better user experience.
            </Typography>
          </Card>
        </div>
        
        {/* Code Example */}
        <Card className="p-6 mt-8">
          <Typography variant="h3" className="mb-4">
            Usage Example
          </Typography>
          <div className="bg-stone-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-stone-100">
              <code>{`import { ThemePreview } from '@/components/advanced/ThemePreview'

const themes = [
  {
    id: 'light',
    name: 'Light Theme',
    description: 'Clean and bright interface',
    mode: 'light',
    colors: {
      primary: '#3b82f6',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textMuted: '#64748b',
      border: '#e2e8f0',
    },
  },
  // ... more themes
]

function App() {
  const [activeTheme, setActiveTheme] = useState('light')

  return (
    <ThemePreview
      themes={themes}
      activeTheme={activeTheme}
      size="md"
      variant="card"
      columns={3}
      showNames={true}
      showDescriptions={true}
      showColors={true}
      showComponents={true}
      onThemeSelect={(theme) => setActiveTheme(theme.id)}
    />
  )
}`}</code>
            </pre>
          </div>
        </Card>
      </Section>
  )
}