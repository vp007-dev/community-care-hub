import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users, ArrowRight, CheckCircle, Quote, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CommunityIllustration } from "@/components/illustrations/CommunityIllustration";
import { EducationIllustration } from "@/components/illustrations/EducationIllustration";
import { HealthIllustration } from "@/components/illustrations/HealthIllustration";
import { WomanIllustration } from "@/components/illustrations/WomanIllustration";
import logo from "@/assets/logo.jpg";

const stats = [
  { number: "3", label: "Generations", suffix: "" },
  { number: "1000", label: "Students", suffix: "+" },
  { number: "4867", label: "Items Donated", suffix: "+" },
  { number: "₹", label: "Cost of Education", suffix: "Chips" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Laugh & Learn School providing NCERT-based education from Nursery to Class V with complete study materials.",
    link: "/projects/education",
    color: "from-blue-500 to-indigo-600",
    Illustration: EducationIllustration,
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Free preventive healthcare camps with screenings, consultations, and medicine distribution.",
    link: "/projects/health",
    color: "from-emerald-500 to-teal-600",
    Illustration: HealthIllustration,
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development including tailoring, computer education, digital marketing, and arts.",
    link: "/projects/women-empowerment",
    color: "from-purple-500 to-pink-600",
    Illustration: WomanIllustration,
  },
];

const values = [
  "Education at the cost of chips",
  "100% transparent operations",
  "80G Tax benefits available",
  "3 generations of trust",
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop", alt: "Students learning together" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", alt: "Classroom education" },
  { src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop", alt: "Community support" },
  { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", alt: "Children smiling" },
  { src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop", alt: "Volunteer work" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop", alt: "Health camp" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        
        <div className="container relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Serving communities since 3 generations
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Empowering Lives Through
                <span className="text-primary block mt-2">Education & Care</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                We believe education shouldn't be a luxury. Join us in making quality education accessible to every child at the cost of chips.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                  <Link to="/support">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {values.slice(0, 3).map((value) => (
                  <div key={value} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {value}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-primary/10 border border-border/50">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={logo} alt="Vidhya Swaroop Foundation" className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                    <div>
                      <h3 className="font-bold text-foreground">Vidhya Swaroop Foundation</h3>
                      <p className="text-sm text-muted-foreground">विद्या स्वरूप फाउंडेशन</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                      <div key={i} className="bg-secondary/50 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-primary">
                          {stat.number}{stat.suffix}
                        </div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Mobile */}
      <section className="lg:hidden py-8 bg-white border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.number}{stat.suffix}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">Our Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming lives through education, healthcare, and empowerment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={program.link}
                  className="group block h-full p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="h-32 mb-4 flex items-center justify-center">
                    <program.Illustration className="w-28 h-28 group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-center">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                    {program.description}
                  </p>
                  <span className="flex items-center justify-center text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">Moments That Matter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Glimpses from our journey of transforming lives
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl group ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? 'h-64 md:h-full' : 'h-48 md:h-56'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Camera className="h-5 w-5 mb-1" />
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Making Education Accessible Since 3 Generations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vidhya Swaroop Foundation is a registered NGO committed to providing quality education, healthcare, 
                and skill development to underserved communities. We believe that every child deserves the opportunity 
                to learn and grow, regardless of their financial background.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is simple yet powerful: to make quality education affordable and accessible to children 
                and adults from all walks of life.
              </p>
              
              <div className="space-y-3 mb-8">
                {values.map((value) => (
                  <div key={value} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="rounded-full">
                <Link to="/about">
                  Read Our Full Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-secondary/50 rounded-3xl p-8">
                <Quote className="h-12 w-12 text-primary/20 mb-4" />
                <blockquote className="text-xl font-medium text-foreground italic mb-6">
                  "Education for all—simple, affordable, and impactful. Every child deserves the chance to dream."
                </blockquote>
                <div className="flex items-center gap-3">
                  <img src={logo} alt="VSF" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-foreground">Vidhya Swaroop Foundation</div>
                    <div className="text-sm text-muted-foreground">Our Guiding Principle</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-orange-600" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Every contribution, big or small, helps us continue our mission of transforming lives through education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 shadow-xl">
                <Link to="/support">
                  <Heart className="h-4 w-4 mr-2" />
                  Support Our Cause
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
