import LocationPage from "@/components/LocationPage";
export default function Canton() {
  return (
    <LocationPage
      city="Canton"
      eyebrow="Canton Township, MI"
      title="Real Estate Agent in Canton Township, MI"
      subtitle="Buying or selling a home in Canton? Harun Ali provides expert real estate services in one of Southeast Michigan's most sought-after communities."
      intro="Canton Township is one of Southeast Michigan's most desirable communities, known for its excellent schools, well-maintained neighborhoods, and convenient access to major employment centers. Amriky LLC serves Canton buyers and sellers with the same personalized, direct-agent service that defines every Harun Ali transaction. Whether you're searching for a family home in one of Canton's established subdivisions or looking to sell and capitalize on the area's strong demand, Harun brings local market expertise and a commitment to your best interests to every transaction."
      localNote="Canton Township consistently ranks among Southeast Michigan's most active real estate markets. The township's strong school district, low crime rates, and proximity to Ann Arbor and Detroit drive consistent buyer demand. Home prices in Canton tend to be higher than the Southeast Michigan average, reflecting the area's desirability. The market is competitive, particularly for move-in-ready homes in the $250,000–$400,000 range. Sellers in Canton typically benefit from multiple offers and shorter days on market compared to surrounding communities."
      mapLat={42.3089}
      mapLng={-83.4822}
      breadcrumbs={[{ label: "Canton" }]}
    />
  );
}
