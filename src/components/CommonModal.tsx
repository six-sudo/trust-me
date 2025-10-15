'use client';

import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faInfoCircle, faExclamationTriangle, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

export interface CommonModalProps {
  // Core functionality
  isOpen: boolean;
  onClose: () => void;
  
  // Content
  title?: string;
  children?: React.ReactNode;
  description?: string;
  
  // Visual variants
  variant?: 'default' | 'info' | 'warning' | 'success' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  
  // Header customization
  showHeader?: boolean;
  showCloseButton?: boolean;
  headerIcon?: IconDefinition;
  customHeader?: React.ReactNode;
  
  // Footer customization
  showFooter?: boolean;
  footerContent?: React.ReactNode;
  
  // Actions
  primaryAction?: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
    loading?: boolean;
    disabled?: boolean;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
    loading?: boolean;
    disabled?: boolean;
  };
  
  // Behavior
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  preventBodyScroll?: boolean;
  
  // Styling
  className?: string;
  overlayClassName?: string;
  contentClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  
  // Animation
  animationType?: 'fade' | 'slide' | 'scale' | 'bounce';
  animationDuration?: 'fast' | 'normal' | 'slow';
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  
  // Custom styling
  overlayOpacity?: number;
  maxHeight?: string;
  maxWidth?: string;
  
  // Advanced features
  portalTarget?: string;
  zIndex?: number;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  description,
  variant = 'default',
  size = 'md',
  showHeader = true,
  showCloseButton = true,
  headerIcon,
  customHeader,
  showFooter = false,
  footerContent,
  primaryAction,
  secondaryAction,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  preventBodyScroll = true,
  className = '',
  overlayClassName = '',
  contentClassName = '',
  headerClassName = '',
  bodyClassName = '',
  footerClassName = '',
  animationType = 'fade',
  animationDuration = 'normal',
  ariaLabel,
  ariaDescribedBy,
  role = 'dialog',
  overlayOpacity = 0.5,
  maxHeight,
  maxWidth,
  portalTarget,
  zIndex = 50,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Variant configurations
  const variantConfig = {
    default: {
      icon: null,
      iconColor: 'text-gray-600 dark:text-gray-300',
      headerBg: 'bg-white dark:bg-gray-800',
      borderColor: 'border-gray-200 dark:border-gray-700',
    },
    info: {
      icon: faInfoCircle,
      iconColor: 'text-blue-600 dark:text-blue-400',
      headerBg: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    warning: {
      icon: faExclamationTriangle,
      iconColor: 'text-yellow-600 dark:text-yellow-400',
      headerBg: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
    },
    success: {
      icon: faCheckCircle,
      iconColor: 'text-green-600 dark:text-green-400',
      headerBg: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
    },
    error: {
      icon: faExclamationCircle,
      iconColor: 'text-red-600 dark:text-red-400',
      headerBg: 'bg-red-50 dark:bg-red-900/20',
      borderColor: 'border-red-200 dark:border-red-800',
    },
  };

  // Size configurations
  const sizeConfig = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  // Animation configurations
  const animationConfig = {
    fade: {
      enter: 'opacity-0',
      enterActive: 'opacity-100 transition-opacity',
      exit: 'opacity-100',
      exitActive: 'opacity-0 transition-opacity',
    },
    slide: {
      enter: 'opacity-0 transform translate-y-4',
      enterActive: 'opacity-100 transform translate-y-0 transition-all',
      exit: 'opacity-100 transform translate-y-0',
      exitActive: 'opacity-0 transform translate-y-4 transition-all',
    },
    scale: {
      enter: 'opacity-0 transform scale-95',
      enterActive: 'opacity-100 transform scale-100 transition-all',
      exit: 'opacity-100 transform scale-100',
      exitActive: 'opacity-0 transform scale-95 transition-all',
    },
    bounce: {
      enter: 'opacity-0 transform scale-75',
      enterActive: 'opacity-100 transform scale-100 transition-all',
      exit: 'opacity-100 transform scale-100',
      exitActive: 'opacity-0 transform scale-75 transition-all',
    },
  };

  // Duration configurations
  const durationConfig = {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, closeOnEscape, onClose]);

  // Handle body scroll
  useEffect(() => {
    if (preventBodyScroll && isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, preventBodyScroll]);

  // Focus management
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // Get variant configuration
  const currentVariant = variantConfig[variant];
  const currentSize = sizeConfig[size];
  const currentAnimation = animationConfig[animationType];
  const currentDuration = durationConfig[animationDuration];

  // Build classes
  const overlayClasses = [
    'fixed inset-0 z-50 flex items-center justify-center p-4',
    'bg-black/50 dark:bg-black/70',
    currentAnimation.enter,
    isOpen && currentAnimation.enterActive,
    currentDuration,
    overlayClassName,
  ].filter(Boolean).join(' ');

  const modalClasses = [
    'relative w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl',
    'border border-gray-200 dark:border-gray-700',
    'max-h-[90vh]', // Limit modal height to 90% of viewport
    currentSize,
    maxHeight && `max-h-[${maxHeight}]`,
    maxWidth && `max-w-[${maxWidth}]`,
    currentAnimation.enter,
    isOpen && currentAnimation.enterActive,
    currentDuration,
    className,
  ].filter(Boolean).join(' ');

  const contentClasses = [
    'flex flex-col h-full max-h-full overflow-hidden',
    contentClassName,
  ].filter(Boolean).join(' ');

  const headerClasses = [
    'flex items-center justify-between p-6 pb-4 flex-shrink-0',
    currentVariant.headerBg,
    currentVariant.borderColor,
    showHeader && 'border-b',
    headerClassName,
  ].filter(Boolean).join(' ');

  const bodyClasses = [
    'flex-1 p-6 overflow-y-auto min-h-0',
    bodyClassName,
  ].filter(Boolean).join(' ');

  const footerClasses = [
    'flex items-center justify-end gap-3 p-6 pt-4 flex-shrink-0',
    'border-t border-gray-200 dark:border-gray-700',
    'bg-gray-50 dark:bg-gray-900/50',
    footerClassName,
  ].filter(Boolean).join(' ');

  // Render header
  const renderHeader = () => {
    if (!showHeader) return null;

    if (customHeader) {
      return <div className={headerClasses}>{customHeader}</div>;
    }

    return (
      <div className={headerClasses}>
        <div className="flex items-center gap-3">
          {currentVariant.icon && (
            <FontAwesomeIcon
              icon={headerIcon || currentVariant.icon}
              className={`h-5 w-5 ${currentVariant.iconColor}`}
            />
          )}
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
            />
          </button>
        )}
      </div>
    );
  };

  // Render footer
  const renderFooter = () => {
    if (!showFooter && !primaryAction && !secondaryAction && !footerContent) {
      return null;
    }

    if (footerContent) {
      return <div className={footerClasses}>{footerContent}</div>;
    }

    return (
      <div className={footerClasses}>
        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            disabled={secondaryAction.disabled || secondaryAction.loading}
            className={`
              px-4 py-2 text-sm font-medium rounded-lg transition-colors
              ${secondaryAction.variant === 'outline' 
                ? 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {secondaryAction.loading ? 'Loading...' : secondaryAction.text}
          </button>
        )}
        {primaryAction && (
          <button
            onClick={primaryAction.onClick}
            disabled={primaryAction.disabled || primaryAction.loading}
            className={`
              px-4 py-2 text-sm font-medium rounded-lg transition-colors
              ${primaryAction.variant === 'danger'
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : primaryAction.variant === 'success'
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : primaryAction.variant === 'warning'
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : primaryAction.variant === 'info'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            {primaryAction.loading ? 'Loading...' : primaryAction.text}
          </button>
        )}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className={overlayClasses}
      style={{ zIndex }}
      onClick={handleOverlayClick}
      role={role}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={modalClasses}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={contentClasses}>
          {renderHeader()}
          <div className={bodyClasses}>
            {children}
          </div>
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
