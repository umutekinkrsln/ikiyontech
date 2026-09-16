'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; offset: number; r: number; color: string };

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    sectionRef.current = document.getElementById('hero');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0, H = 0, cx = 0, cy = 0;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    function resize() {
      if (!canvas) return;
      W = canvas.width = canvas.offsetWidth * dpr;
      H = canvas.height = canvas.offsetHeight * dpr;
      if (window.innerWidth <= 900) {
        cx = W * 0.5; cy = H * 0.30;
      } else {
        cx = W * 0.72; cy = H * 0.5;
      }
    }
    resize();
    window.addEventListener('resize', resize);

    let mouseX = 0.5, mouseY = 0.5;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove);

    const PERIOD = 2600;
    function makeParticles(count: number, fromX: number, fromY: number, color: string): Particle[] {
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: fromX + (Math.random() - 0.5) * W * 0.5,
          y: fromY + (Math.random() - 0.5) * H * 0.6,
          offset: (Math.random() - 0.5) * 0.35,
          r: 1 + Math.random() * 1.8,
          color,
        });
      }
      return arr;
    }
    let blueParticles = makeParticles(60, 0, H * 0.3, '111,179,255');
    let orangeParticles = makeParticles(60, W, H * 0.75, '255,154,60');

    function drawParticles(list: Particle[], target: { x: number; y: number }, phase: number) {
      list.forEach(p => {
        let prog = (phase + p.offset) % 1;
        if (prog < 0) prog += 1;
        const ease = prog * prog * (3 - 2 * prog);
        const tx = target.x + (mouseX - 0.5) * 40;
        const ty = target.y + (mouseY - 0.5) * 40;
        const x = p.x + (tx - p.x) * ease;
        const y = p.y + (ty - p.y) * ease;
        const alpha = Math.sin(prog * Math.PI);
        ctx!.beginPath();
        ctx!.arc(x, y, p.r * dpr, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color},${alpha * 0.9})`;
        ctx!.fill();
      });
    }

    function drawArrowGlow(t: { x: number; y: number }, intensity: number) {
      const grad = ctx!.createRadialGradient(t.x, t.y, 0, t.x, t.y, 130 * dpr);
      grad.addColorStop(0, `rgba(160,200,255,${0.18 + intensity * 0.35})`);
      grad.addColorStop(1, 'rgba(160,200,255,0)');
      ctx!.beginPath();
      ctx!.fillStyle = grad;
      ctx!.arc(t.x, t.y, 130 * dpr, 0, Math.PI * 2);
      ctx!.fill();
    }

    let raf = 0;
    function loop(t: number) {
      ctx!.clearRect(0, 0, W, H);
      const tgt = { x: cx, y: cy };
      const phase = (t % PERIOD) / PERIOD;
      const peak = phase > 0.78;
      logoRef.current?.classList.toggle('peak', peak);
      const intensity = peak ? (phase - 0.78) / 0.22 : 0;
      drawArrowGlow(tgt, intensity);
      drawParticles(blueParticles, tgt, phase);
      drawParticles(orangeParticles, tgt, phase);
      raf = requestAnimationFrame(loop);
    }

    if (!reduced) {
      raf = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, W, H);
      logoRef.current?.classList.add('peak');
    }

    let observer: IntersectionObserver | null = null;
    if (!reduced && sectionRef.current) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !raf) raf = requestAnimationFrame(loop);
          if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; }
        });
      });
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <canvas id="heroCanvas" ref={canvasRef}></canvas>
      <img id="heroLogo" ref={logoRef} className="hero-logo" src="/assets/logo-icon.png" alt="" />
    </>
  );
}
