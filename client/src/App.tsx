/**
 * App.tsx — Amriky LLC Real Estate
 * All 18+ routes wired up
 * Design: Gilded Estate — dark navy + gold, Playfair Display + Inter
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Core pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Service pages
import Buy from "./pages/Buy";
import FirstTimeBuyers from "./pages/FirstTimeBuyers";
import Sell from "./pages/Sell";
import HomeValuation from "./pages/HomeValuation";
import Investment from "./pages/Investment";

// Location pages
import Belleville from "./pages/Belleville";
import Canton from "./pages/Canton";
import Dearborn from "./pages/Dearborn";
import Detroit from "./pages/Detroit";
import Ypsilanti from "./pages/Ypsilanti";
import Westland from "./pages/Westland";

// Utility pages
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Sitemap from "./pages/Sitemap";

function Router() {
  return (
    <Switch>
      {/* Core */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />

      {/* Service pages */}
      <Route path="/buy" component={Buy} />
      <Route path="/buy/first-time-buyers" component={FirstTimeBuyers} />
      <Route path="/sell" component={Sell} />
      <Route path="/sell/home-valuation" component={HomeValuation} />
      <Route path="/investment" component={Investment} />

      {/* Location pages */}
      <Route path="/belleville" component={Belleville} />
      <Route path="/canton" component={Canton} />
      <Route path="/dearborn" component={Dearborn} />
      <Route path="/detroit" component={Detroit} />
      <Route path="/ypsilanti" component={Ypsilanti} />
      <Route path="/westland" component={Westland} />

      {/* Utility */}
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/sitemap" component={Sitemap} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
