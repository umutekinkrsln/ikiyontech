import { NextRequest, NextResponse } from 'next/server';

// Minimal stub: validates the payload and logs it for now.
// Swap the body of this function to call your real backend (NestJS/Spring Boot service,
// a database via Prisma, an email service, etc.) once that piece is ready — the
// contact form on /iletisim already calls this exact endpoint, so nothing on the
// frontend needs to change when you wire up persistence.
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, message } = data as { name?: string; phone?: string; message?: string };

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Ad ve telefon zorunlu.' }, { status: 400 });
    }

    // TODO: persist / forward this lead once the backend is ready.
    console.log('[iletisim] yeni talep:', { name, phone, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Geçersiz istek.' }, { status: 400 });
  }
}
