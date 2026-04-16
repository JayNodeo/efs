import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const testimonials = [
  {
    quote:
      "Before EFS, our team had ideas but no process to move them forward. By the end of the program, three internal initiatives had executive sponsors and real budgets. The structure changed everything.",
    name: "Sarah K.",
    role: "VP of Innovation, Financial Services",
    avatar: null,
    accent: "gold",
  },
  {
    quote:
      "I came in thinking we needed to hire outside talent to innovate. I left knowing we just needed to give our people a clear framework and the discipline to talk to customers. This program gave us both.",
    name: "Marcus J.",
    role: "Chief People Officer, Media Company",
    avatar: null,
    accent: "purple-mid",
  },
  {
    quote:
      "The pitch sessions were terrifying and transformative. Being forced to articulate a business case every two weeks builds a muscle you cannot get from reading books or attending conferences.",
    name: "Priya R.",
    role: "Product Lead, Healthcare Administration",
    avatar: null,
    accent: "gold",
  },
  {
    quote:
      "What sets this apart from other corporate programs is the network. Our cohort connected us with investors, operators, and builders from completely different industries — perspectives we could never get internally.",
    name: "David L.",
    role: "Director of Strategy, Professional Services",
    avatar: null,
    accent: "purple-mid",
  },
];

function AvatarPlaceholder({ name, avatar, accent }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const colorMap = {
    gold: "bg-gold-light text-gold",
    "purple-mid": "bg-purple-light text-purple-mid",
  };

  if (avatar) {
    return (
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className={`w-12 h-12 rounded-full ${colorMap[accent]} flex items-center justify-center`}
    >
      <span className="text-sm font-bold">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-purple-mid text-xs uppercase tracking-[0.2em] font-semibold">
            Testimonials
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight text-near-black">
            Hear from teams{" "}
            <span className="text-gold">who made the shift</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className={i === 0 ? "md:row-span-2" : ""}
            >
              <div className={`flat-card-light rounded-lg p-8 md:p-10 h-full flex flex-col ${i === 0 ? "justify-between" : ""}`}>
                {/* Quote icon */}
                <div className="mb-6">
                  <svg className="w-8 h-8 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className={`text-near-black/80 leading-relaxed mb-8 flex-1 ${i === 0 ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>
                  "{t.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <AvatarPlaceholder
                    name={t.name}
                    avatar={t.avatar}
                    accent={t.accent}
                  />
                  <div>
                    <p className="text-near-black font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-text text-xs mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
