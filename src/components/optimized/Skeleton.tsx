import React, { memo } from 'react';

interface SkeletonProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  className?: string;
  animation?: 'pulse' | 'wave' | 'none';
}

// Memoized Skeleton component for loading states
const Skeleton = memo<SkeletonProps>(({
  variant = 'text',
  width,
  height,
  className = '',
  animation = 'pulse',
}) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';
  
  const variantClasses = {
    text: 'rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse', // Could be enhanced with custom wave animation
    none: '',
  };

  const defaultSizes = {
    text: { width: '100%', height: '1rem' },
    rectangular: { width: '100%', height: '8rem' },
    circular: { width: '3rem', height: '3rem' },
  };

  const finalWidth = width || defaultSizes[variant].width;
  const finalHeight = height || defaultSizes[variant].height;

  const style = {
    width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
    height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight,
  };

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${animationClasses[animation]}
        ${className}
      `}
      style={style}
      role="status"
      aria-label="Loading..."
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;