import React from 'react';
import StarRating from './StarRating';
import clsx from 'clsx';

interface RatingOverviewProps {
  rating: string;
  reviewCount: string;
  className?: string;
}

const RatingOverview: React.FC<RatingOverviewProps> = ({ rating, reviewCount, className }) => {
  const numericRating = parseFloat(rating);
  return (
    <div className={clsx("text-center", className)}>
      <div className="inline-flex items-center mb-6">
        <div className="text-4xl font-bold text-shark-blue mr-2">{rating}</div>
        <StarRating rating={numericRating} size="md" />
      </div>
      <p className="text-gray-600 mb-6">Based on {reviewCount} verified customer reviews</p>
    </div>
  );
};

export default RatingOverview;
