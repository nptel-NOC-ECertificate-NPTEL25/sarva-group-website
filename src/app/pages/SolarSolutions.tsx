import { motion } from "motion/react";
import { Link } from "react-router";
import { Home, Building2, Factory, Droplets, ArrowRight, CheckCircle } from "lucide-react";

export function SolarSolutions() {
  const solutions = [
    {
      icon: Home,
      title: "Residential Solar",
      tagline: "Power your home with clean energy",
      image: "https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ4MzAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Transform your home into a clean energy powerhouse. Our residential solar solutions are designed for homeowners who want to reduce electricity bills and increase property value.",
      features: [
        "1 kW to 10 kW systems",
        "Rooftop and ground-mounted options",
        "Net metering support",
        "Up to 40% government subsidy",
        "25-year panel warranty",
        "Smart monitoring system",
      ],
      savings: "Save up to ₹15,000/month",
      payback: "3-4 years payback period",
    },
    {
      icon: Building2,
      title: "Commercial Solar",
      tagline: "Reduce operating costs for your business",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzM0MDIwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Perfect for offices, shops, restaurants, and small businesses. Cut operational costs while showcasing your commitment to sustainability.",
      features: [
        "10 kW to 100 kW systems",
        "Commercial financing available",
        "Accelerated depreciation benefits",
        "24/7 monitoring and support",
        "Minimal maintenance required",
        "Customized system design",
      ],
      savings: "Save up to ₹1,00,000/month",
      payback: "3-5 years payback period",
    },
    {
      icon: Factory,
      title: "Industrial Solar",
      tagline: "High-capacity systems for manufacturing",
      image: "https://images.unsplash.com/photo-1768245076807-00a286f0a7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwaW5kdXN0cmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Large-scale solar installations for factories and industrial facilities. Significantly reduce energy costs and carbon footprint.",
      features: [
        "100 kW to 10 MW systems",
        "Open access solar solutions",
        "Power purchase agreements",
        "Energy storage integration",
        "Professional O&M services",
        "Performance guarantees",
      ],
      savings: "Save up to ₹5,00,000+/month",
      payback: "4-6 years payback period",
    },
    {
      icon: Droplets,
      title: "Solar Water Pumps",
      tagline: "Efficient irrigation solutions",
      image: "https://images.unsplash.com/photo-1606707724632-eff3d909ab7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHdhdGVyJTIwcHVtcCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Reliable and cost-effective water pumping solutions for agriculture and irrigation. Eliminate diesel costs and grid dependency.",
      features: [
        "1 HP to 25 HP pump systems",
        "Surface and submersible pumps",
        "Up to 90% subsidy available",
        "No electricity or diesel costs",
        "Low maintenance design",
        "5-year warranty",
      ],
      savings: "Eliminate diesel/electricity costs",
      payback: "1-2 years payback period",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Solar Solutions for Every Need</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From homes to factories, we provide customized solar energy systems that deliver maximum efficiency and savings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <solution.icon className="w-12 h-12 text-[#FF7A00] mb-3" />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="inline-block px-4 py-2 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full text-sm font-semibold mb-4">
                  {solution.tagline}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0A7F3F] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-[#0A7F3F]/10 px-4 py-3 rounded-lg">
                    <div className="text-sm text-gray-600">Savings</div>
                    <div className="font-bold text-[#0A7F3F]">{solution.savings}</div>
                  </div>
                  <div className="bg-[#FF7A00]/10 px-4 py-3 rounded-lg">
                    <div className="text-sm text-gray-600">Payback</div>
                    <div className="font-bold text-[#FF7A00]">{solution.payback}</div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-[#FF7A00]/90 transition-all hover:gap-3"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure which solution is right for you?</h2>
          <p className="text-xl mb-8 text-white/90">Our experts will help you choose the perfect system for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calculator"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A7F3F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Use Calculator
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-[#FF7A00]/90 transition-colors"
            >
              Talk to Expert
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
