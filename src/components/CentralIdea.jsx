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
            AI-native companies{" "}
            <em className="font-serif italic font-black text-brand-red">are built, not trained.</em>
          </h2>

          <blockquote className="mt-10 border-l-2 border-brand-yellow pl-6 max-w-[600px] mx-auto text-left">
            <p className="font-serif italic text-[18px] md:text-[20px] leading-[1.55] text-ink/80">
              "AI is changing how companies build, sell, and operate. The
              winners will not just use new tools. They will build new ways of
              working."
            </p>
          </blockquote>

          <p className="mt-10 text-[14px] text-muted leading-[1.65] max-w-[560px] mx-auto">
            Building is not limited to software. It means finding a real pain
            and creating a solution: a workflow, campaign, customer experience,
            sales motion, operating system, service, process, or new revenue
            line. EFS gives teams a structured way to do that with AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
