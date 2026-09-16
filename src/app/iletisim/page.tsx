import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim — İkiyön Tech',
  description: 'İkiyön Tech ile iletişime geçin — telefon, WhatsApp, Instagram ve iletişim formu.',
};

export default function Iletisim() {
  return (
    <>
      <section id="page-hero" data-rail="Giriş">
        <div className="wrap">
          <Reveal as="div" className="sec-tag">İletişim</Reveal>
          <Reveal as="h1">Projenizi konuşalım</Reveal>
          <Reveal as="p">Formu doldurun, ya da doğrudan arayın — 7/24 ulaşabilirsiniz.</Reveal>
        </div>
      </section>

      <section id="iletisim" data-rail="İletişim">
        <div className="wrap">
          <Reveal as="div" id="contact-panel">
            <div>
              <div className="contact-info-item">
                <div className="label">Telefon</div>
                <a className="val" href="tel:+905343989057">0 534 398 90 57</a>
                <a className="val" href="tel:+905069935123">0 506 993 51 23</a>
              </div>
              <div className="contact-info-item">
                <div className="label">Web</div>
                <a className="val" href="https://www.ikiyontech.com" target="_blank" rel="noreferrer">www.ikiyontech.com</a>
              </div>
              <div className="contact-info-item">
                <div className="label">Instagram</div>
                <a className="val" href="https://instagram.com/ikiyontech" target="_blank" rel="noreferrer">@ikiyontech</a>
              </div>
              <div className="contact-info-item">
                <div className="label">WhatsApp</div>
                <a className="val" href="https://wa.me/905343989057" target="_blank" rel="noreferrer">@ikiyontech</a>
              </div>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
