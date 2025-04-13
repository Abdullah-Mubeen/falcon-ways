"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Circle,
  Code2,
  Globe2,
  MonitorSmartphone,
  Menu,
  Network,
  Shield,
  X,
  Zap,
  Phone,
  Mail,
  MapPin,
  Send,
  Users,
  Building2,
  Briefcase,
  CheckCircle2,
  Award,
  LineChart,
} from "lucide-react";

export function Navbar() {
  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 2) {
      setFormStep(formStep + 1);
    } else {
      console.log(formData);
      setIsContactOpen(false);
      setFormStep(0);
      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
        service: "",
        budget: "",
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    service: "",
    budget: "",
  });

  const contactModalVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const formSteps = [
    {
      title: "Basic Information",
      fields: (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              placeholder="Your company name"
              required
            />
          </div>
        </>
      ),
    },
    {
      title: "Project Details",
      fields: (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Interested In
            </label>
            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              required
            >
              <option value="">Select a service</option>
              <option value="audiovisual">Audiovisual Systems</option>
              <option value="it">IT & Networking</option>
              <option value="security">Security Systems</option>
              <option value="electrical">Electrical Supplies</option>
              <option value="industrial">Industrial Materials</option>
              <option value="digital">Digital Services</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
              required
            >
              <option value="">Select budget range</option>
              <option value="small">$10,000 - $50,000</option>
              <option value="medium">$50,000 - $200,000</option>
              <option value="large">$200,000+</option>
            </select>
          </div>
        </>
      ),
    },
    {
      title: "Additional Information",
      fields: (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Details
          </label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            rows={6}
            placeholder="Tell us about your project requirements and timeline..."
            required
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2"
            >
              <Globe2 className="h-6 w-6 text-white" />
              <span className="text-2xl font-light tracking-wider">
                Falcon-Ways
              </span>
            </motion.div>

            {/* Desktop Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMenuOpen(true)}
              className="hidden md:flex items-center space-x-2 px-6 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <Menu className="h-5 w-5" />
              <span>Menu</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="text-center">
              {["home", "solutions", "about", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  onClick={() => {
                    if (item === "contact") {
                      setIsContactOpen(true);
                    }
                    setActiveSection(item);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-center py-6"
                >
                  <span
                    className={`text-5xl font-light tracking-wider hover:text-white transition-colors relative group ${
                      activeSection === item ? "text-white" : "text-white/60"
                    }`}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contactModalVariants}
              className="bg-white text-black rounded-3xl w-full max-w-4xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Contact Info */}
                <div className="w-full md:w-2/5 bg-black text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-light mb-8">Let's Connect</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-5 w-5 text-white/60" />
                        <span>+966 123 456 789</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 text-white/60" />
                        <span>contact@falcon-ways.com</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-5 w-5 text-white/60" />
                        <span>Eastern Province, Saudi Arabia</span>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="text-lg font-light mb-4">Progress</h4>
                      <div className="space-y-2">
                        {formSteps.map((step, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                index === formStep
                                  ? "bg-white"
                                  : index < formStep
                                  ? "bg-white/60"
                                  : "bg-white/20"
                              }`}
                            />
                            <span
                              className={
                                index === formStep
                                  ? "text-white"
                                  : "text-white/60"
                              }
                            >
                              {step.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsContactOpen(false)}
                    className="text-white/60 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <X className="h-5 w-5" />
                    <span>Close</span>
                  </button>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-3/5 p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={formStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="h-full"
                    >
                      <h3 className="text-3xl font-light mb-6">
                        {formSteps[formStep].title}
                      </h3>
                      <form
                        onSubmit={handleContactSubmit}
                        className="space-y-6"
                      >
                        {formSteps[formStep].fields}
                        <div className="flex justify-between items-center">
                          {formStep > 0 && (
                            <button
                              type="button"
                              onClick={() => setFormStep(formStep - 1)}
                              className="px-6 py-3 text-black hover:text-gray-700 transition-colors"
                            >
                              Back
                            </button>
                          )}
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="px-8 py-4 bg-black text-white rounded-xl flex items-center space-x-2 hover:bg-black/90 transition-colors ml-auto"
                          >
                            <span>
                              {formStep === formSteps.length - 1
                                ? "Submit"
                                : "Next"}
                            </span>
                            <ArrowRight className="h-4 w-4" />
                          </motion.button>
                        </div>
                      </form>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
