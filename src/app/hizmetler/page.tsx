import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz — İkiyön Tech',
  description: 'Yazılım, pazarlama, reklam prodüksiyon ve e-ticaret paketleri, tekil hizmetler ve güncel fiyatlandırma.',
};

export default function Hizmetler() {
  return (
    <>
      <section id="page-hero" data-rail="Giriş">
        <div className="wrap">
          <Reveal as="div" className="sec-tag">Hizmetlerimiz</Reveal>
          <Reveal as="h1">A&apos;dan Z&apos;ye dijital çözümler</Reveal>
          <Reveal as="p">Paket alıp uçtan uca teslim alabilir, ya da tek bir ihtiyacınız için tekil hizmet seçebilirsiniz — ikisi de bizde.</Reveal>
        </div>
      </section>

      <section id="yazilim-paket" data-rail="Yazılım Paketleri">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">Yazılım Paketleri</div>
            <h2>İhtiyacınıza uygun yazılım çözümü</h2>
            <p>Tek seferlik proje bedeli — lansman fiyatlarımız sınırlı süre geçerlidir.</p>
          </Reveal>
          <Reveal as="div" className="pricing-grid">
            <div className="pricing-card">
              <h4>Gümüş Paket</h4>
              <div className="tagline">Sağlam bir başlangıç</div>
              <div className="price-old">7.500 TL</div>
              <div className="price-new">5.900 TL <span className="unit">/ tek seferlik</span></div>
              <div className="price-badge">Lansman Fiyatı</div>
              <ul>
                <li>Kurumsal web site (5 sayfa, mobil uyumlu)</li>
                <li>Domain ve hosting kurulumu</li>
                <li>Temel yönetim paneli</li>
                <li>Temel SEO ayarları</li>
                <li>İletişim formu ve entegrasyonu</li>
                <li>SSL güvenlik sertifikası</li>
                <li>3 ay teknik destek</li>
              </ul>
              <Link href="/iletisim" className="btn-ghost pricing-cta">Teklif Al</Link>
            </div>
            <div className="pricing-card featured">
              <h4>Gold Paket</h4>
              <div className="tagline">Daha fazla özellik, daha fazla güç</div>
              <div className="price-old">11.900 TL</div>
              <div className="price-new">9.900 TL <span className="unit">/ tek seferlik</span></div>
              <div className="price-badge">Lansman Fiyatı</div>
              <ul>
                <li>Gelişmiş web site (sınırsız sayfa, mobil uyumlu)</li>
                <li>Gelişmiş yönetim paneli</li>
                <li>Ürün / hizmet yönetimi</li>
                <li>Blog / içerik yönetimi</li>
                <li>Detaylı SEO optimizasyonu</li>
                <li>Form ve entegrasyonları</li>
                <li>Analitik raporlama (Google Analytics)</li>
                <li>Güvenlik önlemleri</li>
                <li>Domain ve hosting (1 yıl)</li>
                <li>6 ay teknik destek</li>
              </ul>
              <Link href="/iletisim" className="btn-primary pricing-cta">Teklif Al</Link>
            </div>
            <div className="pricing-card">
              <h4>Premium Paket</h4>
              <div className="tagline">Tam kapsamlı profesyonel çözüm</div>
              <div className="price-old">21.900 TL</div>
              <div className="price-new">18.900 TL <span className="unit">/ tek seferlik</span></div>
              <div className="price-badge">Lansman Fiyatı</div>
              <ul>
                <li>Özel yazılım geliştirme (web platform / portal)</li>
                <li>Mobil uygulama (iOS &amp; Android)</li>
                <li>E-ticaret sistemi / çoklu satıcı</li>
                <li>Özel yönetim paneli</li>
                <li>API entegrasyonları (3. parti sistemler)</li>
                <li>Detaylı analiz ve raporlama</li>
                <li>Gelişmiş SEO ve performans optimizasyonu</li>
                <li>Üst düzey güvenlik ve yedekleme</li>
                <li>Domain ve hosting (1 yıl)</li>
                <li>12 ay teknik destek</li>
                <li>Proje danışmanlığı ve yol haritası</li>
              </ul>
              <Link href="/iletisim" className="btn-ghost pricing-cta">Teklif Al</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reklam-paket" data-rail="Reklam Prodüksiyon">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">Pazarlama &amp; Reklam Prodüksiyon Paketleri</div>
            <h2>Aylık içerik ve reklam yönetimi</h2>
            <p>Markanız için sürekli, planlı bir prodüksiyon ve reklam akışı.</p>
          </Reveal>
          <Reveal as="div" className="pricing-grid two-col">
            <div className="pricing-card">
              <h4>Gold Paket</h4>
              <div className="tagline">Drone çekimi hariç</div>
              <div className="price-new">19.999 TL <span className="unit">/ aylık</span></div>
              <div className="price-badge">&nbsp;</div>
              <ul>
                <li>Profesyonel reklam çekimi (fotoğraf + video)</li>
                <li>Video kurgu ve montaj</li>
                <li>Sosyal medya uyumlu formatlar (Reels, Story, Feed)</li>
                <li>Tanıtım filmi (1-2 dakika)</li>
                <li>Renk düzenleme ve profesyonel edit</li>
                <li>2 tur revizyon hakkı</li>
                <li>Sosyal medya danışmanlığı</li>
                <li>Reklam yayınlama desteği (Meta ADS)</li>
                <li>Raporlama ve performans takibi</li>
                <li>Haftalık video çekimi planlama</li>
              </ul>
              <Link href="/iletisim" className="btn-ghost pricing-cta">Teklif Al</Link>
            </div>
            <div className="pricing-card featured">
              <h4>Premium Paket</h4>
              <div className="tagline">Drone çekimi dahil, markanıza sınır yok</div>
              <div className="price-new">24.999 TL <span className="unit">/ aylık</span></div>
              <div className="price-badge">&nbsp;</div>
              <ul>
                <li>Gold paketteki her şey</li>
                <li>Drone ile havadan çekim</li>
                <li>Web site yapımı</li>
                <li>Uygulama yapımı</li>
                <li>Öncelikli yayın öncesi kontroller</li>
              </ul>
              <Link href="/iletisim" className="btn-primary pricing-cta">Teklif Al</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="eticaret-paket" data-rail="E-ticaret Paketleri">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">E-ticaret Paketleri</div>
            <h2>Pazar yerinde büyüme odaklı çözüm</h2>
            <p>Trendyol, Hepsiburada, Amazon ve daha fazlası için uçtan uca yönetim.</p>
          </Reveal>
          <Reveal as="div" className="pricing-grid">
            <div className="pricing-card">
              <h4>Gümüş Paket</h4>
              <div className="tagline">Sağlam bir başlangıç</div>
              <div className="price-old">15.000 TL</div>
              <div className="price-new">9.999 TL <span className="unit">/ aylık</span></div>
              <div className="price-badge">İndirimli Fiyat</div>
              <ul>
                <li>E-ticaret danışmanlığı</li>
                <li>Pazar yeri açılış desteği (Trendyol, Hepsiburada, Amazon vb.)</li>
                <li>Ürün listeleme (50 adet)</li>
                <li>Temel SEO ayarları</li>
                <li>Rakip ve pazar analizi</li>
                <li>Aylık raporlama</li>
                <li>1 ay teknik destek</li>
              </ul>
              <Link href="/iletisim" className="btn-ghost pricing-cta">Teklif Al</Link>
            </div>
            <div className="pricing-card featured">
              <h4>Gold Paket</h4>
              <div className="tagline">Büyüme odaklı çözüm</div>
              <div className="price-old">35.000 TL</div>
              <div className="price-new">24.999 TL <span className="unit">/ aylık</span></div>
              <div className="price-badge">İndirimli Fiyat</div>
              <ul>
                <li>E-ticaret danışmanlığı &amp; pazar yeri yönetimi</li>
                <li>Mağaza kurulumu ve optimizasyonu</li>
                <li>Ürün listeleme (200 adet)</li>
                <li>Detaylı SEO optimizasyonu</li>
                <li>Reklam yönetimi desteği (Trendyol, Hepsiburada, Amazon vb.)</li>
                <li>Rakip analizi ve fiyatlandırma stratejisi</li>
                <li>Aylık raporlama ve performans optimizasyonu</li>
                <li>Danışmanlık ve strateji toplantıları (ayda 2 kez)</li>
                <li>Öncelikli teknik destek</li>
              </ul>
              <Link href="/iletisim" className="btn-primary pricing-cta">Teklif Al</Link>
            </div>
            <div className="pricing-card">
              <h4>Premium Paket</h4>
              <div className="tagline">Tam kapsamlı profesyonel çözüm</div>
              <div className="price-old">65.000 TL</div>
              <div className="price-new">39.999 TL <span className="unit">/ aylık</span></div>
              <div className="price-badge">İndirimli Fiyat</div>
              <ul>
                <li>Tüm pazar yeri yönetimi (Trendyol, Hepsiburada, Amazon vb.)</li>
                <li>Sınırsız ürün listeleme</li>
                <li>Mağaza optimizasyonu ve markalaşma</li>
                <li>Profesyonel reklam yönetimi (tüm kanallar)</li>
                <li>Gelişmiş SEO ve içerik optimizasyonu</li>
                <li>Ürün fotoğraf &amp; video çekim organizasyonu</li>
                <li>Haftalık rapor ve strateji toplantıları</li>
                <li>Özel danışmanlık hattı</li>
                <li>Yeni pazar yeri entegrasyon desteği</li>
              </ul>
              <Link href="/iletisim" className="btn-ghost pricing-cta">Teklif Al</Link>
            </div>
          </Reveal>

          <Reveal as="div" className="subsection-tag">
            <strong>Özel kapsamlı mı istersiniz?</strong> Paket yerine yalnızca ihtiyacınız olan hizmeti aylık olarak da alabilirsiniz:
          </Reveal>
          <Reveal as="div" className="svc-grid">
            <ServiceCard><h4>E-Ticaret Danışmanlığı &amp; Pazar Yeri Yönetimi</h4><div className="price">19.999 TL&apos;den <span>başlayan aylık paket</span></div></ServiceCard>
            <ServiceCard><h4>E-Ticaret Ürün Bulma &amp; Ticari Danışmanlık</h4><div className="price">29.999 TL&apos;den <span>başlayan aylık paket</span></div></ServiceCard>
            <ServiceCard><h4>Influencer Danışmanlığı &amp; Destekli Reklam</h4><div className="price">12.499 TL&apos;den <span>başlayan aylık paket</span></div></ServiceCard>
          </Reveal>
        </div>
      </section>

      <section id="tekil" data-rail="Tekil Hizmetler">
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="sec-tag">Tekil Hizmetler</div>
            <h2>Tek bir ihtiyacınız mı var?</h2>
            <p>Paket almadan da, sadece istediğiniz hizmeti alabilirsiniz.</p>
          </Reveal>

          <div className="svc-group">
            <Reveal as="div" className="svc-group-head"><h3>Yazılım &amp; Tasarım</h3><span>Dijital altyapınız</span></Reveal>
            <Reveal as="div" className="svc-grid">
              <ServiceCard><h4>Web Sitesi Yapımı</h4><div className="price">6.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Web &amp; Mobil Uygulama Geliştirme</h4><div className="price">7.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Logo &amp; Kurumsal Kimlik</h4><div className="price">2.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Sosyal Medya Tasarımı</h4><div className="price">2.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>7/24 Teknik Servis</h4><div className="price">2.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
            </Reveal>
          </div>

          <div className="svc-group" style={{ marginTop: 44 }}>
            <Reveal as="div" className="svc-group-head"><h3>Dijital Pazarlama &amp; Reklam</h3><span>Görünürlüğünüz ve kampanyalarınız</span></Reveal>
            <Reveal as="div" className="svc-grid">
              <ServiceCard><h4>Google ADS Yönetimi</h4><div className="price">2.999 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Reklam Çekimi &amp; Tanıtım Filmi</h4><div className="price">4.999 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Drone Çekimi</h4><div className="price">6.499 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Video / Kurgu / Edit</h4><div className="price">1.999 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
              <ServiceCard><h4>Sosyal Medya Yönetimi</h4><div className="price">3.500 TL&apos;den <span>başlayan fiyatlarla</span></div></ServiceCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="wrap">
          <Reveal as="div" className="cta-banner">
            <h2>Hangi paketin size uygun olduğuna birlikte karar verelim.</h2>
            <Link href="/iletisim" className="btn-primary">Hemen Teklif Al</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
