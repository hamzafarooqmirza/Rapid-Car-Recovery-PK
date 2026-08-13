"use client";

import { useState } from "react";

/**
 * Placeholder testimonials — not sourced from a review platform.
 * Swap in verified customer reviews once available.
 */
const reviews = [
  {
    name: "Ahmed K.",
    quote:
      "My car stalled near Al Nahda late at night and the recovery truck reached me in under 20 minutes. Smooth, professional job.",
  },
  {
    name: "Fatima R.",
    quote:
      "Called for a flatbed after an accident on Sheikh Mohammed Bin Zayed Road. They handled the car carefully and kept me informed the whole time.",
  },
  {
    name: "Yousef A.",
    quote:
      "Battery died in Al Ghuwair and I expected a long wait. The team arrived quickly and got me moving again with no fuss.",
  },
  {
    name: "Mariam S.",
    quote:
      "Clear price before they even left the yard — no surprises when the truck arrived. Exactly what you want when you're stressed on the roadside.",
  },
  {
    name: "Omar H.",
    quote:
      "Needed towing from Al Qasimia to a garage across town. Driver was polite, on time, and the car arrived without a scratch.",
  },
  {
    name: "Layla M.",
    quote:
      "Stuck near Al Rahmaniya late at night — they picked up on WhatsApp straight away and had a truck with me fast.",
  },
];

const doubled = [...reviews, ...reviews];

export function ReviewsSlider() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className="reviews-track flex gap-5"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {doubled.map((r, i) => (
          <div
            key={i}
            className="review-card flex w-72 flex-shrink-0 flex-col sm:w-80"
          >
            <div className="mb-3 text-base leading-none text-amber">★★★★★</div>
            <p className="flex-1 text-sm leading-7 text-ink/70 italic">&ldquo;{r.quote}&rdquo;</p>
            <div className="mt-4 border-t border-ink/10 pt-3">
              <strong className="block truncate text-sm text-ink">{r.name}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
