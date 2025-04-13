'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/lib/services';
import { ArrowUpRight } from 'lucide-react';

export const ServiceGrid = () => {
  return (
    <section className="py-32 bg-white text-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Falcon-Ways delivers comprehensive solutions across multiple sectors, providing high-quality products and services that exceed expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((services, index) => (
            <Link href={`/services/${services.slug}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-10 rounded-3xl bg-gray-50 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <services.icon className="h-12 w-12 mb-8" />
                <h3 className="text-2xl font-light mb-4">{services.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{services.desc}</p>
                <ArrowUpRight className="h-8 w-8 mt-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
