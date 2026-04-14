import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Lookamaze by Jeel Shah" },
      { name: "description", content: "Read what happy clients say about Jeel Shah's makeup artistry." },
      { property: "og:title", content: "Testimonials — Lookamaze" },
      { property: "og:description", content: "Real reviews from real clients." },
    ],
  }),
  component: TestimonialsPage,
});

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Bride",
    text: "Jeel made me feel like the most beautiful bride! She understood my vision perfectly and the makeup lasted all day. Absolutely magical! 💕",
    rating: 5,
  },
  {
    name: "Rahul Kapoor",
    role: "Film Director",
    text: "Working with Jeel on our film was a breeze. Her character makeup skills are incredible — she brought our characters to life.",
    rating: 5,
  },
  {
    name: "Sneha Desai",
    role: "Wedding Planner",
    text: "I always recommend Jeel to my clients. She's professional, punctual, and incredibly talented. The brides always love her!",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Personal Client",
    text: "Got my makeup done for a cocktail party and received so many compliments! Jeel is so warm and makes you feel super comfortable.",
    rating: 5,
  },
  {
    name: "Kavita Joshi",
    role: "Bride's Mother",
    text: "Jeel took care of the entire bridal party beautifully. Everyone looked stunning. She's patient and truly talented.",
    rating: 5,
  },
  {
    name: "Deepak Singh",
    role: "Production Manager",
    text: "Reliable, creative, and fast — exactly what we need on set. Jeel is our go-to makeup artist for every project.",
    rating: 5,
  },
];

function TestimonialsPage() {
  return (
    <div className="pt-24 pb-20 px-4 bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="What Clients Say 💬" subtitle="Real words from real people who trusted Lookamaze." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="flex gap-1 text-gold mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j}>⭐</span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
