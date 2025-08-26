import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Custom Solutions',
    description: 'Build intelligent, autonomous AI agents tailored to solve complex business challenges and boost efficiency.',
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description: 'Automate repetitive tasks and workflows, reducing costs while improving operational accuracy and speed.',
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI & Chatbots',
    description: 'Deliver 24/7 customer support with natural, human-like AI interactions that improve satisfaction and retention.',
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automation',
    description: 'Streamline communication and lead nurturing with smart automated messaging systems that convert.',
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Support',
    description: 'Engage clients with lifelike voice AI that handles calls, appointments, and support effortlessly.',
  },
  {
    icon: Zap,
    title: 'Custom AI Development',
    description: 'Get AI-powered solutions designed exclusively for your business goals and growth strategy.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            Transform Your Business with <span className="text-red">AI Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Future-ready solutions that automate, scale, and optimize your operations for maximum growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group backdrop-blur-sm bg-white/95 hover:bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy to-red flex items-center justify-center mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-dark-gray group-hover:text-navy transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-4 bg-navy text-white text-lg font-semibold rounded-full shadow-md hover:bg-red hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
