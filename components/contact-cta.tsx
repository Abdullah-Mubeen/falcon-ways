"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  setIsContactOpen: (open: boolean) => void;
  isContactOpen: boolean;
};

export const ContactCTA = ({ setIsContactOpen }: Props) => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
              Start a Project
            </h2>
            <p className="text-gray-600 mb-8">
              Let's create something extraordinary together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsContactOpen(true)} // This opens the contact modal
              className="px-8 py-4 bg-black text-white rounded-full flex items-center space-x-2 mx-auto hover:bg-black/90 transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.2em]">
                Get in Touch
              </span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
