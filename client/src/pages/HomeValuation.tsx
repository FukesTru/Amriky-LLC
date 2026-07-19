/**
 * Home Valuation — Free Home Valuation Southeast Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, FAQAccordion, CTABand } from "@/components/SharedSections";

export default function HomeValuation() {
  const [formState, setFormState] = useState({ address: "", city: "", bedrooms: "", bathrooms: "", sqft: "", condition: "", name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const factors = [
    "Recent comparable sales (comps) in your neighborhood",
    "Current active listings and market competition",
    "Your home's size, condition, and upgrades",
    "Lot size and location within the neighborhood",
    "Local market trends and days on market",
    "School district ratings and community amenities",
  ];

  const faqs = [
    { question: "How accurate is a free home valuation?", answer: "A professional CMA (Comparative Market Analysis) prepared by a local agent like Harun Ali is significantly more accurate than automated online estimates. Harun reviews actual MLS data, visits comparable properties, and applies local market knowledge that algorithms can't replicate." },
    { question: "How long does a home valuation take?", answer: "Harun typically delivers a written CMA within 24–48 hours of your request. For a more detailed in-person assessment, he'll schedule a property walkthrough at your convenience." },
    { question: "Does getting a valuation obligate me to sell?", answer: "Absolutely not. A free home valuation from Amriky LLC comes with zero obligation. Many homeowners get valuations simply to understand their equity position or for financial planning purposes." },
    { question: "How is a CMA different from a home appraisal?", answer: "A CMA is prepared by a real estate agent and is free. It's used to determine a listing price or understand market value. A formal appraisal is conducted by a licensed appraiser, typically costs $300–500, and is required by lenders for mortgage financing." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Free Home Valuation"
        title="How Much Is Your Southeast Michigan Home Worth?"
        subtitle="Get a free, accurate market analysis from Harun Ali. No obligation, no pressure — just honest data from a local expert."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Selling a Home", href: "/sell" }, { label: "Home Valuation" }]}
      />

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeUp>
              <SectionHeader eyebrow="Get Your Free CMA" title="Request Your Free Home Valuation" subtitle="Fill out the form and Harun will prepare a detailed market analysis within 24–48 hours." />
              <div className="mt-8">
                {submitted ? (
                  <div className="p-10 text-center gold-border" style={{ background: "#111827" }}>
                    <CheckCircle className="h-12 w-12 mx-auto mb-4" style={{ color: "#C9A84C" }} />
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Valuation Request Received!</h3>
                    <p className="text-base" style={{ color: "#A8A090" }}>Harun will prepare your free home valuation and contact you within 24–48 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Property Address <span style={{ color: "#C9A84C" }}>*</span></label>
                      <input type="text" required placeholder="123 Main St" value={formState.address} onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 outline-none" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Inter', sans-serif" }} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>City <span style={{ color: "#C9A84C" }}>*</span></label>
                      <input type="text" required placeholder="Belleville, MI" value={formState.city} onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 outline-none" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Inter', sans-serif" }} />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[{ name: "bedrooms", label: "Bedrooms" }, { name: "bathrooms", label: "Bathrooms" }, { name: "sqft", label: "Sq Ft (approx)" }].map((f) => (
                        <div key={f.name}>
                          <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{f.label}</label>
                          <input type="text" placeholder="—" value={formState[f.name as keyof typeof formState]} onChange={(e) => setFormState({ ...formState, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 outline-none" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Inter', sans-serif" }} />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Property Condition</label>
                      <select value={formState.condition} onChange={(e) => setFormState({ ...formState, condition: e.target.value })}
                        className="w-full px-4 py-3 text-sm text-white outline-none" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Inter', sans-serif" }}>
                        <option value="">Select condition...</option>
                        <option value="excellent">Excellent — Move-in ready, updated</option>
                        <option value="good">Good — Well maintained, minor updates needed</option>
                        <option value="fair">Fair — Some repairs or updates needed</option>
                        <option value="needs-work">Needs Work — Significant repairs required</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[{ name: "name", label: "Your Name", type: "text", required: true }, { name: "email", label: "Email", type: "email", required: true }].map((f) => (
                        <div key={f.name}>
                          <label className="block text-sm font-medium mb-2 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{f.label} {f.required && <span style={{ color: "#C9A84C" }}>*</span>}</label>
                          <input type={f.type} required={f.required} value={formState[f.name as keyof typeof formState]} onChange={(e) => setFormState({ ...formState, [f.name]: e.target.value })}
                            className="w-full px-4 py-3 text-sm text-white placeholder-gray-500 outline-none" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)", fontFamily: "'Inter', sans-serif" }} />
                        </div>
                      ))}
                    </div>
                    <button type="submit" className="btn-gold w-full justify-center">Get My Free Home Valuation</button>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* Info */}
            <FadeUp delay={0.2}>
              <SectionHeader eyebrow="What Affects Value" title="Factors That Determine Your Home's Value" />
              <div className="mt-8 space-y-3 mb-10">
                {factors.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                    <span className="text-sm" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-6" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="eyebrow mb-3">Why Choose a Local CMA?</p>
                <p className="text-sm leading-relaxed" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>
                  Online automated valuations (like Zillow's Zestimate) can be off by 10–20% or more in Southeast Michigan. Harun Ali's local expertise and access to real MLS data provides a far more accurate picture of your home's true market value.
                </p>
              </div>
              <div className="mt-6">
                <FAQAccordion faqs={faqs} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <FadeUp>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <span className="text-sm" style={{ color: "#A8A090" }}>Related:</span>
              <Link href="/sell" className="btn-outline-gold text-xs">Selling a Home</Link>
              <Link href="/buy" className="btn-outline-gold text-xs">Buying a Home</Link>
              <Link href="/contact" className="btn-gold text-xs">Contact Harun</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand title="Know Your Home's Worth Before You Decide" subtitle="A free, no-obligation valuation from Harun Ali gives you the information you need to make smart real estate decisions." ctaLabel="Request Free Valuation" />
    </Layout>
  );
}
