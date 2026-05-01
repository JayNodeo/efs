import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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

function ArrowButton({ direction, onClick, disabled, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-[#dddbd3] bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-cream hover:border-ink disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-ink disabled:hover:border-[#dddbd3] transition-colors"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        {direction === "prev" ? (
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export default function Speakers() {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on which slide is most visible
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) {
          const idx = Number(best.target.getAttribute("data-index"));
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      { root, threshold: [0.5, 0.75, 1] }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((idx) => {
    const target = itemRefs.current[idx];
    if (target && scrollRef.current) {
      target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, []);

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(featured.length - 1, activeIndex + 1));

  // Autoplay: advance every 5s, wrap to 0 after the last slide.
  // Index is computed from scrollLeft so the tick is independent of observer
  // churn during smooth scroll.
  useEffect(() => {
    const id = setInterval(() => {
      const root = scrollRef.current;
      if (!root) return;
      const cardWidth = root.clientWidth || 1;
      const current = Math.round(root.scrollLeft / cardWidth);
      const next = (current + 1) % featured.length;
      scrollToIndex(next);
    }, 5000);
    return () => clearInterval(id);
  }, [scrollToIndex]);

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
          <span className="text-[12px] text-subtle whitespace-nowrap">
            {activeIndex + 1} / {featured.length}
          </span>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[14px] text-muted leading-[1.65] max-w-[580px] mb-5"
        >
          Curriculum built by active Angel Squad members: investors, founders,
          and operators sharing the real frameworks they use.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            ref={scrollRef}
            className="scroll-snap-x overflow-x-auto -mx-4 px-4 pb-2 hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-3">
              {featured.map((s, i) => (
                <div
                  key={s.name}
                  ref={(el) => (itemRefs.current[i] = el)}
                  data-index={i}
                  className="flat-card rounded-xl p-5 md:p-6 flex gap-4 md:gap-6 items-start min-w-full"
                  style={{ scrollSnapAlign: "start" }}
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
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {featured.map((s, i) => (
                <button
                  key={s.name}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to ${s.name}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-ink"
                      : "w-1.5 bg-[#dddbd3] hover:bg-subtle"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ArrowButton
                direction="prev"
                onClick={goPrev}
                disabled={activeIndex === 0}
                label="Previous speaker"
              />
              <ArrowButton
                direction="next"
                onClick={goNext}
                disabled={activeIndex === featured.length - 1}
                label="Next speaker"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
