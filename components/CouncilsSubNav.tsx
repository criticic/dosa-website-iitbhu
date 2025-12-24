'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';

// Council submenu items
const councilItems = [
  { label: "Students' Parliament", path: '/councils/parliament' },
  { label: 'Cultural Council', path: '/councils/cultural' },
  { label: 'Film and Media Council', path: '/councils/fmc' },
  { label: 'Games and Sports Council', path: '/councils/gnsc' },
  { label: 'Science and Technology Council', path: '/councils/sntc' },
  { label: 'Social Service Council', path: '/councils/ssc' }
];

export default function CouncilsSubNav() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find the current active council (if any)
  const currentCouncil = councilItems.find(item => item.path === pathname);
  
  return (
    <div className="bg-[#833a6f] shadow-md">
      <div className="container mx-auto px-2 py-2">
        {/* Mobile View - Collapsible Menu */}
        <div className="md:hidden">
          <div 
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="text-white font-medium">
              {currentCouncil ? currentCouncil.label : "Council Navigation"}
            </div>
            <div className="text-white p-1 rounded hover:bg-[#723261]">
              {isExpanded ? <PiCaretUp className="w-5 h-5" /> : <PiCaretDown className="w-5 h-5" />}
            </div>
          </div>
          
          {/* Collapsible Menu Items */}
          {isExpanded && (
            <div className="mt-2 space-y-1 border-t border-[#723261] pt-2">
              {councilItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setIsExpanded(false)}
                  className={`px-3 py-2 text-white hover:bg-[#723261] hover:text-yellow-100 rounded transition-colors flex items-center ${
                    pathname === item.path ? 'bg-[#723261] font-medium text-yellow-100' : ''
                  }`}
                >
                  <div className="w-1 h-4 bg-yellow-200 rounded-full mr-2"></div>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {councilItems.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`px-3 py-1.5 text-white hover:bg-[#723261] hover:text-yellow-100 rounded transition-colors flex items-center ${
                  pathname === item.path ? 'bg-[#723261] font-medium text-yellow-100' : ''
                }`}
              >
                <div className="w-1 h-4 bg-yellow-200 rounded-full mr-2"></div>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

