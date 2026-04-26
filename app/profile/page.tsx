"use client";

import BottomNav from "../components/BottomNav";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faCalendar,
  faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";

export default function ProfilePage() {
  const lime = "#A3FF12";
  const router = useRouter();

  return (
    <main className="relative min-h-screen text-white pb-28">

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

      {/* CONTENT */}
      <div className="relative z-10 pt-16 flex flex-col items-center">

        {/* FOTO PROFILE */}
        <div className="relative">
          <img
            src="/img/profile.png"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-2"
            style={{
              borderColor: lime,
              boxShadow: "0 0 20px rgba(163,255,18,0.6)",
            }}
          />
        </div>

        {/* NAME: */}
        <div className="flex items-center gap-2 mt-6 uppercase">
          <FontAwesomeIcon icon={faUser} color={lime} />
          <h2 style={{ color: lime }} className="text-xl font-black tracking-tight">
            WILSON LOSIENTO
          </h2>
        </div>

        {/* EDIT BUTTON: */}
        <button
          onClick={() => router.push("/profile/edit")}
          className="mt-3 px-6 py-2 rounded-full text-black font-black text-xs tracking-widest cursor-pointer uppercase transition-transform active:scale-95"
          style={{ backgroundColor: lime }}
        >
          EDIT PROFILE
        </button>

        <div className="mt-8 w-full max-w-md px-4">

          {/* CARD INFO */}
          <div
            className="p-6 rounded-[2rem] border-2 backdrop-blur-xl bg-black/40 space-y-4"
            style={{ borderColor: lime }}
          >
            <div className="flex items-center gap-4 text-xs font-bold tracking-wide">
              <FontAwesomeIcon icon={faEnvelope} color={lime} className="text-base" />
              <p><span className="opacity-60"></span> alex.johnson@email.com</p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wide">
              <FontAwesomeIcon icon={faPhone} color={lime} className="text-base" />
              <p><span className="opacity-60"></span> +1 555 123</p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold tracking-wide">
              <FontAwesomeIcon icon={faCalendar} color={lime} className="text-base" />
              <p><span className="opacity-60"></span> 2025/2026</p>
            </div>
          </div>

          {/* SIGN OUT */}
          <button
            className="w-full mt-6 py-4 border-2 rounded-2xl flex items-center justify-center gap-3 cursor-pointer font-black text-sm tracking-[0.2em] uppercase transition-all active:bg-lime-400/10"
            style={{ borderColor: lime, color: lime }}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            SIGN OUT
          </button>

        </div>

      </div>

      <BottomNav />
    </main>
  );
}