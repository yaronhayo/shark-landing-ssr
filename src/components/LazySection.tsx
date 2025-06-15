import React, { Suspense } from 'react';
import useLazySection from '@/hooks/useLazySection';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  className?: string;
  'data-section'?: string;
}

const DefaultSkeleton = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * LazySection wrapper that only renders children when they enter viewport
 * Optimizes performance by reducing initial bundle size and render time
 */
const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <DefaultSkeleton />, 
  rootMargin = '150px',
  className = '',
  'data-section': dataSection,
  ...props 
}) => {
  const { elementRef, isIntersecting } = useLazySection({ 
    rootMargin,
    triggerOnce: true 
  });

  return (
    <div 
      ref={elementRef} 
      className={className}
      data-section={dataSection}
      style={{ minHeight: isIntersecting ? 'auto' : '400px' }}
      {...props}
    >
      {isIntersecting ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazySection;
