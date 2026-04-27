"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { ChevronDown } from "lucide-react";

export default function PortfolioPage() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<any>(null);

  const lime = "#A3FF12";

  const openModal = (item: any) => {
    setData(item);
    setOpen(true);
  };

  return (
    <main className="relative min-h-screen text-white pb-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/img/bg-texture.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 pt-16 flex flex-col items-center">
        <h1 className="text-2xl font-black mb-6 tracking-widest uppercase text-[#A3FF12]">
          PORTFOLIO
        </h1>

        <div className="w-full max-w-md px-4 space-y-4">

          {/* CARD 1 */}
          <Card
            title="APPLICATION SCANNER"
            onClick={() =>
              openModal({
                title: "APK VIDYA SAMBHADA",
                subtitle: "WILSON, LOSIENTO, PIKACUPI, POKEMON.",
                desc: `Lorem ipsum dolor sit amet consectetur. At luctus quis lectus urna amet nunc quis proin pretium. In lacus tortor orci fusce at. Quam cras in elit est ornare dictum. Adipiscing vestibulum sagittis feugiat morbi volutpat sed diam. Ipsum amet lorem enim ultricies adipiscing enim mi. Dignissim nam eget dolor nisi sit. Sodales lorem libero lorem velit ipsum viverra egestas massa enim. Nibh blandit non non amet faucibus lectus aliquam egestas. Eleifend lsa`
              })
            }
          />

          {/* CARD 2 */}
          <Card
            title="APK VIDYA SAMBHADA"
            onClick={() =>
              openModal({
                title: "INI TES KE 2",
                subtitle: "WILSON, LOSIENTO, PIKACUPI, POKEMON.",
                desc: `Lorem ipsum dolor sit amet consectetur. At luctus quis lectus urna amet nunc quis proin pretium. In lacus tortor orci fusce at. Quam cras in elit est ornare dictum. Adipiscing vestibulum sagittis feugiat morbi volutpat sed diam. Ipsum amet lorem enim ultricies adipiscing enim mi. Dignissim nam eget dolor nisi sit. Sodales lorem libero lorem velit ipsum viverra egestas massa enim. Nibh blandit non non amet faucibus lectus aliquam egestas. Eleifend lsa`
              })
            }
          />

        </div>
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">

          {/* OUTER GLOW */}
          <div className="p-[2px] rounded-[28px] bg-[#A3FF12]/80 shadow-[0_0_25px_#A3FF12]">

            {/* INNER CARD */}
            <div className="bg-black rounded-[26px] p-4 relative w-[320px]">

              {/* ICON */}
              <ChevronDown
                className="absolute top-3 right-3 text-[#A3FF12] cursor-pointer"
                size={20}
                onClick={() => setOpen(false)}
              />

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden mb-4">
                <img
                  src="/img/vidya.png"
                  className="w-full h-36 object-cover"
                />
              </div>

              {/* TITLE */}
              <h2 className="text-[#A3FF12] font-extrabold text-lg mb-1">
                {data?.title}
              </h2>

              {/* SUBTITLE */}
              <p className="text-[10px] text-white/60 uppercase mb-3 tracking-wide">
                {data?.subtitle}
              </p>

              {/* DESC */}
              <p className="text-[12px] text-white/80 leading-relaxed">
                {data?.desc}
              </p>

            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </main>
  );
}

/* CARD */
function Card({ title, onClick }: any) {
  return (
    <div className="p-5 rounded-2xl border border-[#A3FF12] flex justify-between items-center bg-black/40 backdrop-blur-xl">
      <div>
        <p className="text-[#A3FF12] font-black uppercase">
          {title}
        </p>
        <p className="text-[10px] text-white/60 font-bold uppercase">
          APRIL 25, 2026
        </p>
      </div>

      <button
        onClick={onClick}
        className="px-4 py-2 rounded-full text-black font-black text-[10px] uppercase bg-[#A3FF12] active:scale-95">
        SEE MORE
      </button>
    </div>
  );
}