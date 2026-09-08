import { Link } from "react-router-dom";
import heroBg from "../assets/heroGeneral.png";


export default function PageHero({ title, breadcrumb }) {
  return (
    <section className="relative h-[420px] sm:h-[520px] overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Bottom-anchored gradient, dark at base fading to transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-white/70 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-accent-blue">{breadcrumb}</span>
          </div>
        )}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-none">
          {title}
        </h1>
      </div>
    </section>
  );
}