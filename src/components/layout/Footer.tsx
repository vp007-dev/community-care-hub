import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Youtube, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Education", href: "/projects/education" },
  { name: "Health", href: "/projects/health" },
  { name: "Women Empowerment", href: "/projects/women-empowerment" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Vidhya Swaroop Foundation" className="h-10 w-10 rounded-full object-cover" />
              <span className="text-base font-semibold text-foreground">Vidhya Swaroop Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Empowering communities through education, healthcare, and skill development since 3 generations.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://youtube.com/@vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:+919528219780" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                  +91 95282 19780
                </a>
              </li>
              <li>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                  info.vidhyaswaroopfoundation@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                Agra, Uttar Pradesh, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vidhya Swaroop Foundation. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-primary" />
            Registered NGO | 80G Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
