import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const personas = [
  {
    title: "Companies facing AI-driven disruption",
    body: "Your industry is being reshaped by AI and you know that tool adoption is not enough. You need your people to spot problems worth solving, validate assumptions before committing resources, and ship solutions — not just follow instructions better.",
    imageAlt: "Enterprise team photo",
    stats: [
      { label: "Company size", value: "500+" },
      { label: "Industries", value: "Services / Finance / Media / Health" },
    ],
  },
  {
    title: "Leaders who see training as investment",
    body: "You are a CEO, CFO, or executive who understands that workforce transformation is competitive positioning, not a discretionary training expense. You want a program that produces a measurable behavioral shift across your organization, not another workshop that gets forgotten.",
    imageAlt: "Executive leadership photo",
    stats: [
      { label: "Buyer", value: "C-Suite" },
      { label: "Outcome", value: "Org-wide shift" },
    ],
  },
];

export default function Audience() {
  return (
    <section className="bg-navy py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
            Who it's for
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
            Built for forward-thinking organizations
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flat-card-dark rounded-lg overflow-hidden"
            >
              <ImagePlaceholder
                alt={persona.imageAlt}
                icon="person"
                aspect="wide"
                className="w-full rounded-none border-0"
              />

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white">
                  {persona.title}
                </h3>

                <p className="mt-4 text-white/50 text-sm leading-relaxed">
                  {persona.body}
                </p>

                <div className="mt-8 flex gap-8">
                  {persona.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-white/30 text-xs uppercase tracking-wider">{stat.label}</p>
                      <p className="font-serif text-2xl font-bold text-gold mt-1">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto">
            The skills are universal. The context is your business. The outcome
            is an organization that builds, not just operates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
