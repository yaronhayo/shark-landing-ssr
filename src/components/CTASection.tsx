import React from 'react';
import OptimizedButton from '@/components/ui/OptimizedButton';
import { Phone, CalendarDays } from 'lucide-react';
import useHashRouter from '@/hooks/useHashRouter';

const CTASection = React.memo(() => {
  const { navigateToBookingForm } = useHashRouter();

  // Memoize step data to prevent re-renders
  const steps = [
    {
      number: 1,
      title: "Connect",
      description: "5-minute call with our Texas-based specialists"
    },
    {
      number: 2,
      title: "Discover", 
      description: "We identify hidden problems affecting your family's health"
    },
    {
      number: 3,
      title: "Breathe Easy",
      description: "Join thousands of satisfied Central Texas families"
    }
  ];

  // Memoize booking modal handler
  const openBookingModal = () => {
    navigateToBookingForm();
  };

  return (
    <section 
      id="cta" 
      className="section-padding bg-gradient-to-r from-shark-blue via-shark-darkBlue to-shark-blue relative overflow-hidden"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 600px'
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAtMzR2NmgxOHYtNmgtMTh6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDI0djZoNnYtNmgtNnptMTIgLTI0djZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bTAgMTJ2NmgxMnYtNmgtMTJ6bTAgMTJ2NmgxOHYtNmgtMTh6bS00OCAtNDh2NmgxOHYtNmgtMTh6bTAgMTJ2Nmg2di02aC02em0wIDEydjZoNnYtNmgtNnptMTIgLTM2djZoNnYtNmgtNnptMTIgLTEydjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5 animate-pulse"
        ></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-soft-light opacity-5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-shark-accent rounded-full mix-blend-soft-light opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          <header className="mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Breathe Cleaner Air—Book Your 
              <span className="block text-shark-accent">Free Inspection Today</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
              Join thousands of Austin families who trust Shark Duct Cleaning for healthier, safer homes.
            </p>
            <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
          </header>
          
          {/* Enhanced Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 text-center hover:-translate-y-2 hover:bg-white/15 transition-all duration-500 border border-white/20"
                style={{ 
                  animationDelay: `${idx * 200}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-gradient-to-br from-shark-accent to-shark-blue rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-shark-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
              <div className="text-left lg:flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl md:text-2xl">🇺🇸</span>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Texas Values</h3>
                </div>
                <p className="text-white/90 mb-6 text-base md:text-lg leading-relaxed">
                  <span className="text-white font-bold bg-shark-accent/20 px-2 py-1 rounded text-sm md:text-base">10% OFF</span> for military, veterans & seniors.{' '}
                  <span className="block mt-1">Thank you for your service!</span>
                </p>
                <div className="flex items-center text-white text-sm md:text-base">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-3 animate-pulse text-shark-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-semibold">Limited spots available this week!</span>
                </div>
              </div>
              
              {/* Enhanced Action Buttons */}
              <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[280px]">
                <OptimizedButton
                  size="xl"
                  onClick={openBookingModal}
                  variant="accent"
                  animated
                  fullWidth
                  className="group relative overflow-hidden bg-gradient-to-r from-shark-accent to-shark-blue hover:from-shark-blue hover:to-shark-darkBlue text-white font-bold py-4 px-6 md:px-8 rounded-xl shadow-2xl hover:shadow-shark-accent/25 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  aria-label="Schedule your free inspection"
                >
                  Get My Free Quote
                </OptimizedButton>
                <OptimizedButton
                  size="xl"
                  as="a"
                  href="tel:8778888431"
                  variant="secondary"
                  animated
                  fullWidth
                  leftIcon={<Phone size={22} />}
                  className="text-lg font-semibold border-shark-blue text-shark-blue bg-white hover:bg-shark-blue hover:text-white hover:border-shark-blue focus-visible:ring-shark-blue"
                >
                  Call Now for Same-Day Service
                </OptimizedButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
