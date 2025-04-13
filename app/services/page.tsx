"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MonitorSmartphone, Network, Shield, Zap, Boxes, Code2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Audiovisual Systems",
      desc: "State-of-the-art audiovisual solutions for modern communication needs",
      slug: "audiovisual-systems"
    },
    {
      icon: Network,
      title: "IT & Networking",
      desc: "Comprehensive IT infrastructure and networking solutions",
      slug: "it-networking"
    },
    {
      icon: Shield,
      title: "Security Systems",
      desc: "Advanced security solutions to protect your assets",
      slug: "security-systems"
    },
    {
      icon: Zap,
      title: "Electrical Supplies",
      desc: "High-quality electrical components and solutions",
      slug: "electrical-supplies"
    },
    {
      icon: Boxes,
      title: "Industrial Materials",
      desc: "Premium industrial supplies for various sectors",
      slug: "industrial-materials"
    },
    {
      icon: Code2,
      title: "Digital Services",
      desc: "Cutting-edge digital solutions for business growth",
      slug: "digital-services"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">Our Services</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div className="group p-10 rounded-3xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <service.icon className="h-12 w-12 mb-8" />
                  <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                  <p className="text-lg text-white/60 leading-relaxed mb-8">{service.desc}</p>
                  <div className="flex items-center space-x-2 text-white/60 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}