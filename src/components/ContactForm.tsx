'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          message: data.get('message'),
        }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Ad Soyad" required />
      <input type="tel" name="phone" placeholder="Telefon" required />
      <textarea name="message" placeholder="Projenizden bahsedin"></textarea>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Gönderiliyor…' : 'Gönder'}
      </button>
      {status === 'sent' && <p style={{ color: 'var(--blue-light)', fontSize: 14 }}>Mesajınız alındı, en kısa sürede dönüş yapacağız.</p>}
      {status === 'error' && <p style={{ color: 'var(--orange)', fontSize: 14 }}>Bir şeyler ters gitti, lütfen tekrar deneyin ya da telefonla ulaşın.</p>}
    </form>
  );
}
