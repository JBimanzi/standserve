import PageHero from "../components/PageHero";
import Badge from "../components/Badge";
import storyImage from "../assets/aboutPage1.png";

const values = [
  {
    title: "Reliability",
    description: "We coordinate with accredited, qualified partners so every result you receive can be trusted.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Clarity",
    description: "Clear, consistent communication from your first request through to your final certificate.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 11.5a8.5 8.5 0 01-8.5 8.5c-1.35 0-2.62-.32-3.75-.9L3 20l1.05-4.2A8.46 8.46 0 013 11.5 8.5 8.5 0 0111.5 3 8.5 8.5 0 0121 11.5z" />
      </svg>
    ),
  },
  {
    title: "Accessibility",
    description: "We remove the friction of finding and coordinating technical services, so you don't have to.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <PageHero title="About Us" breadcrumb="About Us" />

      {/* Our Story */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden order-2 lg:order-1">
            <img src={storyImage} alt="Standserve technical services" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="light">Our Story</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-6">
              Bridging the gap between businesses and technical services
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Standserve Ltd is a Rwandan service company focused on
              facilitating access to professional technical and
              metrology-related services. We support businesses and
              organizations in accessing services such as the verification of
              weighing instruments, calibration of weighing instruments,
              calibration of temperature-measuring instruments, and other
              related technical services.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Our role is to make these services more accessible to customers
              by providing efficient communication, coordination, and
              customer support — so businesses can focus on their operations
              instead of chasing down technical providers.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mt-5">
            Metrology and calibration services in Rwanda are governed by{" "}
            <span className="text-navy-950 font-medium">Law N° 70/2019</span> and
            overseen by the Rwanda Standards Board (RSB). We operate within this
            national framework, connecting businesses to technical partners who
            meet its requirements.
            </p>
        </div>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="relative bg-navy-950 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-blue/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent-red/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Badge variant="dark">Our Mission</Badge>
            <p className="text-white text-lg leading-relaxed font-display">
              To make professional technical and metrology services
              accessible to every business in Rwanda, through efficient
              coordination and clear communication.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <Badge variant="dark">Our Vision</Badge>
            <p className="text-white text-lg leading-relaxed font-display">
              To be the most trusted link between businesses and accredited
              technical service providers across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="light">What We Stand For</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight">
              Our core values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <span className="inline-flex w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue items-center justify-center mb-5">
                  {value.icon}
                </span>
                <h3 className="font-display text-lg text-navy-950 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}