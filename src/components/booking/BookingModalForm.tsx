import React, { useState } from 'react';
import { CalendarDays } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import OptimizedButton from '@/components/ui/OptimizedButton';
import { useToast } from '@/hooks/useAppHooks';
import { Checkbox } from '../ui/checkbox';

const BookingModalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: 'TX',
    zip: '',
    message: '',
    agree: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCheckboxChange = (checked: boolean | 'indeterminate') => {
    setFormData(prev => ({ ...prev, agree: !!checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.agree) {
      addToast({ type: 'error', message: 'Please agree to the terms.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, String(value));
      });
      formDataToSubmit.append('source', 'Booking Modal Form');
      formDataToSubmit.append('submittedAt', new Date().toISOString());
      // Add BCC for lead notifications
      formDataToSubmit.append('_bcc', 'yaron@gettmarketing.com,sandrahmarketing@gmail.com');
      // Dynamic subject with name and zip
      const leadName = formData.name || 'Customer';
      const leadZip = formData.zip || '';
      formDataToSubmit.append('_subject', `New Lead From ${leadName} at ${leadZip}`);
      formDataToSubmit.append('_next', `${window.location.origin}/#/thank-you`);
      formDataToSubmit.append('_template', 'table');
      formDataToSubmit.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/sharkduct@gmail.com', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        addToast({ type: 'success', message: 'Thank you! We will be in touch shortly.' });
        setFormData({ name: '', phone: '', email: '', street: '', city: '', state: 'TX', zip: '', message: '', agree: false });
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      addToast({ type: 'error', message: 'Something went wrong. Please call 877-888-8431.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-sm text-shark-blue font-medium">Save $50 on your first service!</p>
      </div>

      <div>
        <label htmlFor="modal-name" className="block text-sm font-medium text-shark-darkBlue mb-1">Full Name *</label>
        <Input
          id="modal-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="modal-phone" className="block text-sm font-medium text-shark-darkBlue mb-1">Phone *</label>
        <Input
          type="tel"
          id="modal-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="modal-email" className="block text-sm font-medium text-shark-darkBlue mb-1">Email *</label>
        <Input
          type="email"
          id="modal-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="modal-street" className="block text-sm font-medium text-shark-darkBlue mb-1">Street Address</label>
        <Input
          id="modal-street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="123 Main St"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="modal-city" className="block text-sm font-medium text-shark-darkBlue mb-1">City</label>
          <Input
            id="modal-city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Austin"
          />
        </div>
        <div>
          <label htmlFor="modal-zip" className="block text-sm font-medium text-shark-darkBlue mb-1">ZIP</label>
          <Input
            id="modal-zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="78701"
          />
        </div>
      </div>

      <div>
        <label htmlFor="modal-message" className="block text-sm font-medium text-shark-darkBlue mb-1">Additional Details</label>
        <Textarea
          id="modal-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us about your needs..."
        />
      </div>

      <div className="bg-shark-blue/5 p-3 rounded-md border border-shark-blue/20">
        <div className="flex items-center text-shark-darkBlue">
          <span className="text-sm font-medium">10% OFF for military, Veterans & seniors</span>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="modal-agree"
          name="agree"
          checked={formData.agree}
          onCheckedChange={handleCheckboxChange}
          aria-required="true"
        />
        <label htmlFor="modal-agree" className="text-xs text-gray-600">
          I agree to the <Link to="/privacy-policy" className="text-shark-accent underline hover:text-shark-darkBlue">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-shark-accent underline hover:text-shark-darkBlue">Terms of Service</Link>.
        </label>
      </div>

      <OptimizedButton
        type="submit"
        disabled={isSubmitting}
        loading={isSubmitting}
        fullWidth
        variant="accent"
        size="lg"
        leftIcon={<CalendarDays size={20} />}
      >
        Book Free Inspection
      </OptimizedButton>
    </form>
  );
};

export default BookingModalForm;
