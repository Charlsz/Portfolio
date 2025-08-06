import React, { memo, forwardRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'surface';
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  'aria-label'?: string;
}

// Memoized component to prevent unnecessary re-renders
const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'filled',
  size = 'medium',
  color = 'primary',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  // Base classes following Material Design 3
  const baseClasses = `
    relative inline-flex items-center justify-center font-medium
    transition-all duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none
    active:scale-95 transform-gpu
  `;

  // Variant-specific classes with Material Design 3 color tokens
  const variantClasses = {
    filled: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-md hover:shadow-lg',
      tertiary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg',
      error: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg',
      surface: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500 shadow-md hover:shadow-lg',
    },
    outlined: {
      primary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 focus:ring-blue-500',
      secondary: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 focus:ring-purple-500',
      tertiary: 'border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 focus:ring-green-500',
      error: 'border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 focus:ring-red-500',
      surface: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500',
    },
    text: {
      primary: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950 focus:ring-blue-500',
      secondary: 'text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950 focus:ring-purple-500',
      tertiary: 'text-green-600 hover:bg-green-50 dark:hover:bg-green-950 focus:ring-green-500',
      error: 'text-red-600 hover:bg-red-50 dark:hover:bg-red-950 focus:ring-red-500',
      surface: 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500',
    },
    elevated: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
      secondary: 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 shadow-lg hover:shadow-xl',
      tertiary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl',
      error: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-lg hover:shadow-xl',
      surface: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    },
    tonal: {
      primary: 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 focus:ring-blue-500',
      secondary: 'bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 focus:ring-purple-500',
      tertiary: 'bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 focus:ring-green-500',
      error: 'bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800 focus:ring-red-500',
      surface: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:ring-gray-500',
    },
  };

  // Size classes following Material Design 3 specifications
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm rounded-lg min-h-[32px]',
    medium: 'px-6 py-2.5 text-base rounded-xl min-h-[40px]',
    large: 'px-8 py-3.5 text-lg rounded-2xl min-h-[48px]',
  };

  // Icon size classes
  const iconSizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant][color]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      aria-label={ariaLabel}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Content container with opacity control for loading state */}
      <div className={`flex items-center justify-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {Icon && iconPosition === 'left' && (
          <Icon className={`${iconSizeClasses[size]} transition-transform duration-200`} />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className={`${iconSizeClasses[size]} transition-transform duration-200`} />
        )}
      </div>
    </button>
  );
}));

Button.displayName = 'Button';

export default Button;