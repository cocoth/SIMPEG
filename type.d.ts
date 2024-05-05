export type dataPegawai = {
  no: number;
  nama: string;
  gender: "Laki-Laki" | "Perempuan";
  alamat: string;
  email: string;
  no_telp: string;
  jabatan: string;
  tanggal_lahir: string;
  foto_profile: blob;
  tanggal_masuk: string;
  gaji_pokok: number;
  tunjangan: number;
  potongan_gaji: number;
  status: "Aktif" | "Tidak Aktif";
  kehadiran: "Hadir" | "Terlambat" | "Izin" | "Cuti";
  cuti: number;
  fasilitas: fasilitasProps[];
};
export type fasilitasProps = {
  nama: string;
  potongan_biaya: number;
  pegawai: dataPegawai[];
};
