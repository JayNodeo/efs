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

const partOne = {
  label: "Part One",
  subtitle: "The Spirit of the Builder",
  description: "Identity, operating discipline, problem clarity, and the fundamentals of bringing an idea to life.",
  sessions: [
    "Orientation + Builder Identity",
    "The Builder Operating System",
    "Problem Discovery & Builder-Market Fit",
    "Customer Discovery",
    "Marketing",
    "Sales as a Distinct Skill",
    "Building as Risk Management",
  ],
};

const partTwo = {
  label: "Part Two",
  subtitle: "The Builder's Case",
  description: "Packaging your idea, building your evidence, and pitching the people who control the resources.",
  sessions: [
    "Building Your Case",
    "Pitching Inside",
    "Navigating Power & Managing Your Sponsor",
    "The Hard Stuff",
    "Graduation",
  ],
};

function PartCard({ part, capstone }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-xl p-5 ${capstone ? "flat-card border-gold/60" : "flat-card"}`}
      style={capstone ? { border: "0.5px solid #BA7517" } : undefined}
    >
      <span className="amber-tag">{part.label}</span>
      <p className="mt-3 font-serif text-[16px] font-bold text-ink leading-snug">
        {part.subtitle}
      </p>
      <p className="mt-2 text-[12px] text-subtle leading-[1.5]">
        {part.description}
      </p>
      <ul className="arrow-list mt-4">
        {part.sessions.map((s) => (
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
            What's inside
          </h2>
          <div className="section-rule" />
          <span className="text-[12px] text-subtle whitespace-nowrap">12 sessions · two parts</span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          <PartCard part={partOne} />
          <PartCard part={partTwo} capstone />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flex flex-wrap items-center justify-between gap-3"
        >
          <p className="text-[13px] text-subtle max-w-md">
            Sessions blend async video lessons with live group workshops.
            Complete at your own pace with weekly deadlines.
          </p>
          <Link
            to="/curriculum"
            className="inline-flex items-center gap-2 bg-gold text-near-black text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-gold/90 transition-colors"
          >
            Explore the full curriculum →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
