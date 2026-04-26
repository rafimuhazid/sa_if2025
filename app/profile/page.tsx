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

        {/* FOTO PROFILE (DISPLAY SAJA) */}
        <img
          src="/img/profile.png"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-2"
          style={{
            borderColor: lime,
            boxShadow: "0 0 20px rgba(163,255,18,0.6)",
          }}
        />

        {/* NAME */}
        <div className="flex items-center gap-2 mt-4">
          <FontAwesomeIcon icon={faUser} color={lime} />
          <h2 style={{ color: lime }} className="text-lg font-bold">
            WILSON LOSIENTO
          </h2>
        </div>

        {/* EDIT BUTTON (PINDAH KE HALAMAN EDIT) */}
        <button
          onClick={() => router.push("/profile/edit")}
          className="mt-2 px-4 py-2 rounded-full text-black font-semibold cursor-pointer"
          style={{ backgroundColor: lime }}
        >
          EDIT PROFILE
        </button>

        <div className="mt-6 w-full max-w-md px-4">

          {/* CARD */}
          <div
            className="p-5 rounded-2xl border backdrop-blur-xl bg-black/40 space-y-3"
            style={{ borderColor: lime }}
          >

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} color={lime} />
              <p>Email: alex.johnson@email.com</p>
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} color={lime} />
              <p>Phone: +1 555 123</p>
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCalendar} color={lime} />
              <p>Academic Year: 2025/2026</p>
            </div>

          </div>

          {/* SIGN OUT */}
          <button
            className="w-full mt-4 py-3 border rounded-xl flex items-center justify-center gap-2 cursor-pointer"
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