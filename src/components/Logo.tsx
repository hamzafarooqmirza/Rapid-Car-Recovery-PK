const sizeMap = {
  sm: { icon: "h-7 w-7 text-sm", text: "text-base" },
  md: { icon: "h-9 w-9 text-base", text: "text-lg" },
  lg: { icon: "h-11 w-11 text-lg", text: "text-xl" },
};

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];
  const textColor = variant === "light" ? "text-white" : "text-ink";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex ${s.icon} flex-shrink-0 items-center justify-center rounded-lg bg-amber font-heading font-extrabold text-ink`}
      >
        <i className="fa-solid fa-truck-pickup"></i>
      </span>
      <span className={`font-heading font-extrabold leading-tight ${s.text} ${textColor}`}>
        Rapid Car Recovery
      </span>
    </span>
  );
}
