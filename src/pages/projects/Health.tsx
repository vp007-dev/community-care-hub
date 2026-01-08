import { motion } from "framer-motion";
import { Stethoscope, Heart, Target, Activity, Pill, BookOpen, Users, Home, Sprout, HandHeart, Award, CheckCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { HealthIllustration } from "@/components/illustrations/HealthIllustration";

const objectives = [
  "Promote early detection and prevention of diseases",
  "Increase health awareness among communities",
  "Reduce healthcare inequalities",
  "Encourage regular medical check-ups",
  "Improve overall community well-being",
];

const services = [
  {
    icon: Activity,
    title: "Basic Health Screening",
    items: ["Blood pressure monitoring", "Blood sugar testing", "Body Mass Index (BMI) assessment", "Pulse and oxygen level checks"],
  },
  {
    icon: Stethoscope,
    title: "Diagnostic Tests",
    items: ["Hemoglobin (Hb) test", "Random blood sugar test", "Vision screening", "General physical examination"],
  },
  {
    icon: Users,
    title: "Medical Consultation",
    items: ["One-to-one consultation with doctors", "Health assessment and diagnosis", "Guidance on lifestyle-related conditions", "Referral to hospitals when required"],
  },
  {
    icon: Pill,
    title: "Medicine Distribution",
    items: ["Free basic medicines", "Nutritional supplements (where applicable)", "Prescription guidance"],
  },
  {
    icon: BookOpen,
    title: "Health Awareness & Counseling",
    items: ["Nutrition and balanced diet guidance", "Personal hygiene and sanitation awareness", "Maternal and child health education", "Lifestyle disease prevention", "Mental health awareness"],
  },
];

const beneficiaries = [
  { icon: Home, label: "Rural and urban underserved communities" },
  { icon: Users, label: "Women and children" },
  { icon: Heart, label: "Senior citizens" },
  { icon: HandHeart, label: "Daily wage workers" },
  { icon: Users, label: "Low-income families" },
];

const engagementApproach = [
  "Collaboration with local leaders and volunteers",
  "Awareness drives prior to camps",
  "Culturally sensitive communication",
  "Respectful and patient-centered care",
];

const longTermImpact = [
  "Reduce preventable illnesses",
  "Improve health-seeking behavior",
  "Create awareness about early diagnosis",
  "Strengthen community trust in healthcare systems",
  "Promote a culture of preventive healthcare",
];

const partnerships = [
  "CSR partnerships",
  "Hospitals and medical institutions",
  "Volunteer doctors and healthcare professionals",
  "Local administration support",
];

export default function Health() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-warm border-b border-border overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                🏥 Health Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                Health Check-Up Camps
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Promoting Preventive Healthcare for a Healthier Community
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex justify-center"
            >
              <HealthIllustration className="w-80 h-80" />
            </motion.div>
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
            <p className="text-lg text-muted-foreground">
              Access to basic healthcare is a fundamental right, yet many communities remain underserved. 
              Our Health Check-Up Camps are designed to bridge this gap by providing free, accessible, 
              and preventive healthcare services to individuals and families who need them most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Target}
            title="Objective of the Program"
          />

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {objectives.map((objective, index) => (
                <motion.div
                  key={objective}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{objective}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Stethoscope}
            title="Services Offered in Health Check-Up Camps"
            subtitle="Our camps are conducted with qualified doctors, nurses, and healthcare professionals"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
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

      {/* Beneficiaries Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Users}
            title="Target Beneficiaries"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {beneficiaries.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={HandHeart}
            title="Community Engagement Approach"
          />

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {engagementApproach.map((approach, index) => (
              <motion.div
                key={approach}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{approach}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Impact */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <SectionHeader
            icon={Sprout}
            title="Long-Term Impact"
            subtitle="Through regular health camps, we aim to create lasting change"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {longTermImpact.map((impact, index) => (
              <motion.div
                key={impact}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border text-center"
              >
                <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <span className="text-sm text-foreground">{impact}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Award}
            title="Partnerships & Support"
            subtitle="Our health camps are made possible through:"
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-6 py-3 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
              >
                {partner}
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
              "Good health is the foundation of a productive and dignified life."
            </p>
            <p className="text-muted-foreground">
              Through our Health Check-Up Camps, we remain committed to delivering compassionate, preventive, 
              and inclusive healthcare, ensuring that no one is left behind due to lack of access or awareness.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
