'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false); // close mobile menu on route change
  }, [pathname]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav id="nav" className={solid ? 'solid' : ''}>
        <Link href="/" className="brand">
          <img src="/assets/logo-icon.png" alt="İkiyön Tech" className="brand-mark" />
          İKİYÖN <span className="tech">TECH</span>
        </Link>
        <div id="navlinks" className={`navlinks${open ? ' open' : ''}`}>
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/iletisim" className="navcta">Teklif Al</Link>
        <button
          id="menuToggle"
          className="menu-toggle"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div id="menu-backdrop" className={open ? 'open' : ''} onClick={() => setOpen(false)}></div>
    </>
  );
}
