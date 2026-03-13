"use client";

import { useEffect, useRef, useState } from "react";

const DARK_SECTION_SELECTORS =
  ".brand-story, .newsletter, .ticker, .hero-image";

export default function LaBadge({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const under = document.elementFromPoint(centerX, centerY);
      if (!under) return;
      const inDark = under.closest(DARK_SECTION_SELECTORS) != null;
      setOnDark(inDark);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`la-badge${onDark ? " la-badge--on-dark" : ""}`}
      aria-hidden
    >
      {children}
    </div>
  );
}
