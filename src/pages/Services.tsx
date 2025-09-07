import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContactSection } from '@/components/ContactSection';
import { 
  Bot, 
  Video, 
  Phone, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  MessageSquare, 
  Home, 
  Calendar, 
  Mail, 
  UserCheck, 
  ShoppingCart, 
  Star, 
  RotateCcw, 
  Search,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Settings,
  Headphones
} from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Viral Content Generator',
    description: 'Scheduled automation that creates & publishes videos across platforms.',
    category: 'Content Creation'
  },
  {
    icon: Phone,
    title: 'AI Call Receptionist',
    description: 'Handles calls, FAQs, and orders for local businesses.',
    category: 'Customer Service'
  },
  {
    icon: Users,
    title: 'AI Cold Caller Sales Team',
    description: 'Bulk cold calls, lead engagement, CRM integration.',
    category: 'Sales Automation'
  },
  {
    icon: Target,
    title: 'AI Lead Generation Agent',
    description: 'Scrapes and structures targeted company data into leads.',
    category: 'Lead Generation'
  },
  {
    icon: BarChart3,
    title: 'AI Social Media Content Manager',
    description: 'Auto-creates and posts content with analytics reports.',
    category: 'Social Media'
  },
  {
    icon: Video,
    title: 'AI Log Creator (VEO3)',
    description: 'Generates polished long-form video logs.',
    category: 'Content Creation'
  },
  {
    icon: Zap,
    title: 'AI Trading Signals Agent',
    description: '76% accurate signals for stock, forex, crypto.',
    category: 'Financial Services'
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Support Chatbot',
    description: 'Multi-channel support with ticket escalation.',
    category: 'Customer Service'
  },
  {
    icon: Home,
    title: 'AI Real Estate Listing Agent',
    description: 'Uploads listings, filters leads, and creates virtual tours.',
    category: 'Real Estate'
  },
  {
    icon: Calendar,
    title: 'AI Appointment Scheduler',
    description: 'Manages bookings, confirmations, reschedules.',
    category: 'Automation'
  },
  {
    icon: Mail,
    title: 'AI Email Outreach Agent',
    description: 'Automates outreach campaigns with follow-ups.',
    category: 'Marketing'
  },
  {
    icon: UserCheck,
    title: 'AI HR Recruitment Screener',
    description: 'Auto-screens resumes, scores candidates.',
    category: 'Human Resources'
  },
  {
    icon: ShoppingCart,
    title: 'AI E-commerce Order Assistant',
    description: 'Processes orders, notifications, upsells.',
    category: 'E-commerce'
  },
  {
    icon: Star,
    title: 'AI Influencer Collaboration Agent',
    description: 'Finds influencers, manages outreach.',
    category: 'Marketing'
  },
  {
    icon: RotateCcw,
    title: 'AI Content Repurposer',
    description: 'Repurposes blogs/podcasts/videos into short content.',
    category: 'Content Creation'
  },
  {
    icon: Search,
    title: 'AI Market Research Agent',
    description: 'Scans forums & reviews to generate insights.',
    category: 'Analytics'
  }
];

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Consultation',
    description: 'We analyze your business needs and identify AI automation opportunities.',
    step: '01'
  },
  {
    icon: Settings,
    title: 'Customization',
    description: 'We design and develop custom AI agents tailored to your specific requirements.',
    step: '02'
  },
  {
    icon: Zap,
    title: 'Integration',
    description: 'Seamless integration with your existing systems and workflows using n8n.',
    step: '03'
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Continuous monitoring, optimization, and support to ensure maximum performance.',
    step: '04'
  }
];


const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Our AI Services Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Custom AI Agents & Automation Solutions built with n8n and advanced AI models.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">AI Automation Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI agents and automation tools designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-2 hover:border-primary/20 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 text-primary">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process ensures successful AI implementation from concept to deployment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative z-10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-10 left-1/2 w-full h-0.5 bg-border -z-10 hidden lg:block transform translate-x-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-primary">Why Choose Techlyn Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Proven Results</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI solutions deliver measurable ROI with up to 80% efficiency improvements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Advanced AI Models</h3>
                <p className="text-muted-foreground text-sm">
                  Built with cutting-edge AI technology and integrated with powerful automation platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Headphones className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">24/7 Support</h3>
                <p className="text-muted-foreground text-sm">
                  Dedicated support team ensuring your AI systems run smoothly around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Transform your operations with custom AI agents and automation solutions. 
              Let's discuss how we can help you achieve your business goals.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
              onClick={() => window.location.href = '/contact'}
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
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