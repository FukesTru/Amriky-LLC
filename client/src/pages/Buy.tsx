/**
 * Buy — Buying a Home Southeast Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, ProcessTimeline, FAQAccordion, CTABand } from "@/components/SharedSections";

export default function Buy() {
  const whatWeOffer = [
    "Comprehensive MLS search and off-market property access",
    "Neighborhood analysis and school district research",
    "Mortgage pre-approval referrals to trusted local lenders",
    "Property tours scheduled at your convenience",
    "Comparative market analysis to ensure fair pricing",
    "Skilled offer negotiation to protect your interests",
    "Coordination with inspectors, appraisers, and title companies",
    "Step-by-step guidance from offer acceptance to closing day",
  ];

  const steps = [
    { number: "01", title: "Free Buyer Consultation", description: "Meet with Harun to discuss your goals, budget, preferred neighborhoods, and timeline. We'll create a personalized home search strategy." },
    { number: "02", title: "Search & Tour Properties", description: "Harun curates listings matching your criteria, schedules tours, and provides expert analysis on each property's value and potential." },
    { number: "03", title: "Offer, Negotiate & Close", description: "When you find the right home, Harun crafts a competitive offer, negotiates on your behalf, and guides you through inspection, financing, and closing." },
  ];

  const faqs = [
    { question: "How do I start the home buying process in Michigan?", answer: "The first step is getting pre-approved for a mortgage so you know your budget. Then schedule a free buyer consultation with Harun Ali to discuss your goals and start your property search. Pre-approval also makes your offers more competitive." },
    { question: "What are closing costs for buyers in Michigan?", answer: "Michigan buyers typically pay 2–5% of the purchase price in closing costs, including lender fees, title insurance, property taxes, and other charges. Harun can provide a detailed estimate based on your specific purchase price and loan type." },
    { question: "How long does it take to buy a home in Southeast Michigan?", answer: "From accepted offer to closing typically takes 30–45 days with a conventional mortgage. The home search phase varies — some buyers find their home quickly, others take a few months. Being pre-approved and working with a responsive agent speeds up the process." },
    { question: "Can I buy a home with a low down payment in Michigan?", answer: "Yes. FHA loans require as little as 3.5% down, and some conventional loans allow 3% down for qualified buyers. First-time buyers may also qualify for Michigan state assistance programs. Harun can connect you with lenders who specialize in low-down-payment programs." },
    { question: "What is a buyer's agent and do they cost me anything?", answer: "A buyer's agent represents your interests throughout the purchase process. In Michigan, the seller typically pays both agents' commissions, so buyer representation is generally free to you. Harun will explain current commission structures during your consultation." },
    { question: "What neighborhoods in Southeast Michigan are best for buyers?", answer: "The best neighborhood depends on your priorities — schools, commute, price point, and lifestyle. Van Buren Township and Belleville offer excellent value with strong community feel. Canton and Westland offer suburban amenities. Detroit and Dearborn offer urban living at lower price points. Harun can match you with the right area." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Southeast Michigan"
        title="Buy a Home in Southeast Michigan with Confidence"
        subtitle="Expert buyer representation from search to closing. Harun Ali guides you through every step of purchasing a home in Southeast Michigan."
        bgImage="/manus-storage/hero-buy_c23e3eda.jpg"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Buying a Home" }]}
      />

      {/* Intro */}
      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Buyer Representation"
                title="Your Dedicated Southeast Michigan Buyer's Agent"
                subtitle="Buying a home is one of the largest financial decisions you'll ever make. Having the right agent in your corner makes all the difference — and with Amriky LLC, that agent is Harun Ali."
              />
              <div className="mt-8 space-y-3">
                {whatWeOffer.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <span className="text-sm" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="p-8" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="eyebrow mb-3">Sub-Services</p>
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Specialized Buyer Services</h3>
                <div className="space-y-4">
                  <Link href="/buy/first-time-buyers" className="block p-5 transition-all hover:border-yellow-400/50" style={{ background: "#1a2235", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <p className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>First-Time Buyers</p>
                    <p className="text-sm" style={{ color: "#A8A090" }}>Specialized guidance for first-time homebuyers, including down payment assistance programs and step-by-step support.</p>
                    <span className="text-xs font-semibold uppercase tracking-wider mt-3 inline-block" style={{ color: "#C9A84C" }}>Learn More →</span>
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="py-20" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="How It Works" title="The Amriky Home Buying Process" subtitle="A simple, transparent three-step process designed to make your home purchase as smooth as possible." />
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Questions" title="Buyer FAQ" subtitle="Common questions from Southeast Michigan home buyers." />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABand title="Ready to Start Your Home Search?" subtitle="Schedule a free buyer consultation with Harun Ali. No pressure, no obligation — just expert guidance." ctaLabel="Start Your Home Search" />
    </Layout>
  );
}
