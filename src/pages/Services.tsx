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
    description: 'Scheduled automation that creates and publishes video content.',
    category: 'Content Creation',
    features: [
      'Generates videos from trending topics or text prompts',
      'Integrates with YouTube, TikTok, Instagram, Facebook, LinkedIn',
      'Posts at optimal times for engagement',
      'Adapts format automatically (MP4, reels, shorts)',
      'Archives content for reusability and analytics'
    ]
  },
  {
    icon: Phone,
    title: 'AI Call Receptionist',
    description: 'Answers incoming calls for local businesses.',
    category: 'Customer Service',
    badge: 'Coffee Shop Example',
    features: [
      'Qualifies callers & answers FAQs',
      'Identifies dine-in or takeaway orders',
      'Records customer order details',
      'Passes verified orders to sales/execution team',
      'Handles missed calls & follow-ups'
    ]
  },
  {
    icon: Users,
    title: 'AI Cold Caller Sales Team',
    description: 'Executes cold calls at scale with intelligent automation.',
    category: 'Sales Automation',
    features: [
      'Extracts phone numbers from spreadsheets',
      'Executes cold calls at scale (up to 22/minute)',
      'Delivers customized sales pitches per niche',
      'Records & transcribes calls',
      'Uses dynamic responses to engage leads',
      'Pushes qualified leads into CRM'
    ]
  },
  {
    icon: Target,
    title: 'AI Lead Generation Agent',
    description: 'Scrapes and structures targeted company data into leads.',
    category: 'Lead Generation',
    badge: 'Paid & Free',
    features: [
      'Collects lead requirements (niche, quantity, location)',
      'Scrapes company data (name, website, phone, email, address)',
      'Outputs structured leads into spreadsheets',
      'Example: "Landscapers | 10 leads | Toronto, Canada"'
    ]
  },
  {
    icon: BarChart3,
    title: 'AI Social Media Content Manager',
    description: 'Auto-creates and posts content with performance analytics.',
    category: 'Social Media',
    features: [
      'Generates daily/weekly business content',
      'Creates text, creatives, videos, and captions',
      'Uploads posts across multi-platforms',
      'Engages with comments & auto-replies',
      'Builds performance reports with analytics',
      'Adapts tone for each business niche'
    ]
  },
  {
    icon: Video,
    title: 'AI Log Creator (VEO3)',
    description: 'Generates 3–4 minute long-form polished videos.',
    category: 'Content Creation',
    features: [
      'Automates video creation pipeline',
      'Uploads directly to company\'s social media',
      'Supports multiple industries',
      'Archives logs into knowledgebase'
    ]
  },
  {
    icon: Zap,
    title: 'AI Trading Signals Agent',
    description: 'Provides trading signals with 76% accuracy rate.',
    category: 'Financial Services',
    badge: '76% Accuracy',
    features: [
      'Analyzes stock, forex, and crypto in real-time',
      'Auto-updates dashboards with buy/sell/hold alerts',
      'Integrates with MetaTrader, Binance, TradingView',
      'Sends push notifications via WhatsApp, Telegram, Email',
      'Generates daily/weekly reports with accuracy stats'
    ]
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Support Chatbot',
    description: 'Multi-channel support with intelligent ticket management.',
    category: 'Customer Service',
    features: [
      'Multi-channel support (websites, WhatsApp, Messenger)',
      'Resolves common queries with AI responses',
      'Escalates complex tickets',
      'Integrates with CRMs (Zendesk, HubSpot, Freshdesk)',
      'Provides full conversation logs for analytics',
      'Reduces support costs while improving service'
    ]
  },
  {
    icon: Home,
    title: 'AI Real Estate Listing Agent',
    description: 'Automates real estate operations from listings to lead management.',
    category: 'Real Estate',
    features: [
      'Auto-uploads listings to multiple portals',
      'Responds instantly to buyer inquiries',
      'Generates virtual tours & property descriptions',
      'Filters prospects by budget & location',
      'Adds verified leads to CRM',
      'Provides call reminders for serious buyers'
    ]
  },
  {
    icon: Calendar,
    title: 'AI Appointment Scheduler',
    description: 'Manages real-time bookings across multiple calendars.',
    category: 'Automation',
    features: [
      'Syncs with Google, Outlook, CRMs',
      'Sends confirmations & reminders',
      'Suggests alternative timeslots',
      'Reschedules/cancels via chat/voice',
      'Logs all appointments into dashboard'
    ]
  },
  {
    icon: Mail,
    title: 'AI Email Outreach Agent',
    description: 'Automates personalized email campaigns with intelligent follow-ups.',
    category: 'Marketing',
    features: [
      'Customizes templates & subject lines',
      'Tracks opens, clicks, and replies',
      'Sends personalized follow-ups',
      'Integrates with Gmail, Outlook, HubSpot',
      'Example: dentist outreach, real estate campaigns'
    ]
  },
  {
    icon: UserCheck,
    title: 'AI HR Recruitment Screener',
    description: 'Automates candidate screening and qualification process.',
    category: 'Human Resources',
    features: [
      'Auto-screens resumes',
      'Extracts candidate details into structured data',
      'Qualifies talent per job description',
      'Conducts initial interviews (chat/voice)',
      'Scores & ranks candidates',
      'Sends final report to HR'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'AI E-commerce Order Assistant',
    description: 'Streamlines e-commerce operations with intelligent automation.',
    category: 'E-commerce',
    features: [
      'Confirms & processes online orders',
      'Tracks payments, invoices, updates',
      'Notifies sales team of new inquiries',
      'Suggests upsells & cross-sells',
      'Automates shipping/delivery notifications',
      'Handles returns & exchanges'
    ]
  },
  {
    icon: Star,
    title: 'AI Influencer Collaboration Agent',
    description: 'Automates influencer discovery and campaign management.',
    category: 'Marketing',
    features: [
      'Finds influencers by niche & region',
      'Extracts contact data & emails',
      'Automates outreach proposals',
      'Manages responses & tracking',
      'Provides campaign ROI reports',
      'Supports Instagram, TikTok, YouTube'
    ]
  },
  {
    icon: RotateCcw,
    title: 'AI Content Repurposer',
    description: 'Transforms existing content into multiple formats and platforms.',
    category: 'Content Creation',
    features: [
      'Takes existing content (blogs/podcasts/videos)',
      'Breaks into shorts, highlights, tweets',
      'Creates optimized captions per platform',
      'Ensures consistent daily posting',
      'Saves variations for A/B testing',
      'Generates channel performance reports'
    ]
  },
  {
    icon: Search,
    title: 'AI Market Research Agent',
    description: 'Provides actionable business insights through automated research.',
    category: 'Analytics',
    features: [
      'Scans forums, reviews, and social media',
      'Identifies customer pain points',
      'Extracts competitor strengths/weaknesses',
      'Generates actionable insights reports',
      'Suggests offers & new service ideas',
      'Ideal for startups testing new ideas'
    ]
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-muted/20 animate-scale-in overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                    {service.badge && (
                      <Badge variant="outline" className="text-xs font-medium bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20 text-primary">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs w-fit bg-muted/50">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors leading-tight mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary/5 group-hover:text-primary transition-all duration-300"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
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