import React, { useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import DirtyDuctsGallery from './air-quality/DirtyDuctsGallery';
import { CalendarDays } from 'lucide-react';
import useHashRouter from '@/hooks/useHashRouter';

const AirQualitySection = React.memo(() => {
  const { navigateToBookingForm } = useHashRouter();

  // Memoize static data to prevent re-renders
  const facts = [
    {
      stat: '90%',
      description: 'of your time is spent breathing indoor air'
    },
    {
      stat: '5x',
      description: 'Indoor air can be 5x dirtier than outside'
    },
    {
      stat: '70%',
      description: 'Allergens reduced after professional cleaning'
    },
    {
      stat: '50%',
      description: 'of home energy goes to heating & cooling'
    }
  ];

  const contaminants = [
    { emoji: '🧹', label: 'Dust & Debris', ariaLabel: 'Dust' },
    { emoji: '🦠', label: 'Mold & Bacteria', ariaLabel: 'Mold' },
    { emoji: '🌸', label: 'Allergens', ariaLabel: 'Allergens' },
    { emoji: '🔥', label: 'Fire Hazards', ariaLabel: 'Fire' }
  ];

  const healthRisks = [
    'Triggers allergies & asthma',
    'Causes headaches, fatigue, and poor sleep',
    'Worsens respiratory conditions'
  ];

  const openBookingModal = () => {
    navigateToBookingForm();
  };

  return (
    <section
      id="air-quality"
      className="section-padding relative bg-cover bg-center bg-no-repeat text-white will-change-scroll"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 800px'
      }}
    >
      <picture>
        <source 
          srcSet="/images/sharkductteam_small.webp" 
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source 
          srcSet="/images/sharkductteam_medium.webp" 
          media="(max-width: 1200px)"
          type="image/webp"
        />
        <img
          src="/images/sharkductteam.webp"
          alt="Shark Duct Cleaning Team"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
      {/* Optimized overlay with better backdrop blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-center max-w-6xl">
          <header className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Why Clean Air Ducts Matter</h2>
            <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Breathe easier, protect your loved ones, and lower your energy bills—starting with your home's air.
            </p>
            <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
          </header>

          {/* Optimized Stats Row with better responsive design */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-16">
            {facts.map((fact, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {fact.stat}
                </div>
                <div className="text-sm md:text-base text-gray-300 leading-tight">
                  {fact.description.split(' ').slice(0, 2).join(' ')}<br />
                  {fact.description.split(' ').slice(2).join(' ')}
                </div>
              </div>
            ))}
          </div>

          {/* What's Lurking - Enhanced with better spacing */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">What's Lurking in Your Ducts?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {contaminants.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 text-center shadow-xl backdrop-blur-md hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span 
                    role="img" 
                    aria-label={item.ariaLabel} 
                    className="text-4xl md:text-5xl mb-3 inline-block"
                  >
                    {item.emoji}
                  </span>
                  <span className="text-gray-100 font-medium block text-sm md:text-base">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Risks - Improved layout */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">Health Risks from Dirty Ducts</h3>
            <div className="bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl backdrop-blur-md max-w-4xl mx-auto">
              <ul className="space-y-4 text-gray-100">
                {healthRisks.map((risk, index) => (
                  <li key={index} className="flex items-center justify-center md:justify-start text-base md:text-lg">
                    <span className="text-shark-accent-light mr-4 text-xl">✓</span>
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced CTA with better styling */}
          <div className="text-center">
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center bg-gradient-to-r from-shark-accent to-shark-darkBlue hover:from-shark-darkBlue hover:to-shark-accent text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-shark-accent/25"
              aria-label="Book your free air quality inspection"
            >
              <CalendarDays className="mr-3 h-6 w-6" />
              Book Your Free Air Quality Check
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

AirQualitySection.displayName = 'AirQualitySection';

export default AirQualitySection;
