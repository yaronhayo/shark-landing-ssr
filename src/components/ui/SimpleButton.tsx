import React from 'react';
import clsx from 'clsx';

interface SimpleButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: 'default' | 'lg';
}

const SimpleButton = React.memo<SimpleButtonProps>(({
  children,
  className,
  onClick,
  href,
  size = 'default'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200";
  const sizeClasses = size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm';

  const allClasses = clsx(baseClasses, sizeClasses, className);

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {children}
    </button>
  );
});

SimpleButton.displayName = 'SimpleButton';

export default SimpleButton; 