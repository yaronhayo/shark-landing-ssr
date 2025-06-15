import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import PromotionsSection from '@/components/promotions/PromotionsSection';
import AirQualitySection from '@/components/air-quality/AirQualitySection';
import WhyUsSection from '@/components/WhyUsSection';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shark Duct Cleaning Austin & San Antonio | Air Duct, Dryer Vent & HVAC Cleaning</title>
        <meta name="description" content="Austin & San Antonio's trusted air duct, dryer vent, and HVAC cleaning. $89 special. Family-owned, 250+ 5-star reviews. Book your free inspection today!" />
        <meta property="og:title" content="Shark Duct Cleaning Austin & San Antonio" />
        <meta property="og:description" content="Austin & San Antonio's trusted air duct, dryer vent, and HVAC cleaning. $89 special. Family-owned, 250+ 5-star reviews. Book your free inspection today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sharkduct.com/" />
        <meta property="og:image" content="/images/logo-1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shark Duct Cleaning Austin & San Antonio" />
        <meta name="twitter:description" content="Austin & San Antonio's trusted air duct, dryer vent, and HVAC cleaning. $89 special. Family-owned, 250+ 5-star reviews. Book your free inspection today!" />
        <meta name="twitter:image" content="/images/logo-1.webp" />
        <link rel="canonical" href="https://www.sharkduct.com/" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <CTASection />
        <PromotionsSection />
        <AirQualitySection />
        <WhyUsSection />
        <ReviewsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
