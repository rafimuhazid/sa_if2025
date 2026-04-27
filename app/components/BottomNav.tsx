"use client";

import { useRouter, usePathname } from "next/navigation";
import { Home, FileText, Briefcase, User, ScanLine } from "lucide-react";

export default function BottomNav() {
  const router = useRouter();
  const path = usePathname();
  const lime = "#A3FF12";

  const Item = ({ Icon, route }: any) => {
    const isActive = path === route;

    return (
      <button
        onClick={() => {
          if (!isActive) router.push(route);
        }}
        className="flex-1 flex justify-center cursor-pointer"
      >
        <Icon
          size={22}
          strokeWidth={2.5}
          color={isActive ? lime : "white"}
          style={{
            filter: isActive
              ? "drop-shadow(0 0 6px #A3FF12)"
              : "none",
          }}
        />
      </button>
    );
  };

  const isScanActive = path === "/scan";

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50">
      <div
        className="flex items-center px-4 py-3 rounded-full bg-black border"
        style={{
          borderColor: lime,
          boxShadow: "0 0 20px rgba(163,255,18,0.3)",
        }}
      >
        {/* HOME */}
        <Item Icon={Home} route="/home" />

        {/* CERTIFICATE */}
        <Item Icon={FileText} route="/certificate" />

        {/* SCAN */}
        <div
          onClick={() => router.push("/scan")}
          className="w-14 h-14 mx-2 rounded-full flex items-center justify-center border cursor-pointer"
          style={{
            borderColor: lime,
            boxShadow: isScanActive
              ? "0 0 25px rgba(163,255,18,1)"
              : "0 0 15px rgba(163,255,18,0.5)",
          }}
        >
          <ScanLine
            size={26}
            strokeWidth={2.5}
            color={isScanActive ? lime : "white"}
            style={{
              filter: isScanActive
                ? "drop-shadow(0 0 8px #A3FF12)"
                : "none",
            }}
          />
        </div>

        {/* PORTFOLIO */}
        <Item Icon={Briefcase} route="/portfolio" />

        {/* PROFILE */}
        <Item Icon={User} route="/profile" />
      </div>
    </div>
  );
}