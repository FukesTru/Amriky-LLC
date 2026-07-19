/**
 * Sell — Selling a Home Southeast Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, ProcessTimeline, FAQAccordion, CTABand } from "@/components/SharedSections";

export default function Sell() {
  const whatWeOffer = [
    "Free Comparative Market Analysis (CMA) to determine optimal listing price",
    "Professional photography recommendations and listing preparation advice",
    "MLS listing with maximum exposure across all major real estate platforms",
    "Targeted digital marketing to reach qualified buyers",
    "Open house coordination and private showing management",
    "Expert offer review and negotiation to maximize your net proceeds",
    "Transaction coordination through inspection, appraisal, and closing",
    "Clear communication at every stage — no surprises",
  ];

  const steps = [
    { number: "01", title: "Free Home Valuation", description: "Harun conducts a thorough Comparative Market Analysis of your property, reviewing recent sales and current market conditions to recommend the optimal listing price." },
    { number: "02", title: "Prepare & List", description: "We prepare your home for market — from staging advice to professional photography. Your listing goes live on MLS and all major platforms with a targeted marketing strategy." },
    { number: "03", title: "Negotiate & Close", description: "Harun reviews all offers, advises on terms and contingencies, and negotiates to maximize your net proceeds. We coordinate everything through closing day." },
  ];

  const faqs = [
    { question: "How do I know what price to list my home at?", answer: "Harun prepares a free Comparative Market Analysis (CMA) that reviews recent sales of similar homes in your area, current market inventory, and local trends. This data-driven approach ensures your home is priced to attract buyers while maximizing your proceeds." },
    { question: "How long will it take to sell my home in Southeast Michigan?", answer: "Average days on market varies by location, price point, and condition. Well-priced homes in Southeast Michigan often receive offers within days. Harun will provide realistic expectations based on current conditions in your specific neighborhood." },
    { question: "What should I do to prepare my home for sale?", answer: "Focus on curb appeal, decluttering, deep cleaning, and addressing any obvious maintenance issues. Harun will walk through your home and provide specific recommendations. Small investments in preparation often yield significant returns in final sale price." },
    { question: "Do I need to make repairs before listing?", answer: "Not necessarily. Whether to make repairs depends on the cost, your timeline, and current market conditions. Harun will advise on which repairs are likely to increase your sale price and which aren't worth the investment. Sometimes selling as-is makes more sense." },
    { question: "What are the costs of selling a home in Michigan?", answer: "Sellers typically pay real estate agent commissions, title insurance, transfer taxes, and any agreed-upon closing costs. Harun will provide a net proceeds estimate so you know exactly what to expect before you list." },
    { question: "What if I need to sell quickly?", answer: "If speed is a priority, Harun can develop a strategy focused on rapid sale — including aggressive pricing, intensive marketing, and flexible showing availability. He can also discuss cash buyer options if an extremely fast timeline is required." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Southeast Michigan"
        title="Sell Your Home in Southeast Michigan for Maximum Value"
        subtitle="Strategic pricing, professional marketing, and expert negotiation. Harun Ali gets Southeast Michigan homes sold quickly and for top dollar."
        bgImage="/manus-storage/hero-sell_c7676cdd.jpg"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Selling a Home" }]}
      />

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <SectionHeader
                eyebrow="Seller Representation"
                title="Expert Home Selling Services in Southeast Michigan"
                subtitle="Selling your home is a major financial transaction. Harun Ali's local expertise and strategic approach consistently deliver strong results for Southeast Michigan sellers."
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
                <p className="eyebrow mb-3">Related Services</p>
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Seller Resources</h3>
                <div className="space-y-4">
                  <Link href="/sell/home-valuation" className="block p-5 transition-all hover:border-yellow-400/50" style={{ background: "#1a2235", border: "1px solid rgba(201,168,76,0.15)" }}>
                    <p className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Free Home Valuation</p>
                    <p className="text-sm" style={{ color: "#A8A090" }}>Get a free, accurate estimate of your home's current market value with no obligation.</p>
                    <span className="text-xs font-semibold uppercase tracking-wider mt-3 inline-block" style={{ color: "#C9A84C" }}>Get My Valuation →</span>
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="The Selling Process" title="How We Sell Your Home" subtitle="A proven three-step process that consistently delivers results for Southeast Michigan sellers." />
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Questions" title="Seller FAQ" />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABand title="Ready to Sell Your Southeast Michigan Home?" subtitle="Get your free home valuation and marketing consultation. No obligation — just expert advice from Harun Ali." ctaLabel="Get My Free Valuation" ctaHref="/sell/home-valuation" />
    </Layout>
  );
}
