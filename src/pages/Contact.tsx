import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Phone", value: "+91 95282 19780", href: "tel:+919528219780", color: "from-emerald-500 to-teal-600" },
  { icon: Mail, title: "Email", value: "info.vidhyaswaroopfoundation@gmail.com", href: "mailto:info.vidhyaswaroopfoundation@gmail.com", color: "from-blue-500 to-indigo-600" },
  { icon: MapPin, title: "Location", value: "Agra, Uttar Pradesh, India", href: null, color: "from-rose-500 to-pink-600" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[35vh] sm:min-h-[40vh] overflow-hidden bg-mesh flex items-center">
        <div className="hidden sm:block absolute top-10 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-gradient-to-br from-accent/20 to-teal-500/20 blob animate-float blur-3xl" />
        <div className="container px-4 sm:px-6 lg:px-8 relative py-12 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20 mb-4 sm:mb-6">
                <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium text-foreground">Get in Touch</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
                Contact <span className="text-gradient-teal">Us</span>
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground px-4">Have questions? We'd love to hear from you!</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 sm:py-20 bg-card">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Let's Connect</h2>
                <p className="text-sm sm:text-base text-muted-foreground">Reach out to learn more about our programs or how you can help.</p>
              </div>

              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 transition-all">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg shrink-0`}>
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors break-all">{info.value}</a>
                    ) : (
                      <p className="text-sm sm:text-base font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114025.94405449268!2d77.93689044999999!3d27.176670349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin" width="100%" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location" className="grayscale hover:grayscale-0 transition-all duration-500 sm:h-[200px]" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-background border border-border">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent to-teal-600 flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <Send className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Send a Message</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">We'll respond as soon as possible</p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="name" className="text-sm">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="email" className="text-sm">Your Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="h-10 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="message" className="text-sm">Message</Label>
                  <Textarea id="message" placeholder="How can we help?" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="rounded-lg sm:rounded-xl resize-none text-sm sm:text-base" />
                </div>
                <Button type="submit" className="w-full h-10 sm:h-12 rounded-lg sm:rounded-xl shine text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : <><Send className="h-4 w-4 mr-2" />Send Message</>}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
