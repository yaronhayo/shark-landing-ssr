import React, { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import clsx from 'clsx';

// Union type for button or anchor props
type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button';
  href?: never;
};

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a';
  href: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsAnchor) & {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Loading state with spinner */
  loading?: boolean;
  /** Icon to display before text */
  leftIcon?: React.ReactNode;
  /** Icon to display after text */
  rightIcon?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
  /** Rounded variant */
  rounded?: boolean;
  /** Animation on hover */
  animated?: boolean;
  /** Disabled state */
  disabled?: boolean;
};

/**
 * Optimized button component following design system
 * - Supports both button and anchor elements
 * - Multiple variants and sizes
 * - Loading state with accessibility
 * - GPU-accelerated animations
 * - Proper focus management
 */
const OptimizedButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  rounded = false,
  animated = true,
  className,
  disabled,
  as = 'button',
  ...props
}, ref) => {
  const allClasses = clsx(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    {
      'transform-gpu will-change-transform': animated,
      'w-full': fullWidth,
      'rounded-full': rounded,
      'rounded-lg': !rounded,
    },
    {
      'bg-shark-blue text-white shadow-sm hover:bg-shark-darkBlue focus-visible:ring-shark-blue': variant === 'primary',
      'bg-white text-shark-blue border-2 border-shark-blue shadow-sm hover:bg-shark-blue hover:text-white focus-visible:ring-shark-blue': variant === 'secondary',
      'bg-shark-accent text-white shadow-sm hover:bg-shark-darkBlue focus-visible:ring-shark-accent': variant === 'accent',
      'text-shark-blue hover:bg-shark-gray focus-visible:ring-shark-blue': variant === 'ghost',
      'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus-visible:ring-gray-500': variant === 'outline',
      'hover:shadow-lg hover:-translate-y-0.5': ['primary', 'secondary', 'accent'].includes(variant) && animated,
      'hover:shadow-sm': ['ghost', 'outline'].includes(variant) && animated,
    },
    {
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-base': size === 'md',
      'px-6 py-3 text-lg': size === 'lg',
      'px-8 py-4 text-xl': size === 'xl',
    },
    className
  );

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : size === 'xl' ? 24 : 16;

  const buttonContent = (
    <>
      {loading && <Loader2 className="animate-spin" size={iconSize} aria-hidden="true" />}
      {!loading && leftIcon && <span className="flex-shrink-0" aria-hidden="true">{leftIcon}</span>}
      <span className={clsx({ 'opacity-70': loading })}>{children}</span>
      {!loading && rightIcon && <span className="flex-shrink-0" aria-hidden="true">{rightIcon}</span>}
    </>
  );

  if (as === 'a') {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={allClasses}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...anchorProps}
      >
        {buttonContent}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as ButtonAsButton;
  
  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      type={type}
      className={allClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-describedby={loading ? 'loading-description' : undefined}
      {...buttonProps}
    >
      {buttonContent}
      {loading && (
        <span id="loading-description" className="sr-only">
          Loading, please wait
        </span>
      )}
    </button>
  );
});

OptimizedButton.displayName = 'OptimizedButton';

export default OptimizedButton;
