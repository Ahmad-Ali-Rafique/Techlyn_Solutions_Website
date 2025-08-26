import { motion } from "framer-motion";
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Tools & Custom Agents",
    description:
      "Intelligent agents that work autonomously to solve complex business problems and automate decision-making processes.",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description:
      "Streamline your operations with smart automation solutions that reduce manual work and increase efficiency.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Deploy conversational AI that provides 24/7 customer support and handles complex inquiries naturally.",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Automations",
    description:
      "Automate your communication workflows with intelligent email and messaging systems that engage customers.",
  },
  {
    icon: Phone,
    title: "Voice AI for Sales & Scheduling",
    description:
      "Human-like voice agents that handle sales calls, appointment scheduling, and customer interactions.",
  },
  {
    icon: Zap,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions designed specifically for your unique business requirements.",
  },
];

export const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-red-200 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
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
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-red-500/60 via-gray-200 to-navy shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Inner Card */}
              <div className="bg-white rounded-3xl p-8 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:scale-[1.02]">
                {/* Icon */}
                <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-navy text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-10 h-10" />
                </div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
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
