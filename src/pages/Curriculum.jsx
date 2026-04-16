import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const partOne = [
  {
    num: "01",
    title: "Orientation + Builder Identity",
    description:
      "Program overview, Hustle Fund and Angel Squad context, fellows introduce themselves and their ideas. Who are you as a builder, what have you lived that gives you the right to work on this problem, and how does the world currently see you versus how it needs to see you. The shift from employee mentality to builder mentality starts here.",
  },
  {
    num: "02",
    title: "The Builder Operating System",
    description:
      "Focus, discipline, and saying no. Identifying your most important unanswered question. Two-week sprints with public accountability declarations. This is framed as a character and discipline issue, not a productivity tools issue. The scaffolding every other session runs on.",
  },
  {
    num: "03",
    title: "Problem Discovery and Builder-Market Fit",
    speaker: "Eric Bahn",
    description:
      "Finding the right problem to solve, aligning the right builder to it, and thinking like an investor from day one. The missionary versus mercenary framework. Why intrinsic motivation is the only fuel that lasts long enough.",
  },
  {
    num: "04",
    title: "Customer Discovery",
    description:
      "How to conduct interviews, question design, separating discovery from demos, validating problem assumptions, and the bias audit: the ways builders unconsciously corrupt their own research. Async pre-work drawn from say data versus do data and the five-step discovery process.",
  },
  {
    num: "05",
    title: "Marketing",
    speaker: "Kara",
    description:
      "Acquiring your first 100 customers, newsletters, one-liners, lead magnets, and messaging clarity. The sixth-grade reading level test. Learning in public as a customer acquisition strategy. Whether your \"customer\" is an end user or an internal stakeholder, the principles of clear messaging are identical.",
  },
  {
    num: "06",
    title: "Sales as a Distinct Skill",
    description:
      "Running a discovery call, handling a B2B sales cycle, building a pipeline with close probabilities and next actions. What happens after someone says \"this looks interesting.\" Marketing gets attention. Sales converts it.",
  },
  {
    num: "07",
    title: "Building as Risk Management",
    description:
      "The product trio reframed for a non-technical audience. The five product risks (value, usability, feasibility, viability, ethics) as the actual job of a builder. AI has democratized feasibility, making the other four more important than ever. Anyone can build now. So what does it actually mean to be a builder? This is the conceptual capstone of Part One and the bridge into Part Two.",
  },
];

const partTwo = [
  {
    num: "08",
    title: "Building Your Case",
    description:
      "Everything you need before you open your mouth. Mapping strategic priorities and identifying which business units feel the pain you want to solve. Quantifying that pain in terms your stakeholder cares about: time lost, revenue at risk, customer churn, competitive exposure. Assembling the internal data room: cost-benefit analysis, a timeline with milestones, a clear definition of done, and kill criteria that show you will walk away if the data says to.",
  },
  {
    num: "09",
    title: "Pitching Inside",
    description:
      "The three layers of an internal pitch. Layer one: your reputation already exists inside the organization whether you have shaped it or not. Layer two: branding your initiative so it has a name, a frame, and an identity that survives meetings you are not in. Layer three: making your case approvable with a structure that moves from organizational pain to proposed solution to a specific, bounded ask. Fellows practice a 90-second pitch.",
  },
  {
    num: "10",
    title: "Navigating Power and Managing Your Sponsor",
    description:
      "Before the yes: identify the single person who can approve this and pitch directly, because pitching below that person risks your idea getting filtered or quietly killed. Timing your ask around budget cycles, quarterly planning, and organizational mood. After the yes: your sponsor approved your use of shared resources and their reputation is now attached to the outcome. Lightweight updates, early warnings, making your sponsor look good.",
  },
  {
    num: "11",
    title: "The Hard Stuff",
    description:
      "What happens when your initiative gets deprioritized, a reorg kills your momentum, or you realize the organization does not actually want to change. The kill conversation: how to tell your sponsor the pilot did not work and what you learned, because doing this well earns you the next pitch and doing it poorly makes people stop saying yes. Builder burnout and the loneliness of driving change from the middle. How to know when it is time to leave.",
  },
  {
    num: "12",
    title: "Graduation",
    description:
      "Each fellow pitches to a panel that includes Angel Squad members and corporate leaders. Before the pitch, a public retrospective: what assumption turned out to be wrong, what was the hardest unexpected thing, and what do you know now that you did not know when you started. Fellows leave with three warm introductions and a 90-day check-in commitment.",
  },
];

function SessionCard({ session, light }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-lg p-8 md:p-10 ${light ? "flat-card-light" : "flat-card-dark"}`}
    >
      <div className="flex items-start gap-6">
        <span className="font-serif text-4xl font-bold text-gold leading-none shrink-0">
          {session.num}
        </span>
        <div className="flex-1">
          <h3 className={`text-xl md:text-2xl font-bold ${light ? "text-near-black" : "text-white"}`}>
            {session.title}
          </h3>
          {session.speaker && (
            <p className="mt-1 text-gold text-sm font-semibold">{session.speaker}</p>
          )}
          <p className={`mt-4 text-sm md:text-base leading-relaxed ${light ? "text-gray-text" : "text-white/50"}`}>
            {session.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Curriculum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-navy pt-20 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-gold transition-colors mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>

            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
              Curriculum
            </span>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight text-white">
              From Idea to{" "}
              <span className="text-gold">Inevitable</span>
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              A 12-session curriculum for builders. Venture-tested frameworks
              applied to your organization. Each session blends async video
              content, live workshops, and hands-on sprints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Part One */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-purple-mid text-xs uppercase tracking-[0.2em] font-semibold">
              Sessions 1-7
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight text-near-black">
              Part One: The Spirit{" "}
              <span className="text-gold">of the Builder</span>
            </h2>
            <p className="mt-4 text-gray-text text-base md:text-lg max-w-2xl leading-relaxed">
              Identity, operating discipline, problem clarity, customer
              understanding, and the fundamentals of bringing an idea to life.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {partOne.map((session) => (
              <SessionCard key={session.num} session={session} light />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Part Two */}
      <section className="bg-navy py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">
              Sessions 8-12
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] tracking-tight text-white">
              Part Two: The Builder's{" "}
              <span className="text-gold">Case</span>
            </h2>
            <p className="mt-4 text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
              Packaging your idea, building your evidence, and pitching the
              people who control the resources you need.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {partTwo.map((session) => (
              <SessionCard key={session.num} session={session} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight text-near-black">
              Ready to equip your team?
            </h2>
            <p className="mt-6 text-gray-text text-lg">
              Cohort spots are limited. Talk to us about bringing the builder
              mindset to your organization.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#apply"
                className="inline-flex items-center gap-2 bg-gold text-near-black font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-gold/90 transition-colors"
              >
                Request a Pilot
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                to="/"
                className="text-near-black/60 text-sm font-medium hover:text-gold transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
