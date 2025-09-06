import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/ContactSection';
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
  Rocket, 
  Wrench, 
  Monitor,
  Clock,
  Users,
  Target,
  TrendingUp,
  Lock,
  Headphones,
  Lightbulb,
  Star
} from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Tools & Custom Agents',
    description: 'Intelligent agents that autonomously solve complex problems and streamline operations with advanced AI capabilities.',
    features: [
      'Autonomous AI workflows that adapt to your business needs',
      'Custom agent development for specific use cases',
      'Seamless system integration with existing tools',
      'Real-time decision making and problem solving',
      'Multi-language support and natural conversation',
      'Advanced reasoning and context understanding'
    ],
    pricing: 'Custom Quote',
    category: 'AI Development'
  },
  {
    icon: Cog,
    title: 'Business Process Automation',
    description: 'Transform your operations with intelligent automation solutions that reduce costs and increase efficiency.',
    features: [
      'Workflow optimization and analysis',
      'Automated task execution and monitoring',
      'Integration with existing business systems',
      'Performance analytics and reporting',
      'Scalable automation frameworks',
      'ROI tracking and optimization'
    ],
    pricing: 'Starting at $2,500',
    category: 'Automation'
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Virtual Assistants',
    description: 'Deploy smart conversational agents that provide 24/7 customer support with human-like interactions.',
    features: [
      'Natural language understanding and processing',
      'Multi-platform deployment (web, mobile, social)',
      'Customer intent recognition and routing',
      'Knowledge base integration and management',
      'Conversation analytics and insights',
      'Multilingual support and localization'
    ],
    pricing: 'Starting at $1,500',
    category: 'Conversational AI'
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Automations',
    description: 'Engage customers through intelligent communication flows that nurture leads and drive conversions.',
    features: [
      'Personalized messaging based on user behavior',
      'Automated lead nurturing sequences',
      'Smart response handling and routing',
      'A/B testing for optimal engagement',
      'Integration with CRM and marketing tools',
      'Performance tracking and optimization'
    ],
    pricing: 'Starting at $800',
    category: 'Communication'
  },
  {
    icon: Phone,
    title: 'Voice AI for Sales & Scheduling',
    description: 'Deploy human-like voice agents to handle calls, bookings, and customer support with natural speech.',
    features: [
      'High-accuracy speech recognition and synthesis',
      'Intelligent call routing and handling',
      'Appointment scheduling and management',
      'Sales conversation optimization',
      'Real-time sentiment analysis',
      'Call analytics and performance insights'
    ],
    pricing: 'Starting at $2,000',
    category: 'Voice AI'
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description: 'Bespoke AI solutions designed specifically for your unique business challenges and industry requirements.',
    features: [
      'Industry-specific AI model development',
      'Custom algorithm design and implementation',
      'Scalable cloud infrastructure setup',
      'Future-ready architecture planning',
      'Ongoing optimization and maintenance',
      'Dedicated technical support'
    ],
    pricing: 'Custom Quote',
    category: 'Custom Development'
  },
  {
    icon: Globe,
    title: 'Web & App AI Integration',
    description: 'Enhance your digital platforms with AI-powered features for improved user engagement and functionality.',
    features: [
      'Cross-platform AI feature integration',
      'Performance optimization and monitoring',
      'User experience enhancement through AI',
      'Real-time data processing capabilities',
      'API development and management',
      'Mobile and web compatibility'
    ],
    pricing: 'Starting at $3,000',
    category: 'Integration'
  },
  {
    icon: BarChart,
    title: 'Predictive Analytics & Insights',
    description: 'Transform your data into actionable insights with advanced predictive models and real-time analytics.',
    features: [
      'Advanced trend forecasting and prediction',
      'Customer behavior analysis and segmentation',
      'Real-time reporting and dashboards',
      'Data visualization and interpretation',
      'Risk assessment and mitigation',
      'Business intelligence integration'
    ],
    pricing: 'Starting at $2,200',
    category: 'Analytics'
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
    features: [
      'End-to-end data encryption and protection',
      'GDPR, CCPA, and industry compliance',
      'AI model security and vulnerability testing',
      'Risk management and threat detection',
      'Audit trails and compliance reporting',
      'Security monitoring and incident response'
    ],
    pricing: 'Starting at $1,800',
    category: 'Security'
  }
];

const processSteps = [
  {
    icon: Target,
    title: 'Discovery & Strategy',
    description: 'We analyze your business needs, identify AI opportunities, and create a comprehensive implementation strategy.',
    duration: '1-2 weeks'
  },
  {
    icon: Lightbulb,
    title: 'Solution Design',
    description: 'Our experts design custom AI solutions tailored to your specific requirements and technical infrastructure.',
    duration: '2-3 weeks'
  },
  {
    icon: Wrench,
    title: 'Development & Testing',
    description: 'We build, test, and refine your AI solution with rigorous quality assurance and performance optimization.',
    duration: '4-8 weeks'
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support, monitoring, and optimization to ensure success.',
    duration: 'Ongoing'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline workflows for up to 80% time savings.'
  },
  {
    icon: Users,
    title: 'Enhanced Customer Experience',
    description: 'Provide 24/7 intelligent support and personalized interactions that delight customers.'
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with real-time analytics and predictive intelligence.'
  },
  {
    icon: Lock,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with full compliance to industry standards and regulations.'
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Professional AI Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with 
              <span className="text-secondary"> AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From intelligent automation to custom AI agents, we deliver cutting-edge solutions 
              that drive growth, reduce costs, and enhance customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Start Your AI Journey
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Services?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver measurable results with AI solutions that transform how you work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address every aspect of your business transformation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="font-semibold text-primary">{service.pricing}</span>
                    <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach that ensures successful AI implementation from concept to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border -z-10 hidden lg:block" 
                       style={{ display: index === processSteps.length - 1 ? 'none' : 'block' }} />
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our AI services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does AI implementation take?",
                answer: "Implementation timelines vary based on complexity, typically ranging from 4-12 weeks for most projects."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive ongoing support, maintenance, and optimization services for all our AI solutions."
              },
              {
                question: "Can AI integrate with existing systems?",
                answer: "Absolutely. Our solutions are designed to seamlessly integrate with your current business systems and workflows."
              },
              {
                question: "What's the ROI of AI implementation?",
                answer: "Most clients see 200-400% ROI within the first year through efficiency gains and cost reductions."
              },
              {
                question: "Is our data secure with AI solutions?",
                answer: "Yes, we implement enterprise-grade security measures and ensure full compliance with data protection regulations."
              },
              {
                question: "Do you offer custom AI development?",
                answer: "Yes, we specialize in developing custom AI solutions tailored to your specific business needs and industry requirements."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-secondary" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ServicesPage;