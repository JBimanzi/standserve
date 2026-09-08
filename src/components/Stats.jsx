const stats = [
  { value: "100%", label: "Coordinated Support" },
  { value: "Rwanda-Wide", label: "Partner Network Coverage" },
  { value: "2+", label: "Instrument Categories Served" },
  { value: "24/7", label: "Request Communication" },
];

export default function Stats() {
  return (
    <section className="bg-white py-16 px-6 border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <div className="font-display text-2xl sm:text-3xl text-navy-950 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}