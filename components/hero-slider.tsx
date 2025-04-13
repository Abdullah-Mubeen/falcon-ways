'use client';

import { motion, AnimatePresence, useSpring, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Scroll-based animation (optional, can be removed if unused)
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="relative h-screen overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-white/80 mb-8">
                {slides[currentSlide].subtitle}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white text-black rounded-full flex items-center space-x-2 hover:bg-white/90 transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.2em]">Explore Work</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-12 left-6 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
