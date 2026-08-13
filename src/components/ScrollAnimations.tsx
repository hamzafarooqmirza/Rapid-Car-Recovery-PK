"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("show"));
    };

    // Reveal instantly if JS runs late (or the browser has scripting/animation issues)
    // instead of leaving text permanently hidden.
    const fallback = window.setTimeout(revealAll, 1500);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
    // Re-run on every route change so client-side navigations (next/link) pick up
    // the new page's .reveal elements — this component lives in the root layout
    // and otherwise only observes once, leaving later pages' text stuck at
    // opacity: 0 until a full reload.
  }, [pathname]);

  return null;
}
