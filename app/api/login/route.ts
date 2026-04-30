import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { npm, password } = body;

  // contoh validasi dummy (nanti ganti database)
  if (npm === '12345678' && password === 'admin') {
    return NextResponse.json({
      success: true,
      message: 'Login berhasil',
    });
  }

  return NextResponse.json(
    { success: false, message: 'NPM atau password salah' },
    { status: 401 }
  );
}