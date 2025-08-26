import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description:
      'Intelligent agents that work autonomously to solve complex business problems and automate decision-making processes.',
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description:
      'Streamline your operations with smart automation solutions that reduce manual work and increase efficiency.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Deploy conversational AI that provides 24/7 customer support and handles complex inquiries naturally.',
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description:
      'Automate your communication workflows with intelligent email and messaging systems that engage customers.',
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description:
      'Human-like voice agents that handle sales calls, appointment scheduling, and customer interactions.',
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description:
      'Tailored artificial intelligence solutions designed specifically for your unique business requirements.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4 tracking-tight">
            Our <span className="text-red">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart, scalable, and customized AI-powered solutions to transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group backdrop-blur-md bg-white/90 hover:bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy to-red flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-dark-gray group-hover:text-navy transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-navy text-white text-lg font-semibold rounded-full shadow-md hover:bg-red hover:shadow-lg transition-all duration-300"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
