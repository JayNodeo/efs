import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const partOne = [
  {
    num: "01",
    title: "Orientation + Builder Identity",
    description:
      "Program overview, Hustle Fund and Angel Squad context, fellows introduce themselves and their ideas. Who are you as a builder, what have you lived that gives you the right to work on this problem, and how does the world currently see you versus how it needs to see you. The shift from employee mentality to builder mentality starts here.",
  },
  {
    num: "02",
    title: "The Builder Operating System",
    description:
      "Focus, discipline, and saying no. Identifying your most important unanswered question. Two-week sprints with public accountability declarations. This is framed as a character and discipline issue, not a productivity tools issue. The scaffolding every other session runs on.",
  },
  {
    num: "03",
    title: "Problem Discovery & Builder-Market Fit",
    speaker: "Eric Bahn",
    description:
      "Finding the right problem to solve, aligning the right builder to it, and thinking like an investor from day one. The missionary versus mercenary framework. Why intrinsic motivation is the only fuel that lasts long enough.",
  },
  {
    num: "04",
    title: "Customer Discovery",
    description:
      "How to conduct interviews, question design, separating discovery from demos, validating problem assumptions, and the bias audit: the ways builders unconsciously corrupt their own research.",
  },
  {
    num: "05",
    title: "Marketing",
    speaker: "Kara",
    description:
      "Acquiring your first 100 customers, newsletters, one-liners, lead magnets, and messaging clarity. The sixth-grade reading level test. Learning in public as a customer acquisition strategy.",
  },
  {
    num: "06",
    title: "Sales as a Distinct Skill",
    description:
      "Running a discovery call, handling a B2B sales cycle, building a pipeline with close probabilities and next actions. What happens after someone says \"this looks interesting.\" Marketing gets attention. Sales converts it.",
  },
  {
    num: "07",
    title: "Building as Risk Management",
    description:
      "The product trio reframed for a non-technical audience. The five product risks (value, usability, feasibility, viability, ethics). AI has democratized feasibility, making the other four more important than ever.",
  },
];

const partTwo = [
  {
    num: "08",
    title: "Building Your Case",
    description:
      "Mapping strategic priorities and identifying which business units feel the pain you want to solve. Quantifying that pain in terms your stakeholder cares about: time lost, revenue at risk, customer churn, competitive exposure. Assembling the internal data room.",
  },
  {
    num: "09",
    title: "Pitching Inside",
    description:
      "The three layers of an internal pitch: reputation, initiative branding, and the approvable structure. Fellows practice a 90-second pitch. Peer feedback focused on: was the ask specific, did the pain feel real, and would you approve this if it competed against your own priorities.",
  },
  {
    num: "10",
    title: "Navigating Power & Managing Your Sponsor",
    description:
      "Before the yes: identify the single person who can approve this and pitch directly. Timing your ask around budget cycles, quarterly planning, and organizational mood. After the yes: lightweight updates, early warnings, making your sponsor look good.",
  },
  {
    num: "11",
    title: "The Hard Stuff",
    description:
      "What happens when your initiative gets deprioritized, a reorg kills your momentum, or you realize the organization does not actually want to change. The kill conversation. Builder burnout and the loneliness of driving change from the middle.",
  },
  {
    num: "12",
    title: "Graduation",
    description:
      "Each fellow pitches to a panel that includes Angel Squad members and corporate leaders. Before the pitch, a public retrospective. Fellows leave with three warm introductions and a 90-day check-in commitment.",
  },
];

function SessionRow({ session }) {
  return (
    <motion.div variants={fadeUp} className="flat-card rounded-xl p-5 md:p-6">
      <div className="flex items-start gap-4">
        <span className="amber-tag shrink-0">Session {session.num}</span>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-medium text-ink leading-snug">
            {session.title}
          </p>
          {session.speaker && (
            <p className="mt-0.5 text-[12px] text-brand-orange font-medium">
              With {session.speaker}
            </p>
          )}
          <p className="mt-2 text-[13px] text-muted leading-[1.6]">
            {session.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Curriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-cream px-4 pt-8 pb-6">
        <div className="max-w-[860px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flat-card rounded-xl px-8 py-10 md:px-12 md:py-14"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[12px] text-muted hover:text-ink transition-colors mb-6"
            >
              ← Back to home
            </Link>

            <span className="eyebrow-pill">Curriculum · 12 sessions</span>

            <h1 className="mt-5 font-serif text-3xl md:text-[2.6rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight text-ink max-w-[620px]">
              From idea to{" "}
              <em className="font-serif italic font-black text-brand-red">inevitable.</em>
            </h1>

            <p className="mt-4 text-[15px] leading-[1.65] text-muted max-w-[560px]">
              Twelve sessions. Two parts. One transformation. Each session
              blends async video content, live workshops, and hands-on
              sprints, applied directly to your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Part One */}
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
              Part One · The Spirit of the Builder
            </h2>
            <div className="section-rule" />
            <span className="text-[12px] text-subtle whitespace-nowrap">Sessions 1–7</span>
          </motion.div>

          <p className="text-[14px] text-muted leading-[1.65] max-w-[620px] mb-5">
            Identity, operating discipline, problem clarity, customer
            understanding, and the fundamentals of bringing an idea to life.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {partOne.map((s) => (
              <SessionRow key={s.num} session={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Part Two */}
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
              Part Two · The Builder's Case
            </h2>
            <div className="section-rule" />
            <span className="text-[12px] text-subtle whitespace-nowrap">Sessions 8–12</span>
          </motion.div>

          <p className="text-[14px] text-muted leading-[1.65] max-w-[620px] mb-5">
            Packaging your idea, building your evidence, and pitching the
            people who control the resources you need.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {partTwo.map((s) => (
              <SessionRow key={s.num} session={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream px-4 py-8">
        <div className="max-w-[860px] mx-auto">
          <div className="rounded-xl border border-[#dddbd3] px-6 py-10 md:px-10 md:py-12 text-center" style={{ background: "#F5F4F0" }}>
            <h2 className="font-serif text-2xl md:text-[1.8rem] font-bold leading-[1.2] text-ink">
              Ready to equip your team?
            </h2>
            <p className="mt-3 text-[14px] text-muted max-w-[440px] mx-auto leading-[1.65]">
              Cohort spots are limited. Talk to us about bringing the builder
              mindset to your organization.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#apply"
                className="inline-flex items-center gap-2 bg-brand-orange text-near-black text-[14px] font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                Request a pilot →
              </a>
              <Link
                to="/"
                className="text-[13px] text-muted hover:text-ink transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
