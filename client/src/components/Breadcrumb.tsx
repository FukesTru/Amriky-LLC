/**
 * Breadcrumb — Amriky LLC Real Estate
 * Gold chevron separators, used on all inner pages
 */
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5 shrink-0" style={{ color: "#C9A84C" }} />
            )}
            {index === 0 && (
              <Home className="h-3.5 w-3.5 shrink-0" style={{ color: "#C9A84C" }} />
            )}
            {item.href && index < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="text-xs transition-colors hover:text-white"
                style={{ color: "#A8A090" }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-xs font-medium"
                style={{ color: index === allItems.length - 1 ? "#C9A84C" : "#A8A090" }}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
