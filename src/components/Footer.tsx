import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-shark-darkBlue text-white py-12 md:py-16" role="contentinfo">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo and Contact Information */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Shark Duct Cleaning - Back to top"
              className="hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-shark-accent focus:ring-offset-2 focus:ring-offset-shark-darkBlue rounded-lg"
            >
              <img 
                src="/images/logo-1.webp" 
                alt="Shark Duct Cleaning Logo" 
                className="h-24 w-24 md:h-32 md:w-32" 
                width="128"
                height="128"
                loading="lazy"
              />
            </button>
          </div>
          <div className="flex justify-center items-center mb-4">
            <Phone className="h-5 w-5 text-shark-accent mr-2 flex-shrink-0" aria-hidden="true" />
            <a 
              href="tel:8778888431" 
              className="text-xl md:text-2xl font-semibold text-white hover:text-shark-accent transition-colors focus:outline-none focus:underline"
              aria-label="Call Shark Duct Cleaning at 877-888-8431"
            >
              (877) 888-8431
            </a>
          </div>
          <p className="text-gray-300 text-base md:text-lg">
            Serving Austin & Central Texas
          </p>
        </div>
        
        <div className="w-full h-px bg-gray-600 my-8"></div>
        
        {/* Legal Information and Disclaimers */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
            <a
              href="#privacy-policy"
              className="text-gray-300 hover:text-white transition-colors text-sm underline hover:no-underline focus:outline-none focus:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-of-service"
              className="text-gray-300 hover:text-white transition-colors text-sm underline hover:no-underline focus:outline-none focus:text-white"
            >
              Terms of Service
            </a>
          </div>
          
          <p className="text-white text-sm md:text-base mb-6">&copy; {currentYear} Shark Duct Cleaning. All rights reserved.</p>
          
          <div className="text-sm text-gray-400 max-w-2xl mx-auto mb-6 space-y-2">
            <p>
              Licensed, Bonded & Insured | NADCA Certified | Upfront Pricing | Satisfaction Guaranteed
            </p>
            <p>
              Offers valid for residential customers only. Not combinable with other offers. Call for details.
            </p>
          </div>
          
          {/* Made with heart by Gett Marketing */}
          <div className="text-sm text-gray-400 flex items-center justify-center flex-wrap">
            <span className="flex items-center">
              Made with
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse inline" aria-hidden="true" />
              by
            </span>
            <a 
              href="https://gettmarketing.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-shark-accent hover:text-white transition-colors ml-1 underline hover:no-underline focus:outline-none focus:text-white"
              aria-label="Visit Gett Marketing website"
            >
              Gett Marketing
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
