/**
 * LocationPage — Reusable template for all location/city pages
 * Modern: refined stats strip, card-modern system, editorial market note
 */
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, CTABand } from "@/components/SharedSections";
import { MapView } from "@/components/Map";

interface LocationPageProps {
  city: string;
  state?: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  intro: string;
  localNote: string;
  mapLat: number;
  mapLng: number;
  breadcrumbs: Array<{ label: string; href?: string }>;
  stats?: Array<{ value: string; label: string }>;
}

const defaultServices = [
  { num: "01", label: "Buying a Home", href: "/buy", desc: "Expert buyer representation — from search to closing day." },
  { num: "02", label: "Selling a Home", href: "/sell", desc: "Strategic pricing, marketing, and negotiation for top dollar." },
  { num: "03", label: "Real Estate Investment", href: "/investment", desc: "Identify and acquire high-yield investment properties." },
  { num: "04", label: "Free Home Valuation", href: "/sell/home-valuation", desc: "Accurate, data-driven market analysis of your property." },
  { num: "05", label: "First-Time Buyers", href: "/buy/first-time-buyers", desc: "Specialized guidance and down payment assistance programs." },
];

export default function LocationPage({
  city,
  state = "MI",
  eyebrow,
  title,
  subtitle,
  intro,
  localNote,
  mapLat,
  mapLng,
  breadcrumbs,
  stats,
}: LocationPageProps) {
  const localStats = stats || [
    { value: "Local Expert", label: "Born & Based in Southeast MI" },
    { value: "Direct Access", label: "Work Directly with Harun" },
    { value: "All Services", label: "Buy · Sell · Invest" },
    { value: "Free CMA", label: "No-Obligation Valuation" },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow={eyebrow || `${city}, ${state}`}
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
      />

      {/* Stats Strip */}
      <section
        style={{
          background: "linear-gradient(180deg, #0E1420 0%, #080C16 100%)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {localStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="py-7 px-6 text-center"
                style={{
                  borderRight: i < localStats.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <p
                  className="text-lg font-bold mb-1"
                  style={{ color: "#C9A84C", fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "#3A3530", fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Contact/Map */}
      <section className="py-24" style={{ background: "#080C16" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="eyebrow mb-4">Real Estate in {city}</p>
              <h2
                className="text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
              >
                Your {city}<br />Real Estate Agent
              </h2>
              <div className="w-10 h-[2px] mb-8" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
              <p
                className="text-[15px] leading-relaxed mb-10"
                style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
              >
                {intro}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold">Free Consultation</Link>
                <a href="tel:7347334255" className="btn-outline-gold">
                  <Phone className="h-4 w-4" /> (734) 733-4255
                </a>
              </div>
            </FadeUp>

            {/* Contact Info + Map */}
            <FadeUp delay={0.2}>
              <div className="space-y-2 mb-5">
                {[
                  { icon: Phone, label: "Phone", value: "(734) 733-4255", href: "tel:7347334255" },
                  { icon: Mail, label: "Email", value: "info@amriky.net", href: "mailto:info@amriky.net" },
                  { icon: MapPin, label: "Office", value: "7080 Amanda Dr, Belleville, MI 48111", href: undefined },
                  { icon: Clock, label: "Hours", value: "Mon–Sat: 9am–7pm · Sun: By Appointment", href: undefined },
                ].map((info, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-sm"
                    style={{
                      background: "rgba(14,20,32,0.6)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center shrink-0 rounded-sm"
                      style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <info.icon className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5"
                        style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}
                      >
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-[13px] font-medium transition-colors duration-200"
                          style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'Inter', sans-serif" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className="text-[13px]"
                          style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'Inter', sans-serif" }}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="overflow-hidden rounded-sm"
                style={{ height: "280px", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <MapView
                  onMapReady={(map) => {
                    const position = { lat: mapLat, lng: mapLng };
                    map.setCenter(position);
                    map.setZoom(12);
                    new google.maps.Marker({
                      position: { lat: 42.2042, lng: -83.4858 },
                      map,
                      title: `Amriky LLC — Serving ${city}, MI`,
                    });
                  }}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Numbered Service Cards */}
      <section
        className="py-24"
        style={{ background: "#0E1420", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <div className="container">
          <div className="mb-14">
            <SectionHeader
              eyebrow={`Services in ${city}`}
              title={`Real Estate Services in ${city}`}
              subtitle={`Full-service real estate representation for buyers, sellers, and investors in ${city}, MI.`}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {defaultServices.map((s, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <Link href={s.href} className="block group h-full">
                  <div className="card-modern p-7 h-full flex flex-col">
                    <p
                      className="text-5xl font-bold mb-5 leading-none select-none"
                      style={{ color: "rgba(201,168,76,0.1)", fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.num}
                    </p>
                    <h3
                      className="text-[1.05rem] font-bold text-white mb-3 leading-snug transition-colors duration-200 group-hover:text-yellow-400"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.label}
                    </h3>
                    <p
                      className="text-[13px] leading-relaxed flex-1 mb-5"
                      style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.75" }}
                    >
                      {s.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em]"
                      style={{ color: "#C9A84C" }}
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Market Insights */}
      <section className="py-24" style={{ background: "#080C16" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            <FadeUp className="lg:col-span-2">
              <p className="eyebrow mb-4">Local Market Insights</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
              >
                The {city}<br />Real Estate<br />Market
              </h2>
              <div className="w-10 h-[2px] mb-8" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
              <Link href="/contact" className="btn-gold" style={{ padding: "0.7rem 1.5rem", fontSize: "0.75rem" }}>
                Discuss Your Goals
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </FadeUp>
            <FadeUp delay={0.2} className="lg:col-span-3">
              <div
                className="p-8 rounded-sm"
                style={{
                  background: "rgba(14,20,32,0.6)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderLeft: "3px solid rgba(201,168,76,0.5)",
                }}
              >
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#6A6258", fontFamily: "'Inter', sans-serif", lineHeight: "1.9" }}
                >
                  {localNote}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to Buy or Sell in ${city}?`}
        subtitle={`Harun Ali provides personalized real estate services in ${city} and all of Southeast Michigan. Get your free consultation today.`}
      />
    </Layout>
  );
}
