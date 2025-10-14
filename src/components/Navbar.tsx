"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import CommonButton from './CommonButton';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle hash scrolling when page loads
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const elementId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, [pathname]);

  const scrollToElement = (elementId: string, block: 'start' | 'center' | 'end' = 'start') => {
    // If not on home page, navigate to landing page with hash
    if (pathname !== '/') {
      router.push(`/#${elementId}`);
      return;
    }
    
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleSignIn = () => {
    router.push('/login');
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };
  return (
    <nav 
      className="bg-white/80 shadow-sm border-b border-white/20 sticky top-0 z-50"
      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo with brand name */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="h-6 w-6 text-blue-600"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <span className="font-bold text-xl text-blue-800">TrustMe</span>
            </a>
          </div>

          {/* Center - Menu items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToElement('become-reviewer-button', 'center')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                For Reviewers
              </button>
              <button
                onClick={() => scrollToElement('brands', 'center')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                For Brands
              </button>
              <button
                onClick={() => scrollToElement('how-it-works', 'center')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToElement('getting-started', 'start')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                Getting started
              </button>
            </div>
          </div>

          {/* Right side - Sign in button - Hidden on desktop */}
          <div className="hidden md:flex items-center">
            <CommonButton
              text="Sign in"
              variant="outline"
              size="sm"
              shape="rounded"
              onClick={handleSignIn}
              borderWidth="1"
              borderColor="#d1d5db"
              className="bg-white text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-emerald-500"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            <button
              onClick={() => scrollToElement('become-reviewer-button', 'center')}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-bold transition-colors duration-200 cursor-pointer w-full text-left"
            >
              For Reviewers
            </button>
            <button
              onClick={() => scrollToElement('brands', 'start')}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-bold transition-colors duration-200 cursor-pointer w-full text-left"
            >
              For Brands
            </button>
            <button
              onClick={() => scrollToElement('how-it-works', 'start')}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-bold transition-colors duration-200 cursor-pointer w-full text-left"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToElement('getting-started', 'start')}
              className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-bold transition-colors duration-200 cursor-pointer w-full text-left"
            >
              Getting started
            </button>
            <div className="pt-2">
              <CommonButton
                text="Sign in"
                variant="outline"
                size="md"
                shape="rounded"
                fullWidth
                onClick={handleSignIn}
                borderWidth="1"
                borderColor="#d1d5db"
                className="hover:bg-gradient-to-r hover:from-emerald-500 hover:to-emerald-600 hover:text-white hover:border-emerald-500"
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </nav>
  );
}
