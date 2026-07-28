import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cards = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M8 5V8L10 9.5" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "AI tool training is not enough",
    body: "Your teams may know how to prompt ChatGPT. Few know how to architect AI-native workflows inside a structured method for identifying problems, testing ideas, and shipping useful work.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M5 7h6M5 10h4" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Ideas get stuck before they ship",
    body: "Employees see problems and opportunities every day. Most never become tested, funded, or adopted because the organization lacks the skills for turning insight into action. EFS gives them the process, pressure, and feedback to move from insight to tested work.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M3 12L8 3L13 12H3Z" stroke="#BA7517" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 7V10" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Building requires cadence",
    body: "AI creates speed, but teams still need cadence: clear priorities, real deliverables, feedback, accountability, and a path from experiment to adoption.",
  },
];

export default function Problem() {
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
            The challenge
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="flat-card rounded-xl p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAEEDA] flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <p className="text-[14px] font-medium text-ink mb-1.5">
                {card.title}
              </p>
              <p className="text-[13px] text-muted leading-[1.55]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 flat-card rounded-xl px-6 py-5 text-center"
        >
          <p className="text-ink font-medium text-[15px] leading-relaxed italic">
            AI is changing how companies build, sell, and operate.{" "}
            <span className="font-serif italic text-brand-red">The teams that thrive will know how to turn ideas into tested work in weeks, not quarters.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
