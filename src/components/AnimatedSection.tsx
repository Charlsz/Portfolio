import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 600,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClasses = {
    fadeIn: isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8',
    slideUp: isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-12',
    slideLeft: isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-12',
    slideRight: isVisible ? 'animate-slide-right' : 'opacity-0 -translate-x-12',
    scaleIn: isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ease-out ${animationClasses[animation]} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;