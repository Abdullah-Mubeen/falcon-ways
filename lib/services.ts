import {
    MonitorSmartphone,
    Network,
    Shield,
    Zap,
    Boxes,
    Code2,
  } from 'lucide-react';
  
  export interface Service {
    slug: string;
    title: string;
    desc: string;
    content: string;
    icon: any;
    features: string[];
    image: string;
  }
  
  export const services: Service[] = [
    {
      slug: 'audiovisual-systems',
      title: 'Audiovisual Systems',
      desc: 'State-of-the-art audiovisual solutions for modern communication needs',
      content: 'We deliver high-end audiovisual systems tailored for corporate, educational, and hospitality environments. From digital signage to integrated sound and display systems, we ensure flawless communication.',
      icon: MonitorSmartphone,
      features: [
        'Digital Signage Solutions',
        'Conference Room Systems',
        'Interactive Displays',
        'Sound Systems',
        'Control Systems',
        'Video Walls',
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    },
    {
      slug: 'it-networking',
      title: 'IT & Networking',
      desc: 'Comprehensive IT infrastructure and networking solutions',
      content: 'We build reliable and scalable networking solutions. From structured cabling to wireless networks and cloud integration, we’ve got your tech backbone covered.',
      icon: Network,
      features: [
        'Network Design & Setup',
        'Server Installation',
        'Cloud Integration',
        'Firewall & VPN Configuration',
        'Wired & Wireless Solutions',
        'Ongoing IT Support',
      ],
      image: 'https://images.unsplash.com/photo-1581090700227-1c4e1db8da1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      slug: 'security-systems',
      title: 'Security Systems',
      desc: 'Advanced security solutions to protect your assets',
      content: 'Protect your physical and digital spaces with intelligent surveillance, access control, and alarm systems tailored for your business or home.',
      icon: Shield,
      features: [
        'CCTV Surveillance',
        'Biometric Access Control',
        'Alarm Systems',
        '24/7 Monitoring',
        'Remote Access Integration',
        'Visitor Management',
      ],
      image: 'https://images.unsplash.com/photo-1601233748137-8e2e8b87f9ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      slug: 'electrical-supplies',
      title: 'Electrical Supplies',
      desc: 'High-quality electrical components and solutions',
      content: 'We supply a wide range of electrical materials, components, and turnkey power solutions for residential, commercial, and industrial use.',
      icon: Zap,
      features: [
        'Switches and Panels',
        'Industrial Cabling',
        'Lighting Systems',
        'Power Backup Solutions',
        'Installation Services',
        'Energy Management Tools',
      ],
      image: 'https://images.unsplash.com/photo-1606326608606-f7f62e60058e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      slug: 'industrial-materials',
      title: 'Industrial Materials',
      desc: 'Premium industrial supplies for various sectors',
      content: 'We provide durable, quality-tested industrial materials including mechanical, construction, and manufacturing supplies sourced globally.',
      icon: Boxes,
      features: [
        'Construction Tools',
        'Heavy-Duty Equipment',
        'Building Materials',
        'Steel & Fabrication Parts',
        'Safety Equipment',
        'Supply Chain Support',
      ],
      image: 'https://images.unsplash.com/photo-1625723225207-fbfaac1e9845?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
      slug: 'digital-services',
      title: 'Digital Services',
      desc: 'Cutting-edge digital solutions for business growth',
      content: 'Transform your digital presence with our creative and tech-driven services including web development, software, branding, and AI solutions.',
      icon: Code2,
      features: [
        'Website & App Development',
        'UI/UX Design',
        'AI & Automation',
        'Digital Marketing',
        'E-commerce Solutions',
        'Custom Software',
      ],
      image: 'https://images.unsplash.com/photo-1581091012184-5c1c5935bfa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
  ];
  