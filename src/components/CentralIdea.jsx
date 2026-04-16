import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CentralIdea() {
  return (
    <section className="bg-cream py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-purple-mid text-xs uppercase tracking-[0.2em] font-semibold">
            The shift
          </span>

          <h2 className="mt-8 font-serif text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-near-black">
            Every employee
            <br />
            <span className="text-gold">should think like a builder</span>
          </h2>
        </motion.div>

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 border-l-4 border-gold pl-8 md:pl-12 max-w-3xl mx-auto"
        >
          <p className="text-near-black/80 italic text-xl md:text-2xl lg:text-3xl leading-relaxed font-light">
            "AI is not killing jobs. It is killing the gap between having an
            idea and shipping it. The organizations that win will be the ones
            whose people know how to build — not just use tools."
          </p>
        </motion.blockquote>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-text text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Emerging Founder School is designed around one belief: that
            building is a skill anyone can learn — and that your organization
            already has the people who can do it. Every session, every sprint,
            every peer conversation is engineered to move your teams from
            identifying problems to shipping solutions with entrepreneurial
            urgency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
