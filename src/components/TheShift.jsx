import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const rowReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const shifts = [
  { employee: "Waits for the job description", builder: "Writes the job description" },
  { employee: "Optimizes for stability", builder: "Optimizes for learning speed" },
  { employee: "Asks 'what should I do?'", builder: "Asks 'what needs to exist?'" },
  { employee: "Measures progress by title", builder: "Measures progress by impact" },
  { employee: "Avoids ambiguity", builder: "Thrives in ambiguity" },
];

export default function TheShift() {
  return (
    <section className="bg-navy py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
            Mindset
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
            The mental model that{" "}
            <span className="text-gold">changes everything</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-6">
            <div className="text-right">
              <span className="text-white/30 text-xs uppercase tracking-[0.15em] font-semibold">
                Employee mentality
              </span>
            </div>
            <div className="w-12" />
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.15em] font-semibold">
                Builder mentality
              </span>
            </div>
          </div>

          {/* Shift rows */}
          {shifts.map((shift, i) => (
            <motion.div
              key={i}
              variants={rowReveal}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center group"
            >
              {/* Employee side */}
              <div className="text-right py-4 pr-4">
                <span className="text-white/30 text-sm md:text-base">
                  {shift.employee}
                </span>
              </div>

              {/* Center arrow */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                {i < shifts.length - 1 && (
                  <div className="w-px h-4 bg-white/10" />
                )}
              </div>

              {/* Builder side */}
              <div className="py-4 pl-4">
                <span className="text-white font-semibold text-sm md:text-base group-hover:text-gold transition-colors duration-300">
                  {shift.builder}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/10 pt-10"
        >
          <p className="text-white font-bold text-lg md:text-xl">
            Emerging Founder School doesn't just teach your people what to build.
            <br />
            <span className="text-gold">It rewires how they think.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
