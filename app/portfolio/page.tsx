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
        <h1 className="text-2xl font-bold mb-6" style={{ color: lime }}>
          PORTFOLIO
        </h1>

        <div className="w-full max-w-md px-4 space-y-4">

          <div className="p-5 rounded-2xl border flex justify-between items-center backdrop-blur-xl bg-black/40"
            style={{ borderColor: lime }}>
            <div>
              <p style={{ color: lime }} className="font-bold">APPLICATION SCANNER</p>
              <p className="text-xs text-white/60">APRIL 25, 2026</p>
            </div>

            <button className="px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: lime }}>
              SEE MORE
            </button>
          </div>

          <div className="p-5 rounded-2xl border flex justify-between items-center backdrop-blur-xl bg-black/40"
            style={{ borderColor: lime }}>
            <div>
              <p style={{ color: lime }} className="font-bold">APK VIDYA SAMBHADA</p>
              <p className="text-xs text-white/60">APRIL 25, 2026</p>
            </div>

            <button className="px-4 py-2 rounded-full text-black"
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