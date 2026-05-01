import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Speakers from "../components/Speakers";
import Problem from "../components/Problem";
// import Audience from "../components/Audience"; // hidden for now (Who this is for)
import CentralIdea from "../components/CentralIdea";
import Program from "../components/Program";
import HowItWorks from "../components/HowItWorks";
// import TheShift from "../components/TheShift"; // hidden for now
import BackedBy from "../components/BackedBy";
// import Testimonials from "../components/Testimonials"; // hidden for now
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import StickyBottomBar from "../components/StickyBottomBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Speakers />
      <Problem />
      {/* <Audience /> hidden for now (Who this is for) */}
      <CentralIdea />
      <Program />
      <HowItWorks />
      {/* <TheShift /> hidden for now */}
      {/* <Testimonials /> hidden for now */}
      <BackedBy />
      <CTA />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
