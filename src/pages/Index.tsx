import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, GraduationCap, Stethoscope, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

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
    description: "Laugh & Learn School providing quality education from Nursery to Class V.",
    link: "/projects/education",
  },
  {
    icon: Stethoscope,
    title: "Health Check-Up Camps",
    description: "Free preventive healthcare services including screenings and consultations.",
    link: "/projects/health",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description: "Skill development programs including tailoring and computer education.",
    link: "/projects/women-empowerment",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        
        <div className="container relative">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary font-medium mb-4"
            >
              Empowering Communities Since 3 Generations
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight"
            >
              Vidhya Swaroop
              <span className="text-primary"> Foundation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Education at the cost of chips. Making quality education accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg">
                <Link to="/support">
                  <Heart className="h-4 w-4 mr-2" />
                  Support Our Cause
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              About Vidhya Swaroop Foundation
            </h2>
            <p className="text-muted-foreground mb-6">
              We believe that education should not be a luxury—it should be accessible to everyone. 
              Our mission is to break down financial barriers and provide quality education, healthcare, 
              and skill development to underserved communities.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">
                Read Our Story
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Programs</h2>
            <p className="text-muted-foreground">Empowering communities through education, health, and skill development</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={program.link}
                  className="block h-full p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                  <span className="text-sm text-primary font-medium inline-flex items-center">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Us in Making a Difference
            </h2>
            <p className="text-muted-foreground mb-8">
              Every contribution helps us continue our mission of providing quality education and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/support">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-foreground italic mb-2">
              "Education for all—simple, affordable, and impactful."
            </p>
            <p className="text-primary font-medium text-sm">— Vidhya Swaroop Foundation</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
