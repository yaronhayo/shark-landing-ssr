import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Shark Duct Cleaning</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-[60vh] py-24">
        <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-shark-accent max-w-lg w-full text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-shark-darkBlue mb-4">Privacy Policy</h1>
          <p className="text-lg text-shark-blue mb-2">We respect your privacy. We only use your information to respond to your request and never sell or share your data. For questions, call <a href="tel:8778888431" className="text-shark-accent underline font-semibold">877-888-8431</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
