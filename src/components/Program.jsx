import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const sessionReveal = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const partOneSessions = [
  { num: "01", name: "Orientation + Builder Identity" },
  { num: "02", name: "The Builder Operating System" },
  { num: "03", name: "Problem Discovery and Builder-Market Fit" },
  { num: "04", name: "Customer Discovery" },
  { num: "05", name: "Marketing" },
  { num: "06", name: "Sales as a Distinct Skill" },
  { num: "07", name: "Building as Risk Management" },
];

const partTwoSessions = [
  { num: "08", name: "Building Your Case" },
  { num: "09", name: "Pitching Inside" },
  { num: "10", name: "Navigating Power and Managing Your Sponsor" },
  { num: "11", name: "The Hard Stuff" },
  { num: "12", name: "Graduation" },
];

function SessionRow({ session }) {
  return (
    <motion.div
      variants={sessionReveal}
      className="flex items-center gap-4 py-3.5 px-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
    >
      <span className="text-xs font-mono font-bold w-6 text-white/30">
        {session.num}
      </span>

      <div className="w-px h-5 bg-white/10" />

      <span className="text-sm font-medium flex-1 text-white/80">
        {session.name}
      </span>
    </motion.div>
  );
}

export default function Program() {
  const [activePart, setActivePart] = useState(0);

  return (
    <section id="program" className="bg-navy py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
            The program
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
            12 sessions. Two parts.{" "}
            <span className="text-gold">One transformation.</span>
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto text-base">
            Each session blends async video content, live workshops, and
            hands-on sprints to move your team from concept to conviction.
          </p>
        </motion.div>

        {/* Tab switcher for mobile */}
        <div className="mt-12 flex md:hidden justify-center gap-2">
          {["Part One", "Part Two"].map((label, idx) => (
            <button
              key={label}
              onClick={() => setActivePart(idx)}
              className={`px-6 py-2.5 rounded-sm text-sm font-semibold transition-all duration-300 ${
                activePart === idx
                  ? "bg-gold text-near-black"
                  : "bg-white/10 text-white/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 md:mt-14 grid md:grid-cols-2 gap-6">
          {/* Part One */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flat-card-dark rounded-lg border-l-4 border-l-gold overflow-hidden ${activePart === 0 ? "block" : "hidden md:block"}`}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  Part One
                </span>
                <span className="text-white/20 text-xs font-mono">Sessions 1-7</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Spirit of the Builder
              </h3>
              <p className="mt-2 text-white/30 text-sm">
                Identity, operating discipline, problem clarity, customer
                understanding, and the fundamentals of bringing an idea to life.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 space-y-1"
              >
                {partOneSessions.map((s) => (
                  <SessionRow key={s.num} session={s} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Part Two */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`flat-card-dark rounded-lg border-l-4 border-l-purple-mid overflow-hidden ${activePart === 1 ? "block" : "hidden md:block"}`}
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  Part Two
                </span>
                <span className="text-white/20 text-xs font-mono">Sessions 8-12</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Builder's Case
              </h3>
              <p className="mt-2 text-white/30 text-sm">
                Packaging your idea, building your evidence, and pitching the
                people who control the resources you need.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 space-y-1"
              >
                {partTwoSessions.map((s) => (
                  <SessionRow key={s.num} session={s} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-white/30 text-sm">
            Sessions are delivered as a mix of async video lessons and live
            group workshops. Complete them at your own pace with weekly
            deadlines.
          </p>
          <Link
            to="/curriculum"
            className="mt-6 inline-flex items-center gap-2 bg-gold text-near-black font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-gold/90 transition-colors"
          >
            Explore the Full Curriculum
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
