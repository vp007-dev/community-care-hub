import { motion } from "framer-motion";
import { Heart, Star, BookOpen, Target, CheckCircle, Users, GraduationCap, HandHeart, Quote, MapPin, Building2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const inspirations = [
  {
    name: "Late Shri Vidhya Sagar Gupta",
    description: "A visionary educator and compassionate soul, Late Shri Vidhya Sagar Gupta dedicated his life to the service of education. His belief that \"every child deserves a chance to learn\" continues to guide our mission today. His legacy of selfless service and commitment to social upliftment forms the foundation of our organization.",
  },
  {
    name: "Late Smt. Roopa Devi Gupta",
    description: "A pillar of strength and wisdom, Late Smt. Roopa Devi Gupta embodied the spirit of nurturing and care. She believed that education combined with values creates strong individuals and stronger communities. Her compassionate approach to teaching and her dedication to uplifting women through education inspire us every day.",
  },
];

const purposes = [
  { icon: HandHeart, title: "Make Education Affordable", desc: "Remove financial barriers so no one is denied education due to economic constraints" },
  { icon: Users, title: "Empower Communities", desc: "Transform lives through skill development and competitive exam preparation" },
  { icon: GraduationCap, title: "Nurture Young Minds", desc: "Provide quality early education with complete learning materials and support" },
  { icon: Target, title: "Serve with Compassion", desc: "Create lasting impact through our annual donation drives and community programs" },
];

const commitments = [
  "Provide quality education at costs lower than everyday snacks—truly at \"the cost of chips\"",
  "Supply complete study materials, uniforms, and stationery to all children in our programs",
  "Offer skill development training that leads to financial independence and self-reliance",
  "Prepare youth for competitive exams (Bank, SSC, CLAT, CA) with expert guidance",
  "Conduct annual donation drives every 8th December to support those in need",
  "Maintain transparency in all our operations and financial matters",
  "Create a safe, nurturing, and inclusive learning environment for everyone",
  "Continuously improve our programs based on community feedback and needs",
];

const supporters = [
  { name: "Bharat Vikas Parishad Annapurna", description: "Supporting our mission for community development" },
  { name: "India Rising", description: "Partnering for educational excellence" },
  { name: "Lions Club Supreme", description: "Collaborating for community welfare" },
  { name: "State Bank of India", description: "Financial support for our programs" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-warm border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              About Vidhya Swaroop Foundation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Empowering communities through education for three generations
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              icon={Heart}
              title="About Us"
            />
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground"
            >
              <p className="text-xl text-foreground font-medium">
                At Vidhya Swaroop Foundation, we believe that education should not be a luxury—it should be accessible to everyone, 
                <span className="text-primary font-bold"> at the cost of chips</span>.
              </p>
              <p>
                Our mission is simple yet powerful: to make quality education affordable and accessible to children and adults 
                from all walks of life. We work tirelessly to break down financial barriers that prevent people from accessing 
                the education they deserve. Through our programs, we've transformed thousands of lives by providing not just 
                education, but hope, opportunity, and a brighter future.
              </p>
              <p>
                From teaching nursery children to preparing adults for competitive exams, we are committed to empowering our 
                community through knowledge and skill development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Star}
            title="Our Inspiration"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {inspirations.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{person.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{person.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={BookOpen}
            title="Our Legacy"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20">
              <div className="text-center md:text-left">
                <div className="text-7xl font-bold text-primary mb-2">3</div>
                <div className="text-lg font-semibold text-foreground">Generations of Service</div>
              </div>
              <div className="flex-1 space-y-4 text-muted-foreground">
                <p>
                  For three generations, our family has been dedicated to the education sector. What started as a passion 
                  has now become a legacy—a commitment passed down through our family to serve society through education. 
                  Each generation has built upon the values of the previous one, creating a strong foundation of trust, 
                  quality, and accessibility.
                </p>
                <p>
                  This multi-generational dedication gives us a deep understanding of educational needs across different 
                  eras and evolving challenges. We combine traditional wisdom with modern teaching methods to create an 
                  educational experience that truly transforms lives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Target}
            title="Our Purpose"
            subtitle="We exist to create equal opportunities through education"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {purposes.map((purpose, index) => (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <purpose.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{purpose.title}</h3>
                    <p className="text-sm text-muted-foreground">{purpose.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={CheckCircle}
            title="Our Commitment"
            subtitle="We pledge to uphold the highest standards of educational excellence and social responsibility"
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Building2}
            title="Our Supporters"
            subtitle="We are grateful to our partners who make our mission possible"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {supporters.map((supporter, index) => (
              <motion.div
                key={supporter.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{supporter.name}</h3>
                    <p className="text-sm text-muted-foreground">{supporter.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20"
          >
            <Quote className="h-10 w-10 text-primary mx-auto mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-foreground italic mb-4">
              "Education for all—simple, affordable, and impactful."
            </p>
            <p className="text-primary font-semibold">— Vidhya Swaroop Foundation</p>
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={MapPin}
            title="Find Us"
            subtitle="Visit us in Agra, Uttar Pradesh, India. We're always happy to welcome you!"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114025.94405449268!2d77.93689044999999!3d27.176670349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vidhya Swaroop Foundation Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
