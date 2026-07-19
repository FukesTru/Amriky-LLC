/**
 * HTML Sitemap — Amriky LLC
 * Design: Gilded Estate — dark navy + gold
 */
import { Link } from "wouter";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp } from "@/components/SharedSections";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Homepage", href: "/" },
      { label: "About Harun Ali", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Buying a Home",
    links: [
      { label: "Buying a Home — Overview", href: "/buy" },
      { label: "First-Time Home Buyers", href: "/buy/first-time-buyers" },
    ],
  },
  {
    title: "Selling a Home",
    links: [
      { label: "Selling a Home — Overview", href: "/sell" },
      { label: "Free Home Valuation", href: "/sell/home-valuation" },
    ],
  },
  {
    title: "Investment",
    links: [
      { label: "Real Estate Investment", href: "/investment" },
    ],
  },
  {
    title: "Location Pages",
    links: [
      { label: "Belleville / Van Buren Township", href: "/belleville" },
      { label: "Canton", href: "/canton" },
      { label: "Dearborn", href: "/dearborn" },
      { label: "Detroit", href: "/detroit" },
      { label: "Ypsilanti", href: "/ypsilanti" },
      { label: "Westland", href: "/westland" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "HTML Sitemap", href: "/sitemap" },
    ],
  },
];

export default function Sitemap() {
  return (
    <Layout>
      <PageHero
        eyebrow="Navigation"
        title="Site Map"
        subtitle="A complete overview of all pages on the Amriky LLC website."
        breadcrumbs={[{ label: "Sitemap" }]}
        showCallButton={false}
      />
      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sitemapSections.map((section, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div>
                  <h2 className="text-lg font-bold text-white mb-5 pb-3" style={{ fontFamily: "'Playfair Display', serif", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
                    {section.title}
                  </h2>
                  <ul className="space-y-2.5">
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          href={link.href}
                          className="text-sm transition-colors hover:text-white flex items-center gap-2"
                          style={{ color: "#A8A090", fontFamily: "'Inter', sans-serif" }}
                        >
                          <span style={{ color: "#C9A84C" }}>›</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
