/**
 * Investment — Real Estate Investment Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import { CheckCircle, TrendingUp, DollarSign, BarChart } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, ProcessTimeline, FAQAccordion, CTABand } from "@/components/SharedSections";

export default function Investment() {
  const whatWeOffer = [
    "Investment property identification and market analysis",
    "Rental income projections and cash flow analysis",
    "Cap rate and ROI calculations for informed decision-making",
    "Access to off-market and distressed property opportunities",
    "Multi-family and single-family investment strategies",
    "Detroit metro area market trend analysis",
    "Coordination with property managers and contractors",
    "Portfolio growth strategy and long-term planning",
  ];

  const steps = [
    { number: "01", title: "Define Your Investment Strategy", description: "Harun works with you to clarify your investment goals — cash flow, appreciation, or both — and identifies the Southeast Michigan markets and property types that best match your strategy." },
    { number: "02", title: "Analyze & Acquire", description: "Harun identifies target properties, runs detailed financial analysis, and negotiates acquisition terms to ensure you're buying at the right price with the right terms." },
    { number: "03", title: "Build Your Portfolio", description: "After your first acquisition, Harun helps you scale — identifying additional opportunities, leveraging equity, and building a diversified Southeast Michigan real estate portfolio." },
  ];

  const faqs = [
    { question: "Is real estate still a good investment in Michigan in 2026?", answer: "Southeast Michigan continues to offer compelling investment fundamentals: home prices remain below national averages, rental demand is strong (particularly near Detroit and major employers), and several markets are experiencing appreciation. Van Buren Township, Belleville, and parts of Dearborn and Detroit offer particularly strong investment opportunities." },
    { question: "What type of investment properties does Harun specialize in?", answer: "Harun works with investors on single-family rentals, small multi-family properties (2–4 units), and fix-and-flip opportunities across Southeast Michigan. He can help identify the right strategy based on your capital, risk tolerance, and long-term goals." },
    { question: "How do I calculate if an investment property is a good deal?", answer: "Key metrics include cap rate (net operating income ÷ purchase price), cash-on-cash return (annual cash flow ÷ total cash invested), and gross rent multiplier. Harun prepares detailed financial projections for every investment property you're considering." },
    { question: "What are the best areas in Southeast Michigan for investment?", answer: "It depends on your strategy. For cash flow, areas like Inkster, Romulus, and parts of Detroit offer lower purchase prices and strong rental demand. For appreciation potential, Van Buren Township, Belleville, and Canton have shown consistent growth. Harun can match you with the right market for your goals." },
    { question: "Do I need a large down payment for investment properties?", answer: "Investment property loans typically require 15–25% down payment. However, strategies like house hacking (buying a multi-family and living in one unit) can reduce requirements. Harun can connect you with lenders who specialize in investment property financing." },
  ];

  const whyInvest = [
    { icon: TrendingUp, title: "Appreciation Potential", description: "Southeast Michigan markets have shown consistent appreciation, with several areas outperforming state averages." },
    { icon: DollarSign, title: "Strong Rental Demand", description: "High rental demand near Detroit, major employers, and universities creates reliable cash flow opportunities." },
    { icon: BarChart, title: "Below-Average Entry Prices", description: "Compared to national averages, Southeast Michigan offers lower acquisition costs with strong return potential." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Real Estate Investment"
        title="Build Wealth Through Real Estate in Southeast Michigan"
        subtitle="Identify, analyze, and acquire high-potential investment properties across Southeast Michigan with guidance from a local expert."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Real Estate Investment" }]}
      />

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <SectionHeader eyebrow="Investment Services" title="Southeast Michigan Real Estate Investment" subtitle="Whether you're building your first rental portfolio or expanding an existing one, Harun Ali provides the local market knowledge and analytical expertise to help you invest with confidence." />
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
              <div className="space-y-6">
                {whyInvest.map((item, i) => (
                  <div key={i} className="p-6" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)" }}>
                        <item.icon className="h-5 w-5" style={{ color: "#C9A84C" }} />
                      </div>
                      <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Investment Process" title="How We Help You Invest" />
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Investor FAQ" title="Real Estate Investment Questions" />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABand title="Ready to Start Investing in Southeast Michigan Real Estate?" subtitle="Schedule a free investor consultation with Harun Ali. Discuss your goals, budget, and the best strategy for your situation." ctaLabel="Book Investor Consultation" />
    </Layout>
  );
}
