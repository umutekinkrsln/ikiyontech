'use client';

import { useEffect, useRef } from 'react';

export default function AboutDiagram() {
  const pathBlueRef = useRef<SVGPathElement>(null);
  const pathOrangeRef = useRef<SVGPathElement>(null);
  const dotBlueRef = useRef<SVGCircleElement>(null);
  const dotOrangeRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const pathBlue = pathBlueRef.current;
    const pathOrange = pathOrangeRef.current;
    const dotBlue = dotBlueRef.current;
    const dotOrange = dotOrangeRef.current;
    if (!pathBlue || !pathOrange || !dotBlue || !dotOrange) return;

    const lenB = pathBlue.getTotalLength();
    const lenO = pathOrange.getTotalLength();
    const t0 = performance.now();
    let raf = 0;
    function animDots(t: number) {
      const dt = ((t - t0) / 2200) % 1;
      const pB = pathBlue!.getPointAtLength(dt * lenB);
      const pO = pathOrange!.getPointAtLength(dt * lenO);
      dotBlue!.setAttribute('cx', String(pB.x));
      dotBlue!.setAttribute('cy', String(pB.y));
      dotOrange!.setAttribute('cx', String(pO.x));
      dotOrange!.setAttribute('cy', String(pO.y));
      raf = requestAnimationFrame(animDots);
    }
    raf = requestAnimationFrame(animDots);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="about-visual">
      <svg viewBox="0 0 400 400">
        <defs>
          <linearGradient id="g2" x1="0" y1="0" x2="400" y2="400">
            <stop offset="0" stopColor="#6fb3ff" />
            <stop offset="1" stopColor="#2f7dfa" />
          </linearGradient>
          <linearGradient id="g3" x1="400" y1="0" x2="0" y2="400">
            <stop offset="0" stopColor="#ff9a3c" />
            <stop offset="1" stopColor="#ff9a3c" stopOpacity=".4" />
          </linearGradient>
        </defs>
        <path
          ref={pathBlueRef}
          d="M40 40 C 140 60, 160 160, 200 200"
          fill="none"
          stroke="url(#g2)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".85"
        />
        <path
          ref={pathOrangeRef}
          d="M360 360 C 260 340, 240 240, 200 200"
          fill="none"
          stroke="url(#g3)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".85"
        />
        <image className="about-logo" href="/assets/logo-icon.png" x="176" y="176" width="48" height="48" />
        <circle ref={dotBlueRef} cx="40" cy="40" r="5" fill="#6fb3ff" />
        <circle ref={dotOrangeRef} cx="360" cy="360" r="5" fill="#ff9a3c" />
      </svg>
    </div>
  );
}
