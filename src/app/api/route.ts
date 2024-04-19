import { NextRequest, NextResponse } from "next/server";
import { Pegawai, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const res = await prisma.pegawai.findMany({
      include: {
        fasilitas: true
      },
    });
    return NextResponse.json(res);
  } catch (error) {
    throw error;
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body: Pegawai = await req.json();
    const pegawai = await prisma.pegawai.create({
      data: { ...body },
    });
    return NextResponse.json(pegawai);
  } catch (error) {
    throw error;
  }
};

