import { useState } from "react"
import { Backdrop } from "../../components/overlays"
import { Button } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import type { ColorVariant } from "../../utils/color"

export function BackdropShowcase() {
  const [activeBackdrop, setActiveBackdrop] = useState<string | null>(null)

  const openBackdrop = (type: string) => setActiveBackdrop(type)
  const closeBackdrop = () => setActiveBackdrop(null)

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Backdrop
        </Typography>
        <Typography variant="body" color="muted">
          Overlay backgrounds with solid, blur, and patterned variants, including customizable color overlays.
        </Typography>
      </div>

      {/* Basic Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Basic Variants</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Typography variant="h5">Solid Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openBackdrop('solid')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Solid Backdrop
            </Button>
          </div>
          
          <div className="space-y-2">
            <Typography variant="h5">Blur Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openBackdrop('blur')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Blur Backdrop
            </Button>
          </div>
          
          <div className="space-y-2">
            <Typography variant="h5">Patterned Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openBackdrop('patterned')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Patterned Backdrop
            </Button>
          </div>
        </div>
      </Paper>

      {/* Color Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Color Variants</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "primary", "success", "warning", "danger", "info", "paper",
            "purple", "teal"
          ].map((color) => (
            <div key={color} className="space-y-2">
              <Typography variant="body" className="capitalize text-center">
                {color}
              </Typography>
              <div className="flex flex-col gap-2">
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openBackdrop(`solid-${color}`)}
                  className="w-full"
                >
                  Solid
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openBackdrop(`blur-${color}`)}
                  className="w-full"
                >
                  Blur
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openBackdrop(`pattern-${color}`)}
                  className="w-full"
                >
                  Pattern
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Paper>

      {/* Pattern Types */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Pattern Types</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {["dots", "grid", "diagonal", "waves"].map((pattern) => (
            <Button 
              key={pattern}
              variant="outline"
              onClick={() => openBackdrop(`pattern-type-${pattern}`)}
              className="capitalize"
            >
              {pattern} Pattern
            </Button>
          ))}
        </div>
      </Paper>

      {/* Opacity Levels */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Opacity Levels</Typography>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[0.2, 0.3, 0.5, 0.7, 0.9].map((opacity) => (
            <Button 
              key={opacity}
              variant="outline"
              onClick={() => openBackdrop(`opacity-${opacity}`)}
            >
              {Math.round(opacity * 100)}% Opacity
            </Button>
          ))}
        </div>
      </Paper>

      {/* Backdrops */}
      <Backdrop
        isOpen={activeBackdrop === 'solid'}
        variant="solid"
        onClick={closeBackdrop}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <Typography variant="h4" className="mb-4">Solid Backdrop</Typography>
            <Typography variant="body" className="mb-6">
              Solid black overlay with customizable opacity.
            </Typography>
            <Button variant="solid" onClick={closeBackdrop}>
              Close
            </Button>
          </div>
        </div>
      </Backdrop>

      <Backdrop
        isOpen={activeBackdrop === 'blur'}
        variant="blur"
        color="paper"
        onClick={closeBackdrop}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <Typography variant="h4" className="mb-4">Blur Backdrop</Typography>
            <Typography variant="body" className="mb-6">
              Backdrop blur effect with paper color overlay.
            </Typography>
            <Button variant="solid" onClick={closeBackdrop}>
              Close
            </Button>
          </div>
        </div>
      </Backdrop>

      <Backdrop
        isOpen={activeBackdrop === 'patterned'}
        variant="patterned"
        color="paper"
        pattern="dots"
        patternIntensity="medium"
        onClick={closeBackdrop}
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <Typography variant="h4" className="mb-4">Patterned Backdrop</Typography>
            <Typography variant="body" className="mb-6">
              Dots pattern with paper color overlay.
            </Typography>
            <Button variant="solid" onClick={closeBackdrop}>
              Close
            </Button>
          </div>
        </div>
      </Backdrop>

      {/* Solid Color Backdrops */}
      {[
        "primary", "success", "warning", "danger", "info", "paper",
        "purple", "teal"
      ].map((color) => (
        <Backdrop
          key={`solid-${color}`}
          isOpen={activeBackdrop === `solid-${color}`}
          variant="solid"
          color={color as ColorVariant}
          opacity={0.3}
          onClick={closeBackdrop}
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <Typography variant="h4" className="mb-4 capitalize">
                {color} Solid Backdrop
              </Typography>
              <Typography variant="body" className="mb-6">
                Solid {color} color backdrop.
              </Typography>
              <Button variant="solid" onClick={closeBackdrop}>
                Close
              </Button>
            </div>
          </div>
        </Backdrop>
      ))}

      {/* Color Overlay Backdrops */}
      {[
        "primary", "success", "warning", "danger", "info", "paper",
        "purple", "teal"
      ].map((color) => (
        <div key={color}>
          <Backdrop
            isOpen={activeBackdrop === `blur-${color}`}
            variant="blur"
            color={color as ColorVariant}
            onClick={closeBackdrop}
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <Typography variant="h4" className="mb-4 capitalize">
                  {color} Blur Backdrop
                </Typography>
                <Typography variant="body" className="mb-6">
                  Backdrop blur with {color} color overlay.
                </Typography>
                <Button variant="solid" onClick={closeBackdrop}>
                  Close
                </Button>
              </div>
            </div>
          </Backdrop>

          <Backdrop
            isOpen={activeBackdrop === `pattern-${color}`}
            variant="patterned"
            color={color as ColorVariant}
            pattern="dots"
            patternIntensity="medium"
            onClick={closeBackdrop}
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <Typography variant="h4" className="mb-4 capitalize">
                  {color} Pattern Backdrop
                </Typography>
                <Typography variant="body" className="mb-6">
                  Dots pattern with {color} color overlay.
                </Typography>
                <Button variant="solid" onClick={closeBackdrop}>
                  Close
                </Button>
              </div>
            </div>
          </Backdrop>
        </div>
      ))}

      {/* Pattern Type Backdrops */}
      {["dots", "grid", "diagonal", "waves"].map((pattern) => (
        <Backdrop
          key={pattern}
          isOpen={activeBackdrop === `pattern-type-${pattern}`}
          variant="patterned"
          color="paper"
          pattern={pattern as "dots" | "grid" | "diagonal" | "waves"}
          patternIntensity="medium"
          onClick={closeBackdrop}
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <Typography variant="h4" className="mb-4 capitalize">
                {pattern} Pattern
              </Typography>
              <Typography variant="body" className="mb-6">
                Backdrop with {pattern} pattern overlay.
              </Typography>
              <Button variant="solid" onClick={closeBackdrop}>
                Close
              </Button>
            </div>
          </div>
        </Backdrop>
      ))}

      {/* Opacity Level Backdrops */}
      {[0.2, 0.3, 0.5, 0.7, 0.9].map((opacity) => (
        <Backdrop
          key={opacity}
          isOpen={activeBackdrop === `opacity-${opacity}`}
          variant="solid"
          opacity={opacity}
          onClick={closeBackdrop}
        >
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
              <Typography variant="h4" className="mb-4">
                {Math.round(opacity * 100)}% Opacity
              </Typography>
              <Typography variant="body" className="mb-6">
                Solid backdrop with {Math.round(opacity * 100)}% opacity.
              </Typography>
              <Button variant="solid" onClick={closeBackdrop}>
                Close
              </Button>
            </div>
          </div>
        </Backdrop>
      ))}
    </div>
  )
}