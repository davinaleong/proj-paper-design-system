import { useState } from "react"
import { Lightbox } from "../../components/overlays"
import { Button } from "../../components/forms"
import { Typography } from "../../components/core"
import { Paper } from "../../components/core"
import { X, ZoomIn, Download, Share } from "lucide-react"

export function LightboxShowcase() {
  const [activeLightbox, setActiveLightbox] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<string[]>([])

  const openLightbox = (type: string) => setActiveLightbox(type)
  const closeLightbox = () => setActiveLightbox(null)

  // Sample images for demonstration
  const sampleImages = [
    "/0001.jpg",
    "/0002.jpg", 
    "/0003.jpg",
  ]

  // Consistent fallback image handler that updates loaded images state
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const fallbackSrc = `https://via.placeholder.com/800x600/e5e7eb/9ca3af?text=Image+${index + 1}+Not+Found`
    const target = e.currentTarget
    if (target) {
      target.src = fallbackSrc
      
      // Update loaded images state to ensure consistency
      setLoadedImages(prev => {
        const newImages = [...prev]
        newImages[index] = fallbackSrc
        return newImages
      })
    }
  }

  // Handle successful image loads
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    const target = e.currentTarget
    if (target && target.src) {
      setLoadedImages(prev => {
        const newImages = [...prev]
        newImages[index] = target.src
        return newImages
      })
    }
  }

  // Get the actual loaded image source for consistency between thumbnail and lightbox
  const getImageSrc = (index: number) => {
    return loadedImages[index] || sampleImages[index]
  }

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
        <Typography variant="body" color="muted" className="mb-4">
          Click on any image to view it in the lightbox gallery. These are local images from the public folder.
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sampleImages.map((_, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(`gallery-${index}`)}
            >
              <img 
                src={getImageSrc(index)} 
                alt={`Sample ${index + 1}`}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-110"
                onLoad={(e) => handleImageLoad(e, index)}
                onError={(e) => handleImageError(e, index)}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Image {index + 1}
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
      {sampleImages.map((_, index) => (
        <Lightbox
          key={`gallery-${index}`}
          isOpen={activeLightbox === `gallery-${index}`}
          variant="black"
          onClose={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-[90vh] flex items-center justify-center">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              title="Close (Esc)"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              <img 
                src={getImageSrc(index)} 
                alt={`Gallery image ${index + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onLoad={(e) => handleImageLoad(e, index)}
                onError={(e) => handleImageError(e, index)}
              />
              
              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {index + 1} / {sampleImages.length}
              </div>
            </div>
            
            {/* Bottom info bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg flex items-center justify-between backdrop-blur-sm">
              <div>
                <Typography variant="h5" className="text-white mb-1">
                  Local Image {String(index + 1).padStart(4, '0')}.jpg
                </Typography>
                <Typography variant="small" className="text-gray-300">
                  Local image from public folder
                </Typography>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" title="Download">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" title="Share">
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