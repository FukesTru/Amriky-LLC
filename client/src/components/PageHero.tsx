/**
 * PageHero — Amriky LLC Real Estate
 * Modern: deeper overlay, refined typography, animated gold underline, cleaner CTA row
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Phone, ArrowRight } from "lucide-react";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  cta1Label?: string;
  cta1Href?: string;
  showCallButton?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  breadcrumbs,
  cta1Label = "Free Consultation",
  cta1Href = "/contact",
  showCallButton = true,
}: PageHeroProps) {
  return (
    <section
      className="relative flex flex-col justify-end overflow-hidden"
      style={{
        minHeight: "500px",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "linear-gradient(160deg, #0E1420 0%, #080C16 60%, #0A1020 100%)",
      }}
    >
      {/* Deep cinematic overlay */}
      {bgImage && (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(8,12,22,0.97) 40%, rgba(8,12,22,0.75) 70%, rgba(8,12,22,0.5) 100%)",
          }}
        />
      )}

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 15% 60%, rgba(201,168,76,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          opacity: 0.4,
        }}
      />

      {/* Gold accent line on left edge */}
      <div
        className="absolute left-0 top-0 bottom-0"
        style={{
          width: "3px",
          background: "linear-gradient(to bottom, transparent 10%, rgba(201,168,76,0.6) 35%, rgba(201,168,76,0.6) 65%, transparent 90%)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to bottom, transparent, #080C16)" }}
      />

      <div className="container relative z-10">
        {breadcrumbs && (
          <motion.div
            className="mb-7"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Breadcrumb items={breadcrumbs} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
            >
              <div className="w-6 h-[1px]" style={{ background: "#C9A84C" }} />
              <p className="eyebrow">{eyebrow}</p>
            </motion.div>
          )}

          <motion.h1
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-5"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {/* Animated gold underline */}
          <motion.div
            className="h-[2px] mb-6"
            style={{
              background: "linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.2))",
              width: 0,
            }}
            animate={{ width: 48 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />

          {subtitle && (
            <motion.p
              className="text-[15px] md:text-base max-w-xl mb-9 leading-relaxed"
              style={{ color: "rgba(245,240,232,0.55)", fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
          >
            <Link href={cta1Href} className="btn-gold" style={{ padding: "0.75rem 1.75rem", fontSize: "0.78rem" }}>
              {cta1Label}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {showCallButton && (
              <a href="tel:7347334255" className="btn-outline-gold" style={{ padding: "0.75rem 1.75rem", fontSize: "0.78rem" }}>
                <Phone className="h-3.5 w-3.5" />
                Call (734) 733-4255
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
