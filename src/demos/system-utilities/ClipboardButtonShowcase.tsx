import { useState } from 'react'
import { ClipboardButton } from '../../components/system-utilities/ClipboardButton'
import { Paper } from '../../components/core/Paper'
import { Typography } from '../../components/core/Typography'
import { Button } from '../../components/forms/Button'
import { Card } from '../../components/layout/Card'
import { Badge } from '../../components/layout/Badge'
import { Section } from '../../components/layout/Section'
import { Code, FileText, Settings, Palette } from 'lucide-react'

export function ClipboardButtonShowcase() {
  const [copyLog, setCopyLog] = useState<Array<{ time: string; text: string; success: boolean }>>([])

  const logCopy = (text: string, success: boolean) => {
    const logEntry = {
      time: new Date().toLocaleTimeString(),
      text: text.length > 50 ? `${text.substring(0, 50)}...` : text,
      success,
    }
    setCopyLog(prev => [logEntry, ...prev.slice(0, 9)]) // Keep last 10 entries
  }

  const sampleTexts = {
    simple: "Hello, world!",
    email: "user@example.com",
    url: "https://dav-devs-paper-design-system.example.com",
    code: `const greeting = "Hello, world!";
console.log(greeting);`,
    json: `{
  "name": "Paper Design System",
  "version": "1.0.0",
  "description": "A warm, tactile UI component library"
}`,
    longText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    cssCode: `.paper-component {
  background-color: #faf9f6;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  color: #44403c;
}`,
    command: "npm install @dav-devs/paper-design-system"
  }

  return (
    <div className="space-y-8">
      <Section>
        <Typography variant="h4" className="mb-4">Clipboard Button Component</Typography>
        <Typography variant="body" className="text-neutral-600 mb-6">
          Copy text to clipboard with visual feedback, multiple variants, and accessibility support. Works with modern Clipboard API and includes fallback for older browsers.
        </Typography>
      </Section>

      {/* Basic Usage */}
      <Section>
        <Typography variant="h5" className="mb-4">Basic Usage</Typography>
        <Paper className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <ClipboardButton
              text={sampleTexts.simple}
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.simple, false)}
            />
            
            <ClipboardButton
              text={sampleTexts.email}
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.email, false)}
            >
              Copy Email
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.url}
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.url, false)}
            >
              Copy URL
            </ClipboardButton>
          </div>
        </Paper>
      </Section>

      {/* Button Variants */}
      <Section>
        <Typography variant="h5" className="mb-4">Button Variants</Typography>
        
        <div className="space-y-6">
          {/* Button Variant */}
          <div>
            <Typography variant="h6" className="mb-3">Button Variant</Typography>
            <Paper className="p-6">
              <div className="flex flex-wrap gap-4 items-center">
                <ClipboardButton
                  text={sampleTexts.code}
                  variant="button"
                  style="solid"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.code, false)}
                >
                  Copy Code
                </ClipboardButton>
                
                <ClipboardButton
                  text={sampleTexts.json}
                  variant="button"
                  style="outline"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.json, false)}
                >
                  Copy JSON
                </ClipboardButton>
                
                <ClipboardButton
                  text={sampleTexts.longText}
                  variant="button"
                  style="ghost"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.longText, false)}
                >
                  Copy Text
                </ClipboardButton>
                
                <ClipboardButton
                  text={sampleTexts.command}
                  variant="button"
                  style="link"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.command, false)}
                >
                  Copy Command
                </ClipboardButton>
              </div>
            </Paper>
          </div>

          {/* Icon Variant */}
          <div>
            <Typography variant="h6" className="mb-3">Icon Variant</Typography>
            <Paper className="p-6">
              <div className="flex flex-wrap gap-4 items-center">
                <ClipboardButton
                  text={sampleTexts.simple}
                  variant="icon"
                  style="solid"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.simple, false)}
                />
                
                <ClipboardButton
                  text={sampleTexts.email}
                  variant="icon"
                  style="outline"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.email, false)}
                />
                
                <ClipboardButton
                  text={sampleTexts.url}
                  variant="icon"
                  style="ghost"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.url, false)}
                />
                
                <ClipboardButton
                  text={sampleTexts.code}
                  variant="icon"
                  style="link"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.code, false)}
                />
              </div>
            </Paper>
          </div>

          {/* Text Variant */}
          <div>
            <Typography variant="h6" className="mb-3">Text Variant</Typography>
            <Paper className="p-6">
              <div className="flex flex-wrap gap-6 items-center">
                <ClipboardButton
                  text={sampleTexts.simple}
                  variant="text"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.simple, false)}
                >
                  Copy
                </ClipboardButton>
                
                <ClipboardButton
                  text={sampleTexts.email}
                  variant="text"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.email, false)}
                >
                  Copy Email
                </ClipboardButton>
                
                <ClipboardButton
                  text={sampleTexts.url}
                  variant="text"
                  onSuccess={(text) => logCopy(text, true)}
                  onError={() => logCopy(sampleTexts.url, false)}
                >
                  Copy Link
                </ClipboardButton>
              </div>
            </Paper>
          </div>
        </div>
      </Section>

      {/* Sizes */}
      <Section>
        <Typography variant="h5" className="mb-4">Size Variants</Typography>
        <Paper className="p-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <Typography variant="body" className="w-16">Small:</Typography>
              <ClipboardButton
                text={sampleTexts.simple}
                size="sm"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="icon"
                size="sm"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="text"
                size="sm"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Typography variant="body" className="w-16">Medium:</Typography>
              <ClipboardButton
                text={sampleTexts.simple}
                size="md"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="icon"
                size="md"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="text"
                size="md"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Typography variant="body" className="w-16">Large:</Typography>
              <ClipboardButton
                text={sampleTexts.simple}
                size="lg"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="icon"
                size="lg"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
              <ClipboardButton
                text={sampleTexts.simple}
                variant="text"
                size="lg"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.simple, false)}
              />
            </div>
          </div>
        </Paper>
      </Section>

      {/* Custom Icons and Text */}
      <Section>
        <Typography variant="h5" className="mb-4">Custom Icons and Text</Typography>
        <Paper className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <ClipboardButton
              text={sampleTexts.code}
              copyIcon={<Code size={16} />}
              successText="Code Copied!"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.code, false)}
            >
              Copy Code
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.cssCode}
              copyIcon={<Palette size={16} />}
              successText="CSS Copied!"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.cssCode, false)}
            >
              Copy CSS
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.json}
              copyIcon={<FileText size={16} />}
              successText="JSON Copied!"
              errorText="Copy Failed!"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.json, false)}
            >
              Copy Config
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.command}
              copyIcon={<Settings size={16} />}
              variant="icon"
              successText="Command Copied!"
              title="Copy installation command"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.command, false)}
            />
          </div>
        </Paper>
      </Section>

      {/* Code Examples */}
      <Section>
        <Typography variant="h5" className="mb-4">Code Examples with Copy</Typography>
        <div className="space-y-4">
          {/* JavaScript Code */}
          <Card className="p-4">
            <div className="flex justify-between items-start mb-3">
              <Typography variant="h6">JavaScript Example</Typography>
              <ClipboardButton
                text={sampleTexts.code}
                variant="icon"
                size="sm"
                title="Copy JavaScript code"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.code, false)}
              />
            </div>
            <pre className="bg-stone-100 p-3 rounded text-sm overflow-x-auto">
              <code>{sampleTexts.code}</code>
            </pre>
          </Card>

          {/* CSS Code */}
          <Card className="p-4">
            <div className="flex justify-between items-start mb-3">
              <Typography variant="h6">CSS Example</Typography>
              <ClipboardButton
                text={sampleTexts.cssCode}
                variant="text"
                size="sm"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.cssCode, false)}
              >
                Copy CSS
              </ClipboardButton>
            </div>
            <pre className="bg-stone-100 p-3 rounded text-sm overflow-x-auto">
              <code>{sampleTexts.cssCode}</code>
            </pre>
          </Card>

          {/* JSON Config */}
          <Card className="p-4">
            <div className="flex justify-between items-start mb-3">
              <Typography variant="h6">JSON Configuration</Typography>
              <ClipboardButton
                text={sampleTexts.json}
                variant="button"
                size="sm"
                style="outline"
                onSuccess={(text) => logCopy(text, true)}
                onError={() => logCopy(sampleTexts.json, false)}
              >
                Copy JSON
              </ClipboardButton>
            </div>
            <pre className="bg-stone-100 p-3 rounded text-sm overflow-x-auto">
              <code>{sampleTexts.json}</code>
            </pre>
          </Card>
        </div>
      </Section>

      {/* Custom Feedback Duration */}
      <Section>
        <Typography variant="h5" className="mb-4">Custom Feedback Duration</Typography>
        <Paper className="p-6">
          <div className="flex flex-wrap gap-4 items-center">
            <ClipboardButton
              text={sampleTexts.simple}
              feedbackDuration={1000}
              successText="Quick!"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.simple, false)}
            >
              Fast Feedback (1s)
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.simple}
              feedbackDuration={3000}
              successText="Copied successfully!"
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.simple, false)}
            >
              Slow Feedback (3s)
            </ClipboardButton>
            
            <ClipboardButton
              text={sampleTexts.simple}
              showFeedback={false}
              onSuccess={(text) => logCopy(text, true)}
              onError={() => logCopy(sampleTexts.simple, false)}
            >
              No Visual Feedback
            </ClipboardButton>
          </div>
        </Paper>
      </Section>

      {/* Copy Log */}
      <Section>
        <Typography variant="h5" className="mb-4">Copy Activity Log</Typography>
        <Paper className="p-4">
          {copyLog.length === 0 ? (
            <Typography variant="body" className="text-neutral-500 italic">
              No copy activities yet. Try copying some text above to see them here.
            </Typography>
          ) : (
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-3">
                <Typography variant="h6">Recent Copies</Typography>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCopyLog([])}
                >
                  Clear Log
                </Button>
              </div>
              {copyLog.map((entry, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-stone-50 rounded-lg">
                  <Badge 
                    variant="soft" 
                    color={entry.success ? "green" : "red"} 
                    size="sm"
                  >
                    {entry.success ? "✓" : "✗"}
                  </Badge>
                  <div className="flex-1 min-w-0">
                    <Typography variant="caption" className="text-stone-500 block">
                      {entry.time}
                    </Typography>
                    <Typography variant="body" className="font-mono text-sm">
                      {entry.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Paper>
      </Section>

      {/* Usage Examples */}
      <Section>
        <Typography variant="h5" className="mb-4">Usage Examples</Typography>
        <div className="grid gap-6">
          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">Basic Usage</Typography>
            <pre className="text-sm bg-white p-3 rounded-sm overflow-x-auto">
{`<ClipboardButton text="Hello, world!">
  Copy Text
</ClipboardButton>`}
            </pre>
          </Paper>

          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">Icon Only</Typography>
            <pre className="text-sm bg-white p-3 rounded-sm overflow-x-auto">
{`<ClipboardButton 
  text="Copy this text"
  variant="icon"
  title="Copy to clipboard"
/>`}
            </pre>
          </Paper>

          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">With Custom Feedback</Typography>
            <pre className="text-sm bg-white p-3 rounded-sm overflow-x-auto">
{`<ClipboardButton
  text={codeSnippet}
  successText="Code copied!"
  errorText="Failed to copy code"
  feedbackDuration={3000}
  onSuccess={(text) => console.log('Copied:', text)}
  onError={(error) => console.error('Copy failed:', error)}
>
  Copy Code
</ClipboardButton>`}
            </pre>
          </Paper>

          <Paper className="p-4 bg-stone-50">
            <Typography variant="h6" className="mb-2">Text Variant</Typography>
            <pre className="text-sm bg-white p-3 rounded-sm overflow-x-auto">
{`<ClipboardButton
  text="user@example.com"
  variant="text"
  size="sm"
>
  Copy Email
</ClipboardButton>`}
            </pre>
          </Paper>
        </div>
      </Section>
    </div>
  )
}