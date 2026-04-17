import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AsSeenIn from "../components/AsSeenIn";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";
import StickyBottomBar from "../components/StickyBottomBar";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const ENROLL_URL =
  "https://hustlefund.journey.io/p/1f47589f1a2c41a1a31851034a0feab6";

const modules = [
  {
    num: "Module 1",
    name: "Orientation & founder fundamentals",
    items: [
      "Paths to building a business",
      "Founder-market fit",
      "Mercenary vs missionary founders",
      "Painkiller vs vitamin products",
      "Finding a co-founder",
    ],
  },
  {
    num: "Module 2",
    name: "Problem & customer discovery",
    items: [
      "Problem discovery → PMF",
      "Customer discovery process",
      "Prototyping 101",
      "The great startup myth",
      "Market validation",
    ],
  },
  {
    num: "Module 3",
    name: "Market sizing",
    items: [
      "TAM, SAM, SOM explained",
      "Tops-down vs bottoms-up",
      "Five-step sizing framework",
      "Pain discovery",
      "Slide examples",
    ],
  },
  {
    num: "Module 4",
    name: "Traction",
    items: [
      "Early-stage traction metrics",
      "B2B SaaS vs consumer",
      "Tying back to PMF",
      "Slide examples",
    ],
  },
  {
    num: "Module 5",
    name: "Marketing & go-to-market",
    items: [
      "Go-to-market strategy",
      "Finding early customers",
      "Offline tactics",
      "Customer discovery questions",
      "Building relationships fast",
    ],
  },
  {
    num: "Module 6",
    name: "Storytelling & brand",
    items: [
      "The art of storytelling",
      "Personal branding exercise",
      "Brand pillars framework",
      "Customer-centricity",
      "Elevator pitch craft",
    ],
  },
  {
    num: "Module 7",
    name: "Pitch deck best practices",
    items: [
      "Pitch deck fundamentals",
      "Pitching your startup",
      "Deal assessment framework",
      "Investor-ready storytelling",
    ],
  },
];

const testimonials = [
  {
    quote: "The program made me feel like I belonged in the room.",
    name: "Elio M.",
    cohort: "Cohort 1",
  },
  {
    quote:
      "EFS helped deepen my understanding of startup development. The angel network, professional-led sessions, and leadership's support made it a wonderful experience.",
    name: "Simran L.",
    cohort: "Cohort 2",
  },
];

const portfolio = [
  {
    name: "Contra",
    desc: "Exclusive professional communities for independent work",
  },
  { name: "Flex", desc: "Fintech superapp for SMBs" },
  {
    name: "Rupa Health",
    desc: "Personalized, data-driven, root-cause medicine",
  },
];

function FoundersHero() {
  return (
    <section className="bg-cream px-4 pt-8 pb-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flat-card rounded-xl px-8 py-10 md:px-12 md:py-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/brand/angel-squad.png"
              alt="Angel Squad"
              className="w-9 h-9 object-contain"
            />
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-subtle">
                Angel Squad
              </div>
              <div className="text-[13px] font-medium text-ink">
                Emerging Founder School
              </div>
            </div>
          </div>

          <span className="eyebrow-pill">Founders track</span>

          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.05] tracking-tight text-ink max-w-[640px]">
            The next great company starts with someone who decided to{" "}
            <em className="font-serif italic font-black text-gold">build.</em>
          </h1>

          <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.08em] text-subtle">
            Shift from employee to founder mindset
          </p>

          <p className="mt-4 text-[16px] leading-[1.65] text-muted max-w-[560px]">
            An async course for early-to-mid career professionals looking to
            build a company — giving you the frameworks, language, and
            investor perspective to go from idea to pitch-ready.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-near-black text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              Enroll now →
            </a>
            <div className="text-[13px] text-subtle">
              One-time ·{" "}
              <strong className="text-ink font-semibold">$99</strong> ·
              Lifetime access
            </div>
          </div>

          <hr className="my-8 border-0 border-t border-[#dddbd3]" />

          <div className="flex flex-wrap gap-10">
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">
                34
              </p>
              <p className="mt-1 text-xs text-subtle">async video modules</p>
            </div>
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">
                7
              </p>
              <p className="mt-1 text-xs text-subtle">core learning sessions</p>
            </div>
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">
                2,000+
              </p>
              <p className="mt-1 text-xs text-subtle">
                Angel Squad members worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionBand() {
  return (
    <section className="px-4 py-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl px-8 py-10 md:px-12 md:py-12 text-center"
          style={{ background: "#1a1a18" }}
        >
          <p className="font-serif italic text-[1.4rem] md:text-[1.75rem] text-cream leading-snug">
            &ldquo;Empower the next generation of founders.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            Who this is for
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-6 py-5 md:px-8 md:py-6"
        >
          <p className="text-[15px] font-medium text-ink mb-1">
            First-time founders
          </p>
          <p className="text-[14px] text-muted leading-[1.65]">
            You have an idea or a problem you want to solve, and need the
            frameworks to validate it, size the market, and get investor-ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Curriculum() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            What's inside
          </h2>
          <div className="section-rule" />
          <span className="text-[12px] text-subtle whitespace-nowrap">
            34 async modules · 7 sessions
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          {modules.map((m, i) => (
            <motion.div
              key={m.num}
              variants={fadeUp}
              className={`flat-card rounded-xl p-5 ${
                i === modules.length - 1 ? "md:col-span-2" : ""
              }`}
              style={
                i === modules.length - 1
                  ? { border: "0.5px solid #BA7517" }
                  : undefined
              }
            >
              <span className="amber-tag">{m.num}</span>
              <p className="mt-3 font-serif text-[16px] font-bold text-ink leading-snug">
                {m.name}
              </p>
              <ul className="arrow-list mt-3">
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundersTestimonials() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            What fellows say
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flat-card rounded-xl p-6"
            >
              <p className="font-serif italic text-[15px] text-ink leading-[1.6] mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-[13px] font-medium text-ink">{t.name}</p>
              <p className="text-[11px] uppercase tracking-[0.05em] text-subtle mt-0.5">
                {t.cohort}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            Angel Squad portfolio companies
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          {portfolio.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className="flat-card rounded-lg px-4 py-3 flex items-start justify-between gap-3"
            >
              <div className="flex-1">
                <p className="text-[14px] font-medium text-ink">{p.name}</p>
                <p className="text-[12px] text-subtle leading-[1.4] mt-0.5">
                  {p.desc}
                </p>
              </div>
              <span className="text-[11px] font-medium bg-[#EAF3DE] text-[#27500A] px-2.5 py-[3px] rounded-full whitespace-nowrap flex-shrink-0">
                Angel Squad
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundersCTA() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-8 py-10 md:px-12 md:py-14 text-center"
          style={{ background: "#F5F4F0" }}
        >
          <h2 className="font-serif text-[1.75rem] md:text-[2rem] font-bold text-ink leading-tight mb-3">
            Ready to become a founder?
          </h2>
          <p className="text-[14px] md:text-[15px] text-muted leading-[1.65] max-w-[520px] mx-auto mb-6">
            Get lifetime access to 34 modules built by the investors and
            operators behind Angel Squad.
          </p>
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-near-black text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
          >
            Start learning for $99 →
          </a>
          <div className="mt-5 inline-flex items-center gap-2 text-[12px] text-subtle">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gold">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1.5 4L3.5 6L6.5 2.5"
                  stroke="#1a1a18"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            One-time payment · No subscription · Async at your own pace
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CorporateCallout() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-6 py-5 md:px-8 md:py-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 justify-between"
        >
          <div className="flex-1 min-w-0">
            <p className="font-serif text-[17px] font-bold text-ink mb-1">
              Looking to upskill your team or cohort?
            </p>
            <p className="text-[13px] text-muted leading-[1.6]">
              If you're a corporation, incubator, or accelerator looking to
              deliver AI-readiness and founder mindset training to your
              employees or community — we have a dedicated offering built for
              you.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-ink text-ink text-[13px] font-medium px-4 py-2.5 rounded-lg hover:bg-ink hover:text-cream transition-colors whitespace-nowrap"
          >
            Explore corporate track →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function Founders() {
  return (
    <main>
      <FoundersHero />
      <VisionBand />
      <AsSeenIn />
      <Speakers />
      <WhoThisIsFor />
      <Curriculum />
      <FoundersTestimonials />
      <Portfolio />
      <FoundersCTA />
      <CorporateCallout />
      <Footer />
      <StickyBottomBar
        message="Lifetime access · $99 one-time"
        ctaLabel="Enroll now →"
        ctaHref={ENROLL_URL}
        ctaExternal
      />
    </main>
  );
}
