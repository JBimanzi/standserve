import { Link } from "react-router-dom";
import Badge from "./Badge";
import serviceWeighing from "../assets/homeServices1.jpg";
import serviceWeighingCalibration from "../assets/homeServices2.png";
import serviceTemperature from "../assets/homeServices3.webp";
import serviceOther from "../assets/homeServices4a.png";

const services = [
  {
    title: "Verification of Weighing Instruments",
    image: serviceWeighing,
  },
  {
    title: "Calibration of Weighing Instruments",
    image: serviceWeighingCalibration,
  },
  {
    title: "Calibration of Temperature Instruments",
    image: serviceTemperature,
  },
  {
    title: "Other Technical & Coordination Services",
    image: serviceOther,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="light">What We Facilitate</Badge>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-4">
            Solutions for your metrology needs
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Every service below is delivered through our network of accredited
            technical partners — we handle the coordination so the result
            reaches you without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to="/services"
              className="group relative rounded-2xl overflow-hidden h-72 sm:h-80"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/25 to-transparent" />
<div className="absolute inset-0 bg-navy-950/10 group-hover:bg-navy-950/25 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl sm:text-3xl text-white leading-snug mb-4 max-w-xs">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium">
                  Learn more
                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
