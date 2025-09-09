import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Cog, MessageSquare, Mail, Phone, Zap, Globe, BarChart, Shield, CheckCircle, Rocket, Wrench, Monitor } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description: 'Intelligent agents that autonomously solve complex problems and streamline operations.',
    points: ['Autonomous AI workflows', 'Customizable solutions', 'Seamless system integration'],
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description: 'Streamline your business with intelligent automation solutions for better efficiency.',
    points: ['Workflow optimization', 'Time-saving automations', 'Cost reduction strategies'],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Deliver 24/7 support with smart, human-like conversational agents.',
    points: ['Natural language understanding', 'Multi-platform integration', 'Customer self-service'],
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description: 'Engage customers through automated communication flows that convert.',
    points: ['Personalized messaging', 'Lead nurturing sequences', 'Response automation'],
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description: 'Human-like voice agents to manage calls, bookings, and client support.',
    points: ['Speech-to-text accuracy', 'Sales call handling', 'Appointment management'],
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description: 'AI solutions designed specifically for your unique business challenges.',
    points: ['Tailored to industry needs', 'High scalability', 'Future-ready architecture'],
  },
  {
    icon: Globe,
    title: 'Web & App AI Integration',
    description: 'Upgrade your platforms with AI-powered features for enhanced engagement.',
    points: ['Cross-platform integration', 'Performance optimization', 'User experience boost'],
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics & Insights',
    description: 'Turn your data into actionable insights with predictive models.',
    points: ['Trend forecasting', 'Customer behavior analysis', 'Real-time reporting'],
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Keep your AI systems secure and compliant with global standards.',
    points: ['Data encryption', 'GDPR compliance', 'Risk management'],
  },
];

const steps = [
  {
    icon: Wrench,
    title: 'Step 1: Plan Your Integration',
    description: 'Define your goals, select processes for AI integration, and map your workflow.',
  },
  {
    icon: Monitor,
    title: 'Step 2: AI Model Setup',
    description: 'Customize and deploy the AI models tailored for your business requirements.',
  },
  {
    icon: CheckCircle,
    title: 'Step 3: Testing & Optimization',
    description: 'Run detailed tests, refine workflows, and ensure the system meets performance targets.',
  },
  {
    icon: Rocket,
    title: 'Step 4: Launch & Scale',
    description: 'Deploy the AI solution, monitor results, and scale across departments.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background via-muted/30 to-muted/50">
      <div className="container mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="uppercase text-sm font-semibold text-secondary tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mt-2">
            Transform Your Business with <span className="text-secondary">AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore our comprehensive suite of AI-driven solutions designed to optimize workflows,
            improve customer experiences, and boost your growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 border border-border rounded-2xl bg-card p-8"
            >
              <CardHeader className="flex flex-col items-center mb-4 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transform transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2" /> {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            onClick={() => window.location.href = '/services'}
            className="bg-gradient-to-r from-secondary to-primary text-white hover:opacity-90 transition-all duration-300 px-10 py-6 text-lg font-semibold"
          >
            Explore All Services →
          </Button>
        </div>

        {/* Deployment Steps */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-2">How We Work</h3>
            <p className="text-muted-foreground text-lg">
              Simple, structured, and result-oriented AI integration process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
