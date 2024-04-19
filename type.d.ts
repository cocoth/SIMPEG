export type dataPegawai={
    no: number,
    nama: string,
    gender: "Laki-Laki" | "Perempuan",
    alamat: string,
    email: string,
    no_telp: string,
    jabatan: string,
    tanggal_lahir: string,
    foto_profile: blob,
    status: "Aktif" | "Tidak Aktif" | "Cuti",
    tanggal_masuk: string,
    gaji_pokok: number,
    tunjangan: number,
    potongan_gaji: number,
    kehadiran: number,
    cuti: number,
    fasilitas: fasilitasProps[],
}
export type fasilitasProps={
    nama: string, 
    potongan_biaya: number,
    pegawai: dataPegawai[],
}
