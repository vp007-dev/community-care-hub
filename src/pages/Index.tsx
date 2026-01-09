import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Sparkles, Users, BookOpen, Stethoscope, Play, ChevronRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import logo from "@/assets/logo.jpg";

const stats = [
  { number: "3", label: "Generations", icon: Star, color: "from-amber-400 to-orange-500" },
  { number: "1000+", label: "Students Taught", icon: Users, color: "from-teal-400 to-emerald-500" },
  { number: "4867+", label: "Items Donated", icon: Heart, color: "from-pink-400 to-rose-500" },
  { number: "₹0", label: "Cost Barrier", icon: Zap, color: "from-violet-400 to-purple-500" },
];

const programs = [
  {
    title: "Education",
    subtitle: "Laugh & Learn School",
    description: "NCERT-based education from Nursery to Class V with complete study materials at the cost of chips.",
    link: "/projects/education",
    icon: BookOpen,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    title: "Healthcare",
    subtitle: "Free Health Camps",
    description: "Preventive healthcare with screenings, consultations, and medicine distribution for all.",
    link: "/projects/health",
    icon: Stethoscope,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Women Empowerment",
    subtitle: "Skills & Independence",
    description: "Tailoring, computers, digital marketing, and arts training for financial independence.",
    link: "/projects/women-empowerment",
    icon: Sparkles,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop", alt: "Education in action" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop", alt: "Classroom moments" },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop", alt: "Community support" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop", alt: "Happy children" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - Unique Asymmetric Design */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] overflow-hidden bg-mesh">
        {/* Floating Shapes - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-primary/20 to-amber-400/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-teal/20 to-purple-400/20 blob animate-float-delayed blur-3xl" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-20 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-sm font-medium text-foreground">3 Generations of Impact</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Education at the{" "}
                <span className="text-gradient">Cost of Chips</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl leading-relaxed">
                We're transforming lives by making quality education accessible to everyone. 
                Join our mission to empower communities through knowledge.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Button asChild size="lg" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base shine shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all">
                  <Link to="/support">
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Donate Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base group border-2">
                  <Link to="/about">
                    Our Story
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Mini Stats - Hidden on mobile */}
              <div className="hidden sm:flex items-center gap-6 text-sm mt-8 sm:mt-10">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-amber-400 border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                      {i === 4 ? '+' : '★'}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-semibold text-foreground">1000+ Lives Changed</div>
                  <div className="text-muted-foreground">Join our growing family</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Bento Grid */}
            <motion.div 
              className="lg:col-span-5 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Logo Card */}
                <div className="col-span-2 p-4 sm:p-6 rounded-2xl sm:rounded-3xl glass-strong border border-border/50 shadow-xl">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img src={logo} alt="VSF" className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover shadow-lg" />
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-foreground">Vidhya Swaroop</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">विद्या स्वरूप फाउंडेशन</p>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                {stats.slice(0, 2).map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-3 sm:p-5 rounded-xl sm:rounded-2xl glass border border-border/50 group hover:border-primary/30 transition-colors"
                  >
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}

                {/* Video/Play Card */}
                <div className="col-span-2 relative overflow-hidden rounded-3xl aspect-video group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop" 
                    alt="Our Impact" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium opacity-80">Watch</div>
                    <div className="font-semibold">Our Impact Story</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 50C480 40 600 50 720 55C840 60 960 60 1080 50C1200 40 1320 20 1380 10L1440 0V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--card))"/>
          </svg>
        </div>
      </section>

      {/* Programs - Modern Bento Grid */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Our Programs
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive initiatives designed to uplift and empower communities
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {programs.map((program, i) => (
              <motion.div key={program.title} variants={item}>
                <Link
                  to={program.link}
                  className={`group relative block h-full p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${program.bgGradient} border border-border/50 overflow-hidden card-hover`}
                >
                  {/* Background Gradient Orb */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${program.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${program.gradient} flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <program.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                    </div>

                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-2">
                      {program.subtitle}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      {program.description}
                    </p>

                    <span className="inline-flex items-center text-primary font-semibold text-sm sm:text-base">
                      Learn more
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 ml-1 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Stats - Full Width */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-foreground via-foreground to-foreground/95 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="hidden sm:block absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="hidden sm:block absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-teal/20 rounded-full blur-3xl" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto px-4">
              Every number represents a life touched, a dream nurtured
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-base text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry Style */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            <div>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Moments of Impact
              </h2>
            </div>
            <Button asChild variant="outline" size="sm" className="rounded-full self-start sm:self-auto">
              <Link to="/about">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
          {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer ${
                  i === 0 ? 'col-span-2 row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    i === 0 ? 'h-48 sm:h-64 md:h-full' : 'h-32 sm:h-48 md:h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <p className="text-white font-medium text-sm sm:text-base">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Modern Glass */}
      <section className="py-16 sm:py-24 relative overflow-hidden bg-mesh">
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-primary/30 via-amber-400/20 to-teal/30 rounded-full blur-3xl opacity-50" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-6 sm:p-12 md:p-16 rounded-2xl sm:rounded-[2.5rem] glass-strong border border-border/50 text-center shadow-2xl">
              <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-5 sm:mb-8 shadow-xl">
                <Heart className="h-7 w-7 sm:h-10 sm:w-10 text-white" />
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Ready to Make a <span className="text-gradient">Difference?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Every contribution, big or small, helps us continue our mission. 
                Join thousands who are already part of our journey.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-10 h-14 text-base shine shadow-xl shadow-primary/25">
                  <Link to="/support">
                    <Heart className="h-5 w-5 mr-2" />
                    Support Our Cause
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-base border-2">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-10 pt-10 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  80G Tax Benefits
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Registered NGO
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  100% Transparent
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
