import { motion } from "motion/react";
import { Home, Building2, Factory, MapPin, Calendar } from "lucide-react";

export function Installations() {
  const projects = [
    {
      title: "Residential Installation - Mumbai",
      type: "Residential",
      capacity: "5 kW",
      location: "Andheri, Mumbai",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ4MzAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Home,
    },
    {
      title: "Commercial Complex - Pune",
      type: "Commercial",
      capacity: "50 kW",
      location: "Hinjewadi, Pune",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzM0MDIwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Building2,
    },
    {
      title: "Industrial Solar - Ahmedabad",
      type: "Industrial",
      capacity: "500 kW",
      location: "Vatva, Ahmedabad",
      date: "January 2026",
      image: "https://images.unsplash.com/photo-1768245076807-00a286f0a7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwaW5kdXN0cmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Factory,
    },
    {
      title: "Rooftop Solar - Delhi",
      type: "Residential",
      capacity: "7 kW",
      location: "Dwarka, Delhi",
      date: "December 2025",
      image: "https://images.unsplash.com/photo-1751832496992-1cf97ee23c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHN1bnNldCUyMHJvb2Z0b3B8ZW58MXx8fHwxNzczNDk1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Home,
    },
    {
      title: "Office Building - Bangalore",
      type: "Commercial",
      capacity: "75 kW",
      location: "Whitefield, Bangalore",
      date: "November 2025",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc3MzM4Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Building2,
    },
    {
      title: "Manufacturing Unit - Chennai",
      type: "Industrial",
      capacity: "300 kW",
      location: "Sriperumbudur, Chennai",
      date: "October 2025",
      image: "https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc3MzQ5NTM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Factory,
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "15 MW", label: "Total Capacity Installed" },
    { value: "25+", label: "Cities Covered" },
    { value: "100%", label: "Customer Satisfaction" },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Installations</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Proud to have powered homes and businesses across India with clean solar energy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#FF7A00] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.capacity}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <project.icon className="w-10 h-10 text-[#FF7A00]" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-[#FF7A00]/10 text-[#FF7A00] rounded-full text-xs font-semibold mb-3">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0A7F3F]" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#0A7F3F]" />
                      {project.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's make your property our next solar success story
          </p>
          <a
            href="https://wa.me/911234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#0A7F3F] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Solar Journey
          </a>
        </div>
      </section>
    </div>
  );
}
