import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Lookamaze by Jeel Shah" },
      { name: "description", content: "Transparent pricing for bridal, party, and film makeup services by Jeel Shah." },
      { property: "og:title", content: "Pricing — Lookamaze" },
      { property: "og:description", content: "Affordable professional makeup in Mumbai." },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Party Glam",
    price: "₹5,000",
    emoji: "🎉",
    features: ["HD Makeup", "Hairstyling", "False Lashes", "1-2 hour session"],
    popular: false,
  },
  {
    name: "Bridal Package",
    price: "₹25,000",
    emoji: "👰",
    features: ["HD/Airbrush Makeup", "Complete Hairstyling", "Draping Assistance", "Trial Session Included", "Touch-up Kit", "All-day coverage"],
    popular: true,
  },
  {
    name: "Film & Editorial",
    price: "Custom",
    emoji: "🎬",
    features: ["Character Design", "Prosthetics (if needed)", "On-set Touch-ups", "Full-day availability", "Team coordination"],
    popular: false,
  },
];

function PricingPage() {
  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Pricing 💰" subtitle="Transparent, honest pricing. No hidden charges — ever!" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 shadow-sm border transition-shadow hover:shadow-md ${
                pkg.popular ? "border-primary bg-rose-soft ring-2 ring-primary/20" : "border-border bg-card"
              }`}
            >
              {pkg.popular && (
                <span className="inline-block text-xs font-body font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full mb-4">
                  Most Popular ⭐
                </span>
              )}
              <span className="text-4xl">{pkg.emoji}</span>
              <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-2 font-heading text-3xl font-bold text-primary">{pkg.price}</p>
              <p className="text-xs text-muted-foreground">{pkg.price === "Custom" ? "Based on project scope" : "starting price"}</p>
              <ul className="mt-6 space-y-2">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-6 block text-center py-2.5 rounded-xl font-body font-semibold text-sm transition-opacity hover:opacity-90 ${
                  pkg.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          * Prices may vary based on location, number of people, and specific requirements. <br />
          Contact me for a personalized quote! 💬
        </p>
      </div>
    </div>
  );
}
