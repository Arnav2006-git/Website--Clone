export const currency = (n) => n.toLocaleString(undefined, { style: "currency", currency: "USD" });
export const cls = (...a) => a.filter(Boolean).join(" ");

export const Stripes = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-label="Adisport logo">
    <rect x="4" y="32" width="10" height="28" rx="2"></rect>
    <rect x="22" y="20" width="10" height="40" rx="2"></rect>
    <rect x="40" y="8" width="10" height="52" rx="2"></rect>
  </svg>
);
