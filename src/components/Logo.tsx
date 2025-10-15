import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield } from '@fortawesome/free-solid-svg-icons';
import { useBrand } from '@/contexts/BrandProvider';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Logo({ 
  size = 'md', 
  showText = true, 
  className = '',
  href = '/',
  onClick
}: LogoProps) {
  const { brandName } = useBrand();
  const sizeClasses = {
    sm: {
      icon: 'h-4 w-4',
      text: 'text-sm',
    },
    md: {
      icon: 'h-6 w-6',
      text: 'text-lg',
    },
    lg: {
      icon: 'h-8 w-8',
      text: 'text-xl',
    }
  };

  const currentSize = sizeClasses[size];

  const logoContent = (
    <div className={`flex items-center ${className}`}>
      <div className={`flex items-center justify-center ${currentSize.icon}`}>
        <FontAwesomeIcon 
          icon={faShield} 
          className={`${currentSize.icon} text-blue-600 dark:text-gray-100`}
        />
      </div>
      {showText && (
        <span className={`font-bold ${currentSize.text} text-blue-800 dark:text-gray-100`}>
          {brandName}
        </span>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
      >
        {logoContent}
      </button>
    );
  }

  return (
    <a 
      href={href} 
      className="hover:opacity-80 transition-opacity duration-200 cursor-pointer "
    >
      {logoContent}
    </a>
  );
}
