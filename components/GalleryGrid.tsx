'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No images found in the gallery.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer group bg-gray-100"
            onClick={() => setSelectedImage(image.path)}
          >
            <img
              src={image.path}
              alt={`Gallery image ${index + 1}`}
              className="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ 
                minWidth: '100%',
                minHeight: '100%',
                display: 'block'
              }}
              loading={index < 12 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none z-10" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <div className="relative w-full h-full max-h-[90vh]">
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full"
                unoptimized={true}
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}

