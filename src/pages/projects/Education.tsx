import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, CheckCircle, Heart, Palette, Music, Baby, Calculator, Globe, PenTool } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const classes = ["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V"];

const subjects = [
  { icon: PenTool, name: "English", desc: "Reading, writing, phonics, vocabulary, spoken English" },
  { icon: BookOpen, name: "Hindi", desc: "Reading, writing, grammar, comprehension" },
  { icon: Calculator, name: "Mathematics", desc: "Numbers, arithmetic, problem-solving, logical thinking" },
  { icon: Globe, name: "Environmental Studies", desc: "Nature, society, science basics, civic sense" },
];

const additionalAreas = [
  { icon: BookOpen, name: "General Knowledge (GK)" },
  { icon: Heart, name: "Moral Values & Life Skills" },
  { icon: Palette, name: "Art & Craft" },
  { icon: Music, name: "Rhymes, Stories & Creative Expression" },
  { icon: GraduationCap, name: "Basic Computer Awareness" },
];

const teachingMethods = [
  "Storytelling & role-play",
  "Visual aids & learning charts",
  "Worksheets & hands-on activities",
  "Group discussions",
  "Games-based learning",
  "Regular revision & practice",
];

const developmentAreas = [
  "Confidence & communication skills",
  "Discipline & responsibility",
  "Emotional intelligence",
  "Teamwork & empathy",
  "Curiosity & creativity",
];

export default function Education() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
              📚 Education Program
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Laugh & Learn School
            </h1>
            <p className="text-xl text-white/80">
              Building Strong Foundations Through Joyful Learning (Nursery to Class V)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon={Heart}
              title="Our Vision"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-center text-muted-foreground"
            >
              To provide quality, inclusive, and value-based education that nurtures curiosity, confidence, creativity, 
              and compassion in young learners—especially children from underserved communities.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={BookOpen}
            title="Our Teaching Philosophy"
            subtitle='We follow a "Learn with Joy" approach where education is child-centric, activity-based, concept-focused, and emotionally supportive.'
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-primary font-medium italic">
              "Children learn best when they feel safe, happy, and encouraged—and that is the core of our classroom culture."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Baby}
            title="Classes We Offer"
            subtitle="NCERT curriculum from Nursery to Class V"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {classes.map((cls, index) => (
              <motion.div
                key={cls}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
              >
                {cls}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={PenTool}
            title="Core Subjects"
            subtitle="All subjects taught properly and systematically, aligned with NCERT guidelines"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <subject.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{subject.name}</h3>
                        <p className="text-sm text-muted-foreground">{subject.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Areas */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-foreground text-center mb-6">Additional Learning Areas</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {additionalAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <area.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{area.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Teaching Methodology"
            subtitle="We use interactive and engaging methods for clear understanding of concepts"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{method}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-primary font-medium mt-8 text-lg"
          >
            Our focus is not rote learning, but clear understanding of concepts.
          </motion.p>
        </div>
      </section>

      {/* Holistic Development */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Award}
            title="Holistic Development Focus"
            subtitle="Along with academics, we nurture complete growth"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {developmentAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border text-center"
              >
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm text-foreground">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={GraduationCap}
            title="Impact We Aim For"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20">
              <p className="text-lg text-center text-foreground mb-6">
                By the end of Class 5, our students are:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["Academically strong", "Confident readers and communicators", "Curious learners", "Morally grounded individuals"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h2>
            <p className="text-xl text-primary font-medium italic mb-4">
              "Education is not a privilege—it is a right."
            </p>
            <p className="text-muted-foreground">
              Through Laugh & Learn School, we are committed to shaping young minds and building a brighter, 
              educated future for society.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
