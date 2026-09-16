import Link from 'next/link';
import Reveal from '@/components/Reveal';
import HeroCanvas from '@/components/HeroCanvas';

export default function Home() {
  return (
    <>
      <section id="hero" data-rail="Giriş">
        <HeroCanvas />
        <div className="wrap hero-inner">
          <div className="eyebrow-note">Dijital Pazarlama, Reklam ve Yazılım</div>
          <h1>
            Markanızın iki yönü,<br />
            tek hedefi: <span className="accent">Büyümek.</span>
          </h1>
          <p>
            Yazılım geliştirme ile dijital pazarlamayı tek çatı altında birleştiriyoruz. Web sitenizden
            reklam kampanyanıza, e-ticaretinizden marka kimliğinize kadar işinizi büyüten her şey burada.
          </p>
          <div className="hero-ctas">
            <Link href="/iletisim" className="btn-primary">Hemen Teklif Al</Link>
            <Link href="/hizmetler" className="btn-ghost">Hizmetleri Gör</Link>
          </div>
        </div>
      </section>

      <section id="highlights" data-rail="Neler Yapıyoruz">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">Neler Yapıyoruz</div>
            <h2>Üç uzmanlık, tek ekip</h2>
            <p>Her biri kendi başına da işinizi büyütür, birlikte çalıştıklarında etkisi katlanır.</p>
          </Reveal>
          <div className="highlight-grid">
            <Reveal as={Link} className="highlight-card" href="/hizmetler#yazilim-paket">
              <h3>Yazılım &amp; Tasarım</h3>
              <p>Web sitesi, mobil uygulama, kurumsal kimlik ve 7/24 teknik destek — dijital altyapınızı biz kuruyoruz.</p>
              <span className="go">Detaylı bak →</span>
            </Reveal>
            <Reveal as={Link} className="highlight-card" href="/hizmetler#reklam-paket">
              <h3>Dijital Pazarlama &amp; Reklam</h3>
              <p>Google ve Meta reklam yönetimi, reklam çekimi, drone prodüksiyon ve sosyal medya yönetimi.</p>
              <span className="go">Detaylı bak →</span>
            </Reveal>
            <Reveal as={Link} className="highlight-card" href="/hizmetler#eticaret-paket">
              <h3>E-ticaret &amp; Danışmanlık</h3>
              <p>Pazar yeri yönetimi, ürün bulma ve influencer destekli reklamla satışlarınızı büyütüyoruz.</p>
              <span className="go">Detaylı bak →</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="about-teaser">
        <div className="wrap">
          <Reveal as="div" className="cta-banner">
            <h2>İki farklı uzmanlık, tek yön: markanızın büyümesi.</h2>
            <Link href="/hakkimizda" className="btn-ghost">Hikayemizi Okuyun</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
