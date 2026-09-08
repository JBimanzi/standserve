import { useState } from "react";
import Badge from "./Badge";

const faqs = [
  {
    q: "What exactly does Standserve do?",
    a: "We facilitate access to metrology services — like verification and calibration of weighing and temperature instruments — by connecting your business to accredited technical providers and managing the coordination on your behalf.",
  },
  
  {
  q: "Is Standserve regulated?",
  a: "Metrology services in Rwanda are governed by Law N° 70/2019 and overseen by the Rwanda Standards Board (RSB). Standserve is not RSB itself — we facilitate access to services delivered by properly licensed technical partners operating within this regulated framework.",
  },

  {
    q: "Do you perform the calibration yourselves?",
    a: "No — Standserve coordinates the process. The actual technical work is carried out by accredited partners in our network, while we handle communication, scheduling, and support from request to certificate.",
  },
  {
    q: "How long does the process usually take?",
    a: "Timelines depend on the instrument type and your chosen provider, but we keep you updated at every stage so you always know what to expect.",
  },
  {
    q: "Which instruments can you help with?",
    a: "Currently, we facilitate verification and calibration for weighing instruments and temperature-measuring instruments, along with other related technical services as they arise.",
  },
  {
    q: "Do you operate outside Kigali?",
    a: "We work with a growing network of technical partners across Rwanda — reach out with your location and instrument needs and we'll confirm coverage.",
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="light">Frequently Asked Questions</Badge>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight">
            Questions? We've got answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border transition-colors ${
                  isOpen ? "border-accent-blue/30 bg-white shadow-sm" : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base sm:text-lg text-navy-950">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-accent-blue border-accent-blue text-white rotate-45"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 text-[15px] leading-[1.75] px-6 pb-6 max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}