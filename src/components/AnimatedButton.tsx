import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold
    transition-all duration-200 ease-out
    transform-gpu will-change-transform
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:scale-95
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-blue-600 to-indigo-600 text-white
      hover:from-blue-700 hover:to-indigo-700
      hover:shadow-lg hover:shadow-blue-500/25
      focus:ring-blue-500
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-blue-700 before:to-indigo-700 before:opacity-0
      before:transition-opacity before:duration-200
      hover:before:opacity-100
    `,
    secondary: `
      bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white
      hover:bg-gray-200 dark:hover:bg-gray-700
      hover:shadow-md
      focus:ring-gray-500
    `,
    ghost: `
      text-gray-600 dark:text-gray-400
      hover:text-blue-600 dark:hover:text-blue-400
      hover:bg-gray-100 dark:hover:bg-gray-800
      focus:ring-gray-500
    `,
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizeClasses[size]} mr-2 transition-transform duration-200 ${isPressed ? 'scale-90' : ''}`} />
      )}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ml-2 transition-transform duration-200 ${isPressed ? 'scale-90' : ''}`} />
      )}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </>
  );

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </button>
  );
};

export default AnimatedButton;