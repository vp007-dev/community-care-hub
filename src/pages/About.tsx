import { motion } from "framer-motion";
import { Heart, Star, BookOpen, Target, CheckCircle, Users, GraduationCap, HandHeart, Quote, MapPin, Building2, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const inspirations = [
  { name: "Late Shri Vidhya Sagar Gupta", description: "A visionary educator whose belief that 'every child deserves a chance to learn' continues to guide our mission." },
  { name: "Late Smt. Roopa Devi Gupta", description: "A pillar of strength who believed that education combined with values creates stronger communities." },
];

const purposes = [
  { icon: HandHeart, title: "Affordable Education", desc: "Remove financial barriers to education" },
  { icon: Users, title: "Empower Communities", desc: "Transform lives through skill development" },
  { icon: GraduationCap, title: "Nurture Minds", desc: "Quality early education with support" },
  { icon: Target, title: "Serve with Compassion", desc: "Create lasting impact through service" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-primary/20 to-amber-500/20 blob animate-float blur-3xl" />
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-foreground">About Us</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground px-4">3 generations of service, transforming lives through education</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20">
            <p className="text-lg sm:text-2xl font-medium text-foreground text-center leading-relaxed">
              At Vidhya Swaroop Foundation, we believe education should be accessible to everyone—
              <span className="text-primary font-bold"> at the cost of chips</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-12 sm:py-20 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/10 text-amber-600 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Our Inspiration</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">The Legacy We Carry</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {inspirations.map((person, i) => (
              <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{person.name}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{person.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Our Purpose</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">Why We Exist</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {purposes.map((purpose, i) => (
              <motion.div key={purpose.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-background border border-border hover:border-primary/30 transition-all card-hover">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-3 sm:mb-4 shadow-lg">
                  <purpose.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1 sm:mb-2">{purpose.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{purpose.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-primary to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-white/80 mx-auto mb-4 sm:mb-6" />
            <p className="text-xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 italic px-4">"Education for all—simple, affordable, and impactful."</p>
            <Button asChild size="lg" className="rounded-full px-6 sm:px-8 bg-white text-primary hover:bg-white/90 shadow-xl">
              <Link to="/support"><Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />Join Our Mission</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
