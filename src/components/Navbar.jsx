export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-white text-sm font-bold uppercase tracking-[0.15em]">
          Emerging Founder School
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#program"
            className="text-white/70 text-[13px] font-medium tracking-wide hover:text-gold transition-colors"
          >
            Program
          </a>
          <a
            href="#how-it-works"
            className="text-white/70 text-[13px] font-medium tracking-wide hover:text-gold transition-colors"
          >
            How It Works
          </a>
          <a
            href="#backed-by"
            className="text-white/70 text-[13px] font-medium tracking-wide hover:text-gold transition-colors"
          >
            Partners
          </a>
        </div>

        <a
          href="#apply"
          className="bg-gold text-near-black text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:bg-gold/90 transition-colors"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
