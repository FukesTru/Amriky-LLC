/**
 * Disclaimer — Real Estate Disclaimer (not legal services)
 * Design: Gilded Estate — dark navy + gold
 */
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp } from "@/components/SharedSections";

export default function Disclaimer() {
  return (
    <Layout>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="Important information about the content and services provided by Amriky LLC."
        breadcrumbs={[{ label: "Disclaimer" }]}
        showCallButton={false}
      />
      <section className="py-20" style={{ background: "#0B0F1A" }}>
        <div className="container max-w-3xl">
          <FadeUp>
            <div className="prose prose-invert max-w-none" style={{ fontFamily: "'Inter', sans-serif", color: "#A8A090", lineHeight: 1.8 }}>
              <p className="text-sm mb-2" style={{ color: "#6B6358" }}>Last Updated: July 2026</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Real Estate Services Disclaimer</h2>
              <p>Amriky LLC is a licensed real estate company operating in the State of Michigan. The information provided on this website (www.amriky.net) is for general informational purposes only and is intended to help consumers understand the real estate buying, selling, and investment process.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Not Legal or Financial Advice</h2>
              <p>Nothing on this website constitutes legal advice, financial advice, tax advice, or investment advice. Real estate transactions involve complex legal and financial considerations. You should consult with a licensed attorney, certified financial planner, or tax professional before making any real estate decision.</p>
              <p>Amriky LLC and its agents are real estate professionals, not attorneys or financial advisors. Our consultations are focused on real estate market conditions, property values, and the buying and selling process — not legal or financial planning.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Accuracy of Information</h2>
              <p>While we strive to keep the information on this website accurate and up to date, Amriky LLC makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on this website.</p>
              <p>Real estate market conditions change frequently. Information about home values, market trends, and neighborhood characteristics reflects conditions at the time of writing and may not reflect current conditions. Always consult with a licensed real estate professional for current market information.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Property Information</h2>
              <p>Property information, including pricing and availability, is subject to change without notice. Amriky LLC is not responsible for errors or omissions in property listings or descriptions. All property information should be independently verified.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Fair Housing</h2>
              <p>Amriky LLC is committed to the principles of the Fair Housing Act. We do not discriminate on the basis of race, color, national origin, religion, sex, familial status, disability, or any other protected class under federal, state, or local law.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Third-Party Links</h2>
              <p>This website may contain links to third-party websites. These links are provided for convenience only. Amriky LLC has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h2>
              <p>If you have questions about this disclaimer, please contact us at:</p>
              <p>
                Amriky LLC<br />
                7080 Amanda Dr, Belleville, MI 48111<br />
                Phone: (734) 733-4255<br />
                Email: info@amriky.net
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </Layout>
  );
}
