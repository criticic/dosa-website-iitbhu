'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { PiList, PiX, PiArrowSquareOut } from 'react-icons/pi';
import CouncilsSubNav from './CouncilsSubNav';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items mapping: label, path
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Councils', path: '/councils' },
    { label: 'People', path: '/people' },
    { label: 'News', path: '/news' },
    { label: 'Antiragging', path: '/antiragging' },
    { label: 'Gallery', path: '/gallery' },
    { 
      label: 'IIT(BHU)', 
      path: 'https://iitbhu.ac.in', 
      isExternal: true 
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if currently in a council section
  const isInCouncilSection = pathname?.startsWith('/councils') || false;

  return (
    <header>
      <nav className="bg-[#97437f] text-white shadow-lg">
        <div className="container mx-auto px-2 py-3">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            {/* Logo and Institute Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Link href="/">
                  <Image src="/iitbhu-logo.png" alt="IIT BHU Logo" width={64} height={64} className="h-14 md:h-16 w-auto" />
                </Link>
                <div>
                  <Link href="/">
                    <h1 className="text-lg md:text-xl font-bold hover:text-yellow-200">Dean, Students&apos; Affairs</h1>
                    <p className="text-xs md:text-sm">Indian Institute of Technology (BHU) Varanasi</p>
                  </Link>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <PiX className="w-6 h-6" />
                ) : (
                  <PiList className="w-6 h-6" />
                )}
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-1.5 xl:space-x-2">
                {navItems.map((item) => (
                  item.isExternal ? (
                    <a 
                      key={item.label}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-center w-full lg:w-auto hover:bg-[#833a6f] hover:text-yellow-200 rounded-sm transition-colors flex items-center justify-center"
                    >
                      {item.label}
                      <PiArrowSquareOut className="w-3 h-3 ml-1" />
                    </a>
                  ) : (
                    <Link 
                      key={item.label}
                      href={item.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className={`px-2 py-2 text-center w-full lg:w-auto hover:bg-[#833a6f] hover:text-yellow-200 rounded-sm transition-colors ${
                        (pathname === item.path || (item.path === '/councils' && isInCouncilSection))
                          ? 'font-bold border-b-2 border-yellow-300 bg-[#833a6f]' 
                          : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Show Council SubNav when in council section */}
      {isInCouncilSection && <CouncilsSubNav />}
    </header>
  );
}

