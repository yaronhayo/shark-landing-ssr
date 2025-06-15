import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import ReviewDots from './reviews/ReviewDots';
import RatingOverview from './reviews/RatingOverview';
import { reviews } from './reviews/types';

const ReviewCard = lazy(() => import('./reviews/ReviewCard'));

const ReviewsCarousel = React.memo(() => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoize carousel options
  const carouselOpts = {
    align: "start" as const,
    loop: true,
    slidesToScroll: isMobile ? 1 : 2,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-rotate carousel
  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying && api) {
      interval = window.setInterval(() => {
        api.scrollNext();
      }, 4000); // 4 seconds pause between rotations
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, api]);

  // Memoize user interaction handlers
  const handleUserInteraction = useCallback(() => {
    setIsAutoPlaying(false);
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
    handleUserInteraction();
  }, [api, handleUserInteraction]);

  const handleMouseEnter = useCallback(() => handleUserInteraction(), [handleUserInteraction]);
  const handleMouseLeave = useCallback(() => setIsAutoPlaying(true), []);
  const handleTouchStart = useCallback(() => handleUserInteraction(), [handleUserInteraction]);
  const handleTouchEnd = useCallback(() => {
    setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  return (
    <section 
      id="reviews" 
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 1000px'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-shark-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-shark-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shark-darkBlue">
            5-Star Reviews from Austin Homeowners
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            See why thousands trust Shark Duct Cleaning for healthier, safer homes.
          </p>
          <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
        </header>

        <div className="relative">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={carouselOpts}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem 
                  key={`${review.name}-${index}`}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Suspense fallback={
                    <div className="h-80 bg-white rounded-xl shadow-md border animate-pulse">
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-3 bg-gray-200 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
                          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  }>
                    <ReviewCard review={review} />
                  </Suspense>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced Navigation Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious 
                onClick={handleUserInteraction}
                className="static translate-y-0 bg-shark-blue text-white hover:bg-shark-darkBlue hover:text-white transition-all duration-300 hover:scale-110 shadow-lg border-0 w-12 h-12" 
              />
              <CarouselNext 
                onClick={handleUserInteraction}
                className="static translate-y-0 bg-shark-blue text-white hover:bg-shark-darkBlue hover:text-white transition-all duration-300 hover:scale-110 shadow-lg border-0 w-12 h-12" 
              />
            </div>
          </Carousel>
          
          <div className="mt-8">
            <ReviewDots 
              total={reviews.length} 
              current={currentIndex} 
              onSelect={handleDotClick} 
            />
          </div>
        </div>
        
        {/* Enhanced Rating Overview */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <RatingOverview rating="5.0" reviewCount="2,600+" />
        </div>
      </div>
    </section>
  );
});

ReviewsCarousel.displayName = 'ReviewsCarousel';

export default ReviewsCarousel;
