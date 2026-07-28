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

const builderCurriculum = [
  {
    num: "01",
    title: "Orientation + Builder Identity",
    description:
      "Program overview, Hustle Fund and Angel Squad context, and the shift from employee mentality to builder mentality. Participants define the real problems they are close enough to understand and credible enough to work on.",
  },
  {
    num: "02",
    title: "The Builder Operating System",
    description:
      "Focus, discipline, and saying no. Participants identify their most important unanswered question, turn it into a sprint, and learn the cadence for moving from insight to useful work.",
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
];

const operatorCurriculum = [
  {
    num: "01",
    title: "AI As Operating System, Not Tool",
    description:
      "Operators learn the shift from asking AI for occasional help to redesigning recurring workflows so AI becomes the substrate for evidence, memory, routing, and follow-through.",
  },
  {
    num: "02",
    title: "Make The Company Queryable",
    description:
      "Every decision, commitment, owner, blocker, KPI, and proof artifact should live somewhere structured. If the company cannot be queried by an agent, it cannot become AI-native.",
  },
  {
    num: "03",
    title: "Operating Truth Graph",
    description:
      "Company truth is fragmented across docs, Slack, email, meetings, dashboards, and memory. Operators learn to design a governed state layer: what is true, where it came from, who approved it, and what it supersedes.",
  },
  {
    num: "04",
    title: "Closed Loops Everywhere",
    description:
      "Outputs should feed the next cycle. A meeting creates decisions and owner contracts. A support ticket updates product knowledge. A missed commitment updates the reason-not-done pattern. No ritual should end as a dead artifact.",
  },
  {
    num: "05",
    title: "No Human Middleware",
    description:
      "Operators learn to spot humans who are mainly routing, summarizing, chasing, copying, status-compiling, or translating between systems. That becomes the first automation map.",
  },
];

function SessionRow({ session, prefix }) {
  return (
    <motion.div variants={fadeUp} className="flat-card rounded-xl p-5 md:p-6">
      <div className="flex items-start gap-4">
        <span className="amber-tag shrink-0">{prefix} {session.num}</span>
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
              className="flex w-fit items-center gap-1.5 text-[12px] text-muted hover:text-ink transition-colors mb-6"
            >
              ← Back to home
            </Link>

            <div>
              <span className="eyebrow-pill">Curriculum · two tracks</span>
            </div>

            <h1 className="mt-5 font-serif text-3xl md:text-[2.6rem] lg:text-[3rem] font-black leading-[1.1] tracking-tight text-ink max-w-[620px]">
              The EFS{" "}
              <em className="font-serif italic font-black text-brand-red">method.</em>
            </h1>

            <p className="mt-4 text-[15px] leading-[1.65] text-muted max-w-[560px]">
              Two curricula. One transformation. Builders learn to turn
              insight into useful work. Operators learn to turn scattered
              company execution into an AI-readable operating system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Builder Curriculum */}
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
              Builder Curriculum
            </h2>
            <div className="section-rule" />
            <span className="text-[12px] text-subtle whitespace-nowrap">For ICs and domain experts</span>
          </motion.div>

          <p className="text-[14px] text-muted leading-[1.65] max-w-[620px] mb-5">
            The mindset and methods for finding real pain, validating demand,
            and turning insight into useful work.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {builderCurriculum.map((s) => (
              <SessionRow key={s.num} session={s} prefix="Builder" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operator Curriculum */}
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
              Operator Curriculum
            </h2>
            <div className="section-rule" />
            <span className="text-[12px] text-subtle whitespace-nowrap">For managers and team leads</span>
          </motion.div>

          <p className="text-[14px] text-muted leading-[1.65] max-w-[620px] mb-5">
            Operators learn how to turn scattered company execution into an
            AI-readable operating system, so humans spend less time chasing
            status and more time making judgment calls.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {operatorCurriculum.map((s) => (
              <SessionRow key={s.num} session={s} prefix="Operator" />
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
              Cohort spots are limited. Talk to us about equipping your team
              with the builder mindset, operating cadence, and AI-native skills
              to turn ideas into real business outcomes.
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
