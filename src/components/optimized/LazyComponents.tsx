import React, { Suspense, lazy } from 'react';
import LoadingSpinner from '../LoadingSpinner';

// Lazy-loaded components for code splitting and performance optimization
export const LazyCard = lazy(() => import('./Card'));
export const LazyModal = lazy(() => import('./Modal'));
export const LazyInput = lazy(() => import('./Input'));

// Higher-order component for lazy loading with suspense
interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LazyWrapper: React.FC<LazyWrapperProps> = ({ 
  children, 
  fallback = <LoadingSpinner size="md" className="p-8" /> 
}) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

// Pre-configured lazy components with optimized loading states
export const LazyCardWithSpinner: React.FC<React.ComponentProps<typeof LazyCard>> = (props) => (
  <LazyWrapper fallback={<div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse" />}>
    <LazyCard {...props} />
  </LazyWrapper>
);

export const LazyModalWithSpinner: React.FC<React.ComponentProps<typeof LazyModal>> = (props) => (
  <LazyWrapper fallback={null}>
    <LazyModal {...props} />
  </LazyWrapper>
);

export const LazyInputWithSpinner: React.FC<React.ComponentProps<typeof LazyInput>> = (props) => (
  <LazyWrapper fallback={<div className="h-12 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse" />}>
    <LazyInput {...props} />
  </LazyWrapper>
);