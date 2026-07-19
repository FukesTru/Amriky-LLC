/**
 * Footer — Amriky LLC Real Estate
 * Modern: gradient top border, refined columns, hover link animations
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const serviceLinks = [
  { label: "Buying a Home", href: "/buy" },
  { label: "First-Time Buyers", href: "/buy/first-time-buyers" },
  { label: "Selling a Home", href: "/sell" },
  { label: "Home Valuation", href: "/sell/home-valuation" },
  { label: "Real Estate Investment", href: "/investment" },
];

const cityLinks = [
  { label: "Belleville / Van Buren Twp", href: "/belleville" },
  { label: "Canton", href: "/canton" },
  { label: "Dearborn", href: "/dearborn" },
  { label: "Detroit", href: "/detroit" },
  { label: "Ypsilanti", href: "/ypsilanti" },
  { label: "Westland", href: "/westland" },
  { label: "Wayne", href: "/" },
  { label: "Romulus", href: "/" },
];

const legalLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#060A12", position: "relative" }}>
      {/* Gold gradient top border */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.5) 70%, transparent 100%)" }} />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-300 group-hover:border-gold"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <img src="/manus-storage/logo-icon_04bcccc5.png" alt="Amriky LLC" className="h-6 w-6 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Amriky</span>
                <span className="text-[9px] font-bold tracking-[0.25em] uppercase" style={{ color: "#C9A84C" }}>Real Estate</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#7A7268", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}>
              Serving Southeast Michigan with personalized real estate services. Harun Ali — your direct agent for buying, selling, and investing.
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-200"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", color: "rgba(201,168,76,0.6)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "#C9A84C";
                    (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.2)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(201,168,76,0.6)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                  aria-label={label}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="eyebrow mb-5">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-all duration-200 flex items-center gap-1.5 group/link"
                    style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6A6258"}
                  >
                    <span className="w-0 group-hover/link:w-3 overflow-hidden transition-all duration-200 inline-block" style={{ height: "1px", background: "#C9A84C", marginTop: "1px" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities Column */}
          <div>
            <h4 className="eyebrow mb-5">Areas Served</h4>
            <ul className="space-y-2">
              {cityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] transition-all duration-200"
                    style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6A6258"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="eyebrow mb-5">Contact</h4>
            <ul className="space-y-3.5 mb-6">
              {[
                { href: "tel:7347334255", icon: Phone, text: "(734) 733-4255" },
                { href: "tel:7346643191", icon: Phone, text: "(734) 664-3191 (Cell)" },
                { href: "mailto:info@amriky.net", icon: Mail, text: "info@amriky.net" },
              ].map(({ href, icon: Icon, text }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-[13px] transition-colors group/contact"
                    style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#C9A84C"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6A6258"}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.7 }} />
                    {text}
                  </a>
                </li>
              ))}
              <li>
                <div className="flex items-start gap-3 text-[13px]" style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif" }}>
                  <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" style={{ color: "#C9A84C", opacity: 0.7 }} />
                  <span>7080 Amanda Dr<br />Belleville, MI 48111</span>
                </div>
              </li>
            </ul>
            <Link href="/contact" className="btn-gold w-full justify-center" style={{ padding: "0.7rem 1.25rem", fontSize: "0.75rem" }}>
              Free Consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}>
              © {new Date().getFullYear()} Amriky LLC. All rights reserved. | Real Estate Agent serving Southeast Michigan
            </p>
            <div className="flex gap-5">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs transition-colors"
                  style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#9A9285"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#4A4540"}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs mt-3 text-center" style={{ color: "#3A3530", fontFamily: "'Inter', sans-serif" }}>
            Amriky LLC is a licensed real estate company. Information on this site is for general informational purposes only and does not constitute legal or financial advice.{" "}
            <Link href="/disclaimer" className="underline transition-colors" style={{ color: "#4A4540" }}>See Disclaimer</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
