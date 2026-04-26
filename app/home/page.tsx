"use client";

import BottomNav from "../components/BottomNav";
import { motion } from "framer-motion";

export default function HomePage() {
  const lime = "#A3FF12";

  const MenuCard = ({ title, desc, icon }: any) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-5 rounded-2xl border cursor-pointer"
      style={{
        borderColor: lime,
        boxShadow: "0 0 15px rgba(163,255,18,0.2)",
      }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center border"
          style={{ borderColor: lime }}
        >
          {icon}
        </div>

        <div>
          <p className="text-sm font-bold" style={{ color: lime }}>
            {title}
          </p>
          <p className="text-xs text-white/60">{desc}</p>
        </div>
      </div>

      <span style={{ color: lime }}>→</span>
    </motion.div>
  );

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center pt-16 pb-28">
      
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      {/* HEADER */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/img/logo.png" className="w-10 h-10" />
      </div>

      <div className="absolute top-6 right-6 z-10">
        <div
          className="w-10 h-10 rounded-full border flex items-center justify-center"
          style={{ borderColor: lime }}
        >
          <span style={{ color: lime }}>i</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="z-10 w-full max-w-md px-4 flex flex-col gap-6 mt-16">
        
        {/* TITLE CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border flex justify-center items-center"
        style={{
          borderColor: lime,
          boxShadow: "0 0 20px rgba(163,255,18,0.3)",
        }}
      >
        <img
          src="/img/vidya.png"
          alt="Vidya Sambandha"
          className="w-full"
        />
      </motion.div>

        {/* MENU */}
        <MenuCard
          title="FUND TRANSPARENCY"
          desc="Track event budget & expenses"
          icon="💲"
        />

        <MenuCard
          title="EVENT RUNDOWN"
          desc="Check event schedules & timeline"
          icon="📅"
        />
      </div>

      {/* NAVBAR */}
      <BottomNav />
    </main>
  );
}