# Amriky LLC Real Estate — Design Brainstorm

## Three Stylistic Approaches

### Approach A — "Midnight Prestige" (Probability: 0.07)
Dark luxury real estate aesthetic. Deep navy/black backgrounds, gold accents, serif headlines. Inspired by high-end law firm and luxury real estate brands. Feels authoritative and trustworthy.

### Approach B — "Modern Noir" (Probability: 0.05)
Cinematic dark UI with sharp geometric elements, editorial photography treatment, and a restrained gold palette. Feels like a premium magazine.

### Approach C — "Gilded Estate" (Probability: 0.08)
Classic American real estate prestige — near-black backgrounds, warm gold (#C9A84C) accents, Playfair Display serif headlines, clean Inter body text. Matches the DiSalvo Law reference precisely.

---

## ✅ Chosen Approach: "Gilded Estate" (Approach C)

The client explicitly requested the DiSalvo Law reference design language, so this approach is the ground-truth spec.

---

## Design Specification

**Design Movement:** American Luxury Real Estate — dark, prestigious, editorial

**Core Principles:**
1. Deep near-black navy backgrounds (#0B0F1A / #0a0a12) as the canvas
2. Gold (#C9A84C) as the singular accent — used for underlines, numerals, buttons, hover states
3. Serif (Playfair Display) for all headlines; Sans-serif (Inter) for body/UI
4. Every section opens with a small gold uppercase eyebrow label

**Color Philosophy:**
- Background: #0B0F1A (near-black navy) — conveys authority, exclusivity, trust
- Primary Accent: #C9A84C (warm gold) — wealth, achievement, Michigan heritage
- Text: #F5F0E8 (warm white) for headlines; #A8A090 (warm gray) for body
- Card backgrounds: #111827 (slightly lighter navy)
- Borders: rgba(201, 168, 76, 0.2) (subtle gold tint)

**Layout Paradigm:**
- Full-width dark hero sections on every page
- Asymmetric content blocks alternating text-left / image-right
- Stats bar immediately below hero
- Numbered service cards (01, 02, 03…) in a grid
- Wide footer with 4-column layout

**Signature Elements:**
1. Thin gold underline accent beneath H1 on every hero
2. Gold uppercase eyebrow labels before every section title
3. Numbered cards with large gold numerals (01, 02, 03…)

**Interaction Philosophy:**
- Framer Motion scroll-triggered fade-up on every section
- Nav transitions from transparent to solid dark on scroll
- Gold hover states on all interactive elements
- Floating gold "Call Now" button on mobile

**Animation:**
- Scroll-triggered: `initial={{ opacity: 0, y: 40 }}` → `animate={{ opacity: 1, y: 0 }}` with 0.6s ease-out
- Stagger children by 0.1s in card grids
- Nav background transition: 300ms ease-out
- Button hover: scale(1.02) + gold glow, 160ms ease-out

**Typography System:**
- Headlines: Playfair Display (400, 700) — elegant, authoritative
- Body/UI: Inter (400, 500, 600) — clean, readable
- Eyebrow labels: Inter 600, uppercase, letter-spacing: 0.15em, gold color
- H1: 4xl–6xl, Playfair Display
- H2: 3xl–4xl, Playfair Display
- Body: base–lg, Inter

**Brand Essence:**
Southeast Michigan's trusted real estate partner — personalized service, local expertise, direct agent access. Adjectives: Trustworthy, Knowledgeable, Approachable.

**Brand Voice:**
Headlines and CTAs are direct, confident, and local. Examples:
- "Your Southeast Michigan Home Journey Starts Here"
- "Work Directly with Harun Ali — No Middlemen, No Runaround"
Ban: "Welcome to our website", "Get started today"

**Wordmark & Logo:**
"Amriky" in Playfair Display with "REAL ESTATE" in Inter uppercase gold beneath — stacked layout in nav.

**Signature Brand Color:** #C9A84C (warm gold)

---

## Style Decisions
- Gold accent underline on every hero H1 is a mandatory signature element
- Breadcrumb nav on all inner pages using gold separator chevrons
- Footer always dark (#0B0F1A) with 4 columns: brand info, services, cities, contact
- Floating mobile CTA button: fixed bottom-right, gold background, phone icon
