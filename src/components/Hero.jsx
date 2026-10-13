import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="corporate-hero bg-cream px-4 pt-8 pb-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flat-card rounded-xl px-8 py-10 md:px-12 md:py-14"
        >
          {/* Eyebrow */}
          <span className="eyebrow-pill">Emerging Founder School · Corporate Track</span>

          {/* Headline */}
          <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.05] tracking-tight text-ink max-w-[620px]">
            Equip your team for{" "}
            <em className="font-serif italic font-black text-brand-red">the age of AI.</em>
          </h1>

          {/* Small label */}
          <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.08em] text-subtle">
            Turn employees into builders
          </p>

          {/* Subhead */}
          <p className="mt-4 text-[16px] leading-[1.65] text-muted max-w-[520px]">
            An AI-native building program for teams. Builders learn to turn
            real business problems into tested solutions. Operators learn to
            turn scattered company execution into an AI-readable operating
            system.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-brand-orange text-near-black text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Request a pilot →
            </a>
            <a
              href="#program"
              className="inline-flex items-center gap-2 border border-ink text-ink text-[15px] font-medium px-6 py-3 rounded-lg hover:bg-ink hover:text-cream transition-colors"
            >
              Explore the program
            </a>
          </div>

          {/* Divider */}
          <hr className="my-8 border-0 border-t border-[#dddbd3]" />

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">2</p>
              <p className="mt-1 text-xs text-subtle">role-based tracks</p>
            </div>
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">2,000+</p>
              <p className="mt-1 text-xs text-subtle">Angel Squad investors</p>
            </div>
            <div>
              <p className="font-serif text-[1.6rem] font-bold text-ink leading-none">500+</p>
              <p className="mt-1 text-xs text-subtle">companies backed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
