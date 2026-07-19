/**
 * FloatingCallButton — Amriky LLC Real Estate
 * Gold floating "Call Now" button, mobile only, every page
 */
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingCallButton() {
  return (
    <motion.a
      href="tel:7347334255"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-5 z-50 flex items-center gap-2 lg:hidden shadow-2xl"
      style={{
        background: "#C9A84C",
        color: "#0B0F1A",
        padding: "0.75rem 1.25rem",
        borderRadius: "2px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "0.875rem",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        boxShadow: "0 8px 30px rgba(201,168,76,0.4)",
        textDecoration: "none",
      }}
      aria-label="Call Now"
    >
      <Phone className="h-4 w-4" />
      Call Now
    </motion.a>
  );
}
