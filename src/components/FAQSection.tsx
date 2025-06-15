import React, { useState, useMemo, useCallback } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = React.memo(() => {
  // Memoize FAQs data to prevent re-renders
  const faqs = useMemo(() => [
    {
      question: "How often should I clean my air ducts?",
      answer: "The National Air Duct Cleaners Association (NADCA) recommends cleaning every 3-5 years, or more often if you have pets, allergies, or recent renovations. Regular cleaning keeps your air healthy and your system efficient."
    },
    {
      question: "How long does duct cleaning take?",
      answer: "Most homes take 3-5 hours, depending on size and system complexity. Our NADCA-certified techs work efficiently and respect your time."
    },
    {
      question: "Is duct cleaning really worth it?",
      answer: "Absolutely. You'll breathe easier, reduce allergens, save on energy, and extend your HVAC's life. Our customers consistently say it's one of the best home investments they've made."
    },
    {
      question: "How often should dryer vents be cleaned?",
      answer: "At least once a year, or more for large families or heavy use. Clean vents prevent fires and keep your dryer running safely and efficiently."
    },
    {
      question: "What's included in your free inspection?",
      answer: "A full visual check of your ductwork, airflow testing, dust and mold inspection, and honest recommendations. We'll show you photos and answer all your questions—no pressure."
    },
    {
      question: "Do you guarantee your work?",
      answer: "Yes! We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right—no extra charge."
    },
    {
      question: "Will duct cleaning help with allergies or asthma?",
      answer: "Yes. Removing dust, pollen, pet dander, and mold from your ducts can significantly reduce allergy and asthma triggers in your home."
    },
    {
      question: "How do I know if my air ducts need cleaning?",
      answer: "Signs include visible dust buildup, musty odors, increased allergy symptoms, or seeing dust puff out of vents when the system turns on."
    },
    {
      question: "Is duct cleaning safe for my HVAC system?",
      answer: "Absolutely. We use specialized equipment and follow NADCA standards to ensure your system is cleaned safely and thoroughly."
    },
    {
      question: "Can dirty dryer vents really cause a fire?",
      answer: "Yes. Lint buildup is highly flammable and is a leading cause of house fires. Annual cleaning is the best prevention."
    },
    {
      question: "Will cleaning my dryer vent lower my energy bills?",
      answer: "Yes. A clean vent allows your dryer to run more efficiently, reducing drying times and energy use."
    },
    {
      question: "Do you use chemicals or harsh cleaners?",
      answer: "No. We use high-powered vacuums and safe, EPA-approved sanitizers only when needed. No harsh chemicals are used."
    },
    {
      question: "How much does duct cleaning cost?",
      answer: "Pricing depends on your home's size and system complexity. We offer upfront, flat-rate pricing with no hidden fees."
    },
    {
      question: "Will duct cleaning make a mess in my home?",
      answer: "No. Our equipment is designed to keep all dust and debris contained. We leave your home as clean as we found it."
    },
    {
      question: "How long does dryer vent cleaning take?",
      answer: "Most dryer vents can be cleaned in under an hour. Complex or rooftop vents may take a bit longer."
    },
    {
      question: "Can you clean both my air ducts and dryer vent in one visit?",
      answer: "Yes! We offer combo packages for maximum convenience and savings."
    },
    {
      question: "Is duct cleaning covered by my homeowner's insurance?",
      answer: "Usually not, as it's considered routine maintenance. However, cleaning can help prevent costly damage that insurance may not cover."
    },
    {
      question: "Do you offer commercial duct cleaning?",
      answer: "Yes, we service both residential and commercial properties. Contact us for a custom quote for your business."
    },
    {
      question: "Can duct cleaning help with mold problems?",
      answer: "Yes. We remove visible mold and can apply EPA-approved treatments to prevent regrowth. Severe infestations may require remediation."
    },
    {
      question: "How soon can you schedule my cleaning?",
      answer: "We offer flexible scheduling, often with same-week appointments available. Call or book online for the fastest service."
    },
    {
      question: "Do you offer any guarantees or warranties?",
      answer: "Yes! We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, checks, and cash. Payment is due upon completion of service."
    },
    {
      question: "Can I stay in my home during cleaning?",
      answer: "Yes, you can remain in your home. Our process is safe, and we minimize disruption as much as possible."
    },
    {
      question: "How do I prepare for my appointment?",
      answer: "Please clear access to vents and the HVAC unit. Remove fragile items from work areas. We'll handle the rest!"
    },
    {
      question: "Are your technicians background checked?",
      answer: "Yes. All our techs are background checked, insured, and highly trained for your peace of mind."
    },
  ], []);

  const [shownCount, setShownCount] = useState(6);
  
  // Memoize computed values
  const canShowMore = useMemo(() => shownCount < faqs.length, [shownCount, faqs.length]);
  const visibleFaqs = useMemo(() => faqs.slice(0, shownCount), [faqs, shownCount]);
  
  // Memoize event handler
  const handleShowMore = useCallback(() => {
    setShownCount(c => Math.min(c + 6, faqs.length));
  }, [faqs.length]);

  return (
    <section 
      id="faqs" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      style={{ 
        contentVisibility: 'auto',
        containIntrinsicSize: '100vw 1200px'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-shark-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-shark-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shark-darkBlue">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Get answers to our most commonly asked questions. Still have questions? Feel free to contact us!
          </p>
          <div className="w-24 h-1 bg-shark-accent mx-auto rounded-full"></div>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {visibleFaqs.map((faq, index) => (
              <AccordionItem 
                key={`faq-${index}`}
                value={`item-${index}`}
                className="border-b border-gray-100 last:border-b-0"
              >
                <AccordionTrigger className="group px-8 py-6 text-left text-lg font-semibold text-shark-darkBlue hover:text-shark-blue transition-all duration-300 hover:bg-gray-50/50 [&[data-state=open]]:bg-shark-blue/5">
                  <span className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-shark-accent/10 rounded-full flex items-center justify-center text-shark-accent font-bold text-sm group-hover:bg-shark-accent group-hover:text-white transition-all duration-300">
                      {index + 1}
                    </span>
                    <span className="flex-1">{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-2 text-gray-700 leading-relaxed bg-gradient-to-b from-shark-blue/5 to-transparent">
                  <div className="pl-12">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {canShowMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleShowMore}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-shark-accent to-shark-blue hover:from-shark-blue hover:to-shark-darkBlue text-white rounded-xl shadow-lg hover:shadow-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Show more frequently asked questions"
              >
                <span>Read More FAQs</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-20 text-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-shark-darkBlue mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert team is here to help! Get personalized answers and a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:8778888431"
              className="inline-flex items-center gap-2 px-6 py-3 bg-shark-blue hover:bg-shark-darkBlue text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              aria-label="Call us for questions"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">(877) 888-8431</span>
            </a>
            <span className="text-gray-400 hidden sm:block">or</span>
            <button 
              onClick={() => window.location.hash = '#booking'}
              className="inline-flex items-center gap-2 px-6 py-3 bg-shark-accent hover:bg-shark-blue text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
              aria-label="Schedule free consultation"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;