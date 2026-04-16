import { motion } from "framer-motion";
import ImagePlaceholder from "./ImagePlaceholder";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const partners = [
  { name: "Hustle Fund", logo: null, stat: "500+", label: "Companies backed" },
  { name: "Angel Squad", logo: null, stat: "2,000+", label: "Investors & operators" },
];

export default function BackedBy() {
  return (
    <section id="backed-by" className="bg-navy py-24 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
            Backed by
          </span>

          <h2 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
            Built by the people who{" "}
            <span className="text-gold">back real builders</span>
          </h2>

          <p className="mt-6 text-white/40 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Emerging Founder School is backed by Hustle Fund and Angel Squad
            — a network of 2,000+ investors, operators, and builders who have
            invested in and supported over 500 companies worldwide. This
            curriculum was not designed in an L&D department. It was built by
            people who put real capital behind real companies.
          </p>
        </motion.div>

        {/* Partner strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {partners.map((partner) => (
            <div key={partner.name} className="text-center">
              <div className="w-40 mx-auto mb-4">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-[140px] object-contain mx-auto"
                  />
                ) : (
                  <ImagePlaceholder
                    alt={`${partner.name} logo`}
                    icon="logo"
                    aspect="video"
                    className="w-full !aspect-[3/1] !rounded-lg"
                  />
                )}
              </div>
              <h3 className="text-white font-bold text-lg">{partner.name}</h3>
              <div className="mt-2">
                <span className="font-serif text-2xl font-bold text-gold">{partner.stat}</span>
                <p className="text-white/30 text-xs mt-1">{partner.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
