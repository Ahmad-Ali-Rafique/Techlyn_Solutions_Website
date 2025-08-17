
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Facebook, Instagram, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/company/techlyn-solutions', 
    icon: Linkedin,
    color: 'hover:text-blue-600' 
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@techlynsolutions', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a2.97 2.97 0 00-2.09-2.103C19.658 3.5 12 3.5 12 3.5s-7.658 0-9.408.583a2.97 2.97 0 00-2.09 2.103A31.16 31.16 0 000 12a31.16 31.16 0 00.502 5.814 2.97 2.97 0 002.09 2.103C4.342 20.5 12 20.5 12 20.5s7.658 0 9.408-.583a2.97 2.97 0 002.09-2.103A31.16 31.16 0 0024 12a31.16 31.16 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
      </svg>
    ),
    color: 'hover:text-red-600' 
  },
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/profile.php?id=61577036004854', 
    icon: Facebook,
    color: 'hover:text-blue-500' 
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/techlyn_solutions', 
    icon: Instagram,
    color: 'hover:text-pink-500' 
  },
  { 
    name: 'TikTok', 
    url: 'https://tiktok.com/@techlyn_solutions?lang=en', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
    color: 'hover:text-black' 
  },
  { 
    name: 'X (Twitter)', 
    url: 'https://x.com/TechlynSolution', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'hover:text-black' 
  },
  { 
    name: 'WhatsApp Channel', 
    url: 'https://whatsapp.com/channel/0029VbBA1DZ0QeacRuRe570L', 
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.56 2 2.02 6.54 2.02 12.02c0 2.12.56 4.1 1.62 5.86L2 22l4.25-1.58c1.7.93 3.62 1.42 5.79 1.42h.01c5.48 0 10.02-4.54 10.02-10.02C22.08 6.54 17.52 2 12.04 2zm.01 17.94h-.01c-1.65 0-3.2-.44-4.57-1.27l-.33-.2-2.52.94.67-2.46-.16-.25a8.03 8.03 0 01-1.25-4.34c0-4.43 3.61-8.04 8.05-8.04 2.15 0 4.16.84 5.68 2.35a7.93 7.93 0 012.36 5.69c0 4.43-3.61 8.04-8.02 8.04zm4.56-5.98c-.25-.13-1.47-.72-1.7-.8-.23-.09-.4-.13-.57.12-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.39.11-.52.11-.11.25-.3.37-.44.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.12-.57-1.38-.78-1.9-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.32s-.88.86-.88 2.1c0 1.23.9 2.42 1.03 2.59.13.17 1.77 2.7 4.29 3.78.6.26 1.07.42 1.44.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.57.21-1.06.15-1.17-.06-.11-.23-.17-.48-.3z"/>
      </svg>
    ),
    color: 'hover:text-green-500' 
  },
];


interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const { toast } = useToast();

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Initializing EmailJS...');
      emailjs.init('ECgMhI0iyqhGT3lbJ');

      console.log('Sending email with data:', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Techlyn Solutions Team',
      });

      const result = await emailjs.send(
        'service_3e7exh5',
        'template_l5ka3j3',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Techlyn Solutions Team',
          reply_to: formData.email,
        }
      );

      console.log('Email sent successfully:', result);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
      setSubmitAttempted(false);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-red">Work Together</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
  <CardHeader>
    <CardTitle className="text-white flex items-center">
      <Phone className="w-6 h-6 mr-3 text-red" />
      Phone
    </CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    {/* Ahmad Ali */}
    <div className="flex items-center justify-between">
      <div>
        <span className="block text-blue-200 text-sm">Ahmad Ali</span>
        <a 
          href="tel:+92 328 9460713" 
          className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
        >
          +92 328 9460713
        </a>
      </div>
      <a
        href="https://wa.me/923289460713"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 p-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-300"
        title="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.24-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.7.96.99-3.61-.24-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.3c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.87 1.23 3.07c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </div>

    {/* Mujtabah */}
    <div className="flex items-center justify-between">
      <div>
        <span className="block text-blue-200 text-sm">Mujtabah</span>
        <a 
          href="tel:+92 309 4742065" 
          className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
        >
          +92 309 4742065
        </a>
      </div>
      <a
        href="https://wa.me/923094742065" 
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 p-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-300"
        title="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.24-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.7.96.99-3.61-.24-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.3c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.87 1.23 3.07c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </div>

    {/* Talha Shabbir */}
    <div className="flex items-center justify-between">
      <div>
        <span className="block text-blue-200 text-sm">Talha Shabbir</span>
        <a 
          href="tel:+92 323 0099421" 
          className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
        >
          +92 323 0099421
        </a>
      </div>
      <a
        href="https://wa.me/923230099421" 
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 p-2 rounded-lg bg-green-600 hover:bg-green-700 transition-colors duration-300"
        title="Chat on WhatsApp"
      >
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.15 1.6 5.95L0 24l6.24-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.18-1.24-6.18-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.7.96.99-3.61-.24-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.3c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.07-.8.38-.27.3-1.05 1.02-1.05 2.48s1.08 2.87 1.23 3.07c.15.2 2.13 3.25 5.16 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35z"/>
        </svg>
      </a>
    </div>
  </CardContent>
</Card>


            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-red" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:contact@techlynsolutions.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
                >
                  contact@techlynsolutions.com
                </a>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-white/10 text-white ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg`}
                      title={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red ${
                        formErrors.name ? 'border-red-500' : ''
                      }`}
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red ${
                        formErrors.email ? 'border-red-500' : ''
                      }`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red resize-none ${
                        formErrors.message ? 'border-red-500' : ''
                      }`}
                      placeholder="Tell us about your project and how we can help... (minimum 10 characters)"
                      disabled={isSubmitting}
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-red hover:bg-red/90 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-red/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  <p className="text-blue-200 text-sm text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
