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
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => setSelectedImage(image.path)}
          >
            <Image
              src={image.path}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              unoptimized={image.path.startsWith('http')}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
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
                unoptimized={selectedImage.startsWith('http')}
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

