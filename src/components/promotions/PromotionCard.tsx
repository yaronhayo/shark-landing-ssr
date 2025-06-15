import React from 'react';
import { PhoneCall, Ticket } from 'lucide-react';
import OptimizedButton from '@/components/ui/OptimizedButton';

interface Promotion {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  benefits: string[];
}

interface PromotionCardProps {
  promotion: Promotion;
  index: number;
}

const PromotionCard = ({ promotion, index }: PromotionCardProps) => {
  return (
    <div className="relative h-full">
      {/* Coupon Card */}
      <div 
        className="bg-gradient-to-r from-shark-blue to-shark-darkBlue rounded-2xl overflow-hidden shadow-lg flex flex-col h-full hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
      >
        {/* Limited Time Ribbon */}
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-shark-accent text-white px-4 py-1 rounded-bl-xl text-xs font-bold shadow-md tracking-wider uppercase">Limited Time</div>
        </div>
        {/* Ticket Icon */}
        <div className="absolute -top-6 left-6 bg-white rounded-full p-2 shadow-lg">
          <Ticket className="h-8 w-8 text-shark-accent" />
        </div>
        {/* Title */}
        <div className="pt-10 pb-4 px-6 text-center">
          <h3 className="text-2xl font-bold text-white tracking-wide mb-2 uppercase">{promotion.title}</h3>
        </div>
        {/* Price Row */}
        <div className="flex items-center justify-center gap-3 pb-2">
          <span className="text-4xl font-bold text-white">{promotion.price}</span>
          <span className="text-xl line-through text-red-400">{promotion.originalPrice}</span>
        </div>
        {/* Description */}
        <div className="px-6 text-center text-white/90 text-base mb-4 h-16 flex items-center justify-center">
          {promotion.description}
        </div>
        {/* Benefits List - Fixed height container */}
        <div className="px-8 mb-6 flex-1 flex items-start">
          <ul className="space-y-2 text-white/90 text-left list-disc w-full">
            {promotion.benefits.map((benefit, i) => (
              <li key={`${benefit}-${i}`} className="text-sm pl-2">{benefit}</li>
            ))}
          </ul>
        </div>
        {/* Dotted Border */}
        <div className="border-t border-dotted border-white/30 mx-6 mb-4"></div>
        {/* CTA Button */}
        <div className="px-6 pb-6 mt-auto">
          <OptimizedButton
            as="a"
            href="tel:8778888431"
            fullWidth
            variant="secondary"
            size="lg"
            className="font-bold"
            leftIcon={<PhoneCall size={20} />}
          >
            Claim Offer
          </OptimizedButton>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
