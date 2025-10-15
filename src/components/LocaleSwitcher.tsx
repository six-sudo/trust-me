"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

interface LocaleSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

export default function LocaleSwitcher({ className = "", isMobile = false }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const hookLocale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fallback method to detect locale from URL
  const getLocaleFromPath = () => {
    const segments = pathname.split('/');
    const firstSegment = segments[1];
    return ['en', 'th'].includes(firstSegment) ? firstSegment : 'en';
  };

  const locale = hookLocale || getLocaleFromPath();

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const switchLanguage = (newLocale: string) => {
    // Don't switch if already on the same locale
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    
    // Get the pathname without any locale prefixes
    let pathWithoutLocale = pathname;
    
    // Remove all locale prefixes from the path
    const localePattern = /^\/(th|en)(?=\/|$)/;
    pathWithoutLocale = pathWithoutLocale.replace(localePattern, '');
    
    // If the path is empty or just a slash, make it empty
    if (pathWithoutLocale === '/' || pathWithoutLocale === '') {
      pathWithoutLocale = '';
    }
    
    // Build the new path
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    // Use window.location for a clean navigation
    window.location.href = newPath;
    setIsOpen(false);
  };

  const baseClasses = isMobile 
    ? "flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-pointer rounded-lg border border-transparent hover:border-blue-100"
    : "flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer";

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={baseClasses}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGlobe} className="w-4 h-4 mr-2" />
        </div>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-2">
            {currentLanguage.name}
          </span>
         
        </div>
      </button>

      {isOpen && (
        <div className={`absolute ${isMobile ? 'top-full left-0 right-0 mt-1' : 'right-0 mt-2 w-48'} bg-white rounded-md shadow-lg border border-gray-200 z-50`}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 cursor-pointer ${
                language.code === locale ? 'bg-blue-50 text-blue-700' : ''
              }`}
            >
              <div className="flex items-center">
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </div>
              {language.code === locale && (
                <FontAwesomeIcon icon={faCheck} className="w-3 h-3 text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
