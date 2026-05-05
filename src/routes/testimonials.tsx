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
    name: "Priyanshi Malpani",
    text: "Hi Jeel, I just wanted to thank you for the incredible work you and your team (hairstylist) did for me. I've always preferred subtle, natural-looking makeup, and you kept that in mind perfectly across all 6 of my functions. I received so many compliments—everyone absolutely loved your work! It's clear that you're truly skilled at what you do, and your expertise and experience really shine through. I'm so glad I chose you for such an important occasion. I'll definitely be reaching out to you for future events and recommending you to others as well. Thank you once again ♥️",
    rating: 5,
  },
  {
    name: "Aahuti",
    text: "Got SO many compliments on my make up. I think you and I have established our comfort in terms of what good looks on me. Many people asked where I got my make up done from. This is only the second time you've done my make up but both the times it's been fabulous. Thank you once again 😘",
    rating: 5,
  },
  {
    name: "Dhruvi Shah",
    text: "From the very beginning, I knew I was in good hands. You really took the time to understand my skin especially since it wasn't the easiest to work with, with the patchiness and texture and my pigmentation. After the first function, when we realised there was dryness around my under-eyes, I genuinely appreciated how seriously you took it. Instead of sticking to one approach, you kept adapting, experimenting, and improving the makeup with every single event. 💗 By the end of it, everything came together so beautifully, and that's all because of the effort, patience, and care you put in. It wasn't just about doing my makeup- you really went above and beyond to make sure I felt confident and comfortable on my most important days. 🥹🫶🏼 Thank you so much Specksyy for your hard work, dedication and for being so invested throughout. I'm so, so grateful I chose you 🤍 You're amazing at what you do!",
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
