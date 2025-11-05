/**
 * Luminance Test Showcase - demonstrates automatic text color calculation
 * for optimal accessibility compliance in Button and IconButton components
 */

import { Heart, Download, Settings, Search } from "lucide-react"
import { Paper, Typography } from "../../components/core"
import { Button, IconButton } from "../../components/forms"
import { getOptimalTextColor, getContrastRatios } from "../../utils/colors"

export function LuminanceTestShowcase() {
  // Test colors from our design system
  const testColors = [
    { name: "Primary", variant: "primary" as const, hex: "#3b82f6" },
    { name: "Secondary", variant: "secondary" as const, hex: "#64748b" },
    { name: "Success", variant: "success" as const, hex: "#10b981" },
    { name: "Warning", variant: "warning" as const, hex: "#f59e0b" },
    { name: "Danger", variant: "danger" as const, hex: "#ef4444" },
    { name: "Info", variant: "info" as const, hex: "#0ea5e9" },
    { name: "Paper", variant: "paper" as const, hex: "#0f766e" },
    { name: "Accent", variant: "accent" as const, hex: "#14b8a6" },
  ]

  return (
    <section id="luminance-test">
      <Paper>
        <div className="mb-8">
          <Typography variant="h2" className="mb-4">
            Luminance-Based Text Colors
          </Typography>
          <Typography variant="body" className="text-stone-600">
            Demonstration of automatic text color calculation for optimal contrast and accessibility compliance in Button and IconButton components.
          </Typography>
        </div>

        <div className="space-y-12">
          {/* Solid Button Tests */}
          <div>
            <Typography variant="h3" className="mb-6">
              Solid Buttons (Auto Text Color)
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              These buttons automatically calculate the optimal text color (black or white) based on background luminance for WCAG compliance.
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {testColors.map((color) => {
                const optimalText = getOptimalTextColor(color.hex)
                const ratios = getContrastRatios(color.hex)
                
                return (
                  <div key={color.variant} className="space-y-2">
                    <Button variant="solid" color={color.variant} className="w-full">
                      {color.name}
                    </Button>
                    <div className="text-xs text-stone-600 space-y-1 p-2 bg-stone-50 rounded">
                      <div><strong>Optimal:</strong> {optimalText}</div>
                      <div><strong>Contrast:</strong> {ratios[optimalText === 'black' ? 'black' : 'white'].toFixed(2)}</div>
                      <div><strong>WCAG AA:</strong> {ratios[optimalText === 'black' ? 'black' : 'white'] >= 4.5 ? '✅ Pass' : '❌ Fail'}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Icon Button Tests */}
          <div>
            <Typography variant="h3" className="mb-6">
              Icon Buttons (Auto Text Color)
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Icon buttons inherit the same optimal text colors, ensuring icons are clearly visible against any background.
            </Typography>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {testColors.map((color, index) => {
                const icons = [Heart, Download, Settings, Search]
                const Icon = icons[index % icons.length]
                const optimalText = getOptimalTextColor(color.hex)
                
                return (
                  <div key={color.variant} className="space-y-2 text-center">
                    <IconButton 
                      variant="solid" 
                      color={color.variant}
                      icon={Icon}
                      aria-label={`${color.name} icon button`}
                      size="lg"
                    />
                    <div className="text-xs text-stone-600">
                      <div className="font-medium">{color.name}</div>
                      <div className="text-stone-500">{optimalText} text</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

      {/* Outline Button Tests */}
      <div>
        <Typography variant="h3" className="mb-4">
          Outline Buttons (Traditional Coloring)
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testColors.map((color) => (
            <Button key={color.variant} variant="outline" color={color.variant} className="w-full">
              {color.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Ghost Button Tests */}
      <div>
        <Typography variant="h3" className="mb-4">
          Ghost Buttons (Traditional Coloring)
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testColors.map((color) => (
            <Button key={color.variant} variant="ghost" color={color.variant} className="w-full">
              {color.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div>
        <Typography variant="h3" className="mb-4">
          Before vs After Comparison
        </Typography>
        <div className="space-y-6">
          <div>
            <Typography variant="h4" className="mb-3">
              Traditional vs Luminance-Based (Primary Blue)
            </Typography>
            <div className="flex gap-4 items-center">
              <div className="space-y-2">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-sm border border-blue-600">
                  Traditional (Fixed White)
                </div>
                <div className="text-xs text-stone-600">
                  Fixed white text • Contrast: {getContrastRatios("#3b82f6").white.toFixed(2)}
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="solid" color="primary">
                  Luminance-Based
                </Button>
                <div className="text-xs text-stone-600">
                  Auto {getOptimalTextColor("#3b82f6")} text • Contrast: {getContrastRatios("#3b82f6")[getOptimalTextColor("#3b82f6") as 'black' | 'white'].toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Typography variant="h4" className="mb-3">
              Traditional vs Luminance-Based (Warning Yellow)
            </Typography>
            <div className="flex gap-4 items-center">
              <div className="space-y-2">
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-sm border border-yellow-600">
                  Traditional (Fixed White)
                </div>
                <div className="text-xs text-stone-600">
                  Fixed white text • Contrast: {getContrastRatios("#f59e0b").white.toFixed(2)}
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="solid" color="warning">
                  Luminance-Based
                </Button>
                <div className="text-xs text-stone-600">
                  Auto {getOptimalTextColor("#f59e0b")} text • Contrast: {getContrastRatios("#f59e0b")[getOptimalTextColor("#f59e0b") as 'black' | 'white'].toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Contrast Analysis Table */}
          <div>
            <Typography variant="h3" className="mb-6">
              Contrast Analysis & WCAG Compliance
            </Typography>
            <Typography variant="body" className="text-stone-600 mb-4">
              Detailed contrast ratios and accessibility compliance for each color variant.
            </Typography>
            <div className="overflow-x-auto">
              <table className="w-full border border-stone-200 rounded-lg overflow-hidden">
                <thead className="bg-stone-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">Color</th>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">Background</th>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">Auto Text</th>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">Contrast Ratio</th>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">WCAG AA</th>
                    <th className="px-4 py-3 text-left font-medium text-stone-700">WCAG AAA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {testColors.map((color) => {
                    const optimalText = getOptimalTextColor(color.hex)
                    const ratios = getContrastRatios(color.hex)
                    const ratio = ratios[optimalText === 'black' ? 'black' : 'white']
                    
                    return (
                      <tr key={color.variant} className="hover:bg-stone-50">
                        <td className="px-4 py-3 font-medium text-stone-900">{color.name}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center space-x-3">
                            <div 
                              className="w-6 h-6 rounded border border-stone-300" 
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-xs text-stone-600 font-mono">{color.hex}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="capitalize font-medium">{optimalText}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-mono text-sm">{ratio.toFixed(2)}:1</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            ratio >= 4.5 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {ratio >= 4.5 ? '✅ Pass' : '❌ Fail'}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            ratio >= 7.0 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {ratio >= 7.0 ? '✅ Pass' : '❌ Fail'}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Color Analysis Table */}
      <div>
        <Typography variant="h3" className="mb-4">
          Color Analysis Summary
        </Typography>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-stone-200">
            <thead>
              <tr className="bg-stone-50">
                <th className="border border-stone-200 px-4 py-2 text-left">Color</th>
                <th className="border border-stone-200 px-4 py-2 text-left">Hex</th>
                <th className="border border-stone-200 px-4 py-2 text-left">Optimal Text</th>
                <th className="border border-stone-200 px-4 py-2 text-left">Black Contrast</th>
                <th className="border border-stone-200 px-4 py-2 text-left">White Contrast</th>
                <th className="border border-stone-200 px-4 py-2 text-left">WCAG AA</th>
              </tr>
            </thead>
            <tbody>
              {testColors.map((color) => {
                const optimalText = getOptimalTextColor(color.hex)
                const ratios = getContrastRatios(color.hex)
                const isCompliant = ratios[optimalText === 'black' ? 'black' : 'white'] >= 4.5
                
                return (
                  <tr key={color.variant}>
                    <td className="border border-stone-200 px-4 py-2">{color.name}</td>
                    <td className="border border-stone-200 px-4 py-2 font-mono text-sm">{color.hex}</td>
                    <td className="border border-stone-200 px-4 py-2">{optimalText}</td>
                    <td className="border border-stone-200 px-4 py-2">{ratios.black.toFixed(2)}</td>
                    <td className="border border-stone-200 px-4 py-2">{ratios.white.toFixed(2)}</td>
                    <td className="border border-stone-200 px-4 py-2">{isCompliant ? '✅ Pass' : '❌ Fail'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
        </div>
      </Paper>
    </section>
  )
}