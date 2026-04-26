"use client";

import BottomNav from "../components/BottomNav";

export default function ScanPage() {
  const lime = "#A3FF12";

  return (
    <main className="relative min-h-screen text-white flex items-center justify-center pb-28">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* CARD */}
      <div
        className="relative z-10 w-[320px] p-6 rounded-[32px] border backdrop-blur-xl bg-black/40 text-center"
        style={{
          borderColor: lime,
          boxShadow: "0 0 30px rgba(163,255,18,0.25)",
        }}
      >

        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center text-xl"
            style={{ borderColor: lime }}
          >
            📷
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-lg font-bold" style={{ color: lime }}>
          Scan Presence Code
        </h2>

        <p className="text-xs text-white/60 mb-6">
          Position the QR code within the frame
        </p>

        {/* SCAN FRAME (UJUNG SAJA) */}
        <div className="relative w-[220px] h-[220px] mx-auto mb-6">

          <div className="absolute w-8 h-8 border-t-2 border-l-2 top-0 left-0" style={{ borderColor: lime }} />
          <div className="absolute w-8 h-8 border-t-2 border-r-2 top-0 right-0" style={{ borderColor: lime }} />
          <div className="absolute w-8 h-8 border-b-2 border-l-2 bottom-0 left-0" style={{ borderColor: lime }} />
          <div className="absolute w-8 h-8 border-b-2 border-r-2 bottom-0 right-0" style={{ borderColor: lime }} />

        </div>

        {/* BUTTON */}
        <button
          className="w-full py-3 rounded-full font-bold text-black cursor-pointer"
          style={{
            backgroundColor: lime,
            boxShadow: "0 0 20px rgba(163,255,18,0.6)",
          }}
        >
          SCAN NOW
        </button>

      </div>

      <BottomNav />
    </main>
  );
}