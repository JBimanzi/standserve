import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageHero from "../components/PageHero";
import Badge from "../components/Badge";

const contactInfo = [
  {
    label: "Email",
    value: "info@standserve.rw",
    href: "mailto:info@standserve.rw",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 6l-10 7L2 6" />
        <path d="M2 6h20v12H2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+250 788 309 343",
    href: "tel:+250788309343",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 2.9a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.4c.9.3 1.9.5 2.9.6a2 2 0 011.7 2.1z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Kigali, Rwanda",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

function ContactRow({ item }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center">
        {item.icon}
      </span>
      <div>
        <div className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">
          {item.label}
        </div>
        {item.href ? (
          <a href={item.href} className="text-navy-950 font-medium hover:text-accent-blue transition-colors">
            {item.value}
          </a>
        ) : (
          <span className="text-navy-950 font-medium">{item.value}</span>
        )}
      </div>
    </div>
  );
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  return (
    <>
      <PageHero title="Contact Us" breadcrumb="Contact" />

      <section className="relative bg-white py-24 px-6 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #2f6fed 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <Badge variant="light">Get In Touch</Badge>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 leading-tight mb-5">
              Let's coordinate your next service
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Reach out with your instrument type and requirements — we'll
              respond with next steps and connect you to the right technical
              partner.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <ContactRow key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 sm:p-10">
              {status === "success" ? (
                <div className="text-center py-12">
                  <span className="inline-flex w-14 h-14 rounded-full bg-accent-blue/10 text-accent-blue items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <h3 className="font-display text-xl text-navy-950 mb-2">
                    Request received
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    Thanks for reaching out — we'll get back to you shortly to
                    coordinate the next steps.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-navy-950 text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-navy-950 text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-950 text-sm font-medium mb-2">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      required
                      defaultValue=""
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Verification of Weighing Instruments">Verification of Weighing Instruments</option>
                      <option value="Calibration of Weighing Instruments">Calibration of Weighing Instruments</option>
                      <option value="Calibration of Temperature Instruments">Calibration of Temperature Instruments</option>
                      <option value="Other Technical Services">Other Technical Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-navy-950 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors resize-none"
                      placeholder="Tell us about your instruments and requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm">
                      Something went wrong sending your message. Please try again or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto bg-navy-950 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-navy-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
