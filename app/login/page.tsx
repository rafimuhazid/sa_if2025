'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

type UserData = {
  id: string;
  username: string;
  role: 'SEKRETARIS' | 'PESERTA';
  nama: string;
};

export default function LoginPage() {
  const router = useRouter();

  const [npm, setNpm] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  const green = '#A3FF12';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!npm.trim() || !password.trim()) {
      setAlert({ message: 'Harap isi semua kolom!', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ npm: npm.trim(), password }),
      });

      // Cek apakah response dari server berhasil
      if (!res.ok) {
        const errData = await res.json().catch(() => ({ message: 'Server error' }));
        throw new Error(errData.message || 'Terjadi kesalahan dari server');
      }

      const data = await res.json();

      if (data.success && data.user) {
        setAlert({
          message: `Login Berhasil! Halo, ${data.user.nama}`,
          type: 'success',
        });

        localStorage.setItem('userRole', data.user.role);
        localStorage.setItem('userId', data.user.id);
        localStorage.setItem('userNama', data.user.nama);

        setTimeout(() => {
          if (data.user.role === 'SEKRETARIS') {
            router.push('/admin');
          } else {
            router.push('/home');
          }
        }, 1500);
      } else {
        setAlert({ message: data.message || 'Login gagal!', type: 'error' });
      }
    } catch (err: any) {
      console.error('Login Error:', err);
      // Tampilkan pesan asli error, bukan hanya pesan umum
      setAlert({
        message: err.message || 'Terjadi kesalahan koneksi ke server!',
        type: 'error',
      });
    } finally {
      setLoading(false); // Pastikan loading mati di semua kondisi
    }
  };

  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => setAlert(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  const handleNpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setNpm(value);
  };

  return (
    <main
      className={`${spaceGrotesk.className} relative w-full h-screen flex items-center justify-center bg-[#080808] overflow-hidden`}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/img/bg-texture.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      <AnimatePresence>
        {alert && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            className="absolute top-0 z-50"
          >
            <div
              className={`px-6 py-4 rounded-2xl backdrop-blur-xl border text-white shadow-lg
              ${
                alert.type === 'success'
                  ? 'border-[#A3FF12] bg-[#A3FF12]/10'
                  : 'border-red-400 bg-red-400/10'
              }`}
              style={{
                boxShadow:
                  alert.type === 'success'
                    ? '0 0 15px #A3FF12'
                    : '0 0 15px rgba(255,0,0,0.5)',
              }}
            >
              {alert.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-[40px] border border-[#A3FF12]/30 bg-black/60 backdrop-blur-xl"
      >
        <button
          onClick={() => router.push('/')}
          className="text-[#A3FF12] mb-4 text-xl active:scale-90 transition-transform"
        >
          ←
        </button>

        <div className="flex justify-center mb-6">
          <img src="/img/logo.png" className="w-24" alt="Logo" />
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-white text-sm opacity-60">NPM</label>
            <input
              autoComplete="off"
              value={npm}
              onChange={handleNpmChange}
              className="w-full mt-1 p-4 rounded-xl bg-black/40 border border-[#A3FF12]/30 text-white outline-none focus:border-[#A3FF12] transition-colors"
              placeholder="Masukkan NPM"
              disabled={loading}
              type="text"
              inputMode="numeric"
            />
          </div>

          <div>
            <label className="text-white text-sm opacity-60">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-4 rounded-xl bg-black/40 border border-[#A3FF12]/30 text-white outline-none focus:border-[#A3FF12] transition-colors"
              placeholder="********"
              disabled={loading}
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`w-full py-4 rounded-full font-bold text-black uppercase tracking-widest transition-all ${
              loading ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            style={{
              background: green,
              boxShadow: loading ? 'none' : '0 0 20px #A3FF12',
            }}
          >
            {loading ? 'VERIFYING...' : 'LOGIN'}
          </motion.button>
        </form>
      </motion.div>
    </main>
  );
}