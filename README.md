# ZIWEI IP DNA™
> **Discover Your Nature. Define Your Position. Build Your Future.**  
> **探索事业天赋，定义个人品牌，规划未来方向。**

---

## 🌟 Overview & Product Vision

**ZIWEI IP DNA™** is an intelligent personal career and personal branding strategy platform inspired by traditional Zi Wei Dou Shu cultural archetypes and modern strategic business management.

It is **NOT** a fortune-telling or superstition site. Instead, it combines two analytical layers:

- **Layer A (Zi Wei Dou Shu Cultural Archetypes):** 14 major stars (紫微, 天机, 太阳, 武曲, etc.), Life/Career/Wealth/Travel Palaces, and Four Transformations (四化) used strictly as a reflective, cultural inquiry framework for inherent mindsets and cognitive patterns.
- **Layer B (Real-World Business Assessment):** Real work experience, verified skills, education, risk profile, and monetization preferences.

The dual layers are deterministically synthesized into actionable intelligence:
1. **Career DNA**: High-affinity roles, 3–5 exploration industries with validation questions, entry barriers, and blindspots.
2. **Personal Brand DNA**: The proprietary Brand Positioning Formula:  
   *`"I help [TARGET AUDIENCE] achieve [OUTCOME] through [METHOD], based on [PROOF]."`*  
   along with 3 editable variations, 3 content pillars, and social channel priorities.
3. **Business DNA**: Feasibility-ranked monetization models (Bespoke 1-on-1 advisory, cohort masterminds, digital toolkits) with revenue hypotheses and first-customer experiments.
4. **Action Roadmap**: A 90-day execution sprint (1-30, 31-60, 61-90 days) and a 3-year strategic growth flywheel.

---

## 🚀 Key Features

- **Multi-step Interactive Discovery**:
  - `Step 1`: Temporal parameters (birth date, location, time confidence: exact / approximate / unknown, gender context with PDPA consent).
  - `Step 2`: Professional background questionnaire (career, industry, top 3 skills, top 3 interests, challenges, public willingness).
  - `Step 3`: 12 situational scenario questions assessing 10 strategic dimensions (leadership, strategic thinking, creativity, execution, communication, relationship building, business development, independence, risk tolerance, knowledge sharing).
  - `Step 4`: Multi-stage synthesis animation.
- **Verified Demo Chart Presets (Demo Mode)**:
  - Preset A: The Strategist & Architect (Tian Ji + Tai Yin)
  - Preset B: The Emperor & Flagship Leader (Zi Wei + Tian Fu)
  - Preset C: The Disruptor & Pioneer (Qi Sha + Po Jun)
  - *No random star derivation or astrology pseudo-hashing; unverified calculations are explicitly separated.*
- **Interactive Reports with Data Visualizations**:
  - 8-dimension Recharts Radar Profile
  - Role Archetype fit meters
  - Industry feasibility and validation cards
  - Editable positioning formula and copy-to-clipboard functionality
  - Printable / PDF export ready
- **Advisor Consultation Funnel**:
  - 3 Tiers: Free Preview (¥0), Extended Full Blueprint (¥299), Expert 1-on-1 Session (¥1,280).
  - Booking lead capture persisted locally in client session storage.
- **Administration Console**:
  - `/admin`: Metrics overview, system status, and security notices.
  - `/admin/archetypes`: Complete 14-star knowledge catalog with academic sources and expert verification status.
  - `/admin/rules`: Deterministic scoring rules and 12-question bank inspector.
  - `/admin/leads`: Consultation requests management table with status toggling.
- **User Dashboard & Privacy (PDPA Compliant)**:
  - Personal profile summary, demo reload button, and **"Delete All My Data"** action.
- **Multilingual Support**:
  - Simplified Chinese (Default)
  - English
  - Bahasa Melayu

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS, Glassmorphism, Luxury Editorial Theme (`#080D18`, `#121B2D`, `#9375FF`, `#38D9D0`)
- **Icons**: Lucide React
- **Data Visualizations**: Recharts
- **State Management**: Zustand with LocalStorage persistence
- **Testing**: Vitest (`npm test`)

---

## 💻 Local Setup & Running Instructions

### 1. Prerequisites
- Node.js `v18.x` or higher (recommended: Node.js 20+)
- npm `v9.x` or higher

### 2. Installation
Clone the repository or navigate to the project directory:
```bash
cd "紫薇 IP DNA"
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Unit Tests
```bash
npm test
```
All unit tests in `src/__tests__/scoring.test.ts` will execute and verify deterministic scoring, positioning formulas, and 14-archetype data integrity.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🗺 Application Routes

| Route | Description |
|---|---|
| `/` | Landing page with dual-layer visualization, 14-archetype gallery, and FAQs |
| `/discover` | Assessment onboarding, demo chart mode toggle, and preset selection |
| `/discover/birth` | Step 1: Birth details, time confidence, and privacy consent |
| `/discover/profile` | Step 2: Professional background, skills, and brand willingness |
| `/discover/quiz` | Step 3: 12 situational questions with style tags and quick review |
| `/discover/analyze` | Step 4: Synthesis engine animation |
| `/report` | Executive Summary, Radar chart, and core findings |
| `/report/career` | Career DNA: Role fit, 3-5 industries, validation questions, blindspots |
| `/report/brand` | Brand DNA: Positioning formula, 3 alternatives, content pillars |
| `/report/business` | Business DNA: Monetization feasibility, revenue hypotheses, experiments |
| `/report/roadmap` | Action Roadmap: 90-day plan (30-60-90) & 3-year strategic flywheel |
| `/consultation` | Advisor booking funnel (Free, Extended, 1-on-1 Expert) |
| `/dashboard` | User dashboard & "Delete My Data" privacy compliance |
| `/admin` | Administration overview dashboard |
| `/admin/archetypes` | 14-star knowledge base catalog and academic source reviews |
| `/admin/rules` | Interpretation rules engine & 12-question bank |
| `/admin/leads` | Leads and consultation requests management |

---

## 🔒 Privacy & Production Readiness

- **Current MVP**: Operates completely in client sandbox without requiring third-party API keys or external server dependencies. Data resides in `localStorage`.
- **For Production Deployment**:
  1. Connect Supabase Auth and PostgreSQL for persistent user accounts.
  2. Protect `/admin/*` routes with enterprise server-side authentication and role-based access control (RBAC).
  3. Integrate Stripe / ToyyibPay / WeChat Pay for processing extended report purchases and advisor bookings.
  4. Ensure ongoing compliance with Malaysian PDPA and international data protection standards.
