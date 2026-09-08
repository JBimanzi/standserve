import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.jpg";

const stats = [
  { label: "Weighing", sub: "Instrument Calibration" },
  { label: "Temperature", sub: "Instrument Calibration" },
  { label: "Kigali", sub: "Rwanda-Based Network" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden bg-navy-950">
      <img
        src={heroImage}
        alt="Standserve technical services"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 sm:via-navy-950/65 to-navy-950/10" />
      <div className="absolute inset-0 bg-navy-950/25" />

      

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <div className="max-w-2xl">
          
          <h1 className="font-display text-4xl sm:text-6xl text-white leading-[1.1] mb-6 tracking-wide">
            Every Measurement
            <br />
            <span className="text-accent-blue">Matters.</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
            Standserve is your direct line to accredited calibration and
            verification providers across Rwanda. We provide accurate results and clear communication,
            from request to certificate.
          </p>

          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-white font-medium text-base"
          >
            <span className="border-b border-white/40 group-hover:border-accent-blue transition-colors pb-1">
              Explore Our Services
            </span>
            <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Stats reimagined as minimal inline markers instead of a boxed panel */}
        <div className="hidden sm:flex gap-12 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-accent-blue pl-4">
              <div className="text-white font-display text-xl">{s.label}</div>
              <div className="text-white/50 text-sm mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}