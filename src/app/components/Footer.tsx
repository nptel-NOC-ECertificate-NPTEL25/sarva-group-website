import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import logoImage from "figma:asset/7bd96ff4f4b575dc30398fff9752f5c30f29fae5.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Sarva Solar" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#FF7A00]">SARVA</span>
                <span className="text-xs tracking-wider text-[#0A7F3F]">SOLAR ENERGY</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Leading solar energy solutions provider. Empowering homes and businesses with clean, sustainable energy.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-[#FF7A00] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="hover:text-[#FF7A00] transition-colors">Solar Solutions</Link></li>
              <li><Link to="/calculator" className="hover:text-[#FF7A00] transition-colors">Savings Calculator</Link></li>
              <li><Link to="/subsidy" className="hover:text-[#FF7A00] transition-colors">Subsidy Guide</Link></li>
              <li><Link to="/installations" className="hover:text-[#FF7A00] transition-colors">Our Installations</Link></li>
              <li><Link to="/why-choose" className="hover:text-[#FF7A00] transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Residential Solar</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Industrial Solar</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Solar Water Pumps</a></li>
              <li><a href="#" className="hover:text-[#FF7A00] transition-colors">Maintenance & Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                <span>123 Solar Street, Green City, India 400001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-[#FF7A00] transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <a href="mailto:info@sarvasolar.com" className="hover:text-[#FF7A00] transition-colors">
                  info@sarvasolar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#FF7A00] flex-shrink-0" />
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF7A00] transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Sarva Solar. All rights reserved. | Powering a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
}
