import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: visible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <p className="text-white/70 text-sm hidden sm:block">
          Equip your team with the builder mindset. Limited cohort spots.
        </p>
        <a
          href="#apply"
          className="bg-gold text-near-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-gold/90 transition-colors ml-auto sm:ml-0"
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
}
