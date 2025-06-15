import React from 'react';
import clsx from 'clsx';

interface ReviewDotsProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}

const ReviewDots: React.FC<ReviewDotsProps> = ({ total, current, onSelect }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={clsx(
            'w-6 h-6 p-2 mx-1 rounded-full transition-colors',
            {
              'bg-shark-blue': index === current,
              'bg-gray-300': index !== current,
            }
          )}
          aria-label={`Go to review ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ReviewDots;
