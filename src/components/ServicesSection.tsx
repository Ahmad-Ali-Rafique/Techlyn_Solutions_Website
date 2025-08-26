import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap, Globe, BarChart, Shield } from 'lucide-react';

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
  {
    icon: Globe,
    title: 'Web & App AI Integration',
    description:
      'Enhance your existing platforms with seamless AI features, boosting engagement and productivity.',
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics & Insights',
    description:
      'Turn raw data into actionable insights using advanced AI-powered predictive analytics tools.',
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description:
      'Ensure your AI systems meet compliance and maintain the highest security standards for your data.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="uppercase text-sm font-semibold text-red-500 tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Transform Your Business with <span className="text-red-500">AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our comprehensive suite of AI-driven solutions designed to optimize workflows,
            improve customer experiences, and boost your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-200 rounded-2xl bg-white p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-indigo-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transform transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
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
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
