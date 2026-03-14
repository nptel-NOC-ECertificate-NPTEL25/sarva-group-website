import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    { icon: Heart, title: "Customer First", description: "Your satisfaction is our top priority" },
    { icon: Award, title: "Quality Excellence", description: "We never compromise on quality" },
    { icon: Users, title: "Expert Team", description: "Certified professionals you can trust" },
    { icon: TrendingUp, title: "Innovation", description: "Latest technology and best practices" },
  ];

  const milestones = [
    { year: "2018", event: "Sarva Solar Founded", description: "Started with a vision to make solar accessible" },
    { year: "2020", event: "500+ Installations", description: "Reached major milestone in customer installations" },
    { year: "2022", event: "10 MW Capacity", description: "Total installed capacity crosses 10 megawatts" },
    { year: "2024", event: "Multi-City Expansion", description: "Expanded operations to 25+ cities across India" },
    { year: "2026", event: "Industry Leader", description: "Recognized as a top solar solutions provider" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Sarva Solar</h1>
            <p className="text-xl text-white/90">
              Empowering India with clean, sustainable solar energy solutions since 2018
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#FF7A00] rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To make clean, affordable solar energy accessible to every home and business in India, 
                contributing to a sustainable future while helping customers save on electricity costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-[#0A7F3F] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be India's most trusted solar energy company, known for quality, reliability, 
                and customer satisfaction. We envision a future where every rooftop generates clean energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sarva Solar was founded in 2018 with a simple yet powerful vision: to make solar energy 
              accessible and affordable for everyone. What started as a small team of passionate solar 
              enthusiasts has grown into one of India's most trusted solar energy companies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Over the years, we've completed 500+ installations across 25+ cities, helping thousands 
              of customers reduce their electricity bills and carbon footprint. Our commitment to quality, 
              customer service, and innovation has made us a leader in the solar industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/70 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FF7A00]/20" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <div className="text-2xl font-bold text-[#FF7A00] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[#FF7A00] rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "15 MW", label: "Installed Capacity" },
              { value: "25+", label: "Cities Served" },
              { value: "100%", label: "Customer Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Solar Revolution
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our journey towards a cleaner, greener future
          </p>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-[#FF7A00]/90 transition-colors"
          >
            Get Started with Solar
          </a>
        </div>
      </section>
    </div>
  );
}
