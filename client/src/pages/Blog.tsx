/**
 * Blog Index — Michigan Real Estate Tips
 * Design: Gilded Estate — dark navy + gold
 * Upgraded: featured post hero, editorial hierarchy, magazine-style layout
 */
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp, SectionHeader, CTABand } from "@/components/SharedSections";

const posts = [
  {
    title: "How Much Is My Michigan Home Worth in 2026?",
    excerpt: "Understanding your home's current market value is the essential first step — whether you're planning to sell, refinance, or simply want to know where you stand. Here's what drives home prices in Southeast Michigan and how to get an accurate estimate.",
    date: "June 15, 2026",
    readTime: "6 min read",
    category: "Home Selling",
    href: "/blog",
    featured: true,
  },
  {
    title: "First-Time Home Buyer Guide for Southeast Michigan",
    excerpt: "Buying your first home in the Detroit metro area is an exciting milestone — but it can also feel overwhelming. This comprehensive guide walks you through every step, from getting pre-approved to closing day.",
    date: "May 20, 2026",
    readTime: "9 min read",
    category: "Home Buying",
    href: "/blog",
    featured: false,
  },
  {
    title: "Should You Buy or Rent in the Detroit Metro Area?",
    excerpt: "With home prices and interest rates both in flux, many Southeast Michigan residents are asking: is it better to buy or rent right now? We break down the financial math and lifestyle factors.",
    date: "April 10, 2026",
    readTime: "7 min read",
    category: "Market Insights",
    href: "/blog",
    featured: false,
  },
  {
    title: "Is Real Estate Still a Good Investment in Michigan?",
    excerpt: "Despite national uncertainty, Southeast Michigan continues to offer compelling real estate investment opportunities. From Detroit's revitalization to affordable suburban markets in Van Buren Township and Belleville.",
    date: "March 5, 2026",
    readTime: "8 min read",
    category: "Investment",
    href: "/blog",
    featured: false,
  },
];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <Layout>
      <PageHero
        eyebrow="Michigan Real Estate Tips"
        title="Insights for Southeast Michigan Buyers, Sellers & Investors"
        subtitle="Expert real estate advice from Harun Ali — covering the local market, buying tips, selling strategies, and investment opportunities."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-24" style={{ background: "#0B0F1A" }}>
        <div className="container">
          {/* Featured Post — editorial hero card */}
          <FadeUp>
            <Link href={featured.href} className="block group mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                {/* Left: large number + category */}
                <div className="lg:col-span-1 flex flex-col justify-between p-8" style={{ background: "#111827", borderRight: "1px solid rgba(201,168,76,0.15)" }}>
                  <div>
                    <p className="eyebrow mb-3">Featured</p>
                    <p className="text-7xl font-bold leading-none" style={{ color: "rgba(201,168,76,0.12)", fontFamily: "'Playfair Display', serif" }}>01</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 inline-block" style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.3)", fontFamily: "'Inter', sans-serif" }}>
                      {featured.category}
                    </span>
                  </div>
                </div>
                {/* Right: content */}
                <div className="lg:col-span-4 p-10" style={{ background: "#1a2235" }}>
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>
                      <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                    </span>
                    <span className="text-xs" style={{ color: "#6B6358" }}>·</span>
                    <span className="text-xs" style={{ color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>{featured.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 group-hover:text-yellow-400 transition-colors leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {featured.title}
                  </h2>
                  <div className="w-12 h-0.5 mb-5" style={{ background: "#C9A84C" }} />
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider" style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}>
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>

          {/* Remaining Posts */}
          <div className="mb-12">
            <SectionHeader eyebrow="More Articles" title="From the Amriky Blog" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link href={post.href} className="block group h-full">
                  <article className="p-8 h-full transition-all duration-300" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.15)" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.45)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)")}
                  >
                    <p className="text-5xl font-bold mb-4 leading-none" style={{ color: "rgba(201,168,76,0.12)", fontFamily: "'Playfair Display', serif" }}>0{i + 2}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="eyebrow text-xs">{post.category}</span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs" style={{ color: "#6B6358", fontFamily: "'Inter', sans-serif" }}>{post.date}</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "#C9A84C", fontFamily: "'Inter', sans-serif" }}>
                        Read <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>

          {/* Newsletter / More content CTA */}
          <FadeUp>
            <div className="mt-16 p-10 text-center" style={{ background: "#111827", border: "1px solid rgba(201,168,76,0.2)" }}>
              <BookOpen className="h-10 w-10 mx-auto mb-4" style={{ color: "#C9A84C", opacity: 0.7 }} />
              <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>More Articles Coming Soon</h3>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}>
                Harun Ali regularly publishes practical real estate insights for Southeast Michigan buyers, sellers, and investors.
              </p>
              <Link href="/contact" className="btn-gold">Subscribe to Updates</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABand
        title="Have a Real Estate Question?"
        subtitle="Don't see the answer you're looking for? Contact Harun Ali directly for personalized advice about buying, selling, or investing in Southeast Michigan."
        ctaLabel="Ask Harun a Question"
      />
    </Layout>
  );
}
