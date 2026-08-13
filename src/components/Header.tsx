"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/areas", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export function Header({ activePath = "/" }: { activePath?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-amber/20 bg-ink py-2 text-white/70">
        <div className="wrap flex flex-col items-center justify-center gap-1 text-center text-xs sm:flex-row sm:gap-3 md:text-sm">
          <span>
            <i className="fas fa-triangle-exclamation mr-1"></i>24/7 Car Recovery &amp; Towing in Sharjah
          </span>
          <span className="ar hidden text-white/60 sm:inline">| استرجاع وسحب السيارات في الشارقة على مدار الساعة</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 shadow-md backdrop-blur">
        <div className="wrap flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.href === activePath
                    ? "nav-dot text-amber"
                    : "nav-dot text-white/85 transition hover:text-amber"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+971502424637"
              className="pulse-cta rounded-full bg-amber px-5 py-3 text-sm font-bold text-ink transition hover:bg-amber-dark"
            >
              <i className="fa-solid fa-phone mr-2"></i>Call Now
            </a>
            <a
              href="https://wa.me/971502424637"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </a>
          </div>

          <button
            className="h-11 w-11 rounded-xl bg-amber text-ink lg:hidden"
            aria-label="Open mobile menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 bg-ink lg:hidden">
            <div className="wrap grid gap-3 py-4 font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={
                    link.href === activePath
                      ? "py-2 text-amber"
                      : "py-2 text-white/85 hover:text-amber"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fa-solid fa-chevron-right mr-2 text-xs text-amber"></i>
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+971502424637"
                className="mt-2 rounded-xl bg-amber px-5 py-3 text-center font-bold text-ink"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fa-solid fa-phone mr-2"></i>Call Now
              </a>
              <a
                href="https://wa.me/971502424637"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-whatsapp px-5 py-3 text-center font-bold text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
