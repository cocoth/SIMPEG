import { dataPegawai } from "../../../type";

export const data: dataPegawai[] = [...Array(10)].map((_, i) => ({
  no: i + 1,
  nama: `suprianto ${i + 1}`,
  gender: "Laki-Laki",
  no_telp: "098765432123456",
  status: "Aktif",
}));
