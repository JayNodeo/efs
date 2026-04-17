export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-[#dddbd3]">
      <div className="max-w-[860px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-ink text-sm font-bold uppercase tracking-[0.15em]">
          Emerging Founder School
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a
            href="#program"
            className="text-muted text-[13px] font-medium tracking-wide hover:text-ink transition-colors"
          >
            Program
          </a>
          <a
            href="#how-it-works"
            className="text-muted text-[13px] font-medium tracking-wide hover:text-ink transition-colors"
          >
            How It Works
          </a>
          <a
            href="#backed-by"
            className="text-muted text-[13px] font-medium tracking-wide hover:text-ink transition-colors"
          >
            Partners
          </a>
        </div>

        <a
          href="#apply"
          className="bg-gold text-near-black text-[13px] font-medium tracking-wide px-5 py-2 rounded-lg hover:bg-gold/90 transition-colors"
        >
          Get Started →
        </a>
      </div>
    </nav>
  );
}
