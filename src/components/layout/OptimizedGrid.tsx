import React, { forwardRef, HTMLAttributes } from 'react';
import clsx from 'clsx';

interface OptimizedGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns on different breakpoints */
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /** Gap size between grid items */
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether grid items should have equal heights */
  equalHeight?: boolean;
  /** Whether to center align grid items */
  centerItems?: boolean;
  /** Enable GPU acceleration for animations */
  accelerated?: boolean;
}

/**
 * Optimized responsive grid component
 * - Uses CSS Grid with responsive breakpoints
 * - Follows design system spacing
 * - Performance optimized with hardware acceleration
 * - Accessible with proper ARIA roles
 */
const OptimizedGrid = forwardRef<HTMLDivElement, OptimizedGridProps>(({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  equalHeight = false,
  centerItems = false,
  accelerated = true,
  className,
  ...props
}, ref) => {
  const gridClasses = clsx(
    'grid',
    {
      [`grid-cols-${cols.default}`]: cols.default,
      [`sm:grid-cols-${cols.sm}`]: cols.sm,
      [`md:grid-cols-${cols.md}`]: cols.md,
      [`lg:grid-cols-${cols.lg}`]: cols.lg,
      [`xl:grid-cols-${cols.xl}`]: cols.xl,
      'gap-4': gap === 'sm',
      'gap-6 md:gap-8': gap === 'md',
      'gap-8 md:gap-10': gap === 'lg',
      'gap-10 md:gap-12': gap === 'xl',
      'items-stretch': equalHeight,
      'place-items-center': centerItems,
      'transform-gpu': accelerated,
    },
    className
  );

  return (
    <div ref={ref} className={gridClasses} role="grid" {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          <div role="gridcell" className={equalHeight ? 'h-full' : undefined}>
            {child}
          </div>
        ) : null
      )}
    </div>
  );
});

OptimizedGrid.displayName = 'OptimizedGrid';

export default OptimizedGrid;