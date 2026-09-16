'use client';

import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''} ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}
