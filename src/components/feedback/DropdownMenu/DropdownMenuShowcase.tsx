import React from 'react';
import { DropdownMenu } from './DropdownMenu';
import { Button } from '../../forms/Button';
import { IconButton } from '../../forms/IconButton';
import { Typography } from '../../core/Typography';
import { Badge } from '../../layout/Badge';
import { 
  Settings, 
  User, 
  Bell, 
  MoreVertical,
  ChevronRight,
  Download,
  Share,
  Edit,
  Trash2,
  Copy,
  Plus,
  Search,
  Filter,
  SortAsc,
  Eye,
  Lock,
  Unlock,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Image,
  Video,
  Music
} from 'lucide-react';

export const DropdownMenuShowcase: React.FC = () => {
  const basicMenuItems = [
    { children: 'Profile', icon: User },
    { children: 'Settings', icon: Settings },
    'separator' as const,
    { children: 'Sign out', icon: Unlock }
  ];

  const richMenuItems = [
    { type: 'label' as const, label: 'Account' },
    { 
      children: 'My Profile', 
      icon: User, 
      description: 'View and edit your profile information',
      shortcut: '⌘P'
    },
    { 
      children: 'Account Settings', 
      icon: Settings, 
      description: 'Manage your account preferences',
      shortcut: '⌘,'
    },
    'separator' as const,
    { type: 'label' as const, label: 'Actions' },
    { children: 'Download', icon: Download, shortcut: '⌘D' },
    { children: 'Share', icon: Share, shortcut: '⌘S' },
    { children: 'Copy Link', icon: Copy, shortcut: '⌘L' },
    'separator' as const,
    { children: 'Delete', icon: Trash2, shortcut: '⌘⌫' }
  ];

  const fileMenuItems = [
    { children: 'New File', icon: FileText, shortcut: '⌘N' },
    { children: 'Open File', icon: FileText, shortcut: '⌘O' },
    { children: 'Save', icon: Download, shortcut: '⌘S' },
    { children: 'Save As...', icon: Download, shortcut: '⌘⇧S' },
    'separator' as const,
    { children: 'Import', icon: Download },
    { children: 'Export', icon: Share },
    'separator' as const,
    { children: 'Recent Files', icon: Clock },
    { children: 'Close', shortcut: '⌘W' }
  ];

  const editMenuItems = [
    { children: 'Cut', shortcut: '⌘X' },
    { children: 'Copy', icon: Copy, shortcut: '⌘C' },
    { children: 'Paste', shortcut: '⌘V' },
    'separator' as const,
    { children: 'Select All', shortcut: '⌘A' },
    { children: 'Find', icon: Search, shortcut: '⌘F' },
    { children: 'Replace', shortcut: '⌘H' }
  ];

  const statusMenuItems = [
    { children: 'Available', selected: true },
    { children: 'Busy' },
    { children: 'Away' },
    { children: 'Do Not Disturb' },
    'separator' as const,
    { children: 'Custom Status', icon: Edit }
  ];

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Dropdown Menu
        </Typography>
        <Typography variant="body" color="secondary" className="mb-4">
          Interactive dropdown menus with Paper styling, Button variants, and configurable triggers.
        </Typography>
      </div>

      {/* Basic Usage */}
      <div>
        <Typography variant="h3" className="mb-4">
          Basic Usage
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu items={basicMenuItems}>
            <Button variant="solid">Profile Menu</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            trigger="hover"
          >
            <Button variant="outline">Hover Menu</Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Variants */}
      <div>
        <Typography variant="h3" className="mb-4">
          Menu Variants
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={basicMenuItems}
            variant="solid"
          >
            <Button variant="solid">Solid Menu</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            variant="outline"
          >
            <Button variant="outline">Outline Menu</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            variant="ghost"
          >
            <Button variant="ghost">Ghost Menu</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            variant="link"
          >
            <Button variant="link">Link Menu</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            variant="plain"
          >
            <Button variant="plain">Plain Menu</Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Chevron Placement */}
      <div>
        <Typography variant="h3" className="mb-4">
          Chevron Placement
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={basicMenuItems}
            chevronPlacement="left"
          >
            <Button variant="outline">Left Chevron</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            chevronPlacement="right"
          >
            <Button variant="outline">Right Chevron</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            showChevron={false}
          >
            <Button variant="outline">No Chevron</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            chevronIcon={ChevronRight}
          >
            <Button variant="outline">Custom Icon</Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Placements */}
      <div>
        <Typography variant="h3" className="mb-4">
          Menu Placements
        </Typography>
        <div className="grid grid-cols-3 gap-8 p-16">
          {/* Top row */}
          <DropdownMenu 
            items={basicMenuItems}
            placement="top-start"
          >
            <Button variant="outline">Top Start</Button>
          </DropdownMenu>
          
          <DropdownMenu 
            items={basicMenuItems}
            placement="top"
          >
            <Button variant="outline">Top</Button>
          </DropdownMenu>
          
          <DropdownMenu 
            items={basicMenuItems}
            placement="top-end"
          >
            <Button variant="outline">Top End</Button>
          </DropdownMenu>

          {/* Middle row */}
          <DropdownMenu 
            items={basicMenuItems}
            placement="left-start"
          >
            <Button variant="outline">Left Start</Button>
          </DropdownMenu>
          
          <div className="flex justify-center">
            <Typography variant="bodySmall" color="secondary">
              Center Reference
            </Typography>
          </div>
          
          <DropdownMenu 
            items={basicMenuItems}
            placement="right-start"
          >
            <Button variant="outline">Right Start</Button>
          </DropdownMenu>

          {/* Bottom row */}
          <DropdownMenu 
            items={basicMenuItems}
            placement="bottom-start"
          >
            <Button variant="outline">Bottom Start</Button>
          </DropdownMenu>
          
          <DropdownMenu 
            items={basicMenuItems}
            placement="bottom"
          >
            <Button variant="outline">Bottom</Button>
          </DropdownMenu>
          
          <DropdownMenu 
            items={basicMenuItems}
            placement="bottom-end"
          >
            <Button variant="outline">Bottom End</Button>
          </DropdownMenu>
        </div>
      </div>

      {/* With IconButtons */}
      <div>
        <Typography variant="h3" className="mb-4">
          With Icon Buttons
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={[
              { children: 'Account Settings', icon: Settings },
              { children: 'Notifications', icon: Bell },
              { children: 'Privacy', icon: Lock },
              'separator' as const,
              { children: 'Sign Out', icon: Unlock }
            ]}
          >
            <IconButton 
              icon={Settings} 
              variant="outline" 
              aria-label="Settings"
            />
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { children: 'Mark as Read', icon: Eye },
              { children: 'Archive', icon: FileText },
              { children: 'Delete', icon: Trash2 }
            ]}
            trigger="hover"
          >
            <IconButton 
              icon={Bell} 
              variant="ghost" 
              aria-label="Notifications"
            />
          </DropdownMenu>
        </div>
      </div>

      {/* IconButton Chevron Placement */}
      <div>
        <Typography variant="h3" className="mb-4">
          IconButton Chevron Placement
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={[
              { children: 'Account Settings', icon: Settings },
              { children: 'Notifications', icon: Bell },
              { children: 'Privacy', icon: Lock },
              'separator' as const,
              { children: 'Sign Out', icon: Unlock }
            ]}
            chevronPlacement="left"
          >
            <IconButton 
              icon={Settings} 
              variant="outline" 
              aria-label="Settings - Left Chevron"
            />
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { children: 'Mark as Read', icon: Eye },
              { children: 'Archive', icon: FileText },
              { children: 'Delete', icon: Trash2 }
            ]}
            chevronPlacement="right"
          >
            <IconButton 
              icon={Bell} 
              variant="outline" 
              aria-label="Notifications - Right Chevron"
            />
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { children: 'Edit', icon: Edit },
              { children: 'Duplicate', icon: Copy },
              { children: 'Share', icon: Share },
              'separator' as const,
              { children: 'Archive', icon: FileText },
              { children: 'Delete', icon: Trash2 }
            ]}
            showChevron={false}
          >
            <IconButton 
              icon={MoreVertical} 
              variant="outline" 
              aria-label="More actions - No Chevron"
            />
          </DropdownMenu>
        </div>
        
        <div className="mt-6">
          <Typography variant="h4" className="mb-4">
            Different IconButton Sizes with Chevrons
          </Typography>
          <div className="flex gap-4 items-center">
            <DropdownMenu 
              items={basicMenuItems}
              chevronPlacement="right"
            >
              <IconButton 
                icon={Settings} 
                variant="outline" 
                size="xs"
                aria-label="Extra Small"
              />
            </DropdownMenu>

            <DropdownMenu 
              items={basicMenuItems}
              chevronPlacement="left"
            >
              <IconButton 
                icon={Bell} 
                variant="outline" 
                size="sm"
                aria-label="Small"
              />
            </DropdownMenu>

            <DropdownMenu 
              items={basicMenuItems}
              chevronPlacement="right"
            >
              <IconButton 
                icon={User} 
                variant="outline" 
                size="md"
                aria-label="Medium"
              />
            </DropdownMenu>

            <DropdownMenu 
              items={basicMenuItems}
              chevronPlacement="left"
            >
              <IconButton 
                icon={Settings} 
                variant="outline" 
                size="lg"
                aria-label="Large"
              />
            </DropdownMenu>

            <DropdownMenu 
              items={basicMenuItems}
              chevronPlacement="right"
            >
              <IconButton 
                icon={MoreVertical} 
                variant="outline" 
                size="xl"
                aria-label="Extra Large"
              />
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Rich Content */}
      <div>
        <Typography variant="h3" className="mb-4">
          Rich Content with Descriptions & Shortcuts
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu items={richMenuItems}>
            <Button variant="outline" icon={User}>
              Account Menu
            </Button>
          </DropdownMenu>

          <DropdownMenu items={fileMenuItems}>
            <Button variant="outline" icon={FileText}>
              File Menu
            </Button>
          </DropdownMenu>

          <DropdownMenu items={editMenuItems}>
            <Button variant="outline" icon={Edit}>
              Edit Menu
            </Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Status & Selection */}
      <div>
        <Typography variant="h3" className="mb-4">
          Status & Selection States
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu items={statusMenuItems}>
            <Button variant="outline">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Available
              </div>
            </Button>
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { children: 'All Items', selected: true },
              { children: 'Active Items' },
              { children: 'Completed Items' },
              { children: 'Archived Items' },
              'separator' as const,
              { children: 'Custom Filter', icon: Filter }
            ]}
          >
            <Button variant="outline" icon={Filter}>
              Filter: All Items
            </Button>
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { children: 'Name (A-Z)', icon: SortAsc, selected: true },
              { children: 'Name (Z-A)', icon: SortAsc },
              { children: 'Date Created', icon: Calendar },
              { children: 'Date Modified', icon: Clock },
              { children: 'Size', icon: FileText }
            ]}
          >
            <Button variant="outline" icon={SortAsc}>
              Sort by Name
            </Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Complex Examples */}
      <div>
        <Typography variant="h3" className="mb-4">
          Complex Menu Examples
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={[
              { type: 'label' as const, label: 'Media' },
              { children: 'Upload Image', icon: Image, shortcut: '⌘I' },
              { children: 'Upload Video', icon: Video, shortcut: '⌘V' },
              { children: 'Upload Audio', icon: Music, shortcut: '⌘A' },
              'separator' as const,
              { type: 'label' as const, label: 'Content' },
              { children: 'Add Text Block', icon: FileText },
              { children: 'Add Code Block', icon: FileText },
              'separator' as const,
              { type: 'label' as const, label: 'Actions' },
              { children: 'Save Draft', icon: Download, shortcut: '⌘S' },
              { children: 'Publish', icon: Share, shortcut: '⌘P' },
              { children: 'Schedule', icon: Calendar, shortcut: '⌘T' }
            ]}
          >
            <Button variant="solid" icon={Plus}>
              Add Content
            </Button>
          </DropdownMenu>

          <DropdownMenu 
            items={[
              { type: 'label' as const, label: 'Contact Methods' },
              { 
                children: 'Send Email', 
                icon: Mail, 
                description: 'Send an email message',
                shortcut: '⌘E'
              },
              { 
                children: 'Make Call', 
                icon: Phone, 
                description: 'Start a voice call',
                shortcut: '⌘C'
              },
              { 
                children: 'Schedule Meeting', 
                icon: Calendar, 
                description: 'Schedule a video meeting',
                shortcut: '⌘M'
              },
              'separator' as const,
              { type: 'label' as const, label: 'Information' },
              { children: 'View Location', icon: MapPin },
              { children: 'View Profile', icon: User },
              { children: 'View History', icon: Clock }
            ]}
          >
            <Button variant="outline" icon={User}>
              Contact Actions
            </Button>
          </DropdownMenu>
        </div>
      </div>

      {/* Configuration Options */}
      <div>
        <Typography variant="h3" className="mb-4">
          Configuration Options
        </Typography>
        <div className="flex gap-4">
          <DropdownMenu 
            items={basicMenuItems}
            dismissible={{ clickOutside: false, escapeKey: true, itemClick: false }}
          >
            <Button variant="outline">
              <Badge variant="outline" size="sm" className="mr-2">Persistent</Badge>
              No Auto Close
            </Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            offset={20}
          >
            <Button variant="outline">Large Offset</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            animationDuration={500}
          >
            <Button variant="outline">Slow Animation</Button>
          </DropdownMenu>

          <DropdownMenu 
            items={basicMenuItems}
            disabled
          >
            <Button variant="outline" disabled>
              Disabled Menu
            </Button>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenuShowcase;
