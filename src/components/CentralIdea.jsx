import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CentralIdea() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-8 py-12 md:px-12 md:py-16 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-brand-orange mb-4">
            The shift
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[3rem] font-black leading-[1.1] tracking-tight text-ink max-w-[620px] mx-auto">
            Every employee{" "}
            <em className="font-serif italic font-black text-brand-red">should think like a builder.</em>
          </h2>

          <blockquote className="mt-10 border-l-2 border-brand-yellow pl-6 max-w-[600px] mx-auto text-left">
            <p className="font-serif italic text-[18px] md:text-[20px] leading-[1.55] text-ink/80">
              "AI is not killing jobs. It is killing the gap between having an
              idea and shipping it. The organizations that win will be the ones
              whose people know how to build, not just use tools."
            </p>
          </blockquote>

          <p className="mt-10 text-[14px] text-muted leading-[1.65] max-w-[560px] mx-auto">
            Emerging Founder School is designed around one belief: building is a
            skill anyone can learn, and your organization already has the
            people who can do it. Every session, every sprint, every peer
            conversation is engineered to move your teams from identifying
            problems to shipping solutions with entrepreneurial urgency.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
