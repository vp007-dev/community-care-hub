import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Heart, Palette, Music, Baby, Calculator, Globe, PenTool, ArrowRight, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const classes = ["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V"];

const subjects = [
  { icon: PenTool, name: "English", desc: "Reading, writing, phonics, vocabulary, spoken English", color: "from-blue-500 to-indigo-600" },
  { icon: BookOpen, name: "Hindi", desc: "Reading, writing, grammar, comprehension", color: "from-orange-500 to-red-600" },
  { icon: Calculator, name: "Mathematics", desc: "Numbers, arithmetic, problem-solving, logical thinking", color: "from-emerald-500 to-teal-600" },
  { icon: Globe, name: "EVS", desc: "Nature, society, science basics, civic sense", color: "from-violet-500 to-purple-600" },
];

const additionalAreas = [
  { icon: BookOpen, name: "General Knowledge" },
  { icon: Heart, name: "Moral Values" },
  { icon: Palette, name: "Art & Craft" },
  { icon: Music, name: "Creative Expression" },
  { icon: GraduationCap, name: "Computer Basics" },
];

const teachingMethods = [
  "Storytelling & role-play",
  "Visual aids & charts",
  "Hands-on activities",
  "Group discussions",
  "Games-based learning",
  "Regular practice",
];

export default function Education() {
  return (
    <Layout>
      {/* Hero Section - Modern Asymmetric */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 blob animate-float blur-3xl" />
        <div className="hidden sm:block absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-violet-400/20 to-purple-500/20 blob animate-float-delayed blur-3xl" />
        
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6">
                <span className="text-lg sm:text-xl">📚</span>
                <span className="text-xs sm:text-sm font-medium text-foreground">Education Program</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4 sm:mb-6">
                Laugh & Learn{" "}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">School</span>
              </h1>

              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl">
                Building strong foundations through joyful learning. NCERT-based curriculum from Nursery to Class V.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {classes.map((cls, i) => (
                  <motion.span key={cls} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + i * 0.05 }} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border text-xs sm:text-sm font-medium text-foreground">
                    {cls}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Card */}
      <section className="py-20 bg-card">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide quality, inclusive, and value-based education that nurtures curiosity, confidence, 
                  creativity, and compassion in young learners—especially children from underserved communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Subjects - Bento Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Curriculum
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">Core Subjects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive NCERT-aligned curriculum with focus on conceptual understanding
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject, i) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all card-hover"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <subject.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{subject.name}</h3>
                <p className="text-muted-foreground">{subject.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Areas */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalAreas.map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <area.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{area.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methods */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                Methodology
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-6">Learn with Joy Approach</h2>
              <p className="text-muted-foreground mb-8">
                Our teaching is child-centric, activity-based, and emotionally supportive. 
                We focus on clear understanding of concepts, not rote learning.
              </p>
              <blockquote className="p-6 rounded-2xl bg-primary/5 border-l-4 border-primary italic text-foreground">
                "Children learn best when they feel safe, happy, and encouraged."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {teachingMethods.map((method, i) => (
                <div
                  key={method}
                  className="p-4 rounded-2xl bg-background border border-border flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{method}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Education at the Cost of Chips
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join us in shaping young minds and building a brighter future for society.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-white text-blue-600 hover:bg-white/90 shadow-xl">
                <Link to="/support">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Education
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10">
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
