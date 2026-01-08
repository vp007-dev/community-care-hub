import { motion } from "framer-motion";
import { Heart, Building2, QrCode, Award, CreditCard, Users, HandHeart, Banknote } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const supporters = [
  {
    name: "Bharat Vikas Parishad Annapurna",
    description: "A national organization dedicated to the overall development of Indian society through various social, educational, and cultural initiatives.",
  },
  {
    name: "India Rising",
    description: "A movement focused on empowering underprivileged communities through education, healthcare, and sustainable development programs.",
  },
  {
    name: "Lions Club Supreme",
    description: "Part of the international Lions Clubs network, dedicated to community service, healthcare camps, and educational support for the needy.",
  },
  {
    name: "State Bank of India",
    description: "India's largest public sector bank, supporting our foundation through CSR initiatives and financial literacy programs.",
  },
];

const impactStats = [
  { number: "1000+", label: "Students Educated", icon: Users },
  { number: "4867+", label: "Items Donated", icon: HandHeart },
  { number: "3", label: "Generations of Service", icon: Heart },
  { number: "₹Chips", label: "Cost of Education", icon: Banknote },
];

export default function Support() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-white/80">
              Your contribution transforms lives through education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20">
        <div className="container">
          <SectionHeader
            icon={Heart}
            title="Make a Donation"
            subtitle="Every contribution, big or small, helps us continue our mission"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Donation Options */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                      <Heart className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Choose Amount</h3>
                      <p className="text-sm text-muted-foreground">Select a donation amount</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        className="py-3 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground font-medium transition-all border border-border hover:border-primary"
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <div className="mb-6">
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      className="w-full py-3 px-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6 text-lg">
                    <CreditCard className="h-5 w-5" />
                    Donate Now
                  </Button>

                  <p className="text-sm text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    80G Tax benefits available. Your donation is 100% secure.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8 flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <QrCode className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">Scan to Donate</h3>
                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    Use any UPI app to scan and donate instantly
                  </p>
                  
                  {/* QR Code Placeholder */}
                  <div className="w-48 h-48 rounded-2xl bg-white flex items-center justify-center mb-6">
                    <div className="w-40 h-40 bg-secondary/50 rounded-xl flex items-center justify-center">
                      <QrCode className="h-20 w-20 text-muted-foreground" />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    UPI ID: vidhyaswaroopfoundation@upi
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supporters.map((supporter, index) => (
              <motion.div
                key={supporter.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Building2 className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{supporter.name}</h3>
                        <p className="text-muted-foreground">{supporter.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Support Us?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your donation directly impacts the lives of children and families in need. 
                We ensure that every rupee is used transparently and efficiently to provide:
              </p>
              <ul className="text-left space-y-2 max-w-lg mx-auto">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  Quality education at minimal cost
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  Complete study materials and uniforms
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  Skill development for adults
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  Health check-up camps
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-primary shrink-0" />
                  Annual donation drives
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
