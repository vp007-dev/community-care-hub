import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Programs",
    href: "#",
    children: [
      { name: "Education", href: "/projects/education", emoji: "📚" },
      { name: "Healthcare", href: "/projects/health", emoji: "🏥" },
      { name: "Women Empowerment", href: "/projects/women-empowerment", emoji: "✨" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
        : "bg-transparent"
    }`}>
      <nav className="container px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="Vidhya Swaroop Foundation"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 border-background" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base sm:text-lg font-bold text-foreground">Vidhya Swaroop</span>
              <span className="block text-xs text-muted-foreground">Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-secondary ${
                      item.children.some((child) => isActive(child.href))
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-card border border-border rounded-2xl shadow-2xl p-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm rounded-xl transition-colors hover:bg-secondary ${
                            isActive(child.href) ? "text-primary bg-primary/5" : "text-foreground"
                          }`}
                        >
                          <span className="text-lg">{child.emoji}</span>
                          <span className="font-medium">{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:bg-secondary ${
                    isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:flex rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all shine">
              <Link to="/support">
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-card/95 backdrop-blur-xl"
          >
            <div className="container py-6 space-y-2">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setProjectsOpen(!projectsOpen)}
                      className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-foreground hover:bg-secondary rounded-xl transition-colors"
                    >
                      {item.name}
                      <ChevronDown className={`h-5 w-5 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-3 py-3 px-4 text-base rounded-xl transition-colors ${
                                isActive(child.href) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                              }`}
                            >
                              <span>{child.emoji}</span>
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
                    className={`block py-3 px-4 text-base font-medium rounded-xl transition-colors ${
                      isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-4 mt-4 border-t border-border">
                <Button asChild className="w-full rounded-xl h-12 text-base shine" size="lg">
                  <Link to="/support" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="h-5 w-5 mr-2" />
                    Donate Now
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
