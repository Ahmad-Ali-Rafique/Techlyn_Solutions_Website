import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  LayoutDashboard, 
  Calendar, 
  BarChart3, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Target
} from 'lucide-react';

const suites = [
  { id: 'ai-communication', name: 'AI Communication Suite', available: true },
  { id: 'marketing', name: 'Marketing Suite', available: false },
  { id: 'automation', name: 'Automation Suite', available: false },
  { id: 'vision', name: 'Vision Suite', available: false },
];

const features = [
  {
    icon: Phone,
    title: 'AI-Powered Call Manager',
    headline: 'Let AI handle your business calls just like a professional receptionist',
    description: 'It greets customers, understands their queries, schedules appointments, takes messages, or forwards important calls to the right person — 24/7. Perfect for clinics, agencies, or service businesses that never want to miss a single client call again.',
    keywords: 'AI call manager, automated receptionist, AI phone system'
  },
  {
    icon: MessageSquare,
    title: 'Smart WhatsApp Engagement Bot',
    headline: 'Engage your customers instantly on the most popular messaging platform',
    description: 'The bot answers FAQs, confirms orders or appointments, sends reminders, and follows up on leads automatically. It can be customized for different industries — like appointment reminders for clinics, order updates for e-commerce, or client onboarding for agencies.',
    keywords: 'WhatsApp chatbot for business, AI WhatsApp automation, customer engagement bot'
  },
  {
    icon: Mail,
    title: 'Intelligent Email Automation Hub',
    headline: 'Save hours of manual email management with intelligent automation',
    description: 'This system filters, prioritizes, and responds to emails automatically — whether it\'s inquiries, support tickets, or follow-ups. You can personalize replies, trigger auto-responders, or forward critical messages to your team — all managed by AI.',
    keywords: 'AI email assistant, smart email automation, customer email reply automation'
  },
  {
    icon: LayoutDashboard,
    title: 'Unified Communication Dashboard',
    headline: 'View every conversation in a single, organized dashboard',
    description: 'Track leads, view customer histories, monitor team activity, and measure response times. The dashboard provides real-time visibility and helps businesses make faster, data-driven communication decisions.',
    keywords: 'unified communication platform, omnichannel dashboard, client communication management'
  },
  {
    icon: Calendar,
    title: 'Automated Meeting & Follow-up Scheduler',
    headline: 'Say goodbye to manual scheduling and missed meetings',
    description: 'This tool automatically books appointments, sends reminders, and follows up after meetings — based on your availability or rules. It can also sync with WhatsApp or email to confirm meetings directly with clients.',
    keywords: 'AI appointment scheduler, meeting automation, smart follow-up assistant'
  },
  {
    icon: BarChart3,
    title: 'AI Insights & Performance Analytics',
    headline: 'Gain deep insights into how your business communicates',
    description: 'The suite analyzes conversations to detect customer sentiment, identify response delays, and highlight recurring questions. It provides actionable analytics to help you improve customer satisfaction, lead conversion, and operational efficiency.',
    keywords: 'AI analytics, customer sentiment tracking, business communication insights'
  },
];

const outcomes = [
  'Improve response speed by up to 80%',
  'Never miss a call, chat, or email again',
  'Free your team from repetitive communication tasks',
  'Build customer trust through 24/7 intelligent engagement',
  'Centralize all communication under one AI-powered hub',
];

const TechlynSuites = () => {
  const [activeSuite, setActiveSuite] = useState('ai-communication');

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background ml-64">
      <Navigation />
      
      <div className="pt-16">
        {/* Main Content */}
        <main className="px-8 py-12" id="suites-content">
          <div className="max-w-6xl mx-auto">
            {activeSuite === 'ai-communication' && (
              <div className="space-y-16 animate-fade-in">
                {/* Hero Section */}
                <section className="text-center space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0b3c74] via-[#0b3c74] to-[#e60000] bg-clip-text text-transparent leading-tight">
                    The Future of Business Communication — Powered by AI
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                    Techlyn's AI Communication Suite helps businesses automate calls, chats, and emails through intelligent systems — so you can connect faster, respond smarter, and scale effortlessly.
                  </p>
                  <Button
                    size="lg"
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-[#0b3c74] to-[#e60000] hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group mt-6"
                  >
                    Discover how AI can transform your communication
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </section>

                {/* About Section */}
                <section className="bg-gradient-to-br from-card/50 to-muted/20 rounded-2xl p-8 border border-border">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    What is the AI Communication Suite?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    The Techlyn AI Communication Suite is a complete ecosystem of intelligent tools that combine voice, chat, and email automation into one unified platform. It helps companies handle customer queries, schedule meetings, send reminders, and track communication analytics — without needing a large support team.
                  </p>
                  <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">Voice</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">WhatsApp</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">Email</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <LayoutDashboard className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">Dashboard</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">Scheduler</span>
                    </div>
                    <div className="w-px h-6 bg-border"></div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[#0b3c74]" />
                      <span className="font-medium">Analytics</span>
                    </div>
                  </div>
                </section>

                {/* Feature Cards */}
                <section>
                  <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                    Complete Suite Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                      <Card
                        key={feature.title}
                        className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardHeader>
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0b3c74] to-[#e60000] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="w-7 h-7 text-white" />
                          </div>
                          <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                          <p className="text-base font-medium text-[#0b3c74]">{feature.headline}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <CardDescription className="text-base leading-relaxed">
                            {feature.description}
                          </CardDescription>
                          <p className="text-xs text-muted-foreground/60 italic">
                            Keywords: {feature.keywords}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Outcomes Section */}
                <section className="bg-gradient-to-br from-[#0b3c74]/5 to-[#e60000]/5 rounded-2xl p-10 border border-border">
                  <div className="flex items-center gap-3 mb-8">
                    <Target className="w-8 h-8 text-[#e60000]" />
                    <h2 className="text-3xl font-bold text-foreground">
                      Why Businesses Choose Techlyn AI Communication Suite
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {outcomes.map((outcome, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/30"
                      >
                        <CheckCircle2 className="w-6 h-6 text-[#0b3c74] flex-shrink-0 mt-0.5" />
                        <span className="text-base text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="text-center space-y-6 py-12">
                  <h2 className="text-4xl font-bold text-foreground">
                    Ready to experience the power of AI communication?
                  </h2>
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      size="lg"
                      onClick={scrollToContact}
                      className="bg-gradient-to-r from-[#0b3c74] to-[#e60000] hover:shadow-xl hover:scale-105 transition-all duration-300 text-xl px-12 py-7 group"
                    >
                      Request a Demo
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-sm text-muted-foreground/70 italic">
                      No pricing shown intentionally — we customize every suite to your business needs.
                    </p>
                  </div>
                </section>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TechlynSuites;
