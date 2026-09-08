import { Link } from "react-router-dom";
import Badge from "./Badge";

export default function CTABanner() {
  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue/[0.07] rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-red/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">

        <Badge variant="light">Get Started</Badge>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-950 leading-tight mb-6">
          Ready to get your instruments verified?
        </h2>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Tell us what you need calibrated or verified, and we'll coordinate
          the rest — from the right technical partner to your final
          certificate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-navy-950 text-white font-medium px-8 py-4 rounded-md hover:bg-navy-800 transition-colors w-full sm:w-auto text-center"
          >
            Request a Service
          </Link>
          <Link
            to="/services"
            className="border border-gray-300 text-navy-950 font-medium px-8 py-4 rounded-md hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}