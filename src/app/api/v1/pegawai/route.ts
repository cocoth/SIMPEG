import { NextRequest, NextResponse } from "next/server";
import { Pegawai, PrismaClient } from "@prisma/client";
import { ZodError, z } from "zod";

const prisma = new PrismaClient();

const customDate = z.string().transform((value)=>{
  return new Date(value).toISOString()
})

const pegawaiSchema = z.object({
  nama: z.string({
    required_error: "'nama' is required!",
    invalid_type_error: "'nama' shoud be string!",
  }),
  gender: z.string().optional(),
  alamat: z.string().min(5, {
    message: "'alamat' shoudbe at least 5 letters long!",
  }),
  email: z.string().email({
    message: "invalid email address",
  }),
  no_telp: z.string().min(10, {
    message: "'nomer telefon' shoud be at least 10 digit",
  }),
  jabatan: z.string(),
  tanggal_lahir: customDate,
  status: z.string(),
  tanggal_masuk: customDate,
  gaji_pokok: z.number(),
  tunjangan: z.number(),
  potongan_gaji: z.number(),
  kehadiran: z.number(),
  cuti: z.number(),
});

export const GET = async (req: NextRequest) => {
  try {
    const res = await prisma.pegawai.findMany({
      include: {
        fasilitas: true,
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    return NextResponse.json({ error: "failed to get data!" }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const validateData = pegawaiSchema.parse(body);
    const pegawai = await prisma.pegawai.create({
      data: { ...validateData },
    });
    return NextResponse.json(pegawai, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError)
      return NextResponse.json(
        { error: `please check your data again before submitting` },
        { status: 400 }
      );
    return NextResponse.json({ error: `POST data error!` }, { status: 400 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const { id } = body;
    const pegawai = await prisma.pegawai.update({
      where: { id },
      data: {
        ...body,
      },
    });
    return NextResponse.json(pegawai, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "PATCH data error!" }, { status: 400 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const { id } = body;
    const pegawai = await prisma.pegawai.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(pegawai, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "error to delete!" }, { status: 400 });
  }
};
