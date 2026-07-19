"use client";

import { useEffect, useRef } from "react";

/**
 * CursorSpotlight — site-wide amber glow following the pointer.
 * Renders a fixed overlay; disabled on touch devices and for
 * prefers-reduced-motion users. Safe to mount on any page.
 */
export default function CursorSpotlight() {
  const ref = useRef(null);
  const frame = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return;

    const onMove = (e) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.background = `radial-gradient(450px circle at ${e.clientX}px ${e.clientY}px, rgba(255,180,84,0.07), transparent 70%)`;
        }
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-10" aria-hidden="true" />
  );
}