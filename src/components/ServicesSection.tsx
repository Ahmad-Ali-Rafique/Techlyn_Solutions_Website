"use client";

import { motion } from "framer-motion";
import { Bot, Cog, MessageSquare, Mail, Phone, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Tools & Custom Agents",
    description:
      "Intelligent agents that work autonomously to solve complex business problems and automate decision-making processes.",
    tag: "AI Powered",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description:
      "Streamline your operations with smart automation solutions that reduce manual work and increase efficiency.",
    tag: "Automation",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Deploy conversational AI that provides 24/7 customer support and handles complex inquiries naturally.",
    tag: "Chatbots",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Automations",
    description:
      "Automate your communication workflows with intelligent email and messaging systems that engage customers.",
    tag: "Messaging",
  },
  {
    icon: Phone,
    title: "Voice AI for Sales & Scheduling",
    description:
      "Human-like voice agents that handle sales calls, appointment scheduling, and customer interactions.",
    tag: "Voice AI",
  },
  {
    icon: Zap,
    title: "Custom AI Solutions",
    description:
      "Tailored artificial intelligence solutions designed specifically for your unique business requirements.",
    tag: "Custom",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-50 via-white to-red-100 opacity-50 blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            Our <span className="text-red-500">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mt-4"
          >
            Transform your business with our intelligent, scalable, and future-ready AI solutions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* Tag */}
              <span className="absolute top-4 right-4 text-xs font-semibold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href="/services"
                className="inline-flex items-center text-red-500 font-medium text-sm hover:underline"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Explore All Services →
          </a>
        </div>
      </div>
    </section>
  );
};
