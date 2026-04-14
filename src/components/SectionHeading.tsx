import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
    </motion.div>
  );
}
