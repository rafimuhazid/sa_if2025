"use client";

import BottomNav from "../components/BottomNav";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDollarSign,
  faArrowTrendDown,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";

export default function FundPage() {
  const lime = "#A3FF12";
  const router = useRouter();

  // Komponen Card Transaksi yang bisa dipakai ulang
  const TransactionCard = ({ division, date, amount }: any) => (
    <div
      className="p-5 rounded-[1.5rem] border-2 flex justify-between items-center bg-black/20 mb-4"
      style={{ borderColor: lime }}
    >
      <div>
        <p className="text-xs font-black tracking-wider uppercase" style={{ color: lime }}>
          DIVISI {division}
        </p>
        <p className="text-[10px] font-bold text-white/50 tracking-tighter mt-1">{date}</p>
      </div>

      <p className="text-red-500 font-black text-xl italic tracking-tighter">
        {amount}
      </p>
    </div>
  );

  return (
    <main className="relative min-h-screen text-white pb-32 overflow-hidden">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* HEADER */}
      <div className="relative z-10 flex items-center gap-4 px-6 py-8 border-b border-white/10">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center"
          style={{ borderColor: lime }}
        >
          <FontAwesomeIcon icon={faArrowLeft} color={lime} />
        </button>
        <h1 className="font-black text-2xl tracking-tighter" style={{ color: lime }}>
          FUND TRANSPARENCY
        </h1>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-6 space-y-8">
        
        {/* BUDGET OVERVIEW CARD */}
        <div
          className="p-6 rounded-[2rem] border-2 bg-black/40 backdrop-blur-sm"
          style={{ borderColor: lime, boxShadow: `0 0 20px rgba(163,255,18,0.2)` }}
        >
          <div className="flex items-center gap-5 mb-5">
            <div className="w-16 h-16 rounded-2xl border-2 flex items-center justify-center" style={{ borderColor: lime }}>
              <FontAwesomeIcon icon={faDollarSign} color={lime} className="text-3xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white/70 tracking-widest uppercase mb-1">TOTAL BUDGET</p>
              <h2 style={{ color: lime }} className="font-black text-3xl italic tracking-tight">Rp. 4.500.000</h2>
            </div>
          </div>
          <div className="flex justify-between items-end mb-2 px-1 text-[11px] font-black italic uppercase">
            <p className="text-white/80">SPENT: Rp.3.200.000</p>
            <span style={{ color: lime }}>65%</span>
          </div>
          <div className="w-full h-4 bg-black/50 rounded-full border-2 overflow-hidden" style={{ borderColor: lime }}>
            <div className="h-full rounded-full" style={{ width: "65%", backgroundColor: lime, boxShadow: `0 0 15px ${lime}` }} />
          </div>
        </div>

        {/* SECTION: DIVISION TRANSACTIONS */}
        <div className="space-y-4">
          <p style={{ color: lime }} className="font-black text-sm tracking-widest px-1 uppercase">
            Division Transactions
          </p>

          {/* DIVISI */}
          <TransactionCard 
            division="KPK" 
            date="MARCH 10, 2026" 
            amount="Rp.1.200.000" 
          />

          <TransactionCard 
            division="P3K" 
            date="MARCH 12, 2026" 
            amount="Rp.850.000" 
          />

          <TransactionCard 
            division="PDD" 
            date="MARCH 15, 2026" 
            amount="Rp.1.150.000" 
          />
        </div>
      </div>

      <div className="relative z-20">
        <BottomNav />
      </div>
    </main>
  );
}