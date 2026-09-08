import whyImage from "../assets/whyChooseUs1.png";
import Badge from "./Badge";

const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="5" r="2.2" />
        <circle cx="5" cy="19" r="2.2" />
        <circle cx="19" cy="19" r="2.2" />
        <path d="M12 7.2V13M12 13L6.5 17.2M12 13l5.5 4.2" />
      </svg>
    ),
    title: "One Point of Contact",
    description:
      "No need to identify, vet, or negotiate with multiple technical providers yourself — we manage that relationship on your behalf.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Accredited Network",
    description:
      "We work only with qualified, accredited partners for verification and calibration, so results are trusted and traceable.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.35 0-2.62-.32-3.75-.9L3 20l1.05-4.2A8.46 8.46 0 013 11.5 8.5 8.5 0 0111.5 3 8.5 8.5 0 0121 11.5z" />
        <path d="M8 11h8M8 8h5" />
      </svg>
    ),
    title: "Clear Communication",
    description:
      "From your first request to the final certificate, you get transparent updates — no chasing, no guesswork.",
  },
];

export default function WhyStandserve() {
  return (
    <section className="relative bg-gray-50 py-28 px-6 overflow-hidden">
            {/* Glowing orbs + diagonal accent lines, no grid */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-16 w-[440px] h-[440px] bg-accent-blue/20 rounded-full blur-[110px]" />
        <div className="absolute bottom-[-80px] right-[-40px] w-[380px] h-[380px] bg-accent-red/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-accent-blue/10 rounded-full blur-[90px]" />

        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <line x1="10%" y1="0%" x2="35%" y2="100%" stroke="#2f6fed" strokeOpacity="0.15" strokeWidth="1" />
          <line x1="95%" y1="0%" x2="70%" y2="100%" stroke="#e0393e" strokeOpacity="0.12" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="light">Why Standserve</Badge>

          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-6 max-w-lg">
            Access shouldn't be the hard part of getting things measured right.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-lg">
            Standserve exists to remove the friction between your business and
            the technical services you need — so you can focus on your
            operations, not on logistics.
          </p>

          <div className="space-y-8">
            {points.map((point) => (
              <div key={point.title} className="flex gap-5">
                <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-accent-blue">
                  {point.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy-950 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

                <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl">
          <img
            src={whyImage}
            alt="Standserve technical coordination"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}