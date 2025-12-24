'use client';

import { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false);
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowCredits(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to allow moving to tooltip
    timeoutRef.current = setTimeout(() => {
      setShowCredits(false);
    }, 100);
  };

  return (
    <footer className="bg-[#97437f] text-white py-4 w-full shadow-lg">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          <div>
            Made with ❤️ by{' '}
            <span 
              ref={wrapperRef}
              className="relative inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                href="https://www.copsiitbhu.co.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold hover:text-yellow-200 hover:underline transition-colors"
              >
                Club of Programmers (COPS)
              </a>
              {showCredits && (
                <div 
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-2 bg-gray-900 text-xs rounded-lg shadow-xl whitespace-nowrap z-50 border border-gray-700 pointer-events-auto"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-2">
                    <span>Developed by:</span>
                    <a 
                      href="https://github.com/criticic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-yellow-200 hover:text-yellow-100 hover:underline transition-colors"
                    >
                      Sagnik Mandal
                    </a>
                    <span>&</span>
                    <a 
                      href="https://github.com/Jayesh-Dev21" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-yellow-200 hover:text-yellow-100 hover:underline transition-colors"
                    >
                      Jayesh Krishnan Puri
                    </a>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
                </div>
              )}
            </span>
            {' '}under{' '}
            <a 
              href="https://www.sntciitbhu.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:text-yellow-200 hover:underline transition-colors"
            >
              Science and Technology Council (SNTC)
            </a>
            , IIT BHU
          </div>
        </div>
      </div>
    </footer>
  );
}

