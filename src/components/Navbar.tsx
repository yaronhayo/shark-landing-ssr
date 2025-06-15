import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Phone, CalendarDays } from 'lucide-react';
import useHashRouter from '@/hooks/useHashRouter';

// Minimal inline button component to avoid importing heavy UI library
const SimpleButton = React.memo(({ children, className, onClick, href }: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";
  
  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
});

SimpleButton.displayName = 'SimpleButton';

const Navbar = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { navigateToBookingForm } = useHashRouter();

  // Memoize logo selection for performance
  const logoImage = isScrolled ? "/images/logo-2.webp" : "/images/logo-1.webp";

  // Throttled scroll handler for better performance
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Optimized smooth scroll with better performance
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({ 
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  // Memoize menu items to prevent re-renders
  const menuItems = [
    { name: "Air Quality", sectionId: "air-quality" },
    { name: "Benefits", sectionId: "benefits" },
    { name: "Why Us?", sectionId: "why-us" },
    { name: "Promotions", sectionId: "promotions" },
    { name: "Reviews", sectionId: "reviews" },
    { name: "FAQs", sectionId: "faqs" },
  ];

  const openBookingModal = useCallback(() => {
    navigateToBookingForm();
  }, [navigateToBookingForm]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Memoize navbar classes for performance
  const navbarClasses = useMemo(() => 
    `fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`, 
    [isScrolled]
  );

  const textClasses = useMemo(() => 
    isScrolled 
      ? "text-slate-600 hover:text-blue-600" 
      : "text-white hover:text-blue-200",
    [isScrolled]
  );

  const bookingButtonClasses = useMemo(() => 
    isScrolled 
      ? 'bg-shark-darkBlue text-white hover:bg-shark-blue hover:shadow-lg' 
      : 'bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg',
    [isScrolled]
  );

  const phoneButtonClasses = useMemo(() => 
    isScrolled 
      ? 'bg-shark-accent text-white hover:bg-shark-darkBlue hover:shadow-lg' 
      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 hover:shadow-lg',
    [isScrolled]
  );

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <div className="flex items-center">
          <button 
            onClick={scrollToTop}
            className="flex items-center hover:scale-105 transition-transform duration-200"
            aria-label="Scroll to top"
          >
            <img 
              src={logoImage} 
              alt="Shark Duct Cleaning" 
              className="h-16 w-16 md:h-20 md:w-20"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{ objectFit: 'contain', width: '80px', height: '80px', display: 'block' }}
              srcSet="/images/logo-1.webp 1x, /images/logo-2.webp 2x"
              sizes="(max-width: 768px) 64px, 80px"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              className={`text-sm font-medium transition-all duration-200 hover:underline underline-offset-4 ${textClasses}`}
              aria-label={`Navigate to ${item.name} section`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center space-x-2">
          <SimpleButton 
            onClick={openBookingModal}
            className={`${bookingButtonClasses} shadow-lg`}
          >
            <CalendarDays className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Book Free Inspection</span>
            <span className="sm:hidden">Book</span>
          </SimpleButton>
          
          <SimpleButton 
            href="tel:8778888431"
            className={`${phoneButtonClasses} shadow-lg`}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span className="inline">877-888-8431</span>
          </SimpleButton>
        </div>
      </div>
    </nav>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
