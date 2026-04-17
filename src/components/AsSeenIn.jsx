import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const logos = [
  { src: "/press/press-1.png", alt: "The New York Times" },
  { src: "/press/press-2.png", alt: "TechCrunch" },
];

export default function AsSeenIn() {
  return (
    <section className="bg-cream px-4 py-6">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-6 py-4 md:px-8 md:py-5 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-subtle whitespace-nowrap">
            As seen in
          </span>
          <div className="h-5 w-px bg-[#dddbd3]" />
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-5 md:h-6 w-auto object-contain opacity-80"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
