import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Rail from '@/components/Rail';
import PageTransition from '@/components/PageTransition';

export const metadata: Metadata = {
  title: 'İkiyön Tech — Dijital Pazarlama, Reklam ve Yazılım Ajansı',
  description: 'Yazılım, dijital pazarlama, reklam prodüksiyonu ve e-ticaret danışmanlığını tek çatı altında birleştiren ajans.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition />
        <div className="glow-orb blue"></div>
        <div className="glow-orb orange"></div>
        <div className="glow-orb blue2"></div>
        <Rail />
        <Nav />
        {children}
        <footer className="wrap">
          <div>İkiyön Tech — Markanızın iki yönü, tek hedefi: Büyümek.</div>
          <div>© 2026 İkiyön Tech</div>
        </footer>
      </body>
    </html>
  );
}
