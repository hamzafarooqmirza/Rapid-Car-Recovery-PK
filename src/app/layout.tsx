import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rapid Car Recovery",
    default: "Rapid Car Recovery | 24/7 Car Recovery & Towing in Sharjah",
  },
  description:
    "Rapid Car Recovery provides fast 24 hour car recovery, towing, emergency towing, breakdown recovery, flatbed towing and accident recovery across Sharjah. خدمات سحب واسترجاع السيارات في الشارقة.",
  openGraph: {
    title: "Rapid Car Recovery | 24/7 Car Recovery & Towing in Sharjah",
    description:
      "Fast car recovery, towing, roadside assistance and accident recovery across Sharjah, available 24/7.",
    images: [
      {
        url: "/images/rapid-car-recovery-open-graph.webp",
        width: 1056,
        height: 554,
        alt: "Rapid Car Recovery | Car Recovery & Towing Services in Sharjah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/rapid-car-recovery-open-graph.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body className="pb-14 antialiased sm:pb-0">
        <ScrollAnimations />
        <FloatingButtons />
        {children}
      </body>
    </html>
  );
}
