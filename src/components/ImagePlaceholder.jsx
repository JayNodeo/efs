/**
 * ImagePlaceholder
 * ----------------
 * Drop-in placeholder for images that haven't been provided yet.
 * When you're ready to swap in a real asset, either:
 *   1. Replace the `src` prop (it will render an <img> instead), or
 *   2. Replace this component entirely with an <img> tag.
 *
 * Props:
 *   src        – (optional) if provided, renders a real image
 *   alt        – alt text (used for both placeholder label and real img)
 *   className  – outer wrapper classes
 *   aspect     – "video" | "square" | "portrait" | "wide"  (default: "video")
 *   icon       – "image" | "person" | "logo" | "scene"     (default: "image")
 */

const aspects = {
  video: "aspect-video",        // 16:9
  square: "aspect-square",      // 1:1
  portrait: "aspect-[3/4]",     // 3:4
  wide: "aspect-[21/9]",        // 21:9 cinematic
};

const icons = {
  image: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zM10.5 8.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  person: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  logo: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  scene: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </svg>
  ),
};

export default function ImagePlaceholder({
  src,
  alt = "Placeholder",
  className = "",
  aspect = "video",
  icon = "image",
}) {
  // If a real src is provided, render an actual image
  if (src) {
    return (
      <div className={`overflow-hidden rounded-2xl ${className}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${aspects[aspect]}`}
        />
      </div>
    );
  }

  // Placeholder state
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/[0.03] to-white/[0.08]
        border border-dashed border-white/10
        flex flex-col items-center justify-center gap-3
        ${aspects[aspect]}
        ${className}
      `}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />

      <div className="relative text-white/15">
        {icons[icon]}
      </div>
      <span className="relative text-white/20 text-xs font-medium tracking-wider uppercase">
        {alt}
      </span>
    </div>
  );
}
