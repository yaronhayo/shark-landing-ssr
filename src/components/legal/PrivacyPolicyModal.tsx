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

const LegalList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContentBelowHeader className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Our Commitment to Your Privacy</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-sm">
          <section>
            <LegalText>At Shark Duct Cleaning, we are committed to protecting your privacy and handling your personal information with the highest standards of care and security. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website, use our services, or interact with our business. By engaging with our services or website, you consent to the data practices described in this policy.</LegalText>
            <LegalText className="mt-3"><strong>Effective Date:</strong> June 12, 2025</LegalText>
            <LegalText><strong>Last Updated:</strong> June 12, 2025</LegalText>
          </section>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Information We Collect">
            <div>
              <h4 className="font-semibold text-gray-800">Personal Information:</h4>
              <LegalList items={[
                "Name, phone number, email address",
                "Billing address and service location address",
                "Payment information (processed securely through third-party processors)",
                "Communication preferences and service history",
              ]} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Property Information:</h4>
              <LegalList items={[
                "Property details relevant to air duct cleaning services",
                "HVAC system specifications and condition assessments",
                "Access requirements and special instructions",
                "Before and after service documentation (photos/reports)",
              ]} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Website Usage Information:</h4>
              <LegalList items={[
                "IP address, browser type, and device information",
                "Pages visited, time spent on our website, and referral sources",
                "Cookies and similar tracking technologies (see Cookies section below)",
              ]} />
            </div>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="How We Use Your Information">
            <div>
              <h4 className="font-semibold text-gray-800">Service Delivery:</h4>
              <LegalList items={[
                "Scheduling, confirming, and performing air duct cleaning services",
                "Communicating about appointments, service updates, and completion reports",
                "Processing payments and maintaining service records",
                "Providing customer support and addressing service concerns",
              ]} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Business Operations:</h4>
              <LegalList items={[
                "Quality assurance and service improvement initiatives",
                "Training purposes and operational efficiency optimization",
                "Compliance with legal requirements and industry standards",
                "Insurance and liability documentation",
              ]} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Marketing and Communication:</h4>
              <LegalList items={[
                "Sending service reminders and maintenance recommendations",
                "Sharing promotional offers and seasonal cleaning tips (with your consent)",
                "Requesting feedback and reviews to improve our services",
                "Website improvement and user experience optimization",
              ]} />
            </div>
          </LegalSection>
          
          <hr className="border-gray-200" />
          
          <LegalSection title="Information Sharing and Disclosure">
            <LegalText>We respect your privacy and do not sell, rent, or trade your personal information. We may share your information only in the following limited circumstances:</LegalText>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Service Partners:</strong> Trusted contractors or suppliers who assist in providing our services (under strict confidentiality agreements)</li>
                <li><strong>Payment Processing:</strong> Secure payment processors to handle transaction processing</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of business assets</li>
                <li><strong>Emergency Situations:</strong> To protect the health, safety, or rights of our customers or employees</li>
                <li><strong>With Your Consent:</strong> Any other sharing will only occur with your explicit permission</li>
            </ul>
          </LegalSection>

          <hr className="border-gray-200" />

          <LegalSection title="Data Security and Protection">
            <LegalText>We implement robust security measures to protect your personal information:</LegalText>
            <LegalList items={[
              "Secure Socket Layer (SSL) encryption for all data transmission",
              "Regular security audits and system updates",
              "Restricted access to personal information on a need-to-know basis",
              "Secure storage systems with backup and recovery procedures",
              "Employee training on privacy and data protection practices",
              "Regular deletion of outdated or unnecessary personal information",
            ]} />
          </LegalSection>

          <hr className="border-gray-200" />

          <LegalSection title="Your Privacy Rights">
            <LegalText>You have the following rights regarding your personal information:</LegalText>
            <LegalList items={[
              "Access: Request a copy of the personal information we hold about you",
              "Correction: Request correction of inaccurate or incomplete information",
              "Deletion: Request deletion of your personal information (subject to legal requirements)",
              "Opt-Out: Unsubscribe from marketing communications at any time",
              "Data Portability: Request your information in a commonly used electronic format",
              "Restriction: Request limitation on how we process your information",
            ]} />
            <LegalText className="mt-3">To exercise any of these rights, please contact us at (877) 888-8431 or email us through our website contact form.</LegalText>
          </LegalSection>

          <hr className="border-gray-200" />

          <LegalSection title="Cookies and Website Technologies">
            <LegalText>Our website uses cookies and similar technologies to enhance your browsing experience:</LegalText>
            <LegalList items={[
              "Essential Cookies: Required for basic website functionality and security",
              "Analytics Cookies: Help us understand how visitors use our website",
              "Marketing Cookies: Enable us to show relevant advertisements (with your consent)",
            ]} />
            <LegalText className="mt-3">You can control cookies through your browser settings, though disabling certain cookies may limit website functionality.</LegalText>
          </LegalSection>

          <hr className="border-gray-200" />

          <LegalSection title="Children's Privacy">
            <LegalText>Our services are intended for adults (18 years and older). We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take immediate steps to delete such information.</LegalText>
          </LegalSection>

          <hr className="border-gray-200" />

          <LegalSection title="Changes to This Privacy Policy">
            <LegalText>We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. We will notify you of significant changes by:</LegalText>
            <LegalList items={[
              "Posting the updated policy on our website with a new effective date",
              "Sending email notifications for material changes (if you've provided your email)",
              "Providing notice during your next service appointment",
            ]} />
          </LegalSection>

          <hr className="border-gray-200" />
          
          <LegalSection title="Contact Us">
            <LegalText>If you have questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to contact us:</LegalText>
            <div className="bg-shark-blue/5 p-4 rounded-lg border border-shark-blue/20 mt-3">
              <p className="text-shark-darkBlue font-medium">📞 Phone: (877) 888-8431</p>
              <p className="text-shark-darkBlue">🌐 Website: Use our contact form for written inquiries</p>
              <p className="text-shark-darkBlue">⏰ Business Hours: Monday - Friday, 8:00 AM - 6:00 PM</p>
              <p className="text-shark-darkBlue">📍 Service Areas: Dallas-Fort Worth Metroplex and surrounding areas</p>
            </div>
            <LegalText className="mt-3">We are committed to addressing your privacy concerns promptly and transparently. Your trust is the foundation of our business, and we take our responsibility to protect your privacy seriously.</LegalText>
          </LegalSection>
        </div>
      </DialogContentBelowHeader>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
