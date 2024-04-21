import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type calculateSalaryProps = {
  gaji_pokok: number;
  potongan_gaji: number;
  fasilitas: {
    nama: string;
    potongan_biaya: number;
  }[];
};
type calculateTunjanganProps = {
  gaji_pokok: number;
  fasilitas: {
    potongan_biaya: number;
  };
};

export const useCalculateSalary = async (
  id: number
): Promise<calculateSalaryProps | null> => {
  const pegawai = await prisma.pegawai.findUnique({
    where: {
      id,
    },
    select: {
      gaji_pokok: true,
      potongan_gaji: true,
      fasilitas: {
        select: {
          nama: true,
          potongan_biaya: true,
        },
      },
    },
  });
  if (!pegawai) return null;
  const { gaji_pokok, potongan_gaji, fasilitas } = pegawai;
  return {
    gaji_pokok,
    potongan_gaji,
    fasilitas,
  };
};
export const useCalculateTunjangan = async (
  id: number,
  presentage: number
): Promise<number | null> => {
  const pegawai = await prisma.pegawai.findUnique({
    where: { id },
    select: { gaji_pokok: true },
  });
  if (!pegawai) return null;
  const tunjangan = pegawai.gaji_pokok * (presentage / 100);
  return tunjangan;
};
