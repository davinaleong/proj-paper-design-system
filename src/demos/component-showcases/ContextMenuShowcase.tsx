import React, { useState } from 'react';
import { ContextMenu } from '../../components/feedback/ContextMenu';
import { Button } from '../../components/forms/Button';
import { Card } from '../../components/layout/Card';
import { Section } from '../../components/layout/Section';
import { Typography } from '../../components/core/Typography';
import { Badge } from '../../components/layout/Badge';
import { 
  User, 
  Settings, 
  LogOut, 
  Copy, 
  Download, 
  Share2, 
  Edit, 
  Trash2, 
  Heart, 
  Star,
  Plus,
  Minus
} from 'lucide-react';

const ContextMenuShowcase: React.FC = () => {
  const [actionLog, setActionLog] = useState<string[]>([]);

  const logAction = (action: string) => {
    setActionLog(prev => [`${new Date().toLocaleTimeString()}: ${action}`, ...prev.slice(0, 4)]);
  };

  const basicItems = [
    {
      children: 'Profile',
      icon: User,
      onClick: () => logAction('Profile clicked')
    },
    {
      children: 'Settings', 
      icon: Settings,
      onClick: () => logAction('Settings clicked')
    },
    'separator' as const,
    {
      children: 'Sign out',
      icon: LogOut,
      onClick: () => logAction('Sign out clicked'),
      destructive: true
    }
  ];

  const documentItems = [
    { type: 'label' as const, label: 'Actions' },
    {
      children: 'Copy',
      icon: Copy,
      shortcut: 'Ctrl+C',
      onClick: () => logAction('Copy clicked')
    },
    {
      children: 'Download',
      icon: Download,
      shortcut: 'Ctrl+S',
      onClick: () => logAction('Download clicked')
    },
    {
      children: 'Share',
      icon: Share2,
      onClick: () => logAction('Share clicked')
    },
    'separator' as const,
    { type: 'label' as const, label: 'Modify' },
    {
      children: 'Edit',
      icon: Edit,
      onClick: () => logAction('Edit clicked')
    },
    {
      children: 'Delete',
      icon: Trash2,
      onClick: () => logAction('Delete clicked'),
      destructive: true
    }
  ];

  const favoriteItems = [
    {
      children: 'Add to favorites',
      icon: Heart,
      color: 'rose' as const,
      onClick: () => logAction('Added to favorites')
    },
    {
      children: 'Rate',
      icon: Star,
      color: 'amber' as const,
      onClick: () => logAction('Rate clicked')
    },
    'separator' as const,
    {
      children: 'Remove',
      icon: Minus,
      onClick: () => logAction('Remove clicked'),
      destructive: true
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h1" className="mb-2">ContextMenu Component</Typography>
        <Typography variant="body" color="secondary" className="mb-6">
          Right-click desktop or long-press mobile/tablet to open context menus with Paper styling and Button variants.
        </Typography>
      </div>

      {/* Action Log */}
      {actionLog.length > 0 && (
        <Card className="p-4">
          <Typography variant="h6" className="mb-2">Recent Actions</Typography>
          <div className="space-y-1">
            {actionLog.map((action, index) => (
              <Typography key={index} variant="small" className="font-mono text-green-600">
                {action}
              </Typography>
            ))}
          </div>
        </Card>
      )}

      {/* Basic Context Menu */}
      <Section>
        <Typography variant="h2" className="mb-4">Basic Context Menu</Typography>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Solid Variant</Typography>
            <ContextMenu items={basicItems} variant="solid" color="primary">
              <div className="p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 text-center cursor-pointer hover:bg-gray-100 transition-colors">
                <Typography variant="body">Right-click or long-press me</Typography>
                <Typography variant="small" color="secondary">Primary solid context menu</Typography>
              </div>
            </ContextMenu>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Outline Variant</Typography>
            <ContextMenu items={basicItems} variant="outline" color="secondary">
              <div className="p-8 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300 text-center cursor-pointer hover:bg-blue-100 transition-colors">
                <Typography variant="body">Right-click or long-press me</Typography>
                <Typography variant="small" color="secondary">Secondary outline context menu</Typography>
              </div>
            </ContextMenu>
          </Card>
        </div>
      </Section>

      {/* Color Variants */}
      <Section>
        <Typography variant="h2" className="mb-4">Color Variants</Typography>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(['primary', 'secondary', 'success', 'warning'] as const).map(color => (
            <Card key={color} className="p-4">
              <Typography variant="h6" className="mb-2 capitalize">{color}</Typography>
              <ContextMenu 
                items={favoriteItems} 
                variant="outline" 
                color={color}
                placement="bottom-start"
              >
                <div className={`p-6 bg-${color}-50 rounded-lg border border-${color}-200 text-center cursor-pointer hover:bg-${color}-100 transition-colors`}>
                  <Typography variant="small">Right-click me</Typography>
                  <Badge variant="soft" color={color} className="mt-2">
                    {color}
                  </Badge>
                </div>
              </ContextMenu>
            </Card>
          ))}
        </div>
      </Section>

      {/* Advanced Context Menu */}
      <Section>
        <Typography variant="h2" className="mb-4">Advanced Features</Typography>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Document Actions</Typography>
            <Typography variant="body" color="secondary" className="mb-4">
              Context menu with labels, shortcuts, and grouped items
            </Typography>
            <ContextMenu 
              items={documentItems} 
              variant="ghost" 
              placement="bottom-end"
              offset={12}
            >
              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200 cursor-pointer hover:from-purple-100 hover:to-pink-100 transition-all">
                <Typography variant="h6">Document.pdf</Typography>
                <Typography variant="small" color="secondary">
                  Right-click for advanced options with shortcuts
                </Typography>
              </div>
            </ContextMenu>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Placement Options</Typography>
            <Typography variant="body" color="secondary" className="mb-4">
              Different placement configurations
            </Typography>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
              {(['top-start', 'top', 'top-end',
                'left-start', 'bottom', 'right-start',  
                'left-end', 'bottom-start', 'right-end'] as const).map(placement => (
                <ContextMenu 
                  key={placement}
                  items={[
                    {
                      children: `Placed ${placement}`,
                      icon: Plus,
                      onClick: () => logAction(`${placement} menu clicked`)
                    }
                  ]}
                  variant="solid"
                  color="accent"
                  placement={placement}
                >
                  <button className="p-2 text-xs bg-gray-100 hover:bg-gray-200 rounded border cursor-pointer transition-colors">
                    {placement}
                  </button>
                </ContextMenu>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Interactive Examples */}
      <Section>
        <Typography variant="h2" className="mb-4">Interactive Examples</Typography>
        <div className="space-y-6">
          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Context Menu on Button</Typography>
            <ContextMenu 
              items={[
                {
                  children: 'Primary Action',
                  icon: Plus,
                  onClick: () => logAction('Primary action')
                },
                {
                  children: 'Secondary Action',
                  icon: Settings,
                  onClick: () => logAction('Secondary action')
                }
              ]}
              variant="outline"
              color="primary"
            >
              <Button variant="solid" color="primary">
                Right-click for options
              </Button>
            </ContextMenu>
          </Card>

          <Card className="p-6">
            <Typography variant="h5" className="mb-3">Disabled Context Menu</Typography>
            <ContextMenu items={basicItems} disabled>
              <div className="p-6 bg-gray-100 rounded-lg text-center opacity-50 cursor-not-allowed">
                <Typography variant="body">Context menu disabled</Typography>
                <Typography variant="small" color="secondary">
                  Right-click will not work
                </Typography>
              </div>
            </ContextMenu>
          </Card>
        </div>
      </Section>

      {/* Mobile Instructions */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <Typography variant="h5" className="mb-2 text-blue-900">📱 Mobile/Tablet Instructions</Typography>
        <Typography variant="body" color="secondary">
          On touch devices, <strong>long-press</strong> (hold for 500ms) on any context menu trigger to open the menu.
          The long-press gesture is optimized for mobile and tablet interactions.
        </Typography>
      </Card>
    </div>
  );
};

export default ContextMenuShowcase;