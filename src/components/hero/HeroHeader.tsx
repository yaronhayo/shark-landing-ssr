import React, { useCallback } from 'react';
import { Phone, CalendarDays } from 'lucide-react';
import { useHashRouter } from '@/hooks/useHashRouter';
import HeroTrustBadges from './HeroTrustBadges';
import OptimizedButton from '../ui/OptimizedButton';

const HeroHeader = React.memo(() => {
  const { navigateToBookingForm } = useHashRouter();

  const openBookingModal = useCallback(() => {
    navigateToBookingForm();
  }, [navigateToBookingForm]);

  return (
    <>
      {/* Critical above-the-fold content - renders immediately with no dependencies */}
      <div className="text-white">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          Austin's Trusted HVAC, Air Duct & Dryer Vent <span className="accent-text font-extrabold text-shark-accent">Cleaning Experts</span>
        </h1>
        {/* LCP element - optimized for immediate rendering */}
        <p className="hero-subtitle text-xl md:text-2xl mb-8 text-white leading-relaxed">
          Protect your family's health and comfort. Remove dust, allergens, and hidden dangers from your home's air. For a limited time only we offer <span className="text-white font-bold">$89 HVAC duct & vent cleaning</span>. Get yours today!
        </p>
      </div>
      
      {/* Interactive elements - load immediately as they are critical for above-the-fold UX */}
      <div className="text-white">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <OptimizedButton 
            size="lg"
            onClick={openBookingModal}
            variant="accent"
            animated
            fullWidth
            className="sm:w-auto"
            leftIcon={<CalendarDays size={20} />}
          >
            Book My Free Air Assessment
          </OptimizedButton>
          <OptimizedButton 
            size="lg"
            as="a"
            href="tel:8778888431"
            variant="secondary"
            animated
            fullWidth
            className="sm:w-auto border-shark-blue text-shark-blue bg-white hover:bg-shark-blue hover:text-white hover:border-shark-blue focus-visible:ring-shark-blue"
            leftIcon={<Phone size={20} />}
          >
            Call Now for Fast Relief
          </OptimizedButton>
        </div>
        
        <HeroTrustBadges />
      </div>
    </>
  );
});

HeroHeader.displayName = 'HeroHeader';

export default HeroHeader;
