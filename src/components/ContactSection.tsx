
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/company/techlyn-solutions', 
    icon: Linkedin,
    color: 'hover:text-blue-600' 
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
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-navy">
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
              <CardContent>
                <a 
                  href="tel:03289460713" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
                >
                  0328 9460713
                </a>
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
                  href="mailto:team.techlynsolutions@gmail.com" 
                  className="text-blue-100 hover:text-white transition-colors duration-300 text-lg"
                >
                  team.techlynsolutions@gmail.com
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
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-red focus:ring-red resize-none"
                      placeholder="Tell us about your project and how we can help..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-red hover:bg-red/90 text-white font-semibold py-3 transition-all duration-300 hover:shadow-lg hover:shadow-red/25"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
