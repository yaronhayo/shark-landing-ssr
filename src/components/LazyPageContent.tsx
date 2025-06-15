import { Suspense, lazy } from "react";
import { useHashRouter } from "@/hooks/useHashRouter";

// Lazy load all non-critical sections
const ServiceBenefits = lazy(() => import("@/components/ServiceBenefits"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const BeforeAfterSection = lazy(() => import("@/components/BeforeAfterSection"));
const AirQualitySection = lazy(() => import("@/components/AirQualitySection"));
const PromotionSection = lazy(() => import("@/components/PromotionSection"));
const ReviewsCarousel = lazy(() => import("@/components/ReviewsCarousel"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Modal components - only loaded when needed
const PrivacyPolicyModal = lazy(() => import("@/components/legal/PrivacyPolicyModal"));
const TermsOfServiceModal = lazy(() => import("@/components/legal/TermsOfServiceModal"));

const SectionLoader = () => (
  <div className="py-12 bg-gray-50 animate-pulse">
    <div className="container mx-auto px-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
    </div>
  </div>
);

export default function LazyPageContent() {
  const { isModalOpen, closeModal } = useHashRouter();

  return (
    <main className="min-h-screen">
      <section id="air-quality" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <AirQualitySection />
        </Suspense>
      </section>

      <section id="before-after" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <BeforeAfterSection />
        </Suspense>
      </section>

      <section id="benefits" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <ServiceBenefits />
        </Suspense>
      </section>

      <section id="why-us" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
        </Suspense>
      </section>

      <section id="promotions" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <PromotionSection />
        </Suspense>
      </section>

      <section id="reviews" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <ReviewsCarousel />
        </Suspense>
      </section>

      <section id="faqs" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
      </section>

      <section id="cta" className="scroll-mt-24">
        <Suspense fallback={<SectionLoader />}>
          <CTASection />
        </Suspense>
      </section>

      <Suspense fallback={
        <div className="bg-shark-darkBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="h-6 bg-gray-600 rounded w-1/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-600 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      }>
        <Footer />
      </Suspense>

      {/* Legal Modals - Only render when needed */}
      {isModalOpen('privacy-policy') && (
        <Suspense fallback={<div />}>
          <PrivacyPolicyModal 
            open={isModalOpen('privacy-policy')} 
            onOpenChange={(open) => !open && closeModal()} 
          />
        </Suspense>
      )}
      
      {isModalOpen('terms-of-service') && (
        <Suspense fallback={<div />}>
          <TermsOfServiceModal 
            open={isModalOpen('terms-of-service')} 
            onOpenChange={(open) => !open && closeModal()} 
          />
        </Suspense>
      )}
    </main>
  );
}
