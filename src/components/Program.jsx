import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const builderCurriculum = {
  label: "Builder Curriculum",
  subtitle: "For ICs and domain experts",
  description: "The mindset and methods for finding real pain, validating demand, and turning insight into useful work.",
  sessions: [
    "Orientation + Builder Identity",
    "The Builder Operating System",
    "Problem Discovery & Builder-Market Fit",
    "Customer Discovery",
    "Marketing",
  ],
};

const operatorCurriculum = {
  label: "Operator Curriculum",
  subtitle: "For managers and team leads",
  description: "How to turn scattered company execution into an AI-readable operating system, so humans spend less time chasing status and more time making judgment calls.",
  sessions: [
    "AI As Operating System, Not Tool",
    "Make The Company Queryable",
    "Operating Truth Graph",
    "Closed Loops Everywhere",
    "No Human Middleware",
  ],
};

function CurriculumCard({ curriculum, capstone }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-xl p-5 ${capstone ? "flat-card border-brand-yellow/60" : "flat-card"}`}
      style={capstone ? { border: "0.5px solid var(--color-brand-orange)" } : undefined}
    >
      <span className="amber-tag">{curriculum.label}</span>
      <p className="mt-3 font-serif text-[16px] font-bold text-ink leading-snug">
        {curriculum.subtitle}
      </p>
      <p className="mt-2 text-[12px] text-subtle leading-[1.5]">
        {curriculum.description}
      </p>
      <ul className="arrow-list mt-4">
        {curriculum.sessions.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Program() {
  return (
    <section id="program" className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            The EFS method
          </h2>
          <div className="section-rule" />
          <span className="text-[12px] text-subtle whitespace-nowrap">builder track · operator track</span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          <CurriculumCard curriculum={builderCurriculum} />
          <CurriculumCard curriculum={operatorCurriculum} capstone />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-between gap-3"
        >
          <p className="text-[13px] text-subtle max-w-md">
            Not another AI tools workshop. EFS combines founder frameworks,
            hands-on sprints, AI workflows, live feedback, and real
            deliverables tied to your business.
          </p>
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-2 bg-brand-orange text-near-black text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Explore the full program →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
