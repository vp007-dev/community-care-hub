import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users, ArrowRight, Star, BookOpen, HandHeart, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";

const stats = [
  { number: "3", label: "Generations of Service" },
  { number: "1000+", label: "Students Empowered" },
  { number: "4867+", label: "Items Donated (2023)" },
  { number: "₹Chips", label: "Cost of Education" },
];

const programs = [
  {
    icon: GraduationCap,
    title: "Education Program",
    description: "Laugh & Learn School providing quality education from Nursery to Class V with complete study materials.",
    link: "/projects/education",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Stethoscope,
    title: "Health Check-Up Camps",
    description: "Free preventive healthcare services including screenings, consultations, and medicine distribution.",
    link: "/projects/health",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development programs including tailoring, computer education, and digital marketing.",
    link: "/projects/women-empowerment",
    color: "bg-purple-500/20 text-purple-400",
  },
];

const purposes = [
  { icon: HandHeart, title: "Make Education Affordable", desc: "Remove financial barriers for all" },
  { icon: Users, title: "Empower Communities", desc: "Transform lives through skill development" },
  { icon: GraduationCap, title: "Nurture Young Minds", desc: "Quality early education with support" },
  { icon: Target, title: "Serve with Compassion", desc: "Lasting impact through programs" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full border border-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full border border-white/10 rounded-full"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
                🌟 Empowering Communities Since 3 Generations
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Vidhya Swaroop
              <span className="block text-white/90">Foundation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Education at the cost of chips. Making quality education accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 text-lg px-8 py-6">
                <Link to="/support">
                  <Heart className="h-5 w-5" />
                  Support Our Cause
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 text-lg px-8 py-6">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              icon={Heart}
              title="About Vidhya Swaroop Foundation"
              subtitle="We believe that education should not be a luxury—it should be accessible to everyone, at the cost of chips."
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              Our mission is simple yet powerful: to make quality education affordable and accessible to children and adults 
              from all walks of life. We work tirelessly to break down financial barriers that prevent people from accessing 
              the education they deserve. Through our programs, we've transformed thousands of lives by providing not just 
              education, but hope, opportunity, and a brighter future.
            </motion.p>

            <Button asChild variant="outline" className="gap-2">
              <Link to="/about">
                Read Our Full Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={BookOpen}
            title="Our Programs"
            subtitle="Empowering communities through education, health, and skill development"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={program.link}
                  className="block h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <program.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Target}
            title="Our Purpose"
            subtitle="We exist to create equal opportunities through education"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {purposes.map((purpose, index) => (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <purpose.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{purpose.title}</h3>
                <p className="text-sm text-muted-foreground">{purpose.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Star className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Join Us in Making a Difference
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every contribution, big or small, helps us continue our mission of providing 
                quality education and support to those who need it most.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                  <Link to="/support">
                    <Heart className="h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
              "Education for all—simple, affordable, and impactful."
            </p>
            <p className="text-primary font-semibold">— Vidhya Swaroop Foundation</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
