import LocationPage from "@/components/LocationPage";
export default function Detroit() {
  return (
    <LocationPage
      city="Detroit"
      eyebrow="Detroit, MI"
      title="Real Estate Agent in Detroit, MI"
      subtitle="Detroit's real estate market offers unique opportunities for buyers and investors. Harun Ali provides expert guidance for navigating the Motor City's dynamic market."
      intro="Detroit's real estate market has undergone a remarkable transformation, with significant investment in neighborhoods like Midtown, Corktown, and the greater downtown area. While challenges remain in some parts of the city, Detroit offers some of the most compelling investment opportunities in the Midwest — and in certain neighborhoods, strong appreciation for owner-occupants as well. Harun Ali has deep knowledge of Detroit's varied neighborhoods and can help buyers, sellers, and investors navigate this complex but opportunity-rich market with confidence."
      localNote="Detroit's real estate market is highly neighborhood-dependent. Areas like Midtown, Corktown, and Indian Village have seen dramatic appreciation and strong buyer demand. Other neighborhoods offer extremely low entry prices with significant upside potential for investors willing to take on renovation projects. The city's ongoing revitalization, driven by major employers like Ford, GM, and a growing tech sector, continues to attract new residents and investment. Harun can help you identify the right Detroit neighborhoods for your specific goals — whether you're buying a primary residence or building an investment portfolio."
      mapLat={42.3314}
      mapLng={-83.0458}
      breadcrumbs={[{ label: "Detroit" }]}
    />
  );
}
