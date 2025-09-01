// ✅ Updated Contact Form for Techlyn Solutions
// - Added Phone, Subject, Service, Budget fields
// - Improved placeholders & validation
// - Still works with EmailJS + your toast system

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    budget: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // ✅ Validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Valid email required';
    if (!formData.message.trim() || formData.message.length < 10)
      errors.message = 'Message must be at least 10 characters';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.service.trim()) errors.service = 'Please select a service';
    if (!formData.budget.trim()) errors.budget = 'Please select a budget';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      emailjs.init('ECgMhI0iyqhGT3lbJ');
      await emailjs.send('service_3e7exh5', 'template_l5ka3j3', {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Techlyn Solutions Team',
        reply_to: formData.email,
      });
      toast({
        title: "Message Sent ✅",
        description: "Thanks for contacting Techlyn Solutions. We’ll reply within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', service: '', budget: '', message: '' });
      setFormErrors({});
    } catch (err) {
      toast({
        title: "Error",
        description: "Message sending failed. Try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s <span className="text-red">Work Together</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Share your project details and we’ll craft the best AI-driven solutions for you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <InputField
                  id="name"
                  label="Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  error={formErrors.name}
                />

                {/* Email */}
                <InputField
                  id="email"
                  type="email"
                  label="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  error={formErrors.email}
                />

                {/* Phone */}
                <InputField
                  id="phone"
                  type="tel"
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+92 300 1234567"
                  error={formErrors.phone}
                />

                {/* Subject */}
                <InputField
                  id="subject"
                  label="Subject *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  error={formErrors.subject}
                />

                {/* Service Dropdown */}
                <SelectField
                  id="service"
                  label="Service Interested In *"
                  value={formData.service}
                  onChange={handleInputChange}
                  options={["Web Development", "AI Solutions", "Automation", "UI/UX Design", "Consulting"]}
                  error={formErrors.service}
                />

                {/* Budget Dropdown */}
                <SelectField
                  id="budget"
                  label="Estimated Budget *"
                  value={formData.budget}
                  onChange={handleInputChange}
                  options={["$500 - $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"]}
                  error={formErrors.budget}
                />

                {/* Message */}
                <TextareaField
                  id="message"
                  label="Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your project..."
                  error={formErrors.message}
                />

                {/* Submit */}
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-red hover:bg-red/90 text-white font-semibold py-3 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Reusable field components
const InputField = ({ id, label, type = "text", value, onChange, placeholder, error }: any) => (
  <div>
    <label htmlFor={id} className="block text-white font-medium mb-2">{label}</label>
    <Input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <ErrorMsg msg={error} />}
  </div>
);

const TextareaField = ({ id, label, value, onChange, placeholder, error }: any) => (
  <div>
    <label htmlFor={id} className="block text-white font-medium mb-2">{label}</label>
    <Textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      rows={4}
      placeholder={placeholder}
      className={`bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red resize-none ${
        error ? 'border-red-500' : ''
      }`}
    />
    {error && <ErrorMsg msg={error} />}
  </div>
);

const SelectField = ({ id, label, value, onChange, options, error }: any) => (
  <div>
    <label htmlFor={id} className="block text-white font-medium mb-2">{label}</label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md bg-white/10 border-white/20 text-white p-3 focus:border-red focus:ring-red ${
        error ? 'border-red-500' : ''
      }`}
    >
      <option value="">Select...</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
    {error && <ErrorMsg msg={error} />}
  </div>
);

const ErrorMsg = ({ msg }: { msg: string }) => (
  <p className="text-red-400 text-sm mt-1 flex items-center">
    <AlertCircle className="w-4 h-4 mr-1" /> {msg}
  </p>
);
