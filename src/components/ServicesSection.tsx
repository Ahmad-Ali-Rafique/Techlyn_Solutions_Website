import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Bot,
  Cog,
  MessageSquare,
  Mail,
  Phone,
  Zap,
  Globe,
  BarChart,
  Shield,
  CheckCircle,
  Layers,
  Rocket,
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description: 'Intelligent agents that work autonomously to solve business problems.',
    points: [
      'Automates decision-making',
      'Works independently on tasks',
      'Improves operational efficiency',
    ],
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description: 'Streamline operations and reduce manual work using smart automation.',
    points: [
      'Automates repetitive tasks',
      'Improves team productivity',
      'Minimizes errors & costs',
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Conversational AI to engage and support your customers 24/7.',
    points: ['Natural human-like responses', 'Handles multiple queries', 'Boosts satisfaction'],
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description: 'Automate customer communication and campaigns efficiently.',
    points: ['Custom workflows', 'Drip campaigns', 'Instant notifications'],
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description: 'Voice agents for calls, scheduling, and lead follow-ups.',
    points: ['Human-like voice', '24/7 availability', 'Optimized sales process'],
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI models designed for your unique business needs.',
    points: ['Fully customized models', 'Secure integration', 'Scalable solutions'],
  },
  {
    icon: Globe,
    title: 'Web & App AI Integration',
    description: 'Embed AI features into your websites and mobile apps.',
    points: ['Seamless integration', 'Cross-platform support', 'Faster deployment'],
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics & Insights',
    description: 'Transform data into actionable insights for better decisions.',
    points: ['Data-driven strategies', 'Predictive modeling', 'Real-time reporting'],
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Keep your AI solutions secure and compliant with regulations.',
    points: ['Advanced encryption', 'GDPR compliance', 'Continuous monitoring'],
  },
];

const steps = [
  {
    icon: Layers,
    title: 'Plan Your Integration',
    description: 'Understand your business needs and identify areas for AI deployment.',
  },
  {
    icon: CheckCircle,
    title: 'AI Model Setup',
    description: 'Configure and train the AI model for optimal performance.',
  },
  {
    icon: Rocket,
    title: 'Testing & Deployment',
    description: 'Run tests, optimize performance, and deploy into production seamlessly.',
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
              className="group hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-200 rounded-2xl bg-white p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-indigo-500 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transform transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <ul className="text-left space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
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

        {/* Deployment Steps Section */}
        <div className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Deliver <span className="text-red-500">Excellence</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-indigo-500 text-white">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
