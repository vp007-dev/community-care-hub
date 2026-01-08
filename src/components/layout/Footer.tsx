import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Youtube, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Education", href: "/projects/education" },
  { name: "Healthcare", href: "/projects/health" },
  { name: "Women Empowerment", href: "/projects/women-empowerment" },
];

const supportLinks = [
  { name: "Donate", href: "/support" },
  { name: "Contact Us", href: "/contact" },
  { name: "Volunteer", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Vidhya Swaroop Foundation" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <span className="text-lg font-bold text-white">Vidhya Swaroop</span>
                <span className="block text-xs text-white/60">Foundation</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Empowering communities through education, healthcare, and skill development since 3 generations.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://youtube.com/@vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-500 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-white/60 flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                80G Tax Benefits Available
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="tel:+919528219780" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  +91 95282 19780
                </a>
              </li>
              <li>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="break-all">info.vidhyaswaroopfoundation@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                Agra, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Vidhya Swaroop Foundation. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Registered NGO | 80G Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
