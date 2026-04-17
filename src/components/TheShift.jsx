import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
            The mental model
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl p-6 md:p-8"
        >
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 mb-4 pb-3 border-b border-[#dddbd3]">
            <p className="text-right text-[11px] uppercase tracking-wider text-subtle font-medium">
              Employee mentality
            </p>
            <div className="w-6" />
            <p className="text-[11px] uppercase tracking-wider text-gold font-medium">
              Builder mentality
            </p>
          </div>

          {shifts.map((shift, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center py-3 ${
                i < shifts.length - 1 ? "border-b border-[#dddbd3]" : ""
              }`}
            >
              <p className="text-right text-[14px] text-subtle">{shift.employee}</p>
              <span className="text-gold text-sm">→</span>
              <p className="text-[14px] font-medium text-ink">{shift.builder}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-5 text-center max-w-2xl mx-auto"
        >
          <p className="text-[15px] text-ink leading-relaxed">
            EFS doesn't just teach your people what to build.{" "}
            <span className="font-serif italic text-gold">It rewires how they think.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
