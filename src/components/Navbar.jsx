import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logoStandserve.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
];

const mobileNavLinks = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 12l9-9 9 9M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    name: "About Us",
    path: "/about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    name: "Services",
    path: "/services",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.2-3.2a5 5 0 01-6.6 6.6L6 21l-3-3 8.3-8.3a5 5 0 016.6-6.6l-3.17 3.17z" />
      </svg>
    ),
  },
  {
    name: "Contact",
    path: "/contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.35 0-2.62-.32-3.75-.9L3 20l1.05-4.2A8.46 8.46 0 013 11.5 8.5 8.5 0 0111.5 3 8.5 8.5 0 0121 11.5z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const transparent = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <>
      {/* Top header — desktop nav lives here, hidden on mobile */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          transparent ? "bg-transparent" : "bg-white shadow-sm border-b border-black/5"
        }`}
      >
        <div
          className={`overflow-hidden transition-all duration-300 text-xs ${
            transparent
              ? "max-h-9 opacity-100 text-white/90 bg-navy-950/30 backdrop-blur-md"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
            <span className="tracking-wide">Metrology Service Facilitation · Kigali, Rwanda</span>
            <div className="hidden sm:flex items-center gap-5">
              <a href="mailto:info@standserve.rw" className="hover:text-white transition-colors">info@standserve.rw</a>
              <a href="tel:+250788309343" className="hover:text-white transition-colors">+250 788 309 343</a>
            </div>
          </div>
        </div>

        <div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
            transparent ? "h-28" : "h-16"
          }`}
        >
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Standserve Ltd"
              className={`w-auto transition-all duration-300 ${
                transparent ? "h-50 brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" : "h-45"
              }`}
            />
          </Link>

          <nav
            className={`hidden md:flex items-center gap-1 rounded-full p-1.5 transition-colors duration-300 ${
              transparent ? "bg-white/10 backdrop-blur-md border border-white/15" : "bg-gray-100"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-accent-blue text-white"
                      : transparent
                      ? "text-white/75 hover:text-white"
                      : "text-gray-600 hover:text-navy-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex bg-navy-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-navy-800 transition-colors"
          >
            Request a Service
          </Link>

          {/* Mobile: just the logo row, no hamburger — bottom tab bar handles navigation */}
        </div>
      </header>

      {/* Fixed bottom tab bar — mobile only */}
            {/* Fixed floating pill nav — mobile only */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-black/5 px-2 py-2 flex items-center justify-between">
          {mobileNavLinks.map((link) => {
            const isActive = location.pathname === link.path;

            if (isActive) {
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex flex-col items-center flex-1"
                >
                  <span className="-mt-8 w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-lg shadow-accent-blue/30 border-4 border-white">
                    {link.icon}
                  </span>
                  <span className="text-[11px] font-semibold text-accent-blue mt-1">
                    {link.name}
                  </span>
                </Link>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex flex-col items-center gap-1 flex-1 py-1.5 text-gray-400"
              >
                {link.icon}
                <span className="text-[11px] font-medium">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}