'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space',
});
export default function LoginPage() {
  const router = useRouter();
  const [npm, setNpm] = useState<string>('');

  const greenText = '#A3FF12';

  const handleNpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNpm(value);
    }
  };

  return (
    <main className={`${spaceGrotesk.className} relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#080808]`}>
      {/* BACKGROUND TEXTURE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* LOGIN CARD */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-[70%] max-w-md p-8 rounded-[40px] border-2 border-[#A3FF12]/30 bg-black/60 backdrop-blur-xl flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        {/* BACK BUTTON */}
        <button onClick={() => router.push('/')} className="absolute left-8 top-10 text-[#A3FF12] hover:scale-110 transition-transform cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* LOGO */}
        <div className="mb-10 mt-4">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-30 h-30"
            style={{
              filter: `
                drop-shadow(0 0 5px #A3FF12)
                drop-shadow(0 0 5px rgba(163,255,18,0.6))
              `,
            }}
          />
        </div>

        {/* FORM */}
        <form className="w-full space-y-6">
          {/* INPUT NPM */}
          <div className="space-y-2">
            <label className="text-white text-sm font-bold tracking-widest ml-1 uppercase opacity-80">NPM</label>
            <input
              type="text"
              inputMode="numeric"
              value={npm}
              onChange={handleNpmChange}
              placeholder="Masukkan NPM"
              className="w-full bg-black/40 border-2 border-[#A3FF12]/30 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#A3FF12] transition-all"
            />
          </div>

          {/* INPUT PASSWORD */}
          <div className="space-y-2">
            <label className="text-white text-sm font-bold tracking-widest ml-1 uppercase opacity-80">Password</label>
            <input type="password" placeholder="**********" className="w-full bg-black/40 border-2 border-[#A3FF12]/30 rounded-2xl py-4 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-[#A3FF12] transition-all" />
          </div>

          {/* BUTTON LOGIN*/}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => router.push('/home')}
              className="w-1/2 py-4 rounded-full font-black text-black tracking-widest text-lg cursor-pointer"
              style={{
                backgroundColor: greenText,
                boxShadow: `
        0 0 10px #A3FF12,
        0 0 30px rgba(163,255,18,0.6)
      `,
              }}
            >
              LOGIN
            </motion.button>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
