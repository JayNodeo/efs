import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CTA() {
  return (
    <section id="apply" className="bg-navy py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-white">
            Transform how your organization{" "}
            <span className="text-gold">builds</span>
          </h2>

          <p className="mt-8 text-white/60 text-lg md:text-xl">
            Cohort spots are limited. Talk to us about equipping your team
            with the builder mindset.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-gold text-near-black font-bold text-base md:text-lg px-14 py-5 rounded-sm hover:bg-gold/90 transition-colors uppercase tracking-wider"
          >
            Request a Pilot
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-white/40 text-sm"
        >
          Powered by Hustle Fund and Angel Squad
        </motion.p>
      </div>
    </section>
  );
}
