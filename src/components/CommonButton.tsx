'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CommonButtonProps {
  // Content
  children?: React.ReactNode;
  text?: string;
  
  // Visual variants
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  // Shape and styling
  shape?: 'default' | 'rounded' | 'pill' | 'square';
  fullWidth?: boolean;
  
  // Icons
  leftIcon?: IconDefinition;
  rightIcon?: IconDefinition;
  iconOnly?: boolean;
  
  // States
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  
  // Interactive states
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  
  // Custom styling
  className?: string;
  style?: React.CSSProperties;
  
  // Button behavior
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  // Accessibility
  ariaLabel?: string;
  ariaDescribedBy?: string;
  role?: string;
  
  // Animation
  animate?: boolean;
  animationType?: 'bounce' | 'pulse' | 'scale' | 'slide' | 'fade';
  
  // Shadow and effects
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  gradient?: boolean;
  
  // Border
  borderWidth?: '0' | '1' | '2' | '4' | '8';
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double';
  
  // Custom colors (overrides variant colors)
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  text,
  variant = 'primary',
  size = 'md',
  shape = 'default',
  fullWidth = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  disabled = false,
  loading = false,
  loadingText = 'Loading...',
  hover = false,
  active = false,
  focus = false,
  className = '',
  style = {},
  type = 'button',
  onClick,
  ariaLabel,
  ariaDescribedBy,
  role,
  animate = true,
  animationType = 'scale',
  shadow = 'md',
  gradient = false,
  borderWidth = '0',
  borderStyle = 'solid',
  backgroundColor,
  textColor,
  borderColor,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };
  
  // Shape classes
  const shapeClasses = {
    default: 'rounded',
    rounded: 'rounded-lg',
    pill: 'rounded-full',
    square: 'rounded-none',
  };
  
  // Variant classes
  const variantClasses = {
    primary: {
      base: 'bg-blue-600 text-white border-blue-600',
      hover: 'hover:bg-blue-700 hover:border-blue-700',
      focus: 'focus:ring-blue-500',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
    secondary: {
      base: 'bg-gray-600 text-white border-gray-600',
      hover: 'hover:bg-gray-700 hover:border-gray-700',
      focus: 'focus:ring-gray-500',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
    outline: {
      base: 'bg-transparent text-blue-600 border-blue-600',
      hover: 'hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700',
      focus: 'focus:ring-blue-500',
      disabled: 'disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed',
    },
    ghost: {
      base: 'bg-transparent text-gray-700 border-transparent',
      hover: 'hover:bg-gray-100 hover:text-gray-900',
      focus: 'focus:ring-gray-500',
      disabled: 'disabled:text-gray-400 disabled:cursor-not-allowed',
    },
    danger: {
      base: 'bg-red-600 text-white border-red-600',
      hover: 'hover:bg-red-700 hover:border-red-700',
      focus: 'focus:ring-red-500',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
    success: {
      base: 'bg-green-600 text-white border-green-600',
      hover: 'hover:bg-green-700 hover:border-green-700',
      focus: 'focus:ring-green-500',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
    warning: {
      base: 'bg-yellow-500 text-white border-yellow-500',
      hover: 'hover:bg-yellow-600 hover:border-yellow-600',
      focus: 'focus:ring-yellow-400',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
    info: {
      base: 'bg-cyan-600 text-white border-cyan-600',
      hover: 'hover:bg-cyan-700 hover:border-cyan-700',
      focus: 'focus:ring-cyan-500',
      disabled: 'disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed',
    },
  };
  
  // Shadow classes
  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };
  
  // Animation classes
  const animationClasses = {
    bounce: animate ? 'hover:animate-bounce' : '',
    pulse: animate ? 'hover:animate-pulse' : '',
    scale: animate ? 'hover:scale-105 active:scale-95' : '',
    slide: animate ? 'hover:translate-x-1' : '',
    fade: animate ? 'hover:opacity-80' : '',
  };
  
  // Build classes
  const variantConfig = variantClasses[variant];
  const isDisabled = disabled || loading;
  
  const classes = [
    baseClasses,
    sizeClasses[size],
    shapeClasses[shape],
    variantConfig.base,
    !isDisabled && variantConfig.hover,
    variantConfig.focus,
    isDisabled && variantConfig.disabled,
    fullWidth && 'w-full',
    shadowClasses[shadow],
    gradient && 'bg-gradient-to-r from-blue-500 to-purple-600',
    animationClasses[animationType],
    className,
  ].filter(Boolean).join(' ');
  
  // Custom styles
  const customStyles: React.CSSProperties = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
    ...(textColor && { color: textColor }),
    ...(borderColor && { borderColor }),
    ...(borderWidth !== '0' && { 
      borderWidth: `${borderWidth}px`,
      borderStyle,
    }),
  };
  
  // Hover styles (applied via CSS-in-JS or data attributes)
  const hoverStyles = {
    ...(hoverBackgroundColor && { '--hover-bg': hoverBackgroundColor }),
    ...(hoverTextColor && { '--hover-text': hoverTextColor }),
    ...(hoverBorderColor && { '--hover-border': hoverBorderColor }),
  };
  
  // Content
  const buttonContent = () => {
    if (loading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          {loadingText}
        </>
      );
    }
    
    if (iconOnly && leftIcon) {
      return <FontAwesomeIcon icon={leftIcon} className="h-5 w-5" />;
    }
    
    return (
      <>
        {leftIcon && <FontAwesomeIcon icon={leftIcon} className="mr-2 h-4 w-4" />}
        {children || text}
        {rightIcon && <FontAwesomeIcon icon={rightIcon} className="ml-2 h-4 w-4" />}
      </>
    );
  };
  
  return (
    <button
      type={type}
      className={classes}
      style={{ ...customStyles, ...hoverStyles } as React.CSSProperties}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      role={role}
      data-hover={hover}
      data-active={active}
      data-focus={focus}
    >
      {buttonContent()}
    </button>
  );
};

export default CommonButton;
