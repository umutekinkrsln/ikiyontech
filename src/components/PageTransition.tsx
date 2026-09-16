'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function PageTransition() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [instant, setInstant] = useState(false);
  const firstRun = useRef(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) { setOpen(true); return; }

    if (firstRun.current) {
      firstRun.current = false;
      // first load: curtain starts covering, then opens
      const t = setTimeout(() => setOpen(true), 60);
      return () => clearTimeout(t);
    }

    // subsequent route changes: snap covered instantly, then animate open
    setInstant(true);
    setOpen(false);
    const raf = requestAnimationFrame(() => {
      setInstant(false);
      const t = setTimeout(() => setOpen(true), 40);
      return () => clearTimeout(t);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div id="page-transition" className={open ? 'pt-open' : ''}>
      <div className="pt-panel pt-left" style={instant ? { transition: 'none' } : undefined}></div>
      <div className="pt-panel pt-right" style={instant ? { transition: 'none' } : undefined}></div>
    </div>
  );
}
