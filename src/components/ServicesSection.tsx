import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description:
      'Autonomous intelligent agents built to execute tasks, analyze data, and make decisions—enhancing productivity and reducing costs.',
    features: ['Task Automation', 'Decision Intelligence', 'Adaptive Learning']
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description:
      'Re-engineer your workflows with advanced automation to minimize human effort, save time, and scale operations effectively.',
    features: ['RPA Integration', 'Workflow Optimization', 'Data-driven Insights']
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description:
      'Provide 24/7 personalized support and seamless customer interactions with conversational AI that learns and evolves.',
    features: ['Natural Language Processing', 'Omnichannel Support', 'Scalable Chat Solutions']
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description:
      'Automate customer engagement with personalized campaigns, smart follow-ups, and real-time communication flows.',
    features: ['Bulk Messaging', 'Behavior-based Triggers', 'CRM Integration']
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description:
      'Human-like voice agents that handle sales calls, appointments, and inquiries—boosting efficiency and closing deals faster.',
    features: ['Speech Recognition', 'Dynamic Responses', 'Calendar Integration']
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description:
      'Develop tailor-made AI solutions that align with your business goals and drive measurable growth.',
    features: ['Custom Models', 'Predictive Analytics', 'Integration with Existing Systems']
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Power Your Business with <span className="text-red-500">AI Innovation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover smart, scalable, and customized AI-powered services to transform your operations and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 border border-gray-100 rounded-2xl bg-white p-8 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-navy flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transform transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-navy transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 text-sm text-left mt-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Deployment Steps */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Deploy Our Solutions</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { step: '1', title: 'Consultation', desc: 'Discuss your requirements and identify the best AI strategy.' },
              { step: '2', title: 'Development', desc: 'We design and develop custom AI solutions tailored to your needs.' },
              { step: '3', title: 'Integration', desc: 'Seamless integration with your existing systems and workflows.' },
              { step: '4', title: 'Deployment', desc: 'Full-scale deployment with continuous optimization and support.' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border hover:shadow-lg transition">
                <div className="w-12 h-12 mx-auto flex items-center justify-center bg-red-500 text-white text-xl font-bold rounded-full mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-navy hover:shadow-lg transition-all duration-300"
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
