/**
 * About Page — Harun Ali Real Estate Agent Belleville MI
 * Design: Gilded Estate — dark navy + gold
 * Upgraded: stat strip, editorial asymmetric layout, stronger brand voice
 */
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, MapPin, Phone, Quote } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, CTABand } from "@/components/SharedSections";

export default function About() {
  const credentials = [
    "Licensed Michigan Real Estate Agent",
    "Serving Southeast Michigan since founding Amriky LLC",
    "Specializes in residential buy/sell and investment properties",
    "Deep knowledge of Van Buren Township, Belleville, and surrounding cities",
    "Fluent in English and Arabic — serving diverse communities",
    "Committed to transparent, honest communication on every transaction",
  ];

  const values = [
    {
      icon: Users,
      title: "Client-First Approach",
      description: "Every decision is made with your best interests in mind. Harun takes time to understand your goals before recommending any course of action.",
    },
    {
      icon: MapPin,
      title: "Deep Local Knowledge",
      description: "Born and based in Southeast Michigan, Harun knows the neighborhoods, market trends, and local factors that affect property values.",
    },
    {
      icon: Award,
      title: "Integrity & Transparency",
      description: "No hidden fees, no surprises. Harun believes in clear communication and honest advice — even when the truth isn't what you hoped to hear.",
    },
  ];

  const agentStats = [
    { value: "Belleville", label: "Home Base" },
    { value: "Southeast MI", label: "Service Area" },
    { value: "Buy · Sell · Invest", label: "Full-Service" },
    { value: "Direct Access", label: "No Middlemen" },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Belleville, Michigan"
        title="Meet Harun Ali — Your Southeast Michigan Real Estate Agent"
        subtitle="A dedicated local agent who puts clients first, every time. Based in Belleville, serving all of Southeast Michigan."
        bgImage="/manus-storage/hero-main_7d7d8194.jpg"
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Agent Stats Strip */}
      <section style={{ background: "#111827", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            {agentStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="py-8 px-6 text-center"
              >
                <p className="text-xl font-bold mb-1.5" style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif" }}>{stat.value}</p>
                <p className="text-xs uppercase tracking-wider" style={{ color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section — editorial asymmetric layout */}
      <section className="py-24" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-16 items-start">

            {/* Agent Photo Column */}
            <FadeUp className="lg:col-span-2">
              <div className="relative">
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-sm pointer-events-none"
                  style={{ border: "1px solid rgba(201,168,76,0.2)", zIndex: 0 }}
                />
                <div className="relative overflow-hidden rounded-sm" style={{ zIndex: 1 }}>
                  <img
                    src="/manus-storage/harun-ali_4a9172f7.png"
                    alt="Harun Ali - Licensed Real Estate Agent, Amriky LLC"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "4/5", maxHeight: "560px" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{ background: "linear-gradient(to bottom, transparent, rgba(8,12,22,0.75))" }}
                  />
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

            {/* Bio Content Column */}
            <div className="lg:col-span-3">
            <FadeUp>
              <p className="eyebrow mb-4">About Harun Ali</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Personalized Real Estate Service in Southeast Michigan
              </h2>
              <div className="w-14 h-0.5 mb-8" style={{ background: "#C9A84C" }} />

              {/* Pull quote */}
              <div className="p-6 mb-8" style={{ background: "#111827", borderLeft: "3px solid #C9A84C" }}>
                <Quote className="h-6 w-6 mb-3" style={{ color: "#C9A84C", opacity: 0.6 }} />
                <p className="text-lg italic leading-relaxed text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "When you work with Harun, you work with Harun — not a team of assistants."
                </p>
              </div>

              <div className="space-y-4 mb-8" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>
                <p className="text-base leading-relaxed">
                  Harun Ali is the founder and principal agent of Amriky LLC, a real estate company based in Belleville, Michigan. With a focus on personalized service and local expertise, Harun has built a reputation for helping Southeast Michigan residents navigate the complexities of buying, selling, and investing in real estate.
                </p>
                <p className="text-base leading-relaxed">
                  Unlike large brokerages where clients are passed between team members, Amriky LLC operates on a direct-access model: when you work with Harun, you work with Harun. He handles every aspect of your transaction personally — from the initial consultation to the closing table.
                </p>
                <p className="text-base leading-relaxed">
                  Harun's primary market is Van Buren Charter Township and Belleville, but he serves buyers, sellers, and investors throughout Southeast Michigan, including Detroit, Dearborn, Canton, Westland, and the surrounding communities.
                </p>
              </div>

              <h3 className="text-xl font-bold text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Credentials & Expertise
              </h3>
              <ul className="space-y-3 mb-10">
                {credentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <span className="text-sm" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-gold">Schedule Consultation</Link>
                <a href="tel:7347334255" className="btn-outline-gold">
                  <Phone className="h-4 w-4" /> Call Harun
                </a>
              </div>
            </FadeUp>
            </div>{/* end bio content col */}
          </div>
        </div>
      </section>

      {/* Values — editorial numbered layout */}
      <section className="py-24" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Our Philosophy" title="What Sets Amriky LLC Apart" subtitle="Three principles that guide every transaction, every client, every time." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-8 h-full" style={{ background: "#1a2235", border: "1px solid rgba(201,168,76,0.15)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                >
                  <p className="text-5xl font-bold mb-5 leading-none" style={{ color: "rgba(201,168,76,0.15)", fontFamily: "'Playfair Display', serif" }}>
                    0{i + 1}
                  </p>
                  <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                    <v.icon className="h-5 w-5" style={{ color: "#C9A84C" }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{v.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Work with Harun Ali?"
        subtitle="Get direct access to a dedicated Southeast Michigan real estate expert. No middlemen, no runaround — just results."
        ctaLabel="Schedule Free Consultation"
      />
    </Layout>
  );
}
