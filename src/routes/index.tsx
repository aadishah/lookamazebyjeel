import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroBridal from "@/assets/hero-bridal.jpg";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lookamaze by Jeel Shah — Professional Makeup Artist Mumbai" },
      { name: "description", content: "Bridal, film & personal makeup artistry in Mumbai by Jeel Shah. Book your perfect look today!" },
      { property: "og:title", content: "Lookamaze by Jeel Shah — Makeup Artist Mumbai" },
      { property: "og:description", content: "Bridal, film & personal makeup artistry in Mumbai." },
    ],
  }),
  component: HomePage,
});

const heroImages = [heroBridal, heroSlide1, heroSlide2, heroSlide3];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt="Makeup by Jeel Shah"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Your Beauty, <br /><span className="text-white">Enhanced</span>
          </h1>
          <p className="mt-4 text-background/90 text-lg md:text-xl font-body max-w-lg mx-auto">
            Professional makeup artistry for brides, films & every occasion — curated with love in Mumbai ✨
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-body font-semibold text-base hover:scale-105 transition-transform shadow-lg"
            >
              Learn More →
            </Link>
            <Link
              to="/portfolio"
              className="bg-background/20 backdrop-blur-sm text-background border border-background/30 px-8 py-3.5 rounded-xl font-body font-semibold text-base hover:bg-background/30 transition-colors"
            >
              View Portfolio →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 bg-gradient-warm">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-foreground"
          >
            Why Choose Lookamaze? 💄
          </motion.h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "👰", title: "Bridal Specialist", desc: "Stunning bridal looks for your most special day — from mehndi to reception." },
              { emoji: "🎬", title: "Film & TV Makeup", desc: "Character & beauty makeup for Bollywood productions and ad films." },
              { emoji: "✨", title: "Personal Glam", desc: "Party, engagement, pre-wedding shoots — look your absolute best." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{item.emoji}</span>
                <h3 className="font-heading text-xl font-semibold mt-4 text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">A Glimpse of My Work</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[portfolio1, portfolio2, portfolio4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <img src={img} alt={`Portfolio look ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={1000} />
              </motion.div>
            ))}
          </div>
          <Link
            to="/portfolio"
            className="mt-8 inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Click to See Full Portfolio →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-rose-soft">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Ready to Look Amazing? 🌟</h2>
          <p className="mt-4 text-muted-foreground text-lg">Message me now, let's create your perfect look together!</p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/917303132488?text=Hi%20Jeel!%20I'd%20like%20to%20book%20a%20makeup%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-[#fff] px-8 py-3.5 rounded-xl font-body font-semibold hover:scale-105 transition-transform"
            >
              WhatsApp 💬
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
