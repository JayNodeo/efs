import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Audience from "../components/Audience";
import CentralIdea from "../components/CentralIdea";
import Program from "../components/Program";
import HowItWorks from "../components/HowItWorks";
import TheShift from "../components/TheShift";
import BackedBy from "../components/BackedBy";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import StickyBottomBar from "../components/StickyBottomBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Audience />
      <CentralIdea />
      <Program />
      <HowItWorks />
      <TheShift />
      <Testimonials />
      <BackedBy />
      <CTA />
      <Footer />
      <StickyBottomBar />
    </main>
  );
}
