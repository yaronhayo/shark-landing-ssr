import React from 'react';
import OptimizedButton from '@/components/ui/OptimizedButton';
import { PhoneCall } from 'lucide-react';

const ConsultationBanner = () => {
  return (
    <div className="mt-12 bg-shark-gray rounded-lg p-6 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-shark-darkBlue mb-2">Need expert advice?</h3>
          <p className="text-gray-700">Our team is happy to answer your questions and help you breathe easier.</p>
        </div>
        <OptimizedButton
          as="a"
          href="tel:8778888431"
          size="lg"
          variant="accent"
          animated
          leftIcon={<PhoneCall size={20} />}
        >
          Get My Free Advice
        </OptimizedButton>
      </div>
    </div>
  );
};

export default ConsultationBanner;
