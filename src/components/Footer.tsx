import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-2xl font-bold mb-3">Lookamaze</h3>
          <p className="text-background/70 text-sm leading-relaxed">
            Professional makeup artistry by Jeel Shah. Based in Mumbai, serving brides, production houses & personal clients.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/portfolio", label: "Portfolio" },
              { to: "/services", label: "Services" },
              { to: "/pricing", label: "Pricing" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-background/70 text-sm hover:text-background transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold mb-3">Connect</h4>
          <div className="flex flex-col gap-2 text-sm text-background/70">
            <a href="tel:+917303132488" className="hover:text-background transition-colors">📞 +91 7303132488</a>
            <a href="https://wa.me/917303132488" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">💬 WhatsApp</a>
            <a href="https://www.instagram.com/_lookamaze_/" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">📸 @_lookamaze_</a>
            <p>📍 Mumbai, India</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-background/20 text-center text-background/50 text-xs">
        © {new Date().getFullYear()} Lookamaze by Jeel Shah. All rights reserved.
      </div>
    </footer>
  );
}
