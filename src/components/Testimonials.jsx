import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const testimonials = [
  {
    quote:
      "Before EFS, our team had ideas but no process to move them forward. By the end of the program, three internal initiatives had executive sponsors and real budgets. The structure changed everything.",
    name: "Sarah K.",
    role: "VP of Innovation, Financial Services",
    avatar: null,
  },
  {
    quote:
      "I came in thinking we needed to hire outside talent to innovate. I left knowing we just needed to give our people a clear framework and the discipline to talk to customers. This program gave us both.",
    name: "Marcus J.",
    role: "Chief People Officer, Media Company",
    avatar: null,
  },
  {
    quote:
      "The pitch sessions were terrifying and transformative. Being forced to articulate a business case every two weeks builds a muscle you cannot get from reading books or attending conferences.",
    name: "Priya R.",
    role: "Product Lead, Healthcare Administration",
    avatar: null,
  },
  {
    quote:
      "What sets this apart is the network. Our cohort connected us with investors, operators, and builders from completely different industries — perspectives we could never get internally.",
    name: "David L.",
    role: "Director of Strategy, Professional Services",
    avatar: null,
  },
];

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="w-9 h-9 rounded-full bg-[#FAEEDA] text-[#633806] flex items-center justify-center">
      <span className="text-[11px] font-semibold">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-baseline gap-3 mb-4"
        >
          <h2 className="font-serif text-[1.4rem] font-bold text-ink whitespace-nowrap">
            Hear from teams who shifted
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flat-card rounded-xl p-6"
            >
              <svg className="w-6 h-6 mb-4" fill="#F2A83B" fillOpacity="0.5" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <blockquote className="text-[14px] leading-[1.65] text-ink/80">
                "{t.quote}"
              </blockquote>

              <div className="mt-5 pt-4 border-t border-[#dddbd3] flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="text-[13px] font-medium text-ink">{t.name}</p>
                  <p className="text-[11px] text-subtle mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
