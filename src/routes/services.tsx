import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Makeup Services — Lookamaze by Jeel Shah" },
      { name: "description", content: "Bridal makeup, film makeup, party glam & more — explore all services by Jeel Shah in Mumbai." },
      { property: "og:title", content: "Services — Lookamaze" },
      { property: "og:description", content: "Professional makeup services in Mumbai." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    emoji: "👰",
    title: "Bridal Makeup",
    desc: "Complete bridal packages including engagement, mehndi, sangeet, and wedding day looks. HD & airbrush options available.",
    for: "Brides & Families",
  },
  {
    emoji: "🎉",
    title: "Party & Non-Bridal Makeup",
    desc: "Cocktail parties, receptions, festive occasions — show up looking fabulous every time.",
    for: "Personal Clients",
  },
  {
    emoji: "🎨",
    title: "Self Makeup Workshops",
    desc: "Learn professional makeup techniques in hands-on workshops. Perfect for beginners and enthusiasts who want to do their own glam.",
    for: "Makeup Enthusiasts",
  },
];

function ServicesPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="My Services 💄" subtitle="Tailored makeup experiences for every occasion and client." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <span className="text-4xl">{service.emoji}</span>
              <h3 className="mt-4 font-heading text-xl font-normal text-foreground">{service.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              <span className="mt-4 inline-block text-xs font-body font-medium text-primary bg-rose-soft px-3 py-1 rounded-full">
                For: {service.for}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Service ✍️
          </Link>
        </div>
      </div>
    </div>
  );
}
