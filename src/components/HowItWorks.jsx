import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const steps = [
  {
    num: "01",
    title: "Watch",
    body: "Your team completes the async video lesson for the week. Each session is under 30 minutes and packed with frameworks, not fluff.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 3l9 5-9 5V3z" stroke="#BA7517" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sprint",
    body: "Participants apply what they learned in a structured mini-sprint. Real deliverables tied to your business, not hypothetical exercises.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 9l5-6 1 4h4L8 13l-1-4H3z" stroke="#BA7517" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Apply",
    body: "Bring the work to the live workshop. Get feedback from peers and practitioners who have built and invested in real companies.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="5" cy="5" r="2" stroke="#BA7517" strokeWidth="1.5" />
        <circle cx="11" cy="5" r="2" stroke="#BA7517" strokeWidth="1.5" />
        <path d="M2 13c0-2 1.5-3 3-3s3 1 3 3M8 13c0-2 1.5-3 3-3s3 1 3 3" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Pitch",
    body: "At the end of each phase, participants pitch their progress. Build the muscle of articulating a business case under pressure.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 3v10h2M3 3h10M13 3v7M6 13h7l-2-3M8 6v3" stroke="#BA7517" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            How each session works
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              className="flat-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="amber-tag">Step {step.num}</span>
                <div className="w-8 h-8 rounded-lg bg-[#FAEEDA] flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <p className="text-[14px] font-medium text-ink mb-1.5">
                {step.title}
              </p>
              <p className="text-[13px] text-muted leading-[1.55]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
