import { useState } from 'react';
import { ScrollArea } from '../../components/system-utilities/ScrollArea';
import { Paper } from '../../components/core/Paper';
import { Typography } from '../../components/core/Typography';
import { Button } from '../../components/forms/Button';
import { Card } from '../../components/layout/Card';
import { Badge } from '../../components/layout/Badge';
import { Section } from '../../components/layout/Section';

export function ScrollAreaShowcase() {
  const [scrollEvents, setScrollEvents] = useState<string[]>([]);
  const [hideScrollbars, setHideScrollbars] = useState(false);
  const [thumbColor, setThumbColor] = useState<'neutral' | 'primary' | 'secondary' | 'accent'>('neutral');

  const addScrollEvent = (event: string) => {
    setScrollEvents(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${event}`]);
  };

  const longContent = Array.from({ length: 50 }, (_, i) => (
    <div key={i} className="p-4">
      <Typography variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Item #{i + 1}
      </Typography>
    </div>
  ));

  const wideContent = (
    <div className="flex gap-4 p-4" style={{ minWidth: '1200px' }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Card key={i} className="min-w-[200px] p-4">
          <Typography variant="h6">Card {i + 1}</Typography>
          <Typography variant="body" className="mt-2">
            This card has fixed width and requires horizontal scrolling.
          </Typography>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <Section>
        <Typography variant="h4" className="mb-4">Scroll Area Component</Typography>
        <Typography variant="body" className="text-neutral-600 mb-6">
          A customizable scroll area component with styled scrollbars, smooth scrolling, and scroll event callbacks.
        </Typography>
      </Section>

      {/* Basic Usage */}
      <Section>
        <Typography variant="h5" className="mb-4">Basic Vertical Scrolling</Typography>
        <Paper className="p-4">
          <ScrollArea height={300} className="rounded-sm">
            {longContent}
          </ScrollArea>
        </Paper>
      </Section>

      {/* Horizontal Scrolling */}
      <Section>
        <Typography variant="h5" className="mb-4">Horizontal Scrolling</Typography>
        <Paper className="p-4">
          <ScrollArea height={200} scrollX="auto" scrollY="hidden" className="rounded-sm">
            {wideContent}
          </ScrollArea>
        </Paper>
      </Section>

      {/* Both Directions */}
      <Section>
        <Typography variant="h5" className="mb-4">Both Directions</Typography>
        <Paper className="p-4">
          <ScrollArea height={200} width={400} className="rounded-sm">
            <div style={{ minWidth: '800px', minHeight: '600px' }} className="p-4">
              <Typography variant="h6" className="mb-4">Large Content Area</Typography>
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 32 }, (_, i) => (
                  <Card key={i} className="p-4 min-w-[150px]">
                    <Typography variant="body">Item {i + 1}</Typography>
                    <Typography variant="caption" className="text-neutral-500">
                      This content requires both horizontal and vertical scrolling.
                    </Typography>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollArea>
        </Paper>
      </Section>

      {/* Customization Options */}
      <Section>
        <Typography variant="h5" className="mb-4">Customization Options</Typography>
        <div className="flex flex-wrap gap-4 mb-4">
          <Button
            variant={hideScrollbars ? 'solid' : 'outline'}
            onClick={() => setHideScrollbars(!hideScrollbars)}
            size="sm"
          >
            {hideScrollbars ? 'Show' : 'Hide'} Scrollbars
          </Button>
          
          <div className="flex gap-2">
            <Typography variant="body" className="self-center">Thumb Color:</Typography>
            {(['neutral', 'primary', 'secondary', 'accent'] as const).map(color => (
              <Button
                key={color}
                variant={thumbColor === color ? 'solid' : 'outline'}
                onClick={() => setThumbColor(color)}
                size="sm"
                className="capitalize"
              >
                {color}
              </Button>
            ))}
          </div>
        </div>

        <Paper className="p-4">
          <ScrollArea 
            height={200} 
            hideScrollbars={hideScrollbars}
            thumbColor={thumbColor}
            className="rounded-sm"
          >
            {longContent.slice(0, 20)}
          </ScrollArea>
        </Paper>
      </Section>

      {/* Scroll Events */}
      <Section>
        <Typography variant="h5" className="mb-4">Scroll Events</Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Paper className="p-4">
              <ScrollArea 
                height={200}
                onScroll={() => addScrollEvent('Scrolled')}
                onScrollTop={() => addScrollEvent('Reached top')}
                onScrollBottom={() => addScrollEvent('Reached bottom')}
                className="rounded-sm"
              >
                {longContent.slice(0, 15)}
              </ScrollArea>
            </Paper>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-2">Scroll Events Log</Typography>
            <Paper className="p-4 bg-neutral-50">
              <div className="space-y-1">
                {scrollEvents.length === 0 ? (
                  <Typography variant="body" className="text-neutral-500">
                    No events yet. Start scrolling!
                  </Typography>
                ) : (
                  scrollEvents.map((event, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Badge variant="soft" color="neutral" size="sm">
                        {i + 1}
                      </Badge>
                      <Typography variant="caption" className="font-mono">
                        {event}
                      </Typography>
                    </div>
                  ))
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setScrollEvents([])}
                className="mt-2"
              >
                Clear Events
              </Button>
            </Paper>
          </div>
        </div>
      </Section>

      {/* Size Variants */}
      <Section>
        <Typography variant="h5" className="mb-4">Size Variants</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Typography variant="h6" className="mb-2">Small (150px)</Typography>
            <ScrollArea height={150} scrollbarSize={8} className="rounded-sm">
              {longContent.slice(0, 10)}
            </ScrollArea>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-2">Medium (200px)</Typography>
            <ScrollArea height={200} scrollbarSize={12} className="rounded-sm">
              {longContent.slice(0, 15)}
            </ScrollArea>
          </div>
          
          <div>
            <Typography variant="h6" className="mb-2">Large (250px)</Typography>
            <ScrollArea height={250} scrollbarSize={16} className="rounded-sm">
              {longContent.slice(0, 20)}
            </ScrollArea>
          </div>
        </div>
      </Section>

      {/* Focusable ScrollArea */}
      <Section>
        <Typography variant="h5" className="mb-4">Focusable Scroll Area</Typography>
        <Typography variant="body" className="text-neutral-600 mb-4">
          This scroll area can receive keyboard focus and can be navigated with arrow keys.
        </Typography>
        <Paper className="p-4">
          <ScrollArea 
            height={200}
            focusable={true}
            className="rounded-sm"
          >
            {longContent.slice(0, 15)}
          </ScrollArea>
          <Typography variant="caption" className="text-neutral-500 mt-2 block">
            Click to focus, then use arrow keys or Page Up/Down to scroll.
          </Typography>
        </Paper>
      </Section>

      {/* Max Height Example */}
      <Section>
        <Typography variant="h5" className="mb-4">Dynamic Height with Max Height</Typography>
        <Typography variant="body" className="text-neutral-600 mb-4">
          This scroll area grows with content but has a maximum height limit.
        </Typography>
        <Paper className="p-4">
          <ScrollArea maxHeight={300} className="rounded-sm">
            <div className="p-4">
              <Typography variant="h6" className="mb-4">Dynamic Content</Typography>
              <Typography variant="body" className="mb-4">
                This content starts small but can grow. The scroll area will expand up to its max height.
              </Typography>
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="p-3 mb-2 bg-neutral-50 rounded">
                  <Typography variant="body">Content item {i + 1}</Typography>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Paper>
      </Section>
    </div>
  );
}