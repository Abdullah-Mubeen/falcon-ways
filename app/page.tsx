"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import HeroSlider from '@/components/hero-slider';
import { ServiceGrid } from '@/components/service-grid';
import { ProjectGrid } from '@/components/ProjectGrid';
import { ContactCTA } from '@/components/contact-cta';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [isContactOpen, setIsContactOpen] = useState(false);


  const slides = [
    {
      title: "Global Trade Excellence",
      subtitle: "Bridging International Markets with Saudi Arabia",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Advanced Technology Solutions",
      subtitle: "Leading the Digital Transformation in the Middle East",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      title: "Security & Infrastructure",
      subtitle: "Building the Foundation of Tomorrow's Business",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSlider slides={slides}/>
      <ServiceGrid />
      <ProjectGrid />
      <ContactCTA setIsContactOpen={setIsContactOpen} isContactOpen={isContactOpen} />

    </div>
  );
}