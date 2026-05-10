import { NextResponse } from 'next/server';

const DB_CONFIG = {
  user: 'postgres',
  password: 'rafimn0212', // ⚠️ Password PostgreSQL kamu
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

// === AMBIL DATA PROFIL ===
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  if (!userId) return NextResponse.json({ success: false, message: 'ID tidak ada' }, { status: 400 });

  let client;
  try {
    client = await connectDB();

    const result = await client.query(
      `
      SELECT 
        u.id, u.username, u.role, u.password,
        COALESCE(p."nama", s."nama") as nama
      FROM "User" u
      LEFT JOIN "Peserta" p ON u.id = p."userId"
      LEFT JOIN "Sekretaris" s ON u.id = s."userId"
      WHERE u.id = $1
      LIMIT 1
      `,
      [userId]
    );

    if (result.rows.length === 0) return NextResponse.json({ success: false, message: 'Tidak ada data' }, { status: 404 });

    const d = result.rows[0];
    return NextResponse.json({
      success: true,
      data: {
        nama: d.nama,
        email: 'belum diatur',
        telepon: 'belum diatur',
        tahun_akademik: '2025/2026',
        foto: '/img/profile.png',
        password_db: d.password // ✅ Ambil password lama untuk cek
      }
    });

  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  } finally {
    if (client) await client.end();
  }
}

// === SIMPAN / UBAH DATA & PASSWORD ===
export async function PUT(req: Request) {
  let client;
  try {
    const { userId, name, oldPassword, newPassword } = await req.json();

    if (!userId) return NextResponse.json({ success: false, message: 'ID tidak ada' }, { status: 400 });

    client = await connectDB();

    // ✅ 1. Cek password lama apakah benar
    if (oldPassword && newPassword) {
      const cekPass = await client.query(`SELECT password FROM "User" WHERE id = $1`, [userId]);
      const passDb = (cekPass.rows[0]?.password || '').trim().toLowerCase();
      const passInput = oldPassword.trim().toLowerCase();

      if (passDb !== passInput) {
        return NextResponse.json({ success: false, message: 'Password lama salah!' }, { status: 401 });
      }

      // ✅ 2. Jika benar, update password baru
      await client.query(`UPDATE "User" SET password = $1, "updatedAt" = NOW() WHERE id = $2`, [newPassword.trim(), userId]);
    }

    // ✅ 3. Tetap simpan perubahan nama (seperti biasa)
    await client.query(`UPDATE "Peserta" SET "nama"=$1, "updatedAt" = NOW() WHERE "userId"=$2`, [name, userId]);

    return NextResponse.json({ success: true, message: 'Data & Password berhasil diperbarui!' });

  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  } finally {
    if (client) await client.end();
  }
}