import { motion } from "motion/react";
import { Calendar, User, ArrowRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      title: "Complete Guide to Solar Subsidies in India 2026",
      excerpt: "Everything you need to know about government subsidies for residential solar installations...",
      category: "Subsidies",
      date: "March 10, 2026",
      author: "Sarva Solar Team",
      image: "https://images.unsplash.com/photo-1756542713155-94f62d47d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ4MzAxMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "5 Signs It's Time to Switch to Solar Energy",
      excerpt: "Is solar right for you? Here are five clear indicators that you should make the switch...",
      category: "Solar Basics",
      date: "March 5, 2026",
      author: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1751832496992-1cf97ee23c29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHN1bnNldCUyMHJvb2Z0b3B8ZW58MXx8fHwxNzczNDk1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "How to Choose the Right Solar System Size",
      excerpt: "Determining the perfect solar system size for your property can be confusing. Here's how...",
      category: "Installation",
      date: "February 28, 2026",
      author: "Priya Sharma",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwaW5zdGFsbGF0aW9uJTIwd29ya2VyfGVufDF8fHx8MTc3MzM4Njk4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Commercial Solar: A Smart Business Investment",
      excerpt: "Why businesses across India are switching to solar and how it impacts their bottom line...",
      category: "Commercial",
      date: "February 20, 2026",
      author: "Amit Patel",
      image: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBzb2xhciUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NzM0MDIwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Solar Panel Maintenance: Tips for Maximum Efficiency",
      excerpt: "Keep your solar panels performing at their best with these simple maintenance tips...",
      category: "Maintenance",
      date: "February 15, 2026",
      author: "Sarva Solar Team",
      image: "https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc3MzQ5NTM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Understanding Net Metering in Solar Systems",
      excerpt: "Learn how net metering works and how you can earn credits from excess solar energy...",
      category: "Technology",
      date: "February 10, 2026",
      author: "Tech Team",
      image: "https://images.unsplash.com/photo-1768245076807-00a286f0a7b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwaW5kdXN0cmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc3MzQ5NTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const categories = ["All Posts", "Solar Basics", "Subsidies", "Installation", "Commercial", "Maintenance", "Technology"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Solar Knowledge Center</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert insights, guides, and news about solar energy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? "bg-[#FF7A00] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FF7A00] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FF7A00] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-[#FF7A00] font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#0A7F3F] to-[#0A7F3F]/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-white/90">
            Subscribe to our newsletter for solar tips, news, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-[#FF7A00]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
