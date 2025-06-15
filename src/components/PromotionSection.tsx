import React from 'react';
import PromotionCard from './promotions/PromotionCard';
import ConsultationBanner from './promotions/ConsultationBanner';
import SectionHeader from './promotions/SectionHeader';
import { promotionData } from './promotions/PromotionData';

const PromotionSection = React.memo(() => {
  return (
    <section 
      id="promotions" 
      className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 800px'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-shark-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-shark-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeader 
          title="Current Promotions & Offers"
          subtitle="Save big on air duct and dryer vent cleaning—limited time only!"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {promotionData.map((promotion, index) => (
            <div
              key={promotion.title}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <PromotionCard promotion={promotion} index={index} />
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <ConsultationBanner />
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

PromotionSection.displayName = 'PromotionSection';

export default PromotionSection;
