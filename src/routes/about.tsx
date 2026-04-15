import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import toolsFlatlay from "@/assets/tools-flatlay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jeel Shah — Lookamaze Makeup Artist Mumbai" },
      { name: "description", content: "Meet Jeel Shah, Mumbai's passionate makeup artist specializing in bridal, film & personal beauty." },
      { property: "og:title", content: "About Jeel Shah — Lookamaze" },
      { property: "og:description", content: "The story behind Lookamaze." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={toolsFlatlay} alt="Jeel Shah's makeup kit" className="rounded-2xl shadow-lg w-full" loading="lazy" width={1200} height={800} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Hi, I'm Jeel Shah! 👋
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I'm a professional makeup artist based in <strong className="text-foreground">Mumbai</strong>, passionate about making every face tell its most beautiful story. From glamorous bridal transformations to dramatic character looks for Bollywood productions — I love curating the perfect look for every occasion.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              With years of experience working with wedding planners, production houses, and individual clients, I bring creativity, precision, and a whole lot of heart to every session. My mission is simple — to make you feel confident and absolutely stunning.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Whether it's your wedding day, a film shoot, or a special event — I'm here to make you look and feel like the best version of yourself. 💕
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://wa.me/917303132488?text=Hi%20Jeel!%20I'd%20like%20to%20book%20a%20makeup%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Let's Connect 💬
              </a>
              <a
                href="https://www.instagram.com/_lookamaze_/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-2.5 rounded-xl font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Instagram 📸
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "500+", label: "Happy Brides" },
            { num: "50+", label: "Film Projects" },
            { num: "8+", label: "Years Experience" },
            { num: "Mumbai", label: "Based In" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card rounded-2xl p-6 shadow-sm"
            >
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.num}</span>
              <p className="mt-1 text-sm text-muted-foreground font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
