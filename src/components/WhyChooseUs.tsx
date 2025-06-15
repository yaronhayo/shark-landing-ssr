import React, { useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const WhyChooseUs = React.memo(() => {
  const isMobile = useIsMobile();
  
  // Memoize reasons data to prevent re-renders
  const reasons = useMemo(() => [
    {
      title: "Certified Professionals",
      description: "Our techs are NADCA certified and extensively trained in the latest duct cleaning techniques and EPA safety protocols.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Advanced Equipment",
      description: "We use state-of-the-art equipment that thoroughly cleans and sanitizes your entire duct system.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. We provide upfront pricing before any work begins.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Comprehensive Services",
      description: "We offer complete solutions for all your indoor air quality needs, from air ducts to dryer vents.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Family Owned, Locally Oriented",
      description: "We're committed to treating your home as if it was ours, with the care and attention every Central Texas family deserves.",
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ], []);
  
  const stats = useMemo(() => [
    { value: "10,000+", label: "Happy Customers" },
    { value: "18+", label: "Years Experience" },
    { value: "A+", label: "BBB Rating" },
    { value: "5.0", label: "Service Rating" },
  ], []);

  const certifications = useMemo(() => [
    { label: "Licensed", icon: "" },
    { label: "Bonded", icon: "" },
    { label: "Insured", icon: "" },
    { label: "NADCA Certified", icon: "" },
  ], []);

  return (
    <section 
      id="why-us" 
      className="section-padding bg-gradient-to-b from-shark-blue to-shark-darkBlue text-white relative overflow-hidden"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 1200px'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-shark-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Why Austin Chooses Shark Duct Cleaning
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Trusted by thousands of local families for quality, safety, and results.
          </p>
          <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
        </header>
        
        {/* Enhanced Grid with Better Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl hover:bg-white/20 transition-all duration-500 h-full group transform hover:-translate-y-3 hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-8 flex flex-col items-center h-full text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-shark-accent transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-white/90 leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Stats and Certifications Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl border border-white/10">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-white">
            Our Results Speak for Themselves
          </h3>
          
          {/* Stats Grid with Enhanced Styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 animate-pulse drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base lg:text-lg text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Certifications */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-6">Licensed, Bonded & Certified</h4>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-full py-3 px-6 text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <span className="text-shark-accent mr-3 text-lg">{cert.icon}</span>
                  <span className="text-white">{cert.label}</span>
                </div>
              ))}
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

WhyChooseUs.displayName = 'WhyChooseUs';

export default WhyChooseUs;
