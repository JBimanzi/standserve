export default function Badge({ children, variant = "dark" }) {
  const styles =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-white/85 backdrop-blur-sm"
      : "border-gray-200 bg-white text-navy-950/80 shadow-sm";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase mb-5 ${styles}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue" />
      </span>
      {children}
    </span>
  );
}