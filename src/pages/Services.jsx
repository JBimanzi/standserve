import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Badge from "../components/Badge";
import ImageSlider from "../components/ImageSlider";

import serviceWeighing from "../assets/homeServices1.jpg";
import serviceWeighing1 from "../assets/pageServices1a.jpg";

import serviceWeighingCalibration from "../assets/pageServices2a.jpg";
import serviceWeighingCalibration1 from "../assets/pageServices2b.jpg";

import serviceTemperature1 from "../assets/homeServices3.webp";
import serviceTemperature from "../assets/pageServices3a.jpg";

import serviceOther1 from "../assets/pageServices4a.png";
import serviceOther from "../assets/pageServices4b.jpg";

// Add a second photo per service here once you have it, e.g.:
// import serviceWeighingAlt from "../assets/homeServices1b.jpg";

const services = [
  {
    tag: "Weighing Instruments",
    title: "Verification of Weighing Instruments",
    description:
      "Legal verification confirms that your weighing instruments meet regulatory requirements for trade and industrial use. We coordinate this process with accredited verification bodies, so your instruments carry the documentation your operations and clients expect.",
    includes: [
      "Coordination with accredited verification providers",
      "Scheduling and on-site or facility-based verification",
      "Documentation and compliance certificates",
    ],
    images: [serviceWeighing1, serviceWeighing],
  },
  {
    tag: "Weighing Instruments",
    title: "Calibration of Weighing Instruments",
    description:
      "From industrial platform scales to precision laboratory balances, accurate calibration keeps your measurements dependable. We connect you to qualified calibration partners suited to your specific instrument type and industry.",
    includes: [
      "Calibration for scales, balances, and platform systems",
      "Traceable results with proper certification",
      "Flexible scheduling around your operations",
    ],
    images: [serviceWeighingCalibration, serviceWeighingCalibration1],
  },
  {
    tag: "Temperature Instruments",
    title: "Calibration of Temperature Instruments",
    description:
      "Thermometers, sensors, and temperature-controlled equipment all require regular calibration to remain reliable. We facilitate access to technical partners equipped to calibrate a wide range of temperature-measuring devices.",
    includes: [
      "Coverage for thermometers, sensors, and probes",
      "Support for temperature-controlled equipment",
      "Clear turnaround timelines and updates",
    ],
    images: [serviceTemperature1, serviceTemperature],
  },
  {
    tag: "Technical Services",
    title: "Other Technical & Coordination Services",
    description:
      "Beyond weighing and temperature instruments, we facilitate access to a broader range of technical services as your needs evolve — with the same commitment to clear communication and reliable coordination.",
    includes: [
      "Access to a growing network of technical partners",
      "Single point of contact for multiple service needs",
      "Ongoing support as your requirements change",
    ],
    images: [serviceOther1, serviceOther],
  },
];

function FlagMarker() {
  return (
    <span
      className="inline-block w-3 h-3 mb-2 bg-accent-blue"
      style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
    />
  );
}

export default function Services() {
  return (
    <>
      <PageHero title="Our Services" breadcrumb="Services" />

      <section className="relative bg-white pt-24 pb-8 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Badge variant="light">What We Offer</Badge>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-5">
            Metrology services, made accessible
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every service below is delivered through our network of accredited
            technical partners. We handle the coordination, communication,
            and follow-up — so the result reaches you without friction.
          </p>
        </div>
      </section>

      <section className="relative bg-white pb-28 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          
          <div
            className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle, #2f6fed 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent-blue/[0.04] rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto space-y-28 pt-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl bg-gray-200 hidden sm:block" />
                  <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden">
                    <ImageSlider images={service.images} alt={service.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <FlagMarker />
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent-blue text-xs font-semibold tracking-[0.2em] uppercase">
                    {service.tag}
                  </span>
                  <span className="flex-1 h-px bg-accent-blue/20" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-navy-950 leading-tight mb-5">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-7">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy-950 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center mt-0.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-navy-950 font-medium text-sm border-b border-navy-950/30 pb-1 hover:border-accent-blue hover:text-accent-blue transition-colors"
                >
                  Request this service
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
