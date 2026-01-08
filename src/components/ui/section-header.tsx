import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ icon: Icon, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      {Icon && (
        <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${centered ? "mx-auto" : ""}`}>
          <Icon className="h-5 w-5 text-primary" />
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
