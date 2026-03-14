import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    systemType: "residential",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    alert("Thank you for your inquiry! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", location: "", systemType: "residential", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to start your solar journey? We're here to help with a free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Request Free Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location/City *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                    placeholder="Mumbai, Pune, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    System Type *
                  </label>
                  <select
                    name="systemType"
                    value={formData.systemType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none"
                  >
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="industrial">Industrial Solar</option>
                    <option value="water-pump">Solar Water Pump</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FF7A00] focus:outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF7A00] text-white py-4 rounded-lg font-semibold hover:bg-[#FF7A00]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit Request
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Get in touch with us through any of these channels. We're here to help you go solar!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-600">123 Solar Street, Green City<br />Mumbai, Maharashtra 400001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A7F3F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+911234567890" className="text-gray-600 hover:text-[#FF7A00]">
                      +91 123 456 7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@sarvasolar.com" className="text-gray-600 hover:text-[#FF7A00]">
                      info@sarvasolar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A7F3F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 p-8 rounded-xl text-white">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Quick Response on WhatsApp</h3>
                <p className="mb-6 text-white/90">
                  Get instant answers to your solar questions on WhatsApp
                </p>
                <a
                  href="https://wa.me/911234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#0A7F3F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Map integration would be placed here</p>
              <p className="text-sm">123 Solar Street, Green City, Mumbai 400001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
