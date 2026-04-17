import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const personas = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="2" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M5 7h6M5 10h4" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Companies facing AI disruption",
    body: "Your industry is being reshaped and you know tool adoption is not enough. You need your people to spot problems, validate assumptions, and ship solutions.",
    meta: "Services · Finance · Media · Health",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="3" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Leaders who see training as investment",
    body: "A CEO, CFO, or executive who understands workforce transformation is competitive positioning, not a discretionary expense. You want measurable behavioral shift.",
    meta: "C-Suite buyer · Org-wide outcome",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L9.5 6.5H14L10.5 9L12 13.5L8 11L4 13.5L5.5 9L2 6.5H6.5L8 2Z" stroke="#BA7517" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: "Innovation champions inside the org",
    body: "Chief People Officers, VPs of Innovation, or Heads of L&D who surface the need — builders and advocates pushing beyond tool-focused training.",
    meta: "Internal champions",
  },
];

export default function Audience() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flat-card rounded-xl p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAEEDA] flex items-center justify-center mb-3">
                {p.icon}
              </div>
              <p className="text-[14px] font-medium text-ink mb-1.5">{p.title}</p>
              <p className="text-[13px] text-muted leading-[1.55]">{p.body}</p>
              <p className="mt-3 text-[11px] text-subtle uppercase tracking-wider">{p.meta}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
