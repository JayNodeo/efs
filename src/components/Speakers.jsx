import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const featured = [
  {
    name: "Eric Bahn",
    photo: "/speakers/eric-bahn.jpg",
    title: "Co-Founder & General Partner",
    bio: "Eric is a Co-Founder and General Partner at Hustle Fund, an early-stage venture capital firm based in San Francisco. Hustle Fund invests in software startups at the pre-seed and seed stages, backing founders who exhibit great execution and high velocity.",
  },
  {
    name: "Heidi Luerra",
    photo: "/speakers/heidi-luerra.jpg",
    title: "Serial Business Builder · Exited Founder · Former CEO",
    bio: "For 20 years, Heidi has built, bootstrapped, scaled, and exited companies across B2B SaaS, IRL experiences, arts & entertainment, and D2C retail. She launched her first venture at 11, grew a global multi-million-dollar Inc. 5000 Fastest Growing Company, authored an Amazon Bestselling book, and has since worked with hundreds of founders to launch, streamline, or rescue their businesses. Known as the \u201cMarie Kondo of Small Business.\u201d",
  },
  {
    name: "Brian Nichols",
    photo: "/speakers/brian-nichols.jpg",
    title: "Founder, Angel Squad · Hustle Fund",
    bio: "Brian leads Angel Squad at Hustle Fund, a community of 2,000+ professionals learning how to angel invest, called the \u201cYC of Angel Investing\u201d by TechCrunch. He started at Lyft, co-founded its employee investing syndicate ($30M+ deployed across 300+ employees), and went on to help Airbnb, Square, Pinterest, and Stripe build similar alumni investing communities. He also writes Small Bets, a weekly newsletter on startups and angel investing.",
  },
  {
    name: "Katie Nowak",
    photo: "/speakers/katie-nowak.jpg",
    title: "Founder & CEO, Kanvas · Principal, Altra Venture Partners",
    bio: "Katie is the Founder & CEO of Kanvas, a strategy firm helping startups and Fortune 500s build continuous-innovation moats. She is also Principal and Director of Investor Relations at Altra Venture Partners, a secondaries-focused growth fund with stakes in Anduril, Anthropic, Canva, CoreWeave, and Webflow. Earlier she drove strategy at Better.com through hyper-growth and consulted at Deloitte and PwC; today she mentors founders through Techstars, the Venture Mentoring Team, and Plug and Play Korea.",
  },
  {
    name: "Nate Andorsky",
    photo: "/speakers/nate-andorsky.jpg",
    title: "Founder & CEO, ForesightIQ · Author, Decoding the Why",
    bio: "Nate is a serial entrepreneur and the founder of ForesightIQ, a competitive intelligence platform that surfaces the hidden signals (hiring trends, API changes, product doc updates) competitors leave behind, helping strategy and corp dev teams anticipate moves months before they hit the news. He previously bootstrapped a company onto the Inc. 5000 list and has advised startups across SaaS, fintech, and consumer tech. He invests in underrepresented founders through W Fund and Hustle Fund\u2019s Angel Squad, and authored Decoding the Why, an Amazon best-seller on behavioral science in product design and growth.",
  },
];

export default function Speakers() {
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
            Featured speakers
          </h2>
          <div className="section-rule" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[14px] text-muted leading-[1.65] max-w-[580px] mb-5"
        >
          Curriculum built by active Angel Squad members: investors, founders,
          and operators sharing the real frameworks they use. Backed by friends
          of Angel Squad, who host SPVs for 3–5 deals a month.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {featured.map((s) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              className="flat-card rounded-xl p-5 md:p-6 flex gap-4 md:gap-6 items-start"
            >
              <img
                src={s.photo}
                alt={s.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-[15px] font-medium text-ink mb-0.5">
                  {s.name}
                </p>
                <p className="text-[11px] font-medium uppercase tracking-[0.05em] text-gold mb-2">
                  {s.title}
                </p>
                <p className="text-[13px] text-muted leading-[1.65]">
                  {s.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
