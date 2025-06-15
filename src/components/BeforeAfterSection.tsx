import React, { useMemo, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, CalendarDays } from 'lucide-react';
import useHashRouter from '@/hooks/useHashRouter';

const BeforeAfterSection = React.memo(() => {
  const { navigateToBookingForm } = useHashRouter();

  // Memoize examples data to prevent re-renders
  const examples = [
    {
      type: 'Residential',
      image: "/images/beforeafterresidential.webp",
      alt: "Residential air duct cleaning before and after results",
      description: "Dramatic improvement in home air duct cleanliness"
    },
    {
      type: 'Commercial', 
      image: "/images/beforeaftercommercial.webp",
      alt: "Commercial air duct cleaning before and after results",
      description: "Professional grade cleaning for business environments"
    }
  ];

  const openBookingModal = () => {
    navigateToBookingForm();
  };

  return (
    <section 
      className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 600px'
      }}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shark-darkBlue">Real Results: Before & After</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            See the dramatic difference for both homes and businesses in Austin.
          </p>
          <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full mb-8"></div>
          
          {/* Enhanced Verified Results Badge */}
          <div className="flex items-center justify-center mb-2">
            <span className="inline-flex items-center bg-gradient-to-r from-shark-blue/10 to-shark-accent/10 text-shark-darkBlue px-6 py-2 rounded-full font-semibold text-sm shadow-md border border-shark-blue/20">
              <svg className="w-5 h-5 mr-2 text-shark-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Verified Results — Actual Customer Photos
            </span>
          </div>
        </header>

        {/* Optimized Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {examples.map((example, index) => (
            <Card key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-shark-blue mb-6 flex items-center justify-center">
                    {example.type === 'Residential' && (
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {example.type === 'Commercial' && (
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {example.type}
                  </h3>
                  
                  <div className="relative group">
                    <AspectRatio ratio={16/10} className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={example.image} 
                        alt={example.alt}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        srcSet={
                          `${example.image.replace(".webp", "_small.webp")} 480w,
                           ${example.image.replace(".webp", "_medium.webp")} 800w,
                           ${example.image} 1200w`
                        }
                      />
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">
                          {example.description}
                        </p>
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-gradient-to-r from-shark-blue/5 to-shark-accent/5 rounded-2xl p-8 border border-shark-blue/10">
          <h3 className="text-xl font-semibold text-shark-darkBlue mb-4">
            Ready to See These Results in Your Home?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get your free inspection and discover what's hiding in your ducts.
          </p>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center justify-center bg-gradient-to-r from-shark-accent to-shark-darkBlue hover:from-shark-darkBlue hover:to-shark-accent text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:shadow-shark-accent/25"
            aria-label="Book your free duct cleaning inspection"
          >
            <CalendarDays className="mr-3 h-6 w-6" />
            Book Your Free Inspection
          </button>
        </div>
      </div>
    </section>
  );
});

BeforeAfterSection.displayName = 'BeforeAfterSection';

export default BeforeAfterSection;
