import { NextResponse } from 'next/server';

// ✅ KONFIGURASI SUDAH BENAR SESUAI DATABASE KAMU
const DB_CONFIG = {
  user: 'postgres',
  password: 'rafimn0212',   // ⚠️ Pastikan password POSTGRESQL kamu benar
  host: 'localhost',
  port: 5432,
  database: 'web-sa'
};

async function connectDB() {
  const { Client } = require('pg');
  const client = new Client(DB_CONFIG);
  await client.connect();
  return client;
}

export async function POST(req: Request) {
  let client;
  try {
    const { npm, password } = await req.json();

    // 1. Data yang diketik user
    console.log("📥 DATA DARI FORM:");
    console.log("NPM Ketik:", `"${npm}"`, "| Panjang:", npm.length);
    console.log("PW Ketik:", `"${password}"`, "| Panjang:", password.length);

    if (!npm || !password) {
      return NextResponse.json({ success: false, message: 'Harap isi semua kolom!' }, { status: 400 });
    }

    client = await connectDB();

    // 🔍 AMBIL DATA MENTAH DARI DATABASE
    const result = await client.query(
      `
      SELECT 
        u.id, u.username, u.password, u.role,
        p."npm" as npm_peserta,
        s."npm" as npm_sekretaris,
        COALESCE(p."nama", s."nama") as nama
      FROM "User" u
      LEFT JOIN "Peserta" p ON u.id = p."userId"
      LEFT JOIN "Sekretaris" s ON u.id = s."userId"
      WHERE p."npm" = $1 OR s."npm" = $1
      LIMIT 1
      `,
      [npm]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ success: false, message: '❌ AKUN TIDAK DITEMUKAN (Cek NPM!)' }, { status: 404 });
    }

    const user = result.rows[0];

    // 2. Data asli dari Database
    console.log("📤 DATA DARI DATABASE:");
    console.log("PW DB:", `"${user.password}"`, "| Panjang:", user.password?.length);
    console.log("NPM DB (Peserta):", `"${user.npm_peserta}"`);
    console.log("NPM DB (Sekretaris):", `"${user.npm_sekretaris}"`);

    // ✅ BANDINGKAN LANGSUNG + TAMPILKAN HASILNYA
    const cocok = (password === user.password);
    console.log("⚖️ HASIL PERBANDINGAN: COCOK?", cocok);

    if (!cocok) {
      // KIRIM DATA LENGKAP KE LAYAR AGAR KAMU BISA LIHAT
      return NextResponse.json({ 
        success: false, 
        message: `❌ PASSWORD SALAH! 
        ➤ Ketik: [${password}] (${password.length} karakter)
        ➤ DB   : [${user.password}] (${user.password?.length} karakter)`,
        ketik: password,
        db: user.password
      }, { status: 401 });
    }

    // ✅ BERHASIL
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        role: user.role,
        nama: user.nama
      }
    });

  } catch (error: any) {
    console.error('❌ ERROR:', error);
    return NextResponse.json({ success: false, message: `KESALAHAN: ${error.message}` }, { status: 500 });
  } finally {
    if (client) await client.end();
  }
}