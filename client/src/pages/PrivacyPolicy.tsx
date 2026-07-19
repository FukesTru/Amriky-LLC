/**
 * Privacy Policy — Amriky LLC
 * Design: Gilded Estate — dark navy + gold
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp } from "@/components/SharedSections";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Amriky LLC collects, uses, and protects your personal information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
        showCallButton={false}
      />
      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container max-w-3xl">
          <FadeUp>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#A8A090", lineHeight: 1.8 }}>
              <p className="text-sm mb-8" style={{ color: "#6B6358" }}>Last Updated: July 2026</p>

              {[
                {
                  title: "Information We Collect",
                  content: "Amriky LLC collects information you voluntarily provide when you fill out contact forms, request a home valuation, or communicate with us. This may include your name, email address, phone number, property address, and details about your real estate needs. We may also collect standard website analytics data (pages visited, time on site, general location) through analytics tools."
                },
                {
                  title: "How We Use Your Information",
                  content: "We use the information you provide to: respond to your inquiries and consultation requests; provide real estate services you have requested; send you relevant real estate information and market updates (with your consent); improve our website and services; and comply with legal obligations. We do not sell, rent, or share your personal information with third parties for their marketing purposes."
                },
                {
                  title: "Information Sharing",
                  content: "We may share your information with trusted service providers who assist us in operating our website and conducting our business (such as email service providers), provided they agree to keep this information confidential. We may also disclose information when required by law or to protect the rights, property, or safety of Amriky LLC, our clients, or others."
                },
                {
                  title: "Cookies and Analytics",
                  content: "Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect analytics data. You can control cookie settings through your browser preferences. We use Google Analytics (or similar tools) to understand how visitors use our site — this data is aggregated and does not personally identify you."
                },
                {
                  title: "Data Security",
                  content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
                },
                {
                  title: "Your Rights",
                  content: "You have the right to access, correct, or delete your personal information that we hold. To exercise these rights, please contact us at info@amriky.net. You may also opt out of marketing communications at any time by following the unsubscribe instructions in any email we send."
                },
                {
                  title: "Children's Privacy",
                  content: "Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately."
                },
                {
                  title: "Changes to This Policy",
                  content: "We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes constitutes your acceptance of the updated policy."
                },
                {
                  title: "Contact Us",
                  content: "For questions about this Privacy Policy, please contact: Amriky LLC · 7080 Amanda Dr, Belleville, MI 48111 · Phone: (734) 733-4255 · Email: info@amriky.net"
                },
              ].map((section, i) => (
                <div key={i} className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{section.title}</h2>
                  <p className="text-base leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
