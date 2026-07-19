/**
 * Services Hub — Real Estate Services Southeast Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, ServiceCard, CTABand } from "@/components/SharedSections";
import { CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    { number: "01", title: "Buying a Home", description: "Expert buyer representation from search to closing. Harun helps you find the right property at the right price in Southeast Michigan.", href: "/buy" },
    { number: "02", title: "Selling a Home", description: "Strategic pricing, professional marketing, and expert negotiation to sell your home quickly and for maximum value.", href: "/sell" },
    { number: "03", title: "Real Estate Investment", description: "Identify, analyze, and acquire investment properties across Southeast Michigan with guidance from a local expert.", href: "/investment" },
    { number: "04", title: "Home Valuation", description: "Get a free, accurate market analysis of your home's current value — no obligation, no pressure.", href: "/sell/home-valuation" },
    { number: "05", title: "First-Time Buyers", description: "Specialized guidance for first-time homebuyers, including help with down payment programs and the full purchase process.", href: "/buy/first-time-buyers" },
  ];

  const whyLocal = [
    "Intimate knowledge of Southeast Michigan neighborhoods and price trends",
    "Established relationships with local lenders, inspectors, and title companies",
    "Understanding of local zoning, school districts, and community factors",
    "Faster response times and in-person availability throughout the process",
    "Commitment to the community — Harun lives and works in Southeast Michigan",
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Southeast Michigan"
        title="Real Estate Services for Every Stage of Your Journey"
        subtitle="From first-time buyers to seasoned investors — Amriky LLC provides full-service real estate representation across Southeast Michigan."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="What We Offer" title="Our Real Estate Services" subtitle="Every service is delivered personally by Harun Ali — no handoffs, no assistants." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={i} {...s} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader eyebrow="Why Local Matters" title="The Advantage of a Local Southeast Michigan Agent" subtitle="There's no substitute for genuine local knowledge when it comes to real estate." />
            </FadeUp>
            <FadeUp delay={0.2}>
              <ul className="space-y-4">
                {whyLocal.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
