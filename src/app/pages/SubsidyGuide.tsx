import { motion } from "motion/react";
import { CheckCircle, FileText, Users, Clock, DollarSign, AlertCircle, Download } from "lucide-react";

export function SubsidyGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <DollarSign className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Government Solar Subsidy Guide</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get up to 40% subsidy on your solar installation. We handle all the paperwork for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subsidy Amounts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Subsidy Structure for Residential Solar
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { capacity: "Up to 3 kW", subsidy: "₹18,000 per kW", percentage: "40%" },
              { capacity: "Above 3 kW", subsidy: "₹18,000 for first 3 kW", percentage: "" },
              { capacity: "Above 3 kW", subsidy: "₹9,000 per kW", percentage: "20%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-sm text-gray-600 mb-2">{item.capacity}</div>
                <div className="text-2xl font-bold text-[#FF7A00] mb-2">{item.subsidy}</div>
                {item.percentage && (
                  <div className="inline-block px-3 py-1 bg-[#0A7F3F]/10 text-[#0A7F3F] rounded-full text-sm font-semibold">
                    {item.percentage} of cost
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Example Subsidy Calculation</h2>
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">For a 5 kW Residential System:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-700">Total System Cost (₹50,000/kW)</span>
                <span className="font-semibold">₹2,50,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-700">Subsidy for first 3 kW (@₹18,000/kW)</span>
                <span className="font-semibold text-[#0A7F3F]">₹54,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-700">Subsidy for remaining 2 kW (@₹9,000/kW)</span>
                <span className="font-semibold text-[#0A7F3F]">₹18,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300">
                <span className="font-bold text-lg">Total Subsidy</span>
                <span className="font-bold text-2xl text-[#0A7F3F]">₹72,000</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-lg">Your Net Investment</span>
                <span className="font-bold text-2xl text-[#FF7A00]">₹1,78,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Who is Eligible?</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Individual house owners",
              "Residential welfare associations",
              "Group housing societies",
              "Multi-storey apartment buildings",
              "Standalone residential buildings",
              "Institutional buildings (schools, hospitals)",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-[#0A7F3F] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simple Application Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We handle all the subsidy paperwork for you. Here's how the process works:
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Contact Us", desc: "Reach out for consultation", icon: Users },
              { step: "2", title: "Documentation", desc: "We prepare all documents", icon: FileText },
              { step: "3", title: "Installation", desc: "Solar system installed", icon: CheckCircle },
              { step: "4", title: "Application", desc: "Subsidy claim filed", icon: Download },
              { step: "5", title: "Receive", desc: "Subsidy credited", icon: DollarSign },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/70 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <item.icon className="w-8 h-8 mx-auto mb-2 text-[#0A7F3F]" />
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Documents Required</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Property ownership proof",
              "ID proof (Aadhar/PAN)",
              "Electricity bill copy",
              "Bank account details",
              "Cancelled cheque",
              "Recent passport-size photo",
            ].map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <FileText className="w-5 h-5 text-[#FF7A00]" />
                <span className="text-gray-700">{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Notes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Subsidy is available only for solar systems up to 10 kW capacity</li>
                  <li>• Only approved solar panels and inverters are eligible</li>
                  <li>• Installation must be done by an empanelled vendor (like Sarva Solar)</li>
                  <li>• Subsidy is directly credited to customer's bank account</li>
                  <li>• Processing time is typically 30-90 days after installation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Make Subsidy Application Easy
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team handles all paperwork and follows up until you receive your subsidy
          </p>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#FF7A00] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Subsidy Assistance
          </a>
        </div>
      </section>
    </div>
  );
}
