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
    body: "Your teams can prompt ChatGPT, but few can evaluate emerging capabilities, architect AI-native workflows, or decide where AI creates genuine leverage versus noise.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M5 7h6M5 10h4" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Innovation programs stay siloed",
    body: "Internal accelerators and design thinking workshops rarely connect to real capital allocation decisions. They reach a handpicked few and stay disconnected from core operations.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M3 12L8 3L13 12H3Z" stroke="#BA7517" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 7V10" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "The gap is not tools or ideas — it's both",
    body: "AI fluency without the builder mindset produces employees who can use powerful tools but cannot decide what to build with them. The missing piece is integration.",
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
            AI is compressing the gap between idea and execution.{" "}
            <span className="font-serif italic text-gold">The employees who thrive will think like builders.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
