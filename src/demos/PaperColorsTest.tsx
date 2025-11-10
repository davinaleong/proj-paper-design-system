import React from "react"
import { Typography } from "../components/core/Typography"
import { Button } from "../components/forms/Button"
import { Input } from "../components/forms/Input"
import { Card } from "../components/layout/Card"
import { Badge } from "../components/layout/Badge"

export const PaperColorsTest: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Current Colors Section */}
      <div className="bg-[#faf9f6] p-8 border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="text-stone-900 mb-2">
            Current Paper Colors
          </Typography>
          <Typography variant="bodyLarge" className="text-stone-600 mb-8">
            Background: #faf9f6 (current ivory tone)
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Example */}
            <Card className="bg-stone-100 border-stone-200">
              <div className="p-6">
                <Typography variant="h3" className="text-stone-900 mb-3">
                  Sample Card
                </Typography>
                <Typography variant="body" className="text-stone-700 mb-4">
                  This is how text looks on our current panel background (stone-100).
                </Typography>
                <Button variant="solid" color="primary" size="sm">
                  Action Button
                </Button>
              </div>
            </Card>

            {/* Form Example */}
            <div className="bg-stone-100 border border-stone-200 rounded-lg p-6">
              <Typography variant="h4" className="text-stone-900 mb-4">
                Form Elements
              </Typography>
              <div className="space-y-4">
                <Input
                  placeholder="Enter some text..."
                  className="bg-white border-stone-300"
                />
                <div className="flex gap-2">
                  <Badge variant="soft" color="primary">Primary</Badge>
                  <Badge variant="soft" color="success">Success</Badge>
                  <Badge variant="soft" color="warning">Warning</Badge>
                </div>
              </div>
            </div>

            {/* Text Hierarchy */}
            <div className="bg-stone-100 border border-stone-200 rounded-lg p-6">
              <Typography variant="h4" className="text-stone-900 mb-4">
                Text Hierarchy
              </Typography>
              <div className="space-y-2">
                <Typography variant="body" className="text-stone-900">
                  Primary text (stone-900)
                </Typography>
                <Typography variant="body" className="text-stone-700">
                  Secondary text (stone-700)
                </Typography>
                <Typography variant="body" className="text-stone-500">
                  Muted text (stone-500)
                </Typography>
                <Typography variant="caption" className="text-stone-400">
                  Subtle text (stone-400)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Option 1: Minimal Warm */}
      <div className="bg-[#fcfbf9] p-8 border-b border-[#e8e6e0]">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="text-[#1a1917] mb-2">
            Recommended: Minimal Warm
          </Typography>
          <Typography variant="bodyLarge" className="text-[#4a4945] mb-8">
            Background: #fcfbf9 (softer paper white) • Panel: #f8f7f4
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Example */}
            <Card className="bg-[#f8f7f4] border-[#e8e6e0]">
              <div className="p-6">
                <Typography variant="h3" className="text-[#1a1917] mb-3">
                  Sample Card
                </Typography>
                <Typography variant="body" className="text-[#4a4945] mb-4">
                  This is much softer on the eyes. Notice how the warm undertones create a gentle, paper-like feel.
                </Typography>
                <Button variant="solid" color="primary" size="sm">
                  Action Button
                </Button>
              </div>
            </Card>

            {/* Form Example */}
            <div className="bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg p-6">
              <Typography variant="h4" className="text-[#1a1917] mb-4">
                Form Elements
              </Typography>
              <div className="space-y-4">
                <Input
                  placeholder="Much easier on the eyes..."
                  className="bg-[#fcfbf9] border-[#e8e6e0] text-[#1a1917] placeholder:text-[#6b6a66]"
                />
                <div className="flex gap-2">
                  <Badge variant="soft" color="primary">Primary</Badge>
                  <Badge variant="soft" color="success">Success</Badge>
                  <Badge variant="soft" color="warning">Warning</Badge>
                </div>
              </div>
            </div>

            {/* Text Hierarchy */}
            <div className="bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg p-6">
              <Typography variant="h4" className="text-[#1a1917] mb-4">
                Text Hierarchy
              </Typography>
              <div className="space-y-2">
                <Typography variant="body" className="text-[#1a1917]">
                  Primary text (#1a1917)
                </Typography>
                <Typography variant="body" className="text-[#4a4945]">
                  Secondary text (#4a4945)
                </Typography>
                <Typography variant="body" className="text-[#6b6a66]">
                  Muted text (#6b6a66)
                </Typography>
                <Typography variant="caption" className="text-[#9c9b96]">
                  Subtle text (#9c9b96)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Theme: Black Paper */}
      <div className="bg-[#0a0a0a] p-8 border-b border-[#383838]">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h1" className="text-[#f8f8f8] mb-2">
            Dark Theme: Black Paper
          </Typography>
          <Typography variant="bodyLarge" className="text-[#d4d4d4] mb-8">
            Background: #0a0a0a (smooth black paper) • Panel: #1a1a1a • No texture
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card Example */}
            <Card className="bg-[#1a1a1a] border-[#383838]">
              <div className="p-6">
                <Typography variant="h3" className="text-[#f8f8f8] mb-3">
                  Sample Card
                </Typography>
                <Typography variant="body" className="text-[#d4d4d4] mb-4">
                  Smooth black paper aesthetic with no texture. Perfect complement to the warm light theme.
                </Typography>
                <Button variant="solid" color="primary" size="sm">
                  Action Button
                </Button>
              </div>
            </Card>

            {/* Form Example */}
            <div className="bg-[#1a1a1a] border border-[#383838] rounded-lg p-6">
              <Typography variant="h4" className="text-[#f8f8f8] mb-4">
                Form Elements
              </Typography>
              <div className="space-y-4">
                <Input
                  placeholder="Professional dark interface..."
                  className="bg-[#0a0a0a] border-[#383838] text-[#f8f8f8] placeholder:text-[#a8a8a8]"
                />
                <div className="flex gap-2">
                  <Badge variant="soft" color="primary">Primary</Badge>
                  <Badge variant="soft" color="success">Success</Badge>
                  <Badge variant="soft" color="warning">Warning</Badge>
                </div>
              </div>
            </div>

            {/* Text Hierarchy */}
            <div className="bg-[#1a1a1a] border border-[#383838] rounded-lg p-6">
              <Typography variant="h4" className="text-[#f8f8f8] mb-4">
                Text Hierarchy
              </Typography>
              <div className="space-y-2">
                <Typography variant="body" className="text-[#f8f8f8]">
                  Primary text (#f8f8f8)
                </Typography>
                <Typography variant="body" className="text-[#d4d4d4]">
                  Secondary text (#d4d4d4)
                </Typography>
                <Typography variant="body" className="text-[#a8a8a8]">
                  Muted text (#a8a8a8)
                </Typography>
                <Typography variant="caption" className="text-[#6b6b6b]">
                  Subtle text (#6b6b6b)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-[#fcfbf9] p-8">
        <div className="max-w-4xl mx-auto">
          <Typography variant="h2" className="text-[#1a1917] mb-6">
            Direct Comparison
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current */}
            <div className="bg-[#faf9f6] border border-stone-200 rounded-lg p-6">
              <div className="mb-4 h-12 bg-stone-100 rounded border border-stone-200 flex items-center justify-center">
                <Typography variant="caption" className="text-stone-600">
                  Current Panel
                </Typography>
              </div>
              <Typography variant="h4" className="text-stone-900 mb-2">
                Current
              </Typography>
              <Typography variant="body" className="text-stone-700 text-sm">
                #faf9f6 base<br />
                stone-100 panels
              </Typography>
            </div>

            {/* Recommended */}
            <div className="bg-[#fcfbf9] border border-[#e8e6e0] rounded-lg p-6">
              <div className="mb-4 h-12 bg-[#f8f7f4] rounded border border-[#e8e6e0] flex items-center justify-center">
                <Typography variant="caption" className="text-[#6b6a66]">
                  Soft Panel
                </Typography>
              </div>
              <Typography variant="h4" className="text-[#1a1917] mb-2">
                Recommended
              </Typography>
              <Typography variant="body" className="text-[#4a4945] text-sm">
                #fcfbf9 base<br />
                #f8f7f4 panels
              </Typography>
            </div>

            {/* Black Paper Dark */}
            <div className="bg-[#0a0a0a] border border-[#383838] rounded-lg p-6">
              <div className="mb-4 h-12 bg-[#1a1a1a] rounded border border-[#383838] flex items-center justify-center">
                <Typography variant="caption" className="text-[#a8a8a8]">
                  Black Panel
                </Typography>
              </div>
              <Typography variant="h4" className="text-[#f8f8f8] mb-2">
                Black Paper
              </Typography>
              <Typography variant="body" className="text-[#d4d4d4] text-sm">
                #0a0a0a base<br />
                #1a1a1a panels
              </Typography>
            </div>
          </div>

          {/* Theme Harmony Demo */}
          <div className="mt-12">
            <Typography variant="h3" className="text-[#1a1917] mb-6">
              Theme Harmony & Tailwind Integration
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Light Theme Demo */}
              <div className="bg-[#f8f7f4] border border-[#e8e6e0] rounded-lg p-6">
                <Typography variant="h4" className="text-[#1a1917] mb-4">
                  Light Theme + TW Colors
                </Typography>
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="solid" color="primary" size="sm">Primary</Button>
                    <Button variant="solid" color="success" size="sm">Success</Button>
                    <Button variant="solid" color="warning" size="sm">Warning</Button>
                    <Button variant="solid" color="danger" size="sm">Danger</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-50 border border-blue-200 rounded p-3">
                      <Typography variant="bodySmall" className="text-blue-900 font-medium">
                        Info: Soft blue works perfectly
                      </Typography>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <Typography variant="bodySmall" className="text-green-900 font-medium">
                        Success: Harmonious with warm background
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Theme Demo */}
              <div className="bg-[#1a1a1a] border border-[#383838] rounded-lg p-6">
                <Typography variant="h4" className="text-[#f8f8f8] mb-4">
                  Dark Theme + TW Colors
                </Typography>
                <div className="space-y-4">
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="solid" color="primary" size="sm">Primary</Button>
                    <Button variant="solid" color="success" size="sm">Success</Button>
                    <Button variant="solid" color="warning" size="sm">Warning</Button>
                    <Button variant="solid" color="danger" size="sm">Danger</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-900 border border-blue-700 rounded p-3">
                      <Typography variant="bodySmall" className="text-blue-100 font-medium">
                        Info: Bold on black paper
                      </Typography>
                    </div>
                    <div className="bg-green-900 border border-green-700 rounded p-3">
                      <Typography variant="bodySmall" className="text-green-100 font-medium">
                        Success: Professional dark variant
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperColorsTest