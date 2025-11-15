import { useState } from 'react'
import { 
  User,
  Settings,
  HelpCircle,
  LogOut,
  Bell,
  Shield,
  CreditCard,
  Users,
  Star,
  Download,
  Moon,
  Sun,
  Monitor,
  Palette,
  Globe,
  Smartphone,
} from 'lucide-react'
import { UserMenu } from '../../components'
import type { UserProfile, UserMenuItem, UserMenuGroup } from '../../components'
import { Button } from '../../components/forms/Button'
import { Typography } from '../../components/core/Typography'
// import { Container } from '../../components/core/Container'
import { Section } from '../../components/layout/Section'
import { Card } from '../../components/layout/Card'
import { Flex } from '../../components/layout/Flex'
import { Switch } from '../../components/forms/Switch'

// Sample user profiles
const sampleUsers: UserProfile[] = [
  {
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    avatar: '/avatars/sarah.jpg',
    role: 'Product Manager',
    status: 'online',
    initials: 'SC',
  },
  {
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@company.com',
    role: 'Senior Developer',
    status: 'busy',
    initials: 'AR',
  },
  {
    name: 'Jordan Kim',
    email: 'jordan.kim@company.com',
    avatar: '/avatars/jordan.jpg',
    role: 'UI/UX Designer',
    status: 'away',
    initials: 'JK',
  },
]

// Sample menu configurations
const basicMenuItems: UserMenuItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: User,
    onClick: () => console.log('Profile clicked'),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    onClick: () => console.log('Settings clicked'),
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: HelpCircle,
    onClick: () => console.log('Help clicked'),
  },
  {
    id: 'logout',
    label: 'Sign Out',
    icon: LogOut,
    destructive: true,
    separator: true,
    onClick: () => console.log('Logout clicked'),
  },
]

const groupedMenuItems: (UserMenuItem | UserMenuGroup)[] = [
  {
    id: 'account-group',
    label: 'Account',
    items: [
      {
        id: 'profile',
        label: 'Profile',
        icon: User,
        onClick: () => console.log('Profile clicked'),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        icon: Bell,
        badge: 3,
        onClick: () => console.log('Notifications clicked'),
      },
      {
        id: 'privacy',
        label: 'Privacy & Security',
        icon: Shield,
        onClick: () => console.log('Privacy clicked'),
      },
      {
        id: 'billing',
        label: 'Billing',
        icon: CreditCard,
        onClick: () => console.log('Billing clicked'),
      },
    ],
  },
  {
    id: 'workspace-group',
    label: 'Workspace',
    items: [
      {
        id: 'team',
        label: 'Team Members',
        icon: Users,
        onClick: () => console.log('Team clicked'),
      },
      {
        id: 'upgrade',
        label: 'Upgrade Plan',
        icon: Star,
        badge: 'Pro',
        onClick: () => console.log('Upgrade clicked'),
      },
    ],
  },
  {
    id: 'system-group',
    items: [
      {
        id: 'downloads',
        label: 'Downloads',
        icon: Download,
        href: '/downloads',
        onClick: () => console.log('Downloads clicked'),
      },
      {
        id: 'help',
        label: 'Help & Support',
        icon: HelpCircle,
        href: 'https://help.example.com',
        target: '_blank',
        onClick: () => console.log('Help clicked'),
      },
      {
        id: 'logout',
        label: 'Sign Out',
        icon: LogOut,
        destructive: true,
        separator: true,
        onClick: () => console.log('Logout clicked'),
      },
    ],
  },
]

const themeMenuItems: UserMenuItem[] = [
  {
    id: 'theme-light',
    label: 'Light Mode',
    icon: Sun,
    onClick: () => console.log('Light theme'),
  },
  {
    id: 'theme-dark',
    label: 'Dark Mode',
    icon: Moon,
    onClick: () => console.log('Dark theme'),
  },
  {
    id: 'theme-system',
    label: 'System',
    icon: Monitor,
    onClick: () => console.log('System theme'),
  },
  {
    id: 'separator-1',
    label: '',
    separator: true,
    onClick: () => {},
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: Palette,
    onClick: () => console.log('Appearance'),
  },
  {
    id: 'language',
    label: 'Language',
    icon: Globe,
    onClick: () => console.log('Language'),
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: Smartphone,
    href: '/mobile',
    target: '_blank',
    onClick: () => console.log('Mobile app'),
  },
]

export function UserMenuShowcase() {
  const [currentUser, setCurrentUser] = useState(sampleUsers[0])
  const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [variant, setVariant] = useState<'default' | 'compact' | 'floating'>('default')
  const [position, setPosition] = useState<'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'>('bottom-right')
  const [showProfile, setShowProfile] = useState(true)
  const [showStatus, setShowStatus] = useState(true)
  const [menuType, setMenuType] = useState<'basic' | 'grouped' | 'theme'>('basic')
  
  const getCurrentMenuItems = () => {
    switch (menuType) {
      case 'basic':
        return basicMenuItems
      case 'grouped':
        return groupedMenuItems
      case 'theme':
        return themeMenuItems
      default:
        return basicMenuItems
    }
  }
  
  return (
    <Section className="py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h1" className="mb-4">
            User Menu
          </Typography>
          <Typography variant="bodyLarge" className="text-stone-600 max-w-2xl mx-auto">
            A comprehensive user account menu with profile display, customizable menu items, 
            status indicators, and flexible positioning options.
          </Typography>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Menu Items
            </Typography>
            <Typography variant="h3" className="text-blue-600">
              {getCurrentMenuItems().length}
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              User Status
            </Typography>
            <Typography variant="h3" className="text-green-600 capitalize">
              {currentUser.status}
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Size Variants
            </Typography>
            <Typography variant="h3" className="text-purple-600">
              3
            </Typography>
          </Card>
          <Card className="p-4">
            <Typography variant="bodySmall" className="text-stone-500 mb-1">
              Positions
            </Typography>
            <Typography variant="h3" className="text-orange-600">
              4
            </Typography>
          </Card>
        </div>
        
        {/* Controls */}
        <Card className="p-6 mb-8">
          <Typography variant="h3" className="mb-6">
            Configuration
          </Typography>
          
          <Flex direction="column" gap="lg">
            {/* User Selection */}
            <div>
              <Typography variant="h4" className="mb-3">
                User Profile
              </Typography>
              <Flex gap="md" wrap="wrap">
                {sampleUsers.map((user) => (
                  <Button
                    key={user.email}
                    variant={currentUser.email === user.email ? 'solid' : 'outline'}
                    onClick={() => setCurrentUser(user)}
                  >
                    {user.name}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Menu Type */}
            <div>
              <Typography variant="h4" className="mb-3">
                Menu Type
              </Typography>
              <Flex gap="md" wrap="wrap">
                {[
                  { value: 'basic', label: 'Basic Items' },
                  { value: 'grouped', label: 'Grouped Items' },
                  { value: 'theme', label: 'Theme Menu' },
                ].map(({ value, label }) => (
                  <Button
                    key={value}
                    variant={menuType === value ? 'solid' : 'outline'}
                    onClick={() => setMenuType(value as 'basic' | 'grouped' | 'theme')}
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
                {(['default', 'compact', 'floating'] as const).map((variantOption) => (
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
            
            {/* Position Controls */}
            <div>
              <Typography variant="h4" className="mb-3">
                Position
              </Typography>
              <Flex gap="md" wrap="wrap">
                {([
                  'bottom-left',
                  'bottom-right', 
                  'top-left',
                  'top-right'
                ] as const).map((positionOption) => (
                  <Button
                    key={positionOption}
                    variant={position === positionOption ? 'solid' : 'outline'}
                    onClick={() => setPosition(positionOption)}
                  >
                    {positionOption.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Button>
                ))}
              </Flex>
            </div>
            
            {/* Toggle Controls */}
            <div>
              <Typography variant="h4" className="mb-3">
                Options
              </Typography>
              <Flex gap="lg" wrap="wrap">
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showProfile}
                    onChange={(checked) => setShowProfile(checked)}
                  />
                  <Typography variant="body">Show Profile Section</Typography>
                </Flex>
                <Flex gap="sm" align="center">
                  <Switch
                    checked={showStatus}
                    onChange={(checked) => setShowStatus(checked)}
                  />
                  <Typography variant="body">Show Status Indicator</Typography>
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
          
          <div className="flex justify-center">
            <UserMenu
              user={currentUser}
              items={getCurrentMenuItems()}
              size={size}
              variant={variant}
              position={position}
              showProfile={showProfile}
              showStatus={showStatus}
            />
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <Typography variant="h4">
                User Profiles
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Rich user profile display with avatar, name, email, role, and status indicators.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <Typography variant="h4">
                Flexible Menu Items
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Support for individual items, grouped sections, badges, icons, and external links.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <Typography variant="h4">
                Status System
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Online, away, busy, and offline status with visual indicators and labels.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Palette className="h-6 w-6 text-orange-600" />
              </div>
              <Typography variant="h4">
                Visual Variants
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Default, compact, and floating variants for different design contexts.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <Typography variant="h4">
                Safety Features
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Destructive action styling, disabled states, and confirmation patterns.
            </Typography>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <Typography variant="h4">
                Badge System
              </Typography>
            </div>
            <Typography variant="body" className="text-stone-600">
              Notification badges, labels, and indicators for enhanced user experience.
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
              <code>{`import { UserMenu } from '@/components/advanced/UserMenu'

function App() {
  const user = {
    name: 'Sarah Chen',
    email: 'sarah.chen@company.com',
    avatar: '/avatars/sarah.jpg',
    role: 'Product Manager',
    status: 'online',
  }

  const menuItems = [
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      onClick: () => navigate('/profile'),
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      onClick: () => navigate('/settings'),
    },
    {
      id: 'logout',
      label: 'Sign Out',
      icon: LogOut,
      destructive: true,
      onClick: () => signOut(),
    },
  ]

  return (
    <UserMenu
      user={user}
      items={menuItems}
      size="md"
      variant="default"
      position="bottom-right"
      showProfile={true}
      showStatus={true}
    />
  )
}`}</code>
            </pre>
          </div>
        </Card>
      </Section>
  )
}