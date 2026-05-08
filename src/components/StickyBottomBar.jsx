import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function StickyBottomBar({
  message = "Equip your team with the builder mindset. Limited cohort spots.",
  ctaLabel = "Request a pilot →",
  ctaHref = "#apply",
  ctaExternal = false,
}) {
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
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-[#dddbd3]"
    >
      <div className="max-w-[860px] mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-[13px] text-muted hidden sm:block">{message}</p>
        <a
          href={ctaHref}
          {...(ctaExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="bg-brand-orange text-near-black text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-brand-orange/90 transition-colors ml-auto sm:ml-0"
        >
          {ctaLabel}
        </a>
      </div>
    </motion.div>
  );
}
