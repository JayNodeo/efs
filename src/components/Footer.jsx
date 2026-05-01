import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-[#dddbd3] px-4 py-8 pb-24">
      <div className="max-w-[860px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-subtle">
          <p>
            &copy; Angel Squad · 1180 San Carlos Ave, Suite 337, San Carlos CA 94070
          </p>
          <div className="flex items-center gap-5">
            <Link
              to="/founders"
              className="hover:text-ink transition-colors"
            >
              Founder Program
            </Link>
            <a
              href="https://www.angelsquad.co"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              angelsquad.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
