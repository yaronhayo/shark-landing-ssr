import React from 'react';
import HeroHeader from './hero/HeroHeader';
import HeroForm from './hero/HeroForm';
import HeroBackground from './hero/HeroBackground';

const Hero = React.memo(() => {
  return (
    <section 
      className="hero-section relative bg-gradient-to-r from-shark-darkBlue to-shark-blue pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      aria-label="Hero section with booking form"
    >
      {/* Load background synchronously as it's a simple component */}
      <HeroBackground />
      <div className="hero-overlay absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Better balanced layout with content taking more visual weight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start min-h-[650px]">
          
          {/* Content area - takes 2/3 of space for better visual prominence */}
          <div className="lg:col-span-2 flex flex-col justify-center pr-0 lg:pr-8">
            {/* Priority load header content for LCP */}
            <HeroHeader />
          </div>
          
          {/* Form area - load synchronously as it's critical for interaction */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start items-start lg:mt-8">
            <div className="w-full max-w-md">
              <HeroForm />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
