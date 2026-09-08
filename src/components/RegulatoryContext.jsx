import rsbLogo from "../assets/rsbLogo.png";

export default function RegulatoryContext() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10 py-10 border-t border-b border-gray-100">
          <img
            src={rsbLogo}
            alt="Rwanda Standards Board"
            className="h-20 sm:h-24 w-auto flex-shrink-0 grayscale opacity-80"
          />

          <div className="hidden sm:block w-px self-stretch bg-gray-200 flex-shrink-0" />

          <div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-3">
              Metrology services in Rwanda — including the verification and
              calibration of weighing and temperature instruments — are
              regulated under{" "}
              <span className="text-navy-950 font-semibold">
                Law N° 70/2019
              </span>{" "}
              and overseen by the Rwanda Standards Board (RSB), Rwanda's
              national body for standards, quality testing, and metrology.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Standserve operates within this national framework —
              facilitating access to technical services delivered by
              partners aligned with RSB's regulatory requirements, so every
              result you receive is credible and traceable.{" "}
              <a
                href="https://www.rsb.gov.rw/services/metrology/about-metrology-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue font-medium hover:underline whitespace-nowrap"
              >
                Learn more from RSB →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
