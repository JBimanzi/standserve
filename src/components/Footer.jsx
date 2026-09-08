import { Link } from "react-router-dom";
import logo from "../assets/logoStandserve.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },

  { name: "Contact", path: "/contact" },
];

const services = [
  "Verification of Weighing Instruments",
  "Calibration of Weighing Instruments",
  "Calibration of Temperature Instruments",
  "Other Technical Services",
];

const socials = [
  {
    label: "LinkedIn",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.85c0-1.63-.03-3.73-2.27-3.73-2.28 0-2.63 1.78-2.63 3.6V23h-4V8z",
  },
  {
    label: "X",
    path: "M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-6.9L4.4 22H1.3l8.1-9.2L1 2h7l4.9 6.3L18.9 2z",
  },
  {
    label: "WhatsApp",
    path: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10 9 9.5 7.8 9.3 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-20 pb-8 px-6 overflow-hidden">
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          <div className="lg:col-span-1">
            <img src={logo} alt="Standserve Ltd" className="h-50  brightness-0 invert mb-5" />
            
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/50 text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
                

                

              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-widest uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-white/50 text-sm hover:text-white transition-colors leading-relaxed">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-sm tracking-widest uppercase mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kigali, Rwanda
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 6l-10 7L2 6" />
                  <path d="M2 6h20v12H2z" />
                </svg>
                <a href="mailto:info@standserve.rw" className="hover:text-white transition-colors">
                  info@standserve.rw
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 2.9a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.4c.9.3 1.9.5 2.9.6a2 2 0 011.7 2.1z" />
                </svg>
                <a href="tel:+250788309343" className="hover:text-white transition-colors">
                  +250 788 309 343
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Standserve Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-white/40 text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}