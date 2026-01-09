import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Youtube, Facebook, Instagram, ArrowUpRight, Sparkles } from "lucide-react";
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

const socials = [
  { icon: Youtube, href: "https://youtube.com/@vidhyaswaroopfoundation", color: "hover:bg-red-500" },
  { icon: Facebook, href: "https://facebook.com/vidhyaswaroopfoundation", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "https://instagram.com/vidhyaswaroopfoundation", color: "hover:bg-pink-600" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-teal/10 rounded-full blur-3xl" />
      
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-teal/10 border border-white/10">
            <div className="text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Join Our Mission</h3>
              <p className="text-sm sm:text-base text-white/60">Stay updated with our latest initiatives and impact stories.</p>
            </div>
            <Button asChild size="lg" className="rounded-full px-8 bg-white text-foreground hover:bg-white/90 shadow-xl">
              <Link to="/contact">
                Get Involved
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={logo} alt="Vidhya Swaroop Foundation" className="h-14 w-14 rounded-2xl object-cover shadow-lg" />
              <div>
                <span className="text-xl font-bold text-white">Vidhya Swaroop</span>
                <span className="block text-sm text-white/50">Foundation</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Empowering communities through education, healthcare, and skill development since 3 generations.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl bg-white/10 ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal rounded-full" />
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">80G Certified</div>
                  <div className="text-xs text-white/50">Tax Benefits Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919528219780" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+91 95282 19780</span>
                </a>
              </li>
              <li>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="flex items-start gap-4 text-white/60 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="break-all text-sm pt-2">info.vidhyaswaroopfoundation@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="pt-2">Agra, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/40 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Vidhya Swaroop Foundation. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs sm:text-sm">Registered NGO | Since 3 Generations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
