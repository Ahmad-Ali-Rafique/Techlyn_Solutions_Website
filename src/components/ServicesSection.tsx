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
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.08),transparent_60%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-red-500">Services</span>
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
              className="relative group rounded-3xl p-8 text-center bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-blue-900 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transform transition-transform duration-300">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>

              {/* Accent Border Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-red-500 transition-all duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-3 border-2 border-red-500 text-red-500 text-lg font-semibold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
