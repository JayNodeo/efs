import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section className="bg-navy py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column — copy */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tight">
            <span className="text-white">Equip Your Team</span>
            <br />
            <span className="text-gold">to Build.</span>
          </h1>

          <p className="mt-8 text-white/70 text-lg max-w-md leading-relaxed">
            A 12-session program that transforms your employees into
            confident builders — with the venture-tested frameworks, AI
            fluency, and network to drive real value inside your
            organization.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#apply"
              className="bg-gold text-near-black font-bold px-10 py-4 rounded-sm text-sm uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#program"
              className="text-white/60 text-sm font-medium hover:text-gold transition-colors flex items-center gap-2"
            >
              Learn More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Right column — photo grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-3"
        >
          {["portrait", "portrait", "portrait", "portrait"].map((_, i) => (
            <motion.div key={i} variants={fadeUp}>
              <ImagePlaceholder
                alt={`Builder ${i + 1}`}
                icon="person"
                aspect="portrait"
                className="w-full rounded-sm"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-12"
      >
        {[
          { value: "12", label: "Sessions" },
          { value: "500+", label: "Builders empowered" },
          { value: "100%", label: "Hands-on" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-3xl font-bold text-gold">{stat.value}</p>
            <p className="text-white/40 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
