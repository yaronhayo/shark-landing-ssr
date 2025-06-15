import React from 'react';
import { Dialog, DialogContentBelowHeader, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
}

const LegalSection: React.FC<LegalSectionProps> = ({ title, children }) => (
  <section className="space-y-4">
    <h3 className="text-xl font-semibold text-shark-darkBlue">{title}</h3>
    <div className="space-y-3">{children}</div>
  </section>
);

const LegalText: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <p className={`text-gray-700 ${className}`}>{children}</p>
);

const LegalList: React.FC<{ items: string[]; className?: string }> = ({ items, className }) => (
  <ul className={`list-disc pl-6 space-y-2 text-gray-700 ${className}`}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

interface TermsOfServiceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContentBelowHeader className="max-w-4xl w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-shark-darkBlue">Our Service Promise & Customer Rights</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          <p className="text-sm text-gray-600">Effective Date: June 12, 2025 | Last Updated: June 12, 2025</p>
          <section className="mt-4">
            <h2 className="font-semibold text-lg mb-2">Welcome!</h2>
            <p>
              We’re here to serve you with honesty and care. Here’s what you can expect from us, and what we ask in return:
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">What We Promise</h2>
            <ul className="list-disc ml-6">
              <li>Top-quality duct cleaning and indoor air services, performed by trained local experts.</li>
              <li>Clear, upfront pricing and no hidden fees.</li>
              <li>Respect for your home and your time—on-time arrivals, tidy work, and friendly service.</li>
              <li>Your information is always protected and never sold.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">Your Rights</h2>
            <ul className="list-disc ml-6">
              <li>Ask questions about your service, pricing, or our policies at any time.</li>
              <li>Reschedule or cancel with reasonable notice.</li>
              <li>Expect a fair resolution if something isn’t right—just let us know.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">How to Reach Us</h2>
            <p>
              We’re here to help. Contact our support team at <a href="mailto:info@sharkduct.com" className="text-shark-blue underline">info@sharkduct.com</a> or call <a href="tel:8778888431" className="text-shark-blue underline">(877) 888-8431</a> with any questions or concerns.
            </p>
          </section>
          <LegalSection title="Welcome to Shark Duct Cleaning">
            <LegalText>Thank you for choosing Shark Duct Cleaning for your air duct cleaning needs. These Terms of Service ("Terms") govern your use of our website and services. By scheduling our services, visiting our website, or engaging with our business, you agree to be bound by these Terms. Please read them carefully, as they include important information about your rights and obligations, as well as limitations and exclusions that may apply to you.</LegalText>
          </LegalSection>
          <hr className="border-gray-200" />
          
          <LegalSection title="Our Services">
            <LegalText>Shark Duct Cleaning is a professional air duct cleaning company serving the Dallas-Fort Worth Metroplex. We specialize in comprehensive HVAC system maintenance and indoor air quality improvement services:</LegalText>
            <div className="ml-4 space-y-3">
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Residential Services:</h4>
                <LegalList items={[
                  "Complete air duct cleaning and sanitization",
                  "HVAC system inspection and maintenance",
                  "Dryer vent cleaning and safety inspection",
                  "Air quality testing and improvement recommendations",
                  "Filter replacement and maintenance programs",
                ]} className="space-y-1" />
              </div>
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Commercial Services:</h4>
                <LegalList items={[
                  "Commercial HVAC system cleaning",
                  "Restaurant hood and exhaust cleaning",
                  "Office building air quality management",
                  "Scheduled maintenance contracts",
                  "Emergency service calls",
                ]} className="space-y-1" />
              </div>
            </div>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Service Areas and Availability">
            <LegalText>We proudly serve customers throughout Austin, San Antonio, and cities in between:</LegalText>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Primary Service Areas:</h4>
                <LegalList items={["Austin", "San Antonio", "Buda, Kyle, San Marcos, New Braunfels", "Pflugerville, Round Rock, Cedar Park, and more"]} className="space-y-1" />
              </div>
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Service Hours:</h4>
                <LegalList items={["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Emergency calls only", "Holiday availability varies"]} className="space-y-1" />
              </div>
            </div>
            <LegalText className="mt-3">If you're unsure whether we service your area, please call (877) 888-8431 for confirmation. We may accommodate special requests for locations outside our standard service area.</LegalText>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Booking and Scheduling">
            <LegalText>When you schedule our services, the following terms apply:</LegalText>
            <LegalList items={[
              "Accurate Information: You agree to provide truthful and complete information about your property, contact details, and service requirements",
              "Property Access: You must ensure full access to all areas requiring service, including attics, basements, and utility rooms",
              "Authorized Scheduling: Only property owners or authorized representatives may schedule services",
              "Appointment Windows: We provide 2-4 hour appointment windows and will call 30 minutes before arrival",
              "Service Changes: Any changes to the original scope of work must be approved in writing and may incur additional charges",
              "Safety Requirements: We reserve the right to postpone service if safety conditions are not met or if access is restricted",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Pricing and Payment Terms">
            <LegalText>Our transparent pricing and payment policies:</LegalText>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Pricing Structure:</h4>
                <LegalList items={[
                  "Free, no-obligation inspections and estimates",
                  "Competitive, upfront pricing with no hidden fees",
                  "Special discounts for military, veterans, and seniors (10% off)",
                  "Seasonal promotions and multi-service discounts available",
                ]} className="space-y-1" />
              </div>
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Payment Terms:</h4>
                <LegalList items={[
                  "Payment is due upon completion of services",
                  "We accept cash, check, and major credit cards (Visa, MasterCard, American Express)",
                  "Commercial accounts may arrange 30-day payment terms with credit approval",
                  "Additional services beyond the original estimate require separate authorization",
                  "Prices quoted are valid for 30 days from the date of estimate",
                ]} className="space-y-1" />
              </div>
              <div>
                <h4 className="font-semibold text-shark-darkBlue">Additional Charges:</h4>
                <LegalList items={[
                  "Excessive contamination or biohazard conditions",
                  "Unusual access requirements or structural modifications",
                  "Services beyond the scope of standard duct cleaning",
                  "Emergency or after-hours service calls",
                ]} className="space-y-1" />
              </div>
            </div>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Cancellation and Rescheduling Policy">
            <LegalText>We understand that schedules change. Our flexible policies:</LegalText>
            <LegalList items={[
              "Advance Cancellation: No charge for cancellations made 24+ hours in advance",
              "Same-Day Cancellation: Cancellations within 24 hours may incur a $50 service fee",
              "No-Show Policy: Failure to be present for scheduled appointments may result in a $75 no-show fee",
              "Weather Delays: We will reschedule at no charge for severe weather conditions",
              "Emergency Rescheduling: We may reschedule due to equipment failure, employee illness, or unforeseen circumstances",
              "Multiple Reschedules: Excessive rescheduling may result in scheduling restrictions",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Service Guarantee and Warranty">
            <LegalText>We stand behind our work with comprehensive guarantees:</LegalText>
            <LegalList items={[
              "Satisfaction Guarantee: 100% satisfaction guarantee on all services - if you're not happy, we'll make it right",
              "Workmanship Warranty: 90-day warranty on all cleaning services",
              "Equipment Protection: We carry full insurance coverage for property protection",
              "Professional Standards: All work performed by trained, certified technicians",
              "Follow-Up Service: Complimentary follow-up inspections within 30 days",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Customer Responsibilities">
            <LegalText>To ensure safe and effective service delivery, customers must:</LegalText>
            <LegalList items={[
              "Provide safe and clear access to all service areas",
              "Remove valuable items and breakables from work areas",
              "Secure pets in a safe location away from work areas",
              "Inform technicians of any known hazards or special conditions",
              "Be present or have an authorized adult representative available",
              "Provide accurate information about HVAC system age and previous maintenance",
              "Follow any pre-service preparation instructions provided",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Limitation of Liability">
            <LegalText>While we maintain comprehensive insurance and exercise utmost care in our work, please note the following limitations:</LegalText>
            <LegalList items={[
              "Our liability is limited to the cost of services provided",
              "We are not liable for pre-existing conditions or system defects",
              "Customers are responsible for disclosing known hazards or system issues",
              "We are not responsible for items not properly secured by the customer",
              "Force majeure events (weather, natural disasters) are excluded from liability",
              "Any claims must be reported within 48 hours of service completion",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Health and Safety">
            <LegalText>Your health and safety are our top priorities:</LegalText>
            <LegalList items={[
                "All technicians are trained in safety protocols and procedures",
                "We use EPA-approved cleaning products and sanitizers",
                "Proper protective equipment is used during all services",
                "We follow CDC guidelines for health and safety practices",
                "Any discovered health hazards (mold, asbestos) will be reported immediately",
                "We reserve the right to stop work if unsafe conditions are encountered",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Privacy and Confidentiality">
            <LegalText>We respect your privacy and maintain strict confidentiality:</LegalText>
            <LegalList items={[
                "Customer information is kept confidential and secure",
                "Property access codes and security information are protected",
                "Photos taken for documentation purposes require explicit consent",
                "Customer testimonials and reviews are used only with permission",
                "All employees sign confidentiality agreements",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Dispute Resolution">
            <LegalText>In the unlikely event of a dispute, we are committed to fair resolution:</LegalText>
            <LegalList items={[
                "Direct communication with management as the first step",
                "Mediation through a neutral third party if needed",
                "Binding arbitration as a final resolution method",
                "Texas state law governs all disputes and agreements",
                "Venue for any legal proceedings is Austin, Texas",
            ]} />
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Changes to Terms of Service">
            <LegalText>We may update these Terms of Service occasionally to reflect changes in our services, legal requirements, or business practices. We will notify customers of significant changes through:</LegalText>
            <LegalList items={[
              "Website updates with new effective dates",
              "Email notifications for material changes",
              "Notification during service appointments",
              "Posted notices at our business location",
            ]} className="space-y-1" />
            <LegalText className="mt-3">Your continued use of our services after such updates constitutes your acceptance of the new Terms.</LegalText>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Contact Information">
            <LegalText>For questions, concerns, or to schedule a service, please contact us:</LegalText>
            <div className="bg-shark-blue/5 p-4 rounded-lg border border-shark-blue/20 mt-3 text-shark-darkBlue">
              <p><strong>Shark Duct Cleaning</strong></p>
              <p>📞 Phone: (877) 888-8431</p>
              <p>🌐 Website: www.sharkduct.com</p>
              <p>📍 Serving: Dallas-Fort Worth Metroplex</p>
            </div>
            <LegalText className="mt-3">We appreciate your business and look forward to improving your indoor air quality with our professional services.</LegalText>
          </LegalSection>
        </div>
      </DialogContentBelowHeader>
    </Dialog>
  );
};

export default TermsOfServiceModal;
