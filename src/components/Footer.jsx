export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-white/10 py-14 px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-white text-sm font-bold uppercase tracking-[0.15em]">
              Emerging Founder School
            </p>
            <p className="text-white/30 text-xs mt-2 max-w-xs">
              From idea to inevitable -- in 12 sessions.
            </p>
          </div>

          {/* Center: Nav */}
          <div className="flex items-center gap-8">
            {[
              { label: "About", href: "#" },
              { label: "Curriculum", href: "#program" },
              { label: "Get Started", href: "#apply" },
              { label: "FAQ", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/40 text-sm uppercase tracking-wider hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Credit */}
          <p className="text-white/30 text-xs md:text-right">
            A Hustle Fund and Angel Squad initiative
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Emerging Founder School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
