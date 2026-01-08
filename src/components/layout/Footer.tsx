import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Youtube, Facebook, Instagram, GraduationCap, Users, BookOpen, HandHeart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const services = [
  {
    icon: GraduationCap,
    name: "Education for Children (Nursery to Grade 5)",
    desc: "Complete study materials, uniforms, stationery, and nurturing learning environment.",
  },
  {
    icon: Users,
    name: "Skill Development for Adults",
    desc: "Sewing, tailoring, computer skills, and entrepreneurship training.",
  },
  {
    icon: BookOpen,
    name: "Competition Classes",
    desc: "Coaching for Bank, SSC, CLAT, and CA exams.",
  },
  {
    icon: HandHeart,
    name: "Annual Donation Drive (8th Dec)",
    desc: "Distributing clothes, shoes, blankets, books, toys & food since 2022.",
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left Column - Logo & Contact */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Vidhya Swaroop Foundation" className="h-16 w-16 rounded-full object-contain" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Vidhya Swaroop Foundation</h3>
                <p className="text-sm text-muted-foreground">Empowering Communities Through Education</p>
              </div>
            </Link>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect With Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://youtube.com/@vidhyaswaroopfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-red-600/20 hover:bg-red-600 flex items-center justify-center text-red-500 hover:text-white transition-all"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com/vidhyaswaroopfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600 flex items-center justify-center text-blue-500 hover:text-white transition-all"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/vidhyaswaroopfoundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-600/20 hover:bg-pink-600 flex items-center justify-center text-pink-500 hover:text-white transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info.vidhyaswaroopfoundation@gmail.com"
                  className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary flex items-center justify-center text-primary hover:text-primary-foreground transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground">Contact Us</h4>
              <div className="space-y-2">
                <a href="tel:+919528219780" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +91 95282 19780
                </a>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  info.vidhyaswaroopfoundation@gmail.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Agra, Uttar Pradesh, India
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Donation Dashboard */}
          <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Donate to Vidhya Swaroop</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your support transforms lives through education
            </p>

            {/* Donation Amounts */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  className="py-2 px-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-sm font-medium transition-all border border-border hover:border-primary"
                >
                  ₹{amount.toLocaleString()}
                </button>
              ))}
              <button className="py-2 px-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-sm font-medium transition-all border border-border hover:border-primary">
                Custom
              </button>
            </div>

            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/support">
                <Heart className="h-4 w-4" />
                Donate Now
              </Link>
            </Button>

            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
              <Award className="h-3 w-3" />
              80G Tax benefits available. Your donation is 100% secure.
            </p>
          </div>

          {/* Right Column - Hindi Name & Services */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-primary mb-1">विद्या स्वरूप फाउंडेशन</h2>
              <p className="text-sm text-muted-foreground">शिक्षा से सशक्तिकरण</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service.name} className="flex gap-3">
                    <service.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{service.name}</p>
                      <p className="text-xs text-muted-foreground">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vidhya Swaroop Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <span>•</span>
            <Link to="#" className="hover:text-primary transition-colors">Refund Policy</Link>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Award className="h-4 w-4 text-primary" />
            Registered NGO | 80G Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
