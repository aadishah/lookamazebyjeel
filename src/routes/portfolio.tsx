import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import toolsFlatlay from "@/assets/tools-flatlay.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Lookamaze by Jeel Shah" },
      { name: "description", content: "Browse Jeel Shah's stunning makeup portfolio — bridal, editorial, film & party looks." },
      { property: "og:title", content: "Portfolio — Lookamaze" },
      { property: "og:description", content: "Stunning makeup transformations by Jeel Shah." },
    ],
  }),
  component: PortfolioPage,
});

const works = [
  { src: portfolio1, label: "Glamorous Party Look", category: "Party" },
  { src: portfolio2, label: "Traditional Bridal", category: "Bridal" },
  { src: toolsFlatlay, label: "Professional Kit", category: "Behind the Scenes" },
  { src: portfolio4, label: "Engagement Glow", category: "Engagement" },
  { src: portfolio5, label: "Editorial Bold", category: "Editorial" },
  { src: portfolio6, label: "Reception Queen", category: "Bridal" },
];

function PortfolioPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="My Portfolio ✨" subtitle="Every face tells a story — here are some of my favorites." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-card shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={work.src}
                  alt={work.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-body font-medium text-primary bg-rose-soft px-3 py-1 rounded-full">{work.category}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{work.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/_lookamaze_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
          >
            See More on Instagram 📸
          </a>
        </div>
      </div>
    </div>
  );
}
