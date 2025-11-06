import React from 'react';
import { Popover } from './Popover';
import { Button } from '../../forms/Button';
import { IconButton } from '../../forms/IconButton';
import { Typography } from '../../core/Typography';
import { Card } from '../../layout/Card';
import { Badge } from '../../layout/Badge';
import { 
  Settings, 
  User, 
  Bell, 
  Info, 
  MoreVertical,
  Heart,
  Star,
  Share,
  Download
} from 'lucide-react';

export const PopoverShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Popover
        </Typography>
        <Typography variant="body" color="secondary" className="mb-4">
          Interactive popovers with Paper styling, Button variants, and positioning system.
        </Typography>
      </div>

      {/* Basic Usage */}
      <div>
        <Typography variant="h3" className="mb-4">
          Basic Usage
        </Typography>
        <div className="flex gap-4">
          <Popover
            content={
              <div className="p-4">
                <Typography variant="h4" className="mb-2">
                  Profile Settings
                </Typography>
                <Typography variant="bodySmall" color="secondary">
                  Manage your account settings and preferences.
                </Typography>
              </div>
            }
          >
            <Button variant="solid">Click Me</Button>
          </Popover>

          <Popover
            content={
              <div className="p-3">
                <Typography variant="bodySmall">
                  This appears on hover!
                </Typography>
              </div>
            }
            trigger="hover"
          >
            <Button variant="outline">Hover Me</Button>
          </Popover>

          <Popover
            content={
              <div className="p-3">
                <Typography variant="bodySmall">
                  Focus to see this popover.
                </Typography>
              </div>
            }
            trigger="focus"
          >
            <Button variant="ghost">Focus Me</Button>
          </Popover>
        </div>
      </div>

      {/* Variants */}
      <div>
        <Typography variant="h3" className="mb-4">
          Variants
        </Typography>
        <div className="flex gap-4">
          <Popover
            content={<div className="p-4">Solid variant popover</div>}
            variant="solid"
          >
            <Button variant="solid">Solid</Button>
          </Popover>

          <Popover
            content={<div className="p-4">Outline variant popover</div>}
            variant="outline"
          >
            <Button variant="outline">Outline</Button>
          </Popover>

          <Popover
            content={<div className="p-4">Ghost variant popover</div>}
            variant="ghost"
          >
            <Button variant="ghost">Ghost</Button>
          </Popover>

          <Popover
            content={<div className="p-4">Link variant popover</div>}
            variant="link"
          >
            <Button variant="link">Link</Button>
          </Popover>

          <Popover
            content={<div className="p-4">Plain variant popover</div>}
            variant="plain"
          >
            <Button variant="plain">Plain</Button>
          </Popover>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <Typography variant="h3" className="mb-4">
          Sizes
        </Typography>
        <div className="flex gap-4 items-center">
          <Popover
            content={<div className="p-2">Extra small popover</div>}
            size="xs"
          >
            <Button size="xs">XS</Button>
          </Popover>

          <Popover
            content={<div className="p-3">Small popover</div>}
            size="sm"
          >
            <Button size="sm">SM</Button>
          </Popover>

          <Popover
            content={<div className="p-4">Medium popover</div>}
            size="md"
          >
            <Button size="md">MD</Button>
          </Popover>

          <Popover
            content={<div className="p-5">Large popover</div>}
            size="lg"
          >
            <Button size="lg">LG</Button>
          </Popover>

          <Popover
            content={<div className="p-6">Extra large popover</div>}
            size="xl"
          >
            <Button size="xl">XL</Button>
          </Popover>
        </div>
      </div>

      {/* Placements */}
      <div>
        <Typography variant="h3" className="mb-4">
          Placements
        </Typography>
        <div className="grid grid-cols-3 gap-8 p-16">
          {/* Top row */}
          <Popover
            content={<div className="p-3">Top Start</div>}
            placement="top-start"
          >
            <Button variant="outline">Top Start</Button>
          </Popover>
          
          <Popover
            content={<div className="p-3">Top Center</div>}
            placement="top"
          >
            <Button variant="outline">Top</Button>
          </Popover>
          
          <Popover
            content={<div className="p-3">Top End</div>}
            placement="top-end"
          >
            <Button variant="outline">Top End</Button>
          </Popover>

          {/* Middle row */}
          <Popover
            content={<div className="p-3">Left Start</div>}
            placement="left-start"
          >
            <Button variant="outline">Left Start</Button>
          </Popover>
          
          <div className="flex justify-center">
            <Typography variant="bodySmall" color="secondary">
              Center Reference
            </Typography>
          </div>
          
          <Popover
            content={<div className="p-3">Right Start</div>}
            placement="right-start"
          >
            <Button variant="outline">Right Start</Button>
          </Popover>

          {/* Bottom row */}
          <Popover
            content={<div className="p-3">Bottom Start</div>}
            placement="bottom-start"
          >
            <Button variant="outline">Bottom Start</Button>
          </Popover>
          
          <Popover
            content={<div className="p-3">Bottom Center</div>}
            placement="bottom"
          >
            <Button variant="outline">Bottom</Button>
          </Popover>
          
          <Popover
            content={<div className="p-3">Bottom End</div>}
            placement="bottom-end"
          >
            <Button variant="outline">Bottom End</Button>
          </Popover>
        </div>
      </div>

      {/* With IconButtons */}
      <div>
        <Typography variant="h3" className="mb-4">
          With Icon Buttons
        </Typography>
        <div className="flex gap-4">
          <Popover
            content={
              <div className="p-4">
                <Typography variant="h4" className="mb-2">
                  Settings
                </Typography>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <Typography variant="bodySmall">Profile</Typography>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    <Typography variant="bodySmall">Notifications</Typography>
                  </div>
                </div>
              </div>
            }
          >
            <IconButton 
              icon={Settings} 
              variant="outline" 
              aria-label="Settings"
            />
          </Popover>

          <Popover
            content={
              <div className="p-3">
                <Typography variant="bodySmall">
                  You have 3 new notifications
                </Typography>
              </div>
            }
            trigger="hover"
          >
            <IconButton 
              icon={Bell} 
              variant="ghost" 
              aria-label="Notifications"
            />
          </Popover>

          <Popover
            content={
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                  <Heart className="w-4 h-4" />
                  <Typography variant="bodySmall">Like</Typography>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                  <Star className="w-4 h-4" />
                  <Typography variant="bodySmall">Favorite</Typography>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                  <Share className="w-4 h-4" />
                  <Typography variant="bodySmall">Share</Typography>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
                  <Download className="w-4 h-4" />
                  <Typography variant="bodySmall">Download</Typography>
                </div>
              </div>
            }
          >
            <IconButton 
              icon={MoreVertical} 
              variant="ghost" 
              aria-label="More actions"
            />
          </Popover>
        </div>
      </div>

      {/* Rich Content */}
      <div>
        <Typography variant="h3" className="mb-4">
          Rich Content
        </Typography>
        <div className="flex gap-4">
          <Popover
            content={
              <Card className="max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <Typography variant="h4">John Doe</Typography>
                    <Typography variant="bodySmall" color="secondary">
                      Software Engineer
                    </Typography>
                  </div>
                </div>
                <Typography variant="bodySmall" className="mb-3">
                  Passionate about creating beautiful and functional user interfaces.
                </Typography>
                <div className="flex gap-2">
                  <Badge variant="outline" size="sm">React</Badge>
                  <Badge variant="outline" size="sm">TypeScript</Badge>
                  <Badge variant="outline" size="sm">Design</Badge>
                </div>
              </Card>
            }
            variant="plain"
            showArrow={false}
          >
            <Button variant="outline">User Profile</Button>
          </Popover>

          <Popover
            content={
              <div className="p-4 max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-500" />
                  <Typography variant="h4" color="primary">
                    Information
                  </Typography>
                </div>
                <Typography variant="bodySmall" className="mb-3">
                  This is a detailed information popover with multiple paragraphs 
                  and rich formatting options.
                </Typography>
                <Typography variant="bodySmall" color="secondary">
                  You can include any React content here, including forms, 
                  images, and interactive elements.
                </Typography>
                <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <Button size="sm" variant="solid" className="w-full">
                    Got it
                  </Button>
                </div>
              </div>
            }
          >
            <Button variant="solid" icon={Info}>
              Show Info
            </Button>
          </Popover>
        </div>
      </div>

      {/* Configuration Options */}
      <div>
        <Typography variant="h3" className="mb-4">
          Configuration Options
        </Typography>
        <div className="flex gap-4">
          <Popover
            content={<div className="p-3">No arrow popover</div>}
            showArrow={false}
          >
            <Button variant="outline">No Arrow</Button>
          </Popover>

          <Popover
            content={<div className="p-3">Large offset popover</div>}
            offset={20}
          >
            <Button variant="outline">Large Offset</Button>
          </Popover>

          <Popover
            content={<div className="p-3">Click outside disabled</div>}
            dismissible={{ clickOutside: false, escapeKey: true }}
          >
            <Button variant="outline">No Click Outside</Button>
          </Popover>

          <Popover
            content={<div className="p-3">Disabled popover</div>}
            disabled
          >
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default PopoverShowcase;
