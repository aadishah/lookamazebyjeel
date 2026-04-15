import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const WEB3FORMS_ACCESS_KEY = "0a3640fe-c8a5-4a9e-ac56-528ccd03d24c";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Lookamaze Inquiry");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please try again or reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
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
                <p className="mt-2 text-muted-foreground text-sm">Your message has been sent successfully. I'll get back to you soon!</p>
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
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Email *</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="your@email.com"
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
                  <label className="block text-sm font-body font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell me about your event, date, and any preferences..."
                  />
                </div>
                {error && (
                  <p className="text-destructive text-sm font-body">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
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
