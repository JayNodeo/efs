import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "AI tool training is not enough",
    body: "Your teams can prompt ChatGPT, but few can evaluate emerging capabilities, architect AI-native workflows, or decide where AI creates genuine leverage versus noise.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Innovation programs stay siloed",
    body: "Internal accelerators and design thinking workshops rarely connect to real capital allocation decisions. They reach a handpicked few and stay disconnected from core operations.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "The gap is not tools or ideas — it's both",
    body: "AI fluency without the builder mindset produces employees who can use powerful tools but cannot decide what to build with them. The missing piece is integration.",
  },
];

export default function Problem() {
  return (
    <section className="bg-cream py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="text-purple-mid text-xs uppercase tracking-[0.2em] font-semibold">
            The challenge
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-near-black">
            Your workforce knows AI exists.{" "}
            <span className="text-gold">That is not enough.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="flat-card-light rounded-lg p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-gold-light flex items-center justify-center text-gold mb-6">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-near-black mb-3">
                {card.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
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
          className="mt-16 flex items-center justify-center"
        >
          <div className="bg-navy rounded-lg px-8 py-6 max-w-2xl text-center">
            <p className="text-gold font-bold text-lg md:text-xl leading-relaxed">
              AI is compressing the gap between idea and execution. The
              employees who thrive will be the ones who think like builders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
