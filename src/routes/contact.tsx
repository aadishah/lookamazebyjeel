import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Lookamaze by Jeel Shah" },
      { name: "description", content: "Book your makeup session with Jeel Shah. Fill the form or reach out via WhatsApp." },
      { property: "og:title", content: "Contact — Lookamaze" },
      { property: "og:description", content: "Book your perfect look today!" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const whatsappText = `Hi Jeel! I'd like to register for your services.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
    window.open(`https://wa.me/917303132488?text=${encodeURIComponent(whatsappText)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Contact Us ✍️" subtitle="Fill the form below or reach out directly — let's create magic together!" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-sm"
          >
            {submitted ? (
              <div className="text-center py-12">
                <span className="text-5xl">🎉</span>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">Thank You!</h3>
                <p className="mt-2 text-muted-foreground text-sm">Your details have been sent via WhatsApp. I'll get back to you soon!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-body font-semibold text-sm hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Your Name *</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Phone Number *</label>
                  <input
                    name="phone"
                    required
                    type="tel"
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Service Needed *</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Non-Bridal Makeup">Non-Bridal Makeup</option>
                    <option value="Self Makeup">Self Makeup</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your event, date, and any preferences..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">📞 Call Me</h3>
              <a href="tel:+917303132488" className="mt-1 text-primary font-body font-semibold text-lg hover:underline block">
                +91 7303132488
              </a>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">💬 WhatsApp</h3>
              <a
                href="https://wa.me/917303132488?text=Hi%20Jeel!%20I'd%20like%20to%20book%20a%20makeup%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-primary font-body font-semibold hover:underline block"
              >
                Message me directly
              </a>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">📸 Instagram</h3>
              <a
                href="https://www.instagram.com/_lookamaze_/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-primary font-body font-semibold hover:underline block"
              >
                @_lookamaze_
              </a>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-heading text-lg font-semibold text-foreground">📍 Location</h3>
              <p className="mt-1 text-muted-foreground font-body">Mumbai, Maharashtra, India</p>
              <p className="text-xs text-muted-foreground mt-1">Available for travel across India</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
