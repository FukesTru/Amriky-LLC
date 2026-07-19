/**
 * Navbar — Amriky LLC Real Estate
 * Modern: glass blur on scroll, active link underline, refined dropdown
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Buying a Home", href: "/buy" },
      { label: "First-Time Buyers", href: "/buy/first-time-buyers" },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "Selling a Home", href: "/sell" },
      { label: "Home Valuation", href: "/sell/home-valuation" },
    ],
  },
  { label: "Investment", href: "/investment" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled
            ? "rgba(8,12,22,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-9 h-9 flex items-center justify-center rounded-sm"
                style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <img
                  src="/manus-storage/logo-icon_04bcccc5.png"
                  alt="Amriky LLC"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-xl font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Amriky
                </span>
                <span
                  className="text-[9px] font-bold tracking-[0.25em] uppercase"
                  style={{ color: "#C9A84C" }}
                >
                  Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors relative"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        color: isActive(link.href) ? "#C9A84C" : "rgba(245,240,232,0.75)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {link.label}
                      <ChevronDown
                        className="h-3 w-3 transition-transform duration-200"
                        style={{ transform: openDropdown === link.href ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                      {isActive(link.href) && (
                        <span
                          className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px]"
                          style={{ background: "#C9A84C" }}
                        />
                      )}
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-0 mt-2 w-56 py-1.5 rounded-sm overflow-hidden"
                          style={{
                            background: "rgba(10,15,26,0.97)",
                            border: "1px solid rgba(201,168,76,0.18)",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.05)",
                            backdropFilter: "blur(20px)",
                          }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center px-4 py-2.5 text-[13px] transition-all group/item"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                color: location === child.href ? "#C9A84C" : "rgba(245,240,232,0.65)",
                              }}
                            >
                              <span
                                className="w-1 h-1 rounded-full mr-3 transition-all"
                                style={{
                                  background: location === child.href ? "#C9A84C" : "rgba(201,168,76,0.3)",
                                }}
                              />
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="relative px-3.5 py-2 text-[13px] font-medium transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: isActive(link.href) ? "#C9A84C" : "rgba(245,240,232,0.75)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <span
                        className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px]"
                        style={{ background: "#C9A84C" }}
                      />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:7347334255"
                className="flex items-center gap-2 text-[13px] font-medium transition-colors"
                style={{ color: "rgba(245,240,232,0.7)", fontFamily: "'Inter', sans-serif" }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.12)" }}
                >
                  <Phone className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
                </div>
                (734) 733-4255
              </a>
              <Link href="/contact" className="btn-gold" style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem" }}>
                Free Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-sm transition-colors"
              style={{ color: "rgba(245,240,232,0.9)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "#080C16" }}
          >
            <div className="flex items-center justify-between h-[72px] container border-b" style={{ borderColor: "rgba(201,168,76,0.1)" }}>
              <Link href="/" className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm" style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <img src="/manus-storage/logo-icon_04bcccc5.png" alt="Amriky" className="h-6 w-6 object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Amriky</span>
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase" style={{ color: "#C9A84C" }}>Real Estate</span>
                </div>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2" style={{ color: "rgba(245,240,232,0.8)" }}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto container py-6 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3.5 text-base font-medium border-b"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: isActive(link.href) ? "#C9A84C" : "rgba(245,240,232,0.85)",
                      borderColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 py-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-2 py-2 text-sm transition-colors"
                          style={{ color: "rgba(245,240,232,0.5)", fontFamily: "'Inter', sans-serif" }}
                        >
                          <span className="w-1 h-1 rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="container pb-8 pt-4 space-y-3">
              <a href="tel:7347334255" className="btn-outline-gold w-full justify-center">
                <Phone className="h-4 w-4" /> (734) 733-4255
              </a>
              <Link href="/contact" className="btn-gold w-full justify-center">
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
