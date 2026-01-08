import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
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
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="Vidhya Swaroop Foundation"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-base font-semibold text-foreground">Vidhya Swaroop</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
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
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-card border border-border rounded-md shadow-sm py-1 min-w-[160px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`block px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                            isActive(child.href) ? "text-primary" : "text-muted-foreground"
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
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:flex">
              <Link to="/support">
                <Heart className="h-3.5 w-3.5 mr-1.5" />
                Donate
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="container py-4 space-y-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setProjectsOpen(!projectsOpen)}
                      className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${projectsOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-3"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 px-3 text-sm rounded-md ${
                                isActive(child.href) ? "text-primary" : "text-muted-foreground"
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
                    className={`block py-2.5 px-3 text-sm font-medium rounded-md ${
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-border mt-3">
                <Button asChild className="w-full" size="sm">
                  <Link to="/support" onClick={() => setMobileMenuOpen(false)}>
                    <Heart className="h-4 w-4 mr-2" />
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
