/**
 * Contact — Contact Real Estate Agent Belleville MI
 * Form replaced with LeadConnector iframe embed (Website Form - Amriky LLC)
 */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { FadeUp } from "@/components/SharedSections";
import { MapView } from "@/components/Map";

export default function Contact() {
  const contactInfo = [
    { icon: Phone, label: "Main Phone", value: "(734) 733-4255", href: "tel:7347334255" },
    { icon: Phone, label: "Cell", value: "(734) 664-3191", href: "tel:7346643191" },
    { icon: Mail, label: "Email", value: "info@amriky.net", href: "mailto:info@amriky.net" },
    { icon: MapPin, label: "Address", value: "7080 Amanda Dr, Belleville, MI 48111", href: "https://maps.google.com/?q=7080+Amanda+Dr+Belleville+MI+48111" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 9am-7pm · Sun: By Appointment", href: undefined },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Belleville, Michigan"
        title="Contact Harun Ali — Real Estate Agent"
        subtitle="Ready to buy, sell, or invest? Get in touch for a free, no-obligation consultation. Serving all of Southeast Michigan."
        breadcrumbs={[{ label: "Contact" }]}
        showCallButton={false}
      />

      <section className="py-24" style={{ background: "#080C16" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20">

            {/* ── LeadConnector Form Embed ── */}
            <div className="lg:col-span-3">
              <FadeUp>
                <div className="mb-8">
                  <p className="eyebrow mb-3">Get In Touch</p>
                  <h2
                    className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
                  >
                    Schedule Your Free Consultation
                  </h2>
                  <div className="w-10 h-[2px] mb-4" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
                  <p className="text-[14px]" style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}>
                    Fill out the form and Harun will respond within one business day.
                  </p>
                </div>

                {/* LeadConnector Inline Form */}
                <div
                  className="overflow-hidden rounded-sm"
                  style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(14,20,32,0.4)" }}
                >
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/ocTUATDMXiALQgDubBA2"
                    style={{ width: "100%", height: "542px", border: "none", borderRadius: "10px" }}
                    id="inline-ocTUATDMXiALQgDubBA2"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Website Form (Amriky llc)"
                    data-height="542"
                    data-layout-iframe-id="inline-ocTUATDMXiALQgDubBA2"
                    data-form-id="ocTUATDMXiALQgDubBA2"
                    title="Website Form (Amriky llc)"
                  />
                </div>
                <p className="text-[11px] text-center mt-3" style={{ color: "#3A3530", fontFamily: "'Inter', sans-serif" }}>
                  No obligation. Harun will respond within one business day.
                </p>
              </FadeUp>
            </div>

            {/* ── Contact Info + Map ── */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.15}>
                <div className="mb-8">
                  <p className="eyebrow mb-3">Our Office</p>
                  <h2
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
                  >
                    Reach Us Directly
                  </h2>
                  <div className="w-10 h-[2px]" style={{ background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))" }} />
                </div>

                <div className="space-y-2 mb-6">
                  {contactInfo.map((info, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4 rounded-sm"
                      style={{
                        background: "rgba(14,20,32,0.6)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center shrink-0 rounded-sm"
                        style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}
                      >
                        <info.icon className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                      </div>
                      <div>
                        <p
                          className="text-[10px] font-bold uppercase tracking-[0.15em] mb-0.5"
                          style={{ color: "#4A4540", fontFamily: "'Inter', sans-serif" }}
                        >
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-[13px] font-medium transition-colors duration-200"
                            style={{ color: "rgba(245,240,232,0.75)", fontFamily: "'Inter', sans-serif" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[13px]" style={{ color: "rgba(245,240,232,0.75)", fontFamily: "'Inter', sans-serif" }}>
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Google Maps */}
                <div
                  className="overflow-hidden rounded-sm"
                  style={{ height: "260px", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <MapView
                    onMapReady={(map) => {
                      const position = { lat: 42.2042, lng: -83.4858 };
                      map.setCenter(position);
                      map.setZoom(14);
                      new google.maps.Marker({
                        position,
                        map,
                        title: "Amriky LLC - 7080 Amanda Dr, Belleville, MI 48111",
                      });
                    }}
                  />
                </div>
                <p className="text-[11px] mt-2 text-center" style={{ color: "#3A3530", fontFamily: "'Inter', sans-serif" }}>
                  7080 Amanda Dr, Belleville, MI 48111 · Serving all of Southeast Michigan
                </p>
              </FadeUp>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
