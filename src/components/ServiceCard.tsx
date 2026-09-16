'use client';

import { useRef, type ReactNode } from 'react';

export default function ServiceCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} className={`svc-card ${className}`.trim()} onMouseMove={onMouseMove}>
      {children}
    </div>
  );
}
