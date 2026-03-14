import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sun,
  Zap,
  Shield,
  Award,
  TrendingDown,
  Users,
  Leaf,
  CheckCircle,
  ArrowRight,
  Calculator,
  Home as HomeIcon,
  Building2,
  Factory,
  Droplets,
  Clock,
  FileCheck,
  Settings,
  PlayCircle,
  Star,
  TreePine,
  Wind,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner, Mumbai",
      image: "https://images.unsplash.com/photo-1730130596425-197566414dc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzczNDk1MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Our electricity bill dropped from ₹12,000 to just ₹1,500 per month! Sarva Solar handled everything including subsidy paperwork.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner, Pune",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzQ4MjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Professional service from start to finish. The installation was quick and the system has been flawless for 2 years.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Factory Owner, Ahmedabad",
      image: "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNDk1MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Saved over ₹5 lakhs annually on our factory's electricity costs. Best investment we've made for our business.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1751832496992-1cf97ee23c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHN1bnNldCUyMHJvb2Z0b3B8ZW58MXx8fHwxNzczNDk1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Solar panels at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="max-w-3xl"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Power Your Home <br />
              <span className="text-[#FF7A00]">with the Sun</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Reduce your electricity bills by up to 90% with premium solar solutions. Get government subsidy support.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-[#FF7A00] rounded-lg hover:bg-[#FF7A00]/90 transition-all hover:scale-105 shadow-lg"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Calculator className="w-5 h-5" />
                Calculate Savings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "25-Year Panel Warranty", color: "#FF7A00" },
              { icon: Award, label: "Government Subsidy Support", color: "#0A7F3F" },
              { icon: Users, label: "500+ Installations", color: "#FF7A00" },
              { icon: CheckCircle, label: "Professional Installation", color: "#0A7F3F" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <item.icon className="w-10 h-10" style={{ color: item.color }} />
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Savings Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start Saving from <span className="text-[#FF7A00]">Day One</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solar energy reduces electricity bills by up to 90% and pays for itself in 3-5 years
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "90% Bill Reduction",
                description: "Drastically reduce your monthly electricity expenses",
              },
              {
                icon: Clock,
                title: "3-5 Year Payback",
                description: "Quick return on investment with government subsidies",
              },
              {
                icon: Zap,
                title: "25+ Year Lifespan",
                description: "Enjoy free electricity for decades after payback",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/70 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Solar Solutions for <span className="text-[#FF7A00]">Every Need</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              From homes to factories, we provide customized solar solutions
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "Residential Solar",
                description: "Perfect for homes and apartments",
                image: "https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ4MzAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Building2,
                title: "Commercial Solar",
                description: "Ideal for offices and shops",
                image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzM0MDIwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Factory,
                title: "Industrial Solar",
                description: "High-capacity for factories",
                image: "https://images.unsplash.com/photo-1768245076807-00a286f0a7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwaW5kdXN0cmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                icon: Droplets,
                title: "Solar Water Pumps",
                description: "For agriculture and irrigation",
                image: "https://images.unsplash.com/photo-1606707724632-eff3d909ab7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <solution.icon className="w-10 h-10 mb-3 text-[#FF7A00]" />
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{solution.description}</p>
                  <Link
                    to="/solutions"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A00] hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-[#FF7A00]">Sarva Solar</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium quality, expert installation, and unmatched support
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "High-Efficiency Panels",
                description: "Premium tier-1 solar panels with industry-leading efficiency ratings",
              },
              {
                icon: Users,
                title: "Expert Engineers",
                description: "Certified professionals with years of solar installation experience",
              },
              {
                icon: Shield,
                title: "25-Year Warranty",
                description: "Comprehensive warranty coverage on panels and workmanship",
              },
              {
                icon: Award,
                title: "Subsidy Assistance",
                description: "Complete support for government subsidy application and approval",
              },
              {
                icon: Settings,
                title: "Smart Monitoring",
                description: "Real-time system monitoring and performance tracking via mobile app",
              },
              {
                icon: CheckCircle,
                title: "End-to-End Service",
                description: "From site survey to activation, we handle everything seamlessly",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/60 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple <span className="text-[#FF7A00]">5-Step Process</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to activation in just a few weeks
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Site Survey", description: "Free visit to assess your property" },
              { step: "2", title: "Custom Design", description: "Tailored system design for maximum efficiency" },
              { step: "3", title: "Approvals", description: "We handle all government paperwork" },
              { step: "4", title: "Installation", description: "Professional installation by certified experts" },
              { step: "5", title: "Activation", description: "System testing and grid connection" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#FF7A00] transition-colors">
                  <div className="w-12 h-12 bg-[#FF7A00] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{item.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#FF7A00] z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-[#FF7A00]">Customers Say</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Join 500+ satisfied customers saving with solar
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#FF7A00]"
                />
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FF7A00] text-[#FF7A00]" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[activeTestimonial].text}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? "bg-[#FF7A00] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gradient-to-br from-[#0A7F3F] to-[#0A7F3F]/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1710596220294-3f88dfe02fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMHRyZWVzJTIwbmF0dXJlfGVufDF8fHx8MTc3MzQ5NTM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Forest"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#FF7A00]">Environmental Impact</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 max-w-2xl mx-auto">
              Together, we're making a difference for our planet
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, value: "2,500", unit: "Tons", label: "CO₂ Emissions Saved" },
              { icon: TreePine, value: "50,000+", unit: "Trees", label: "Equivalent Trees Planted" },
              { icon: Wind, value: "15 MW", unit: "Clean Energy", label: "Total Capacity Installed" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <stat.icon className="w-16 h-16 mx-auto mb-4 text-[#FF7A00]" />
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl mb-2 text-[#FF7A00]">{stat.unit}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
              Start Saving with Solar Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-white/90">
              Get a free consultation and personalized quote for your property
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-[#FF7A00] rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Calculator className="w-5 h-5" />
                Get Quote
              </Link>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-[#0A7F3F] text-white rounded-lg hover:bg-[#0A7F3F]/90 transition-all hover:scale-105 shadow-lg"
              >
                <PlayCircle className="w-5 h-5" />
                WhatsApp Expert
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
