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
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {Icon && (
        <div className={`section-icon ${centered ? "" : "mx-0"}`}>
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
