'use client';

import BottomNav from '../components/BottomNav';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCalendar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { X } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-space',
});

export default function ProfilePage() {
  const lime = '#A3FF12';
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: 'WILSON LOSIENTO',
    email: 'alex.johnson@email.com',
    phone: '+1 555 123',
    year: '2025/2026',
    image: '/img/profile.png',
  });

  const [openEdit, setOpenEdit] = useState(false);
  const [openSignout, setOpenSignout] = useState(false);

  const [form, setForm] = useState(profile);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setForm({
      ...form,
      image: imageUrl,
    });
  };

  const handleSave = () => {
    setProfile(form);
    setOpenEdit(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setOpenSignout(false);
    router.replace('/login');
  };

  return (
    <main className={`${spaceGrotesk.className} relative min-h-screen text-white pb-28`}>
      <div className="absolute inset-0 bg-[url('/img/bg-texture.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 pt-16 flex flex-col items-center">
        {/* FOTO */}
        <img
          src={profile.image}
          className="w-28 h-28 rounded-full object-cover border-2"
          style={{
            borderColor: lime,
            boxShadow: '0 0 20px rgba(163,255,18,0.6)',
          }}
        />

        {/* NAME */}
        <div className="flex items-center gap-2 mt-6 uppercase">
          <FontAwesomeIcon icon={faUser} color={lime} />
          <h2 className="text-xl font-black" style={{ color: lime }}>
            {profile.name}
          </h2>
        </div>

        {/* EDIT */}
        <button
          onClick={() => {
            setForm(profile);
            setOpenEdit(true);
          }}
          className="mt-3 px-6 py-2 rounded-full text-black font-black text-xs uppercase active:scale-95"
          style={{ backgroundColor: lime }}
        >
          EDIT PROFILE
        </button>

        {/* INFO */}
        <div className="mt-8 w-full max-w-md px-4">
          <div className="p-6 rounded-[2rem] border-2 backdrop-blur-xl bg-black/40 space-y-4" style={{ borderColor: lime }}>
            <div className="flex items-center gap-4 text-xs font-bold">
              <FontAwesomeIcon icon={faEnvelope} color={lime} />
              <p>{profile.email}</p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <FontAwesomeIcon icon={faPhone} color={lime} />
              <p>{profile.phone}</p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold">
              <FontAwesomeIcon icon={faCalendar} color={lime} />
              <p>{profile.year}</p>
            </div>
          </div>

          {/* SIGN OUT */}
          <button onClick={() => setOpenSignout(true)} className="w-full mt-6 py-4 border-2 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase" style={{ borderColor: lime, color: lime }}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            SIGN OUT
          </button>
        </div>
      </div>

      {/* POPUP EDIT */}
      {openEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="p-[2px] rounded-[28px] bg-[#A3FF12] shadow-[0_0_25px_#A3FF12]">
            <div className="bg-black rounded-[26px] p-8 pt-10 w-[320px] relative">
              <X className="absolute top-3 right-3 text-[#A3FF12] cursor-pointer" size={20} onClick={() => setOpenEdit(false)} />

              {/* FOTO EDIT */}
              <div className="flex justify-center mb-4">
                <label className="cursor-pointer">
                  <img src={form.image} className="w-20 h-20 rounded-full object-cover border" style={{ borderColor: lime }} />
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <Input label="NAME" name="name" value={form.name} onChange={handleChange} />
              <Input label="PHONE" name="phone" value={form.phone} onChange={handleChange} />

              {/* LOCKED */}
              <Input label="ACADEMIC YEAR" name="year" value={form.year} onChange={handleChange} readOnly />

              <div className="flex justify-center mt-6">
                <button onClick={handleSave} className="px-8 py-2 rounded-full bg-[#A3FF12] text-black font-black text-xs active:scale-95">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POPUP SIGN OUT */}
      {openSignout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="p-[2px] rounded-[20px] bg-[#A3FF12] shadow-[0_0_20px_#A3FF12]">
            <div className="bg-black rounded-[18px] px-6 py-6 w-[280px] text-center">
              <p className="text-[#A3FF12] font-black text-sm mb-4 uppercase">ARE YOU SURE ?</p>

              <div className="flex gap-3">
                <button onClick={() => setOpenSignout(false)} className="flex-1 py-2 rounded-full border text-[#A3FF12] text-xs font-bold" style={{ borderColor: lime }}>
                  MAYBE LATER
                </button>

                <button onClick={handleSignOut} className="flex-1 py-2 rounded-full bg-[#A3FF12] text-black text-xs font-black">
                  YEAH
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </main>
  );
}

function Input({ label, name, value, onChange, readOnly = false }: any) {
  return (
    <div className="mb-4">
      <div className="p-[1.5px] rounded-full bg-[#A3FF12]/70">
        <div className="bg-black rounded-full px-4 py-2 flex justify-between items-center text-xs">
          <span className="text-white/50">{label}</span>
          <input name={name} value={value} onChange={readOnly ? undefined : onChange} readOnly={readOnly} className={`bg-transparent text-right outline-none w-40 ${readOnly ? 'text-white/40 cursor-not-allowed' : 'text-[#A3FF12]'}`} />
        </div>
      </div>
    </div>
  );
}
