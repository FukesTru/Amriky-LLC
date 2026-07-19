/**
 * First-Time Buyers — Buy First Home Southeast Michigan
 * Design: Gilded Estate — dark navy + gold
 */
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, ProcessTimeline, FAQAccordion, CTABand } from "@/components/SharedSections";

export default function FirstTimeBuyers() {
  const whatWeHandle = [
    "Explaining the entire home buying process in plain language",
    "Helping you understand your credit score and how to improve it",
    "Connecting you with lenders offering first-time buyer programs",
    "Identifying Michigan down payment assistance programs you may qualify for",
    "Reviewing all contracts and disclosures with you before signing",
    "Coordinating home inspections and explaining the findings",
    "Ensuring you understand all closing costs before closing day",
    "Being available to answer every question — no matter how small",
  ];

  const steps = [
    { number: "01", title: "Get Pre-Approved", description: "Before you start looking at homes, get pre-approved for a mortgage. Harun can refer you to trusted local lenders who specialize in first-time buyer programs and competitive rates." },
    { number: "02", title: "Find Your Home", description: "Harun creates a personalized search based on your budget, preferred neighborhoods, and must-have features. You'll tour homes and get honest assessments of each property's value." },
    { number: "03", title: "Close with Confidence", description: "From offer to closing, Harun handles the details — inspection coordination, negotiation, and paperwork — so you can focus on the excitement of your new home." },
  ];

  const faqs = [
    { question: "What credit score do I need to buy a home in Michigan?", answer: "Most conventional loans require a minimum 620 credit score, while FHA loans accept scores as low as 580 (with 3.5% down) or even 500 (with 10% down). Higher scores qualify you for better interest rates. Harun can connect you with lenders who work with a range of credit profiles." },
    { question: "Are there first-time buyer programs in Michigan?", answer: "Yes. The Michigan State Housing Development Authority (MSHDA) offers down payment assistance and below-market interest rates for qualifying first-time buyers. The MI Home Loan program provides up to $10,000 in down payment assistance. Harun can help you determine which programs you qualify for." },
    { question: "How much do I need for a down payment?", answer: "Down payment requirements vary by loan type: FHA loans require 3.5%, conventional loans can be as low as 3%, and VA loans (for veterans) require 0% down. With MSHDA assistance, your out-of-pocket down payment may be significantly reduced. Harun will help you explore all options." },
    { question: "What is the difference between pre-qualification and pre-approval?", answer: "Pre-qualification is a quick estimate based on self-reported information. Pre-approval involves a full credit check and income verification — it's a much stronger signal to sellers that you're a serious buyer. Harun strongly recommends getting pre-approved before starting your home search." },
    { question: "What are closing costs and how much should I expect?", answer: "Closing costs are fees paid at the end of the purchase transaction, typically 2–5% of the purchase price. They include lender fees, title insurance, property taxes, and other charges. Harun will provide a detailed estimate early in the process so there are no surprises." },
    { question: "How do I know if I'm getting a fair price on a home?", answer: "Harun prepares a Comparative Market Analysis (CMA) for every home you're seriously considering. This analysis compares the home to recent sales of similar properties in the area, giving you an objective view of whether the asking price is fair, high, or a bargain." },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="First-Time Home Buyers"
        title="Your First Home in Southeast Michigan Starts Here"
        subtitle="Buying your first home doesn't have to be stressful. Harun Ali simplifies the process, explains every step, and helps you take advantage of first-time buyer programs."
        bgImage="/manus-storage/hero-buy_c23e3eda.jpg"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Buying a Home", href: "/buy" }, { label: "First-Time Buyers" }]}
      />

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <SectionHeader
                eyebrow="First-Time Buyer Support"
                title="Everything You Need to Buy Your First Home"
                subtitle="First-time buyers face a steeper learning curve — more questions, more paperwork, and more unknowns. Harun Ali specializes in making this process clear, manageable, and even enjoyable."
              />
              <p className="text-base leading-relaxed mt-6 mb-8" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>
                From understanding your credit score to signing the closing documents, Harun walks alongside you at every stage. He takes the time to explain what each document means, why each step matters, and what to expect next — so you always feel informed and in control.
              </p>
              <Link href="/contact" className="btn-gold text-xs">Start My Home Buying Journey</Link>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="p-8" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="eyebrow mb-4">What We Handle</p>
                <ul className="space-y-3">
                  {whatWeHandle.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                      <span className="text-sm" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="The Process" title="Your First Home Purchase — Step by Step" />
          </div>
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container">
          <div className="mb-14">
            <SectionHeader eyebrow="Common Questions" title="First-Time Buyer FAQ" />
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12" style={{ background: "#111827", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <div className="container">
          <FadeUp>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <span className="text-sm" style={{ color: "#A8A090" }}>Related:</span>
              <Link href="/buy" className="btn-outline-gold text-xs">Buying a Home</Link>
              <Link href="/sell/home-valuation" className="btn-outline-gold text-xs">Home Valuation</Link>
              <Link href="/contact" className="btn-gold text-xs">Free Consultation</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand title="Ready to Buy Your First Home?" subtitle="Schedule a free, no-pressure consultation with Harun Ali. He'll answer your questions and help you take the first step." ctaLabel="Book My Free Consultation" />
    </Layout>
  );
}
