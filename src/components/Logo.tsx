import Image from "next/image";

const sizeMap = {
  sm: { height: 28, className: "h-7" },
  md: { height: 36, className: "h-9" },
  lg: { height: 48, className: "h-12" },
};

export function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}) {
  const s = sizeMap[size];

  const logo = (
    <Image
      src="/images/rapid-car-recovery-logo.webp"
      alt="Rapid Car Recovery"
      width={1303}
      height={434}
      priority
      className={`w-auto ${s.className}`}
    />
  );

  if (variant === "dark") {
    return (
      <span className="inline-flex items-center rounded-lg bg-ink px-2.5 py-1.5">
        {logo}
      </span>
    );
  }

  return logo;
}
