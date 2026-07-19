/**
 * SharedSections — Amriky LLC Real Estate
 * Modern: card-modern system, gradient CTAs, refined stats bar, polished FAQ
 */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Phone, ChevronDown, ArrowRight } from "lucide-react";

// ─── Fade-up animation wrapper ───────────────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <FadeUp className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p className="eyebrow mb-3" style={{ letterSpacing: "0.2em" }}>
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      <div
        className={`h-[2px] mb-5 ${centered ? "mx-auto" : ""}`}
        style={{
          width: "40px",
          background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))",
        }}
      />
      {subtitle && (
        <p
          className={`text-[15px] md:text-base leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
          style={{ color: "#7A7268", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
        >
          {subtitle}
        </p>
      )}
    </FadeUp>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export function StatsBar({
  stats,
}: {
  stats: Array<{ value: string; label: string }>;
}) {
  return (
    <div
      className="relative py-8"
      style={{
        background: "linear-gradient(180deg, #0E1420 0%, #080C16 100%)",
        borderTop: "1px solid rgba(201,168,76,0.12)",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gold/10">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center py-4 sm:py-2 sm:px-6">
              <div
                className="text-xl md:text-2xl font-bold mb-1.5"
                style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C", letterSpacing: "-0.01em" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
export function ServiceCard({
  number,
  title,
  description,
  href,
  delay = 0,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
  delay?: number;
}) {
  return (
    <FadeUp delay={delay}>
      <Link href={href} className="block h-full group">
        <div
          className="card-modern p-7 h-full flex flex-col"
          style={{ minHeight: "220px" }}
        >
          {/* Number */}
          <div
            className="text-5xl font-bold mb-5 leading-none select-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "rgba(201,168,76,0.1)",
              transition: "color 0.3s",
            }}
          >
            {number}
          </div>
          <h3
            className="text-[1.1rem] font-bold text-white mb-3 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h3>
          <p
            className="text-[13px] leading-relaxed flex-1 mb-5"
            style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
          >
            {description}
          </p>
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300"
            style={{ color: "#C9A84C" }}
          >
            Learn More
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </FadeUp>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
export function FAQAccordion({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <FadeUp key={i} delay={i * 0.04}>
          <div
            className="overflow-hidden rounded-sm"
            style={{
              background: openIndex === i ? "#0E1420" : "rgba(14,20,32,0.6)",
              border: `1px solid ${openIndex === i ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.05)"}`,
              transition: "border-color 0.25s ease, background 0.25s ease",
            }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span
                className="font-semibold pr-4 leading-snug"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: openIndex === i ? "#F5F0E8" : "rgba(245,240,232,0.75)",
                }}
              >
                {faq.question}
              </span>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  background: openIndex === i ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${openIndex === i ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-300"
                  style={{
                    color: openIndex === i ? "#C9A84C" : "rgba(245,240,232,0.4)",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === i ? "auto" : 0 }}
              transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                className="px-6 pb-5 text-[13px] leading-relaxed"
                style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.8", borderTop: "1px solid rgba(255,255,255,0.04)" }}
              >
                <div className="pt-4">{faq.answer}</div>
              </div>
            </motion.div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

// ─── CTA Band ─────────────────────────────────────────────────────────────────
export function CTABand({
  title = "Ready to Buy or Sell? Get Your Free Consultation Today",
  subtitle = "Work directly with Harun Ali — no middlemen, no runaround. Personalized real estate service across Southeast Michigan.",
  ctaLabel = "Schedule Free Consultation",
  ctaHref = "/contact",
}: {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#060A12" }}
    >
      {/* Background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Top border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.4) 70%, transparent 100%)" }} />

      <div className="container text-center relative z-10">
        <FadeUp>
          <p className="eyebrow mb-4">Take the Next Step</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
          >
            {title}
          </h2>
          <div className="w-10 h-[2px] mx-auto mb-6" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
          <p
            className="text-[15px] mb-10 max-w-lg mx-auto"
            style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
          >
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={ctaHref} className="btn-gold">
              {ctaLabel}
            </Link>
            <a href="tel:7347334255" className="btn-outline-gold">
              <Phone className="h-4 w-4" />
              Call (734) 733-4255
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Process Timeline ─────────────────────────────────────────────────────────
export function ProcessTimeline({
  steps,
}: {
  steps: Array<{ number: string; title: string; description: string }>;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, i) => (
        <FadeUp key={i} delay={i * 0.15}>
          <div className="relative">
            <div
              className="text-5xl font-bold mb-4 leading-none"
              style={{ fontFamily: "'Playfair Display', serif", color: "rgba(201,168,76,0.12)" }}
            >
              {step.number}
            </div>
            <h3
              className="text-lg font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {step.title}
            </h3>
            <p
              className="text-[13px] leading-relaxed"
              style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
            >
              {step.description}
            </p>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
