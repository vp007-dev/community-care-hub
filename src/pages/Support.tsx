import { motion } from "framer-motion";
import { Heart, Building2, QrCode, Award, CreditCard, Users, HandHeart, Banknote, CheckCircle, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const impactStats = [
  { number: "1000+", label: "Students Educated", icon: Users, color: "from-blue-500 to-indigo-600" },
  { number: "4867+", label: "Items Donated", icon: HandHeart, color: "from-rose-500 to-pink-600" },
  { number: "3", label: "Generations", icon: Heart, color: "from-amber-500 to-orange-600" },
  { number: "₹Chips", label: "Education Cost", icon: Banknote, color: "from-emerald-500 to-teal-600" },
];

const benefits = [
  "Quality education at minimal cost",
  "Complete study materials & uniforms",
  "Skill development for adults",
  "Health check-up camps",
  "Annual donation drives",
];

export default function Support() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden bg-mesh flex items-center">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-primary/20 to-amber-500/20 blob animate-float blur-3xl" />
        <div className="container relative py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Support Our Mission</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Make a <span className="text-gradient">Difference</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Every contribution transforms lives through education, healthcare, and empowerment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactStats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 shadow-lg`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-500 flex items-center justify-center mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Choose Amount</h2>
              <p className="text-muted-foreground mb-6">Select a donation amount or enter custom</p>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button key={amount} className="py-3 px-4 rounded-xl bg-secondary hover:bg-primary hover:text-white font-medium transition-all border border-border hover:border-primary">
                    ₹{amount.toLocaleString()}
                  </button>
                ))}
              </div>
              
              <input type="number" placeholder="Enter custom amount" className="w-full py-3 px-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none mb-6" />
              
              <Button className="w-full h-14 text-lg rounded-xl shine shadow-lg shadow-primary/25">
                <CreditCard className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                80G Tax benefits available
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-amber-500/5 border border-primary/20 flex flex-col items-center justify-center">
              <QrCode className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Scan to Donate</h3>
              <p className="text-sm text-muted-foreground mb-6 text-center">Use any UPI app</p>
              <div className="w-48 h-48 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg">
                <QrCode className="h-32 w-32 text-foreground/20" />
              </div>
              <p className="text-sm text-muted-foreground">vidhyaswaroopfoundation@upi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="py-20 bg-gradient-to-br from-primary to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-12 w-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Why Support Us?</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur">
                  <CheckCircle className="h-5 w-5 text-white shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
