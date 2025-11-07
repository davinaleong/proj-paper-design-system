import { useState } from "react"
import { Lightbox } from "../../components/overlays"
import { Button } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import { X, ZoomIn, Download, Share } from "lucide-react"

export function LightboxShowcase() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null)

  const openLightbox = (type: string) => setActiveLightbox(type)
  const closeLightbox = () => setActiveLightbox(null)

  // Sample images for demonstration
  const sampleImages = [
    "/wireframe.jpg",
    "/wireframe.jpg", 
    "/wireframe.jpg",
  ]

  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h2" className="mb-2">
          Lightbox
        </Typography>
        <Typography variant="body" color="muted">
          Modal overlay for displaying images and content with black, blurred, and blurred-image backdrop variants.
        </Typography>
      </div>

      {/* Basic Variants */}
      <Paper className="p-6">
        <Typography variant="h3" className="mb-4">Backdrop Variants</Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Typography variant="h5">Black Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openLightbox('black')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Black Lightbox
            </Button>
          </div>
          
          <div className="space-y-2">
            <Typography variant="h5">Blurred Backdrop</Typography>
            <Button 
              variant="solid" 
              onClick={() => openLightbox('blurred')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Show Blurred Lightbox
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
        isOpen={activeLightbox === 'black'}
        variant="black"
        onClose={closeLightbox}
      >
        <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
          <Typography variant="h4" className="mb-4">Black Lightbox</Typography>
          <Typography variant="body" className="mb-6">
            Traditional black backdrop for optimal content visibility.
          </Typography>
          <Button variant="solid" onClick={closeLightbox}>
            Close
          </Button>
        </div>
      </Lightbox>

      <Lightbox
        isOpen={activeLightbox === 'blurred'}
        variant="blurred"
        onClose={closeLightbox}
      >
        <div className="bg-white dark:bg-stone-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center relative">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800"
          >
            <X className="w-5 h-5" />
          </button>
          <Typography variant="h4" className="mb-4">Blurred Lightbox</Typography>
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

      {/* Gallery Lightboxes */}
      {sampleImages.map((src, index) => (
        <Lightbox
          key={`gallery-${index}`}
          isOpen={activeLightbox === `gallery-${index}`}
          variant="black"
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