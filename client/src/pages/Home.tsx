/**
 * Homepage — Amriky LLC Real Estate
 * Modern: immersive hero, editorial sections, refined cards, smooth animations
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, MapPin, Clock, Star, CheckCircle, ArrowRight, TrendingUp, Users, Home as HomeIcon } from "lucide-react";
import Layout from "@/components/Layout";
import {
  FadeUp,
  SectionHeader,
  StatsBar,
  ServiceCard,
  FAQAccordion,
  CTABand,
} from "@/components/SharedSections";

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `url(/manus-storage/hero-main_7d7d8194.jpg) center/cover no-repeat`,
      }}
    >
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(8,12,22,0.97) 40%, rgba(8,12,22,0.7) 75%, rgba(8,12,22,0.4) 100%)" }} />
      {/* Subtle radial glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: "linear-gradient(to bottom, transparent, #080C16)" }} />

      <div className="container relative z-10 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          {/* Eyebrow with animated line */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-[1px]" style={{ background: "#C9A84C" }} />
            <p className="eyebrow">Van Buren Charter Township, Michigan</p>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.08] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Buying &amp; Selling<br />
            Homes Across{" "}
            <span style={{ color: "#C9A84C" }}>Southeast<br />Michigan</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Work directly with Harun Ali — a dedicated local agent who knows Southeast Michigan inside and out. No middlemen, no runaround. Just personalized service from start to close.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/contact" className="btn-gold">
              Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:7347334255" className="btn-outline-gold">
              <Phone className="h-4 w-4" />
              Call (734) 733-4255
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center gap-5 mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: Users, text: "Direct Agent Access" },
              { icon: MapPin, text: "Southeast Michigan Expert" },
              { icon: TrendingUp, text: "Buy · Sell · Invest" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                <span className="text-[12px] font-medium" style={{ color: "rgba(245,240,232,0.45)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Agent Intro Card ─────────────────────────────────────────────────────────
function AgentIntroSection() {
  return (
    <section className="py-20" style={{ background: "#080C16" }}>
      <div className="container">
        <FadeUp>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-0 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0E1420, #141C2E)",
              border: "1px solid rgba(201,168,76,0.15)",
              borderRadius: "4px",
            }}
          >
            {/* Main bio */}
            <div className="lg:col-span-2 p-8 md:p-10">
              <p className="eyebrow mb-3">Your Agent</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
              >
                Harun Ali
              </h2>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-5"
                style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}
              >
                Real Estate Agent · Amriky LLC
              </p>
              <p
                className="text-[15px] leading-relaxed mb-7"
                style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.8", maxWidth: "480px" }}
              >
                Harun Ali brings deep local knowledge of Southeast Michigan's real estate market to every client relationship. Whether you're buying your first home, selling a property, or exploring investment opportunities, you'll work directly with Harun — not a team of assistants.
              </p>
              <Link href="/about" className="btn-gold" style={{ padding: "0.7rem 1.5rem", fontSize: "0.75rem" }}>
                Meet Harun Ali
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Contact info sidebar */}
            <div
              className="flex flex-col justify-center gap-0 divide-y"
              style={{ borderLeft: "1px solid rgba(201,168,76,0.1)", divideColor: "rgba(201,168,76,0.08)" } as React.CSSProperties}
            >
              {[
                { icon: Clock, label: "Available for Consultations", sub: "Flexible scheduling" },
                { icon: MapPin, label: "Van Buren Twp, MI", sub: "7080 Amanda Dr, Belleville" },
                { icon: Phone, label: "(734) 733-4255", sub: "Direct line to Harun" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6"
                  style={{ borderColor: "rgba(201,168,76,0.08)" }}
                >
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0 rounded-sm"
                    style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
                    <p className="text-[11px]" style={{ color: "#4A4540" }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Buying a Home",
      description: "Navigate Southeast Michigan's market with confidence. Harun guides you from search to closing, ensuring you find the right home at the right price.",
      href: "/buy",
    },
    {
      number: "02",
      title: "Selling a Home",
      description: "Strategic pricing, professional marketing, and expert negotiation to get your home sold quickly and for top dollar in today's market.",
      href: "/sell",
    },
    {
      number: "03",
      title: "Real Estate Investment",
      description: "Identify high-potential investment properties in Southeast Michigan. From analysis to acquisition, Harun helps you build lasting wealth through real estate.",
      href: "/investment",
    },
    {
      number: "04",
      title: "Home Valuation",
      description: "Get an accurate, data-driven estimate of your home's current market value — completely free, with no obligation.",
      href: "/sell/home-valuation",
    },
    {
      number: "05",
      title: "First-Time Buyers",
      description: "Buying your first home can be overwhelming. Harun simplifies the process, explains every step, and helps you take advantage of first-time buyer programs.",
      href: "/buy/first-time-buyers",
    },
  ];

  return (
    <section className="py-24" style={{ background: "#080C16" }}>
      <div className="container">
        <div className="mb-14">
          <SectionHeader
            eyebrow="What We Offer"
            title="Real Estate Services Tailored to You"
            subtitle="From buying your first home to building a real estate portfolio — Amriky LLC provides full-service real estate representation across Southeast Michigan."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Areas We Serve ───────────────────────────────────────────────────────────
function AreasSection() {
  const cities = [
    "Van Buren Township", "Belleville", "Ypsilanti", "Wayne", "Canton",
    "Westland", "Taylor", "Novi", "Farmington Hills", "Garden City",
    "Romulus", "Inkster", "Detroit", "Dearborn", "Dearborn Heights",
    "Hamtramck", "Southfield", "Southeast Michigan",
  ];

  return (
    <section
      className="py-24"
      style={{ background: "#0E1420", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container">
        <div className="mb-12">
          <SectionHeader
            eyebrow="Service Area"
            title="Serving All of Southeast Michigan"
            subtitle="Amriky LLC serves buyers, sellers, and investors across the greater Detroit metro area and Southeast Michigan."
          />
        </div>
        <FadeUp>
          <div className="flex flex-wrap gap-2.5">
            {cities.map((city, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.35 }}
                className="px-4 py-2 text-[13px] font-medium rounded-sm"
                style={{
                  background: "rgba(14,20,32,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "rgba(245,240,232,0.5)",
                  fontFamily: "'Inter', sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {city}
              </motion.span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Meet Your Agent ──────────────────────────────────────────────────────────
function MeetAgentSection() {
  const valuePoints = [
    "Direct access to your agent — Harun Ali handles every step personally",
    "Deep knowledge of Van Buren Township, Belleville, and Southeast Michigan",
    "Transparent communication throughout the entire process",
    "Expert negotiation to protect your interests and maximize value",
    "Full-service support: buying, selling, and investment guidance",
    "Local market insights backed by real data and experience",
  ];

  return (
    <section className="py-24" style={{ background: "#080C16" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 items-start">
          {/* Agent Photo */}
          <FadeUp className="lg:col-span-2">
            <div className="relative">
              {/* Gold accent frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full rounded-sm pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.2)", zIndex: 0 }}
              />
              <div className="relative overflow-hidden rounded-sm" style={{ zIndex: 1 }}>
                <img
                  src="/manus-storage/harun-ali_4a9172f7.png"
                  alt="Harun Ali - Amriky LLC Real Estate Agent"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "4/5", maxHeight: "520px" }}
                />
                {/* Subtle gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-24"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(8,12,22,0.7))" }}
                />
                {/* Name badge */}
                <div
                  className="absolute bottom-5 left-5 right-5 px-4 py-3 rounded-sm"
                  style={{ background: "rgba(8,12,22,0.85)", border: "1px solid rgba(201,168,76,0.25)", backdropFilter: "blur(8px)" }}
                >
                  <p className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>Harun Ali</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "#C9A84C" }}>Licensed Real Estate Agent - Amriky LLC</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content — spans 3 cols */}
          <div className="lg:col-span-3">
          <FadeUp>
            <p className="eyebrow mb-4">Meet Your Agent</p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              Your Southeast Michigan Real Estate Expert
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
            <p
              className="text-[15px] leading-relaxed mb-8"
              style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
            >
              Harun Ali founded Amriky LLC with a simple mission: provide every client with the same level of dedicated, personalized service regardless of budget or experience. Based in Belleville and serving all of Southeast Michigan, Harun combines local expertise with a commitment to honest, transparent communication.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="btn-gold" style={{ padding: "0.7rem 1.5rem", fontSize: "0.75rem" }}>
                Full Bio
              </Link>
              <Link href="/contact" className="btn-outline-gold" style={{ padding: "0.7rem 1.5rem", fontSize: "0.75rem" }}>
                Schedule Consultation
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-8">
            <ul className="space-y-3">
              {valuePoints.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="flex items-start gap-3 p-4 rounded-sm"
                  style={{
                    background: "rgba(14,20,32,0.6)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <CheckCircle className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                  <span
                    className="text-[13px]"
                    style={{ color: "rgba(245,240,232,0.6)", fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </FadeUp>
          </div>{/* end 3-col content */}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Belleville, MI",
      text: "Harun made buying our first home so much easier than we expected. He was always available to answer questions and walked us through every step. We couldn't be happier with our new home in Van Buren Township.",
      rating: 5,
    },
    {
      name: "James & Linda T.",
      location: "Canton, MI",
      text: "We sold our Canton home in under two weeks at above asking price. Harun's market knowledge and negotiation skills are exceptional. Highly recommend Amriky LLC to anyone buying or selling in Southeast Michigan.",
      rating: 5,
    },
    {
      name: "Marcus D.",
      location: "Dearborn, MI",
      text: "As a real estate investor, I need an agent who understands numbers and local market trends. Harun has helped me acquire three investment properties in the Detroit metro area. He's the only agent I trust.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-24"
      style={{ background: "#0E1420", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container">
        <div className="mb-14">
          <SectionHeader
            eyebrow="Client Reviews"
            title="What Our Clients Say"
            subtitle="Real stories from real Southeast Michigan homeowners and investors who worked directly with Harun Ali."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div
                className="card-modern p-7 h-full flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-current" style={{ color: "#C9A84C" }} />
                  ))}
                </div>
                {/* Quote mark */}
                <div
                  className="text-4xl leading-none mb-3 select-none"
                  style={{ color: "rgba(201,168,76,0.15)", fontFamily: "'Playfair Display', serif" }}
                >
                  "
                </div>
                <p
                  className="text-[14px] leading-relaxed flex-1 mb-6"
                  style={{ color: "rgba(245,240,232,0.65)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                >
                  {t.text}
                </p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                    style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {t.name}
                    </p>
                    <p className="text-[11px]" style={{ color: "#4A4540" }}>{t.location}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection() {
  const faqs = [
    {
      question: "How much is my home worth in Southeast Michigan?",
      answer: "Your home's value depends on recent comparable sales in your neighborhood, current market conditions, property condition, size, and location. Harun Ali provides free, no-obligation home valuations using current MLS data and local market expertise. Contact us to schedule your free valuation.",
    },
    {
      question: "Should I buy or rent in the Detroit metro area?",
      answer: "In most Southeast Michigan markets, buying is financially advantageous over renting when you plan to stay 3+ years. With relatively affordable home prices compared to national averages and strong rental demand, owning often builds more long-term wealth. Harun can walk you through a rent-vs-buy analysis for your specific situation.",
    },
    {
      question: "How long does it take to buy a home in Michigan?",
      answer: "The typical home purchase in Southeast Michigan takes 30–60 days from accepted offer to closing. The search process varies — some buyers find their home in days, others take a few months. Getting pre-approved for a mortgage before you start searching significantly speeds up the process.",
    },
    {
      question: "What is the first step to selling my home?",
      answer: "The first step is getting a professional market analysis (CMA) to understand your home's current value. Harun will assess your property, review comparable sales, and recommend a strategic listing price. We'll also discuss timing, any preparation needed, and our marketing approach.",
    },
    {
      question: "Do I need a real estate agent to buy or sell a home?",
      answer: "While it's legally possible to buy or sell without an agent, having professional representation protects your interests, saves time, and typically results in better outcomes. Sellers represented by agents typically net more money even after commission. Buyers benefit from expert negotiation and access to off-market opportunities.",
    },
    {
      question: "What areas does Amriky LLC serve?",
      answer: "Amriky LLC serves all of Southeast Michigan, with a primary focus on Van Buren Township, Belleville, Canton, Westland, Wayne, Taylor, Romulus, Ypsilanti, Dearborn, Dearborn Heights, Detroit, Garden City, Inkster, Hamtramck, Southfield, Novi, and Farmington Hills.",
    },
    {
      question: "Is real estate still a good investment in Michigan?",
      answer: "Southeast Michigan continues to offer strong investment opportunities, particularly in the Detroit metro area where prices remain below national averages while rental demand stays high. Areas like Van Buren Township, Belleville, and Dearborn have shown consistent appreciation. Harun can help identify high-potential investment properties.",
    },
    {
      question: "How do I get started with Amriky LLC?",
      answer: "The easiest way to get started is to schedule a free consultation with Harun Ali. You can call (734) 733-4255, email info@amriky.net, or fill out our contact form. There's no obligation — just a conversation about your goals and how we can help.",
    },
  ];

  return (
    <section className="py-24" style={{ background: "#080C16" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <SectionHeader
                eyebrow="Common Questions"
                title="Frequently Asked Questions"
                subtitle="Answers to the most common real estate questions from Southeast Michigan buyers, sellers, and investors."
              />
              <div className="mt-8">
                <Link href="/contact" className="btn-gold" style={{ padding: "0.7rem 1.5rem", fontSize: "0.75rem" }}>
                  Ask Harun Directly
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Preview ─────────────────────────────────────────────────────────────
function BlogPreviewSection() {
  const posts = [
    {
      title: "How Much Is My Michigan Home Worth in 2026?",
      excerpt: "Understanding your home's value is the first step to making smart real estate decisions. Here's what drives home prices in Southeast Michigan.",
      href: "/blog",
      date: "June 2026",
      tag: "Market Insights",
    },
    {
      title: "First-Time Home Buyer Guide for Southeast Michigan",
      excerpt: "Everything you need to know about buying your first home in the Detroit metro area — from pre-approval to closing day.",
      href: "/blog",
      date: "May 2026",
      tag: "Buying",
    },
    {
      title: "Should You Buy or Rent in the Detroit Metro Area?",
      excerpt: "A data-driven look at whether buying or renting makes more financial sense in today's Southeast Michigan market.",
      href: "/blog",
      date: "April 2026",
      tag: "Analysis",
    },
  ];

  return (
    <section
      className="py-24"
      style={{ background: "#0E1420", borderTop: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div className="container">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <SectionHeader
            eyebrow="Michigan Real Estate Tips"
            title="From the Amriky Blog"
          />
          <FadeUp>
            <Link href="/blog" className="btn-outline-gold" style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}>
              All Articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <Link href={post.href} className="block group h-full">
                <div
                  className="card-modern p-7 h-full flex flex-col"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm"
                      style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      {post.tag}
                    </span>
                    <span className="text-[11px]" style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}>{post.date}</span>
                  </div>
                  <h3
                    className="text-[1.05rem] font-bold text-white mb-3 leading-snug flex-1 transition-colors duration-200 group-hover:text-yellow-400"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[13px] leading-relaxed mb-5"
                    style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "#C9A84C" }}
                  >
                    Read More
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <StatsBar
        stats={[
          { value: "Southeast MI", label: "Local Market Focus" },
          { value: "Buy · Sell · Invest", label: "Full-Service Real Estate" },
          { value: "Direct Access", label: "Work Directly with Harun" },
        ]}
      />
      <AgentIntroSection />
      <ServicesSection />
      <AreasSection />
      <MeetAgentSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogPreviewSection />
      <CTABand />
    </Layout>
  );
}
