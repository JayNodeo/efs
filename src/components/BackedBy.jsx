import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const portfolio = [
  {
    name: "Contra",
    logo: "/portfolio/contra.png",
    logoClass: "h-8",
    url: "https://contra.com/",
    desc: "Exclusive professional communities for independent work",
    badge: "Angel Squad",
  },
  {
    name: "Flex",
    logo: "/portfolio/flex.svg",
    logoClass: "h-6",
    url: "https://www.flex.one/",
    desc: "Fintech superapp for SMBs",
    badge: "Angel Squad",
  },
  {
    name: "Rupa Health",
    logo: "/portfolio/rupa-health.png",
    logoClass: "h-8",
    url: "https://www.rupahealth.com/",
    desc: "Personalized, data-driven, root-cause medicine",
    badge: "Angel Squad",
  },
];

export default function BackedBy() {
  return (
    <section id="backed-by" className="bg-cream px-4 py-8">
      <div className="max-w-[860px] mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flat-card rounded-xl px-8 py-10 md:px-10 md:py-12 grid md:grid-cols-2 gap-10 items-start"
          style={{ background: "#F5F4F0" }}
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-gold mb-2">
              Your instructors
            </p>
            <h2 className="font-serif text-[1.5rem] font-bold text-ink leading-tight mb-3">
              Built by the people building the world's most innovative companies
            </h2>
            <p className="text-[14px] text-muted leading-[1.65]">
              Angel Squad is a community of 2,000+ operators, founders, and
              investors shaping 500+ category-defining companies. The
              Emerging Founder School curriculum captures the frameworks they
              use to spot opportunity, validate ideas, and ship, now handed
              directly to your team.
            </p>
            <p className="mt-3 text-[11px] text-subtle leading-[1.5]">
              * Instructors are operators, founders, and investors affiliated
              with Angel Squad and Hustle Fund.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-subtle mb-3">
              Angel Squad portfolio companies
            </p>
            <div className="flex flex-col gap-2">
              {portfolio.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-[#dddbd3] rounded-lg px-3.5 py-2.5 flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${p.name}`}
                      className="inline-block hover:opacity-70 transition-opacity"
                    >
                      <img
                        src={p.logo}
                        alt={p.name}
                        className={`${p.logoClass} w-auto object-contain`}
                      />
                    </a>
                    <p className="text-[11px] text-subtle leading-[1.4] mt-1.5">{p.desc}</p>
                  </div>
                  <span className="text-[11px] font-medium bg-[#EAF3DE] text-[#27500A] px-2.5 py-[3px] rounded-full whitespace-nowrap flex-shrink-0">
                    {p.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
