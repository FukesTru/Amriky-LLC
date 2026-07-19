/**
 * Testimonials — Amriky LLC Reviews
 * Design: Gilded Estate — dark navy + gold
 * Upgraded: featured quote hero, stat strip, editorial hierarchy
 */
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, CTABand } from "@/components/SharedSections";

const testimonials = [
  { name: "Sarah M.", location: "Belleville, MI", service: "First-Time Buyer", rating: 5, text: "Harun made buying our first home so much easier than we expected. He was always available to answer questions and walked us through every step. We couldn't be happier with our new home in Van Buren Township. Highly recommend Amriky LLC to anyone looking for a real estate agent in Southeast Michigan." },
  { name: "James & Linda T.", location: "Canton, MI", service: "Home Seller", rating: 5, text: "We sold our Canton home in under two weeks at above asking price. Harun's market knowledge and negotiation skills are exceptional. He handled everything professionally and kept us informed throughout. Highly recommend Amriky LLC to anyone buying or selling in Southeast Michigan." },
  { name: "Marcus D.", location: "Dearborn, MI", service: "Real Estate Investor", rating: 5, text: "As a real estate investor, I need an agent who understands numbers and local market trends. Harun has helped me acquire three investment properties in the Detroit metro area. He's the only agent I trust for investment deals in Southeast Michigan." },
  { name: "Priya K.", location: "Westland, MI", service: "Home Buyer", rating: 5, text: "Harun was incredibly patient with us during our home search. We looked at many properties over several months and he never made us feel rushed. When we finally found our dream home, he negotiated a great price. Truly a dedicated agent." },
  { name: "Robert & Angela F.", location: "Taylor, MI", service: "Home Seller", rating: 5, text: "We were nervous about selling our home of 20 years, but Harun made the process smooth and stress-free. His marketing strategy brought multiple offers within days. We closed above asking price and couldn't be more satisfied." },
  { name: "David L.", location: "Romulus, MI", service: "Home Buyer", rating: 5, text: "As a first-time buyer, I had a lot of questions. Harun answered every single one patiently and thoroughly. He helped me understand the entire process and found me a great home in Romulus within my budget. Outstanding service." },
];

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <Layout>
      <PageHero
        eyebrow="Client Reviews"
        title="What Our Clients Say About Amriky LLC"
        subtitle="Real stories from real Southeast Michigan homeowners, buyers, and investors who worked directly with Harun Ali."
        breadcrumbs={[{ label: "Testimonials" }]}
      />

      {/* Stats Strip */}
      <section style={{ background: "#111827", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
            {[
              { value: "5 / 5", label: "Average Rating" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "Southeast MI", label: "Service Area" },
              { value: "Direct Access", label: "Work with Harun" },
            ].map((stat, i) => (
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

      <section className="py-24" style={{ background: "#0B0F1A" }}>
        <div className="container">

          {/* Featured Testimonial — editorial pull quote */}
          <FadeUp>
            <div className="mb-16 p-10 md:p-14" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.25)", borderLeft: "4px solid #C9A84C" }}>
              <Quote className="h-10 w-10 mb-6" style={{ color: "#C9A84C", opacity: 0.5 }} />
              <p className="text-2xl md:text-3xl italic leading-relaxed text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                "{featured.text}"
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex gap-1 mb-1.5">
                    {Array.from({ length: featured.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" style={{ color: "#C9A84C" }} />
                    ))}
                  </div>
                  <p className="text-base font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{featured.name}</p>
                  <p className="text-sm" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{featured.location} · {featured.service}</p>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Remaining Reviews Grid */}
          <div className="mb-12">
            <SectionHeader eyebrow="More Reviews" title="Client Testimonials" subtitle="Honest feedback from clients across Southeast Michigan." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {rest.map((t, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="p-8 h-full transition-all duration-300" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.15)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                >
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" style={{ color: "#C9A84C" }} />
                    ))}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}>{t.service}</p>
                  <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#C8C0B0", fontFamily: "'Playfair Display', serif" }}>"{t.text}"</p>
                  <div className="pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{t.location}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      <CTABand
        title="Ready to Experience the Amriky Difference?"
        subtitle="Join our growing list of satisfied Southeast Michigan clients. Schedule your free consultation today."
        ctaLabel="Schedule Free Consultation"
      />
    </Layout>
  );
}
