import { motion } from "motion/react";
import { Sun, Users, Shield, Award, Settings, CheckCircle, TrendingUp, Headphones, Leaf, Zap } from "lucide-react";

export function WhyChoose() {
  const reasons = [
    {
      icon: Sun,
      title: "Premium Tier-1 Panels",
      description: "We only use the highest quality solar panels from world-renowned manufacturers with proven track records.",
      benefits: ["22%+ efficiency ratings", "Superior low-light performance", "Dust and weather resistant", "Industry-leading warranties"],
    },
    {
      icon: Users,
      title: "Certified Expert Team",
      description: "Our engineers and technicians are fully certified with years of experience in solar installations.",
      benefits: ["Government certified installers", "Continuous training programs", "500+ successful projects", "Expert technical support"],
    },
    {
      icon: Shield,
      title: "Comprehensive Warranty",
      description: "We stand behind our work with one of the industry's most comprehensive warranty packages.",
      benefits: ["25-year panel warranty", "10-year inverter warranty", "5-year installation warranty", "Performance guarantees"],
    },
    {
      icon: Award,
      title: "Full Subsidy Support",
      description: "We handle all government subsidy paperwork and ensure you receive maximum benefits.",
      benefits: ["Complete documentation", "Application submission", "Regular follow-ups", "Direct account credit"],
    },
    {
      icon: Settings,
      title: "Smart Monitoring System",
      description: "Track your solar system's performance in real-time through our advanced monitoring platform.",
      benefits: ["Mobile app access", "Real-time data", "Performance alerts", "Energy reports"],
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to assist you with any questions or concerns.",
      benefits: ["Round-the-clock helpline", "Quick response times", "Remote diagnostics", "On-site service"],
    },
  ];

  const whyDifferent = [
    {
      icon: TrendingUp,
      title: "Performance Guarantee",
      description: "We guarantee minimum energy production levels or we make it right",
    },
    {
      icon: CheckCircle,
      title: "End-to-End Service",
      description: "From consultation to activation, we handle everything seamlessly",
    },
    {
      icon: Leaf,
      title: "Environmental Commitment",
      description: "Every installation contributes to a cleaner, greener future",
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "We use cutting-edge solar technology for maximum efficiency",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Sarva Solar</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Premium quality, expert service, and unwavering commitment to your solar success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/70 rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-6">{reason.description}</p>
                <ul className="space-y-2">
                  {reason.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#0A7F3F] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Makes Us <span className="text-[#FF7A00]">Different</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyDifferent.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-[#FF7A00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#FF7A00]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Sarva Solar vs Others
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Feature</th>
                    <th className="px-6 py-4 text-center">Sarva Solar</th>
                    <th className="px-6 py-4 text-center">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Panel Quality", us: "Tier-1 Premium", others: "Mixed Quality" },
                    { feature: "Warranty", us: "25 Years", others: "10-15 Years" },
                    { feature: "Subsidy Support", us: "Full Assistance", others: "Limited/None" },
                    { feature: "Monitoring System", us: "Smart App", others: "Basic/None" },
                    { feature: "Customer Support", us: "24/7", others: "Business Hours" },
                    { feature: "Installation Time", us: "2-3 Days", others: "5-7 Days" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#0A7F3F]/10 text-[#0A7F3F] rounded-full text-sm font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          {row.us}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-500">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Sarva Solar Difference</h2>
          <p className="text-xl mb-8 text-white/90">
            Join hundreds of satisfied customers who chose quality and excellence
          </p>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0A7F3F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
