"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from "next-themes"

import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

import CommonButton from '@/components/CommonButton';
import Logo from '@/components/Logo';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { ROUTES } from '@/constants/routes';

export default function Navbar() {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDotMenuOpen, setIsDotMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const { theme, setTheme } = useTheme();
  const t = useTranslations('navbar');
  const pathname = usePathname();
  const router = useRouter();
  const dotMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDotMenu = () => {
    setIsDotMenuOpen(!isDotMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle mounted state to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle hash scrolling when page loads
  useEffect(() => {
    const isOnLandingPage = pathname === '/' || pathname === '/en' || pathname === '/th';
    if (isOnLandingPage && window.location.hash) {
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

  // Handle click outside to close dot menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dotMenuRef.current && !dotMenuRef.current.contains(event.target as Node)) {
        setIsDotMenuOpen(false);
      }
    };

    if (isDotMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDotMenuOpen]);

  const scrollToElement = (elementId: string, block: 'center' | 'start' | 'end' = 'center') => {
    // Check if we're on the landing page (with or without locale prefix)
    const isOnLandingPage = pathname === '/' || pathname === '/en' || pathname === '/th';
    
    // If not on landing page, navigate to landing page with hash
    if (!isOnLandingPage) {
      // Extract current locale from pathname or default to 'en'
      const currentLocale = pathname.startsWith('/th') ? 'th' : 'en';
      router.push(`/${currentLocale}#${elementId}`);
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
    router.push(ROUTES.AUTH.LOGIN);
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleSignUp = () => {
    router.push(ROUTES.AUTH.REGISTER);
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };
  return (
    <nav 
      className="bg-white dark:bg-black/80 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50"
      style={{ backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)' }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo with brand name */}
          <div className="flex items-center">
            <Logo size="lg" />
          </div>

          {/* Center - Menu items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToElement('become-reviewer-button', 'center')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                {t('menu.forReviewers')}
              </button>
              <button
                onClick={() => scrollToElement('brands', 'center')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                {t('menu.forBrands')}
              </button>
              <button
                onClick={() => scrollToElement('how-it-works', 'center')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                {t('menu.howItWorks')}
              </button>
              <button
                onClick={() => scrollToElement('getting-started', 'center')}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-bold transition-colors duration-200 cursor-pointer"
              >
                {t('menu.gettingStarted')}
              </button>
            </div>
          </div>

          {/* Right side - Sign in button and 3-dot menu - Hidden on desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <CommonButton
              text={t('buttons.signIn')}
              variant="outline"
              size="sm"
              shape="rounded"
              onClick={handleSignIn}
              borderWidth="1"
              borderColor="#d1d5db"
              className="bg-white text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-emerald-500"
            />
            <CommonButton
              text={t('buttons.signUp')}
              variant="primary"
              size="sm"
              shape="rounded"
              onClick={handleSignUp}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
            />
            
            {/* 3-dot menu */}
            <div className="relative" ref={dotMenuRef}>
              <button
                onClick={toggleDotMenu}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                aria-label="More options"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5" />
              </button>
              
              {/* Dropdown menu */}
              {isDotMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg border border-gray-200 dark:border-gray-800 z-50">
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer "
                  >
                    <div className="flex items-center">
                      <FontAwesomeIcon 
                        icon={mounted && theme === 'light' ? faSun : faMoon} 
                        className="w-4 h-4 mr-2" 
                      />
                      
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {mounted ? (theme === 'system' ? 'auto' : theme) : 'light'}
                    </span>
                  </button>
                  
                  {/* Language Switcher */}
                  <LocaleSwitcher />

                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden mr-4">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-3 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-8 w-8"
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
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="space-y-1">
              <button
                onClick={() => scrollToElement('become-reviewer-button', 'center')}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 block px-4 py-3 text-base font-semibold transition-all duration-200 cursor-pointer w-full text-left rounded-lg border border-transparent hover:border-blue-100"
              >
                {t('menu.forReviewers')}
              </button>
              <button
                onClick={() => scrollToElement('brands', 'center')}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 block px-4 py-3 text-base font-semibold transition-all duration-200 cursor-pointer w-full text-left rounded-lg border border-transparent hover:border-blue-100"
              >
                {t('menu.forBrands')}
              </button>
              <button
                onClick={() => scrollToElement('how-it-works', 'center')}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 block px-4 py-3 text-base font-semibold transition-all duration-200 cursor-pointer w-full text-left rounded-lg border border-transparent hover:border-blue-100"
              >
                {t('menu.howItWorks')}
              </button>
              <button
                onClick={() => scrollToElement('getting-started', 'center')}
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 block px-4 py-3 text-base font-semibold transition-all duration-200 cursor-pointer w-full text-left rounded-lg border border-transparent hover:border-blue-100"
              >
                {t('menu.gettingStarted')}
              </button>
            </div>
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <CommonButton
                text={t('buttons.signIn')}
                variant="outline"
                size="md"
                shape="rounded"
                fullWidth
                onClick={handleSignIn}
                borderWidth="1"
                borderColor="#d1d5db"
                className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white hover:border-blue-500 font-semibold"
              />
              <CommonButton
                text={t('buttons.signUp')}
                variant="primary"
                size="md"
                shape="rounded"
                fullWidth
                onClick={handleSignUp}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 font-semibold"
              />
    
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
