import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "#",
    children: [
      { name: "Education", href: "/projects/education" },
      { name: "Health", href: "/projects/health" },
      { name: "Women Empowerment", href: "/projects/women-empowerment" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Vidhya Swaroop Foundation Logo"
              className="h-14 w-14 rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Vidhya</span>
              <span className="text-sm font-medium text-primary">Swaroop Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                      item.children.some((child) => isActive(child.href))
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                            isActive(child.href) ? "text-primary bg-primary/5" : "text-muted-foreground"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://instagram.com/vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4" />
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
                href="https://youtube.com/@vidhyaswaroopfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>

            {/* Donate Button */}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              <Link to="/support">
                <Heart className="h-4 w-4" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container py-4 space-y-2">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setProjectsOpen(!projectsOpen)}
                      className="flex items-center justify-between w-full py-3 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 px-4 text-sm rounded-lg transition-colors ${
                                isActive(child.href)
                                  ? "text-primary bg-primary/5"
                                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Link to="/support" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="h-4 w-4" />
                    Donate Now
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-4">
                <a href="https://instagram.com/vidhyaswaroopfoundation" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://facebook.com/vidhyaswaroopfoundation" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@vidhyaswaroopfoundation" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="mailto:info.vidhyaswaroopfoundation@gmail.com" className="p-2 text-muted-foreground hover:text-primary">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="tel:+919528219780" className="p-2 text-muted-foreground hover:text-primary">
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
