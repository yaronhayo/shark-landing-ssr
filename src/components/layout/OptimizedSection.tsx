import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface OptimizedSectionProps extends HTMLAttributes<HTMLElement> {
  /** Section variant for styling */
  variant?: 'default' | 'accent' | 'gradient';
  /** Whether to add standard section padding */
  padded?: boolean;
  /** Whether to add container max-width and centering */
  contained?: boolean;
  /** Enable content-visibility optimization for large sections */
  optimizeVisibility?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Section semantic ID for navigation */
  sectionId?: string;
}

/**
 * Optimized section component following 2025 best practices
 * - Uses semantic HTML5 section element
 * - Implements content-visibility for performance
 * - Follows design system spacing and colors
 * - Supports accessibility with proper ARIA attributes
 */
const OptimizedSection = forwardRef<HTMLElement, OptimizedSectionProps>(({
  children,
  variant = 'default',
  padded = true,
  contained = true,
  optimizeVisibility = true,
  backgroundColor,
  sectionId,
  className,
  style,
  ...props
}, ref) => {
  const baseClasses = clsx(
    {
      'content-visibility-auto': optimizeVisibility,
      'transform-gpu': true,
      'py-16 sm:py-24': padded,
      'bg-shark-gray': variant === 'accent',
      'bg-gradient-to-br from-shark-blue to-shark-darkBlue text-white': variant === 'gradient',
    },
    className
  );

  const sectionStyle = {
    ...style,
    ...(backgroundColor && { backgroundColor }),
  };

  const content = contained ? (
    <div className="container-responsive">
      {children}
    </div>
  ) : children;

  return (
    <section
      ref={ref}
      id={sectionId}
      className={baseClasses}
      style={sectionStyle}
      aria-labelledby={sectionId && `heading-${sectionId}`}
      {...props}
    >
      {content}
    </section>
  );
});

OptimizedSection.displayName = 'OptimizedSection';

export default OptimizedSection;
