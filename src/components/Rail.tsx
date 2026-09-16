'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Rail() {
  const pathname = usePathname();
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    // rebuild nodes for the sections present on this page
    track.querySelectorAll('.rail-node').forEach(n => n.remove());
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-rail]'));
    if (!sections.length) return;

    const nodes = sections.map(() => {
      const n = document.createElement('div');
      n.className = 'rail-node';
      track.appendChild(n);
      return n;
    });
    nodes.forEach((n, i) => { n.style.top = `${(i / Math.max(nodes.length - 1, 1)) * 100}%`; });

    function update() {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
      fill!.style.height = `${pct * 100}%`;
      sections.forEach((sec, i) => {
        const r = sec.getBoundingClientRect();
        const active = r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.2;
        nodes[i].classList.toggle('active', active);
      });
    }
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  return (
    <div id="rail">
      <div id="rail-track" ref={trackRef}>
        <div id="rail-fill" ref={fillRef}></div>
      </div>
    </div>
  );
}
