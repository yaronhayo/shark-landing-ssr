import React, { useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, CalendarDays, Check, Info, AlertTriangle } from 'lucide-react';
import useHashRouter from '@/hooks/useHashRouter';

const ServiceBenefits = React.memo(() => {
  const { navigateToBookingForm } = useHashRouter();

  // Memoize benefits data to prevent re-renders
  const ductCleaningBenefits = useMemo(() => [
    {
      title: "Healthier Indoor Environment",
      description: "Removal of dust, allergens, and contaminants leads to a 70% reduction in allergens after proper duct cleaning, helping everyone breathe easier.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Enhanced System Efficiency",
      description: "Clean ducts allow your HVAC system to operate more efficiently. Did you know 50% of energy used in homes goes to heating and cooling?",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Extended Equipment Life",
      description: "Regular cleaning reduces strain on your HVAC system, potentially extending its operational lifespan by years.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ], []);

  const dryerVentBenefits = useMemo(() => [
    {
      title: "Fire Prevention",
      description: "Lint buildup in dryer vents is a leading cause of household fires. Regular cleaning significantly reduces this risk.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      )
    },
    {
      title: "Energy Efficiency",
      description: "Clean dryer vents allow your dryer to operate more efficiently, reducing energy consumption and saving you money.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Extended Appliance Life",
      description: "Regular cleaning helps your dryer last longer by reducing strain on its components and preventing overheating.",
      icon: (
        <svg className="w-12 h-12 text-shark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ], []);

  const openBookingModal = useCallback(() => {
    navigateToBookingForm();
  }, [navigateToBookingForm]);

  return (
    <section 
      id="benefits"
      className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 1000px'
      }}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shark-darkBlue">
            Why Choose Professional Cleaning?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Our expert services deliver measurable benefits for your health, safety, and wallet.
          </p>
          <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Air Duct Cleaning Benefits */}
          <div className="group h-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 flex flex-col">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-shark-blue to-shark-accent p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-shark-blue">
                  Air Duct Cleaning Benefits
                </h3>
              </div>
              
              <div className="space-y-8 mb-8 flex-1">
                {ductCleaningBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="flex-shrink-0 mr-4 transform group-hover/item:scale-110 transition-transform duration-200">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-shark-darkBlue mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <button 
                  onClick={openBookingModal}
                  className="w-full bg-gradient-to-r from-shark-accent to-shark-darkBlue hover:from-shark-darkBlue hover:to-shark-accent text-white text-lg flex items-center justify-center px-6 py-4 rounded-xl shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  aria-label="Book air duct cleaning service"
                >
                  <CalendarDays className="mr-3 h-6 w-6" />
                  Claim Your $89 Air Duct Cleaning
                </button>
                
                <div className="bg-blue-50 rounded-xl p-4 mt-6 border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-shark-darkBlue mb-1">Did You Know?</p>
                      <p className="text-gray-700 text-sm">
                        Dirty ducts can reduce HVAC efficiency by up to 40% and worsen allergies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dryer Vent Cleaning Benefits */}
          <div className="group h-full">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-gray-100 flex flex-col">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-shark-blue">
                  Dryer Vent Cleaning Benefits
                </h3>
              </div>
              
              <div className="space-y-8 mb-8 flex-1">
                {dryerVentBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="flex-shrink-0 mr-4 transform group-hover/item:scale-110 transition-transform duration-200">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-shark-darkBlue mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-auto">
                <button 
                  onClick={openBookingModal}
                  className="w-full bg-gradient-to-r from-shark-accent to-shark-darkBlue hover:from-shark-darkBlue hover:to-shark-accent text-white text-lg flex items-center justify-center px-6 py-4 rounded-xl shadow-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  aria-label="Book dryer vent cleaning service"
                >
                  <CalendarDays className="mr-3 h-6 w-6" />
                  Claim Your $85 Dryer Vent Cleaning
                </button>
                
                <div className="bg-red-50 rounded-xl p-4 mt-6 border border-red-100">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-shark-darkBlue mb-1">Safety Alert</p>
                      <p className="text-gray-700 text-sm">
                        Clogged dryer vents are a leading cause of house fires in the US.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-shark-blue/5 to-shark-accent/5 rounded-2xl p-8 border border-shark-blue/10">
          <h3 className="text-2xl font-bold text-shark-darkBlue mb-4">
            Ready to breathe easier and save money?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get your free inspection and start enjoying cleaner, healthier air today.
          </p>
          <a href="tel:8778888431" className="inline-block">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-shark-blue to-shark-darkBlue hover:from-shark-darkBlue hover:to-shark-blue text-white text-lg shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 transform px-8 py-4 rounded-xl"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call For Free Inspection
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
});

ServiceBenefits.displayName = 'ServiceBenefits';

export default ServiceBenefits;
