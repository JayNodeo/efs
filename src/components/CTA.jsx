import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CTA() {
  return (
    <section id="apply" className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-[#dddbd3] px-6 py-12 md:px-10 md:py-14 text-center"
          style={{ background: "#F5F4F0" }}
        >
          <h2 className="font-serif text-[1.8rem] md:text-[2.2rem] font-bold leading-[1.15] text-ink max-w-[600px] mx-auto">
            Transform how your organization{" "}
            <em className="font-serif italic font-bold text-brand-red">builds.</em>
          </h2>

          <p className="mt-4 text-[15px] leading-[1.6] text-muted max-w-[460px] mx-auto">
            Cohort spots are limited. Talk to us about equipping your team
            with the builder mindset.
          </p>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-brand-orange text-near-black text-[15px] font-medium px-7 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Request a pilot →
            </a>
          </div>

          <div className="mt-6 inline-flex items-center justify-center gap-2 text-[12px] text-subtle">
            <span className="w-3.5 h-3.5 rounded-full bg-[#C0DD97] flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <path d="M1 4L3 6L7 2" stroke="#27500A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Powered by Hustle Fund and Angel Squad
          </div>
        </motion.div>
      </div>
    </section>
  );
}
