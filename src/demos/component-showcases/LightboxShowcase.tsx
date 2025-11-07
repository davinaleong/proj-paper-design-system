import { useState } from "react"
import { Lightbox } from "../../components/overlays"
import { Button } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import { X, ZoomIn, Download, Share } from "lucide-react"
import type { ColorVariant } from "../../utils/colors"

export function LightboxShowcase() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null)

  const openLightbox = (type: string) => setActiveLightbox(type)
  const closeLightbox = () => setActiveLightbox(null)

  // Sample images for demonstration
  const sampleImages = [
    "/api/placeholder/800/600",
    "/api/placeholder/600/800", 
    "/api/placeholder/900/500",
  ]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Lightbox
        </Typography>
        <Typography variant="body" color="muted">
          Modal overlay for displaying images and content with black, blur, and blurred-image backdrop variants.
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
              onClick={() => openLightbox('solid')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Solid Lightbox
            </Button>
          </div>
          
          <div className="space-y-2">
            <Typography variant="h5">Blur Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openLightbox('blur')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Blur Lightbox
            </Button>
          </div>
          
          <div className="space-y-2">
            <Typography variant="h5">Blurred Image Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openLightbox('blurred-image')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Blurred Image Lightbox
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
                  onClick={() => openLightbox(`solid-${color}`)}
                  className="w-full"
                >
                  Solid
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openLightbox(`blur-${color}`)}
                  className="w-full"
                >
                  Blur
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={() => openLightbox(`blurred-image-${color}`)}
                  className="w-full"
                >
                  Blurred Image
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Paper>

      {/* Image Gallery Example */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Image Gallery Example</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleImages.map((src, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img 
                src={src} 
                alt={`Sample ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                onClick={() => openLightbox(`gallery-${index}`)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </Paper>

      {/* Basic Lightboxes */}
      <Lightbox
        isOpen={activeLightbox === 'solid'}
        variant="solid"
        opacity={0.4}
        onClose={closeLightbox}
      >
        <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
          <Typography variant="h4" className="mb-4">Solid Lightbox</Typography>
          <Typography variant="body" className="mb-6">
            Traditional solid backdrop with subtle opacity for optimal content visibility.
          </Typography>
          <Button variant="solid" onClick={closeLightbox}>
            Close
          </Button>
        </div>
      </Lightbox>

      <Lightbox
        isOpen={activeLightbox === 'blur'}
        variant="blur"
        color="paper"
        onClose={closeLightbox}
      >
        <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
          <Typography variant="h4" className="mb-4">Blur Lightbox</Typography>
          <Typography variant="body" className="mb-6">
            Blurred backdrop that maintains visual context while focusing attention.
          </Typography>
          <Button variant="solid" onClick={closeLightbox}>
            Close
          </Button>
        </div>
      </Lightbox>

      <Lightbox
        isOpen={activeLightbox === 'blurred-image'}
        variant="blurred-image"
        imageSrc={sampleImages[0]}
        color="paper"
        onClose={closeLightbox}
      >
        <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
          <Typography variant="h4" className="mb-4">Blurred Image Lightbox</Typography>
          <Typography variant="body" className="mb-6">
            Uses a blurred version of an image as the backdrop for contextual viewing.
          </Typography>
          <Button variant="solid" onClick={closeLightbox}>
            Close
          </Button>
        </div>
      </Lightbox>

      {/* Solid Color Variant Lightboxes */}
      {[
        "primary", "success", "warning", "danger", "info", "paper",
        "purple", "teal"
      ].map((color) => (
        <Lightbox
          key={`solid-${color}`}
          isOpen={activeLightbox === `solid-${color}`}
          variant="solid"
          color={color as ColorVariant}
          opacity={0.7}
          onClose={closeLightbox}
        >
          <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <Typography variant="h4" className="mb-4 capitalize">
              {color} Solid Lightbox
            </Typography>
            <Typography variant="body" className="mb-6">
              Solid {color} color backdrop lightbox.
            </Typography>
            <Button variant="solid" onClick={closeLightbox}>
              Close
            </Button>
          </div>
        </Lightbox>
      ))}

      {/* Color Variant Lightboxes */}
      {[
        "primary", "success", "warning", "danger", "info", "paper",
        "purple", "teal"
      ].map((color) => (
        <div key={color}>
          <Lightbox
            isOpen={activeLightbox === `blur-${color}`}
            variant="blur"
            color={color as ColorVariant}
            onClose={closeLightbox}
          >
            <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
              <Typography variant="h4" className="mb-4 capitalize">
                {color} Blur Lightbox
              </Typography>
              <Typography variant="body" className="mb-6">
                Blur lightbox with {color} color overlay tint.
              </Typography>
              <Button variant="solid" onClick={closeLightbox}>
                Close
              </Button>
            </div>
          </Lightbox>

          <Lightbox
            isOpen={activeLightbox === `blurred-image-${color}`}
            variant="blurred-image"
            imageSrc={sampleImages[1]}
            color={color as ColorVariant}
            onClose={closeLightbox}
          >
            <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
              <Typography variant="h4" className="mb-4 capitalize">
                {color} Blurred Image Lightbox
              </Typography>
              <Typography variant="body" className="mb-6">
                Blurred image backdrop with {color} color overlay.
              </Typography>
              <Button variant="solid" onClick={closeLightbox}>
                Close
              </Button>
            </div>
          </Lightbox>
        </div>
      ))}

      {/* Gallery Lightboxes */}
      {sampleImages.map((src, index) => (
        <Lightbox
          key={`gallery-${index}`}
          isOpen={activeLightbox === `gallery-${index}`}
          variant="solid"
          onClose={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg flex items-center justify-between">
              <div>
                <Typography variant="h5" className="text-white mb-1">
                  Sample Image {index + 1}
                </Typography>
                <Typography variant="small" className="text-gray-300">
                  High resolution image for demonstration
                </Typography>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Share className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Lightbox>
      ))}
    </div>
  )
}