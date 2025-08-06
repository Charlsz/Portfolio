import React, { memo, useMemo } from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'filled' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  loading?: boolean;
}

// Memoized Card component with optimized re-rendering
const Card = memo<CardProps>(({
  children,
  variant = 'elevated',
  padding = 'medium',
  className = '',
  onClick,
  hoverable = false,
  loading = false,
}) => {
  // Memoize classes to prevent recalculation on every render
  const cardClasses = useMemo(() => {
    const baseClasses = `
      relative overflow-hidden transition-all duration-300 ease-out
      transform-gpu will-change-transform
      ${onClick || hoverable ? 'cursor-pointer' : ''}
    `;

    const variantClasses = {
      elevated: `
        bg-white dark:bg-gray-800 
        shadow-md hover:shadow-lg active:shadow-sm
        border border-gray-200/50 dark:border-gray-700/50
      `,
      filled: `
        bg-gray-50 dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
      `,
      outlined: `
        bg-transparent border-2 border-gray-300 dark:border-gray-600
        hover:border-gray-400 dark:hover:border-gray-500
      `,
    };

    const paddingClasses = {
      none: '',
      small: 'p-3',
      medium: 'p-6',
      large: 'p-8',
    };

    const hoverClasses = (onClick || hoverable) ? `
      hover:scale-[1.02] hover:-translate-y-1
      active:scale-[0.98] active:translate-y-0
    ` : '';

    return `
      ${baseClasses}
      ${variantClasses[variant]}
      ${paddingClasses[padding]}
      ${hoverClasses}
      ${className}
    `.trim().replace(/\s+/g, ' ');
  }, [variant, padding, className, onClick, hoverable]);

  // Memoize border radius classes
  const borderRadius = useMemo(() => 'rounded-2xl', []);

  if (loading) {
    return (
      <div className={`${cardClasses} ${borderRadius}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${cardClasses} ${borderRadius}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;