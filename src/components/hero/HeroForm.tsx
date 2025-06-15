import React, { useState } from 'react';
import { Shield, CalendarDays } from 'lucide-react';

const HeroForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    agree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox' && e.target instanceof HTMLInputElement) {
      fieldValue = e.target.checked;
    }
    setFormData({
      ...formData,
      [name]: fieldValue
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.agree) {
      setSubmitStatus('Please fill in all required fields and agree to terms.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create FormData for FormSubmit
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('street', formData.street);
      formDataToSubmit.append('zip', formData.zip || '');
      formDataToSubmit.append('source', 'Hero Form');
      formDataToSubmit.append('submittedAt', new Date().toISOString());
      // Add BCC for lead notifications
      formDataToSubmit.append('_bcc', 'yaron@gettmarketing.com,sandrahmarketing@gmail.com');
      // Dynamic subject with name and zip
      const leadName = formData.name || 'Customer';
      const leadZip = formData.zip || '';
      formDataToSubmit.append('_subject', `New Lead From ${leadName} at ${leadZip}`);
      formDataToSubmit.append('_next', window.location.origin + '/#/thank-you');
      formDataToSubmit.append('_template', 'table');
      formDataToSubmit.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/sharkduct@gmail.com', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        // FormSubmit handles redirect, but we'll also handle it programmatically
        setSubmitStatus('Thank you! Redirecting...');
        
        // Reset form
        setFormData({
          name: '', phone: '', email: '', street: '', agree: false
        });
        
        // Redirect to thank you page
        setTimeout(() => {
          window.location.href = '/#/thank-you';
        }, 1000);
      } else {
        setSubmitStatus('Something went wrong. Please call 877-888-8431.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please call 877-888-8431.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-xl shadow-2xl p-5 border-t-4 border-shark-accent">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-shark-darkBlue mb-1">Get Your Free Inspection</h3>
          <p className="text-sm text-shark-blue">Save $50 on your first service!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-shark-darkBlue mb-1">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-shark-blue text-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-shark-darkBlue mb-1">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-shark-blue text-sm"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-shark-darkBlue mb-1">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-shark-blue text-sm"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="street" className="block text-sm font-medium text-shark-darkBlue mb-1">Address (Optional)</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-shark-blue focus:border-shark-blue text-sm"
              placeholder="123 Main St, Austin, TX"
            />
          </div>

          <div className="bg-shark-blue/5 p-3 rounded-lg border border-shark-blue/20">
            <div className="flex items-center text-shark-darkBlue">
              <Shield className="w-4 h-4 text-shark-accent mr-2 flex-shrink-0" />
              <span className="text-xs font-medium">10% OFF for military, Veterans & seniors</span>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={!!formData.agree}
              onChange={handleChange}
              required
              className="mt-1 accent-shark-accent flex-shrink-0"
            />
            <label htmlFor="agree" className="text-xs text-gray-600 leading-relaxed">
              I agree to the <button type="button" onClick={() => window.location.hash = 'privacy-policy'} className="text-shark-accent underline hover:text-shark-darkBlue">Privacy Policy</button> and <button type="button" onClick={() => window.location.hash = 'terms-of-service'} className="text-shark-accent underline hover:text-shark-darkBlue">Terms of Service</button>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-shark-accent hover:bg-shark-darkBlue text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-shark-accent focus:ring-offset-2 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <CalendarDays className="inline-block w-4 h-4 mr-2" />
            {isSubmitting ? 'Submitting...' : 'Book Free Inspection'}
          </button>

          {submitStatus && (
            <p className={`text-sm text-center ${submitStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
              {submitStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
