"use client";

import { useEffect } from "react";

const start = { r: 13, g: 11, b: 9 };
const end = { r: 7, g: 5, b: 3 };

function mix(progress: number) {
  const clamped = Math.min(Math.max(progress, 0), 1);
  const r = Math.round(start.r + (end.r - start.r) * clamped);
  const g = Math.round(start.g + (end.g - start.g) * clamped);
  const b = Math.round(start.b + (end.b - start.b) * clamped);

  return `rgb(${r} ${g} ${b})`;
}

export function ScrollBackground() {
  useEffect(() => {
    let animationFrame = 0;

    const updateBackground = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty("--page-bg", mix(progress));
      animationFrame = 0;
    };

    const onScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateBackground);
    };

    updateBackground();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return null;
}
