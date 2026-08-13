import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car recovery, towing, 24 hour car recovery, emergency towing, roadside assistance, breakdown recovery, flatbed towing, accident recovery and vehicle towing across Sharjah.",
};

const services = [
  {
    icon: "fa-solid fa-truck-pickup",
    img: "/images/service-car-recovery.jpg",
    title: "Car Recovery Sharjah",
    titleAr: "استرجاع السيارات في الشارقة",
    desc: "Fast, careful recovery for any car that can't be driven, wherever you are in Sharjah.",
    features: [
      "Rapid dispatch across the emirate",
      "Suitable for cars, SUVs and light vehicles",
      "Transport to a garage, home or storage yard",
    ],
  },
  {
    icon: "fa-solid fa-truck-ramp-box",
    img: "/images/service-towing.jpg",
    title: "Towing Service Sharjah",
    titleAr: "خدمة سحب السيارات في الشارقة",
    desc: "Reliable towing to your garage, home or preferred location, handled with care from hook-up to drop-off.",
    features: [
      "Modern towing fleet across Sharjah",
      "Secure hook-up and steady transport",
      "Flexible drop-off locations",
    ],
  },
  {
    icon: "fa-solid fa-clock",
    img: "/images/service-24hr.png",
    title: "24 Hour Car Recovery Sharjah",
    titleAr: "استرجاع سيارات على مدار 24 ساعة",
    desc: "Day or night, our team is on call around the clock to reach drivers stuck anywhere in the city.",
    features: [
      "Available every hour, every day of the year",
      "Priority given to urgent night-time calls",
      "No office hours — we're always reachable",
    ],
  },
  {
    icon: "fa-solid fa-triangle-exclamation",
    img: "/images/service-emergency-towing.jpg",
    title: "Emergency Towing Sharjah",
    titleAr: "سحب طوارئ في الشارقة",
    desc: "Rapid response towing for urgent situations, so you're not left waiting on a busy or unsafe road.",
    features: [
      "Fastest available dispatch for urgent calls",
      "Safe recovery on highways and busy roads",
      "Clear updates while help is on the way",
    ],
  },
  {
    icon: "fa-solid fa-road",
    img: "/images/service-roadside-assistance.jpg",
    title: "Roadside Assistance Sharjah",
    titleAr: "المساعدة على الطريق في الشارقة",
    desc: "On-the-spot help for minor issues so you can often get back on the road without a full tow.",
    features: [
      "Quick on-site checks where possible",
      "Help with flat batteries, fuel and minor faults",
      "Full recovery arranged if it can't be fixed roadside",
    ],
  },
  {
    icon: "fa-solid fa-car-burst",
    img: "/images/service-breakdown-recovery.jpg",
    title: "Breakdown Recovery Sharjah",
    titleAr: "استرجاع سيارات الأعطال في الشارقة",
    desc: "Whatever's stopped your car — engine trouble, a flat tyre or an electrical fault — we'll get it moved safely.",
    features: [
      "Covers mechanical and electrical breakdowns",
      "Safe recovery from any Sharjah road",
      "Transport to your preferred garage",
    ],
  },
  {
    icon: "fa-solid fa-trailer",
    img: "/images/service-flatbed-towing.jpg",
    title: "Flatbed Towing Sharjah",
    titleAr: "سحب بشاحنة مسطحة في الشارقة",
    desc: "Flatbed transport that keeps all four wheels off the road, ideal for low cars, 4x4s and damaged vehicles.",
    features: [
      "No wheels touch the ground during transport",
      "Best option for lowered cars and 4x4s",
      "Secure strapping for damaged or non-runners",
    ],
  },
  {
    icon: "fa-solid fa-car-side",
    img: "/images/service-accident-recovery.jpg",
    title: "Accident Recovery Sharjah",
    titleAr: "استرجاع سيارات الحوادث في الشارقة",
    desc: "Considerate, professional recovery from the scene of a collision, with support for the paperwork after.",
    features: [
      "Sensitive handling at the accident scene",
      "Coordination with police or insurers on request",
      "Transport to a body shop or storage compound",
    ],
  },
  {
    icon: "fa-solid fa-truck",
    img: "/images/service-vehicle-towing.jpg",
    title: "Vehicle Towing Sharjah",
    titleAr: "سحب المركبات في الشارقة",
    desc: "General vehicle towing for cars, vans and light commercial vehicles anywhere across Sharjah.",
    features: [
      "Cars, vans and light commercial vehicles",
      "Local and cross-town towing",
      "Fair, distance-based pricing",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Call or WhatsApp",
    desc: "Reach out with your location and a quick description of the problem.",
    icon: "fa-solid fa-phone",
  },
  {
    step: "02",
    title: "Share the Details",
    desc: "Tell us your vehicle type, pickup point and destination so we can plan the right response.",
    icon: "fa-solid fa-location-dot",
  },
  {
    step: "03",
    title: "We're on Our Way",
    desc: "Our nearest driver heads straight to you and handles your vehicle with care from arrival.",
    icon: "fa-solid fa-truck-pickup",
  },
  {
    step: "04",
    title: "Safe Drop-Off",
    desc: "We deliver your vehicle to your chosen garage or address and keep you updated throughout.",
    icon: "fa-solid fa-circle-check",
  },
];

const faqs = [
  {
    q: "How quickly can you reach me in Sharjah?",
    a: "Response times depend on your location and current job volume, but we prioritise urgent calls and aim to reach you as quickly as possible across the emirate.",
  },
  {
    q: "Do you cover areas outside central Sharjah?",
    a: "Yes. We cover the whole emirate including the industrial areas and outskirts. Get in touch if you're unsure whether your location is covered.",
  },
  {
    q: "Can you give me a price over the phone?",
    a: "We can give you a clear idea of cost once we know your vehicle type, pickup location and destination. Call or WhatsApp us with the details for an accurate quote.",
  },
  {
    q: "Do you tow 4x4s and larger vehicles?",
    a: "Yes, our flatbed towing service is well suited to 4x4s, SUVs and larger cars that need extra care during transport.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header activePath="/services" />

      <main>
        {/* Page Banner */}
        <section className="hero-panel text-white">
          <div className="wrap reveal py-10 text-center sm:py-14 lg:py-20">
            <p className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-amber/40 bg-amber/15 px-3 py-1.5 text-xs font-semibold text-amber-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <i className="fa-solid fa-screwdriver-wrench flex-shrink-0"></i> Our Services
            </p>
            <h1 className="mb-2 text-3xl leading-tight font-extrabold sm:mb-3 sm:text-4xl lg:text-6xl">
              Car Recovery &amp; Towing Services in Sharjah
            </h1>
            <p className="ar mx-auto mb-4 max-w-2xl text-white/70">
              خدمات سحب واسترجاع السيارات في الشارقة
            </p>
            <p className="mx-auto mb-5 max-w-2xl text-base text-white/80 sm:mb-8 sm:text-lg">
              Practical, professional support for breakdowns, accidents and roadside emergencies anywhere in Sharjah.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a href="tel:+971502424637" className="btn-pulse rounded-full bg-amber px-5 py-3.5 text-center text-sm font-bold text-ink transition sm:px-7 sm:py-4 sm:text-base">
                <i className="fa-solid fa-phone mr-2"></i>Call +971 50 242 4637
              </a>
              <a
                href="https://wa.me/971502424637"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-green-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>Message on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-slate-50 py-20">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber-dark">What We Offer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-ink lg:text-4xl">Complete Recovery &amp; Towing Support</h2>
              <p className="text-ink/70">From a flat battery to a full accident recovery, our team handles every job across Sharjah with the same care.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="svc-card reveal flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white">
                  <Image src={service.img} alt={service.title} width={900} height={600} className="h-48 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber/10">
                      <i className={`${service.icon} text-xl text-amber-dark`}></i>
                    </div>
                    <h3 className="mb-1 text-xl font-bold text-ink">{service.title}</h3>
                    <p className="ar mb-2 text-sm text-ink/60">{service.titleAr}</p>
                    <p className="mb-4 text-ink/70">{service.desc}</p>
                    <ul className="mb-6 flex-1 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-ink/70">
                          <i className="fa-solid fa-check mt-1 text-amber-dark"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto flex gap-3">
                      <a
                        href="tel:+971502424637"
                        className="flex-1 rounded-full bg-ink px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-ink-light"
                      >
                        <i className="fa-solid fa-phone mr-1.5"></i>Call Now
                      </a>
                      <a
                        href="https://wa.me/971502424637"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-whatsapp px-4 py-2.5 text-center text-sm font-bold text-white transition hover:bg-green-600"
                      >
                        <i className="fa-brands fa-whatsapp mr-1.5"></i>WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-ink py-20 text-white">
          <div className="wrap">
            <div className="reveal mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 font-bold text-amber">How It Works</p>
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Simple, From First Call to Drop-Off</h2>
              <p className="text-white/70">No confusing steps. Here&rsquo;s exactly what happens when you contact us.</p>
            </div>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <div key={item.step} className="feature-card-dark reveal relative p-7">
                  <span className="absolute top-5 right-6 text-3xl font-extrabold text-white/15">{item.step}</span>
                  <i className={`${item.icon} mb-5 text-3xl text-amber`}></i>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="wrap mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <p className="mb-3 font-bold text-amber-dark">Common Questions</p>
              <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="grid gap-5">
              {faqs.map((faq) => (
                <div key={faq.q} className="reveal rounded-2xl border border-ink/10 p-6">
                  <h3 className="mb-2 flex items-start gap-2 font-bold text-ink">
                    <i className="fa-solid fa-circle-question mt-1 text-amber-dark"></i>
                    {faq.q}
                  </h3>
                  <p className="pl-7 text-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-amber py-20 text-center text-ink">
          <div className="wrap reveal">
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">Need a Service Not Listed?</h2>
            <p className="mb-8 text-lg text-ink/80">Get in touch and we&rsquo;ll let you know how we can help with your specific situation.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="tel:+971502424637" className="rounded-full bg-ink px-8 py-4 font-bold text-white transition hover:bg-ink-light">
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/971502424637"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-whatsapp px-8 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
