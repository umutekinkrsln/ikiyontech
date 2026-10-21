import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import AboutDiagram from '@/components/AboutDiagram';

export const metadata: Metadata = {
  title: 'Hakkımızda — İkiyön Tech',
  description: 'İkiyön Tech\'in hikayesi: yazılım ve dijital pazarlamayı tek yönde birleştiren ekip.',
};

export default function Hakkimizda() {
  return (
    <>
      <section id="page-hero" data-rail="Giriş">
        <div className="wrap">
          <Reveal as="div" className="sec-tag">Hakkımızda</Reveal>
          <Reveal as="h1">İki farklı uzmanlık, tek yön</Reveal>
          <Reveal as="p">İkiyön Tech, yazılım ve dijital pazarlamayı ayrı ayrı değil, birlikte kurgulayan bir ekip olarak yola çıktı.</Reveal>
          <Reveal as="p">Muhammet Kemal Demir - Umut Ekin Karaslan </Reveal>
        </div>
      </section>

      <section id="about" data-rail="Hikayemiz">
        <div className="wrap about-grid">
          <Reveal as="div" className="about-copy">
            <p>Bir tarafta ürünü inşa eden, diğer tarafta onu doğru kitleye ulaştıran iki bakış açısını aynı hedefe yönlendiriyoruz. Yazılım tarafı sağlam bir dijital altyapı kurarken, pazarlama tarafı bu altyapıyı doğru kitleyle buluşturuyor.</p>
            <p>Adımız buradan geliyor: iki farklı yön, tek bir büyüme hedefinde birleşiyor.</p>
            <div className="founders">
              <div className="founder">
                <div className="dot"></div>
                <div>
                  <div className="founder-name">Yazılım &amp; Ürün Yönü</div>
                  <div className="founder-role">Web, uygulama ve sistem geliştirme</div>
                </div>
              </div>
              <div className="founder">
                <div className="dot" style={{ background: 'var(--orange)', boxShadow: '0 0 10px var(--orange)' }}></div>
                <div>
                  <div className="founder-name">Pazarlama &amp; Reklam Yönü</div>
                  <div className="founder-role">Kampanya, prodüksiyon ve büyüme</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal as="div">
            <AboutDiagram />
          </Reveal>
        </div>
      </section>

      <section id="yaklasim" data-rail="Yaklaşımımız">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">Yaklaşımımız</div>
            <h2>Nasıl çalışıyoruz</h2>
          </Reveal>
          <div className="approach-grid">
            <Reveal as="div" className="approach-card">
              <h4>Tek noktadan yönetim</h4>
              <p>Yazılım ve pazarlama ekipleri ayrı ayrı değil, aynı proje üzerinde birlikte çalışır — bilgi kaybı olmaz.</p>
            </Reveal>
            <Reveal as="div" className="approach-card">
              <h4>Ölçülebilir sonuç</h4>
              <p>Her kampanya ve her geliştirme adımı, işinize gerçekten katkısı üzerinden takip edilir.</p>
            </Reveal>
            <Reveal as="div" className="approach-card">
              <h4>7/24 destek</h4>
              <p>Site yayına girdikten, reklam yayınlandıktan sonra da yanınızdayız.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
