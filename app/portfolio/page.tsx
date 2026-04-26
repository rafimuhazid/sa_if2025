"use client";

import BottomNav from "../components/BottomNav";

export default function PortfolioPage() {
  const lime = "#A3FF12";

  return (
    <main className="relative min-h-screen text-white pb-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 pt-16 flex flex-col items-center">
        {/* JUDUL: */}
        <h1 className="text-2xl font-black mb-6 tracking-wider uppercase" style={{ color: lime }}>
          PORTFOLIO
        </h1>

        <div className="w-full max-w-md px-4 space-y-4">

          {/* CARD 1 */}
          <div className="p-5 rounded-2xl border-2 flex justify-between items-center backdrop-blur-xl bg-black/40"
            style={{ borderColor: lime }}>
            <div>
              {/* NAMA PROJECT: */}
              <p style={{ color: lime }} className="font-black uppercase tracking-tight">
                APPLICATION SCANNER
              </p>
              <p className="text-[10px] text-white/60 font-bold tracking-tighter uppercase">APRIL 25, 2026</p>
            </div>

            <button className="px-4 py-2 rounded-full text-black font-black text-[10px] uppercase tracking-widest transition-transform active:scale-95"
              style={{ backgroundColor: lime }}>
              SEE MORE
            </button>
          </div>

          {/* CARD 2 */}
          <div className="p-5 rounded-2xl border-2 flex justify-between items-center backdrop-blur-xl bg-black/40"
            style={{ borderColor: lime }}>
            <div>
              <p style={{ color: lime }} className="font-black uppercase tracking-tight">
                APK VIDYA SAMBHADA
              </p>
              <p className="text-[10px] text-white/60 font-bold tracking-tighter uppercase">APRIL 25, 2026</p>
            </div>

            <button className="px-4 py-2 rounded-full text-black font-black text-[10px] uppercase tracking-widest transition-transform active:scale-95"
              style={{ backgroundColor: lime }}>
              SEE MORE
            </button>
          </div>

        </div>
      </div>

      <BottomNav />
    </main>
  );
}