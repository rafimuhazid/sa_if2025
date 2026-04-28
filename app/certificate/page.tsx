'use client';

import BottomNav from '../components/BottomNav';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space',
});

export default function CertificatePage() {
  const lime = '#A3FF12';

  return (
    <main className={`${spaceGrotesk.className} relative min-h-screen text-white pb-28 flex flex-col items-center`}>
      {' '}
      {/* BG */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center pt-16">
        {/* JUDUL*/}
        <h1 className="text-2xl font-black mb-6 tracking-wider uppercase" style={{ color: lime }}>
          CERTIFICATE
        </h1>

        <div className="w-full max-w-md px-4 space-y-4">
          <div className="p-5 rounded-2xl border flex justify-between items-center backdrop-blur-md bg-black/40" style={{ borderColor: lime }}>
            <div>
              {/*NAMA*/}
              <p style={{ color: lime }} className="font-black uppercase tracking-tight">
                VIDYA SAMBHANDA
              </p>
              {/* TANGGAL*/}
              <p className="text-xs text-white/60 font-bold tracking-tighter">APRIL 25, 2026</p>
            </div>

            {/* BUTTON*/}
            <button className="px-4 py-2 rounded-full text-black font-black text-xs uppercase tracking-widest" style={{ backgroundColor: lime }}>
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
