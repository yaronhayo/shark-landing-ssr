import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
  dividerClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  dividerClassName,
}) => {
  return (
    <>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shark-darkBlue",
          titleClassName
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed",
          subtitleClassName
        )}
      >
        {subtitle}
      </p>
      <div
        className={cn(
          "w-24 h-1 bg-shark-accent mx-auto rounded-full",
          dividerClassName
        )}
      ></div>
    </>
  );
};

export default SectionHeader;
