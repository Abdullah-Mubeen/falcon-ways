"use client";

import { motion } from 'framer-motion';
import { Users, Building2, Award, LineChart } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, label: "Global Clients", value: "500+" },
    { icon: Building2, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: LineChart, label: "Growth Rate", value: "40%" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6">Our Story</h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Leading the digital transformation in Saudi Arabia and beyond
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-6">Our Mission</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              To empower businesses through innovative technology solutions that drive growth and success in the digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-light mb-6">Our Vision</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              To be the leading technology solutions provider in the Middle East, known for excellence, innovation, and customer success.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-6 text-white/60" />
              <div className="text-4xl font-light mb-2">{stat.value}</div>
              <div className="text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}