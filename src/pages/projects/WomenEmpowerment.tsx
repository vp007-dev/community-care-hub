import { motion } from "framer-motion";
import { Users, Heart, Monitor, Scissors, Smartphone, Music, Palette, Target, CheckCircle, Award, Sparkles, Briefcase } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const objectives = [
  "Gain employable skills",
  "Become financially independent",
  "Express creativity and talent",
  "Improve physical and mental well-being",
  "Build confidence and leadership",
];

const programs = [
  {
    icon: Monitor,
    title: "Computer Education",
    color: "bg-blue-500/20 text-blue-400",
    description: "Basic to intermediate computer training to improve digital literacy",
    items: ["Computer fundamentals", "MS Word, Excel, PowerPoint", "Internet usage & email", "Online safety & digital awareness", "Introduction to work-from-home opportunities"],
  },
  {
    icon: Scissors,
    title: "Tailoring & Stitching",
    color: "bg-pink-500/20 text-pink-400",
    description: "Income-generating skills for self-employment",
    items: ["Basic & advanced stitching", "Cutting & measurements", "Machine handling", "Simple fashion designing", "Small business guidance"],
  },
  {
    icon: Smartphone,
    title: "Digital Marketing",
    color: "bg-green-500/20 text-green-400",
    description: "Modern employment and entrepreneurship skills",
    items: ["Social media basics (Instagram, Facebook)", "Content creation fundamentals", "Online promotion for small businesses", "Digital tools for entrepreneurship", "Freelancing awareness"],
  },
  {
    icon: Music,
    title: "Classical Music",
    color: "bg-purple-500/20 text-purple-400",
    description: "Music education for mental peace and cultural values",
    items: ["Introduction to Indian classical music", "Voice training & rhythm (taal)", "Basic raagas", "Cultural expression & confidence building"],
  },
  {
    icon: Palette,
    title: "Painting & Creative Arts",
    color: "bg-orange-500/20 text-orange-400",
    description: "Art as a tool for expression and healing",
    items: ["Drawing & painting techniques", "Color theory", "Creative expression", "Art for relaxation & confidence"],
  },
];

const teachingApproach = [
  "Practical & hands-on training",
  "Simple, beginner-friendly methods",
  "Supportive learning environment",
  "Flexible batches for women",
  "Focus on confidence and self-belief",
];

const empowermentFocus = [
  { icon: Briefcase, label: "Economic independence" },
  { icon: Monitor, label: "Digital confidence" },
  { icon: Sparkles, label: "Creative skills" },
  { icon: Heart, label: "Physical & mental well-being" },
  { icon: Users, label: "Social confidence" },
];

const outcomes = [
  "Confident decision-makers",
  "Skilled professionals or entrepreneurs",
  "Role models for their families",
  "Active contributors to society",
];

export default function WomenEmpowerment() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-warm border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              💪 Women Empowerment
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Education & Skill Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering Women Through Education, Skills & Self-Confidence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-primary font-medium mb-4">
              We believe that empowered women build empowered families and communities.
            </p>
            <p className="text-muted-foreground">
              Our Women Empowerment Education Program focuses on skill development, creativity, health, 
              and financial independence, enabling women and girls to become confident, self-reliant, and socially strong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Target}
            title="Our Objective"
            subtitle="To provide practical education and vocational training that helps women:"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-foreground">{objective}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Award}
            title="Our Skill-Based Learning Programs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${program.color} flex items-center justify-center mb-4`}>
                      <program.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Teaching Approach"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {teachingApproach.map((approach, index) => (
              <motion.div
                key={approach}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border text-center"
              >
                <CheckCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                <span className="text-sm text-foreground">{approach}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Empowerment Focus */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Sparkles}
            title="Holistic Empowerment Focus"
            subtitle="Our programs aim to develop:"
          />

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {empowermentFocus.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusive Environment */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Heart}
            title="Inclusive & Supportive Environment"
          />

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Safe and respectful learning spaces",
              "Equal opportunities for all women",
              "Encouragement without judgment",
              "Community support and mentorship",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Award}
            title="Impact We Aim To Create"
            subtitle="Through education and skills, women become:"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-center"
              >
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <span className="font-medium text-foreground">{outcome}</span>
              </motion.div>
            ))}
          </div>
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
              "Women empowerment is not just about skills—it is about dignity, opportunity, and self-worth."
            </p>
            <p className="text-muted-foreground">
              Through education, creativity, and wellness, we strive to help every woman realize her true potential.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
