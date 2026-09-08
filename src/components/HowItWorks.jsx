import Badge from "./Badge";

const steps = [
  {
    number: "01",
    title: "Submit Your Request",
    description:
      "Tell us which instruments need verification or calibration, and any deadlines or compliance requirements you're working with.",
  },
  {
    number: "02",
    title: "We Coordinate",
    description:
      "We match your request to the right accredited technical partner and manage scheduling, logistics, and communication on your behalf.",
  },
  {
    number: "03",
    title: "Service Is Delivered",
    description:
      "Your instruments are verified or calibrated by qualified professionals — on-site or at their facility, whichever fits your operation.",
  },
  {
    number: "04",
    title: "You Get Your Certificate",
    description:
      "We follow up to ensure you receive proper documentation and certification, with everything traceable and on record.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="light">How It Works</Badge>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-4">
            From request to certificate, in four steps
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            A simple, transparent process designed so you always know what's
            happening and when.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* Connecting line, desktop only */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-gray-200 via-accent-blue/40 to-gray-200" />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start">
              <div className="relative z-10 w-12 h-12 rounded-full bg-navy-950 text-white flex items-center justify-center font-display text-sm mb-6">
                {step.number}
              </div>
              <h3 className="font-display text-lg text-navy-950 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}