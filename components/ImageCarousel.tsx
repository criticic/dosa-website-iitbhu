'use client';

import { useState, useEffect, useCallback } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  title?: string;
  aspectRatio?: 'square' | 'video' | 'banner';
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
}

const ImageCarousel = ({ 
  images, 
  title, 
  aspectRatio = 'video',
  autoRotate = true,
  rotationInterval = 2500 
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);
  
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    
    if (autoRotate && images.length > 1) {
      intervalId = setInterval(() => {
        goToNext();
      }, rotationInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoRotate, images.length, goToNext, rotationInterval]);

  const aspectRatioClass = 
    aspectRatio === 'square' ? 'aspect-square' : 
    aspectRatio === 'banner' ? 'aspect-[21/9]' :
    'aspect-video';

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md">
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 z-10">
          <h3 className="text-lg font-medium">{title}</h3>
        </div>
      )}
      
      <div className={`relative ${aspectRatioClass}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              unoptimized={image.startsWith('http')}
            />
          </div>
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Previous slide"
          >
            <PiCaretLeftBold className="w-6 h-6" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Next slide"
          >
            <PiCaretRightBold className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400 bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;


