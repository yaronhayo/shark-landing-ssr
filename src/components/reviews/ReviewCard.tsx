import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StarRating from './StarRating';
import { Review } from './types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="border border-gray-200 shadow-lg h-full transition-all duration-300 flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <StarRating rating={review.rating} />
          <span className="text-sm text-gray-500">{review.date}</span>
        </div>
        <p className="text-gray-700 mb-6 flex-1 leading-relaxed">"{review.text}"</p>
        <div className="flex items-center mt-auto">
          <Avatar>
            <AvatarImage src=" " alt={review.name} />
            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm text-gray-500">{review.location}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
