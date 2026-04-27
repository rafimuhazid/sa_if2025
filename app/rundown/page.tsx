"use client";

import BottomNav from "../components/BottomNav";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

export default function RundownPage() {
  const lime = "#A3FF12";
  const router = useRouter();

  const Card = ({ title, time, duration, location, status }: any) => (
    <div
      className="relative p-5 rounded-[1.5rem] border-2 mb-5 flex items-start"
      style={{
        borderColor: lime,
        boxShadow: "0 0 15px rgba(163,255,18,0.2)",
        backgroundColor: "rgba(0,0,0,0.4)" 
      }}
    >
      <div className="flex flex-col items-center mr-5 min-w-[65px]">
        <div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-1"
          style={{ borderColor: lime }}
        >
          <FontAwesomeIcon icon={faClock} color={lime} className="text-xl" />
        </div>
        <span className="text-[10px] font-bold text-white/80">
          {time}
        </span>
      </div>

      {/* ISI KONTEN */}
      <div className="flex-1 pt-1">
        <p
          className="text-[15px] font-black mb-3 leading-tight italic"
          style={{ color: lime }}
        >
          {title}
        </p>

        <div className="space-y-2 text-white/90">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide">
            <FontAwesomeIcon icon={faClock} style={{ color: lime }} />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide">
            <FontAwesomeIcon icon={faLocationDot} style={{ color: lime }} />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* BADGE (LIVE/UPCOMING) */}
      {status && (
        <div className="absolute right-4 top-6">
            <span
            className="text-[9px] font-black px-3 py-[2px] rounded-full border-2 italic"
            style={{
                borderColor: lime,
                color: lime,
            }}
            >
            {status}
            </span>
        </div>
      )}
    </div>
  );

  return (
    <main className="relative min-h-screen text-white pb-28 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* HEADER */}
      <div className="relative z-10 flex items-center gap-4 px-6 py-8 border-b border-white/10">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center transition-transform active:scale-90"
          style={{ borderColor: lime }}
        >
          <FontAwesomeIcon icon={faArrowLeft} color={lime} />
        </button>

        <h1 className="font-black text-2xl tracking-tighter" style={{ color: lime }}>
          EVENT RUNDOWN
        </h1>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 pt-6 font-sans">
        <Card
          title="OPENING CEREMONY"
          time="09:00 AM"
          duration="30 MIN"
          location="MAIN AUDITORIUM"
        />

        <Card
          title="KEYNOTE: FUTURE OF TECH"
          time="09:30 AM"
          duration="60 MIN"
          location="MAIN AUDITORIUM"
        />

        <Card
          title="WORKSHOP: WEB DEVELOPMENT"
          time="11:00 AM"
          duration="90 MIN"
          location="ROOM A-101"
          status="LIVE"
        />

        <Card
          title="ISHOMA"
          time="12:30 AM"
          duration="90 MIN"
          location="ROOM A-101"
          status="UPCOMING"
        />
      </div>

      <div className="relative z-20">
        <BottomNav />
      </div>
    </main>
  );
}